import styled from '@emotion/styled';
import data from 'data.json';
import Photo from './Photo';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      {/* <MainImg src={mainImg} /> */}
      <MainTitle>{greeting.title}</MainTitle>
      <Photo />
    </div>
  );
};

export default Main;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;
