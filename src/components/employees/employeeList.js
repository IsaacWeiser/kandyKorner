import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const EmployeeList=()=> 
{
    const [employees, updateEmp] = useState([])
    const history= useHistory();

    useEffect(()=>{
        fetch(`http://localhost:8088/employees`)
        .then(emps=>emps.json())
        .then((data)=> updateEmp(data))
    }, [])


    const delEmp = (id)=>{

        fetch(`http://localhost:8088/employees/${id}`, {method:"DELETE"})
        .then(()=>history.go("/employees"))


    }



    return (
        <>
        <h2>employees</h2>
        <ul>
        {
            employees.map((emp)=>
            {
                return <>
                <li key={`emp--${emp.id}`}>
                    {`name: ${emp.name},  store: ${emp.storeId}`}
                </li>
                <button onClick={()=>delEmp(emp.id)} id={`btn--${emp.id}`}>Fire</button>
                </>
            })
        }
        </ul>
        </>
    )
}