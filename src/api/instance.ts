import Axios from 'axios';
import md5 from 'js-md5';
import Config from 'react-native-config';

export const API_URL = 'http://gateway.marvel.com/v1/public';
const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getHash = (): string => {
  const now = new Date().getTime();
  return md5(
    `${now}1b349aa9bd785da10d248fe723f5838c643e8d00d2d57fe9bee8e452126509928968b681`,
  );
};

export const instance = Axios.create({
  baseURL: API_URL,
  headers: DEFAULT_HEADERS,
  params: {
    apikey: Config.PUBLIC_KEY,
    ts: new Date().getTime(),
    hash: getHash(),
  },
});
