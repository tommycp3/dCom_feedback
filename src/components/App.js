import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getNotes, saveNote, deleteNote } from "../actions/notesAction";
import NoteCard from "./NoteCard";
import { getUser } from "../actions/userAction";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      title: "",
      body: ""
    };
    // bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  // handle change
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handle submit
  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid
    };
    this.props.saveNote(note);
    this.setState({
      title: "",
      body: ""
    });
  }

  // render notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <Link to={`/${key}`}>
            <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>
          {note.uid === this.props.user.uid && (
            <div>
              <button
                className="btn btn-danger btn-xs"
                onClick={() => this.props.deleteNote(key)}
              >
                Delete
              </button>
              <button className="btn btn-info btn-xs pull-right">
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </div>
          )}
        </NoteCard>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-12 ">
          <div className="intrinsic-container intrinsic-container-16x9">
            <iframe src="https://www.youtube.com/embed/77-7Nog0-lI" />
          </div>

          <div>
            <h3>Supporting Documents</h3>
            <ul>
              <li><a href="https://docs.google.com/presentation/d/15AnPP2wa1MrGCAZsnXRVqXN5qdybUGI_Z9Qw-h4bqkw/edit#slide=id.g3ed1b04126_0_0" target="_blank">Supporting Deck</a></li>
              <li><a href="https://drive.google.com/file/d/1uBAnIQ2d5ForoAlhqkIeK61vqFbnvdMi/view?usp=sharing" target="_blank">Active Timeline - Placeholder</a></li>
              <li><a href="https://docs.google.com/drawings/d/11a8dVPfgmczfWj3CXh57ayfv-6KgoNelZQ0si4vrlSE/edit?usp=sharing" target="_blank">Funding - "How To" Documentation</a></li>
              <li><a href="https://docs.google.com/drawings/d/11a8dVPfgmczfWj3CXh57ayfv-6KgoNelZQ0si4vrlSE/edit?usp=sharing" target="_blank">Legal Structure and xxxx</a></li>
            </ul>
            

            <br />
            <br />
            <br />

          </div>
          <div className="text-center">
            <h2>
              Please add a comment below to enter your feedback, idea
              refinement or help
            </h2>

            <br />
            <br />
            <br />

          </div>
        </div>

        <div className="row">
          <div className="col-sm-2 text-center">
            <img
              src={this.props.user.photoURL}
              height="100px"
              className="img img-responsive cirlce"
              style={{ padding: "20px" }}
            />
            <h4 className="username">
              We welcome your constructive feedback{" "}
              {this.props.user.displayName}
            </h4>
          </div>
          <div className="col-sm-10">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Please enter the flaw or risk you see to this business model."
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Great! Now provide supporting evidience as to why you see this as a problem, why you are qualified to say this and how you suggest to overcome this hurdle..."
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Current Feedback</h3>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getNotes, saveNote, deleteNote, getUser }
)(App);
