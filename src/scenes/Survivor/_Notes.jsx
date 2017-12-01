import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input
} from "reactstrap";
import _isEqual from "lodash/isEqual";
import Icon from "../../components/Icon/Icon";
import TextList from "../../components/TextList/TextList";
import { setNote } from "../../actions/attributes";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Notes",
      notes: [...this.props.notes],
      noteTemp: "",
      showModal: false,
      isSaving: false
    };
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleTypeNote = this.handleTypeNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    // this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      notes: [...nextProps.notes]
    });
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Resets our data
  resetData() {
    this.setState({
      notes: this.props.notes
    });
  }
  // Cancel event from the modal, reset the state.
  handleClose() {
    this.handleModalToggle();
    // this.resetData();
  }
  // Handle's the save and makes the API Call
  handleModalConfirm() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      notes: this.state.notes
    };
    this.handleModalToggle();
    // this.props.setAttributes(this.props.oid, data).catch(() => {
    //   this.resetData();
    // });
  }
  handleAddNote() {
    if (this.state.noteTemp.length > 0) {
      this.props
        .setNote(this.props.oid, this.state.noteTemp)
        .then(() => {
          this.setState({
            noteTemp: "",
            notes: [
              ...this.state.notes,
              {
                note: this.state.noteTemp
              }
            ]
          });
        })
        .catch(() => {
          this.resetData();
        });
    }
  }
  handleTypeNote(event) {
    this.setState({
      noteTemp: event.target.value
    });
  }
  handleRemoveNote(index) {
    this.setState(prevState => ({
      notes: prevState.notes.filter((_, i) => i !== index)
    }));
  }
  convertToTextList(list) {
    return list.map(i => ({
      desc: i.note
    }));
  }
  // convertToTextList(list) {
  //   const textList = [];
  //   list.forEach(i => {
  //     if (!Object.prototype.hasOwnProperty.call(i, "remove")) {
  //       textList.push({
  //         desc: i.note
  //       });
  //     }
  //   });
  //   return textList;
  // }
  // Determines the color of the confirm button
  confirmColor() {
    if (_isEqual(this.state.notes, this.props.notes)) {
      return "light";
    }
    return "primary";
  }
  renderTextList() {
    return this.state.notes.map((note, index) => {
      const key = note._id
        ? note._id.$oid
        : `${Math.random()
            .toString(36)
            .substr(2, 10)}`;
      return (
        <div className="btnDeselect" key={key}>
          {note.note}
          <Button
            color="danger"
            size="small"
            onClick={() => this.handleRemoveNote(index)}
          >
            <Icon name="trash" size="16" />
          </Button>
        </div>
      );
    });
  }
  renderAddNote() {
    return (
      <div className="btnDeselect btnDeselect--text">
        <Input
          type="text"
          placeholder="Enter note..."
          value={this.state.noteTemp}
          onChange={this.handleTypeNote}
        />

        <Button
          color="primary"
          size="small"
          onClick={() => this.handleAddNote()}
        >
          <Icon name="plus" size="16" />
        </Button>
      </div>
    );
  }
  // Renders our component
  render() {
    return (
      <div className={"widget survivorNotes"}>
        <header className={"widget-header widget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <TextList
            list={this.convertToTextList(this.props.notes)}
            minimum={1}
            showDetails
          />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleClose}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <div className="layout">
              {this.renderTextList()}
              {this.renderAddNote()}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleClose} color="link">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Notes.defaultProps = {
  notes: [],
  oid: ""
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      note: PropTypes.string
    })
  ),
  oid: PropTypes.string,
  setNote: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setNote
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Notes);
