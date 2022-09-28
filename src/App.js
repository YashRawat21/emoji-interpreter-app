import './App.css';
import { useState } from 'react';

const emojiDictionary = {
  "💕": "Love",
  "👍": "Thumbs Up",
  "🌍": "Earth",
  "😑": "Expressionaless face",
  "😢": "Sad face",
  "💸": "Money with wings",
  "🍕": "Pizza",
  "🔥": "Fire",
  "🤳": "Taking selfie",
  "👨‍💻": "A boy coding",
  "🛹": "Skateboard",
  "😎": "Face with sunglasses",
  "🥡": "Takeout",
  "🏀": "Basketball",
  "📮": "Postbox",
  "🛸": "UFO",
  "🎸": "Guitar",
  "🛸": "UFO",
  "💩": "Pile of poo",
  "🌭": "Hotdog",
  "💋": "Kiss mark",
  "🎮": "Video game controller",
  
};


let emojis = Object.keys(emojiDictionary);

function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("Enter the emoji or click any emoji to find it's meaning")



  function emojiMeaningHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];

    if(userInput in emojiDictionary) {
      setEmojiMeaning(meaning);
    } else {
      meaning = 'This is emoji is not present in our database.'
      setEmojiMeaning(meaning);
    }

    if(userInput === ''){
      meaning = "Enter the emoji or click any emoji to find it's meaning";
      setEmojiMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className='heading-container'>


      <h1 className='heading'>Emoji Interpreter</h1>
      </div>
      <input type="text" onChange={(e) => emojiMeaningHandler(e)} />
      <h2 className='emoji-meaning'>{emojiMeaning}</h2>
      <div className='emojis-list'>
      {
        emojis.map((emoji) => (
          <li key={emoji} onClick={()=>emojiClickHandler(emoji)}>{emoji}</li>
        ))
      }
      </div>
    </div>
  );
}

export default App;