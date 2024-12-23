import { useState } from "react";
import "../src/index.css";
import Header from "./components/header";
import withTabContent from "./components/HOC/tabContentHOC";
import Overview from "./components/overview";
import Settings from "./components/settings";
import Statistics from "./components/statistics";

function App() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = {
    Overview: withTabContent(Overview),
    Statistics: withTabContent(Statistics),
    Settings: withTabContent(Settings),
  };
  const ActiveComponent = tabs[activeTab];
  return (
    <div>
      <Header whichTab={setActiveTab} selected={activeTab} />
      <div className="xs:px-10 md:px-20 lg:px-40 pt-10">{ActiveComponent}</div>
    </div>
  );
}

export default App;
