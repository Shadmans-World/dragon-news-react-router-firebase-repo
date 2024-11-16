import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import userPhoto from "../assets/user.png";
import { AuthContext } from "../ContextApi/ContextApi";
const Navbar = () => {
  const {user,logOut,setUser} = useContext(AuthContext)

  const navigate = useNavigate()
  const handleSIgnOut =() =>{
    logOut()
    .then(()=>{
      // console.log('signOut Successful')
      
      navigate('/')
    })
    .catch((error)=>{
        // console.log(error.message)
    })
  }
  return (
    <div className="flex justify-between items-center">
      <div><p>{user?user.displayName : ""}</p></div>
      <div className="nav flex gap-3 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex items-center gap-3">
        <div >
          <img className="w-10 h-10 rounded-full" src={user?user.photoURL :userPhoto} alt="user-logo" />
        </div>
        {
          user?
          <button onClick={handleSIgnOut} className="btn btn-neutral">Sign Out</button>
          :
          <Link to='/auth/login' className="btn btn-neutral">Login</Link>

        }
        
      </div>
    </div>
  );
};

export default Navbar;
