// import { useState } from "react"
import "./index.css";
import Header from "../components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  // let Component;
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = App;
  //     break;
  //   case "/About":
  //     Component = About;
  //   case "/Portfolio":
  //     Component = Portfolio;
  //   case "/Resume":
  //     Component = Resume;
  //   case "/Contact":
  //     Component = Contact;
  // }

  return (
    <div className="header">
      <Header />
      {/* <Component /> */}
    </div>
  );
}

export default App;
