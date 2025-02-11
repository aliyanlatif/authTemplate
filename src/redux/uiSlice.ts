import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  loading: boolean;
  loadingMessage: string;
}

const initialState: UIState = {
  loading: false,
  loadingMessage: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      if (!action.payload) {
        state.loadingMessage = '';
      }
    },
    setLoadingMessage(state, action: PayloadAction<string>) {
      state.loadingMessage = action.payload;
    },
  },
});

export const { setLoading, setLoadingMessage } = uiSlice.actions;
export default uiSlice.reducer;
