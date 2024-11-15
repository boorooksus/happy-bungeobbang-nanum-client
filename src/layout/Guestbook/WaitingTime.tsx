import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { realtimeDb } from 'firebase';
import { onValue, ref, update } from 'firebase/database';
import data from '../../data.json';
import bungeoImg from '@/assets/images/bungeo.png';
import bungeoImg2 from '@/assets/images/bungeo_tear.png';
import jasonImg from '@/assets/images/jason.webp';
import minionsImg from '@/assets/images/minions.webp';
import pepeImg from '@/assets/images/pepe3.jpg';
import poohImg from '@/assets/images/pooh.webp';
import simpsonImg from '@/assets/images/simpson.webp';

import { Heading2, Paragraph } from '@/components/Text.tsx';

const colorMapper = data.colorMapper;

const WaitingTime = () => {
  const [waitTime, setWaitTime] = useState<number>(30);
  const [status, setStatus] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [images, setImages] = useState<string[]>([
    bungeoImg,
    bungeoImg2,
    pepeImg,
    jasonImg,
    poohImg,
    simpsonImg,
    minionsImg,
  ]);
  const [imgIdx, setImgIdx] = useState<number>(0);

  useEffect(() => {
    setImgIdx(Math.floor(Math.random() * images.length));

    const dbRef = ref(realtimeDb, 'status');
    onValue(dbRef, (snapshot) => {
      setStatus(snapshot.val());
    });

    const dbRef2 = ref(realtimeDb, 'waitTime');
    onValue(dbRef2, (snapshot) => {
      setWaitTime(Number(snapshot.val()));
    });

    const dbRef3 = ref(realtimeDb, 'color');
    onValue(dbRef3, (snapshot) => {
      setColor(snapshot.val());
    });

    console.log(imgIdx);
  }, []);

  return (
    <GuestBookWrapper>
      <Heading2>붕어빵 대기줄 현황을 알려드릴게요</Heading2>
      <Img src={images[imgIdx]} />

      <StatusText style={{ color: colorMapper[color] }}>{status}</StatusText>
      <WaitingTimeText>
        {' '}
        예상 대기 시간: <WaitigTime>{waitTime} </WaitigTime> 분
      </WaitingTimeText>
    </GuestBookWrapper>
  );
};

export default WaitingTime;

const Img = styled.img`
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
  background-color: '#ffffff';
`;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;

const StatusText = styled.p`
  font-size: 1.3rem;
  margin: 5px;
  white-space: pre-line;
`;

const WaitingTimeText = styled.p`
  margin: 5px;
  white-space: pre-line;
`;

const WaitigTime = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #4f4f4f;
  margin-right: 5px;
`;
