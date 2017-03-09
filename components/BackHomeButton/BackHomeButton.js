import BackArrow from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import Link from "next/link";
import React from "react";

export default () => (
  <Link prefetch href="/">
    <a>
      <IconButton
        iconStyle={{ color: "white" }}
        tooltip="Back Home"
        tooltipPosition="bottom-center"
      >
        <BackArrow />
      </IconButton>
    </a>
  </Link>
);
