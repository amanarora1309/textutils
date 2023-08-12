import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Error from "./components/Error";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = 'black';

      showAlert("Dark Mode Enbaled", "Success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode';
      // }, 200);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 150);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.Style.color = 'black';
      showAlert("Dark Mode Disabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          <About /> */}
          
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="*" element={<Error />}/>

          </Routes>
            
          
        </div>
      </BrowserRouter>
    </>
  );
}  

export default App;
