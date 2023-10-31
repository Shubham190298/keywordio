import React from 'react';
import { PieChart, Pie } from 'recharts';
import '../App.css';

function Graph() {
    const data = [
        { name: 'Male', students: 40, fill:"darkorange" },
        { name: 'Female', students: 35 , fill:" #0096FF" },
        { name: 'Unknown', students: 25, fill:"black" }
    ];
    return(
        <div className='d-flex'> 
             <PieChart width={400} height={400}>
                <Pie data={data} dataKey="students" outerRadius={150} 
                innerRadius={90} />
               
            </PieChart>
            <div className='title'>
                <button className='btn rounded orange'/>40% Male
                <h6><button className='btn rounded blue'/>35% Female</h6>
                <h6><button className='btn btn-dark rounded'/>25% Unknown</h6>
            </div>
        </div>
    )
}
export default Graph;