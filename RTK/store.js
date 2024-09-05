import { configureStore } from '@reduxjs/toolkit';
import DoctoroctorReducer from './DoctorSlice'
export const store = configureStore({
  reducer: {
    doctor: DoctoroctorReducer,  // ربط الـ reducer بالـ store
  },
});