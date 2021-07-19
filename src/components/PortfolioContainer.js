import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  
  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  );
};

export default PortfolioContainer;
