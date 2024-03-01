
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import 'remixicon/fonts/remixicon.css'
function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
