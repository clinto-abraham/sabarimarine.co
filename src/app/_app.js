import "@/styles/globals.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-hook-form/queryClient";

// import { QueryClientProvider } from "@/lib/tanstack-query/react-query";
// import { queryClient } from "@/lib/react-hook-form/queryClient";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ThemeProvider } from "./context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
