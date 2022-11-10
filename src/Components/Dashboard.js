import React, { useContext } from 'react';
import { AuthContext } from "../Context/UserContext";
const Dashboard = () => {
   const { user } = useContext(AuthContext);
   console.log(user)
    return (
      <div>
        dashboard{user?.email}
        {user?.displayName}
      </div>
    );
};

export default Dashboard;