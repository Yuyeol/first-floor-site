import CurrLocation from "Components/CurrLocation";
import styled from "styled-components";

const Container = styled.div``;

const LocationBox = styled.div``;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutImg = styled.img``;

const AboutPresenter = ({ location }) => (
  <Container>
    <LocationBox>
      <CurrLocation location={location} />
    </LocationBox>
    <ImgBox>
      <AboutImg src="http://firstfloor.cafe24.com/web/upload/brand%20introduce.jpg" />
    </ImgBox>
  </Container>
);

export default AboutPresenter;
