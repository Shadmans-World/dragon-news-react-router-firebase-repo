import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContextApi";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { createNewUSer, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(`Name: ${name}\nPhotoURL: ${photo}\nEmail: ${email}\nPassword: ${password}`);

    // Create user with email and password
    createNewUSer(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log("User registered", user);

        // Update user profile with name and photo
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Show success message and redirect to login
            toast.success("Registration successful!");
            navigate("/auth/login");
          })
          .catch((error) => {
            // console.log(error.message);
            toast.error("Failed to update profile");
          });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error("Registration failed. Please try again.");
      });

    e.target.reset(); // Reset form
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="card bg-white w-full max-w-sm p-6 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
        {/* Form Start */}
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label mb-1">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full rounded-md px-3 py-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <label className="label mb-1">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full rounded-md px-3 py-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <label className="label mb-1">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
          </div>
          <div className="flex gap-3 items-center text-[12px]">
            <input
              type="checkbox"
              className="checkbox h-5  [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
            />
            <p className="text-[14px]">Accept Terms & Conditions</p>
          </div>
          <div className="form-control mt-6">
            {/* Use button instead of Link for form submission */}
            <button
              type="submit"
              className="btn btn-neutral w-full py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-red-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
