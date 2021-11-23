import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminNavbar from "../components/AdminNavbar"
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/Newsletter";
import Slider from '../components/Slider';
import CustomerService from "../service/CustomerService";
import CreateCustomer from "./CreateCustomer";
import CreateProduct from "./CreateProduct";
import OrderList from "./OrderList";
import ProductList from "./ProductList";
import UpdateProduct from "./UpdateProduct";


const Page = <div>
    <Slider/>
    <Categories/>
</div>

const Home = () => {
    const [customer, setCustomer] = useState();
    useEffect(() => {
        const customerService = new CustomerService();
        customerService.getCustomer(sessionStorage.getItem("email")).then(result => {
            setCustomer(result.data);
        });
    })
    return <div>
        <BrowserRouter>
        {
            customer.role === 1 ? <AdminNavbar/> : <Navbar customerId={customer.id}/>
        }
            <Routes>
                <Route exact path="/" element={Page}/>
                <Route exact path = "/CreateCustomer" element={<CreateCustomer/>}/>
                <Route exact path = "/CreateProduct" element={<CreateProduct/>}/>
                <Route exact path = "/UpdateProduct/:id" element={<UpdateProduct/>}/>
                <Route exact path = "/Orders/:id" element={<OrderList/>}/>
                <Route exact path = "/Products/:type" element={<ProductList customerId={customer.id} userRole={customer.role}/>}/>
            </Routes>
            <NewsLetter/>
        </BrowserRouter>
    </div>
}

export default Home;