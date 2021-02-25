import React from "react";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";

const Loader = () => (
  <Dimmer active inverted>
    <SemanticLoader inverted></SemanticLoader>
  </Dimmer>
);

export default Loader;