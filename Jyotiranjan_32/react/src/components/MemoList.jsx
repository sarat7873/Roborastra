import { memo } from "react";

function MemoList({ item }) {
  return <div>{item}</div>;
}

export default memo(MemoList);
