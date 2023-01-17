export function getTime(timestamp,timezone) {
    let date = new Date(timestamp * 1000)
    let hours = date.getUTCHours() + timezone / 3600
    if (hours < 0) {
        hours = hours + 24
    }
    if (hours > 24) {
        hours = hours - 24
    }
    let minutes = "0" + date.getMinutes()
    return hours + ':' + minutes.slice(-2)
};

export function getDates(timestamp) {
    let date = new Date(timestamp * 1000)
  
    let day = date.getUTCDate()
    let monthNum = date.getUTCMonth()
    let monthObj = {
      0: 'january',
      1: 'february',
      2: 'marth',
      3: 'april',
      4: 'may',
      5: 'june',
      6: 'july',
      7: 'august',
      8: 'septembr',
      9: 'october',
      10: 'november',
      11: 'december',
    }
    let month
    for (let item in monthObj) {
      if (item == monthNum) {
        month = monthObj[item]
      }
    }
  
    return `${day} ${month}`
  }