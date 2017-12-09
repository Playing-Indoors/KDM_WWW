import React from "react";
import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";

class About extends React.Component {
  render() {
    return (
      <div className="main">
        <Header back={"/"} name="About Us" />
        <div className="layout">
          <Widget title="Mission Statement">
            <p>
              A better way to track and manage the stories and experiences
              within Kingdom Death.
            </p>
            - - <br />
            <em>
              <small>
                Timothy O&rsquo;Connell, Logan Ogden, Caleb Kester, and Khoa Ngo
              </small>
            </em>
          </Widget>
          <Widget title="FAQ">
            <h2>
              When <em>XYZ</em> Feature Be Done?
            </h2>
            <p>
              We are currently focused on getting the survivor management
              completely done. We would rather have one area of the app polished
              instead of partial coverage of all of the tools.
            </p>
            <h2>How Can I Contribute?</h2>
            <p>
              There are multiple ways you can help contribute to this project:
            </p>
            <ul>
              <li>
                <strong>Word of Mouth</strong>: Tell your friends, tell your
                mother, tell your grandmother!
              </li>
              <li>
                <strong>Open Source</strong>: Our code is open source. One of
                the next things we'll do is create some contribution guides and
                allow you to contribute code.
              </li>
              <li>
                <strong>Support</strong>: We will be looking into using some
                sort of support method (e.g. patreon, paypal) in 2018.
              </li>
            </ul>
          </Widget>
        </div>
      </div>
    );
  }
}

export default About;
