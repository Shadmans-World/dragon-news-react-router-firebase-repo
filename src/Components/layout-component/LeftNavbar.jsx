import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";

const LeftNavbar = () => {
 

  const {categories} = useContext(AuthContext)

  return (
    <div className="flex flex-col gap-y-3 ">
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <NavLink 
          to={`/news/category/${category.category_id}`}
          className="btn" key={category.category_id}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
