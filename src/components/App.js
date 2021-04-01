import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MenuBar from "./Header/MenuBar";
import Footer from "./Footer";
import Loader from "./Loader";
import Logo from "./Header/Logo";

const App = () => {
  const DollList = lazy(() => import("./Doll/DollList"));

  // Todo: Consider layout HOC
  const PageComponent = Component => Object.assign(() => {
    return (
      <div>
        <Logo />
        <MenuBar />
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
        <Footer />
      </div>
    )
  }, { displayName: "test" });

  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageComponent(DollList)} />
          <Route path="/signin" exact component={PageComponent()} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
