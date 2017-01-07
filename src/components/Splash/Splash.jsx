import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Banner from '../../components/Banner/Banner';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleModal(show = !this.state.showModal) {
    this.setState({
      showModal: show,
    });
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="promo">
        <Banner message="The Watcher is coming soon. While you wait, sign up below for news, availability and future testing." />
        <div className="splash">
          <div className="splash-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.24 167.19">
              <title>The Watcher dot io</title>
              <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M1024.16,215.82a71.91,71.91,0,0,0-137.36,0l-0.44,1.43,0.44,1.43a71.33,71.33,0,0,0,40.86,44.82h-0.44a8.3,8.3,0,0,1,3.56,6.73v11.66l0,6.67a4.29,4.29,0,0,0,4.29,4.29H936a4.35,4.35,0,0,0,4.35-4.35v-9.67a1.7,1.7,0,0,1,1.69-1.64c0.81,0,1.73.42,1.73,2v32.13l0,3.29a4.29,4.29,0,0,0,4.29,4.29h0.94a4.35,4.35,0,0,0,4.35-4.35V281.22a1.73,1.73,0,0,1,3.46,0v46.9a4.35,4.35,0,0,0,4.35,4.35h0.94a4.29,4.29,0,0,0,4.3-4.29l0-3.29V283.45c0-1.63.93-2,1.73-2a1.7,1.7,0,0,1,1.69,1.64v18.22a4.35,4.35,0,0,0,4.35,4.35h0.94a4.29,4.29,0,0,0,4.29-4.29l0-3.29V270.28a8.29,8.29,0,0,1,3.49-6.65,71.32,71.32,0,0,0,41.16-44.95l0.44-1.43Zm-68.68,38.95c-27,0-48.48-12.42-59.22-37.66a62.5,62.5,0,0,1,118.45,0C1004.38,242.35,982.54,254.76,955.48,254.76Z" transform="translate(-886.36 -165.23)" />
              <circle id="_Path_" data-name="&lt;Path&gt;" cx="68.83" cy="48.55" r="20.47" />
            </svg>
            <h1>The Watcher</h1>
            <p>A web-based management app for Kingdom Death</p>
            <Button color="secondary" onClick={() => { this.handleModal(); }}>PLAY TEASER VIDEO</Button>
          </div>
        </div>

        <Modal isOpen={this.state.showModal} size="video" toggle={() => { this.handleModal(); }}>
          <ModalHeader>
            The Watcher
            <button onClick={() => { this.handleModal(); }} type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
          </ModalHeader>
          <ModalBody>
            <div className="vimeo">
              <iframe src="https://player.vimeo.com/video/197993327?autoplay=1&color=B57E2F&title=0&portrait=0" width="640" height="360" frameBorder="0" allowFullScreen />
            </div>
          </ModalBody>
        </Modal>

        <form
          action="//thewatcher.us14.list-manage.com/subscribe/post?u=a5b168ad5b9ccd71cf0135919&amp;id=8469b3d805"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form-inline promo-form" target="_blank" noValidate
        >
          <div className="form-group">
            <label className="sr-only" htmlFor="mce-EMAIL">Email Address </label>
            <input type="email" value={this.state.email} placeholder="Email Address" onChange={this.handleChange} name="EMAIL" className="form-control form-control-lg" id="mce-EMAIL" />
          </div>
          <div className="response" id="mce-error-response" style={{ display: 'none' }} />
          <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_a5b168ad5b9ccd71cf0135919_8469b3d805" tabIndex="-1" value="" />
          </div>
          <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary">SUBMIT</button>
        </form>
        <div className="promo-content">
          <p>
            We are working our asses off to bring you the most complete Kingdom Death management app to date.
            If you’d like updates and a shot at future testing, please submit your email address.
          </p>
          <br />
          <a href="https://twitter.com/thewatcherapp" className="twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.79 13.62"><path d="M14.11,1.08A6.27,6.27,0,0,0,16.33.24a3.9,3.9,0,0,1-1.46,1.91,4.94,4.94,0,0,0,1.93-.54A8.25,8.25,0,0,1,15,3.39,9.91,9.91,0,0,1,10.8,12c-2.59,2-7.54,2.29-10.8.12a6.66,6.66,0,0,0,5.08-1.44A3.54,3.54,0,0,1,1.87,8.32,3,3,0,0,0,3.39,8.2,3.55,3.55,0,0,1,.66,4.77a2.33,2.33,0,0,0,1.55.44A3.59,3.59,0,0,1,1.16.6,9.65,9.65,0,0,0,8.29,4.21,3.43,3.43,0,0,1,10,.42,3.48,3.48,0,0,1,14.11,1.08Z" /></svg> <span>follow us on Twitter</span></a>
        </div>


        <footer className="footer">
          &copy; 2016, Timothy O&lsquo;Connell, Logan Ogden, Caleb Kester, and Khoa Ngo
        </footer>
      </div>
    );
  }
}

export default Splash;
