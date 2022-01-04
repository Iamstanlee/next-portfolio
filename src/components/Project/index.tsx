import { IProject } from "../../utils/interfaces";
import Tooltip from "../Tooltip";
import * as S from "./styles";

type ProjectProps = {
  project: IProject;
};

const Project: React.FC<ProjectProps> = ({ project: { tag, projects } }) => {
  return (
    <S.Container>
      <S.HeaderText>
        Featured <S.ColoredText>{tag}</S.ColoredText>
      </S.HeaderText>
      <S.Projects>
        {projects.map((item, i) => (
          <S.Project key={i}>
            <S.TitleText>{item.title}</S.TitleText>
            <S.Tag>{item.tag}</S.Tag>
            <S.DescText>{item.desc}</S.DescText>
            <S.Icons>
              {item.links.map((link) => (
                <S.IconText key={link.url} href={link.url}>
                  <Tooltip text={link.tooltip}>{link.icon}</Tooltip>
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
