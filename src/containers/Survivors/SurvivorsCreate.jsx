import React from "react";
import { Button, Input, ButtonGroup } from "reactstrap";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSettlement } from "../../actions/getSettlement";
import { createSurvivor } from "../../actions/getSurvivor";
import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class SurvivorCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.randomName = this.randomName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.state = {
      name: "",
      gender: "F",
      settlementId: window.location.pathname.split("/")[2]
    };
  }
  randomName() {
    const mNames = [
      "Green",
      "Brown",
      "Forest",
      "Brock",
      "Hubris",
      "Zed",
      "Red",
      "Gideon",
      "Adrastus",
      "Logan",
      "Xander",
      "Pennyworth",
      "Craaaig",
      "Tony",
      "Tony Rigatonis",
      "Tony “Tony” Pepperonis",
      "Mason",
      "Salad",
      "Lavash",
      "Kebab",
      "Humus",
      "Falafel",
      "Baharat",
      "Naruto",
      "Sasuke",
      "Shinji",
      "Frank",
      "Owen",
      "Democritus",
      "Adam",
      "Riddick",
      "Tank",
      "Gomer",
      "Dozer",
      "Neo",
      "Schlumpy",
      "Lumpy",
      "Geoff",
      "Geompy",
      "Kendrick",
      "Gruld",
      "Baergoth",
      "Fjornir",
      "Esseldair",
      "Samwise",
      "Surly",
      "Croaker",
      "Milhouse",
      "Anro",
      "Dash",
      "Boyo",
      "Mano",
      "Dado",
      "Adrian",
      "Frank",
      "Charlie",
      "Dennis",
      "Mac",
      "Zero",
      "Pallas",
      "Teos",
      "Ceyx",
      "Trajan",
      "Attis",
      "Kira",
      "Mordred",
      "Mougle",
      "Sete",
      "Kaos",
      "Bellon",
      "Hector",
      "Prince",
      "Bramble",
      "Sha‘Guhl",
      "Higor the Slayer",
      "Ibron",
      "Pan",
      "Han Solo",
      "Daemon",
      "Saetan",
      "Lucivar",
      "Mulder",
      "Gaius Baltar",
      "Fred",
      "Cross",
      "Flute",
      "Rhongomiant",
      "Oaxaca",
      "Bob the Butcher",
      "Olaf"
    ];
    const fNames = [
      "Scarlet",
      "Red",
      "Ruby",
      "Rose",
      "Antiope",
      "Alenia",
      "Blue",
      "Ugg-Ugg Maker of Stew",
      "Toto",
      "Delilah",
      "Lexi",
      "Sarah",
      "Tony Ms. Boney",
      "Tony",
      "Lola",
      "Samsa",
      "Shawarma",
      "Dolma",
      "Feta",
      "Harissa",
      "Halva",
      "Baklava",
      "Hinata",
      "Sakura",
      "Pthumeria",
      "Hannah",
      "Delilah",
      "Arya",
      "Chastity",
      "Cher",
      "Aloy",
      "Griselle",
      "Silvia",
      "Ciaran",
      "Tabitha",
      "Luna",
      "Ophelia",
      "Merida",
      "Bertha",
      "Maeve",
      "Batman's Mom",
      "Lilith",
      "Twilight",
      "Skati",
      "Aura",
      "Girlo",
      "Mamo",
      "Gigi",
      "Dee",
      "Jade",
      "Anyte",
      "Danais",
      "Eris",
      "Hera",
      "Iset",
      "Lucina",
      "Nyx",
      "Sumia",
      "Athena",
      "Aurora",
      "Keitara",
      "Cereanna",
      "Loreley",
      "Zeefa",
      "Farina",
      "Silvia",
      "Isla",
      "Carleen",
      "Francine",
      "King Woman",
      "Jana",
      "Johanna",
      "Cara",
      "Lyra",
      "Leia",
      "Jaenelle",
      "Scully",
      "Six",
      "Bertha",
      "Dawn",
      "Fen-Yll",
      "Fenchurch",
      "Chihuly",
      "Carnwenhan",
      "Kluke",
      "Ashe",
      "Miss Taken",
      "Emii"
    ];
    let random = "";
    if (this.state.gender === "F") {
      random = fNames[Math.floor(Math.random() * fNames.length)];
    } else {
      random = mNames[Math.floor(Math.random() * mNames.length)];
    }
    this.setState({
      name: random
    });
  }
  handleCreate(e) {
    e.preventDefault();
    if (this.state.name.length > 0) {
      createSurvivor(this.state.settlementId, this.state)
        .then(() => {
          this.props.getSettlement(this.props.params.oid);
          browserHistory.goBack();
        })
        .catch(err => {
          console.warn("err", err);
        });
    }
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleGenderChange(e) {
    this.setState({
      gender: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Header name={"Create Survivor"} />
        <form className="layout" onSubmit={this.handleCreate}>
          <Widget>
            <Input
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Enter survivor name..."
              size="sm"
              autoFocus
              required
              onChange={this.handleNameChange}
            />
            <WidgetFooter>
              <Button color="gray" size="sm" onClick={this.randomName}>
                Randomize Name
              </Button>
              <Input
                type="select"
                value={this.state.gender}
                size="sm"
                onChange={this.handleGenderChange}
              >
                <option value="F">Female</option>
                <option value="M">Male</option>
              </Input>
            </WidgetFooter>
          </Widget>
          <Widget>
            <ButtonGroup className="btn-group--full">
              <Button
                color="gray"
                block
                tag={Link}
                to={`/settlements/${this.state.settlementId}/survivors/`}
              >
                Cancel
              </Button>
              <Button color="primary" block type="submit">
                Create
              </Button>
            </ButtonGroup>
          </Widget>
          {/* TODO: Caleb, style this */}
          <div>Disclaimer about new survivor bonuses not applying yet</div>
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { homeData: state.homeData };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettlement
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SurvivorCreate);
