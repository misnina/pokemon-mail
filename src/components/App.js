import React, { Component } from 'react';
import Editor from './Editor';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "reply",
      text: "DPPt",
      title: "Dear Reader",
      body: "Use this to send pokemon mail! to your friends!",
      signature: "Love, Nina"
    }
    this.setMail = this.setMail.bind(this);
    this.setText = this.setText.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setSignature = this.setSignature.bind(this);
  }

  setMail(mail) {
    this.setState({mail: mail});
  }

  setText(text) {
    this.setState({text: text});
  }

  setTitle(title) {
    this.setState({title: title});
  }

  setBody(body) {
    this.setState({body: body});
  }

  setSignature(signature) {
    this.setState({signature: signature})
  }

  render() {
    let { mail, text, title, body, signature } = this.state;
    return (
      <div id="app" className="flex padding30">
        <Editor 
          setMail={this.setMail}
          setText={this.setText}
          setTitle={this.setTitle}
          setBody={this.setBody}
          setSignature={this.setSignature}
        />
        <Output 
          mail={mail}
          text={text}
          title={title}
          body={body}
          signature={signature}
        />
      </div>
    );
  }
}

export default App;
