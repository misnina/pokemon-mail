import React, { Component } from 'react';
import download from 'downloadjs';
import domtoimage from 'dom-to-image';

class Editor extends Component {
  render() {
    return (
      <div id="editor" className="flex grow center">
        <button onClick={() => {this.grabMail()}}>
          Download
        </button>
      </div>
    );
  }

  grabMail() {
    this.props.setSpacer(true);
    this.forceUpdate();
    domtoimage.toPng(document.getElementById('mail'))
      .then(dataURL => {
        download(dataURL, 'mail.png');
        this.props.setSpacer(false);
      })
  }
}

export default Editor;