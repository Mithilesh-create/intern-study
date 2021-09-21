import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import DisplayUser from "./components/AddUser/DisplayUser";


function App() {
  const [passData, setpassData] = useState([])
  const handleData=(data)=>{
    setpassData([...passData, data]);
    // console.log(data);
  }
  return (
    <div className="outer_cover">
      <AddUser onGetData={handleData}/>
      <DisplayUser data={passData}/>
    </div>
  );
}

export default App;
