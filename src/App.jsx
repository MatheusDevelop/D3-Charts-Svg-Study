import { useState } from "react";
import LineChart from "./LineChart";
import Smile from "./Smile";

function App() {
  const [page, setPage] = useState(2);
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {page == 1 && <Smile />}
        {page == 2 && <LineChart />}
      </div>
      <div style={{ position: "fixed", top: 25, left: 25 }}>
        <button onClick={() => setPage(1)}>Smile</button>
        <button onClick={() => setPage(2)}>LineChart</button>
      </div>
    </>
  );
}

export default App;
