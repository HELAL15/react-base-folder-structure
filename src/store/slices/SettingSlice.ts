import { createSlice } from '@reduxjs/toolkit';

// Define the Setting State
interface SettingState {
  setting: Record<string, any>;
}

// Initial state
const initialState: SettingState = {
  setting: {},
};



// Create the Setting Slice
const SettingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setSetting: (state, action) => {
      state.setting = action.payload;
    },
  },

});

// Export actions and reducer
export const { setSetting } = SettingSlice.actions;
export default SettingSlice.reducer;
