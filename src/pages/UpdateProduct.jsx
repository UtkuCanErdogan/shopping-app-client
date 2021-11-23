import styled from "styled-components";
import {useEffect, useState} from "react";
import ProductService from "../service/ProductService";
import SuccessPopup from "../components/SuccessPopup";
import { useParams } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const UpdateProduct = () => {
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState();
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
      const productService = new ProductService();
      productService.getProductById(id).then(result => {
        setProduct(result.data);
      })
    },)
  

    const updateHandler = () => {
        const productService = new ProductService();
        const updatedProduct = {
            type:type,
            name:name,
            price:price,
            description:description,
            quantity:quantity
        }
        productService.updateProduct(updatedProduct, id).then(() => {
            openModal();
        });
    }

    const [check, setCheck] = useState(false);

    const openModal = () => {
        setCheck(true);
    }
    const closeModal = () => {
        setCheck(false);
    }
    return (
        <Container>
            {
                check ? <SuccessPopup open={openModal} handleClose={closeModal}/> : null
            }
            <Wrapper>
                <Title>Ürün Güncelle</Title>
                <Form>
                    <Input placeholder="Ürün Türü" onChange={(e) => setType(e.target.value)} value={product.type}/>
                    <Input placeholder="Ürün İsmi" onChange={(e) => setName(e.target.value)} value={product.name}/>
                    <Input type={"number"} placeholder="Ürün Fiyatı" onChange={(e) => setPrice(e.target.value)} value={product.price}/>
                    <Input placeholder="Ürün Açıklaması" onChange={(e) => setDescription(e.target.value)} value={product.description}/>
                    <Input type={"number"} placeholder="Ürün Sayısı" onChange={(e) => setQuantity(e.target.value)} value={product.quantity}/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={updateHandler}>OLUŞTUR</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default UpdateProduct;
