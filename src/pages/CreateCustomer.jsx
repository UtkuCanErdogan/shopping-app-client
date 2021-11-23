import styled from "styled-components";
import {useState} from "react";
import CustomerService from "../service/CustomerService";
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

const CreateCustomer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [check, setCheck] = useState(false);

    const openModal = () => {
        setCheck(true);
    }
    const closeModal = () => {
        setCheck(false);
    }

    const createHandler = async () => {
        const customerService = new CustomerService();
        const customer = {
            mail: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
            name: name,
            surname: surname,
            age:age
        }
        await customerService.register(customer).then(() => {
            openModal();
        });
    }
    return (
        <Container>
            {
                check ? <SuccessPopup open={openModal} handleClose={closeModal}/> : null
            }

            <Wrapper>
                <Title>Kullanıcı Oluştur</Title>
                <Form>
                    <Input type={"email"} placeholder="E-Posta" onChange={(e) => setEmail(e.target.value)}/>
                    <Input type={"password"} placeholder="Şifre" onChange={(e) => setPassword(e.target.value)}/>
                    <Input type={"password"} placeholder="Şifreyi Doğrula" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    <Input placeholder="İsim" onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="Soyisim" onChange={(e) => setSurname(e.target.value)}/>
                    <Input type={"number"} placeholder="Yaş" onChange={(e) => setAge(e.target.value)}/>
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

export default CreateCustomer;
