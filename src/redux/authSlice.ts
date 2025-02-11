import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  authenticated: boolean;
  email:string;
  password:string;
}

const initialState: AuthState = {
  authenticated: false,
  email:'',
  password:'',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.authenticated = action.payload;
    },
    setAccountEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setAccountPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { setAuthenticated, setAccountEmail, setAccountPassword } = authSlice.actions;
export default authSlice.reducer;
