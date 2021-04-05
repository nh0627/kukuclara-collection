import React, { Suspense, lazy } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MenuBar from "./Header/MenuBar";
import Footer from "./Footer";
import Loader from "./Loader";
import Logo from "./Header/Logo";

const App = () => {
  const DollList = lazy(() => import("./Doll/DollList"));

  return (
    <div>
      <Logo />
      <MenuBar />
      <Suspense fallback={<Loader />}>
        <DollList />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
