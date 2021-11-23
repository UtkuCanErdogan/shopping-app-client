import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import ProductService from "../service/ProductService";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && "10px"};
  right: ${props => props.direction === 'right' && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Image = styled.image`
  height: 80%;
  flex: 1;
`;

const ImageContainer = styled.image`
  height: 100%;
  flex: 1;
`;

const Info = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`font-size: 70px`;
const Desc = styled.p` margin: 50px 0px; font-size: 20px; font-weight: 500; letter-spacing: 3px`;
const Button = styled.button` padding: 10px; font-size: 20px; background-color: transparent; cursor: pointer`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState();
    const handleClick = (direction) => {
        if (direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else if (direction === 'right'){
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productService = new ProductService();
        productService.getAll().then(result => {
            setProducts(result.data);
            //setProducts(products.slice(0,3));
        });
    },[]);

    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined/>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {
                        products.map(product => (
                        <Slide key={product.id}>
                            <ImageContainer>
                                <Image/>
                            </ImageContainer>
                            <Info>
                                <Title>{product.name}</Title>
                                <Desc>{product.description}</Desc>
                                <Button>Shop Now</Button>
                            </Info>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined/>
                </Arrow>
            </Container>
        </div>
    );
}

export default Slider;
