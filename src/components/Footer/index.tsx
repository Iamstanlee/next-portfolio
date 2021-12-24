import styled from "styled-components";

const Container = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>©2022 </Text>
      <Text>Designed with ❤️</Text>
    </Container>
  );
};

export default Footer;
