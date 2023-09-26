import React, {useState} from "react";
import axios from "axios";

function Data() {
  const [userData, setUserData] = useState([]);

    async function fetchData(){
    
        try{
            const response =  await axios.get("https://reqres.in/api/users");
            const users = response.data.data;
            console.log(users);
            setUserData(users);

        }catch(error){
            console.log("Error", error);
        }  
  }

  return (
    <div>
        <h3>Blue Whales</h3>
        <button  type = "submit" onClick={fetchData} className="btn">Get User List</button>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {userData.length > 0 ? (
                     userData.map(user =>(
                        <tr key = {user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img src = {user.avatar} alt = {`Avatar of ${user.first_name}`}/></td>
                        </tr>    
                    ))
                ):(
                    <tr>
                        <td colSpan={"4"}>No Data Available</td>
                    </tr>
                )
                   
                }
            </tbody>
        </table>
    </div>
  )
}

export default Data