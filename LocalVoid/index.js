const { info, Difficulty, BlenderEnvironment, ENV, Environment, LightRemapper, EVENT, LOOKUP, notesBetween, animateEnvTrack, Track, CustomEvent, EASE,rand} = require('swifter_remapper');
const Nootils = require('nootils');



let map = new Difficulty("ExpertPlusStandard.dat")
// Do your dirty work here.


 
// Adding Blender Environment
let blenderEnv = new BlenderEnvironment(ENV.BTS.PILLAR.SCALE, ENV.BTS.PILLAR.ANCHOR, ENV.BTS.PILLAR.ID, LOOKUP.REGEX);
let blenderEnvLasers = new BlenderEnvironment(ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR, ENV.BTS.SOLID_LASER.ID, LOOKUP.REGEX);

// Environment

blenderEnvLasers.static("Lasers")

blenderEnv.animate([
  ["env", 0, 36, x => {
    for (let i = 36; i <= 18 * 36; i += 36) {
      x.time = i;
      x.push();
    };
    x.time = 0;
  }],
  // ["envImplode", 422, 5]
  ])



let env3 = new Environment("BloomR", LOOKUP.CONTAINS);
env3.rotation = [0,90,90];
env3.position = [0,-20,0]
env3.scale = [10,40,5];

env3.push();

let env4 = new Environment("BloomL", LOOKUP.CONTAINS);
env4.rotation = [0,90,90];
env4.position = [0,-20,0]
env4.scale = [10,40,5];

env4.push();

env4 = new Environment("GlowLine", LOOKUP.CONTAINS);
env4.active = false

env4.push();


let lightRemapper = new LightRemapper(EVENT.RING_LIGHTS);
lightRemapper.normalizeWithChanges([[1, 2], [9, 1]]);
lightRemapper.addToEnd(20)
.run()

//customEvents

notesBetween(0, 661, x => {
  if (x.track.has("introLeft")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

notesBetween(0, 661, x => {
  if (x.track.has("introRight")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

let pathAnim = new CustomEvent().assignPathAnimation("introRight", 3);
pathAnim.animate.position = [[4,3,0,0],[0,0,0,0.45,EASE.OUT_QUAD]]
pathAnim.animate.dissolve = [[0,0],[1,0.1]]
pathAnim.animate.dissolveArrow = [[0,0],[0.75,0.1,]]
pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("introLeft", 3);
pathAnim.animate.position = [[-4,3,0,0],[0,0,0,0.45,EASE.OUT_QUAD]]
pathAnim.animate.dissolve = [[0,0],[1,0.1]]
pathAnim.animate.dissolveArrow = [[0,0],[0.75,0.1,]]
pathAnim.push();

notesBetween(0, 661, x => {
  if (x.track.has("buildLeft")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

notesBetween(0, 661, x => {
  if (x.track.has("buildRight")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

notesBetween(0, 661, x => {
  if (x.track.has("")){
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 0
  }
})

pathAnim = new CustomEvent().assignPathAnimation("buildRight", 3);
pathAnim.animate.position = [[-4,3,0,0],[0,0,0,0.45,EASE.OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0,0],[1,0.1]]
pathAnim.animate.dissolve = [[0,0],[1,0.1]]
pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildLeft", 3);
pathAnim.animate.position = [[4,3,0,0],[0,0,0,0.45,EASE.OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0,0],[1,0.1]]
pathAnim.animate.dissolve = [[0,0],[1,0.1]]
pathAnim.push();

///////////////////////////////////////////////////////////////////////////////

notesBetween(0, 661, x => {
  if (x.track.has("buildStartLeft")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

notesBetween(0, 661, x => {
  if (x.track.has("buildStartRight")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 1
  }
})

pathAnim = new CustomEvent().assignPathAnimation("buildStartRight", 3);
pathAnim.animate.position = [[7,5,0,0],[0,0,0,0.45,EASE.OUT_SINE]]
pathAnim.animate.scale = [[2,2,2,0],[1,1,1,0.4,EASE.IN_OUT_CUBIC]]
pathAnim.animate.dissolveArrow = [[0,0],[1,0.1]]
pathAnim.animate.dissolve = [[0,0],[1,0.2]]
pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildStartLeft", 3);
pathAnim.animate.position = [[-7,5,0,0],[0,0,0,0.45,EASE.OUT_SINE]]
pathAnim.animate.scale = [[2,2,2,0],[1,1,1,0.4,EASE.IN_OUT_CUBIC]]
pathAnim.animate.dissolveArrow = [[0,0],[1,0.1]]
pathAnim.animate.dissolve = [[0,0],[1,0.2]]
pathAnim.push();





//fog anims

new CustomEvent().assignFogTrack("fog").push();

let event1 = new CustomEvent(70).animateTrack("fog");
event1.animate.height = [[5, 0], [50, 0.1, EASE.IN_OUT_CUBIC], [5, 1, EASE.OUT_CUBIC]];
event1.duration = 2
event1.push();

event1 = new CustomEvent(102).animateTrack("fog");
event1.animate.height = [[5, 0], [50, 0.1, EASE.IN_OUT_CUBIC], [5, 1, EASE.OUT_CUBIC]];
event1.duration = 2
event1.push();


// for (let i = 0; i <= 50; i++) {
// Nootils.Triangle(10+(i*0.01),50,`triangle${i}`, rand(-30,30),rand(-30,30),rand(-1,1),0.01)

// let trackAnim = new CustomEvent().assignPathAnimation(`triangle${i}`, 0);
// trackAnim.animate.rotation = [[rand(-360,360),rand(-360,360),rand(-360,360),0]]
// trackAnim.animate.color = [[1, 1, 1,1,0]]
// trackAnim.push();
// }





// Do NOT put anything under this point, as it will be ignored by Remapper.

"use strict";



const mapInput = "ExpertPlusStandard.dat"
const mapOutput = "ExpertPlusStandard.dat";

const fs = require("fs");
const three = require("three");

let difficulty = JSON.parse(fs.readFileSync(mapInput));

//#region this just counts how many time you ran it for fun, feel free to remove.
if (!fs.existsSync("count.txt")) {
  fs.writeFileSync("count.txt", parseInt("0").toString());
}
let count = parseInt(fs.readFileSync("count.txt"));
count++;
fs.writeFileSync("count.txt", count.toString());
console.log("ran script for the " + count + "th TIME IN A ROW");
//#endregion



//        -  -  -  -  -  -  -  -  -  -  -  -  -  LOOK BELOW FOR COMMENT TEXT WITH A LINE LIKE THIS. READ ALL OF THESE BEFORE USING!  -  -  -  -  -  -  -  -  -  -  -  -  -  





difficulty._customData = { _pointDefinitions: [], _customEvents: [], _environment: [] };

const _customData = difficulty._customData;
const _obstacles = difficulty._obstacles;
let _notes = difficulty._notes;
const _customEvents = _customData._customEvents;
const _pointDefinitions = _customData._pointDefinitions;
const _environment = _customData._environment;

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





//#region discooverde furyr
function funni (Start, End, amount) {
  filterednotes = _notes.filter(n => n._time >= Start && n._time < End);
  filterednotes.forEach(note => {
      if (note._customData._fake != true) {
          let posY = getRndInteger(5,10);
          if(note._type == 0) {
            var posX = getRndInteger(-3,-6);
          }
          if(note._type == 1) {
            var posX = getRndInteger(3,6);
          }
          note._customData._track = "first1";
          note._customData._noteJumpMovementSpeed = 10;
          note._customData._noteJumpStartBeatOffset = 1;
          note._customData._disableSpawnEffect = true;
          note._customData._disableNoteGravity = true;
          note._customData._animation = {}
          note._customData._animation._dissolve = [[0,0], [0,0.05], [1,0.1]];
          note._customData._animation._dissolveArrow = [[0,0]];
          note._customData._animation._localRotation = [[0,0,getRndInteger(-100,100),0],[0,0,0,1,"easeOutQuint"]];
          note._customData._animation._position = [[posX,posY,0,0],[posX,0,0,0.125,"splineCatmullRom"],[0,0,0,0.25,"easeOutCubic","splineCatmullRom"]];
          for (let index = 1; index < amount; index++) {
              let n = JSON.parse(JSON.stringify(note));
              n._time += 0.001;
              n._customData._track = "fake";
              n._customData._fake = true;
              n._customData._interactable = false;
              n._customData._noteJumpMovementSpeed = 10;
              n._customData._noteJumpStartBeatOffset = 1;
              n._customData._disableSpawnEffect = true;
              n._customData._disableNoteGravity = true;
              n._customData._animation = {}
              n._customData._animation._dissolve = [[0,0]];
              n._customData._animation._position = [[getRndInteger(-25,25),getRndInteger(-15,15),getRndInteger(10,25),0],[0,0,0,0.6,"easeInOutCubic"]];
              _notes.push(n);
          }
      }
  });
}
//#endregion



//#region helper functions -  -  -  - These make life a LOT eassier, look through, figure out what they do, add your own, have fun :)  ---   Many are very specific use cases and might need to be modified depnding on use.




function getJumps(njs, offset) {
  const _startHalfJumpDurationInBeats = 4;
  const _maxHalfJumpDistance = 18;
  const _startBPM = 179.988; //INSERT BPM HERE -  -  -  -  -  -  -  -  -  -  -  -  -  
  const bpm = 179.988; //AND HERE -  -  -  -  -  -  -  -  -  -  -  -  -  
  const _startNoteJumpMovementSpeed = 19; //NJS -  -  -  -  -  -  -  -  -  -  -  -  -  
  const _noteJumpStartBeatOffset = -0.25; //OFFSET -  -  -  -  -  -  -  -  -  -  -  -  -  

  let _noteJumpMovementSpeed = (_startNoteJumpMovementSpeed * bpm) / _startBPM;
  let num = 60 / bpm;
  let num2 = _startHalfJumpDurationInBeats;
  while (_noteJumpMovementSpeed * num * num2 > _maxHalfJumpDistance) {
    num2 /= 2;
  }
  num2 += _noteJumpStartBeatOffset;
  if (num2 < 1) {
    num2 = 1;
  }
  const _jumpDuration = num * num2 * 2;
  const _jumpDistance = _noteJumpMovementSpeed * _jumpDuration;
  return { half: num2, dist: _jumpDistance };
}

function noteScale(startBeat, endBeat, track, interval, duration, magnitude) {
  for (let i = 0; i < endBeat - startBeat; i += interval) {
    let currentBeat = startBeat + i;
    _customEvents.push({
      _time: currentBeat,
      _type: "AnimateTrack",
      _data: {
        _track: track,
        _duration: duration,
        _scale: [
          [magnitude, magnitude, magnitude, 0, "easeOutExpo"],
          [1, 1, 1, 0.9, "easeOutBack"]
        ]
      }
    });
  }
}

function arrowFlash(startBeat, endBeat, track, interval, duration) {
  for (let i = 0; i < endBeat - startBeat; i += interval) {
    let currentBeat = startBeat + i;
    _customEvents.push({
      _time: currentBeat,
      _type: "AnimateTrack",
      _data: {
        _track: track,
        _duration: duration,
        _dissolveArrow: [[0, 0.499], [1, 0.5], [1, 1]]
      }
    });
  }
}

function bloqFlash(startBeat, endBeat, track, interval, duration) {
  for (let i = 0; i < endBeat - startBeat; i += interval) {
    let currentBeat = startBeat + i;
    _customEvents.push({
      _time: currentBeat,
      _type: "AnimateTrack",
      _data: {
        _track: track,
        _duration: duration,
        _dissolve: [[0, 0.499], [1, 0.5], [1, 1]]
      }
    });
  }
}

function genCircle(radius, n) {
  let pointss = [];
  for (let i = 0; i < n; i++) {
    pointss.push([
      radius * Math.cos(((2 * Math.PI) / n) * i) - 0.5,
      radius * Math.sin(((2 * Math.PI) / n) * i) * 1.16 - 1.6
    ]);
  }
  return pointss;
}
function genCircleNoCorrection(radius, n) {
  let pointss = [];

  for (let i = 0; i < n; i++) {
    pointss.push([
      radius * Math.cos(((2 * Math.PI) / n) * i),
      radius * Math.sin(((2 * Math.PI) / n) * i)
    ]);
  }
  return pointss;
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function DecayShakePath(xAmp, yAmp, zAmp, points, easing = "easeStep") {
  let step = 1 / points;
  let tog = false;
  let WOWTHISISANAME = [[0, 0, 0, 0]];
  for (let i = 0; i < points; i++) {
    let xVal = xAmp * (1 - i * step);
    let yVal = yAmp * (1 - i * step);
    let zVal = zAmp * (1 - i * step);
    if (tog) {
      xVal = -xVal;
      yVal = -yVal;
      zVal = -zVal;
    }
    WOWTHISISANAME.push([xVal, yVal, zVal, (i + 1) * step, easing]);

    tog = !tog;
  }
  return WOWTHISISANAME;
}

function offestOnNotesBetween(p1, p2, offset) {
  filterednotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
  filterednotes.forEach(object => {
    //always worth having.
    //man this shit BETTER not be undefined.
    if (typeof offset !== "undefined") {
      object._customData._noteJumpStartBeatOffset = offset;
    }
  });
  return filterednotes;
}

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function notesAt(times) {
  return _notes.filter(n => times.some(t => n._time == t));
}

function trackOnNotesBetween(track, p1, p2, potentialOffset) {
  filterednotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
  filterednotes.forEach(object => {
    object._customData._track = track;
    if (typeof potentialOffset !== "undefined") {
      object._customData._noteJumpStartBeatOffset = potentialOffset;
    }
  });
  return filterednotes;
}

//applies a track to notes on two tracks between two times based on the color of the notes
//IT GONNA FUCK UP WITH BOMBS I TELL YOU HWAT BOI
//red, blue, p1, p2, potentialOffset
function trackOnNotesBetweenRBSep(trackR, trackB, p1, p2, potentialOffset) {
  filterednotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
  filterednotes.forEach(object => {
    if (typeof potentialOffset !== "undefined") {
      object._customData._noteJumpStartBeatOffset = potentialOffset;
    }
    if (object._type == 0) {
      object._customData._track = trackR;
    }
    if (object._type == 1) {
      object._customData._track = trackB;
    }
  });
  return filterednotes;
}

function offestOnNotesBetweenRBSep(
  trackR,
  trackB,
  p1,
  p2,
  potentialOffset,
  offsetR,
  offsetB
) {
  filterednotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
  filterednotes.forEach(object => {
    if (typeof potentialOffset !== "undefined") {
      object._customData._noteJumpStartBeatOffset = potentialOffset;
    }
    if (object._type == 0) {
      object._customData._track = trackR;
      object._customData._noteJumpStartBeatOffset = offsetR;
    }
    if (object._type == 1) {
      object._customData._track = trackB;
      object._customData._noteJumpStartBeatOffset = offsetB;
    }
  });
  return filterednotes;
}

//p1, p2, potentialoffset, up, down, left, right,
//TODO: ADD OTHER DIRS
function trackOnNotesBetweenDirSep(
  p1,
  p2,
  potentialOffset,
  trackUp,
  trackDown,
  trackLeft,
  trackRight
) {
  filterednotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
  filterednotes.forEach(object => {
    if (object._cutDirection == 0 && typeof trackUp !== "undefined") {
      object._customData._track = trackUp;
    }
    if (object._cutDirection == 1 && typeof trackUp !== "undefined") {
      object._customData._track = trackDown;
    }
    if (object._cutDirection == 2 && typeof trackUp !== "undefined") {
      object._customData._track = trackLeft;
    }
    if (object._cutDirection == 3 && typeof trackUp !== "undefined") {
      object._customData._track = trackRight;
    }
    //i might want to make this only run if I assign a track...
    if (typeof potentialOffset !== "undefined") {
      object._customData._noteJumpStartBeatOffset = potentialOffset;
    }
  });
  return filterednotes;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function BombNote(note, dissolve = true, bombTrack) {
  if (!note._customData) {
    note._customData = {};
  }
  if (!note._customData._animation) {
    note._customData._animation = {};
  }
  let bomb = JSON.parse(JSON.stringify(note)); //done to retain most custom data
  //now its got the offsets n shit
  bomb._type = 3;
  bomb._customData._fake = true;
  bomb._customData._interactable = false;
  bomb._time = bomb._time + 0.05;
  if (dissolve) {
    note._customData._animation._dissolve = [[1, 0], [0, 0]];
    bomb._customData._animation._dissolve = [[1, 0], [1, 0.5], [0, 0.525]];
  }
  if (!bomb._customData._color) {
    switch (note._type) {
      case 0:
        bomb._customData._color = [1, 0, 0];
        break;
      case 1:
        bomb._customData._color = [0, 0, 1];

      default:
        break;
    }
  }
  if (bombTrack) {
    bomb._customData._track = bombTrack;
  }
  _notes.push(bomb);
}

function BombNoteBoom(note, dissolve = true, bombTrack) {
  if (!note._customData) {
    note._customData = {};
  }
  if (!note._customData._animation) {
    note._customData._animation = {};
  }
  let bomb = JSON.parse(JSON.stringify(note)); //done to retain most custom data
  //now its got the offsets n shit
  bomb._type = 3;
  bomb._customData._fake = true;
  bomb._customData._interactable = true;
  bomb._time = bomb._time + 0.05;
  if (dissolve) {
    note._customData._animation._dissolve = [[1, 0], [0, 0]];
    bomb._customData._animation._dissolve = [[1, 0], [1, 0.5], [0, 0.525]];
  }
  if (!bomb._customData._color) {
    switch (note._type) {
      case 0:
        bomb._customData._color = [1, 0, 0];
        break;
      case 1:
        bomb._customData._color = [0, 0, 1];

      default:
        break;
    }
  }
  if (bombTrack) {
    bomb._customData._track = bombTrack;
  }
  _notes.push(bomb);
}

function wallDupe (beat, endBeat, amount, space, delay, rot) {
  filterednotes = _obstacles.filter(n=> n._time >= beat && n._time < endBeat)
  filterednotes.forEach(obstacle => {
  if (obstacle._customData._track !== "wallDuper")
  obstacle._customData._disableSpawnEffect = true;
  for (let index = 0; index < amount; index++) {
    let obstaclef = JSON.parse(JSON.stringify(obstacle));
    obstaclef._customData._fake = true;
    obstaclef._customData._interactable = false;
    obstaclef._time += 0.0000001+(index*delay)
    //obstaclef._customData._animation = {};
    obstaclef._customData._animation._position = [[0,0,space*index,0]];
    obstaclef._customData._animation._rotation = [[0,0,rot*index,0]];
    _obstacles.push(obstaclef);
    }
  });
}

function noteDupe (beat, endBeat, amount, space, delay, rot, dissolveAmount, arrowDissolveAmount, NJS, NJSOffset) {
  filterednotes = _notes.filter(n=> n._time >= beat && n._time < endBeat)
  filterednotes.forEach(note => {
  if (note._customData._track !== "noteDuper")
  note._customData._disableSpawnEffect = true;
  for (let index = 0; index < amount; index++) {
    let notef = JSON.parse(JSON.stringify(note));
    notef._customData = {}
    notef._customData._fake = true;
    notef._customData._interactable = false;
    notef._time += 0.0000001+(index*delay)
    notef._customData._animation = {}
    notef._customData._animation._rotation = [[0,0,rot*index,0]];
    notef._customData._animation._position = [[0,0,space*index,0]];
    notef._customData._animation._dissolve = [[dissolveAmount,0],[dissolveAmount,0.49],[dissolveAmount,0.5]]
    notef._customData._animation._dissolveArrow = [[arrowDissolveAmount,0],[arrowDissolveAmount,0.49],[arrowDissolveAmount,0.5]]
    notef._customData._noteJumpMovementSpeed = NJS;
    notef._customData._noteJumpStartBeatOffset = NJSOffset;
    _notes.push(notef);
    }
  });
}

function glitchPos(beat, endBeat) {
  filterednotes = _notes.filter(n => n._time >= beat && n._time < endBeat);
  filterednotes.forEach(note => {
    if (note._customData._track !== "ArrowsGlitch2") {
    note._customData._disableSpawnEffect = true;
    note._customData._animation = {};
    note._customData._animation._dissolve = [[0, 0],[0,0.399], [1,0.4]];
    note._customData._animation._dissolveArrow = [[0.69, 0]];
    for (let index = 0; index < 1; index++) {
      let notef = JSON.parse(JSON.stringify(note));
      notef._time += 0.01
      notef._customData._fake = true;
      notef._customData._interactable = false;
      notef._customData._animation = {};
      notef._customData._animation._dissolve = [[1, 0],[1,0.399], [0,0.4]];
      notef._customData._animation._dissolveArrow = [[1, 0], [1,0.45], [0,0.5]];
      if (notef._type == 0) {
        notef._customData._track = "redglitch";
      }
      if (notef._type == 1) {
        notef._customData._track = "blueglitch";
      }
       _notes.push(notef);
    }
  }
 })
}

function NJSChange (beat, endBeat, NJS, njsMult, timeMult) {
  for (let index = 0; index < endBeat-beat; index++) {
      filterednotes = _notes.filter(n=> n._time >= beat + (index * timeMult) && n._time < (beat + (index * timeMult))+0.0001)
      filterednotes.forEach(note => {
          note._customData._noteJumpMovementSpeed = NJS+(index * njsMult)
      });
}
}



function CircEx(trackN, startTime, endTime, Amount, More, radius, Dur, h, l, xPos, yPos, zPos, color) {
    for (let t = 0; t < More; t++) {
        for (let i = 0; i < Amount; i++) {
           const HJD = 1.75
            let angle = Math.PI*2 / Amount;
            let rot = 360/Amount*i;
            let radians = angle * i;
            let w = 2*radius*Math.tan(Math.PI/Amount);
            let sx = xPos + Math.cos(radians) * radius-w/2;
            let sy = yPos + Math.sin(radians) * radius-h/2;
            let track = `${trackN},${i},${t}`;
            _obstacles.push({
                _time: startTime+HJD,
                _duration: Dur,
                _lineIndex: 0,
                _type: 1,
                _width: 1,
                _customData:{
                    _interactable: false,
                    _track: track,
                    _scale: [w,h,l],
                    _rotation: [0,0,0],
                    _localRotation: [0,0,90+rot],
                    _position: [sx,sy,0+2*t],
                    _animation: {
                        _definitePosition: [[0,0,zPos,0],[0,0,zPos,1]],
                        _color: (color) ? color : [[1,1,1,1,0]]
                    }
                }
            })
    
            let posOutx = (Math.random() * 18);
            let posOuty = (Math.random() * 16);
            let posOutz = (Math.floor(Math.random() * 20) -10);
            let rotOutx = getRndInteger(-180, 180);
            let rotOuty = getRndInteger(-180, 180);
            let rotOutz = getRndInteger(-180, 180);
            let xx = (sx < 0) ? -posOutx : posOutx;
            let yy = (sy < 0) ? -posOuty : posOuty;
                _customEvents.push({
                    _time: endTime,
                    _type: "AnimateTrack",
                    _data:{
                        _track: track,
                        _duration: 8,
                        _easing: "easeOutCirc",
                        _dissolve: [[1,0],[1,0.5],[0,0.99]],
                        _position: [[0,0,0,0],[xx, yy, posOutz, 1]],
                        _localRotation: [[0,0,0,0],[rotOutx, rotOuty, rotOutz, 1]],
                    }
                })
                
            _customEvents.push({
                _time: startTime-4,
                _type: "AnimateTrack",
                _data:{
                    _track: track,
                    _duration: 4,
                    _dissolve: [[0,0.75],[1,1]],
                }
            })    
        }
    }
}

function Random(min, max) {
  return Math.random() * (max - min) + min;
}

//#endregion










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





//noteDupe(270.9, 271.1, 20, 0, 0.1, 2, 0, 0.5, 30, -0.5)

//CircEx("track", 4, 16, 16, 1, 4, 8, 1, 1, 0, 2, 12, [[1,1,1,1,0]])

//NJSChange(153, 181, 10, 0.1363636363636364, 4)

//NJSChange(184, 211, 11.09090909090909, 0.1363636363636364, 0.5)






//#endregion                     -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  STOP  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



//#region write file
const precision = 5; //decimals to round to  --- use this for better wall precision or to try and decrease JSON file size

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

fs.writeFileSync(mapOutput, JSON.stringify(difficulty, null, 0));

//#endregion


map.save();

