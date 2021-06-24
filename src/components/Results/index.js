import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div className="container-fluid">
          <table className="table">
            <thead className="table-header">
                <tr className="header-row">
                <th className="header-item" scope="col">Photo</th>
                <th className="header-item" scope="col">First Name</th>
                <th className="header-item" scope="col">Last Name</th>
                <th className="header-item" scope="col">Email</th>
                <th className="header-item" scope="col">Phone</th>
                <th className="header-item" scope="col">City</th>
                </tr>
            </thead>
            <tbody className="table-content">
            {props.users? props.users.map((user, i) => 
                <tr className="table-row" key={i}>
                <td className="table-data"><img src= {user.picture.medium}/></td>
                <td className="table-data">{user.name.first}</td>
                <td className="table-data">{user.name.last}</td>
                <td className="table-data">{user.email}</td>
                <td className="table-data">{user.phone}</td>
                <td className="table-data">{user.location.city}</td>
                </tr>
                ): <p>No repo available!</p>}
            </tbody>
            </table>  
        </div>
    );
}

export default Results;