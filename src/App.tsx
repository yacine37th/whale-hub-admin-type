import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NormalPackUsers from "./services/NormalPackUsers";
import GoldenPackUsers from "./services/GoldenPackUsers";
import DiamandPackUsers from "./services/DiamandPackUsers";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <>
      {/* <button onClick={showToast}>Submit</button> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normalPackUsers" element={<NormalPackUsers />} />
        <Route path="/goldenPackUsers" element={<GoldenPackUsers />} />
        <Route path="/diamandPackUsers" element={<DiamandPackUsers />} />
      </Routes>
    </>
  );
};

export default App;
