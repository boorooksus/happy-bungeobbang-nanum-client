/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NavermapsProvider } from 'react-naver-maps';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Caution from '@/layout/Caution/Caution';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Overview from '@/layout/Overview/Overview';
import WaitingTime from '@/layout/WaitingTime/WaitingTime';

function MainPage() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>대기 현황</Heading1>
          <WaitingTime />
        </Wrapper>
        <Wrapper>
          <Heading1>행사 소개</Heading1>
          <Overview />
        </Wrapper>
        <Wrapper>
          <Heading1>위치</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>행사 유의 사항</Heading1>
          <Caution />
        </Wrapper>
        <FloatingBar />
      </Container>
    </NavermapsProvider>
  );
}

export default MainPage;
