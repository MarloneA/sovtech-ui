import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Loading from "../components/pages/Loader";
import AppRoutes from "./routes";
import VendorStyles from "../VendorStyles";

const App = () => {
  return (
    <>
      <Suspense loader={<Loading />}>
        <AppRoutes />
      </Suspense>
      <ThemeProvider theme={{}}>
        <VendorStyles />
      </ThemeProvider>
    </>
  );
};
export default App;
