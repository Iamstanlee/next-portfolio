import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpiralImage1 = styled.img`
  position: absolute;
  max-width: 8.625em;
  bottom: 0;
  right: 0;
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
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
