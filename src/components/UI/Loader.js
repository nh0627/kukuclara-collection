import React from "react";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";

const Loader = () => (
  <Dimmer active inverted>
    <SemanticLoader inverted>Loading</SemanticLoader>
  </Dimmer>
);

export default Loader;