import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Options from "./components/Options";

function App() {
  const [data, setData] = useState({
    flip: false,
    invert: false,
    position: false,
    color: "#ffffff",
    shape: "waves",
    height: 150,
    width: 100,
  });

  return (
    <div className="App">
      <Header />
      <div className="sticky-top">
        <Options data={data} updateData={setData} />
      </div>
      <Content data={data} />
    </div>
  );
}

export default App;
