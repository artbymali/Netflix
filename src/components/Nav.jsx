import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

  console.log(window.location.href);
  const isLogin = window.location.pathname;

  console.log(isLogin);

  return (
    <>
      <nav>
        <menu>
          <div className="logo">
            <NavLink to="/">
              <img src="/Netflix.png" alt="" />
            </NavLink>
            
          </div>
          <button className="btn" style={{
            display: isLogin==="/Login"?"none":"block"
            
          }}>
            <NavLink className={(e)=> {return e.isActive?"remove": ""}} to="/Login">Login</NavLink>
          </button>
        </menu>
      </nav>
    </>
  );
}

export default Nav;
