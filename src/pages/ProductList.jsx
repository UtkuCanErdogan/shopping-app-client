import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import {useEffect, useState} from "react";
import ProductService from "../service/ProductService";
import { useParams } from "react-router";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProductList = ({customerId, userRole}) => {
    const [products, setProducts] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        const productService = new ProductService();
       productService.getProductByType(type).then(result => {
            setProducts(result.data);
            console.log(result.data);
        });
    },[]);
    return (
        <Container>
            {
                products.map(product => (
                    <ProductItem item={product} userRole={userRole} customerId={customerId}/>
                ))
            }
        </Container>
    );
}

export default ProductList;
