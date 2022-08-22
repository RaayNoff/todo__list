import { FC, useEffect, useState } from "react";
import CreateTask from "../../UI/createTask";
import DatePick from "../../UI/datePick";

const Test: FC = () => {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    console.log(timestamp);
  }, [timestamp]);
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
      <CreateTask listId={1} />
    </div>
  );
};

export default Test;
