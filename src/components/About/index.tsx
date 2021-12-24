import { IAbout } from "../../utils/interfaces";
import * as S from "./styles";

type Props = {
  about: IAbout;
};

const About: React.FC<Props> = ({ about: { name, bio, email, resumeUrl } }) => {
  return (
    <S.Container>
      <S.HeaderText>
        Hi I&#39;m <S.ColoredText>{name}</S.ColoredText>
      </S.HeaderText>
      <S.ParaText>
        {bio} If you&#39;re hiring,
        <S.ColoredLinkText href={`/${resumeUrl}`}>
          {" Download my resume "}
        </S.ColoredLinkText>
        and let&#39;s
        <S.ColoredLinkText href={`mailto:${email}`}>
          {" chat! 📧"}
        </S.ColoredLinkText>
      </S.ParaText>
      <S.BoltImage src="/assets/images/bolt.png" />
      <S.HandSignImage src="/assets/images/okay-hand.png" />
    </S.Container>
  );
};

export default About;
