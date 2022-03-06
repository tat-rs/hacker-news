export function convertTimestamp(unixTime) {
  const date = new Date(unixTime * 1000);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const hour = date.getHours();
  const min = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  const time = `${day}.${month}.${year} ${hour}:${min}:${seconds}`;
  return time;
}