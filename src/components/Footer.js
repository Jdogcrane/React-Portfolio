import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-materialize';
import { Parallax } from 'react-materialize';
export default function Footer() {
  const location = useLocation();
  const history = useHistory();
  return (<div>
    <footer className="nav section spacingFooter center titleBig">
         
      <h6>&copy;2021
      </h6>
    </footer>
    <Parallax className="animate__fadeIn animate__animated "
        image={<img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349048568242236/backdrop.jpg" />}
        options={{
          responsiveThreshold: 10
        }}
      />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="./assests/script.js"></script>
  </div>
  );
}