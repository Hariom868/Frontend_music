import React from 'react';

const navmenu = () => {
    return (<div>
        <div class="row " style={{ backgroundColor: '#292C37' }}>
            <div class="col-md-3 my-5 py-5 ml-5 pl-5">
                <a class="d-inline-block mb-2" href="/"><img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/logo1.png" width="100" alt="Dhunguru" /></a>
                <p class="mb-sm-4 mb-3  font-size-xs text-light opacity-60">A music revolution, born to break geographical barriers</p> </div>
            <div class="col-md-2 my-5 py-5">
                <h3 class="h6 mb-2 pb-1 text-uppercase text-light">Site map</h3>
                <ul class="nav nav-light flex-lg-column flex-sm-row flex-column text-light">
                    <li>About</li>
                    <li>How it Works</li>
                    <li>Become A Guru</li>
                    <li>FAQs</li>
                    <li>Legal</li>
                    <li>Fund Policy</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="col-md-2 my-5  py-5">
                <h3 class="h6 mb-2 pb-1 text-uppercase text-light">Subjetcts/Instruemnts</h3>
                <ul class="nav nav-light flex-lg-column flex-sm-row flex-column text-light">
                    <li>Guitar</li>
                    <li>Violin</li>
                    <li>Piano</li>
                    <li>Drum</li>
                    <li>Flute</li>
                    <li>More</li>
                </ul>
            </div>
            <div class="col-md-5 my-5 py-5 mr-2 pr-4">

                <h3 class="h6 mb-2 pb-1 text-uppercase text-light">Sign up to our newsletter</h3>
                <form class="d-none d-lg-block px-5 mx-3">
                    <input class="form-control " type="text" placeholder="Email address" value="" />
                </form>
                <small class="form-text font-size-xxs text-light">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</small>

            </div>
        </div>
    </div>
    );
};

export default navmenu;