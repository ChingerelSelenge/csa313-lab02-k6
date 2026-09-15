import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = { vus: 5, duration: '30s'};

export default function () {
  // Зөвшөөрөгдсөн дадлагын сайт руу GET request илгээнэ
  const res = http.get('https://test.k6.io');

  // Сервер 200 status буцааж байгаа эсэхийг шалгана
  check(res, { 'status 200 байна': (r) => r.status === 200 });

  // Хэрэглэгч дараагийн request-ээ шууд явуулахгүй
  sleep(1);
}