// -1+1 forces to have a positive 0, so we never display -0
function displayNumber(
  number,
  { signed, decimals, emptyVal, unit, currencyDisplay, currency, style, minimumFractionDigits } = {}
) {
  return (!number && number != 0) || Math.abs(number) === Infinity
    ? emptyVal || 'n.a.'
    : (signed && number >= 0 ? '+' : '') +
        (+number - 1 + 1).toLocaleString('fr-FR', {
          maximumFractionDigits: !decimals && decimals != 0 ? 2 : decimals,
          currencyDisplay,
          currency,
          style,
          minimumFractionDigits
        }) +
        (unit ? `${unit}` : '')
}

function displayPercent(number, { signed = true } = { signed: true }) {
  return displayNumber(number, { signed, decimals: 1, minimumFractionDigits: 1, style: 'percent' })
}

function displayUnsignedPercent(
  number,
  { signed = false } = { signed: false }
) {
  return displayNumber(number, { signed, decimals: 1, minimumFractionDigits: 1, style: 'percent' })
}

function displayEuro(number, { signed } = {}) {
  return displayNumber(number, {
    signed,
    decimals: 0,
    currencyDisplay: 'symbol',
    currency: 'EUR',
    style: 'currency'
  })
}

function displayNumberTo025(number, options) {
  return displayNumber(Math.round(number * 4) / 4, options)
}

function displayEuroDicimaled(number, { signed } = {}) {
  return displayNumber(number, {
    signed,
    decimals: 2,
    currencyDisplay: 'symbol',
    currency: 'EUR',
    style: 'currency'
  })
}

function displaySignedEuro(number, { signed = true } = { signed: true }) {
  return displayNumber(number, {
    signed,
    decimals: 0,
    currencyDisplay: 'symbol',
    currency: 'EUR',
    style: 'currency'
  })
}

function displayDays(number, { signed = false } = { signed: false }) {
  return displayNumber(number, { unit: ' j.', decimals: 0, signed: signed })
}

function displayMonthsInYearsAndMonths(number) {
  let years = Math.floor(number / 12)
  let months = number % 12
  return [`${years} an${years > 1 ? 's' : ''}`, months ? `${months} mois` : ''].filter(e => e).join(' et ')
}

function displayPoints(number) {
  return displayNumber(100 * number, {unit: ' pts', decimals: 1, signed: true})
}

export {
  displayNumber,
  displayPercent,
  displayUnsignedPercent,
  displayEuro,
  displaySignedEuro,
  displayDays,
  displayEuroDicimaled,
  displayMonthsInYearsAndMonths,
  displayPoints,
  displayNumberTo025
}
