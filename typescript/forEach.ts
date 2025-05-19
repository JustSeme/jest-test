export function forEach(items: [number, number], callback: Function) {
  for (const item of items) {
    callback(item);
  }
}
