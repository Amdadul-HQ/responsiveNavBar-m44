import { LineChart, Line ,XAxis , YAxis} from 'recharts';
import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Linechart = () => {
    const studentsData = [
        { student: 1, Math: 85, Science: 90, English: 78, History: 82, Geography: 88 },
        { student: 2, Math: 92, Science: 88, English: 85, History: 79, Geography: 90 },
        { student: 3, Math: 78, Science: 92, English: 80, History: 85, Geography: 86 },
        { student: 4, Math: 88, Science: 85, English: 82, History: 88, Geography: 92 },
        { student: 5, Math: 90, Science: 80, English: 88, History: 90, Geography: 84 },
        { student: 6, Math: 86, Science: 78, English: 90, History: 92, Geography: 80 },
        { student: 7, Math: 80, Science: 86, English: 92, History: 84, Geography: 78 },
        { student: 8, Math: 84, Science: 82, English: 86, History: 80, Geography: 85 },
        { student: 9, Math: 82, Science: 84, English: 78, History: 86, Geography: 82 },
        { student: 10, Math: 89, Science: 89, English: 89, History: 89, Geography: 89 }
      ];
      const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <div>
            <LineChart width={700} height={500} data={studentsData}>
                <XAxis dataKey='student'></XAxis>
                <YAxis dataKey=''></YAxis>
                <Line  dataKey='Math' type="monotone" stroke="#8884d8"></Line>
                <Line dataKey='Science' type="monotone" stroke="#8884d8"></Line>
                <Line dataKey='English' type="monotone" stroke="#8884d8"></Line>
                <Line dataKey='History' type="monotone" stroke="#8884d8"></Line>
                <Line dataKey='Geography' type="monotone" stroke="#8884d8"></Line>
            </LineChart>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
             width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Linechart;