import React, { Component } from 'react';
import Vimeo from 'react-vimeo';
import Banner from '../../components/Banner/Banner';

class splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // videoId: '197993327',
      email: null,
      autoplay: true,
      videoId: '166116374',
      playerOptions: {
        color: 'B57E2F',
        title: 0,
        byeline: 0,
        portrait: 0,
        autoplay: 1,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  render() {
    return (
      <div className="promo">
        <Banner message=" The Watcher is Coming Soon. Sign up below for updates, availability and future testing." />
        <div className="videoWrpr">
          <Vimeo
            videoId={this.state.videoId}
            playerOptions={this.state.playerOptions}
          />
        </div>

        <div className="splash">
          <form
            action="//thewatcher.us14.list-manage.com/subscribe/post?u=a5b168ad5b9ccd71cf0135919&amp;id=8469b3d805"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate
          >
            <label htmlFor="mce-EMAIL">Email Address </label>
            <input type="email" value={this.state.email} onChange={this.handleChange} name="EMAIL" className="required email" id="mce-EMAIL" />
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_a5b168ad5b9ccd71cf0135919_8469b3d805" tabIndex="-1" value="" />
            </div>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </form>
        </div>
        <p>
          We are working our asses off to bring you the most complete Kingdom Death management app to date.
          <br />
          If you’d like updates and a shot at future testing, please submit your email address.
        </p>


        <footer className="footer">
          &copy; 2016, Timothy O'Connel, Logan Ogden, Caleb Kester, and Khoa Ngo
        </footer>
      </div>
    );
  }
}

export default SignUp;
