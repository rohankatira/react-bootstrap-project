import React from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Our from './components/Our';
import Features from './components/Features';
import Student from './components/Student';
import Testimonial from './components/Testimonial';
import StatsSection from './components/StatsSection';
import RecentNews from './components/RecentNews';
import Events from './components/Events';
import Footer from './components/Footer';
    

const App = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Our/>
      <Features/>
      <Student/>
      <Testimonial/>
      <StatsSection/>
      <RecentNews/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
