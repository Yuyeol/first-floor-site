import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 1260px;
`;

const SmallText = styled.div`
  text-align: right;
  margin: 15px 0;
  font-size: 15px;
`;
const BigText = styled.div`
  margin: 15px 0 50px 0;
  font-size: 24px;
  font-weight: 600;
`;

const CurrLocation = ({ location }) => (
  <Container>
    <TextBox>
      <SmallText>Home &#62; {location}</SmallText>
      <BigText>{location}</BigText>
    </TextBox>
  </Container>
);

export default CurrLocation;
