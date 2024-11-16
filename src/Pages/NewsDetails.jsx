import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SubHeader from '../Components/SubHeader';
import RightNavbar from '../Components/layout-component/RightNavbar';
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0]; // Accessing the first news item
  const navigate = useNavigate();

  // Handler to navigate to the home page and filter by category
  const handleBackToCategory = () => {
    navigate(`/news/category/${news.category_id}`);
  };

  return (
    <div>
      <header>
        <SubHeader />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>

          {/* Full News Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={news.image_url} // Replace with the image URL from the data
                alt="News"
                className="w-full h-full object-cover"
              />
             
            </div>
            
            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{news.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{news.details}</p>
              <p className="text-gray-700 mb-6">{news.description}</p>
              
             

              {/* Button to go back to category */}
              <button 
                onClick={handleBackToCategory} 
                className="bg-red-600 text-white px-4 py-2 rounded flex gap-3 items-center"
              >
               <FaArrowLeft /> All news in this category
              </button>
            </div>
          </div>

        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
