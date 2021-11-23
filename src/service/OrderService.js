import axios from "axios";

export default class OrderService{
    async makeOrder(productId, count, customerId, address){
        return await axios.post(`http://localhost:8080/api/order/makeAnOrder/${productId}`, {
            customerId:customerId,
            count:count,
            address:address
        });
    }

    async getOrderDetail(id){
        return await axios.get(`http://localhost:8080/api/order/${id}`);
    }
}
