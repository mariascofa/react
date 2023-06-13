const WinnerSmile = (props) => {
  const winner = props.winner;
  console.log(winner);

  const emojiData = {
    smile_0: "\u{1F643}",
    smile_1: "\u{1F928}",
    smile_2: "\u{1F976}",
    smile_3: "\u{1F635}",
  };

  return (
    <div>
      <h2>Winner:</h2>
      <div className="container">
        {winner.map((emoji) => (
          <div className="EmojiBox" key={emoji}>
            <span className="emoji" key={emoji}>
              {emojiData[emoji]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerSmile;
