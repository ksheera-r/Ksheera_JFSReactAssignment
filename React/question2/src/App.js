import React, { useState } from 'react';

function App() {
    const [users] = useState([
        { id: 1, firstName: 'Charlie', job: 'Janitor' },
        { id: 2, firstName: 'Mac', job: 'Bouncer'  },
        { id: 3, firstName: 'Dee', job: 'Actress' },
        { id: 4, firstName: 'Dennis', job: 'Bartender'  },
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.job}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default App;