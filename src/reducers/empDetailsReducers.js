const initialData = {
    employees: [
        {
            id: 1,
            name: "Pruthvi",
            empid: 100,
            designation: "SoftwareEngineer",
            manager: "Abhimanyu",
            exp: 3,
            address: "Chikkballapur",
            is_Manager: false,
          }
    ]
}

const empDetailsReducers =(state= initialData, action)=>{
    switch (action.type){
        case "ADD_DETAILS":
          const {id, name} = action.payload;
           return{
               ...state,
               employees:[
                   ...state.employees,
                {
                    id: id,
                    name:name.name,
                    empid: name.empid,
                    designation:name.designation,
                    manager:name.manager,
                    exp: name.exp,
                    address: name.address,
                    is_Manager: name.is_Manager
               }]
           }
        
        default : return state
    }

}

export default empDetailsReducers;
