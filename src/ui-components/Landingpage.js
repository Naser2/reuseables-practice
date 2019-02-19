import React, { Component } from 'react'
import '../App.css';

export default class Landingpage extends Component {
  render() {
    return (
      <div>
         <header class="main-header">

            <nav class="transparent">
              <div class="container">
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo">Great App</a>
                  <a href="#" data-activates="mobile-nav" class="button-collapse">
                    <i class="fa fa-bars"></i>
                  </a>
                  <ul class="right hide-on-med-and-down">
                    <li>
                      <a class="active-link" href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="solutions.html">Solutions</a>
                    </li>
                    <li>
                      <a href="signup.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="#" class="btn purple">Login</a>
                    </li>
                    <li>
                      <a href="https://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <ul class="side-nav" id="mobile-nav">
                    <h4 class="purple-text text-darken-4 center">Quazzu</h4>
                    <li>
                      <div class="divider"></div>
                    </li>
                    <li>
                      <a href="index.html">
                        <i class="fa fa-home grey-text text-darken-4"></i> Home</a>
                    </li>
                    <li>
                      <a href="solutions.html">
                        <i class="fa fa-cog grey-text text-darken-4"></i> Solutions</a>
                    </li>
                    <li>
                      <a href="signup.html">
                        <i class="fa fa-users grey-text text-darken-4"></i> Sign Up</a>
                    </li>
                    <li>
                      <div class="divider"></div>
                    </li>
                    <li>
                      <a href="#" class="btn purple">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
     </header>
{/*            
            <div class="showcase container">
              <div class="row">

                <div class="col s12 m10 offset-m1 center">
                  <h5>Welcome To Quazzu</h5>
                  <h1>Build For The Future</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugit deserunt quos provident aliquam inventore.</p>
                  <br>
                  <br>
                  <a href="solutions.html" class="btn btn-large white purple-text">Learn More</a>
                  <a href="signup.html" class="btn btn-large purple white-text">Sign Up</a>
                </div>

              </div>
            </div>

    </header>

      
        <section class="section section-icons center">
          <div class="container">
            <div class="row">
              <div class="col s12 m4">
                <div class="card-panel">
                  <i class="fa fa-user fa-3x deep-purple-text text-darken-2"></i>
                  <h5 class="grey-text text-darken-4">Free Account</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card-panel">
                  <i class="fa fa-database fa-3x deep-purple-text text-darken-2"></i>
                  <h5 class="grey-text text-darken-4">NoSQL Databases</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card-panel">
                  <i class="fa fa-bolt fa-3x deep-purple-text text-darken-2"></i>
                  <h5 class="grey-text text-darken-4">Fast Conections</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="section section-about grey lighten-4">
          <div class="container">
            <div class="row">
              <div class="col s12 m6">
                <h3>
                  <span class="deep-purple-text text-darken-1">About</span> Us</h3>
                <p class="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio eum magnam aut at voluptates omnis sint reiciendis
                  dolorem recusandae.</p>
              </div>
              <div class="col s12 m6">
                <img src="img/tech.jpg" alt="" class="circle responsive-img"/>
              </div>
            </div>
          </div>
        </section>


        <section class="section section-developers white-text">
          <div class="primary-overlay valign-wrapper">
            <div class="container">
              <div class="row">
                <div class="col s12 center">
                  <h3>For Developers, By Developers</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-language grey lighten-4">
          <div class="container">
            <div class="row">
              <h4 class="center">Work With
                <span class="deep-purple-text text-darken-1"> Any Language</span>
              </h4>
              <br>
              <br>
              <div class="row">

                <div class="col s2">
                  <img src="img/python-logo.png" class="responsive-img" alt=""/>
                </div>

                <div class="col s2">
                  <img src="img/ruby-logo.png" class="responsive-img" alt=""/>
                </div>

                <div class="col s2">
                  <img src="img/php-logo.png" class="responsive-img" alt=""/>
                </div>

                <div class="col s2">
                  <img src="img/node-logo.png" class="responsive-img" alt=""/>
                </div>

                <div class="col s2">
                  <img src="img/c-sharp-logo.png" class="responsive-img" alt=""/>
                </div>

                <div class="col s2">
                  <img src="img/java-logo.png" class="responsive-img" alt=""/>
                </div>

              </div>

            </div>
          </div>
        </section>


        <section class="section section-podcast white-text">
          <div class="primary-overlay valign-wrapper">
            <div class="container">
              <div class="row">
                <div class="col s12 m8">
                  <h4>Listen to the Quazzu Podcast</h4>
                  <p>Every Thursday at 5pm EST</p>
                </div>
                <div class="col s12 m4">
                  <a href="#" class="btn purple btn-large">
                    <i class="fa fa-podcast"></i> Listen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-testimonial grey lighten-4">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <div class="carousel carousel-slider center">
                  <div class="carousel-item" href="#one!">
                    <h2>Testimonial 1</h2>
                    <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                      dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                      <em>- John Doe From Microsystems</em>
                    </p>
                    <div class="carousel-fixed-item center hide-on-small-and-down">
                      <a href="#" class="btn grey">Read More</a>
                    </div>
                  </div>
                  <div class="carousel-item" href="#two!">
                    <h2>Testimonial 2</h2>
                    <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                      dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                      <em>- Mike SMith From Edge INC</em>
                    </p>
                    <div class="carousel-fixed-item center hide-on-small-and-down">
                      <a href="#" class="btn grey">Read More</a>
                    </div>
                  </div>
                  <div class="carousel-item" href="#three!">
                    <h2>Testimonial 3</h2>
                    <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                      dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                      <em>- Karen Williams from Techsoft</em>
                    </p>
                    <div class="carousel-fixed-item center hide-on-small-and-down">
                      <a href="#" class="btn grey">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    )
  }
}
