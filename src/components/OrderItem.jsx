import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px 80px 5px 80px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  border: 2px solid black;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 25%;
`;
const Title = styled.h2`
  margin-left: 10px;
  margin-right: 10px;
`;

const Item = styled.p`
  margin-left: 20px;
  margin-right: 20px;
`;

const OrderItem = ({order}) => {
    const status = (status) => {
        if (status === 0 ){
            return "Oluşturuldu";
        }
        else if(status === 1){
            return "Onaylandı";
        }

        else if(status === 2){
            return "Kargoya Verildi";
        }
    }

    return (
        <Container key={order.id}>
                <Title>Sipariş Detayı</Title>
                <Image/>
                <Info>
                    <div>
                        <Item>Ürün İsmi</Item>
                        <Item>{order.productName}</Item>
                    </div>
                    <div>
                        <Item>Ürün Sayısı</Item>
                        <Item>{order.count}</Item>
                    </div>
                    <div>
                        <Item>Ürün Tutarı</Item>
                        <Item>{order.price}</Item>
                    </div>
                    <div>
                        <Item>Oluşturulma Tarihi</Item>
                        <Item>{order.createdAt}</Item>
                    </div>
                    <div>
                        <Item>Teslimat Adresi</Item>
                        <Item>{order.address}</Item>
                    </div>
                    <div>
                        <Item>Sipariş Durumu</Item>
                        <Item>{status(order.status)}</Item>
                    </div>
                </Info>
        </Container>
    );
}

export default OrderItem;
