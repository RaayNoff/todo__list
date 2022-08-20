import { FC, useState } from "react";
import Checkbox from "../../UI/checkbox";
import Commentary from "../../UI/commentary";
import CommentaryArea from "../../UI/commentaryArea";
import CreateList from "../../UI/createList";
import Endtime from "../../UI/endtime";
import ListInfo from "../../UI/listInfo";
import List from "../../utils/List";

const Test: FC = () => {
  const [status, setStatus] = useState<boolean>(false);
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
      {/* <ListInfo listId={1} taskId={1} /> */}
      <Checkbox status={status} setStatus={setStatus} color={"#b736f3"} />
    </div>
  );
};

export default Test;
