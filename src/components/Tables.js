
import { useSelector } from "react-redux";


const Tables = () => {
  const employees = useSelector((state)=> state.empDetailsReducers.employees)
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Manager</th>
            <th>Experience</th>
            <th>Address</th>
            <th>is_Manager</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((empDetail) => (
            <tr key= {empDetail.empid}>
              <td>{empDetail.name}</td>
              <td>{empDetail.empid}</td>
              <td>{empDetail.designation}</td>
              <td>{empDetail.manager}</td>
              <td>{empDetail.exp}</td>
              <td>{empDetail.address}</td>
              <td>{empDetail.is_Manager ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
