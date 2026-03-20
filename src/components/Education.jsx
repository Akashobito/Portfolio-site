import React from 'react'

function Education() {
  return (
    <section id='education' className='font-Montserrat p-8 flex flex-col items-center space-y-8 pt-20  lg:text-xl lg:[&_div]:w-260 md:[&_div]:w-160'>
      <p className='text-2xl font-bold lg:text-4xl'>EDUCATIONS</p>
      <div className='ring-2 p-5 rounded-2xl font-medium space-y-3'>
        <p className='font-bold text-2xl lg:text-3xl'>2021-2025</p>
        <p className='font-bold '>B.TECH IN COMPUTER SCIENCE AND BUSINESS SYSTEMS</p>
        <p>E.G.S Pillay Engineering College , Nagapattinam | 05/2021 – 05/2025 <br className='hidden lg:block'></br>CGPA – 7.89</p>
      </div>

      <div className='ring-2 p-5 rounded-2xl font-medium space-y-3'>
        <p className='font-bold text-2xl lg:text-3xl'>2020-2021</p>
        <p className='font-bold '>HIGHER SECONDARY</p>
        <p>Karaikal Ammayar Higher Secondary School , Karaikal | 05/2020 – 05/2021 <br className='hidden lg:block'></br> Percentage – 82.2 %</p>
      </div>

      <div className='ring-2 p-5 rounded-2xl font-medium space-y-3'>
        <p className='font-bold text-2xl  lg:text-3xl'>2018-2019</p>
        <p className='font-bold '>SSLC</p>
        <p>Sri vikneswara High School , Karaikal |05/2018 – 05/2019 <br></br> Percentage – 77 %</p>
      </div>
    </section>
  )
}

export default Education