import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { currency as currencyConfig } from '~/config'

dayjs.extend(relativeTime)

Vue.filter('FormatDate', function (value) {
  if (value) {
    // return dayjs(new Date(value)).format('DD-MMM-YYYY HH:mm:ss')
    return dayjs(new Date(value)).fromNow()
  }
})

Vue.filter('currency', function (value, currency, decimals) {
  const digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : currencyConfig.symbol
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(value).toFixed(decimals)
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  const i = _int.length % 3
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
  const _float = decimals ? stringified.slice(-1 - decimals) : ''
  const sign = value < 0 ? '-' : ''
  return (
    sign +
    currency +
    ' ' +
    head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
  )
})
Vue.filter('ago', function (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return ~~(between / 60) + ' minutes'
  } else if (between < 86400) {
    return ~~(between / 3600) + ' hours'
  } else {
    return ~~(between / 86400) + ' days'
  }
})

Vue.filter('getSrcSet', function (value) {
  if (value) {
    // return dayjs(new Date(value)).format('DD-MMM-YYYY HH:mm:ss')
    const start = value.split('.jpg')[0]
    // const end = value.split('.jpg')[1]
    const _640 = start + '_640x360.jpg?alt=media 640w, '
    const _960 = start + '_960x540.jpg?alt=media 960w, '
    const _1280 = start + '_1280x720.jpg?alt=media 1280w, '
    const _1440 = start + '_1440x810.jpg?alt=media 1440w, '
    return _640 + _960 + _1280 + _1440 + value + ' 1920w'
  }
})
