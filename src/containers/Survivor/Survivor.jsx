import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWorld } from '../../actions/getWorld';
import { getSettlement } from '../../actions/getSettlement';
import { getSurvivor } from '../../actions/getSurvivor';
import TugGraph from '../../components/TugGraph/TugGraph';
import Stat from '../../components/Stats/Stats';
import StatGroup from '../../components/Stats/StatGroup';
import BoxList from '../../components/BoxList/BoxList';
import Survival from '../../components/Survivor/Survival';
import SurvivorXP from '../../components/Survivor/Survivor-XP';

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: null,
      settlementData: null,
      survivalData: null,
    };
  }
  componentDidMount() {
    this.props.getWorld();
    this.props.getSettlement();
    this.props.getSurvivor();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.worldData) {
      this.setState({
        worldData: nextProps.worldData,
      });
    }
    if (nextProps.survivorData) {
      this.setState({
        survivorData: nextProps.survivorData,
      });
    }
    if (nextProps.settlementData) {
      this.setState({
        settlementData: nextProps.settlementData,
      });
    }
  }
  render() {
    if (this.state.worldData) {
      return (
        <div className="page-world">
          <main className="main">

            <div className="boxGroup">
              <StatGroup
                title="Survival"
                description="Limit: "
                stats={['Survival']}
                component="Survival"
              />
              <StatGroup
                title="Bleeding"
                stats={['']}
                component="Bleeding"
              />
              <StatGroup
                title="XP"
                stats={['Hunt', 'Courage', 'Understanding', 'Weapon']}
              />
            </div>
            <div className="boxGroup">
              <StatGroup
                title="Primary Stats"
                stats={['Movement', 'Accuracy', 'Strength', 'Evasion', 'Luck', 'Speed']}
              />
            </div>
            <div className="boxGroup">
              <StatGroup
                title="Armor"
                stats={['Brain', 'Head', 'Arms', 'Body', 'Waist', 'Feet']}
              />
            </div>

            <div className="boxGroup">
              { /*
                <Survival
                  number={Number(this.state.survivorData.survival)}
                  max={this.state.settlementData.sheet.survival_limit} />
              */}
              <Survival number={Number(this.state.survivorData.survival)} max={7} />
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Bleeding</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <Stat />
                  </div>
                </div>
              </div>
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Additional XP</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <SurvivorXP number={this.state.survivorData.hunt_xp} />
                    <Stat title="Courage" number={this.state.survivorData.Courage} />
                    <Stat title="Understanding" number={this.state.survivorData.Understanding} />
                    <Stat title="Weapon" number={this.state.survivorData.Weapon} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Primary Stats</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <Stat title="Movement" number={this.state.survivorData.Movement} />
                    <Stat title="Accuracy" number={this.state.survivorData.Accuracy} />
                    <Stat title="Strength" number={this.state.survivorData.Strength} />
                    <Stat title="Evasion" number={this.state.survivorData.Evasion} />
                    <Stat title="Luck" number={this.state.survivorData.Luck} />
                    <Stat title="Speed" number={this.state.survivorData.Speed} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Armor</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <Stat title="Brain" number={this.state.survivorData.Brain} />
                    <Stat title="Head" number={this.state.survivorData.Head} />
                    <Stat title="Arms" number={this.state.survivorData.Arms} />
                    <Stat title="Body" number={this.state.survivorData.Body} />
                    <Stat title="Waist" number={this.state.survivorData.Waist} />
                    <Stat title="Feet" number={this.state.survivorData.Feet} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Fighting Arts</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <BoxList list={this.state.survivorData.fighting_arts} />
                  </div>
                </div>
              </div>
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Disorders</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <BoxList list={this.state.survivorData.disorders} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Abilities</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <BoxList list={this.state.survivorData.abilities_and_impairments} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Impairments</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <BoxList list={this.state.survivorData.abilities_and_impairments} />
                  </div>
                </div>
              </div>
            </div>

            <div className="boxGroup">
              <div className="box">
                <header className="box-header">
                  <div className="box-header-title">Additional Notes</div>
                </header>
                <div className="box-content">
                  <div className="statGroup">
                    <BoxList list={this.state.survivorData.abilities_and_impairments} />
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    worldData: state.worldData,
    survivorData: state.survivorData,
    settlementData: state.settlementData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getWorld,
    getSettlement,
    getSurvivor,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
