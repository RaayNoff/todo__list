import React from "react";

interface ListUtilProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function ListUtil<T>(props: ListUtilProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
