import React, { useContext } from 'react';
import { AuthContext } from "../Context/UserContext";
const Dashboard = () => {
   const { user } = useContext(AuthContext);
   console.log(user)
    return (
        <div>
        dashboard
        </div>
    );
};

export default Dashboard;