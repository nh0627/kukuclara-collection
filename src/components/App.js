import React, { Suspense, lazy } from "react";
import MenuBar from "./UI/MenuBar";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Loader from "./UI/Loader";
import "./style.css"

const App = () => {
  const DollList = lazy(() => import("./Doll/DollList"));

  return (
    <div>
      <MenuBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <DollList />
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
