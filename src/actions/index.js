export const addEmpDetails = (name, empid, designation, manager, exp, address, is_Manager) => {
    return {
        type:"ADD_DETAILS",
        payload: {
            id:new Date().getTime().toString(),
            name:name,
            empid: empid,
            designation:designation,
            manager:manager,
            exp: exp,
            address:address,
            is_Manager: is_Manager
        }
    }
}
