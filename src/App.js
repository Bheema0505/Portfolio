import React from 'react';
import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Projects from './components/projects/Projects';
// import { Routes, Route } from 'react-router';
// import Pictures from './components/pictures/Pictures';
// import Form from './components/contact/Form';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <Routes>
          <Route path='/pictures' element={<Pictures />}>

          </Route>
        </Routes> */}
        {/* <Form /> */}
      </main>
    </>
  )
}

export default App