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
        backgroundColor: "#525252",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ListInfo listId={1} taskId={1} setStatus={setStatus} status={status} />
    </div>
  );
};

export default Test;
