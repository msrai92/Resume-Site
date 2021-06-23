import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.scss';



const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const css = `
  ::-webkit-scrollbar {
    width: 16px;
    height: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
}
  
::-webkit-scrollbar-track {
    background-color: transparent;
}
  
::-webkit-scrollbar-thumb {
    background-color: #0b0c10;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    
}
  
::-webkit-scrollbar-thumb:hover {
    
}
  `
  return (
    <Provider store={store}>
      <main id="test" className="app">
          <Navbar />
          <section className="container">
            <Alert />
            <Landing />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </section>
          <Footer />
      </main>
    </Provider>
  )
}

export default App;
