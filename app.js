import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading=React.createElement("h1",{id:"heading"},"hi react");
const JsxHeading=()=>(<h1 id="heading">hi react jsx</h1>);
const no=1000;
const HeadingComponent=()=>{
    return ( <div>
    <h2>{no+99}</h2>
    <JsxHeading/>
        <h1>hi functional component</h1>
    </div> );
}
root.render(<HeadingComponent/>);