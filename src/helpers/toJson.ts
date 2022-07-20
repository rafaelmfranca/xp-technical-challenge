export function toJson(data: any) {
  return JSON.stringify(data, (_key, value) => (typeof value === 'bigint' ? Number(value) : value));
}
