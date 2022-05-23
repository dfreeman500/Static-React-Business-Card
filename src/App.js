import profilePicture from './images/Profile Picture.png';
import twitterIcon from './images/Twitter Icon.png';
import facebookIcon from './images/Facebook Icon.png';
import instagramIcon from './images/Instagram Icon.png';
import githubIcon from './images/GitHub Icon.png';
import email from './images/Email.png';
import linkedIn from './images/LinkedIn.png';




import './App.css';

function App() {
  return (
    <div className="App">

      <img src={profilePicture} className="App-picture" alt="Profile Picture" />
      <div className="info-box">
        <div className="contact-info">
          <p className="name">Laura Smith </p>
          <p className="title">Frontend Developer</p>
          <p className="email">laurasmith.website</p>
        </div>
        <div className="contactButtons">
          <img src={email} className="email-button" alt="Email Button" />
          <img src={linkedIn} className="linkedIn-button" alt="LinkedIn Button" />
        </div>
        <div className="summary">
          <h3 className="summary-title">About</h3>
          <p className="summary-text">
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
          <h3 className="interests-title">Interests</h3>
          <p className="interests-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.          </p>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media-inner">
          <img src={twitterIcon} className="twitter-Icon" alt="Twitter Icon" />
          <img src={facebookIcon} className="facebook-Icon" alt="Facebook Icon" />
          <img src={instagramIcon} className="instagram-Icon" alt="Instagram Icon" />
          <img src={githubIcon} className="github-Icon" alt="Github Icon" />
        </div>
      </div>
    </div>
  );
}

export default App;


{/* <header className="App-header">

<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}