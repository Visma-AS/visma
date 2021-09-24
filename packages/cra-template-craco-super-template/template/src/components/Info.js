import { useInfo } from 'api';

export default function Info() {
  return useInfo().text;
}
