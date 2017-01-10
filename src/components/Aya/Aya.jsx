import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import AyaColor from './Aya-Color';
import Stat from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';

class Aya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ayaData: null,
      modal: false,
      activeTab: '1',
      statXP: {
        name: 'Hunt XP',
        amount: 8,
        max: 16,
        min: 0,
        milestones: [
          {
            at: 2,
            name: 'Age 1',
            type: 'story',
          },
          {
            at: 6,
            name: 'Age 2',
            type: 'story',
          },
          {
            at: 10,
            name: 'Age 3',
            type: 'story',
          },
          {
            at: 15,
            name: 'Age 4',
            type: 'story',
          },
          {
            at: 16,
            name: 'Retired',
            type: 'story',
          },
        ],
      },

    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div className="page-aya">
        <main className="main">
          <h1>Style Guide</h1>

          <br />

          <h3>Fonts</h3>
          <p>We use <a href="https://fonts.google.com/specimen/Ruda">Ruda</a> font with a base fontsize of 16px</p>

          <h1 className="ayah1">h1</h1>
          <p>Used at the top of pages in the title bar pattern.</p>

          <h2 className="ayah2">h2</h2>
          <p>Used as the heading of the boxes and widgets patterns.</p>

          <br />

          <h3>Colors</h3>

          <br />

          <h4>Brand Colors</h4>
          <AyaColor name="brand-primary" />
          <AyaColor name="body-color" />

          <br />

          <h4>Grays</h4>
          <AyaColor name="gray-dark" />
          <AyaColor name="gray" />
          <AyaColor name="gray-light" />
          <AyaColor name="gray-lighter" />
          <AyaColor name="gray-lightest" />

          <br />

          <h4>UI</h4>
          <p>These are bootstrap default styles. We&lsquo;ll probably use some of them but currently there&lsquo;s no place in the ui for them.</p>
          <AyaColor name="brand-success" />
          <AyaColor name="brand-info" />
          <AyaColor name="brand-warning" />
          <AyaColor name="brand-danger" />
          <br />
          <br />

          <h2>Patterns</h2>

          <h3>Box</h3>

          <div className="box">
            <header className="box-header">
              <div className="box-header-title">Box</div>
            </header>
            <div className="box-content">
              A box is a container to put things in
            </div>
          </div>
          <br />

          <div className="box">
            <header className="box-header">
              <div className="box-header-title">Box</div>
            </header>
            <button className="box-content">
              You can make me clickable
            </button>
          </div>


          <br />
          <br />

          <h3>Stats</h3>
          <p>Shows data, supports <em>amount</em>, <em>max</em>, <em>min</em>, <em>milestones</em>, <em>title</em></p>
          <div style={{ width: '200' }}>
            <Stat
              name={this.state.statXP.name}
              amount={this.state.statXP.amount}
              max={this.state.statXP.max}
              min={this.state.statXP.min}
              milestone={this.state.statXP.milestones}
            />
          </div>
          <br />

          <h4>Stat Adjustor</h4>
          <div style={{ width: '200' }}>
            <StatAdjust
              name={this.state.statXP.name}
              amount={this.state.statXP.amount}
              max={this.state.statXP.max}
              min={this.state.statXP.min}
              milestone={this.state.statXP.milestones}
            />
          </div>

          <h3>Modal</h3>
          <p>Coming Soon</p>


          <h2>Components</h2>

          <h3>Stat Box</h3>


        </main>
      </div>
    );
  }
}

export default Aya;
