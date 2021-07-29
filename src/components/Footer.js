import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import 'react-materialize';

export default function Footer() {
  const location = useLocation();
  const history = useHistory();
  return (<div>
    <footer className="section darken-2 white-text center">
          {location.pathname !== '/' && (
            <button
              className=""
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          )}
      <h6>&copy;2021 | Contact me:
        <a href="tel:757-404-5576">757-404-5576</a>Email: <a href="mailto:Jdogcrane@gmail.com">Jdogcrane@gmail.com</a>
      </h6>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="./assests/script.js"></script>
  </div>
  );
}