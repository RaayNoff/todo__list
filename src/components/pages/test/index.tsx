import React from "react";
import CreateList from "../../UI/createList";
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
      <CreateList />
    </div>
  );
};

export default Test;
