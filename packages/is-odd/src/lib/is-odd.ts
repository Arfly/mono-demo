import { isEven } from '@org/is-even';

export function isOdd(num: number) {
  return !isEven(num);
}
