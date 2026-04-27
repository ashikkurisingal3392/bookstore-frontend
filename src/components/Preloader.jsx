import React from 'react'

function Preloader() {
  return (
    <div>
      {/* https://www.linziehunter.co.uk/wp-content/uploads/2021/02/book.gif */}
      {/* https://i.pinimg.com/originals/c4/34/4c/c4344c2c184b648e576fb81971111e34.gif */}
      <div className='flex justify-center items-center w-full h-screen bg-amber-100'>
        <img src="https://www.linziehunter.co.uk/wp-content/uploads/2021/02/book.gif" className='w-52 h-52' alt="" />
      </div>
      
    </div>
  )
}

export default Preloader
