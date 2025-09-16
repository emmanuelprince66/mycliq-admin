import React from "react";
import closeIcon from "../assets/images/closeIcon.svg";
import { Box, Button, Typography } from "@mui/material";
const DepositDetails = ({ setDepositDetails }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  return (
    <Box sx={style}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "2rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            color: "#1E1E1E",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Transaction Details
        </Typography>

        <Box
          onClick={() => setDepositDetails(false)}
          className="cursor-pointer"
        >
          <img src={closeIcon} alt="c-icon" />
        </Box>
      </Box>

      {/* stale data */}
      <Box
        sx={{
          width: "100%",
          border: "1px solid #E0E0E0",
          p: "20px",
          display: "flex",
          flexDirection: "column",
          gap: ".4em",
          justifyContent: "start",
          borderRadius: "8px",
          my: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            User:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transferFrom?.lastName +
              " " +
              details?.transferFrom?.firstName ?? " ..."} */}
            emma
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Email Address:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transferFrom?.email ?? " ..."} */}emma@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Phone Number:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transferFrom?.phoneNumber ?? " ..."} */}08166226622
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Category:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transferFrom?.role ?? " ..."} */} cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction Type:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transactionType ?? "..."} */}Withdrawal
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction ID:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transactionRef ?? "..."} */}SN30000SS00S
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Date & Time:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {modDate(details?.createdAt)} */}20-11-20024
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Recipient:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transferFrom?.phoneNumber ?? "..."} */}09126626222
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Amount:
          </Typography>

          <Typography
            sx={{
              color: "#CDA11E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* N {details?.amount ?? "..."} */}3000
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction Status:
          </Typography>

          <Typography
            sx={{
              color: "#1e1e1e",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {/* {details?.transactionStatus ?? "..."} */} success
          </Typography>
        </Box>
      </Box>
      {/* state data end */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          //   onClick={handleClose1}
          sx={{
            background: "#dc0019",
            padding: "10px",
            borderRadius: "8px",
            gap: "6px",
            textTransform: "capitalize",
            width: "50%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#dc0019",
            },
          }}
        >
          Close
        </Button>
      </Box>

      {/* es */}
      {/* 
   <Box
     sx={{
       width: "100%",
       background: "#fff",
       border: "1px solid #E0E0E0",
       p: "20px",
       display: "flex",
       gap:'.3em',
       flexDirection: "column",
       justifyContent: "start",
       borderRadius: "8px",
     }}
   >


     <Box
       sx={{
         display: "flex",
         gap: "2rem",
         alignItems: "center",
         mt: "1rem",
         mb: "0.2rem",
       }}
     >
       <Typography
         sx={{
           fontWeight: "500",
           color: "#828282",
           fontSize: "14px",
           minWidth: "130px",
         }}
       >
         Bill Type:
       </Typography>

       <Typography
         sx={{
           color: "#1E1E1E",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
        {details?.remittance?.bill?.billName ?? '...'}
       </Typography>
     </Box>
     <Box
       sx={{
         display: "flex",
         gap: "2rem",
         alignItems: "center",
       }}
     >
       <Typography
         sx={{
           fontWeight: "500",
           color: "#828282",
           fontSize: "14px",
           minWidth: "130px",
         }}
       >
         Transaction ID:
       </Typography>

       <Typography
         sx={{
           color: "#1E1E1E",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
         {details?.transactionRef ?? '...'}
       </Typography>
     </Box>
     <Box
       sx={{
         display: "flex",
         gap: "2rem",
         alignItems: "center",
         mb: "0.2rem",
       }}
     >
       <Typography
         sx={{
           fontWeight: "500",
           color: "#828282",
           fontSize: "14px",
           minWidth: "130px",
         }}
       >
         Date & Time:
       </Typography>

       <Typography
         sx={{
           color: "#1E1E1E",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
         {modDate(details?.createdAt)?? '...'}
       </Typography>
     </Box>
     <Box
       sx={{
         display: "flex",
         gap: "2rem",
         alignItems: "center",
         mb: "0.2rem",
       }}
     >
       <Typography
         sx={{
           fontWeight: "500",
           color: "#828282",
           fontSize: "14px",
           minWidth: "130px",
         }}
       >
         Amount:
       </Typography>

       <Typography
         sx={{
           color: "#C57600",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
         ₦{details?.amount ?? 
          '...'}
       </Typography>
     </Box>
     <Box
       sx={{
         display: "flex",
         gap: "2rem",
         alignItems: "center",
         mb: "0.2rem",
       }}
     >
       <Typography
         sx={{
           fontWeight: "500",
           color: "#828282",
           fontSize: "14px",
           minWidth: "130px",
         }}
       >
         Transaction Status:
       </Typography>

       <Box
         sx={{
           textTransform: "capitalize",
           color: "#DC0019",
           background: "#EBF3FF",
           color: "#1367D8",
           minWidth: "87px",
           fontWeight: "500",
           fontSize: "12px",
           border: "none",
           padding: "4px 8px 4px 8px",
           borderRadius: "8px",
           display: "flex",
           alignItems: "center",
           gap: "5px",
           border: "1px solid #E0E0E0",
         }}
       >
         <CheckCircleOutlineRoundedIcon sx={{ fontSize: "12px" }} />{" "}
{                  details?.remittance?.paymentStatus
}                </Box>
     </Box>
   </Box> */}
    </Box>
  );
};

export default DepositDetails;
