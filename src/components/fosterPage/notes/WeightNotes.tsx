import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const pdata = [
  {
      name: '9/10/2022',
      Pocky: 7.5,
  },
  {
      name: '9/12/2022',
      Pocky: 7.2,
  },
  {
      name: '9/16/2022',
      Pocky: 7.4,
  },
  {
      name: '9/20/2022',
      Pocky: 7,
  },
  {
      name: '9/25/2022',
      Pocky: 7.5,
  },
  {
      name: '9/30/2022',
      Pocky: 7.1
  },
];

const WeightNotes = () => {
  return (
    <div id="weight-note">
      WeightNotes
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
             <XAxis dataKey="name"
                    interval={'preserveStartEnd'} />
             <YAxis type="number" domain={['dataMin - 1', 'dataMax + 1']}></YAxis>
             <Legend />
             <Tooltip />
             {/* <Line dataKey="Kita"
                   stroke="black" activeDot={{ r: 8 }} /> */}
              <Line dataKey="Pocky"
                    stroke="pink"
                    activeDot={{ r: 8 }}
                    strokeWidth={3} />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeightNotes;
