import React from "react";
import ReactDOM from "react-dom";
//importar o ficheiro App.jsx
import App from "./components/App.jsx";

/*Este código segue para o novo ficheiro criado App.jsx
porque não se vê elementos HTML no index.js. As importações tb vão.
importar o ficheiro do componente para dar a conhecer ao 
index.js que ele existe e conseguir usar o componente  
import Heading from "./Heading.jsx";
//importar o ficheiro List.jsx
import List from "./List.jsx";

//usar o componente Heading*/
ReactDOM.render(
  /* <div>
    <Heading />
    <List />
  </div>,*/
  <App />,
  document.getElementById("root")
);
