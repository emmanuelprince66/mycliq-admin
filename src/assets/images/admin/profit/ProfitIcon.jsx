import React from "react";

const ProfitIcon = ({ isRightLink }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.943 1.25H13.5C13.6989 1.25 13.8897 1.32902 14.0303 1.46967C14.171 1.61032 14.25 1.80109 14.25 2C14.25 2.19891 14.171 2.38968 14.0303 2.53033C13.8897 2.67098 13.6989 2.75 13.5 2.75H12C9.622 2.75 7.914 2.752 6.614 2.926C5.335 3.098 4.564 3.426 3.994 3.995C3.425 4.565 3.098 5.335 2.926 6.614C2.752 7.914 2.75 9.622 2.75 12C2.75 14.378 2.752 16.086 2.926 17.386C3.098 18.665 3.426 19.436 3.995 20.006C4.565 20.575 5.335 20.902 6.614 21.074C7.914 21.248 9.622 21.25 12 21.25C14.378 21.25 16.086 21.248 17.386 21.074C18.665 20.902 19.436 20.574 20.006 20.005C20.575 19.435 20.902 18.665 21.074 17.386C21.248 16.086 21.25 14.378 21.25 12V10.5C21.25 10.3011 21.329 10.1103 21.4697 9.96967C21.6103 9.82902 21.8011 9.75 22 9.75C22.1989 9.75 22.3897 9.82902 22.5303 9.96967C22.671 10.1103 22.75 10.3011 22.75 10.5V12.057C22.75 14.366 22.75 16.175 22.56 17.587C22.366 19.031 21.96 20.171 21.066 21.066C20.171 21.961 19.031 22.366 17.586 22.56C16.175 22.75 14.366 22.75 12.057 22.75H11.943C9.634 22.75 7.825 22.75 6.413 22.56C4.969 22.366 3.829 21.96 2.934 21.066C2.039 20.171 1.634 19.031 1.44 17.586C1.25 16.175 1.25 14.366 1.25 12.057V11.943C1.25 9.634 1.25 7.825 1.44 6.413C1.634 4.969 2.04 3.829 2.934 2.934C3.829 2.039 4.969 1.634 6.414 1.44C7.825 1.25 9.634 1.25 11.943 1.25Z"
          fill={isRightLink ? "white" : "#828282"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.25 5C15.25 4.00544 15.6451 3.05161 16.3483 2.34835C17.0516 1.64509 18.0054 1.25 19 1.25C19.9946 1.25 20.9484 1.64509 21.6517 2.34835C22.3549 3.05161 22.75 4.00544 22.75 5C22.75 5.99456 22.3549 6.94839 21.6517 7.65165C20.9484 8.35491 19.9946 8.75 19 8.75C18.0054 8.75 17.0516 8.35491 16.3483 7.65165C15.6451 6.94839 15.25 5.99456 15.25 5ZM19 2.75C18.7045 2.75 18.4119 2.8082 18.139 2.92127C17.866 3.03434 17.6179 3.20008 17.409 3.40901C17.2001 3.61794 17.0343 3.86598 16.9213 4.13896C16.8082 4.41194 16.75 4.70453 16.75 5C16.75 5.29547 16.8082 5.58806 16.9213 5.86104C17.0343 6.13402 17.2001 6.38206 17.409 6.59099C17.6179 6.79992 17.866 6.96566 18.139 7.07873C18.4119 7.1918 18.7045 7.25 19 7.25C19.5967 7.25 20.169 7.01295 20.591 6.59099C21.0129 6.16903 21.25 5.59674 21.25 5C21.25 4.40326 21.0129 3.83097 20.591 3.40901C20.169 2.98705 19.5967 2.75 19 2.75Z"
          fill={isRightLink ? "white" : "#828282"}
        />
        <path
          d="M13.7492 10C13.7492 10.414 14.0852 10.75 14.4992 10.75H15.1892L13.1762 12.763C13.153 12.7863 13.1254 12.8048 13.095 12.8174C13.0646 12.83 13.0321 12.8364 12.9992 12.8364C12.9663 12.8364 12.9337 12.83 12.9034 12.8174C12.873 12.8048 12.8454 12.7863 12.8222 12.763L11.2362 11.177C10.908 10.8491 10.4631 10.6649 9.99918 10.6649C9.53526 10.6649 9.09033 10.8491 8.76218 11.177L6.46918 13.47C6.39549 13.5387 6.33639 13.6215 6.2954 13.7135C6.2544 13.8055 6.23236 13.9048 6.23059 14.0055C6.22881 14.1062 6.24733 14.2062 6.28505 14.2996C6.32278 14.393 6.37892 14.4778 6.45014 14.549C6.52136 14.6203 6.60619 14.6764 6.69958 14.7141C6.79297 14.7518 6.893 14.7704 6.9937 14.7686C7.0944 14.7668 7.19372 14.7448 7.28571 14.7038C7.37771 14.6628 7.46052 14.6037 7.52918 14.53L9.82218 12.237C9.8454 12.2137 9.87299 12.1952 9.90336 12.1826C9.93373 12.17 9.96629 12.1636 9.99918 12.1636C10.0321 12.1636 10.0646 12.17 10.095 12.1826C10.1254 12.1952 10.153 12.2137 10.1762 12.237L11.7622 13.823C12.0903 14.1509 12.5353 14.3351 12.9992 14.3351C13.4631 14.3351 13.908 14.1509 14.2362 13.823L16.2492 11.811V12.5C16.2492 12.6989 16.3282 12.8897 16.4688 13.0303C16.6095 13.171 16.8003 13.25 16.9992 13.25C17.1981 13.25 17.3889 13.171 17.5295 13.0303C17.6702 12.8897 17.7492 12.6989 17.7492 12.5V10C17.7492 9.80109 17.6702 9.61032 17.5295 9.46967C17.3889 9.32902 17.1981 9.25 16.9992 9.25H14.4992C14.3003 9.25 14.1095 9.32902 13.9688 9.46967C13.8282 9.61032 13.7492 9.80109 13.7492 10Z"
          fill={isRightLink ? "white" : "#828282"}
        />
      </svg>
    </>
  );
};

export default ProfitIcon;
