import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Will provide us with our api calls and acts as state management */}
    <QueryClientProvider client={queryClient}>
      {/* So we can use the css components */}
      <ChakraProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
