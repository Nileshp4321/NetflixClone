import React from 'react'
import "../App.css";
const Search = () => {
    return (
        <>
            <div className='d-flex justify-content-center w-100 align-items-center h-100 text-light flex-row text-center mt-5 '>
                <div className='flex-wrap'>
                    <h1 className='fs-1' >Unlimited movies, TV shows and more</h1>
                    <h6>Watch anywhere. Cancel anytime.</h6>
                    <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                    <form class="row gy-2 gx-3 mt-3  d-flex flex-wrap  ">
                        <div class="col-9 mx-auto ">
                            <label class="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" class="form-control bg-transparent text-light" id="autoSizingInput" placeholder="Jane Doe" />
                        </div>
                        <div class="col-3 getStart">
                            <button type="submit" class="btn btn-danger gs1 ">Get Started</button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Search
