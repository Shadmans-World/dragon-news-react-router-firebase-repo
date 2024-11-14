import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)
const ContextApi = ({children}) => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
      fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category));
    }, []);

    const authInfo = {
        categories
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;