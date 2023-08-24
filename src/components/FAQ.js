import React from 'react'
import "../App.css";
const FAQ = () => {
    return (
        <>
            <div className='container FAQ download text-light w-100 h-100 d-flex  flex-column mt-2'>
                <h1 className='h1 heading text-center' >Frequently Asked Questions</h1>
                <div className="accordioncss col-12 accordion " id="accordionExample" data-bs-theme="dark">
                    <div className="accordion-item ">
                        <h2 className="accordion-header text-light ">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Netflix?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix cost?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Where can I watch?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div>
                    </div>
                </div>
                <form className="row g-3 mt-2 d-flex justify-content-center align-items-center ">
                    <div className="col-auto inputF">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control text-light w-100 mt-1 block bg-transparent" id="inputPassword2" placeholder="Email Address" />
                    </div>
                    <div className="col-auto buttonGS m-0">
                        <button type="submit" className="btn btn-danger mt-3">Get Started</button>
                    </div>
                </form>

            </div>


        </>
    )
}

export default FAQ
