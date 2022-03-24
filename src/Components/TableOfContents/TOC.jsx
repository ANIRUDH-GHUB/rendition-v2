import React from "react";
import "./TOC.css";
import Scrollspy from "react-scrollspy";

function TOC() {
  return (
    <div className="toc-container">
      <div className="toc-wrapper">
        <ul className="toc-list">
          <Scrollspy
            items={["section1", "section2"]}
            currentClassName="is-current"
            // offset={-100}
          >
            <li>
              <a href="#section1">React</a>
            </li>
            <li>
              <a href="#section2">Angular</a>
              <Scrollspy
                items={["section2-1", "section2-2"]}
                currentClassName="is-current"
              >
                <li>
                  <a href="#section2-1" id="#section2-1">
                    Angular 1.0
                  </a>
                </li>
                <li>
                  <a href="#section2-2" id="#section2-2">
                    Angular 2.0
                  </a>
                </li>
              </Scrollspy>
            </li>
            <li>
              <a href="#section3" id="#section3">
                Vue
              </a>
            </li>
            <li>
              <a href="#section4" id="#section4">
                NextJS
              </a>
            </li>
            <li>
              <a href="#section5" id="#section4">
                ExpressJS
              </a>
            </li>
          </Scrollspy>
        </ul>
      </div>
    </div>
  );
}

export default TOC;
// function TOC() {
//   return (
//     <div className="toc-container">
//       <div className="toc-wrapper">
//         <ul className="toc-list">
//           {toc.map((item) => (
//             <li>
//               <Link to={`/${item}`}>{item}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TOC;
