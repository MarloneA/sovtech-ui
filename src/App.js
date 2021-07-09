import React, { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import Loading from "./components/pages/Loader";
import AppRoutes from "./components/routes";
import VendorStyles from "./VendorStyles";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{}}>
        <Suspense loader={<Loading />}>
          <AppRoutes />
        </Suspense>
        <VendorStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
