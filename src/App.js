/*import Card from './components/Card'
import './App.css';
import Status from './components/Status'
import { useState } from 'react';
import { Component } from 'react';




const imagePath = './Cards/';

const fillImages = () => {
  let images = array(20).fill(null);
  let values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
  let suits = ['h', 's'];
  let index = 0;
  for (let value = 0; value < values.length; value++) {
    for (let suit = 0; suit < suits.length; suit++) {
      images[index] = "card" + values[value] + suits[suit] + ".jpg";
      index++;
    }

  }
  return images
}

const shuffleImages = (images) => {
  for (let i = 0; i < images.length; i++) {
    let rnd = Math.floor(Math.random() * images.length);
    [images[i], images[rnd]] = [images[rnd], images[i]];
  }
}

const isMatch = (firstPick, secondPick, images) => {
  if (images[firstPick].substr(4, 1) ===
    images[secondPick].substr(4, 1))
    return true;
  else
    return false;
}
const checkCard = (firstPick, secondPick, images, tries, matches) => {
  setTries(tries + 1);
  if (isMatch(firstPick, secondPick, images)) {
    setMatches(matches + 1);
    images[firstPick] = null;
    images[secondPick] = null;
    setImages(images);
  }
  setPicks({first: -1, second: -1});
}

function App() {
  const [matches, setMatches] = useState(0);
  const [tries, setTries] = useState(0);
  const [images, setImages] = useState(fillAndShuffle);
  const [picks, setPicks] = useState({ first: -1, second: -1 });

  const handleClick = (event) => {
    const i = parseInt(event.target.id);

  }
}

  renderCard(i) {
    const image = (this.state.images[i] === null) ? 'none' :
      ((this.state.firstPick === i || this.state.secondPick === i) ?
        'url(' + this.imagePath + this.state.images[i] + ')' :
        'url(' + this.imagePath + 'black_back.jpg)');
    const enabled = (this.state.images[i] !== null &&
      (i !== this.state.firstPick && i !== this.state.secondPick) &&
      (this.state.firstPick === -1 || this.state.secondPick === -1) &&
      (this.state.matches < 10)) ? true : false;

    const eventHandler = (enabled) ? this.handleClick : () => { };
    const cursor = (enabled) ? "pointer" : "none";
    const style = {
      backgroundImage: image,
      cursor: cursor
    }

    return (
      <Card index={i} style={style} eventHandler={eventHandler} />
    );
   
  }


  render() {
    let status = (this.state.matches < 10) ?
      'Matches: ' + this.state.matches + " Tries: " + this.state.tries :
      "Congratulations!  You found all 10 matches in " + this.state.tries + " tries!";

    return (
      <div className="container" id="board">


        <Status status={status} />
        <div className="row">
          <div className="col-sm-1"></div>
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
          {this.renderCard(3)}
          {this.renderCard(4)}
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          {this.renderCard(5)}
          {this.renderCard(6)}
          {this.renderCard(7)}
          {this.renderCard(8)}
          {this.renderCard(9)}
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          {this.renderCard(10)}
          {this.renderCard(11)}
          {this.renderCard(12)}
          {this.renderCard(13)}
          {this.renderCard(14)}
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          {this.renderCard(15)}
          {this.renderCard(16)}
          {this.renderCard(17)}
          {this.renderCard(18)}
          {this.renderCard(19)}
          <div className="col-1"></div>
        </div>
      </div>

    );
  }

  handleClick(event) {
    console.log("handleClick is being called");
    const index = parseInt(event.target.id);
    console.log("Clicked card index:", index);

    if (this.state.firstPick === -1)
      this.setState({ firstPick: index })
    else {
      this.setState({ secondPick: index })
      setTimeout(this.checkCards, 2000);
    }
  }

  export default App;
  */
  import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Status from './components/Status';

const imagePath = './Cards/';

const fillImages = () => {
  let images = Array(20).fill(null);
  let values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
  let suits = ['h', 's'];
  let index = 0;
  for (let value = 0; value < values.length; value++) {
    for (let suit = 0; suit < suits.length; suit++) {
      images[index] = "card" + values[value] + suits[suit] + ".jpg";
      index++;
    }
  }
  return images;
};

const shuffleImages = (images) => {
  for (let i = 0; i < images.length; i++) {
    let rnd = Math.floor(Math.random() * images.length);
    [images[i], images[rnd]] = [images[rnd], images[i]];
  }
};

const fillAndShuffle = () => {
  let localImages = fillImages();
  shuffleImages(localImages);
  return localImages;
};

const isMatch = (firstPick, secondPick, images) => {
  if (images[firstPick].substr(4, 1) === images[secondPick].substr(4, 1)) {
    return true;
  } else {
    return false;
  }
};

const checkCard = (firstPick, secondPick, images, tries, matches, setTries, setMatches, setImages, setPicks) => {
  setTries(tries + 1);
  if (isMatch(firstPick, secondPick, images)) {
    setMatches(matches + 1);
    images[firstPick] = null;
    images[secondPick] = null;
    setImages([...images]); // Create a new array to trigger a re-render
  }
  setPicks({ first: -1, second: -1 });
};

const App = () => {
  const [matches, setMatches] = useState(0);
  const [tries, setTries] = useState(0);
  const [images, setImages] = useState(fillAndShuffle);
  const [picks, setPicks] = useState({ first: -1, second: -1 });

  const renderCard = (i) => {
    const image = images[i] === null ? 'none' :
      (picks.first === i || picks.second === i) ?
      'url(' + imagePath + images[i] + ')' :
      'url(' + imagePath + 'black_back.jpg)';
    const enabled =
      images[i] !== null &&
      (i !== picks.first && i !== picks.second) &&
      (picks.first === -1 || picks.second === -1) &&
      matches < 10;
  
    const eventHandler = enabled ? handleClick : () => {};
    const cursor = enabled ? 'pointer' : 'none';
    const style = {
      backgroundImage: image,
      cursor: cursor,
    };
  
    return <Card index={i} style={style} eventHandler={enabled ? handleClick : () => {}} />;
  };

  const handleClick = (event) => {
    const index = parseInt(event.target.id);
    if (picks.first === -1) {
      let localPicks = { ...picks };
      localPicks.first = index;
      setPicks(localPicks);
    } else {
      let localPicks = { ...picks };
      localPicks.second = index;
      setPicks(localPicks);
      let localImages = [...images];
      setTimeout(() => {
        checkCard(localPicks.first, localPicks.second, localImages, tries, matches, setTries, setMatches, setImages, setPicks);
      }, 2000);
    }
  };
   
  let status =
  matches < 10
    ? 'Matches: ' + matches + ' Tries: ' + tries
    : 'Congratulations! You found all 10 matches in ' + tries + ' tries!';

  return (
    <div className="container" id="board">
      <Status status={status} />
      <div className="row">
        <div className="col-sm-1"></div>
        {renderCard(0)}
        {renderCard(1)}
        {renderCard(2)}
        {renderCard(3)}
        {renderCard(4)}
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        {renderCard(5)}
        {renderCard(6)}
        {renderCard(7)}
        {renderCard(8)}
        {renderCard(9)} 
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        {renderCard(10)}
        {renderCard(11)}
        {renderCard(12)}
        {renderCard(13)}
        {renderCard(14)}
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        {renderCard(15)}
        {renderCard(16)}
        {renderCard(17)}
        {renderCard(18)}
        {renderCard(19)}
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default App;