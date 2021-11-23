import AdminNavbar from "./components/AdminNavbar";
import Slider from './components/Slider';
import Categories from "./components/Categories";
import NewsLetter from "./components/Newsletter";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
import CreateCustomer from "./pages/CreateCustomer";
import ProductList from "./pages/ProductList";
import Home from './pages/Home';
import { useState } from "react";
import CustomerService from "./service/CustomerService";

function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));
}
function getToken(){
    const token = sessionStorage.getItem('token');
    return token;
}

const App = () => {
    const token = getToken();
    console.log(token);
    if(!token){
        return <Login setToken={setToken}/>
    }
    else {
        return <Home/>
    }
}

export default App;