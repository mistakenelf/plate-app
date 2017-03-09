// @flow

import BackArrow from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import React from "react";

type Props = {
  url: Object
};

export default ({ url }: Props) => (
  <div>
    <a onClick={() => url.back() || url.push("/")}>
      <IconButton
        iconStyle={{ color: "white" }}
        tooltip="Back"
        tooltipPosition="bottom-center"
      >
        <BackArrow />
      </IconButton>
    </a>
  </div>
);
