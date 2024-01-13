import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen  bg-pattern bg-no-repeat bg-cover overflow-hidden flex justify-center items-center'>

      <div className="bg-Mgrey min-w-[300px] sm:w-[600px] rounded-md lg:w-[700px] flex justify-center items-center flex-col max-xs:h-[400px] h-[450px]  min-h-[200px]">
        <h1 className="text-4xl text-white font-[700] font-sans px-10 w-full max-xs:py-2  py-4">Contact us</h1>
        <form action="" className='flex flex-col w-full justify-center h-full items-center   gap-5'>
          <input type="text" placeholder='what’s your good name?'   className='min-w-[250px] md:w-[550px] sm:w-[500px] py-3 px-2 lg:w-[600px] text-white max-w-[600px] bg-black/20' />
          <input type="text" placeholder='what’s your web address?' className='min-w-[250px] md:w-[550px] sm:w-[500px] py-3 px-2 lg:w-[600px] text-white max-w-[600px] bg-black/20' />
          <textarea name="" placeholder='enter your text here...'   className='min-w-[250px] md:w-[550px] sm:w-[500px] lg:w-[600px] placeholder:p-4 text-white max-w-[600px] bg-black/20'id="" rows="4">

          </textarea>
<button className='bg-Lgreen px-6  max-xs:py-1.5 py-2 lg:w-[150px] rounded-md text-lg text-white hover:scale-95 hover:bg-Lgreen/90 rubik font-[500] tracking-wide'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact