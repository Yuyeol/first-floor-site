import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SortBlock = styled.div`
  width: 1260px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Total = styled.div`
  font-size: 18px;
  color: grey;
`;

const Number = styled.span`
  font-weight: 600;
  color: black;
  margin: 0 5px;
  opacity: 0.7;
`;

const BtnBlock = styled.div`
  display: flex;
`;

const SLink = styled(Link)`
  display: flex;
  padding: 0 10px;
`;

const SortBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    border-left: 1.2px solid lightgrey;
  }
  color: grey;
  height: 14px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ products }) => {
  return (
    <Container>
      <SortBlock>
        <Total>
          Total<Number>{products.length}</Number>items
        </Total>
        <BtnBlock>
          <SortBtn>
            <SLink>신상품</SLink>
          </SortBtn>
          <SortBtn>
            <SLink>상품명</SLink>
          </SortBtn>
          <SortBtn>
            <SLink>낮은가격</SLink>
          </SortBtn>
          <SortBtn>
            <SLink>높은가격</SLink>
          </SortBtn>
        </BtnBlock>
      </SortBlock>
    </Container>
  );
};
