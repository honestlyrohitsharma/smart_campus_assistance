"use client"

export const ChartContainer = ({ children, className }) => {
  return <div className={`chart-container ${className || ""}`}>{children}</div>
}

export const ChartTitle = ({ children }) => {
  return <div className="chart-title text-sm font-medium text-center mb-4">{children}</div>
}

export const ChartXAxis = ({ dataKey }) => {
  return <div className="chart-x-axis" data-key={dataKey}></div>
}

export const ChartYAxis = () => {
  return <div className="chart-y-axis"></div>
}

export const ChartBar = ({ data, dataKey, barSize, fill }) => {
  return (
    <div className="chart-bar flex items-end justify-around h-full w-full pt-6">
      {data &&
        data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-8 rounded-t-sm"
              style={{
                height: `${item[dataKey]}px`,
                backgroundColor: fill || "#4f46e5",
                maxHeight: "300px",
              }}
            ></div>
            <div className="text-xs mt-2 text-gray-600">{item.subject?.substring(0, 10)}</div>
          </div>
        ))}
    </div>
  )
}

export const ChartLine = ({ data, dataKey, stroke, strokeWidth }) => {
  return (
    <div className="chart-line relative h-full w-full pt-6">
      {data && (
        <svg className="w-full h-full" viewBox={`0 0 ${data.length * 50} 300`} preserveAspectRatio="none">
          <path
            d={data.map((item, i) => `${i === 0 ? "M" : "L"} ${i * 50 + 25} ${300 - item[dataKey] * 3}`).join(" ")}
            fill="none"
            stroke={stroke || "#10b981"}
            strokeWidth={strokeWidth || 2}
          />
          {data.map((item, i) => (
            <circle
              key={i}
              cx={i * 50 + 25}
              cy={300 - item[dataKey] * 3}
              r="4"
              fill="white"
              stroke={stroke || "#10b981"}
              strokeWidth="2"
            />
          ))}
        </svg>
      )}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
        {data &&
          data.map((item, i) => (
            <div key={i} className="text-xs text-gray-600">
              {item.month}
            </div>
          ))}
      </div>
    </div>
  )
}

export const ChartLegend = () => {
  return (
    <div className="chart-legend mt-4 flex justify-center gap-4">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-purple-600 rounded-full mr-1"></div>
        <span className="text-xs text-gray-600">Attendance</span>
      </div>
    </div>
  )
}

export const ChartTooltip = () => {
  return <div className="chart-tooltip"></div>
}
