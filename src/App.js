import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Options from "./components/Options";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [animationParent] = useAutoAnimate();
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
    <div className="App" ref={animationParent}>
      <Header />
      <div style={{ zIndex: 0 }} className="sticky-top">
        <Options data={data} updateData={setData} />
      </div>
      <Content data={data} />
    </div>
  );
}

export default App;
