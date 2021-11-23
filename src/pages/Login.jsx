import styled from "styled-components";
import {useCallback, useState} from "react";
import CustomerService from "../service/CustomerService";
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


const Login = ({setToken}) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    

    const loginHandler = () => {
        const customerService = new CustomerService();
        customerService.login(email, password).then(result => {
          setToken(result.data.token);
        });
        sessionStorage.setItem("email", email);
    }

    return (
        <Container>
            <Wrapper>
                <Title>Giriş Yap</Title>
                <Form onSubmit={loginHandler}>
                    <Input type={"text"} placeholder="E-Posta" onChange={event => setEmail(event.target.value)}/>
                    <Input type={"text"} placeholder="Şifre" onChange={event => setPassword(event.target.value)}/>
                    <Button type={"submit"}>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
