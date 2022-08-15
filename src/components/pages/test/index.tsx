import React from "react";
import CreateList from "../../UI/createList";
import Grouper from "../../UI/grouper";
import List from "../../UI/list";
import ShareList from "../../UI/shareList";

type Props = {};

const Test = (props: Props) => {
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
      {/* <Grouper groupName="Общие">
        <List listColor="#553fdb" listName="Задачи по институту" />
        <List listColor="#553fdb" listName="Задачи по институту" />
        <List listColor="#553fdb" listName="Задачи по институту" />
        <List listColor="#553fdb" listName="Задачи по институту" />
      </Grouper> */}
      <CreateList></CreateList>
    </div>
  );
};

export default Test;
