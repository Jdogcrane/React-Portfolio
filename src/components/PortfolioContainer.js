import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import Footer from './Footer';
import '../Styles/style.css';
import 'materialize-css';
const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  

  
  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path="/" exact component={About} />
      <Route path="/Projects" exact component={Projects} />
      <Route path="/Resume" exact component={Resume} />
      
      <Footer />
    </BrowserRouter>
  );
};

export default PortfolioContainer;
