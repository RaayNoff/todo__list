import React from "react";
import Tip from "../../UI/tip";

type Props = {};

const Test = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tip tipState={[false, true, true]}></Tip>
    </div>
  );
};

export default Test;
