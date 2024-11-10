import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, Paragraph, PointTitle } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <PointTitle>일시</PointTitle>
      <Paragraph>{greeting.date}</Paragraph>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
