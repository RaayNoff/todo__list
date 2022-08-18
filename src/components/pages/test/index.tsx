import { FC } from "react";
import CreateList from "../../UI/createList";

const Test: FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CreateList></CreateList>
    </div>
  );
};

export default Test;
