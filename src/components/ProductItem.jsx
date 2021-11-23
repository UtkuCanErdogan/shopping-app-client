import styled from "styled-components";
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, EditAttributesOutlined} from "@mui/icons-material";
import OrderService from "../service/OrderService";
import Modal from '@material-ui/core/Modal';
import {useState} from "react";
import SuccessPopup from "./SuccessPopup";
import { Link } from "react-router-dom";


const Info = styled.p`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: lightgray;
  border: 2px solid black;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const ProductItem = ({item, userRole, customerId}) => {
    const [count, setCount] = useState();
    const [address, setAddress] = useState();

    const makeOrderHandler = () => {
        const orderService = new OrderService();
        orderService.makeOrder(item.id, count,  customerId, address).then(result => {

        });
    }
    const [check, setCheck] = useState(false);
    const openModal = () => {
        setCheck(true);
    }
    const closeModal = () => {
        setCheck(false);
    }
    const open = () => {
        setSuccess(true);
    }
    const close = () => {
        setSuccess(false);
    }

    const [success, setSuccess] = useState(false);

    return (
        <Container key={item.id}>
            {check ?
                    <Modal
                    open={openModal}
                    onClose={closeModal}>
                    <Form onSubmit={makeOrderHandler}>
                        <Wrapper>
                            <Input type={"number"} placeholder="Adet" onChange={(e) => setCount(e.target.value)}/>
                            <Input  placeholder="Adres"  onChange={(e) => setAddress(e.target.value)}/>
                            <Button type={"submit"}>OLUŞTUR</Button>
                        </Wrapper>
                    </Form>
                </Modal> : null}
            {success ? <SuccessPopup open={open} handleClose={close}/>: null}
            <Circle/>
            <Image src={item.image}/>
            <Info>
                <Icon onClick={makeOrderHandler}>
                    <ShoppingCartOutlined onClick={e => setCheck(true)}/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
                <Icon>
                    {
                      userRole === 1 ? <Link to={`Products/${item.id}`}><Button><EditAttributesOutlined/></Button></Link> : null
                    }
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem;
