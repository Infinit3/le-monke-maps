import { Difficulty, ModelScene, Geometry, ENV, Environment, CustomEvent, LightRemapper, EVENT, rand, Note, NOTE, Wall, notesBetween, exportZip}  from "https://deno.land/x/remapper@2.1.0/src/mod.ts";

const map = new Difficulty("ExpertPlusStandard", "ExpertPlusLawless");
const scene = new ModelScene(new Geometry()); // This creates a new envrionment using geometry

const lasers = 10;
const laserTracks: string[] = [];
const laserEnv = new Environment(ENV.BTS.SOLID_LASER.ID, "Regex");
laserEnv.lightID = 101;
for (let i = 1; i <= lasers; i++) laserTracks.push(`laser${i}`);

// scene definition here
scene.addPrimaryGroups(
  laserTracks,
  laserEnv,
  ENV.BTS.SOLID_LASER.SCALE,
  ENV.BTS.SOLID_LASER.ANCHOR
);

// What all of these functions do is take the material of an object in Blender and applies the stated properties to all objects with that material


const lightRemapper = new LightRemapper().type(EVENT.RING_LIGHTS);
lightRemapper.normalizeWithChanges([[1, 2], [9, 1]]);
lightRemapper.addToEnd(100)
  .run()


scene.addPrimaryGroups(
  "Cube", // Material Name
  new Geometry("Cube", { // WPhat geometry object type we want to use
    _shader: "Standard", // The shader of the material
    _color: [0, 0, 0], // The color of the material
    // Other properties can also go here
  }),
);

// We continue this process with all the geometry types

scene.addPrimaryGroups(
  "Triangle",
  new Geometry("Triangle", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Capsule",
  new Geometry("Capsule", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Plane",
  new Geometry("Plane", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING UPWARDS
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Quad",
  new Geometry("Quad", { // !!! THIS SHAPE IS ONE DIRECTIONAL, THE VISIBLE SIDE IS FACING THE PLAYER
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Sphere",
  new Geometry("Sphere", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);
scene.addPrimaryGroups(
  "Cylinder",
  new Geometry("Cylinder", {
    _shader: "Standard",
    _color: [0, 0, 0],
  }),
);

// This material only works if you are using the BTS environment, if you are not using BTS, delete the addPrimaryGroups function below

scene.addPrimaryGroups(
  "BTSClouds",
  new Environment(ENV.BTS.HIGH_CLOUDS.ID, "Regex"),
  ENV.BTS.HIGH_CLOUDS.SCALE,
  ENV.BTS.HIGH_CLOUDS.ANCHOR,
);

// When we want to make the environment, we call either this function or that "static" function

scene.animate([
  ["template", 0, 195],
  ["empty", 195, 253]
]
);



// const scene2 = new ModelScene(new Environment(ENV.BTS.SOLID_LASER.ID, "Regex"), ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR)
// scene2.animate([
//     ["laser", 0],
// ]) 

let env2 = new Environment();
env2.id = "LeftPanel"
env2.lookupMethod = "EndsWith"
env2.track = "LeftPanel"
env2.push()
env2.id = "RightPanel"
env2.lookupMethod = "EndsWith"
env2.track = "RightPanel"
env2.push()


let R = new CustomEvent(188).animateTrack("RightPanel");
R.duration = 6
R.animate.position = [[0,0,0,0],[10,6,-15,1,"easeInQuad"]]
R.push();
let L = new CustomEvent(188).animateTrack("LeftPanel");
L.duration = 6
L.animate.position = [[0,0,0,0],[-10,6,-15,1,"easeInQuad"]]
L.push();

let env: Environment;
env = new Environment("PillarTrackLaneRing", "Contains");
env.active = false;
env.push();
env.id = "SideLaser";
env.push();
env.id = "CloudsGenerator";
env.push();
env.id = "TrackMirror";
env.push();
env.id = "Cube";
env.push();

// remove with regex
env.lookupMethod = "Regex";
env.id = "Construction$";
env.push();
env.id = "PillarTrackLaneRingsR$";
env.push();
env.id = "PillarTrackLaneRingsR (1)$";
env.push();
env.id = "MagicDoorSprite$";
env.push();

// move away
env = new Environment("GlowLine", "Contains");
env.position = [0, -69420, 0];
env.push();
env.id = "BottomGlow";
env.push();

const env10 = new Environment("PillarPair", "Contains");
env10.position = [6000, 9000, 4200];

env10.push();

env = new Environment("GlowLineH$", "Regex");
env.active = true;
env.lightID = 100;
env.duplicate = 100;
env.position = [0, 0, 900];
env.scale = [1, 1, 100000000]
env.rotation = [90, 0, 0];
env.track = "sun"
env.push();

// custom events
let sunAnim = new CustomEvent(204).animateTrack("sun")
sunAnim.animate.position = [[0,0,0,0],[0,-50,-50,1]]
sunAnim.duration = 0
sunAnim.push()

sunAnim = new CustomEvent(210).animateTrack("sun")
sunAnim.animate.position = [[0,-50,-50,0],[0,0,0,1]]
sunAnim.duration = 0
sunAnim.push()


new CustomEvent().assignFogTrack("fog").push();

const fog = new CustomEvent(0).animateTrack("fog");
fog.animate.attenuation = [0.0001]
fog.duration = 0
fog.push();

// drop one burn mark shit

for (let i = 1; i <= 200; i++) {
  const Burn = new Environment("PlayersPlace\\.\\[\\d*\\]RectangleFakeGlow$", "Regex");
  Burn.track = `burnMarks${i}`
  Burn.localRotation = [0, 0, 0]
  Burn.position = [0,-6,0]
  Burn.scale = [2,2,2]
  Burn.duplicate = 1
  Burn.push();
  Burn.id = "PlayersPlace\\.\\[\\d*\\]Frame$";
  Burn.localRotation = [0, 0, 0]
  Burn.scale = [2,2,2]
  Burn.position = [0,-6,0]
  Burn.push();
  Burn.id = "PlayersPlace\\.\\[\\d*\\]SaberBurnMarksArea$";
  Burn.localRotation = [0, 0, 0]
  Burn.position = [0,-6,0]
  Burn.scale = [2,2,2]
  Burn.duplicate = 1
  Burn.push();

  const xr1 = rand(0, 360)
  const yr1 = rand(0, 360)
  const zr1 = rand(0, 360)

  const x1 = rand(-75, 75)
  const y1 = rand(-75, 75)
  const z1 = rand(20, 75)

  const xr2 = rand(0, 360)
  const yr2 = rand(0, 360)
  const zr2 = rand(0, 360)

  const x2 = rand(-40, 40)
  const y2 = rand(-2, 25)
  const z2 = rand(10, 70)

  const xr3 = rand(0, 360)
  const yr3 = rand(0, 360)
  const zr3 = rand(0, 360)

  const x3 = rand(-40, 40)
  const y3 = rand(-2, 25)
  const z3 = rand(10, 70)

  const xr4 = rand(0, 360)
  const yr4 = rand(0, 360)
  const zr4 = rand(0, 360)

  const x4 = rand(-40, 40)
  const y4 = rand(-2, 25)
  const z4 = rand(10, 70)

  let dropMarks = new CustomEvent(194).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 1
  dropMarks.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]]
  dropMarks.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]]
  dropMarks.push();

  dropMarks = new CustomEvent(196).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 6
  dropMarks.animate.localRotation = [[0, 0, 0, 0], [xr1, yr1, zr1, 1]]
  dropMarks.animate.position = [[0, -6, 0, 0], [x1, y1, z1, 1, "easeOutQuint"]]
  dropMarks.push();

  dropMarks = new CustomEvent(202).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 0.5
  dropMarks.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]]
  dropMarks.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]]
  dropMarks.push();

  dropMarks = new CustomEvent(217).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 1
  dropMarks.animate.localRotation = [[xr1, yr1, zr1, 0], [xr2, xr2, zr3, 1]]
  dropMarks.animate.position = [[x1, y1, z1, 0], [x2, y2, z2, 1, "easeOutQuint"]]
  dropMarks.push();
  dropMarks = new CustomEvent(218).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 2
  dropMarks.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]]
  dropMarks.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]]
  dropMarks.push();

  dropMarks = new CustomEvent(236).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 6
  dropMarks.animate.localRotation = [[0, 0, 0, 0], [xr1, yr1, zr1, 1]]
  dropMarks.animate.position = [[0, -6, 0, 0], [x1, y1, z1, 1, "easeOutExpo"]]
  dropMarks.push();
  dropMarks = new CustomEvent(242).animateTrack(`burnMarks${i}`);
  dropMarks.duration = 2
  dropMarks.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]]
  dropMarks.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]]
  dropMarks.push();

}


//light shit


for (let i = 1; i <= 125; i++) {
  const Light = new Environment("\\]GlowLineC$", "Regex");
  Light.duplicate = 1;
  Light.position = [0,-5,0];
  Light.localRotation = [0,0,0];
  Light.scale = [20,0.5,20];
  Light.track = `cube${i}`
  Light.push()

//constants
const xr1 = rand(0, 360)
const yr1 = rand(0, 360)
const zr1 = rand(0, 360)

const x1 = rand(-75, 75)
const y1 = rand(-75, 75)
const z1 = rand(20, 75)

const xr2 = rand(0, 360)
const yr2 = rand(0, 360)
const zr2 = rand(0, 360)

const x2 = rand(-75, 75)
const y2 = rand(-75, 75)
const z2 = rand(20, 75)

new CustomEvent().assignTrackParent([`cube${i}`], "cubeAll", true)

  let dropLight = new CustomEvent(194).animateTrack(`cube${i}`);
  dropLight.duration = 1;
  dropLight.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]];
  dropLight.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(204).animateTrack(`cube${i}`);
  dropLight.duration = 6
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr1, yr1, zr1, 1]]
  dropLight.animate.position = [[0, -6, 0, 0], [x1, y1, z1, 1, "easeOutQuint"]]
  dropLight.push();

  dropLight = new CustomEvent(210).animateTrack(`cube${i}`);
  dropLight.duration = 1.9
  dropLight.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]]
  dropLight.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]]
  dropLight.push();

  dropLight = new CustomEvent(212).animateTrack(`cube${i}`);
  dropLight.duration = 6
  dropLight.animate.scale = [[1,1,1,0],[3,3,3,1,"easeOutQuad"]]
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr1, yr1, zr1, 1, "easeOutQuint"]]
  dropLight.animate.rotation = [[0,0,0,0],[0,0,179,1,"easeInOutQuint"]]
  dropLight.animate.position = [[0, -6, 0, 0], [x1, y1, z1, 1, "easeOutQuint"]]
  dropLight.push();

  dropLight = new CustomEvent(220).animateTrack(`cube${i}`);
  dropLight.duration = 6;
  dropLight.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]];
  dropLight.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(228).animateTrack(`cube${i}`);
  dropLight.duration = 2;
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr2, zr2, yr2, 1]];
  dropLight.animate.position = [[0, -6, 0, 0], [x2, y2, z2, 1, "easeOutCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(230).animateTrack(`cube${i}`);
  dropLight.duration = 2;
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr2, zr2, yr2, 1]];
  dropLight.animate.position = [[0, -6, 0, 0], [x2, y2, z2, 1, "easeOutCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(232).animateTrack(`cube${i}`);
  dropLight.duration = 2;
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr2, zr2, yr2, 1]];
  dropLight.animate.position = [[0, -6, 0, 0], [x2, y2, z2, 1, "easeOutCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(234).animateTrack(`cube${i}`);
  dropLight.duration = 2;
  dropLight.animate.localRotation = [[xr1, yr1, zr1, 0], [0, 0, 0, 1]];
  dropLight.animate.position = [[x1, y1, z1, 0], [0, -6, 0, 1, "easeOutExpo"]];
  dropLight.push();

  dropLight = new CustomEvent(244).animateTrack(`cube${i}`);
  dropLight.duration = 3;
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr2, zr2, yr2, 1]];
  dropLight.animate.position = [[0, -6, 0, 0], [x2, y2, z2, 1, "easeOutQuint"]];
  dropLight.push();

  dropLight = new CustomEvent(247).animateTrack(`cube${i}`);
  dropLight.duration = 1;
  dropLight.animate.localRotation = [[xr2, zr2, yr2, 0], [0, 0, 0, 1]];
  dropLight.animate.position = [[x2, y2, z2, 0], [0, -6, 0, 1, "easeInCubic"]];
  dropLight.push();

  dropLight = new CustomEvent(252).animateTrack(`cube${i}`);
  dropLight.duration = 5;
  dropLight.animate.localRotation = [[0, 0, 0, 0], [xr2, zr1, yr2, 1]];
  dropLight.animate.position = [[0, -6, 0, 0], [x1, y2, z1, 1, "easeOutQuint"]];
  dropLight.push();

  dropLight = new CustomEvent(257).animateTrack(`cube${i}`);
  dropLight.duration = 8;
  dropLight.animate.localRotation = [[xr2, zr1, yr2, 0], [0, 0, 0, 1]];
  dropLight.animate.position = [[x1, y2, z1, 0], [0, -6, 0, 1, "easeInOutCubic"]];
  dropLight.push();

}




//note implode XD

for(let i = 1; i <= 100; i++) {
    
  const note = new Note(0, NOTE.BLUE, NOTE.LEFT);
  note.spawnEffect = false;
  note.noteGravity = false;
  note.noteLook = false;
  note.track.value = `NoteExplode${i}`;
  note.fake = true;
  note.interactable = false;
  note.animate.position = [0,-7,-5];
  note.color = [0.231, 0.035, 0.349, 1];
  note.time = 201.5;
  note.animate.dissolve = [[0.5,0]];
  note.push();

  new CustomEvent(0).animateTrack(`NoteExplode${i}`,0, {_time: [[0.5,0]]}).push();

  new CustomEvent(202).animateTrack(`NoteExplode${i}`,2, {
  _position: [[0, -20, 0, 0], [rand(-50,50), rand(-40,40), rand(25,75), 1, "easeOutQuart"]],
  _scale: [[0,0,0,0],[rand(2.5,10),rand(2.5,10),rand(2.5,10),1, "easeOutQuart"]],
  _localRotation: [[0,0,0,0],[rand(0,360),rand(0,360),rand(0,360),1, "easeOutQuart"]]
  }).push();

  new CustomEvent(0).assignTrackParent([`NoteExplode${i}`], "NoteExplode").push();

  new CustomEvent(202).animateTrack("NoteExplode", 1, {_position: [[0, 0, 0, 0], [0, -20, 0,1, "easeInOutSine"]]}).push();

  new CustomEvent(202.5).animateTrack("NoteExplode", 0.5, {_scale: [[1,1,1,0],[0,0,0,1,"easeInOutSine"]]}).push();

}


//drop fog strobe stuff
let event1 = new CustomEvent(196).animateTrack("fog");
event1.animate.startY = [-50];
event1.animate.height = [[0, 0], [0, 1]];
event1.animate.attenuation = [[0.2, 0],  [0.002, 1]];
event1.easing = "easeInOutCubic"
event1.duration = 0
event1.push();

event1 = new CustomEvent(210.5).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 1.5
event1.push()

event1 = new CustomEvent(212).animateTrack("fog")
event1.animate.startY = [-200]
event1.animate.attenuation = [[-1,0],[0.0002,1,"easeOutCubic"]]
event1.animate.height = [[49,0],[0,1,"easeOutCubic"]]
event1.duration = 1
event1.push()

event1 = new CustomEvent(223.75).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 2.25
event1.push()

event1 = new CustomEvent(226).animateTrack("fog")
event1.animate.startY = [-200]
event1.animate.attenuation = [[-1,0],[0.0002,1,"easeOutCubic"]]
event1.animate.height = [[400,0],[0,1,"easeOutCubic"]]
event1.duration = 0.5
event1.push()

event1 = new CustomEvent(237).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 0.25
event1.push()

event1 = new CustomEvent(237.25).animateTrack("fog")
event1.animate.startY = [-200]
event1.animate.attenuation = [[-1,0],[0.0002,1,"easeOutCubic"]]
event1.animate.height = [[400,0],[0,1,"easeOutCubic"]]
event1.duration = 0.5
event1.push()

event1 = new CustomEvent(237.75).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 0.25
event1.push()

event1 = new CustomEvent(238).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 0.25
event1.push()

event1 = new CustomEvent(238.25).animateTrack("fog")
event1.animate.startY = [-200]
event1.animate.attenuation = [[-1,0],[0.0002,1,"easeOutCubic"]]
event1.animate.height = [[400,0],[0,1,"easeOutCubic"]]
event1.duration = 0.5
event1.push()

event1 = new CustomEvent(238.75).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 0.25
event1.push()

event1 = new CustomEvent(239).animateTrack("fog")
event1.animate.startY = [100]
event1.animate.attenuation = [[0.0001,0],[-1,1,"easeOutCubic"]]
event1.animate.height = [[0,0],[-100,1,"easeOutCubic"]]
event1.duration = 0.25
event1.push()

event1 = new CustomEvent(239.25).animateTrack("fog")
event1.animate.startY = [-200]
event1.animate.attenuation = [[-1,0],[0.0002,1,"easeOutCubic"]]
event1.animate.height = [[400,0],[0,1,"easeOutCubic"]]
event1.duration = 0.5
event1.push()



//start note mods

notesBetween(0, 266, x => {
  if (x.track.has("intro")) {
      x.spawnEffect = false
      x.NJS = 8
      x.offset = 4
  }
})

let pathAnim = new CustomEvent().assignPathAnimation("intro", 8);
pathAnim.animate.position = [[0, -4, 0, 0], [0, 0, 0, 0.48, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.478, "easeInQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1,]]

pathAnim.push();

let note = new Note(66.5, NOTE.BLUE, NOTE.DOWN_LEFT);
note.offset = 6
note.NJS = 16
note.track.value = "NI"
note.interactable = false
note.fake = true
note.animate.position = [[0, -4, 0, 0],[-3,3,0,0.4,"easeInOutSine"],[0,-10,0,0.7,"easeInOutSine"]]
note.animate.scale = [2.5, 2.5, 2.5]
note.animate.dissolve = [[0, 0]]
note.push();

note = new Note(75.5, NOTE.RED, NOTE.DOWN);
note.offset = 6
note.NJS = 16
note.track.value = "NI"
note.interactable = false
note.fake = true
note.animate.position = [[0, -4, 0, 0],[0,3,0,0.4,"easeInOutSine"],[0,-10,0,0.7,"easeInOutSine"]]
note.animate.scale = [2.5, 2.5, 2.5]
note.animate.dissolve = [[0, 0]]
note.push();

note = new Note(99.5, NOTE.RED, NOTE.DOWN);
note.offset = 6
note.NJS = 16
note.track.value = "NI"
note.interactable = false
note.fake = true
note.animate.position = [[0, -4, 0, 0],[0,3,0,0.4,"easeInOutSine"],[0,-10,0,0.7,"easeInOutSine"]]
note.animate.scale = [2.5, 2.5, 2.5]
note.animate.dissolve = [[0, 0]]
note.push();

pathAnim = new CustomEvent().assignPathAnimation("BS", 3);
pathAnim.animate.position = [[0, -2, 0, 0], [0, 0, 0, 0.4, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.2, "easeInQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1,]]

pathAnim.push();

let BM = new CustomEvent(164).animateTrack("BM",16)
BM.animate.rotation = [[0,0,0,0],[-15,0,0,1,"easeInSine"]]
BM.animate.dissolve = [[1,0],[0.2,0.05],[1,1,"easeOutSine"]]
BM.animate.scale = [[1,1,1,0],[0.7,0.7,0.7,0.05],[1.1,1.1,1.1,1,"easeOutSine"]]
BM.push()

BM = new CustomEvent(180).animateTrack("BF",9)
BM.animate.rotation = [[0,0,0,0],[15,0,0,1,"easeInSine"]]
BM.animate.dissolve = [[1,0],[0.2,0.05],[1,1,"easeOutSine"]]
BM.animate.scale = [[1,1,1,0],[0.7,0.7,0.7,0.05],[1.1,1.1,1.1,1,"easeOutSine"]]
BM.push()

pathAnim = new CustomEvent().assignPathAnimation("BF", 3);
pathAnim.animate.position = [[0, -2, 0, 0], [0, 0, 0, 0.1, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.2, "easeInQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1,]]
pathAnim.push()

pathAnim = new CustomEvent().assignPathAnimation("bombge", 3);
pathAnim.animate.position = [[0, 5, 0, 0], [0, 0, 0, 0.4, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.7, "easeInQuad"]]
pathAnim.push()

let AT = new CustomEvent(0).animateTrack("AT1",0.5)
AT.animate.dissolve = [[0,0]]
AT.animate.scale = [[1,1,1,0],[0.7,0.7,0.7,0.05],[1.1,1.1,1.1,1,"easeOutSine"]]
AT.push()
AT = new CustomEvent(194).animateTrack("AT1",0.5)
AT.animate.dissolve = [[0,0],[1,1,"easeOutQuad"]]
AT.animate.scale = [[1,1,1,0],[5,5,5,0.1],[1,1,1,1,"easeOutSine"]]
AT.push()

notesBetween(0, 266, x => {
  if (x.track.has("d1")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 4
  }
})

notesBetween(0, 266, x => {
  if (x.track.has("d2")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 4
  }
})

notesBetween(0, 266, x => {
  if (x.track.has("d3")) {
      x.spawnEffect = false
      x.NJS = 16
      x.offset = 4
  }
})

//HJD = 6

pathAnim = new CustomEvent().assignPathAnimation("d1", 6);
pathAnim.animate.position = [[0, 6, 0, 0], [0, 0, 0, 0.4, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.scale = [[0,0,0,0],[2,2,2,0.1,"easeInOutCubic"],[1,1,1,0.5,"easeOutQuad"]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.35, "easeInQuad"]]
pathAnim.push()
pathAnim = new CustomEvent().assignPathAnimation("d2", 6);
pathAnim.animate.position = [[-5.1, 4.3, 0, 0], [0, 0, 0, 0.4, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.scale = [[0,0,0,0],[2,2,2,0.1,"easeInOutCubic"],[1,1,1,0.5,"easeOutQuad"]]
pathAnim.animate.localRotation = [[180, 0, 0, 0], [0, 0, 0, 0.35, "easeInQuad"]]
pathAnim.animate.rotation = [[5,-35,0,0],[0,0,0,0.45,"easeOutQuad"]]
pathAnim.push()
pathAnim = new CustomEvent().assignPathAnimation("d3", 6);
pathAnim.animate.position = [[5.1, 4.3, 0, 0], [0, 0, 0, 0.4, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.7]]
pathAnim.animate.scale = [[0,0,0,0],[2,2,2,0.1,"easeInOutCubic"],[1,1,1,0.5,"easeOutQuad"]]
pathAnim.animate.localRotation = [[-180, 0, 0, 0], [0, 0, 0, 0.35, "easeInQuad"]]
pathAnim.animate.rotation = [[5,35,0,0],[0,0,0,0.45,"easeOutQuad"]]
pathAnim.push()

const playerT = new CustomEvent().assignPlayerToTrack("P")
playerT.push()

for (let i = 1; i <= 119; i++) {
AT = new CustomEvent(196+i*0.05).animateTrack("P",0.05)
AT.easing = "easeInOutSine"
AT.animate.position = [[0,0,0,0],[-0.25,0,0,0.25],[0,0,0,0.5],[0.25,0,0,0.75],[0,0,0,1]]
AT.push()
}

AT = new CustomEvent(252).animateTrack("P")
AT.duration = 5
AT.animate.position = [[0,0,0,0],[-25,100,-200,1,"easeOutExpo"]]
AT.animate.rotation = [[0,0,0,0],[35,20,0,1,"easeOutExpo"]]
AT.push()

AT = new CustomEvent(257).animateTrack("P")
AT.duration = 7
AT.animate.rotation = [[35,20,0,0],[180,190,70,1,"easeInCubic"]]
AT.animate.position = [[-25,100,-200,0],[-25,-200,-225,1,"easeInCubic"]]
AT.push()
map.save();

exportZip(["ExpertLawless"]);
