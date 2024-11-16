import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContextApi";


const Login = () => {
    const {logInUser, setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    // console.log(location)
    const handleLogin =(e) => {
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        logInUser(email,password)
        .then(result => {
            // console.log('Login Successful')
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state :'/')
            
        })
        .catch(error => {
            // console.log(error.code, error.message)
        })
    }
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 ">
      <div className="card bg-white w-full max-w-sm p-6 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        {/* Form Start */}
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label mb-1">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-md px-3 py-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label mb-1">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-md px-3 py-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <label className="label mt-1">
              <a
                href="#"
                className="label-text-alt text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-neutral w-full py-2 rounded-md  text-white font-semibold hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
     
    </div>
  );
};

export default Login;