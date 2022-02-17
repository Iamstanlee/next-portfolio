import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Inter";
`;

export const SpiralImage1 = styled.img`
  position: absolute;
  max-width: 5.625em;
  bottom: 0;
  right: 0;
  @media only screen and (min-width: 570px) {
    max-width: 8.625em;
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
  z-index: 99;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>©2022 </Text>
      <Text>Designed with ❤️</Text>
      <SpiralImage1 src="/assets/images/spiral1.png" />
    </Container>
  );
};

export default Footer;
