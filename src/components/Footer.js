import React from 'react';
import '../util/css/footer.css';


const Footer = () => {
  return (
    <div class= "footer">
      <footer>
        <div class="container">
          <div class="row">
            <div class="column">
              <h3>Find Us on Github/portfolio</h3>
              <ul>
                <li><a href="https://github.com/NickEikenberg">Nick Eikenberg</a></li>
                <li><a href="https://domacor.netlify.app/">Dom Mentee</a></li>
                <li><a href="https://git.generalassemb.ly/jamiealcazar">Jamie Alcazar</a></li>
              </ul>
            </div>
            <div class="column">
              <h3>Let's Connect</h3>

              <ul>
                <li><a href="https://www.linkedin.com/in/nick-eikenberg/">Nick Eikenberg</a></li>
                <li><a href="https://www.linkedin.com/in/domacor-mentee-7aa486126/">Dom Mentee</a></li>
                <li><a href="https://www.linkedin.com/in/jamiealcazar/">Jamie Alcazar</a></li>
              </ul>
            </div>
            <div class="copyright">
              <p class="copy">One Good Thing ☺ EST. 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )

}

export default Footer
