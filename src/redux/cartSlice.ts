import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  [productId: number]: number;
}

const initialState: CartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state[id] = (state[id] || 1);
    },
    increment: (state, action: PayloadAction<number>) => {
      state[action.payload]++;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state[id] > 1) state[id]--;
    }
  }
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
