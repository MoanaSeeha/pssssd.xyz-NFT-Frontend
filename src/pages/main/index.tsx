import React from "react";

import Container from "./Container";
import Info from "./Info";

const Main = () => {
  return (
    <div className="main pt-52 md:pt-32 lg:pt-28 relative overflow-x-hidden">
      <Container/>
      <Info/>
    </div>
  )
}

export default Main