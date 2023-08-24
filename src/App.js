import './App.css'
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Search from './components/Search';

function App() {
  return (
   <>
   <div className='container-fluid w-100 h-100'>
    <NavBar/>
    <Search/>
    </div>
    <div className='container-fluid w-100 h-100'>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <FAQ/>
    <Footer/>
    </div>
    
   </>
  );
}

export default App;
