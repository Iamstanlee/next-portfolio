import { IBlog } from "../../utils/interfaces";
import * as S from "./styles";
// import useBlog from "./useBlog";

type Props = {
  blog: IBlog;
};

const Blog: React.FC<Props> = ({ blog: { tag, blogs } }) => {
  // const { articles, isLoading, error } = useBlog();

  return (
    <S.Container id={tag}>
      <S.HeaderText>Blog</S.HeaderText>
      <S.Span>
        I write about data structures and algorithms, frontend and mobile
        development on my free time, checkout some of my selected articles below
      </S.Span>
      {blogs.map((blog, i) => (
        <S.BlogWrapper key={[blog.title, i].join(".")}>
          <S.Time>{blog.date}</S.Time>
          <S.BlogTitle>{blog.title}</S.BlogTitle>
          <S.BlogText>{blog.text}...</S.BlogText>
          <S.ContinueBtn href={blog.link}>CONTINUE READING</S.ContinueBtn>
        </S.BlogWrapper>
      ))}
    </S.Container>
  );
};

export default Blog;
