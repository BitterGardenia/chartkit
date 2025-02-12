import { type EChartsInitOpts, init as echartsInit } from 'echarts'

export function init(
  dom?: HTMLElement | null,
  theme?: string | object | null,
  options?: EChartsInitOpts,
) {
  return echartsInit(dom, theme, options)
}
