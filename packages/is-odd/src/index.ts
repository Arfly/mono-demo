import isEven from '@org/is-even';

export default function isOdd(num: number) {
  return !isEven(num);
}
