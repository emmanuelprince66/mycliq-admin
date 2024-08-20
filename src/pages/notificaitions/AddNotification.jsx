import React from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import {
  Box,
  Button,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  Modal,
  FormControl,
  Backdrop,
  CircularProgress,
  RadioGroup,
  Paper,
  FormControlLabel,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useState , useEffect } from "react";
import { AuthAxios } from "../../helpers/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import closeIcon from "../../assets/images/closeIcon.svg";
import exLogo from '../../assets/exLogo.svg'



const AddNotification = ({ selectedOption}) => {
  const [headline, setHeadline] = useState('');
  const [headlineCount, setHeadlineCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [message, setMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [openNotiModal , setOpenNotiModal] = useState(false)
  const closeNotiModal = () => setOpenNotiModal(false)
  const notifyErr = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
// mutation
const mutationNoti = useMutation({
  mutationFn: async (payload) => {
    try {
      const response = await AuthAxios({
        url: "/admin/system/broadcast-notification",
        method: "POST",
        data: payload,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      setDisableButton(false);
      notifyErr(error.response.data.message);
      throw new Error(error.response);
    }
  },
  onSuccess: (response) => {
    notify(response.message);
    setDisableButton(false);
    closeNotiModal()
  },
  onError: (error) => {
    setButtonDisabled(false);
  },
});

  useEffect(() => {
    setHeadlineCount(headline.length);
  }, [headline]);

  useEffect(() => {
    setMessageCount(message.length);
  }, [message]);

  const handleHeadlineChange = (event) => {
    const value = event.target.value;
    if (value.length <= 30) {
      setHeadline(value);
    }
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 120) {
      setMessage(value);
    }
  };

  const handleSubmitNoti  = () => {

    const payload = {
       title:headline,
       body:message,
       channel:"users"
    }


    mutationNoti.mutate(payload)
    setDisableButton(true)


  }
  return (
    <>
      <Box className="flex flex-col mt-2 items-start w-[100%] gap-3 border border-grey-500  overflow-y-auto max-h-[60vh] rounded-md p-3  pb-3">
        <CreateRoundedIcon
          sx={{
            color: "#fff",
            p: "3px",
            borderRadius: "50px",
            background: "#333333",
          }}
        />

        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Write Message
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
            mb: "15px",
          }}
        >
          Type in the notification content.
        </Typography>

        <Box className="flex w-full items-center justify-between">
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Headline
          </Typography>
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            {headlineCount}/30
          </Typography>
        </Box>
        <TextField
          required
          value={headline}
          onChange={handleHeadlineChange}
          placeholder="Enter Headline"
          
          fullWidth
          sx={{
            "& .MuiInputBase-root": { borderRadius: "8px" },
            "& .MuiInputBase-input": { padding: "12px  " },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333333", // Set the desired border color here
              },
              "&:hover fieldset": {
                borderColor: "#333333", // Set the border color on hover here
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF7F00", // Set the border color on focus here
              },
            },
          }}
          id="email"
        />
        <Box className="flex w-full items-center justify-between">
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Message Body
          </Typography>
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            {messageCount}/120
          </Typography>
        </Box>
        <TextField
          required
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter Message"
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { padding: "12px  " },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333333",
                height: "100px",
                // Set the desired border color here
              },
              "&:hover fieldset": {
                borderColor: "#333333", // Set the border color on hover here
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF7F00", // Set the border color on focus here
              },
            },
          }}
          id="email"
        />
        <Button
        onClick={() => setOpenNotiModal(true)}
          sx={{
            background: "#333333",
            padding: "10px",
            borderRadius: "8px",
            mt: "10px",
            width: "100%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#333333",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
        >
          <SendRoundedIcon
            sx={{
              mr: "1rem",
            }}
          />{" "}
          Send Push To Notification
        </Button>
      </Box>

      <Modal
        open={openNotiModal}
        onClose={closeNotiModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          invisible: true,
          onClick: closeNotiModal,
        }}
        disableBackdropClick
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "12px",
            width: "745px",
            bgcolor: "background.paper",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"space-between",
              mb: "2rem",
            }}
          >
            <p className="font-[500] text-[20px] text-[#1e1e1e]">Sure to send?</p>
            <Box onClick={closeNotiModal} className="cursor-pointer">
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>


    <p className="font-[400] text-[16px] text-[#4f4f4f]"
    >
      Are you sure you want to send this notification to the selected category of users?
    </p>
    <div className="w-full flex p-3 items-start bg-[#FFFAEB] rounded-md gap-4 mt-4">
      <img src={exLogo} alt="ex" />
      <p className="font-[400] text-[14px] text-[#cda11e]">
      Please proofread notification content and confirm that you are targeting the right audience. Notifications cannot be recalled once sent. 
      </p>
    </div>



    <div className="w-full flex items-center gap-6 mt-5 justify-between">
    <Button
    onClick={closeNotiModal}
                sx={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #BDBDBD",
                  color: "#F78105",
                  borderColor: "#BDBDBD",
                  "&:hover": {
                    borderColor: "#BDBDBD",
                  },
                }}
                variant="outlined"
              >
                Cancel
              </Button>
    <Button
    onClick={handleSubmitNoti}
    disabled={disableButton || mutationNoti.isLoading}
          sx={{
            background: "#333333",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#333333",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
        >
               {mutationNoti.isLoading || disableButton ? (
            <CircularProgress size="1.2rem" sx={{ color: "white" }} />
          ) : (
            <>
                <SendRoundedIcon
            sx={{
              mr: "1rem",
            }}
          />{" "}
          Yes ,Send Notification
            </>
          )}
      
        </Button>
    </div>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AddNotification;
