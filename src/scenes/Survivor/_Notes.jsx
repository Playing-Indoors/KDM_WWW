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
import { setNote, rmNote } from "../../actions/attributes";
import LoadingSaving from "../../components/LoadingSaving/LoadingSaving";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Notes",
      notes: [...this.props.notes],
      noteTemp: "",
      showModal: false,
      isLoading: false
    };
    // Binding Events
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleTypeNote = this.handleTypeNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
  handleAddNote() {
    if (this.state.noteTemp.length > 0) {
      this.setState({ isLoading: true });
      const userId = localStorage.getItem("userId");
      const data = {
        user_id: userId,
        note: this.state.noteTemp
      };
      this.props
        .setNote(this.props.oid, data)
        .then(res => {
          let oid;
          if (res.note_id) {
            oid = res.oid;
          } else {
            oid = {
              $oid: `${Math.random()
                .toString(36)
                .substr(2, 10)}`
            };
          }
          console.warn(res);
          this.setState({
            isLoading: false,
            noteTemp: "",
            notes: [
              ...this.state.notes,
              {
                note: this.state.noteTemp,
                _id: oid
              }
            ]
          });
        })
        .catch(err => {
          console.log("err", err);
          this.resetData();
        });
    }
  }
  handleTypeNote(event) {
    this.setState({
      noteTemp: event.target.value
    });
  }
  handleRemoveNote(_id) {
    this.setState({ isLoading: true });
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      _id
    };
    this.props
      .rmNote(this.props.oid, data)
      .then(() => {
        this.setState(prevState => ({
          isLoading: false,
          notes: prevState.notes.filter(i => i._id.$oid !== _id)
        }));
      })
      .catch(err => {
        console.log("err", err);
        this.resetData();
      });
  }
  convertToTextList(list) {
    return list.map(i => ({
      desc: i.note
    }));
  }
  confirmColor() {
    if (_isEqual(this.state.notes, this.props.notes)) {
      return "light";
    }
    return "primary";
  }
  renderTextList() {
    return this.state.notes.map(note => {
      const key = note._id.$oid;
      return (
        <div className="btnDeselect" key={key}>
          {note.note}
          <Button
            color="danger"
            size="small"
            onClick={() => this.handleRemoveNote(key)}
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
  // Controls what shows inside of the modal
  renderModalBody() {
    if (this.state.isLoading) {
      return <LoadingSaving />;
    }
    return (
      <div className="layout">
        {this.renderTextList()}
        {this.renderAddNote()}
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
            list={this.convertToTextList(this.state.notes)}
            minimum={1}
            showDetails
          />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleClose}>
          <ModalHeader>Manage {this.state.title}</ModalHeader>
          <ModalBody>{this.renderModalBody()}</ModalBody>
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
  setNote: PropTypes.func,
  rmNote: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setNote,
      rmNote
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Notes);
