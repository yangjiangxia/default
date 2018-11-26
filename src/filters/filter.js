export function normalTime (t) {  //日期
  let time = new Date()
  time.setTime(t * 1000)
  let Year = time.getFullYear(),
    Month = time.getMonth() + 1,
    Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
    hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
    Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
    Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
  Month < 10 ? Month = 0 + '' + Month : Month = Month
  return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
}
