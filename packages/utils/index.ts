/**
 * @description 该函数生成格式为 xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx 的 UUID 字符串，
 * 其中 x 是 0-9 和 a-f 的随机字符，y 是 8, 9, a 或 b 中的一个，用于标识版本 4 的 UUID
 */
export function generateUUID() {
  let uuid = ''
  let i
  let random

  for (i = 0; i < 32; i += 1) {
    // eslint-disable-next-line no-bitwise
    random = (Math.random() * 16) | 0

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-'
    }

    // eslint-disable-next-line no-nested-ternary, no-bitwise
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
  }

  return uuid
}
