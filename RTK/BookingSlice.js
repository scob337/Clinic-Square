import { createSlice } from '@reduxjs/toolkit';

// إنشاء Slice يحتوي على الحالة الأولية (initialState) والدوال التي تقوم بتعديل الحالة
export const Booking = createSlice({
  name: 'Booking',  // اسم الـ Slice
  initialState: { BookingInfo: {
    patientName: '',
    date: '',
    time: '',
    Adress: '',
  } },  
  reducers: {
    AddBooking: (state, action) => {
      state.BookingInfo=action.payload; 
    },
    RemoveBooking: (state) => {
        state.BookingInfo={
            patientName: '',
            date: '',
            time: '',
            Adress: '',
        }; 
    },

  }
});

export const { AddBooking, RemoveBooking } = Booking.actions;

// تصدير الـ reducer لاستخدامه في الـ Store
export default Booking.reducer;
