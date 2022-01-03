import { IProject } from "../../utils/interfaces";
import * as S from "./styles";

type ProjectProps = {
  project: IProject;
};

const Project: React.FC<ProjectProps> = ({ project: { tag, project } }) => {
  return (
    <S.Container>
      <S.HeaderText>
        Check out my <S.ColoredText>{tag}</S.ColoredText>
      </S.HeaderText>
      <S.Projects>
        {project.map((item,i) => (
          <S.Project key={i}>
            <S.TitleText>{item.title}</S.TitleText>
            <S.DescText>{item.desc}</S.DescText>
            <S.Icons>
              {item.links.map((link) => (
                <S.IconText key={link.url} href={link.url}>
                  {link.icon}
                </S.IconText>
              ))}
            </S.Icons>
          </S.Project>
        ))}
      </S.Projects>
    </S.Container>
  );
};

export default Project;
