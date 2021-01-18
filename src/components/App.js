import React, { Suspense, lazy } from "react";
import MenuBar from "./UI/MenuBar";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Loader from "./UI/Loader";

const App = () => {
  const DollList = lazy(() => import("./Doll/DollList"));

  return (
    <div>
      <MenuBar />
        <Suspense fallback={<Loader />}>
          <DollList />
        </Suspense>
    </div>
  );
};

export default App;
