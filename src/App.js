import React from "react";
import Education from "./componenents/Education";
import PersonalInformation from "./componenents/PersonalInformation";
import WorkExperience from "./componenents/WorkExperience";

function App() {
  return (
    <div className="App">
      <h1>CV Maker</h1>
      <PersonalInformation/>
      <Education/>
      <WorkExperience/>
    </div>
  );
}

export default App;
