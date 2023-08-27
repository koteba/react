import ReactDom from "react-dom/client";
import App from "./App";

const root=ReactDom.createRoot(document.getElementById('root'));
root.render("Hello World from render");
//create a compent App
root.render(<App/>);

// ReactDom.render("Hello  world",document.getElementById('root'));