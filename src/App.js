import React from 'react';
import {useEffect, useRef} from 'react';
import './style.scss';
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

//setup the keypress handler hook
const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default function App() {
  //set state
  const [drum, setDrum] = React.useState('*Click or Keypress drums*');

  //define display callback handler
  const handleDisplay = (event) => {
    setDrum(event.target.value);
    new Audio(drums.find((x) => x.id === event.target.value).sound).play();
  };

  //define keypress callback handler
  const handler = ({ key }) => {
    let keyOptions = ['q','w','e','a','s','d','z','x','c'];
    //condition to check if keypressed is one of drum keys
    if (keyOptions.includes(key)) {
      let drum = drums.find((x) => x.name === key.toUpperCase()).id;
      setDrum(drum);
      new Audio(drums.find((x) => x.id === drum).sound).play();
    }
  };

  useEventListener("keydown", handler);

  return (
    <div id="drum-machine">
      <div>
        <Display id="display" displayDrum={drum} />
        {/* pass the callback handler to the drumpad component as prop */}
        <DrumPad onDrumPlay={handleDisplay} />
      </div>
    </div>
  );
}

//note the props destructuring on the function 
function DrumPad({ onDrumPlay }) {
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
    <div className='display'>
      <p>{displayDrum}</p>
    </div>
  );
}
