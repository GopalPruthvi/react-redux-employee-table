import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmpDetails } from "../actions/index"

const AddDetails = () => {
  const eid = Math.floor(Math.random() * 10000) + 1;

  const [name, setName] = useState("");
  const [empid, setEmpid] = useState(eid);
  const [designation, setDesignation] = useState("");
  const [manager, setManager] = useState("");
  const [exp, setExp] = useState("");
  const [address, setAddress] = useState("");
  const [is_Manager, setis_Manager] = useState("");

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !exp || !address) {
      alert("Please Enter the employee details");
      return;
    }
    setName("");
    setEmpid("")
    // setDesignation("");
    // setManager("");
    setDesignation(document.getElementsByName('designation').value ="DEFAULT" ) 
    setManager(document.getElementsByName('manager').value = "DEFAULT");
    setExp("");
    setAddress("");
    setis_Manager(false);
  };

  const clearFiels =()=>{
    setName("");
    setEmpid("")
    setDesignation(document.getElementsByName('designation').value ="DEFAULT" ) 
    setManager(document.getElementsByName('manager').value = "DEFAULT");
    setExp("");
    setAddress("");
    setis_Manager(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Employee ID</label>
        <input
          type="text"
          value={empid}
          disabled
          // onChange={(e) => setEmpid(e.target.value)}
          onChange={() => setEmpid( empid)}
        />
      </div>

      <div className="form-control">
        <label>Designation</label>
        <select name="designation" defaultValue={"DEFAULT"} onChange={(e) => setDesignation(e.target.value)}>
          <option value="DEFAULT" > Choose designation ... </option>
          <option value="softwareEngineer">Software Engineer</option>
          <option value="manualTester">Manual Tester</option>
          <option value="automationTestEngineer"> Automation Test Engineer</option>
        </select>
      </div>

      <div className="form-control">
        <label>Manager</label>
        <select defaultValue={"DEFAULT"} name="manager" onChange={(e) => setManager(e.target.value)}>
          <option value="DEFAULT" >  Choose Manager ... </option>
          <option value="Abhimanyu">Abhimanyu</option>
          <option value="Balaji">Balaji</option>
          <option value="Ganesh">Ganesh</option>
        </select>
      </div>

      <div className="form-control">
        <label>Number of year experience</label>
        <input type="number" onChange={(e) => setExp(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Address</label>
        <textarea name="message" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
      </div>

      <div className="form-control-check">
        <label>is_Manager</label>
        <input
          type="checkbox"
          value={is_Manager}
          checked={is_Manager}
          onChange={(e) => setis_Manager(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save" className="btn"
        onClick={() => dispatch(addEmpDetails({ name, empid, designation, manager, exp, address, is_Manager }))} />
      <button className="btn"   onClick={() => clearFiels } >cancel</button>
    </form>

  );
};

export default AddDetails;
