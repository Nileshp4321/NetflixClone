import React from 'react'
import "../App.css";
const FAQ = () => {
    return (
        <>
            <div className='container-fluid FAQ download text-light w-100 h-100 d-flex text-center justify-content-center text-center align-items-center flex-column mt-2'>
                <h1 className='h1 heading' >Frequently Asked Questions</h1>
                <div class="accordioncss col-12 accordion w-75" id="accordionExample" data-bs-theme="dark">
                    <div class="accordion-item ">
                        <h2 class="accordion-header text-light ">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Netflix?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix cost?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Where can I watch?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div>
                    </div>
                </div>
                <form class="row g-3 mt-2 d-flex justify-content-center align-items-center ">
                    <div class="col-auto inputF">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="password" class="form-control text-light w-100 mt-1 block bg-transparent" id="inputPassword2" placeholder="Email Address" />
                    </div>
                    <div class="col-auto buttonGS m-0">
                        <button type="submit" class="btn btn-danger mt-3">Get Started</button>
                    </div>
                </form>

            </div>


        </>
    )
}

export default FAQ
