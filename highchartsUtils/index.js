function striped(color, opacity = 1) {
  return {
    pattern: {
      path: {
        d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
        strokeWidth: 3
      },
      width: 10,
      height: 10,
      opacity,
      color
    }
  }
}

/**
 * All tooltips have the same 'tooltipCustom' object
 * 
 * You can add the option 'tooltipCustom' to your series to change the behaviour of the tooltip. In this tooltip you can add the following options :
 *  - 'tooltipName' to change the name of the serie in the tooltip.
 *  - 'yearShift' to change the year (ie: -1 for previous year, +1 for previsions). Defaults 0.
 *  - 'tooltipBreak' to add an empty line between your tooltips.
 *  - 'numberFormat' to format the number.
 */


/**
 * Builds a highcharts tooltip for columnRanges (high and low values).
 * @param {Array} orderedYears An array of 12 values representing the years associated to the month. Usefull when the fiscal year does not start in january.
 * @returns A highcharts tooltip
 */
function highchartsColumnRangeTooltip(orderedYears) {
  return {
    shared: true,
    pointFormatter: function() {
      let tooltipCustom = this.series.userOptions.tooltipCustom || {}
      let name = (tooltipCustom.tooltipName && tooltipCustom.tooltipName + (orderedYears[this.index] + (tooltipCustom.yearShift || 0))) || this.series.name
      let value = tooltipCustom.numberFormat(this.low - this.high)
      let color = this.color.pattern ? this.color.pattern.color: this.color
      return `<span style="color: #000"><span style="color:${color.toString()}">⬤</span> ${name}: <b>${value}</b><br/>${tooltipCustom.tooltipBreak ? '<span style="color: #ffffff">break</span><br/>' : ''}<span></span>`
    }
  }
}

/**
 * Builds a highcharts tooltip for graphs with y values.
 * @param {Array} orderedYears An array of 12 values representing the years associated to the month. Usefull when the fiscal year does not start in january.
 * @returns A highcharts tooltip
 */
 function highchartsTooltip(orderedYears) {
  return {
    shared: true,
    pointFormatter: function() {
      let tooltipCustom = this.series.userOptions.tooltipCustom || {}
      let name = (tooltipCustom.tooltipName && tooltipCustom.tooltipName + (orderedYears[this.index] + (tooltipCustom.yearShift || 0))) || this.series.name
      let value = tooltipCustom.numberFormat(this.y)
      return `<span style="color:${this.color.toString()}">⬤</span> ${name}: <b>${value}</b><br/>${tooltipCustom.tooltipBreak ? '<span style="color: #ffffff">break<span><br/>' : ''}<span>`
    }
  }
}

/**
 * Builds a highcharts tooltip for graphs with y values.
 * @param {Array} year The year we want to display.
 * @returns A highcharts tooltip
 */
 function highchartsTooltipFixedYear(year) {
  return {
    shared: true,
    pointFormatter: function() {
      let tooltipCustom = this.series.userOptions.tooltipCustom || {}
      let name = (tooltipCustom.tooltipName && tooltipCustom.tooltipName + (year + tooltipCustom.yearShift || 0)) || this.series.name
      let value = tooltipCustom.numberFormat(this.y)
      return `<span style="color:${this.color.toString()}">⬤</span> ${name}: <b>${value}</b><br/>${tooltipCustom.tooltipBreak ? '<span style="color: #ffffff">break<span><br/>' : ''}<span>`
    }
  }
}

/**
 * Builds a highcharts tooltip for graphs with y values.
 * @param {Number} year The current year. YearShift applies.
 * @returns A highcharts tooltip
 */
 function highchartsYearlyTooltip(year) {
  return {
    shared: true,
    pointFormatter: function() {
      let tooltipCustom = this.series.userOptions.tooltipCustom || {}
      let name = (tooltipCustom.tooltipName && tooltipCustom.tooltipName + (year + (tooltipCustom.yearShift || 0))) || this.series.name
      let value = tooltipCustom.numberFormat(this.y)
      return `<span style="color:${this.color.toString()}">⬤</span> ${name}: <b>${value}</b><br/>${tooltipCustom.tooltipBreak ? '<span style="color: #ffffff">break<span><br/>' : ''}<span>`
    }
  }
}

export {
  striped,
  highchartsColumnRangeTooltip,
  highchartsTooltip,
  highchartsYearlyTooltip,
  highchartsTooltipFixedYear
}