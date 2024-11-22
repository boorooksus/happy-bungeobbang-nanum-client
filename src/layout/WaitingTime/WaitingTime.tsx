import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { realtimeDb } from 'firebase';
import { onValue, ref } from 'firebase/database';
import data from '../../data.json';
import { Heading2 } from '@/components/Text.tsx';
import { IColorMapper } from '@/types/data';
import { PointTitle } from '@/components/Text.tsx';
import { IDBData } from '@/types/data';


const colorMapper: IColorMapper = data.colorMapper;


const WaitingTime = () => {
  const [waitTime1, setWaitTime1] = useState<string>("");
  const [waitTime2, setWaitTime2] = useState<string>("");
  const [status, setStatus] = useState<string>('');
  const [color, setColor] = useState<string>('');

  useEffect(() => {

    const dbRef = ref(realtimeDb, 'data');
    onValue(dbRef, (snapshot) => {
      const data: IDBData = snapshot.val();
      setStatus(data.status);
      setColor(data.color);
      setWaitTime1(data.waitTime1);
      setWaitTime2(data.waitTime2);
    });

  }, []);

  return (
    <GuestBookWrapper>
      <Heading2>붕어빵 대기줄 현황을 알려드릴게요</Heading2>
      <StatusText style={{ color: colorMapper[color] }}>{status}</StatusText>
      <PointTitle>예상 대기 시간</PointTitle>
      <WaitingTimeText>
        행복1마을: <Time>{waitTime1} </Time> 분
        {'\n'}
        행복2마을: <Time>{waitTime2} </Time> 분 
      </WaitingTimeText>

    </GuestBookWrapper>
  );
};

export default WaitingTime;


const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;

const StatusText = styled.p`
  font-size: 1.3rem;
  margin: 8px;
  white-space: pre-line;
`;

const WaitingTimeText = styled.p`
  margin: 2px;
  white-space: pre-line;
`;

const Time = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #4f4f4f;
  margin-right: 5px;
`;

