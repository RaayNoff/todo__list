import { FC } from "react";
import Commentary from "../../UI/commentary";
import CommentaryArea from "../../UI/commentaryArea";
import CreateList from "../../UI/createList";
import ListInfo from "../../UI/listInfo";

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
      <CommentaryArea taskId="1" />
    </div>
  );
};

export default Test;
