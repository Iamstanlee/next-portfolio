import { IContact } from "../../utils/interfaces";
import { AnchorButton } from "../Button";
import * as S from "./styles";

type Props = {
  contact: IContact;
};

const Contact: React.FC<Props> = ({ contact: { tag, email, urls } }) => {
  return (
    <S.Container id={tag}>
      <S.HeaderText>
        Say <S.ColoredText>Hi</S.ColoredText>
      </S.HeaderText>
      <S.SpanText>
        Don&#39;t be a stranger 👀, I&#39;m looking to connect and meet new
        people in tech, If you&#39;re a developer or designer i&#39;d love to meet you :), hit me up! If
        you&#39;re hiring, download my resume and let&#39;s chat!
      </S.SpanText>
      <S.SpaceY space="24px" />
      <S.ButtonContainer>
        {urls.map(({ icon, url, title }, i) => (
          <S.ButtonWrapper key={[title, i].join(".")}>
            <AnchorButton width="124px" href={url}>
              {icon}
              {title}
            </AnchorButton>
          </S.ButtonWrapper>
        ))}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Contact;
