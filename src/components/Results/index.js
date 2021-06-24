import React from "react";

function Results(props) {
    return (
        <div className="container-fluid">
          <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
            {props.users? props.users.map((user, i) => 
                <tr key={i}>
                <td><img src= {user.picture.medium}/></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.location.city}</td>
                </tr>
                ): <p>No repo available!</p>}
            </tbody>
            </table>  
        </div>
    );
}

export default Results;