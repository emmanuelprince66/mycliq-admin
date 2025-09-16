import React, { useEffect, useState } from "react";
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
  RadioGroup,
  Paper,
  FormControlLabel,
  CircularProgress,
  Table,
  TableCell,
} from "@mui/material";
import NotiDetails from "./NotiDetails";

import CustomPagination from "./CustomPagination";

const NotiHistory = ({notiHistory ,rowsPerPage , totalPages , currentPage , onPageChange , historyLoading}) => {
  const [notiDetails, setNotiDetails] = useState(false);
  const handleCloseNotiDetails = () => setNotiDetails(false);

  const [notiId , setNotiId] = useState("")

  const [notiItem , setNotiItem  ] =  useState(null)





  const handleEdit = (item) => {
    setNotiDetails(true)
    setNotiItem(item)
  }



  return (
    <Box className="p-3 overflow-y-auto max-h-[60vh] flex flex-col mt-2 items-start w-[100%] gap-3">
   


      {historyLoading ? (
                      <Table>
                        <TableCell colSpan={8} align="left">
                          <CircularProgress
                            size="4.2rem"
                            sx={{
                              color: "#DC0019",
                              marginLeft: "auto",
                              padding: "1em",
                            }}
                          />
                        </TableCell>
                      </Table>
                    ) : notiHistory &&
                      Array.isArray(notiHistory.records) &&
                      notiHistory.records.length > 0 ? (
                      notiHistory.records.map((item, i) => (
                        <Box className="w-full flex gap-3 items-center justify-between mb-3" key={item?.id}>
                        <Box className=" w-full gap-5 flex items-center ">
                          <span>{i + 1 + (currentPage - 1) * rowsPerPage}.</span>
                          <Box className=" flex-col flex items-start gap-2">
                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "600",
                                fontSize: "15px",
                              }}
                            >
                             {item?.title}🔥😎🎉
                            </Typography>
                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "400",
                                fontSize: "13px",
                                flexWrap: "wrap",
                              }}
                            >
                            {item?.body} 🎉
                            </Typography>
                
                            <Box className="flex gap-2 items-center">
                              <Typography
                                sx={{
                                  color: "#1E1E1E",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                }}
                              >
                                sent to{" "}
                                <span
                                  className={`p-1 px-2 rounded-full 
                                  bg-orange-200 text-orange-500
                                 text-[10px]`}
                                >
                                  {item?.topic}
                                </span>
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#1E1E1E",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                }}
                              >
                                By{" "}
                                <span
                                  className={` 
                                
                                 text-[10px]`}
                                >
                                 {item?.admin?.lastName} 
                                 {" "}
                                 {item?.admin?.firstName}
                                 ({item?.admin?.role})
                                </span>
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#1E1E1E",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                }}
                              >
                                |
                                <span
                                  className={` 
                                ml-3
                                 text-[10px]`}
                                >
                                no date sent yet"
                                </span>
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                
                        <Button
                        onClick={() =>  handleEdit(item)}
                          sx={{
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "8px",
                            width: "100%",
                            flex: "1",
                            borderColor: "#333333",
                
                            color: "#000",
                            "&:hover": {
                              borderColor: "#FF7F00",
                            },
                            textTransform: "capitalize",
                            fontWeight: "500",
                          }}
                          variant="outlined"
                        >
                          View
                        </Button>
                      </Box>
                      ))
                    ) : (
                        <div className="flex justify-start">
                          No data found
                        </div>
                    )}

<CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />


      {/* Modal for  discount details */}

      <Modal
        open={notiDetails}
        onClose={handleCloseNotiDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <NotiDetails notiItem={notiItem} handleCloseNotiDetails={handleCloseNotiDetails} />
      </Modal>
      {/* Modal discount ends */}
    </Box>
  );
};

export default NotiHistory;
