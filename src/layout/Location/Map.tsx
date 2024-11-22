/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import { IMapInfo } from '@/types/data';

const Map = ({ mapInfo }: { mapInfo: IMapInfo }) => {
  const { lat, lon } = mapInfo;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}>
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={17}
        draggable={false}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}>
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
