import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    padding-bottom: 20px;
  
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
    border: none;
  
` ;

const Logo = styled.h1`
    font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const AdminNavbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>Tr</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{color:"orange", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Ekinoks</Logo></Center>
                <Right>
                <Link to="/CreateCustomer"><MenuItem>Kullanıcı Ekle</MenuItem></Link>
                <Link to="/CreateProduct"><MenuItem>Ürün Ekle</MenuItem></Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default AdminNavbar;