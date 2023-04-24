import React from "react";
/*importar o ficheiro do componente para dar a conhecer ao 
index.js que ele existe e conseguir usar o componente */

import Heading from "./Heading.jsx";
//importar o ficheiro List.jsx
import List from "./List.jsx";

//criar o componente App
function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;
