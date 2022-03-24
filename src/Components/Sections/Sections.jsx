import React, { useEffect } from "react";
import { sections } from "./stub";
import "./Sections.css";
import { LogUtils } from "../../assets/scripts/LogUtils";

function Sections() {
  //   const [sections, setSections] = useState([])
  useEffect(() => LogUtils.log(true, false));

  return (
    <div className="section-container">
      {sections.map((section, index) => (
        <div id={`section${index + 1}`} class="section-wrapper">
          <h2>{section.title}</h2>
          <p>{section.data}</p>
          {index === 1 && (
            <>
              <h3 id={`section2-1`}>{section.title} 1.0</h3>
              <p>{section.data}</p>

              <h3 id={`section2-2`}>{section.title} 2.0</h3>
              <p>{section.data}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sections;
