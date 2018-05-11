import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Components
import { Button } from 'rmwc/Button';

const Greeting = () =>(

    <div className="greeting mx-auto">
          <h1 className="text-center greeting-h1">TRAMODANA</h1>
          <h3 className="text-center greeting-h3">The monitoring platform for your business processes.</h3>
            <div className="d-flex justify-content-center">
              <div className="col-2 d-flex justify-content-center">
                <i className="material-icons p-2 check-icon">check</i>
                <p className="p-2 greeting-p">Model</p>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <i className="material-icons p-2 check-icon">check</i>
                <p className="p-2 greeting-p">Measure</p>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <i className="material-icons p-2 check-icon">check</i>
                <p className="p-2 greeting-p">Improve</p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <NavLink className="navbar-brand" exact to="/dashboard">
                <Button unelevated
                  className="px-5 greeting-button"
                  onClick={() =>console.log("Start")}
                  >Start</Button>
              </NavLink>
            </div>
        </div>
);

export default Greeting;