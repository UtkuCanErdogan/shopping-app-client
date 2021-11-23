import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;


const Categories = () => {

    return (
        <Container>
            <CategoryItem title={"Bilgisayar"} type={0}/>
            <CategoryItem title={"Oyuncu Masası"} type={1}/>
            <CategoryItem title={"Oyuncu Sandalyesi"} type={2}/>
        </Container>
    );
}

export default Categories;
