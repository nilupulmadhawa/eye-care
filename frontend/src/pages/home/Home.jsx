import React from 'react';
import { Link } from "react-router-dom";

import "./home.css";
//Bootstrap

import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";


export default function Home() {

  return (
    <>
      <div className="app bg-color home-style">

        <Header />
        <Cover />





        <section class="container py-5">
          <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Sustainable Eyewear</h1>
              <p>
                Made of 100% biodegradable Italian acetate
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="./img/girll.jpg" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">styley</h5>
              <p class="text-center"><Link to='/shop' class="btn btn-success">Go Shop</Link></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="./img/spec3.jpg" class="rounded-circle img-fluid border" /></a>
              <h2 class="h5 text-center mt-3 mb-3">Quality</h2>
              <p class="text-center"><Link to='/shop' class="btn btn-success">Go Shop</Link></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="./img/man.jpg" class="rounded-circle img-fluid border" /></a>
              <h2 class="h5 text-center mt-3 mb-3">Handsome</h2>
              <p class="text-center"><Link to='/shop' class="btn btn-success">Go Shop</Link></p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
