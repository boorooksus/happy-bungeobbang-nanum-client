import styled from '@emotion/styled';
import Button from '@/components/Button.tsx';
import { IMapInfo } from '@/types/data';

const MapButtons = ({ mapInfo }: { mapInfo: IMapInfo }) => {
  const { naverMap, kakaoMap } = mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
