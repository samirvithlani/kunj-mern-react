import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const {theme,settheme} = useContext(ThemeContext)
  //use Selector hook
  const state = useSelector((state)=>state)
  
  console.log(state)
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
      <button onClick={()=>{settheme(theme=="light"?"dark":"light")}}>{theme=="light"?"dark":"light"}</button>

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
            <Link class="nav-link" to="/apidemo11">
              API DEMO 11
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo2">
              API DEMO 2
            </Link>
          </li>
            <li class="nav-item">
            <Link class="nav-link" to="/apidemo3">
              API DEMO 3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/books">
              books
            </Link>
          </li>
          
          
          <li class="nav-item">
            <Link class="nav-link" to="/useeffectdemo">
              useeffectdemo
            </Link>
          </li>

          
       
          <li class="nav-item">
            <Link class="nav-link" to="/usememo">
              usememo
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">
              products
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/muidemo1">
              mui demo1
            </Link>
          </li>
          
          
          <li class="nav-item">
            <Link class="nav-link" to="/content">
              content
            </Link>
          </li>

          <li class="nav-item">
            <h4>CART {state.cart.cart.length}</h4>
          </li>
   
        </ul>
      </div>
    </nav>
  );
};
