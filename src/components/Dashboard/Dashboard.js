import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 50401
        },
        {
            "month": "Apr",
            "investment": 150000,
            "sell": 423,
            "revenue": 64500
        },
        {
            "month": "May",
            "investment": 170000,
            "sell": 726,
            "revenue": 87010
        },
        {
            "month": "Jun",
            "investment": 200000,
            "sell": 529,
            "revenue": 70405
        },
        {
            "month": "Jul",
            "investment": 270000,
            "sell": 601,
            "revenue": 80900
        },
        {
            "month": "Aug",
            "investment": 300000,
            "sell": 670,
            "revenue": 120000
        },
    ];
    return (
        <div>
            <h2>Yearly Business Chart </h2>
       <div className='chart-1'>
           <h3>Chart-1</h3>
       <BarChart width={730} height={250} data={data}>
            <Bar dataKey={'investment'} fill="#8884d8"></Bar>
            <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
       </div>

        <br></br>

        <div className='chart-2'>
            <h3>Chart-2</h3>
        <AreaChart width={730} height={250} data={data}
             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </div>
        <br></br>

        <div className='chart-3'>
            <h3>Chart-3</h3>
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="investment" nameKey="month" cx="60%" cy="60%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" nameKey="month" cx="60%" cy="60%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip/>
        </PieChart>
        </div>
        </div>
    );
};

export default Dashboard;