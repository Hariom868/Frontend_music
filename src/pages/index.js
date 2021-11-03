import React from 'react';
import './file.css';
import Carousel from "../components/carousel/carousel"
import background from "../images/head.jpeg";
import Navmenu from "../components/nav_menu/navmenu";
import Footer from "../components/nav_menu/footer";
const Home = () => {
  return (
    <div>
      <Navmenu />
      <div style={{ minheight: '200vh' }}>
        <section class=" mb-5 d-flex align-items-center main_head"
          style={{
            backgroundImage: `url(${background})`

          }}>
          <div class="container my-3 text-white px-6">
            <div class=" text_element row align-items-center justify-content-start px-lg-3 h-100 w-100">
              <div class="col-sm-12 col-md-6 col-xl order-md-1 order-2 mr-xl-auto ">
                <h1 class="display-2 mb-3 d-none d-lg-block">The missing piece in the puzzle of musical learning </h1>
                <h1 class="h1 py-3 mb-1 mb-md-3 ">A unique platform empowering the students to create a music classroom of their own.</h1>
                <div class="d-flex align-items-center px-5">
                  <a class="btn  btn-primary btn-lg btn-hover-shadow mb-3 px-4 mx-2" href="/instructors">Find your guru</a>
                  <a href="#free-session" class="btn  btn-white btn-lg btn-hover-shadow mb-3 px-4 ">Book a free session</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container pt-5 mb-4 mt-4 pb-4 ">
        <div class="row justify-content-center text-center mb-3">

          <h3 class="display-4 mb-2 px-3 pb-5 "> How It Works.</h3>
        </div>
        <div class="row px-4  my-5 text-center">
          <div class="col-md-3  px-4">
            <div class="cs-step-body">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/one-one-session.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
              <h3 class="h2 mb-2">Ask Questions</h3>
              <p class="mb-0 text-dark ">User can post the Questions for which the solution is not there.</p>
            </div></div>
          <div class="col-md-3   px-4">
            <div class="cs-step-body"><img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/RecordedSessions.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
              <h3 class="h2 mb-2">Vote the Answers </h3>
              <p class="mb-0 text-dark ">User have the facility to vote the answer based on how much efficient and effective it is.</p></div>
          </div><div class="col-md-3  px-4">
            <div class="cs-step-body">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/firstOneOnUs.svg" alt="" class="img-fluid mb-3 rounded my-5 " />
              <h3 class="h2 mb-2">Answer Questions</h3>
              <p class="mb-0 text-dark ">User can give the answer of the question posted</p></div></div>
          <div class="col-md-3 px-4">
            <div class="cs-step-body">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Satisfactionguaranteed.svg" alt="" class="img-fluid mb-3 rounded my-5" />
              <h3 class="h2 mb-2">Get Reputation</h3><p class="mb-0 text-dark ">User get reputation point for the question asked and answer given.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle_content pt-5 mt-5">
        <p class="text-center pt-5 mt-5">Featured Teachers</p>
        <h3 class="display-6 font-weight-bold mb-2 px-3 pb-1 "> Check out our best performing Gurus</h3>
        <div class=" align-items-center ">
          <a class="btn  btn-primary btn-lg btn-hover-shadow mb-3 px-4 mx-2" href="/instructors">Explore More</a>
          <a href="#free-session" class="btn  btn-white btn-lg btn-hover-shadow mb-3 px-4 ">Book a free session</a>
        </div>
        <div style={{ maxWidth: 1400, marginLeft: 'auto', marginRight: 'auto', marginTop: 64, paddingLeft: '5%', paddingRight: '4%', paddingBottom: '5%' }}>
          <Carousel
            show={3}
          >
            <div>
              <div class=" item col-md-4 px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class=" item col-md-4 px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class=" item col-md-4 px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class=" item col-md-4 px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class=" item col-md-4 px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class=" item col-md-4  px-5">
                <div class="card" style={{ width: '23rem' }}>
                  <img class="card-img-top" src="https://dhunguru-files.s3.amazonaws.com/9d3addf4-8632-4217-a059-ae2a97de0a79.png" alt="Card image cap" />
                  <div class="card-body text-left"><h4 class="h2 mb-2">Muskan Anand</h4><div class="mb-2"><span class="badge badge-primary mr-2">Singing</span></div>
                    <p class="small mb-5">I’m a professional musician and teacher based in Delhi. I’ve been into music for...</p>
                    <div class="row"> <div class="col-md-6"><h5 class=" text-primary font-weight-bold">Price start from 636</h5></div>
                      <div class="col-md-6"><a href="#" class="btn btn-primary">Learn More</a></div></div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel></div>

      </div>
      <div class="mb-5 pb-5">
        <div class="justify-content-center text-center mt-5 mb-2 pt-4 mx-5 px-5">
          <p class="mb-2 pt-4">Here's all it takes</p>
          <h3 class="display-5 mb-3 px-5 pb-5 mx-5">Follow these three simple steps to kickstart your musical quest!</h3>
          <div class="row px-3 mx-3 ">
            <div class="col-md-4 px-2 mb-5 pb-5 ">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Search.svg" alt="" class="image-fluid mb-3 " />
              <h3 class="h2 mb-2">Search</h3>
              <p class="mb-0 text-dark">Punch in your requirements and match with the best gurus out there in the market</p>
            </div>
            <div class="col-md-4 px-2 mb-5 pb-5">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Schedule.svg" alt="" class="image-fluid mb-3 " />
              <h3 class="h2 mb-2">Schedule</h3>
              <p class="mb-0 text-dark">Talk to your guru, decide on a convenient time, and join in from anywhere in the world</p>
            </div>
            <div class="col-md-4 px-2 mb-5 pb-5">
              <img src="https://dhunguru-client-images.s3.ap-south-1.amazonaws.com/Study.svg" alt="" class="image-fluid mb-3 " />
              <h3 class="h2 mb-2">Study</h3>
              <p class="mb-0 text-dark">Learn from the best and excel at your skills through carefully guided one-on-one sessions</p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle_content">
        <div class="row px-5 ">
          <div class="col-md-10 px-5 mx-5">
            <div class="row mx-2 my-5 px-5  ">
              <div class="  col-md-6 ml-4 px-4">
                <h1 class="font-weight-bolder text-center mb-2 px-5" style={{ fontSize: '44px' }}>Book Your  <div class="free  px-2"> FREE</div> Session</h1>
                <div id="carouselExampleIndicators" class="carousel slide mt-3 pt-3" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block " src="http://www.dhunguru.com/assets/3.svg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block " src="http://www.dhunguru.com/assets/4.svg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block " src="http://www.dhunguru.com/assets/1.svg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block " src="http://www.dhunguru.com/assets/2.svg" alt="Third slide" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ml-5 px-5">
                <div class="card" style={{ width: '28rem' }}>
                  <div class="card-body p-5 text-left">
                    <form>
                      <div class="form-group">
                        <label >Name</label>
                        <input type="text" class="form-control  shadow-none  mb-3 " id="formGroupExampleInput" placeholder="" />
                      </div>
                      <div class="form-group">
                        <label >Email Address</label>
                        <input type="text" class="form-control mb-3 shadow-none " id="formGroupExampleInput2" placeholder="" />
                      </div>
                      <div class="form-group">
                        <label >Phone Number</label>
                        <input type="text" class="form-control mb-3 shadow-none " id="formGroupExampleInput2" placeholder="" />
                      </div>
                      <div class="form-group">
                        <label >City</label>
                        <input type="text" class="form-control mb-3 shadow-none " id="formGroupExampleInput2" placeholder="" />
                      </div>
                      <a class="btn  btn-primary btn-lg btn-hover-shadow mb-3 px-3 " href="/instructors">Book Now</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Home;
