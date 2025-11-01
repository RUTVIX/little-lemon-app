// src/App.js
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main'; // This will hold all our routes
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;