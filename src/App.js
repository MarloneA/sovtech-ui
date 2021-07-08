import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Loading from "./components/pages/Loader";
import AppRoutes from "./components/routes";
import VendorStyles from "./VendorStyles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Suspense loader={<Loading />}>
          <AppRoutes />
        </Suspense>
        <VendorStyles />
      </ThemeProvider>
    </>
  );
};
export default App;
