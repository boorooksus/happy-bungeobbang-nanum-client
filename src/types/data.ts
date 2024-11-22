export interface IDBData {
  status: string;
  color: string;
  updateTime: string;
  waitTime1: string;
  waitTime2: string;
}

export interface IMapInfo {
  address1: string;
  address2: string;
  naverMap: string;
  kakaoMap: string;
  lat: number;
  lon: number;
}

export interface ILocationInfo {
  title: string;
  desc: string;
}


export interface IColorMapper {
  [key: string]: string;
}