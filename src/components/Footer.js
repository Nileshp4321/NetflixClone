import React from 'react'

const Footer = () => {
    return (
        <>
            
            <div className='footer d-flex text-light justify-content-center align-items-center row download mt-2 flex-wrap'>
            <p className='text-center mt-5 ms-5'>Questions? Call 000-800-919-1694</p>
                    <div className=' footeritem col-auto m-32'>
                    <ul>
                        <li><a className='nav-link active text-light' href='#'>FAQ</a></li>
                        <li><a className='nav-link active text-light' href='#'>Media Centre</a></li>
                        <li><a className='nav-link active text-light' href='#'>Ways to Watch</a></li>
                        <li><a className='nav-link active text-light' href='#'>Cookie Preferences</a></li>
                        <li><a className='nav-link active text-light' href='#'>Speed Test</a></li>
                    </ul>
                </div>
                    <div className='footeritem col-auto m-32'>
                    <ul>
                        <li><a className='nav-link active text-light' href='#'>Help Centre</a></li>
                        <li><a className='nav-link active text-light' href='#'>Investor Relations</a></li>
                        <li><a className='nav-link active text-light' href='#'>Terms of Use</a></li>
                        <li><a className='nav-link active text-light' href='#'>Corporate Information</a></li>
                        <li><a className='nav-link active text-light' href='#'>Legal Notices</a></li>
                    </ul>
                </div>
                    <div className='footeritem col-auto m-32'>
                    <ul>
                        <li><a className='nav-link active text-light'  href='#'>Account</a></li>
                        <li><a className='nav-link active text-light'  href='#'>Jobs</a></li>
                        <li><a className='nav-link active text-light'  href='#'>Privacy</a></li>
                        <li><a className='nav-link active text-light'  href='#'>Contact Us</a></li>
                        <li><a className='nav-link active text-light'  href='#'>Only on Netflix</a></li>
                    </ul>
                </div>
               
            </div>
            
        </>
    )
}

export default Footer
