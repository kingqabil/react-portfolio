import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='text-[#c8ca3c] w-full md:h-screen bg-[#000000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bf0878c4-5e9b-4fb0-b8f4-19076caad3f8" className='flex flex-col max-w-[600px] w-full h-full'>
            <div className='pb-8'>
                <h1 className='text-4xl sm:text-8xl font-bold inline border-b-4 text-yellow-300 border-pink-600'>
                    Contact
                </h1>
                <p className='text-yellow-300 py-4'>Submit the form below or shoot me an email - kingqabil@gmail.com</p>
            </div>
            <input className='text-[#c8ca3c] border-2 bg-[#000000] p-2' type="text" placeholder='Name' name='name' />
            <input className='text-[#c8ca3c] border-2 my-4 p-2 bg-[#000000]' type="email" placeholder='Email' name='email' />
            <textarea className='text-[#c8ca3c] border-2 bg-[#000000] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#c8ca3c] border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact