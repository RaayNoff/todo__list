import { FC } from "react";
import Commentary from "../../UI/commentary";
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
      <Commentary
        date="2 авг 18:01"
        content="Сделать задание по русскому языку 5 параграфСделать задание по русскому языку 5 параграфСделать задание по русскому языку 5 параграфСделать задание по русскому языку 5 параграф"
        email="kraxtv47135@gmail.com"
      />
    </div>
  );
};

export default Test;
