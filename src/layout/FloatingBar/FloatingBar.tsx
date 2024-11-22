/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = () => {
  const { emojis } = data;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
        void jsConfetti.addConfetti({ emojis });
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  // 이모지 애니메이션
  const jsConfetti = new JSConfetti();
  const handleScroll = () => {
    void jsConfetti.addConfetti({ emojis });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav>
      <Button onClick={handleCopy}>
        <Share fill="#e88ca6" />
        공유하기
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        위로
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: flex;
`;
