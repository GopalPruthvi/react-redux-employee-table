import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Tables from "./components/Tables";
import AddDetails from "./components/AddDetails";

export default function App() {
  const [showAddButton, setShowAddButton] = useState(false)
  

 
  return (
    <div className="container">
      <Header  onAdd={()=>setShowAddButton(!showAddButton)} showAdd={showAddButton} title="Employee Details"/>
       {showAddButton && <AddDetails />} 
       {!showAddButton && <Tables />}
    </div>
  );
}
