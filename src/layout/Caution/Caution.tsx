import styled from '@emotion/styled';
import data from 'data.json';
import { Paragraph } from '@/components/Text.tsx';

const Caution = () => {
  const { caution } = data;

  return (
    <CautionWrapper>
      <Paragraph>{caution.desc}</Paragraph>
    </CautionWrapper>
  );
};

export default Caution;

const CautionWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 100px;
`;
