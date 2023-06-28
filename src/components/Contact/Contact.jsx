import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div className='container contact-container'>
        <div className="row">
            <div className="col-md-6 ">
                <div>
                    <h2>Contact Me</h2>
                </div>
                <form action="">
                    <input className='form-control mt-3' type="text" placeholder='Your Name' />
                    <input className='form-control mt-3' type="text" placeholder='Subject' />
                    <textarea className='form-control mt-3' type="text" placeholder='Message' />
                    <div className='mt-5 mb-3'>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <img src="" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Contact
