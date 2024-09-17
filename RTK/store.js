import { configureStore } from "@reduxjs/toolkit";
import DoctoroctorReducer from "./DoctorSlice.js";
import Booking from "./BookingSlice.js";
export const store = configureStore({
	reducer: {
		doctor: DoctoroctorReducer,
		booking: Booking,
	},
});
