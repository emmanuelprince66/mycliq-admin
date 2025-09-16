import { createSlice } from "@reduxjs/toolkit";

const merchantSlice = createSlice({
  name: "merchantDetails",

  initialState: {
    userDetails: {},
    transactionDetails: {},
    customersData:{},
    bankDetails: {},
    selectedDates: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
    bills: [],
  },
  reducers: {
    fillUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    fillSelectedDates: (state, action) => {
      state.selectedDates = action.payload;
    },
    fillCustomersData: (state, action) => {
      state.customersData = action.payload;
    },
    fillBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    saveTransactionData: (state, action) => {
      state.transactionDetails = action.payload;
    },
    fillBills: (state, action) => {
      state.bills = action.payload;
    },
  },
  clearMerchantState: (state, action) => {
    return {
      ...state,
      userDetails: {},
    };
  },
});

export const {
  fillUserDetails,
  fillSelectedDates,
  selectedDates,
  fillBankDetails,
  fillCustomersData,
  fillBills,
  saveTransactionData,
  userDetails,
  clearMerchantState,
} = merchantSlice.actions;
export default merchantSlice.reducer;
