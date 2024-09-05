import { createSlice } from '@reduxjs/toolkit';

// إنشاء Slice يحتوي على الحالة الأولية (initialState) والدوال التي تقوم بتعديل الحالة
export const DoctorSlice = createSlice({
  name: 'Doctor',  // اسم الـ Slice
  initialState: { DocInfo: [] },  
  reducers: {
    AddDoc: (state, action) => {
      state.DocInfo=action.payload;  
    },
    RemoveDoc: (state) => {
        state.DocInfo=[]; 
    },

  }
});

export const { AddDoc, RemoveDoc } = DoctorSlice.actions;

// تصدير الـ reducer لاستخدامه في الـ Store
export default DoctorSlice.reducer;