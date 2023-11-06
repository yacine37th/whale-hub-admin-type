import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NormalPackUsers from "./services/NormalPackUsers";
import GoldenPackUsers from "./services/GoldenPackUsers";
import DiamandPackUsers from "./services/DiamandPackUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
// import NetworkConnection from "./services/NetworkConnection";

const App: React.FC = () => {
  const [status, setStatus] = useState<boolean>(() => {
    if (navigator.onLine) {
      console.log("Connected to network.");
      return true;
    } else {
      return false;
    }
  });
  useEffect(() => {
    window.ononline = (e) => {
      console.log("Connected to network.");
      setStatus(true);
      console.log('====================================');
      console.log(e);
      console.log('====================================');
    };
    window.onoffline = (e) => {
      console.log("Network connection lost.");
      setStatus(false);
      console.log(e);
      console.log('====================================');
    };
  }, [status]);
  return (
    <>
      {/* <button onClick={showToast}>Submit</button> */}
      <ToastContainer />
      {/* {status ? ( */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normalPackUsers" element={<NormalPackUsers />} />
          <Route path="/goldenPackUsers" element={<GoldenPackUsers />} />
          <Route path="/diamandPackUsers" element={<DiamandPackUsers />} />
        </Routes>
      {/*  ) : (
         <Routes>
           <Route path="/" element={<NetworkConnection />} />
         </Routes>
       )} */}
    </>
  );
};

export default App;
