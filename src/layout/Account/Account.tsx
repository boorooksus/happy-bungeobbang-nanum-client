import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';
import { Caption, Paragraph, PointTitle } from '@/components/Text.tsx';

const Caution = () => {
  const { caution } = data;

  return (
    <HostInfoWrapper>
      <Paragraph>{caution.desc}</Paragraph>
    </HostInfoWrapper>
  );
};

export default Caution;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 100px;
`;
