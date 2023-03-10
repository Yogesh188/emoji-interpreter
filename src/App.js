import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐ซ ": "Melting Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐ฅฒ": "Smiling Face with Tear",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Smiling Face with Open Hands",
  "๐คญ": "Face with Hand Over Mouth",
  "๐ซข": "Face with Open Eyes and Hand Over Mouth",
  "๐ซฃ": "Face with Peeking Eye",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ซก": "Saluting Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐ซฅ": "Dotted Line Face"
};

var emojiArray = Object.keys(emojiDictionary);

var emojiPlaceholder = "";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    emojiPlaceholder = emoji;
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={emojiPlaceholder}
      ></input>
      <div id="meaningDiv">{meaning}</div>
      <h3>Emoji's we have</h3>

      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
