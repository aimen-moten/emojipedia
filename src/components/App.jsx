import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function CreateEmojiCard(emoji) {
  return <Card name={emoji.name} emoji={emoji.emoji} meaning={emoji.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmojiCard)}</dl>
    </div>
  );
}

export default App;
