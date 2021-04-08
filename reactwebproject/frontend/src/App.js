import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Account from './pages/Account'
import CategoryList from './components/CategoryList'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <BrowserRouter>
    <>
     <Navbar/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route   exact path="/account" component={Account}/>
      <Route  exact path="/product/:id" component={ProductDetails}/>
    
    <Home/>
      </Switch>
    
   
      
    </>

    </BrowserRouter>
    
  );
}

export default App;
