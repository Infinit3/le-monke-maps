"use strict";

const fs = require("fs");

const INPUT = "ExpertStandard.dat";
const OUTPUT = "ExpertStandard.dat";

let difficulty = JSON.parse(fs.readFileSync(INPUT));

//#region this just counts how many time you ran it for fun, feel free to remove.
if (!fs.existsSync("count.txt")) {
  fs.writeFileSync("count.txt", parseInt("0").toString());
}
let count = parseInt(fs.readFileSync("count.txt"));
count++;
fs.writeFileSync("count.txt", count.toString());
console.log("GIVE IT UP FOR RUN " + count);
//#endregion



//        -  -  -  -  -  -  -  -  -  -  -  -  -  LOOK BELOW FOR COMMENT TEXT WITH A LINE LIKE THIS. READ ALL OF THESE BEFORE USING!  -  -  -  -  -  -  -  -  -  -  -  -  -  





difficulty._customData = { _pointDefinitions: [], _customEvents: [], _environment: [] };

const _customData = difficulty._customData;
const _obstacles = difficulty._obstacles;
const _notes = difficulty._notes;
const _customEvents = _customData._customEvents;
const _pointDefinitions = _customData._pointDefinitions;
const _environment = _customData._environment;

if (!difficulty._customData._environment) difficulty._customData._environment = []

let filterednotes;

_obstacles.forEach(wall => {
  if (!wall._customData) {
    wall._customData = {};
  }
});

_notes.forEach(note => {
  if (!note._customData) {
    note._customData = {};
  }
});










//#region helper functions -  -  -  - These make life a LOT eassier, look through, figure out what they do, add your own, have fun :)  ---   Many are very specific use cases and might need to be modified depnding on use.


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}








/*
//#region  EXAMPLES   -  -  -  -  -  -  -  -  -  -  -  -  -  use these as a copy/paste template for the lazy   -  -  -  -  -  -  -  -  -  -  -  -  -  




// ---- function calling example - use these when possible to get rid of clutter and make life easier

trackOnNotesBetween("dumb track name here", start beat here, end beat here, offset here);    





// These three bits below are different ways of filtering notes by time. You can filter notes by specific beats, or by sections of beats. 
// Data written here, will be applied directly to the note, and any animation data will act as a "path animation" and will animate over the course of each individual notes life, not by specific beats. 
// ----  Usually follows [x,y,z,time]  ----  Note: when adding animatios directly to the note (path animations); time "0" is note spawn - "0.5" is when the note is at players feet, and "1" is when the note dies

// It's good practice to have the note at it's original position by ~0.4,0.45 to compensate for sabers being long and the player usually cutting the note before it arrives ath the feet on the platform. 
// Also, if you want to do funny animations, use a longer offset - as long as your custom animation finishes around "0.45" the player will percieve it as a comfortable offset (yes, even if it's at like +10)




filterednotes = notesAt([insert specific note time/beat here]);
filterednotes.forEach(note => {
  note._customData._noteJumpStartBeatOffset = -0.1;       // tbh I only really use this for NJS/offset changes and to remove the spawn effect.
  note._customData._noteJumpMovementSpeed = 17;       
  note._customData._animation = {}         // this chunk of text is required if doing any note animations this way
  note._customData._animation._rotation = [[-90, 0, 0, 0],[0,0,0,0.5,"easeOutElastic"]];     // feel free to use any of the other animation properties from the github --- these will add each animation on a per note basis
});

filterednotes = _notes.filter(n => n._time >= 69 && n._time <= 420);
filterednotes.forEach(note => {
  note._customData._track = "dumb track name here";
  note._customData._noteJumpStartBeatOffset = 69;
  note._customData._noteJumpMovementSpeed = 420;
});

filterednotes = _notes.filter(n => n._time >= 69 && n._time <= 420);
filterednotes.forEach(note => {
  note._customData._track = "dumb track name here";
  note._customData._noteJumpStartBeatOffset = 666;
  note._customData._noteJumpMovementSpeed = 777;
  note._customData._fake = true;
  note._customData._interactable = false;
  note._customData._disableSpawnEffect = "true"   // NOTE: removing spawn effect will scuff practice mode if you try and play at a section or track with a note already spawnd that has this property set to true - you need to start playing before these spawn in
});









//use this to push "_customEvents" like track animations, path animations, track parenting, assigning player to track, etc.

_customEvents.push({
  _time: 69,
  _type: "AnimateTrack",
  _data: {
    _track: "dumb track name here",
    _duration: 420,
    _easing: "easeOutQuad",
    _position: [[0, 0, 0, 0], [0, 10, 10, 1]],
    _rotation: [[0, 180, 0, 0]],
    _dissolve: [[1, 0], [0, 0.8]],
    _dissolveArrow: [[1, 0], [0, 1]]
  }
});       



// you can string together multiple thingies by adding a comma after ""}"" and slapping in another {} thingy - like so vvvvvvvvv

// If your track/note animation spawns normally, and kind of "jumps" or snaps to the next spot, make sure the note/track is in the desired position before the notes spawn. - Adjust animation time to before note spawns
//   ---   The example below will snap to _rotation "20" on the y axis, because at _time "0", y axis was at "-15"   ---   you gotta make sure these match :)

_customEvents.push({
  _time: 0,
  _type: "AnimateTrack",
  _data: {
    _track: "dumb track name here",
    _duration: 1,
    _position: [[0, 0, 0, 0]],
    _rotation: [[0, -15, 0, 0]],
    _dissolve: [[1, 0]],
    _dissolveArrow: [[1, 0]]
  }
}, {
  _time: 69,
  _type: "AnimateTrack",
  _data: {
    _track: "dumb track name here",
    _duration: 420,
    _easing: "easeOutQuad",
    _position: [[0, 0, 0, 0], [0, 10, 10, 1]],
    _rotation: [[0, 20, 0, 0]],
    _dissolve: [[1, 0], [0, 0.8]],
    _dissolveArrow: [[1, 0], [0, 1]]
  }
});

// you can also modify these push things to add in _pointDefinitions, _notes, _obstacles, and _events (lighting)   ----    There are better examples of this in the original demo.js file from the NE Documentation and some of the functions above. 






*/
//#region                       -  -  -  -  -  -  -  -  -  -  -  -  -  DO YOUR DIRTY WORK HERE  -  -  -  -  -  -  -  -  -  -  -  -  -




_environment.push(
  {
    "_id": "\\]SmallPillarPair\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_position": [
      -7,
      42,
      50
    ],
    "_localRotation": [
      0,
      0,
      -180
    ],
    "_track": "SmallPillarL0"
  },
  {
    "_id": "\\]SmallPillarPair\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_position": [
      7,
      42,
      50
    ],
    "_localRotation": [
      0,
      0,
      180
    ],
    "_track": "SmallPillarR0"
  },
  {
    "_id": "\\]SmallPillarPair \\(1\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_position": [
      -7,
      42,
      70
    ],
    "_localRotation": [
      0,
      0,
      -180
    ],
    "_track": "SmallPillarL1"
  },
  {
    "_id": "\\]SmallPillarPair \\(1\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_position": [
      7,
      42,
      70
    ],
    "_localRotation": [
      0,
      0,
      180
    ],
    "_track": "SmallPillarR1"
  },
  {
    "_id": "\\]SmallPillarPair \\(2\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_position": [
      -7,
      42,
      90
    ],
    "_localRotation": [
      0,
      0,
      -180
    ],
    "_track": "SmallPillarL2"
  },
  {
    "_id": "\\]SmallPillarPair \\(2\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_position": [
      7,
      42,
      90
    ],
    "_localRotation": [
      0,
      0,
      180
    ],
    "_track": "SmallPillarR2"
  },
  {
    "_id": "\\]SmallPillarPair \\(3\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_position": [
      -7,
      42,
      110
    ],
    "_localRotation": [
      0,
      0,
      -180
    ],
    "_track": "SmallPillarL3"
  },
  {
    "_id": "\\]SmallPillarPair \\(3\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_position": [
      7,
      42,
      110
    ],
    "_localRotation": [
      0,
      0,
      180
    ],
    "_track": "SmallPillarR3"
  },
  {
    "_id": "\\]SmallPillarPair \\(4\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_position": [
      -7,
      42,
      130
    ],
    "_localRotation": [
      0,
      0,
      -180
    ],
    "_track": "SmallPillarL4"
  },
  {
    "_id": "\\]SmallPillarPair \\(4\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_position": [
      7,
      42,
      130
    ],
    "_localRotation": [
      0,
      0,
      180
    ],
    "_track": "SmallPillarR4"
  },
  {
    "_id": "\\]PlayersPlace$",
    "_lookupMethod": "Regex",
    "_duplicate": 1,
    "_track": "Env",
    "_localPosition": [
      0,
      0,
      0
    ]
  },
  {
    "_id": "\\]TrackMirror$",
    "_lookupMethod": "Regex",
    "_track": "TrackMirror"
  },
  {
    "_id": "\\]Construction$",
    "_lookupMethod": "Regex",
    "_track": "TrackMirror"
  },
  {
    "_id": "\\]GlowLineL$",
    "_lookupMethod": "Regex",
    "_track": "TrackMirror"
  },
  {
    "_id": "\\]GlowLineR$",
    "_lookupMethod": "Regex",
    "_track": "TrackMirror"
  },
  {
    "_id": "\\]GlowLineC$",
    "_lookupMethod": "Regex",
    "_track": "TrackMirror"
  },
  {
    "_id": "\\]PillarPair\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      35,
      -2,
      -30
    ],
    "_rotation": [
      32,
      0,
      -32
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      -35,
      -2,
      -30
    ],
    "_rotation": [
      32,
      0,
      32
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(1\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      35,
      -2,
      -30
    ],
    "_rotation": [
      36,
      0,
      -36
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(1\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      -35,
      -2,
      -30
    ],
    "_rotation": [
      36,
      0,
      36
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(2\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      35,
      -2,
      -30
    ],
    "_rotation": [
      40,
      0,
      -40
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(2\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      -35,
      -2,
      -30
    ],
    "_rotation": [
      40,
      0,
      40
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(3\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      35,
      -2,
      -30
    ],
    "_rotation": [
      44,
      0,
      -44
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(3\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      -35,
      -2,
      -30
    ],
    "_rotation": [
      44,
      0,
      44
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(4\\)\\.\\[\\d*\\]PillarL$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      35,
      -2,
      -30
    ],
    "_rotation": [
      48,
      0,
      -48
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]PillarPair \\(4\\)\\.\\[\\d*\\]PillarR$",
    "_lookupMethod": "Regex",
    "_track": "Env",
    "_localPosition": [
      -35,
      -2,
      -30
    ],
    "_rotation": [
      48,
      0,
      48
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": ".*\\[\\d*\\]SideLaser\\.\\[\\d*\\]BoxLight$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]Reflector$",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": ".*\\[\\d*\\]SideLaser",
    "_lookupMethod": "Regex",
    "_localPosition": [
      0,
      0,
      150
    ],
    "_scale": [
      100,
      100,
      100
    ]
  },
  {
    "_id": ".*\\[\\d*\\]PillarTrackLaneRings",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": ".*\\[17]PillarPair\\.\\[\\d*\\]PillarL",
    "_lookupMethod": "Regex",
    "_localPosition": [
      -4.8,
      0,
      -27.858
    ],
    "_localScale": [
      1,
      0.76,
      1
    ],
    "_localRotation": [
      25,
      225.9,
      169.2
    ]
  },
  {
    "_id": ".*\\[17]PillarPair\\.\\[\\d*\\]PillarL\\.\\[\\d*\\]Pillar",
    "_lookupMethod": "Regex",
    "_localScale": [
      1,
      0.04,
      1
    ]
  },
  {
    "_id": ".*\\[\\d*\\]MagicDoorSprite$",
    "_lookupMethod": "Regex",
    "_localPosition": [
      0,
      -10000,
      0
    ]
  },
  {
    "_id": ".*\\[\\d*\\]MagicDoorSprite\\.\\[\\d*\\]BloomL",
    "_lookupMethod": "Regex",
    "_position": [
      0,
      0,
      200
    ],
    "_rotation": [
      0,
      0,
      0
    ],
    "_scale": [
      1,
      100,
      1
    ]
  },
  {
    "_id": ".*\\[\\d*\\]MagicDoorSprite\\.\\[\\d*\\]BloomR",
    "_lookupMethod": "Regex",
    "_active": false
  },
  {
    "_id": "\\]Clouds\\.\\[\\d*\\]LowCloudsGenerator$",
    "_lookupMethod": "Regex",
    "_duplicate": 1,
    "_active": false
  },
  {
    "_id": "\\]Clouds\\.\\[\\d*\\]LowCloudsGenerator\\(Clone\\)",
    "_lookupMethod": "Regex",
    "_position": [
      0,
      42,
      0
    ],
    "_rotation": [
      180,
      312.86,
      0
    ],
    "_scale": [
      1,
      1,
      1
    ]
  },
  {
    "_id": "\\]NarrowGameHUD$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]MagicDoorSprite$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]SideLaser$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]BottomGlow$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]LaserR$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]LaserL$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]GlowLineH$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]CoreLighting$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]LowCloudsGenerator$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]HighCloudsGenerator$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  },
  {
    "_id": "\\]DustPS$",
    "_lookupMethod": "Regex",
    "_track": "Env"
  }

)




let oldIncrement = 0;

function SmallPillarRot(beat, increment, duration){
  for(let i = 4; i >= 0; i --){
    let invert = (4 - i);
    _customEvents.push(
      {
        _time:  beat,
        _type: "AnimateTrack",
        _data: {
          _track: `SmallPillarL${i}`,
          _duration: duration,
          _easing : "easeInOutSine",
          _localRotation: [[0, 0, (180 + (oldIncrement * invert)) % 360, 0],[0, 0, ((180 + (increment * invert))) % 360, 1]],
        }
      },
      {
        _time:  beat,
        _type: "AnimateTrack",
        _data: {
          _track: `SmallPillarR${i}`,
          _duration: duration,
          _easing : "easeInOutSine",
          _localRotation: [[0, 0, (180 + (oldIncrement * invert)) % 360 * -1, 0],[0, 0, ((180 + (increment * invert))) % 360 * -1, 1]],
        }
      }
      )
  }
  oldIncrement = increment;
}

SmallPillarRot(99, -5, 2)

SmallPillarRot(111, -7.5, 2)

SmallPillarRot(123, -3.5, 2)

SmallPillarRot(135, -5, 2)

SmallPillarRot(148, 0, 6.5)

SmallPillarRot(192, -10, 3)

SmallPillarRot(195, 0, 0.01)

SmallPillarRot(204, -10, 0.001)

SmallPillarRot(204.5, 10, 0.15)

SmallPillarRot(205, -10, 0.15)

SmallPillarRot(205.5, 10, 0.15)

SmallPillarRot(206, -3, 1)

SmallPillarRot(216, -10, 0.001)

SmallPillarRot(216.5, 10, 0.15)

SmallPillarRot(217, -10, 0.15)

SmallPillarRot(217.5, 10, 0.15)

SmallPillarRot(218, -10, 0.15)

SmallPillarRot(218.5, 10, 0.15)

SmallPillarRot(219, -2.5, 0.15)

SmallPillarRot(228, 10, 0.15)

SmallPillarRot(228.75, -10, 0.15)

SmallPillarRot(229.5, 10, 0.15)

SmallPillarRot(230.25, -10, 0.15)

SmallPillarRot(231, -2.5, 0.15)

SmallPillarRot(240, -5, 3)

SmallPillarRot(243, -2.5, 0.15)

SmallPillarRot(246, 2.5, 0.15)

SmallPillarRot(249, -2.5, 0.15)

SmallPillarRot(252, 2.5, 0.15)

SmallPillarRot(255, -2.5, 0.15)

SmallPillarRot(258, 2.5, 0.15)

SmallPillarRot(261, -2.5, 0.15)

SmallPillarRot(262.5, 2.5, 0.15)

SmallPillarRot(263.5, -2.5, 0.15)

SmallPillarRot(263.75, 2.5, 0.15)

SmallPillarRot(264, -2.5, 0.15)

SmallPillarRot(276.75, 5, 0.15)

SmallPillarRot(277, -5, 0.15)

SmallPillarRot(278.25, 5, 0.15)

SmallPillarRot(279, -2.5, 0.15)

for (let i = 0; i <= 2; i++*0.5) {
  SmallPillarRot(312.5+i/2, 2.5, 0.15)
}

for (let i = 0; i <= 2; i++*0.5) {
  SmallPillarRot(313+i, -2.5, 0.15)
}








//#endregion                     -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  STOP  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -





//#region write file
const precision = 4; //decimals to round to  --- use this for better wall precision or to try and decrease JSON file size

const jsonP = Math.pow(10, precision);
const sortP = Math.pow(10, 2);
function deeperDaddy(obj) {
  if (obj)
    for (const key in obj) {
      if (obj[key] == null) {
        delete obj[key];
      } else if (typeof obj[key] === "object" || Array.isArray(obj[key])) {
        deeperDaddy(obj[key]);
      } else if (typeof obj[key] == "number") {
        obj[key] = parseFloat(
          Math.round((obj[key] + Number.EPSILON) * jsonP) / jsonP
        );
      }
    }
}
deeperDaddy(difficulty);

difficulty._notes.sort(
  (a, b) =>
    parseFloat(Math.round((a._time + Number.EPSILON) * sortP) / sortP) -
      parseFloat(Math.round((b._time + Number.EPSILON) * sortP) / sortP) ||
    parseFloat(Math.round((a._lineIndex + Number.EPSILON) * sortP) / sortP) -
      parseFloat(Math.round((b._lineIndex + Number.EPSILON) * sortP) / sortP) ||
    parseFloat(Math.round((a._lineLayer + Number.EPSILON) * sortP) / sortP) -
      parseFloat(Math.round((b._lineLayer + Number.EPSILON) * sortP) / sortP)
);
difficulty._obstacles.sort((a, b) => a._time - b._time);
difficulty._events.sort((a, b) => a._time - b._time);

_environment.forEach(x => {
  if (x._duplicate == undefined) {
      console.log("ID: " + x._id + ", Method: " + x._lookupMethod);
  } else
      console.log("ID: " + x._id + ", Method: " + x._lookupMethod + ", Duplicates: " + x._duplicate);
});



fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0));

//#endregion