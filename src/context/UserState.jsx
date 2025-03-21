import React, { useState } from 'react'
import UserContext from './UserContext';

const UserState = (props) => {
  const [userDetails, setuserDetails] = useState([]);
  return (
    <UserContext.Provider  value={{userDetails,setuserDetails}}>
    {props.children}

 </UserContext.Provider>
  )
}

export default UserState
