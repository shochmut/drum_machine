import React from 'react';
import useState from 'react';
import './style.scss';
import useSound from 'use-sound';
import Button from 'react-bootstrap/Button';

// Define drumset resource. Note this is defined outside of the component so that it does not run every time the component is rendered since this constant will never change in this use.
const drums = [
  {
    id: 'heater1',
    name: 'Q',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'heater2',
    name: 'W',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: 'heater3',
    name: 'E',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 'heater4',
    name: 'A',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 'clap',
    name: 'S',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 'open-hh',
    name: 'D',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: 'kick-n-hat',
    name: 'Z',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 'kick',
    name: 'X',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 'closed-hh',
    name: 'C',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

export default function App() {
  //set state
  const [drum, setDrum] = React.useState('');

  //define callback handler
  const handleDisplay = (event) => {
    setDrum(event.target.value);
    new Audio(drums.find((x) => x.id === event.target.value).sound).play();
  };

  return (
    <div id="drum-machine">
      <Display id="display" displayDrum={drum} />
      {/* pass the callback handler to the drumpad component as prop */}
      <DrumPad onDrumPlay={handleDisplay} />
    </div>
  );
}

//note the props destructuring
function DrumPad({ onDrumPlay }) {
  const handleKeyPress = (e) => {
    
  }
  return (
    <div className="drum-pads">
      {drums.map(function (item) {
        return (
          <div>
            <Button
              className="drum-pad"
              id={item.id}
              variant="primary"
              value={item.id}
              onClick={onDrumPlay}
              onKeyPress={(e) => handleKeyPress(e)}
            >
              {item.name}
              <audio
                src={item.sound}
                className='clip'
                id={item.name}
              />
            </Button>{' '}
          </div>
        );
      })}
    </div>
  );
}

//note the props destructuring
function Display({ displayDrum }) {
  return (
    <div>
      <p>{displayDrum}</p>
    </div>
  );
}
