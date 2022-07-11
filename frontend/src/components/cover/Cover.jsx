import React from "react";
import "./cover.css";

export default function Cover() {
  return (
    <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5 pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/girl.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success"><b>BEST</b> EYEWEAR</h1>
                  <p>
                    SEE has been voted “Best Eyewear” and “Best Optical Shop” in readers’ polls 78 times from coast to coast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5  pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/spec1.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">OPTICAL COLLECTION</h1>
                  <h3 class="h2">Made of 100% biodegradable Italian acetate</h3>
                  <p>
                    From luxurious acetates and custom hardware to elegantly sculpted lightweight titanium, the list of DITA’s innovations in eyewear is unrivaled, offering a vision for the future as memorable as its past.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5  pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/spec2.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">what are you looking for</h1>
                  <p>Enjoy express delivery and same-day delivery in Colombo & suburbs plus swift and simple returns, and exciting new men’s and women’s pieces uploaded frequently!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
      </a>
      <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
