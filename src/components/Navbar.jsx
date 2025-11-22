import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {/* <li class="nav-item active">
            <Link class="nav-link" to="/netflixhome">
              Home 
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/netflixshows">
              Shows
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/netflixmovies">
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo1">
              formdemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo2">
              formdemo2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo3">
              formdemo3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo4">
              formdemo4
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo6">
              formdemo6
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo7">
              formdemo7
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/multistepform">
              multistepform
            </Link>
          </li>
           */}

           <li class="nav-item">
            <Link class="nav-link" to="/apidemo1">
              API DEMO 1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo2">
              API DEMO 2
            </Link>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};
