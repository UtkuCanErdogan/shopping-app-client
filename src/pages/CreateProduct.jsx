import styled from "styled-components";
import {useState} from "react";
import ProductService from "../service/ProductService";
import SuccessPopup from "../components/SuccessPopup";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

const CreateProduct = () => {
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();
    const [check, setCheck] = useState(false);

    const openModal = () => {
        setCheck(true);
    }
    const closeModal = () => {
        setCheck(false);
    }

    const createHandler = () => {
        const productService = new ProductService();
        const product = {
            type:type,
            name:name,
            price:price,
            description:description,
            quantity:quantity,
            image:image
        }
        productService.createProduct(product).then(() => {
            openModal();
        });
    }
    return (
        <Container>
            {
                check ? <SuccessPopup open={openModal} handleClose={closeModal}/> : null
            }
            <Wrapper>
                <Title>Ürün Oluştur</Title>
                <Form>
                    <Input placeholder=";Ürün Türü" onChange={(e) => setType(e.target.value)}/>
                    <Input placeholder="Ürün İsmi" onChange={(e) => setName(e.target.value)}/>
                    <Input type={"number"} placeholder="Ürün Fiyatı" onChange={(e) => setPrice(e.target.value)}/>
                    <Input placeholder="Ürün Açıklaması" onChange={(e) => setDescription(e.target.value)}/>
                    <Input type={"number"} placeholder="Ürün Sayısı" onChange={(e) => setQuantity(e.target.value)}/>
                    <Input placeholder="Resim Adresi" onChange={(e) => setImage(e.target.value)}/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={createHandler}>OLUŞTUR</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default CreateProduct;
