import React from 'react';
import './file.css';
import Navmenu from "../components/nav_menu/navmenu";
import Footer from "../components/nav_menu/footer";
const howitworks = () => {
    return (<div>
        <Navmenu />
        <div style={{ minheight: '200vh' }}>
            <section class=" mb-5 d-flex align-items-center main_head"
                style={{
                    backgroundImage: `url(https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/how-it-works.jpeg)`

                }}>
                <div class="container my-3 text-white px-6 pb-5 mb-5">
                    <div class=" text_element row align-items-center justify-content-start px-lg-3 h-100 w-100">
                        <div class="col-sm-12 col-md-6 col-xl order-md-1 order-2 mr-xl-auto ">
                            <h3 class="h3 mb-2 text-uppercase pt-5">Interested in learning?</h3>
                            <h1 class="display-3 pb-5 px-5 mx-5">Learn how to get started here. Ain't no Rocket Science!</h1>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
        <div class="container pt-5 mb-5  mt-5 pb-5 " id="value_props">
            <div class="row justify-content-center text-center mb-3">
                <p class="mb-2 pt-4">Here's all it takes.</p>
                <div class="text-center h3 mb-5 text-dark">Follow these three simple steps to kickstart your musical quest!</div>
            </div>
            <div class="row mt-5 mx-5 mb-5">
                <div class="col-md-5 ">
                    <div class="row">

                        <div class="col-md-4"></div>
                        <div class="col-md-8">
                            <h3 class="h2 mb-2 ">Search</h3>
                            <div style={{ fontsize: '15px' }}>
                                Punch in your requirements and match with the best gurus out there in the market</div>
                        </div></div></div>
                <div class="col-md-3 ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Search.svg" class="imge-fluid object-fit" />
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-md-5  ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Schedule.svg" class="imge-fluid object-fit" />
                </div>
                <div class="col-md-3">
                    <h3 class="h2 mb-2 ">Schedule</h3>
                    <div style={{ fontsize: '15px' }}>
                        Talk to your guru, decide on a convenient time, and join in from anywhere in the world</div>
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-md-5 ">
                    <div class="row">

                        <div class="col-md-4"></div>
                        <div class="col-md-8">
                            <h3 class="h2 mb-2 ">Study</h3>
                            <div style={{ fontsize: '15px' }}>
                                Learn from the best and excel at your skills through carefully guided one-on-one sessions</div>
                        </div></div></div>
                <div class="col-md-3 ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Study.svg" class="imge-fluid object-fit" />
                </div>
            </div>
            <a class="btn  btn-primary btn-lg btn-hover-shadow mb-3 px-4 mx-4" href="/instructors">Find your guru</a>
        </div>


        <Footer />
    </div >

    );
};

export default howitworks;