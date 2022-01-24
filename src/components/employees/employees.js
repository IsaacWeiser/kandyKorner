import react, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const NewEmployeeForm = () => {
    let [employees, setEmployees] = useState([]);
   let [locations, setLocations] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8088/locations`)
        .then((locations)=>locations.json())
        .then((locs)=> setLocations(locs))
        
    }, [])
        
    const history = useHistory();
    
    const saveEmp = (event) => {
        event.preventDefault();

        let newEmp = {
            name: employees.name,
            storeId: employees.storeId,
            manager: employees.manager,
            fulltime: employees.fulltime,
            rate: parseInt(employees.rate)
        }

        const postOps = 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmp)
        }

        fetch(`http://localhost:8088/employees`, postOps).then(()=> history.push(`/employees`))
    }

    return (
        <form>
            <h2 className="newEmployeeForm--title">New Employee</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="name">Name: </label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="name of new employee"
                    onChange=
                    {
                        (event)=>
                        {
                            let copy ={...employees};
                            copy.name= event.target.value;
                            setEmployees(copy)
                        }
                    }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Which location do you want: </label>
                    {
                        locations.map((location)=>{
                            return (
                                <>
                                <input
                                required autoFocus
                                type="radio"
                                className="form-control"
                                id={`location-btn--${location.id}`}
                                onClick={
                                    (event)=> 
                                    {
                                        let copy = {...employees}
                                        if (event.target.value === "on")
                                        {
                                            copy.storeId =parseInt((event.target.id).substr(14));
                                            setEmployees(copy);
                                        }
                                    }
                                }
                                />
                                <label>{location.address}</label>
                                </>
                            )
                        })
                    }
                </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="manager">Are you a manager </label>
                        <select
                        onChange={(event)=>{
                            let copy = {...employees};
                            copy.manager = (event.target.value) === "yes"? true : false;
                            console.log("mng "+event.target.value)
                            setEmployees(copy)
                        }}
                        >
                            <option id="manager-option--0">Select an option</option>
                            <option id="manager-option--1">yes</option>
                            <option id="manager-option--2">no</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="fullTime">Are you Full time?</label>
                        <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        id="fullTime"
                        onChange={
                            (event)=>
                            {
                                let copy = {...employees};
                                copy.fulltime = event.target.checked;
                                setEmployees(copy)
                            }
                        }
                        />
                    </div>
                </fieldset>
                <fieldset>
                <div className="from-group">
                    <label htmlFor="rate">Hourly Rate </label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="name of new employee"
                    onChange=
                    {
                        (event)=>
                        {
                            let copy ={...employees};
                            copy.rate= event.target.value;
                            setEmployees(copy)
                        }
                    }
                    />
                </div>
            </fieldset>
            <button className="submit--btn" onClick={saveEmp}>submit</button>
        </form>
    )


}