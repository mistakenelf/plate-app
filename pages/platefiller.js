import PlateFiller from "../modules/PlateFiller";
import React from "react";
import withData from "../lib/withData";

export default withData(({ query }) => <PlateFiller query={query} />);
