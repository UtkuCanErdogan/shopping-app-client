import axios from "axios";

export default class CustomerService{
    async login(email, password){
        return await axios.post("http://localhost:8080/api/customer/login", {
            mail:email,
            password: password
        });
    }

    async getCustomer(email){
        return await axios.get(`http://localhost:8080/api/customer/${email}`);
    }
    async register(customer){
        return await axios.post("http://localhost:8080/api/customer/create", {
            mail:customer.mail,
            password: customer.password,
            passwordConfirmation: customer.passwordConfirmation,
            name: customer.name,
            surname: customer.surname,
            age: customer.age,
        });
    }
    async getCustomerOrders(id){
        return await axios.get(`http://localhost:8080/api/customer/orders/${id}`);
}
    async verifyToken(token){
        return await axios.post(`http://localhost:8080/api/customer/verify/name@mail.com`,{
            token:token
        });
    }
}
