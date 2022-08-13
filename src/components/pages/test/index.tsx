import React from "react";
import CreateList from "../../UI/createList";
import ShareList from "../../UI/shareList";

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
      <ShareList
        users={[
          { email: "kraxtv471365@gmail.com" },
          { email: "maincraft@gmail.com" },
        ]}
      />
    </div>
  );
};

export default Test;
