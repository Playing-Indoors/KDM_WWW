import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import _sortedUniq from "lodash/sortedUniq";
import _isEqual from "lodash/isEqual";
import Icon from "../../components/Icon/Icon";
import TextList from "../../components/TextList/TextList";
import WidgetVariant from "../../components/Widget/WidgetVariant";
import LoadingSaving from "../../components/LoadingSaving/LoadingSaving";
import { setManyAssets } from "../../actions/abilities";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorList: props.survivorList,
      survivorListHumanized: [],
      showModal: false,
      selectValue: "",
      isSaving: false
    };
    this.handleAbilitySelect = this.handleAbilitySelect.bind(this);
    this.handleAbilityDeselect = this.handleAbilityDeselect.bind(this);
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
  }
  componentWillMount() {
    this.createSurvivorListHumanized(this.state.survivorList);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      survivorList: nextProps.survivorList
    });
    this.createSurvivorListHumanized(nextProps.survivorList);
  }
  // Builds our humanized version of our survivor list
  createSurvivorListHumanized(survivorList) {
    const list = [];
    survivorList.forEach(asset => {
      // Since assets aren't dictionaries, we have to manually make them
      const type = this.renderAssetLookup(asset, "sub_type");
      if (this.props.type.indexOf(type) !== -1) {
        const name = this.renderAssetLookup(asset, "name");
        let desc = "";
        // Because disorders have the be the ugly duckling. 😢
        if (this.renderAssetLookup(asset, "desc")) {
          desc = this.renderAssetLookup(asset, "desc");
        } else if (this.renderAssetLookup(asset, "survivor_effect")) {
          desc = this.renderAssetLookup(asset, "survivor_effect");
        }
        list.push({ name, desc, handle: asset });
      }
    });
    this.setState({
      survivorListHumanized: list
    });
  }
  // Controls opening up the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Resets our data
  resetData() {
    this.createSurvivorListHumanized(this.props.survivorList);
    this.setState({
      survivorList: this.props.survivorList
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
    this.resetData();
  }

  // Handle's the save and makes the API Call
  async handleModalConfirm() {
    this.setState({
      isSaving: true
    });
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      type: this.props.apiType,
      handles: this.state.survivorList,
      serialize_on_response: true // with this we will get an updated survivor. update the current survivor in redux
    };

    // this.props.setManyAssets(this.props.oid, data);
    await this.props
      .setManyAssets(this.props.oid, data)
      .then(() => {
        this.handleModalToggle();
        this.setState({
          isSaving: false
        });
      })
      .catch(e => {
        console.warn("sorry something went wrong", e);
        this.setState({
          isSaving: false
        });
      });
  }
  handleAbilitySelect(event) {
    let newSurvivorList = [...this.state.survivorList, event.target.value];
    newSurvivorList.sort();
    if (!this.props.allowDuplicates) {
      newSurvivorList = _sortedUniq(newSurvivorList);
    }
    this.setState({
      selectValue: "",
      survivorList: newSurvivorList
    });
    this.createSurvivorListHumanized(newSurvivorList);
  }
  handleAbilityDeselect(handle) {
    this.setState(prevState => ({
      survivorList: prevState.survivorList.filter(card => card !== handle),
      survivorListHumanized: prevState.survivorListHumanized.filter(
        card => card.handle !== handle
      )
    }));
  }
  // Determines the color of the confirm button
  confirmColor() {
    if (_isEqual(this.state.survivorList, this.props.survivorList)) {
      return "light";
    }
    return "primary";
  }
  renderAssetLookup(handle, attribute) {
    const asset = this.props.assetList[handle];
    if (asset) {
      return asset[attribute];
    }
    return null;
  }
  renderAvailableList() {
    const assets = Object.entries(this.props.assetList);
    return assets.map(ability => {
      if (this.props.type.indexOf(ability[1].sub_type) !== -1) {
        return (
          <option value={ability[0]} key={ability[0]}>
            {ability[1].name}
          </option>
        );
      }
      return null;
    });
  }
  renderSurvivorList() {
    return this.state.survivorListHumanized.map(ability => (
      <div className="btnDeselect" key={`${ability.handle}`}>
        {ability.name}
        <Button
          color="danger"
          size="small"
          onClick={() => this.handleAbilityDeselect(ability.handle)}
        >
          <Icon name="trash" size={16} />
        </Button>
      </div>
    ));
  }
  renderAddAbility() {
    if (this.state.survivorList.length < this.props.maximum) {
      return (
        <div className="btnSelect">
          <label
            className="btn btn-gray btn-block"
            htmlFor={`survivor-add-${this.type}`}
          >
            <Icon name="plus" size={12} />
          </label>
          <select
            id={`survivor-add-${this.type}`}
            onChange={this.handleAbilitySelect}
            value={this.state.selectValue}
          >
            <option disabled value="">
              Select Ability
            </option>
            {this.renderAvailableList()}
          </select>
        </div>
      );
    }
    return null;
  }
  // Controls what shows inside of the modal
  renderModalBody() {
    if (this.state.isSaving) {
      return <LoadingSaving />;
    }
    return (
      <div className="layout">
        {this.renderSurvivorList()}
        {this.renderAddAbility()}
      </div>
    );
  }
  // Controls the functionality of modal footer buttons
  renderModalFooter() {
    if (this.state.isSaving) {
      return null;
    }
    return (
      <ModalFooter>
        <Button color={this.confirmColor()} onClick={this.handleModalConfirm}>
          Confirm
        </Button>
        <Button onClick={this.handleCancel} color="link">
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  // Renders our component
  render() {
    const name =
      typeof this.props.type === "string"
        ? this.props.type
        : this.props.type[0];
    return (
      <div className={`widget survivor-${name}`}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.props.name}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <TextList
            list={this.state.survivorListHumanized}
            minimum={this.props.placeholderNumber}
            showDetails
          />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.props.name}</ModalHeader>
          <ModalBody>{this.renderModalBody()}</ModalBody>
          {this.renderModalFooter()}
        </Modal>
      </div>
    );
  }
}

Assets.defaultProps = {
  name: "",
  type: "",
  apiType: "",
  survivorList: [],
  assetList: {},
  placeholderNumber: 1,
  maximum: 999,
  allowDuplicates: false,
  oid: ""
};

Assets.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired, // dictionary type of assets
  apiType: PropTypes.string.isRequired, // api type to send
  survivorList: PropTypes.arrayOf(PropTypes.string),
  assetList: PropTypes.shape(),
  placeholderNumber: PropTypes.number,
  maximum: PropTypes.number,
  allowDuplicates: PropTypes.bool,
  oid: PropTypes.string
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setManyAssets
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Assets);
