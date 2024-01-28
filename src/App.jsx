import React, { useState } from "react"
import "./index.css";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


function App() {
  const [currentTab, handleTabChange] = useState("About");
  const renderTab = () => {
    if (currentTab === "About") {
      return <AboutMe />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    return <AboutMe />;
  };
  return (
    <>
      <Helmet>
        <title>Sarah Leder's Portfolio | {currentTab} </title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}

        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
    
  );
}

export default App;
