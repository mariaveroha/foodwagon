import './App.css';
import Header from '../src/Components/Header/Header'
import Banner from '../src/Components/Banner/Banner'
import Work from '../src/Components/Work/Work'
import Popular from '../src/Components/Popular/Popular'
import Featured from './Components/Featured/Featured';
import Search from './Components/Search/Search';
import Install from './Components/Install/Install';
import Order from './Components/Order/Order';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='container'>
    <Header/>
    <Banner/>
    <Work/>
    <Popular/>
    <Featured/>
    <Search/>
    <Install/>
    <Menu/>
    <Order/>
    <Footer/>
    </div>
  );
}

export default App;
