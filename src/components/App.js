import React, { Suspense, lazy } from "react";
import "semantic-ui-css/semantic.min.css";
import MenuBar from "./UI/MenuBar";
import Footer from "./UI/Footer";
import Loader from "./UI/Loader";

const App = () => {
  const DollList = lazy(() => import("./Doll/DollList"));

  return (
    <div>
      <MenuBar />
        <Suspense fallback={<Loader />}>
          <DollList />
        </Suspense>
      <Footer />
    </div>
  );
};

export default App;
