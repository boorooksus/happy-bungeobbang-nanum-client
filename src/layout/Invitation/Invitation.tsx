import styled from '@emotion/styled';
import data from 'data.json';
import kakao from '@/assets/icons/kakao.png';
import { Caption, Paragraph, PointTitle } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting, kakaoChannelInfo } = data;
  return (
    <InvitationWrapper>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <PointTitle>일정</PointTitle>
      <Paragraph>{greeting.date}</Paragraph>
      <PointTitle>참여 방법</PointTitle>
      <Paragraph>{greeting.kakaoDesc}</Paragraph>
      <KakaoButton onClick={() => window.open(kakaoChannelInfo.url)}>
        <KakaoImg src={kakao} alt="kakao" />
        카카오 채널 친구 추가하기
      </KakaoButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KakaoImg = styled.img`
  width: 20px;
`;

const KakaoButton = styled.button`
  //font-family: HSSanTokki20-Regular, serif;
  padding: 0.5em 0.8em;
  border-radius: 8px;
  border: 1px solid #f6e24b;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: #f6e24b;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
`.withComponent('a');
