import PlateFiller from "../modules/PlateFiller";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(({ query }) => <PlateFiller query={query} />);
