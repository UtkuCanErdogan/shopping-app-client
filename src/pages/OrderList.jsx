import styled from "styled-components";
import {useEffect, useState} from "react";
import CustomerService from "../service/CustomerService";
import OrderItem from "../components/OrderItem";
import { useParams } from "react-router";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const {customerId} = useParams();

    useEffect(() => {
        const customerService = new CustomerService();
        customerService.getCustomerOrders(customerId).then(result => {
           setOrders(result.data);
        });
    }, []);
    return(
        <Container>
            {orders.map(order => (
                <OrderItem order={order}/>
            ))}
        </Container>
    );
}

export default OrderList;
