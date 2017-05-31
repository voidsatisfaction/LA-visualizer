import { create } from 'apisauce';
import config from '../../env/config';
 
export const api = create({
  baseURL: config.url,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export const manageApi = (res) => {
  if (res.problem === 'TIMEOUT_ERROR') {
    throw new Error('通信時間が長すぎます。ちょっと後でもう一度お願いします。');
    // return { ...res, error: '通信時間が長すぎます。ちょっと後でもう一度お願いします。' };
  } else if (res.problem === 'CONNECTION_ERROR') {
    throw new Error('サーバにつなぐごとができません。ちょっと後でもう一度お願いします。');
    // return { ...res, error: 'サーバにつなぐごとができません。ちょっと後でもう一度お願いします。' };
  } else if (res.problem === 'NETWORK_ERROR') {
    throw new Error('ネットワークを利用できません。');
    // return { ...res, error: 'ネットワークを利用できません。' };
  } else if (res.status === 500) {
    throw new Error('サーバからエーラが出ました。要請をもう一度確認お願い致します。');
    // return { ...res, error: 'サーバからエーラが出ました。要請をもう一度確認お願い致します。' };
  } else if (res.status === 404) {
    throw new Error('サーバからエーラが出ました。もう存在しない物についての要請です。');
    // return { ...res, error: 'サーバからエーラが出ました。もう存在しない物についての要請です。' };
  } else if (res.status === 401) {
    throw new Error('サーバからエーラが出ました。権限がありません。');
    // return { ...res, error: 'サーバからエーラが出ました。権限がありません。' };
  } else if (res.status === 400) {
    throw new Error('サーバからエーラが出ました。要請をもう一度確認お願い致します。');
    // return { ...res, error: 'サーバからエーラが出ました。要請をもう一度確認お願い致します。' };
  }
  return res;
};