import React, { useEffect, useState } from 'react'
import { Pie } from "react-chartjs-2"

export default function WatchableConstat({ doc }) {
  const { id, title, inputName, inputNumber, outputName, outputNumber } = doc.data()

  const [colors, setColors] = useState(["grey", "grey"])

  const RandomColor = () => "#" + (('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6))

  useEffect(() => {
    setColors([RandomColor(), RandomColor()])
  }, [])

  return (
    <div className="watchable_constat">
      <div className="pie_container">
        <Pie 
          data={{
            labels: [inputName, outputName],
            datasets: [{
              data: [inputNumber, outputNumber],
              backgroundColor: [...colors]
            }]
          }}
          options={{
            legend: {
              display: false
            },
            maintainAspectRatio: false 
          }}
        />
      </div>
      <h3 className="constat_title">{title}</h3>
    </div>
  )
}
