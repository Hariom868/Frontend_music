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
                    backgroundImage: `url(https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/teach_with_us_3.jpeg)`

                }}>
                <div class="container my-3 text-white px-6 pb-5 mb-5">
                    <div class=" text_element row align-items-center justify-content-start px-lg-3 h-100 w-100">
                        <div class="col-sm-12 col-md-6 col-xl order-md-1 order-2 mr-xl-auto ">
                            <h3 class="h3 mb-2 text-uppercase pt-5">BECOME A GURU</h3>
                            <h1 class="display-3 pb-5 px-5 mx-5">Enabling your talents to turn your passion into a career</h1>
                            <a class="btn  btn-primary btn-lg btn-hover-shadow mb-3 px-4 mx-2" href="/instructors">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="container pt-5 mb-4 mt-4 pb-4 ">
            <div class="row justify-content-center text-center mb-3">
                <p class=" display-6 mb-2 pt-4">How it Works</p>

            </div>
            <div class="row px-4  mx-5 my-5 text-center">
                <div class="col-md-4  px-4">
                    <div class="cs-step-body">
                        <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/create.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
                        <h3 class="h2 mb-2">Create</h3>
                        <p class="mb-0 text-dark ">Build your profile, showcase your skills, and decide your fee structure</p>
                    </div></div>
                <div class="col-md-4  px-4">
                    <div class="cs-step-body"><img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/coordinate.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
                        <h3 class="h2 mb-2">Coordinate</h3>
                        <p class="mb-0 text-dark ">Receive scheduling requests from fully paid students, and confirm as per your availability</p></div>
                </div><div class="col-md-4  px-4">
                    <div class="cs-step-body">
                        <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/cultivate.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
                        <h3 class="h2 mb-2">Cultivate</h3><p class="mb-0 text-dark ">Focus solely on building your students and your brand, whilst leaving the rest to us</p></div></div>
            </div>
        </div>
        <hr class="my-4 " style={{ width: '75%', marginLeft: '15%' }}></hr>
        <div class="container pt-5 mb-4 mt-4 pb-4 ">
            <div class="row justify-content-center text-center mb-3">
                <p class=" mb-2 pt-4">Why should you choose us?</p>
                <div class="row mx-6 px-6 mt-5 pt-5 mb-2 pb-2">
                    <div class="col-3 mr-4 pb-4">
                        <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/FocusTeaching.svg" class="img-fluid" style={{ height: '100px' }} />
                    </div>
                    <div class="col-2">
                        <div class="h3 mb-2">Focus only on teaching</div>
                        <div class=" mt-2">Get a ready-to-use teaching platform with marketing and billing features at zero steup cost </div>
                    </div>
                    <div class="col-3">    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/yourOwnBoss.svg" class="img-fluid" style={{ height: '100px' }} />
                    </div>
                    <div class="col-2">
                        <div class="h3 mb-2">Be your own boss</div>
                        <div class=" mt-2">Grab the creative freedom to decide your teaching methods and your charges for the same </div>
                    </div>
                </div>
                <div class="row mx-6 px-6 mt-5 pt-5 mb-4 pb-4">
                    <div class="col-3 mr-4 pb-4">
                        <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/TeachAnywhere.svg" class="img-fluid" style={{ height: '100px' }} />
                    </div>
                    <div class="col-2">
                        <div class="h5 mb-2">Teach anywhere, anytime</div>
                        <div class=" mt-2">Get access to a wide student base spread worldwide, from the comfort of your home </div>
                    </div>
                    <div class="col-3">    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/paymentSuccessfulPage.svg" class="img-fluid" style={{ height: '100px' }} />
                    </div>
                    <div class="col-2">
                        <div class="h5 mb-2">Guaranteed payments</div>
                        <div class=" mt-2">Receive complete payments for scheduled classes irrespective of the students' payments </div>
                    </div>
                </div>
            </div></div>
        <hr class="my-4 " style={{ width: '75%', marginLeft: '15%' }}></hr>
        <div class="container pt-5 mb-5  mt-5 pb-5 " id="value_props">
            <div class="row justify-content-center text-center mb-3">

                <div class="text-center h3  text-dark">We exist for the entire musical fraternity!</div>
                <p class="mb-5 pt-4">We will enable and empower anyone willing to share their gift of music with everyone</p>
            </div>
            <div class="row mt-5 mx-5 mb-5">
                <div class="col-md-5 ">
                    <div class="row">

                        <div class="col-md-4"></div>
                        <div class="col-md-8">
                            <h3 class="h2 mb-2 ">Professional</h3>
                            <div style={{ fontsize: '15px' }}>
                                If you are formally trained in the musical arts and wish to impart your knowledge with others, you belong here</div>
                        </div></div></div>
                <div class="col-md-3 ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/ProfessionalTeacher.svg" class="imge-fluid object-fit" />
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-md-5  ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Performer.svg" class="imge-fluid object-fit" style={{ height: '200px' }} />
                </div>
                <div class="col-md-3">
                    <h3 class="h2 mb-2 ">Performer</h3>
                    <div style={{ fontsize: '15px' }}>
                        If you have gained your skills by performing everywhere and want to extend your experience to others, you belong here</div>
                </div>
            </div>
            <div class="row mx-5 mb-5">
                <div class="col-md-5 ">
                    <div class="row">

                        <div class="col-md-4"></div>
                        <div class="col-md-8">
                            <h3 class="h2 mb-2 ">Passionate</h3>
                            <div style={{ fontsize: '15px' }}>
                                If you are finally picking up your life long musical ambition and wish to support yourself alongside, you belong here</div>
                        </div></div></div>
                <div class="col-md-3 ">
                    <img alt="" src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Passionate.svg" class="imge-fluid object-fit" />
                </div>
            </div>
        </div>


        <Footer />
    </div >

    );
};

export default howitworks;