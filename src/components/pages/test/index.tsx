import { FC, useState } from "react";
import ListInfo from "../../UI/listInfo";

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
