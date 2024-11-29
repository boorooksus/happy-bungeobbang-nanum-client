import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import bungeoImg2 from '@/assets/images/bungeo_tear.png';
import jasonImg from '@/assets/images/jason.webp';
import minionsImg from '@/assets/images/minions.webp';
import pepeImg from '@/assets/images/pepe3.jpg';
import poohImg from '@/assets/images/pooh.webp';
import shaquilleImg from '@/assets/images/shaquille.webp';
import simpsonImg from '@/assets/images/simpson.webp';

const MainImg = () => {
  const [images] = useState<string[]>([
    bungeoImg2,
    pepeImg,
    jasonImg,
    poohImg,
    simpsonImg,
    minionsImg,
    shaquilleImg,
  ]);
  const [imgIdx, setImgIdx] = useState<number>(0);

  useEffect(() => {
    // 메인 이미지 랜덤으로 선택
    setImgIdx(Math.floor(Math.random() * images.length));
  }, []);

  return (
    <GuestBookWrapper>
      <Img src={images[imgIdx]} />
    </GuestBookWrapper>
  );
};

export default MainImg;

const Img = styled.img`
  width: 90%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: '#ffffff';
`;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
