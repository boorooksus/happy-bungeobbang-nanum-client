import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { HmacSHA256 } from 'crypto-js';
import { realtimeDb } from 'firebase';
import { onValue, push, ref, update } from 'firebase/database';
import data from '../data.json';
import { IColorMapper } from '@/types/data';
import { IDBData } from '@/types/data';


const colorMapper: IColorMapper = data.colorMapper;

const ManagerPage = () => {
  // DB에 저장된 기존 값
  const [orgStatus, setOrgStatus] = useState<string>('오픈 전');
  const [orgColor, setOrgColor] = useState<string>('그레이');
  const [orgWaitTime1, setOrgWaitTime1] = useState<string>("");
  const [orgWaitTime2, setOrgWaitTime2] = useState<string>("");
  // 변경할 값
  const [status, setStatus] = useState<string>('');
  const [waitTime1, setWaitTime1] = useState<string>("");
  const [waitTime2, setWaitTime2] = useState<string>("");
  const [color, setColor] = useState<string>('');
  // 관리자 인증 번호
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // 기존 값 DB에서 불러옴
    const dbRef = ref(realtimeDb, 'data');
    onValue(dbRef, (snapshot) => {
      const data: IDBData = snapshot.val();
      setOrgStatus(data.status);
      setStatus(data.status);
      setOrgColor(data.color);
      setColor(data.color);
      setOrgWaitTime1(data.waitTime1);
      setWaitTime1(data.waitTime1);
      setOrgWaitTime2(data.waitTime2);
      setWaitTime2(data.waitTime2);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 관리자 인증 번호가 맞는지 확인
    const key = import.meta.env.VITE_APP_PASSWORDKEY;
    const hash = HmacSHA256(password, key).toString();

    const dbHashRef = ref(realtimeDb, 'hash');
    onValue(dbHashRef, (snapshot) => {
      if (snapshot.val() === hash) {

        const dbCheckRef = ref(realtimeDb, 'data');
        onValue(dbCheckRef, (snapshot) => {
          const dataCheck: IDBData = snapshot.val();

          // DB 저장 데이터
          const data: IDBData = {
            status: dataCheck.status,
            color: dataCheck.color,
            updateTime: new Date().toLocaleString(),
            waitTime1: dataCheck.waitTime1,
            waitTime2: dataCheck.waitTime2
          };

          // 변경 이력 확인용 데이터
          const hisData: IDBData = {
            status: "",
            color: "",
            updateTime: new Date().toLocaleString(),
            waitTime1: "",
            waitTime2: ""
          }
      
          // 변경된 데이터만 반영해서 DB에 저장
          if (orgStatus !== status){
            data.status = status;
            hisData.status = status;
          }
          if (orgColor !== color) {
            data.color = color;
            hisData.color = color;
          }
          if (orgWaitTime1 !== waitTime1){
            data.waitTime1 = waitTime1;
            hisData.waitTime1 = waitTime1
          }
          if (orgWaitTime2 !== waitTime2){
            data.waitTime2 = waitTime2;
            hisData.waitTime2 = waitTime2;
          }

          const dbRef = ref(realtimeDb);
          const uploadData = {
            data
          };

          void update(dbRef, uploadData);
          void push(dbRef, hisData);
          window.location.reload();
    
        });
      } else {
        alert('잘못된 관리자 인증 번호입니다.');
      }
    });
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Table>
          <thead>
            <tr>
              <th>항목</th>
              <th>현재 값</th>
              <th>변경 값</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>상태 알림</td>
              <td style={{ color: colorMapper[orgColor] }}>{orgStatus}</td>
              <td>
                <TextInput
                  placeholder="상태 입력"
                  type="text"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>상태 알림 컬러</td>
              <td style={{ color: colorMapper[orgColor] }}>{orgColor}</td>
              <td>
                <Select value={color} onChange={(e) => setColor(e.target.value)}>
                  <option value="회색">회색</option>
                  <option value="초록">초록</option>
                  <option value="주황">주황</option>
                  <option value="빨강">빨강</option>
                </Select>
              </td>
            </tr>
            <tr>
              <td>행1 예상 대기시간(분)</td>
              <td>{orgWaitTime1}</td>
              <td>
                <NumberInput
                  placeholder="행1 예상 대기 시간"
                  type="text"
                  value={waitTime1}
                  onChange={(e) => setWaitTime1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>행2 예상 대기시간(분)</td>
              <td>{orgWaitTime2}</td>
              <td>
                <NumberInput
                  placeholder="행2 예상 대기 시간"
                  type="text"
                  value={waitTime2}
                  onChange={(e) => setWaitTime2(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <div style={{ color: 'black', margin: '20px' }}>
          관리자 번호
          <CodeInput onChange={(e) => setPassword(e.target.value)} />
        </div>
        <SubmitButton type="submit">등록</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url('/background.png'); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 280px; /* 테두리 이미지의 너비 설정 */
  background-color: #ffffff;
  width: 85vw;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

const Table = styled.table`
  margin-top: 10px;
  color: #000000;
  width: 100%;
  table-layout: fixed;
  align: center;
  border-spacing: 0 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const TextInput = styled.input`
  width: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const CodeInput = styled.input`
  width: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const Select = styled.select`
  width: 80px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const NumberInput = styled.input`
  width: 80px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 50%;
  height: 50px;
  margin: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: #000000;
`;

export default ManagerPage;
