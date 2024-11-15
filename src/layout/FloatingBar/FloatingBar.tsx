/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { increment, onValue, ref, update } from 'firebase/database';
import { realtimeDb } from 'firebase.ts';
import JSConfetti from 'js-confetti';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  // TODO: count 기능 사용 원할시 firebase realtime db 연결!
  const [count, setCount] = useState(0);

  useEffect(() => {
    // TODO: realtime db 에 likes 객체 추가.
    const dbRef = ref(realtimeDb, 'likes');
    onValue(dbRef, (snapshot) => {
      setCount(Number(snapshot.val()));
    });
  }, []);

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

  const jsConfetti = new JSConfetti();
  const handleScroll = () => {
    void jsConfetti.addConfetti({ emojis });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
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

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;
