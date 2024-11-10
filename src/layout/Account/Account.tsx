import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';

const Account = () => {
  return <HostInfoWrapper>붕어빵 재고 소진시 행사가 조기 종료 될 수 있습니다</HostInfoWrapper>;
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;
