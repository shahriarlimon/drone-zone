import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line ,CartesianGrid} from 'recharts';

const DashBoard = () => {
    const [Data ,setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[Data])
    return (
        <ResponsiveContainer width="100%" height="100%">
    <div className='flex flex-col md:flex-row md:justify-around items-center mb-24 md:mb-36'>
        <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-xl font-serif mb-3'>Selling statistics across every month:</h1>
            <LineChart  width={400} height={300} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
        <div className='flex flex-col justify-center items-center mt-32'>
            <h1 className='text-xl font-serif mb-3 text-center'>Current revenue statistics across sell and investment:</h1>
        <BarChart width={400} height={320} data={Data}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis dataKey="sell" />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
        </BarChart>
        </div>
       
     </div>
     </ResponsiveContainer>
    );
};

export default DashBoard;