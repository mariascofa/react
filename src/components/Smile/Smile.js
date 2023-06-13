import React, { Component } from "react";
import WinnerSmile from "../WinnerSmile/WinnerSmile";
import "./smile.css";

class Smiles extends React.Component {
  state = {
    smile_0: 0,
    smile_1: 0,
    smile_2: 0,
    smile_3: 0,
    maxVotes: [],
    showSmileWiner: false,
  };
  incrementValue = (smileId) => {
    this.setState(() => ({ [smileId]: this.state[smileId] + 1 }));
  };
  voteResult = () => {
    const nonEmptyResults = Object.values(this.state).filter(
      (votesAmount) => votesAmount > 0
    );
    if (nonEmptyResults.length > 0) {
      let currentMaxValue = Math.max(...Object.values(this.state));
      const maxVotesArray = Object.keys(this.state).filter(
        (smileId) => this.state[smileId] === currentMaxValue
      );
      this.setState({ maxVotes: maxVotesArray, showSmileWiner: true });
    }
  };

  render() {
    const emojiData = [
      { id: "smile_0", code: "\u{1F643}", box_id: "box_0" },
      { id: "smile_1", code: "\u{1F928}", box_id: "box_1" },
      { id: "smile_2", code: "\u{1F976}", box_id: "box_2" },
      { id: "smile_3", code: "\u{1F635}", box_id: "box_3" },
    ];

    if (this.state.showSmileWiner) {
      return <WinnerSmile winner={this.state.maxVotes} />;
    }

    return (
      <div>
        <div className="container">
          {emojiData.map((emoji) => (
            <div className="EmojiBox" key={emoji.box_id}>
              <span
                className="emoji"
                key={emoji.id}
                onClick={() => this.incrementValue(emoji.id)}
              >
                {emoji.code}
              </span>
              <span className="EmojiNumber">{this.state[emoji.id]}</span>
            </div>
          ))}
        </div>
        <button onClick={this.voteResult}>Show Results</button>
      </div>
    );
  }
}

export default Smiles;
