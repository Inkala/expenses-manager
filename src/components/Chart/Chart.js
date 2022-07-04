import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((point) => point.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
