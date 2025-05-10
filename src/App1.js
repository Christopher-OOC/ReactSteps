import { useState } from "react";
import "./index1.css";

export default function App1() {
  const [boxIds, setBoxIds] = useState([1, 2, 3, 4]);

  function handleBoxClick(boxId) {
    const newList = boxIds.filter((id) => id !== boxId);
    newList.unshift(boxId);
    setBoxIds((boxIds) => newList);
  }

  return (
    <div className="main">
      <div className="container">
        {boxIds.map((id) => (
          <Box boxId={id} handleBoxClick={handleBoxClick} />
        ))}
      </div>
    </div>
  );
}

function Box({ boxId, handleBoxClick }) {
  return (
    <div
      className={`container__box container__box--${boxId}`}
      onClick={() => handleBoxClick(boxId)}
      data-id={`${boxId}`}
    >
      Box {boxId}
    </div>
  );
}
