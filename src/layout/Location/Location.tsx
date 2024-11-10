/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

interface ILocationType {
  address1: string;
  address2: string;
}

// const Location = ({ address1, address2 }: ILocationType) => {
const Location = () => {
  const { mapInfo, mapInfo2 } = data;
  return (
    <LocationWrapper>
      <MapWrapper>
        <PointTitle>{mapInfo.address1}</PointTitle>
        <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
        <Map />
        <MapButtons />
      </MapWrapper>
      <MapWrapper>
        <PointTitle>{mapInfo2.address1}</PointTitle>
        <Caption textAlign={'center'}>{mapInfo2.address2}</Caption>
        <Map />
        <MapButtons />
      </MapWrapper>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;
