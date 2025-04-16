// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cart from "@/lib/redux/features/cart";

export const store = configureStore({
  reducer: {
    cart: cart,
  },
});
