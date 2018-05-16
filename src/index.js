import React, { Component } from "react";
import ReactDOM from "react-dom";
import marked from "marked";

class DisplayContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ""
    };
  }

  updateState = e => {
    this.setState({
      value: e.target.value
    });
  };

  markdownToHTML = markup => {
    return { __html: marked(markup) };
  };

  render() {
    return (
      <div>
        <RawInput updateState={this.updateState} />
        <span dangerouslySetInnerHTML={this.markdownToHTML(this.state.value)} />
      </div>
    );
  }
}

const RawInput = props => {
  return <textarea rows="20" cols="35" onChange={props.updateState} />;
};

ReactDOM.render(<DisplayContainer />, document.getElementById("root"));
