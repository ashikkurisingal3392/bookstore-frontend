import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { FaBook } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { addLabels, balanceSheet, valueFormatter } from './netflixsBalanceSheet';


function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <div className='flex '> 
        <div className='w-64 h-screen ' style={{backgroundColor:'#9d755c'}}>
          <AdminSidebar/>
        </div>
        <div className='w-full flex-1'>
          
          <div className='section mt-4 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 '>
            
                 <div className='flex justify-center p-5 gap-3 rounded-2xl' style={{backgroundColor:'#194a7a'}}>
                <FaBook  className='text-4xl text-white'/>
                <div className='flex flex-col items-center text-white'>
                  <h2>Total Number of Books</h2>
                  <p>100 <span>+</span></p>
                </div>
                 
              </div>
               <div className='flex justify-center p-5 gap-3 rounded-2xl' style={{backgroundColor:'#78938a'}}>
              <PiUsersThree  className='text-4xl text-white' />
                <div className='flex flex-col items-center text-white'>
                  <h2>Total Number of Users</h2>
                  <p>100 <span>+</span></p>
                </div>
                 
              </div>
               <div className='flex justify-center p-5 gap-3 rounded-2xl' style={{backgroundColor:'#e5c185'}}>
                <ImUsers className='text-4xl text-white' />
                <div className='flex flex-col items-center text-white'>
                  <h2>Total Number of Employees</h2>
                  <p>100 <span>+</span></p>
                </div>
                 


              </div>
             



            </div>

          </div>

          {/* chart */}
          <div>
             <div style={{ width: '100%' }}>
      <Typography>Netflix balance sheet</Typography>
      <BarChart
        dataset={balanceSheet}
        series={addLabels([
          { dataKey: 'currAss', stack: 'assets' },
          { dataKey: 'nCurrAss', stack: 'assets' },
          { dataKey: 'curLia', stack: 'liability' },
          { dataKey: 'nCurLia', stack: 'liability' },
          { dataKey: 'capStock', stack: 'equity' },
          { dataKey: 'retEarn', stack: 'equity' },
          { dataKey: 'treas', stack: 'equity' },
        ])}
        xAxis={[{ dataKey: 'year' }]}
        {...config}
      />
    </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

const config = {
  height: 350,
  margin: { left: 0 },
  yAxis: [{ width: 50, valueFormatter }],
  hideLegend: true,
};

export default AdminHome
