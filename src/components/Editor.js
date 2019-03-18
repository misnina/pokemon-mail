import React, { Component } from 'react';
import download from 'downloadjs';
import domtoimage from 'dom-to-image';


function DownloadButton(props) {
  return(
    <button onClick={() => {props.grabMail()}}>
      Download
    </button>
  )
}

class Editor extends Component {
  render() {
    return (
      <div id="editor" className="flex grow center">
        <form>
          <input 
            type="text" 
            onChange={(event) => this.props.setTitle(event.target.value)}
          />
          <textarea
            onChange={(event) => this.props.setBody(event.target.value)}
          />
          <input
            type="text"
            onChange={(event) => this.props.setSignature(event.target.value)}
          />
        </form>
        <DownloadButton
          grabMail={this.grabMail}
         />
      </div>
    );


  }

  grabMail() {
    domtoimage.toPng(document.getElementById('mail'))
      .then(dataURL => {
        download(dataURL, 'mail.png');
      })
  }
}

export default Editor;