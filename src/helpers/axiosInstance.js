import Axios from "axios";
import { getCookie, setCookie } from "../utils/cookieAuth";

// Axios instance for API calls
export const AuthAxios = Axios.create({
  baseURL: "https://mycliq-staging-6cffceb00c13.herokuapp.com/api/",
  withCredentials: false,
});

// Axios instance for authentication related calls
export const BaseAxios = Axios.create({
  baseURL: "https://mycliq-staging-6cffceb00c13.herokuapp.com/api/",
  withCredentials: false,
});

let isRefreshing = false;
let refreshSubscribers = [];

// Function to refresh the access token using the refresh token
async function refreshToken() {
  console.log("Attempting to refresh token...");
  const refreshToken = getCookie("refreshToken");
  console.log(refreshToken, "ochigbo");
  // Check if refreshToken exists and is a string
  if (
    typeof refreshToken !== "string" ||
    !refreshToken ||
    refreshToken === null
  ) {
    console.log("Refresh token is not available or not a string.");
    // Handle the error appropriately
    // For example, redirect to login or show an error message
    throw new Error("Refresh token is invalid or missing.");
  }

  try {
    const response = await BaseAxios.post(
      "/auth/refresh",
      {
        refreshToken: getCookie("refreshToken"),
      },
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    console.log("Token refreshed:", response.data);

    // Assuming response.data contains the new access token and optionally a new refresh token
    setCookie("authToken", response.data.access_token);
    if (response.data.refreshToken) {
      setCookie("refreshToken", response.data.refreshToken);
    }

    return response.data.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    // Depending on your application's flow, you may want to handle this differently
    throw error;
  }
}

// Function to add subscribers that will be notified when the token is refreshed
function onAccessTokenFetched(newAccessToken) {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
}

// Add request interceptor to include the token in every request
AuthAxios.interceptors.request.use(
  async (config) => {
    const token = getCookie("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle token expiration
AuthAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response: { status } = {} } = error;
    if (status === 401 && !config._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        return refreshToken()
          .then((newAccessToken) => {
            isRefreshing = false;
            onAccessTokenFetched(newAccessToken);

            // Update the original request with the new access token and retry
            config.headers["Authorization"] = `Bearer ${newAccessToken}`;
            config._retry = true;
            return AuthAxios(config);
          })
          .catch((refreshError) => {
            console.error("Token refresh failed:", refreshError);
            isRefreshing = false;
            // Handle failed refresh here (e.g., redirect to login)
          });
      }

      // Wait for the token refresh to complete, then retry the failed request
      return new Promise((resolve) => {
        refreshSubscribers.push((newAccessToken) => {
          config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          resolve(AuthAxios(config));
        });
      });
    }

    return Promise.reject(error);
  }
);

// Usage example
// AuthAxios.get('/some/protected/endpoint').then(response => {
//   console.log(response.data);
// }).catch(error => {
//   console.error('API call error:', error);
// });
