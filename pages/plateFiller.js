import PlateFiller from "../modules/plateFiller";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(({ query }) => <PlateFiller query={query} />);
