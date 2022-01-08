import { IAbout } from "../../utils/interfaces";
import * as S from "./styles";

type Props = {
  about: IAbout;
};

const About: React.FC<Props> = ({ about: { tag, name, bio, skills } }) => {
  return (
    <S.Container id={tag}>
      <S.HeaderText>
        Hi I&#39;m <S.ColoredText>{name}</S.ColoredText>
      </S.HeaderText>
      <S.ParaText dangerouslySetInnerHTML={{ __html: bio }}></S.ParaText>
      {skills.map((item, i) => (
        <S.SkillContainer key={i}>
          <S.SkillTitleText>{item.title}:</S.SkillTitleText>
          <div style={{ marginTop: "10px", width: "100%" }}>
            {item.list.map((skill, index) => (
              <S.SkillItem key={[skill, index].join(".")}>
                <S.DataNameText>{skill.name}:</S.DataNameText>
                <S.SkillText>{skill.data.join(", ")}</S.SkillText>
              </S.SkillItem>
            ))}
          </div>
        </S.SkillContainer>
      ))}

      <S.BoltImage src="/assets/images/bolt.png" />
      <S.HandSignImage src="/assets/images/okay-hand.png" />
    </S.Container>
  );
};

export default About;
