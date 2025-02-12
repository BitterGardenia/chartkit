import type { EChartsType } from 'echarts'
import { init } from '@chartkit/echarts'
import { useEffect, useRef } from 'react'

function App() {
  let chart: EChartsType
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chart) return
    if (containerRef.current) {
      chart = init(containerRef.current)
      chart.setOption(
        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
            },
          ],
        },
        true,
      )
    }
  }, [])

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Echarts</h1>
      <div
        ref={containerRef}
        style={{ width: '500px', aspectRatio: '16/9' }}
      ></div>
    </main>
  )
}

export default App
