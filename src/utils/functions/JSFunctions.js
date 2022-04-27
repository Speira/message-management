/**
 * getActiveKeys
 * @desc :: turn all the keys in an object that are not null|empty in a single
 *          concatened string
 * @param {Object} param
 * @return {String}
 */
export function getActiveKeys(object) {
  if (typeof object !== 'object') return ''
  return Object.entries(object).reduce((acc, cur) => {
    const [key, val] = cur
    if (!val) return acc
    return acc.concat(` ${key}`)
  }, '')
}

/**
 * checkEmptyObject.
 *
 * @param {} object
 */
export function checkEmptyObject(object) {
  if (!(object instanceof Object)) return false
  return !!Object.values(object).length
}

/**
 * getDateFromTimestamp
 * @param {Number} timestamp
 * @return {Date}
 *
 */
export function getDateFromTimestamp(timestamp) {
  const date = new Date()
  date.setTime(timestamp * 1000)
  return date
}

/**
 * formatDate
 * @param {Date} date
 *
 */
export function formatDate(date) {
  let day = date.getDate()
  day = day < 10 ? `0${day}` : day
  let month = date.getMonth() + 1
  month = month < 10 ? `0${month}` : month
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
