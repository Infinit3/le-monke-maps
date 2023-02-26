import { Difficulty, Environment, Note, copy, notesBetween, CustomEvent, Geometry, ModelScene, ENV, Regex } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

const map = new Difficulty(
    "ExpertStandard.dat",
    "ExpertPlusStandard.dat",
);

map.NJS = 19

// ENV START

const scene = new ModelScene(new Geometry()); // This creates a new envrionment using geometry


// What all of these functions do is take the material of an object in Blender and applies the stated properties to all objects with that material

// Use this one for an example..

const lasers = 5;
const laserTracks: string[] = [];
const laserEnv = new Environment(ENV.BTS.SOLID_LASER.ID, "Regex");
laserEnv.lightID = 100;
for (let i = 1; i <= lasers; i++) laserTracks.push(`laser${i}`);

scene.addPrimaryGroups(
  "Cube", // Material Name
  new Geometry("Cube", { // What geometry object type we want to use
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
    ["template", 0],
]);



// scene definition here
scene.addPrimaryGroups(
  laserTracks,
  laserEnv ,
  ENV.BTS.SOLID_LASER.SCALE,
  ENV.BTS.SOLID_LASER.ANCHOR
);
// scene.animate call here

// !!! Make sure NOT to copy and paste the base objects in the template file, instead use Shift+D to duplicate the object. 
// !!! If you don't do that Blender will make a new material for the copy and pasted version, using duplication keeps the same material

// ! Also make sure to disable the `Template Objects` collection in Blender, you don't want to see those

// remove with contains
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
env.id = "LowCloudsGenerator$";
env.push();
env.id = "RectangleFakeGlow$";
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

// base from Fragments
for (let i = 0; i <= 8; i++) {
    for (let s = -1; s <= 1; s += 2) {
        const pair = new Regex().add(i % 2 === 0 ? "PillarPair" : "SmallPillarPair").vary(Math.floor(i / 2)).string;
        const side = s === -1 ? "L" : "R";
        const id = new Regex().start().add(pair).separate().add(`Pillar${side}`).string;

        // Disabling the pillar that the lasers are on
        env = new Environment(undefined, "Regex");
        env.id = new Regex().add(pair).separate().add(`Pillar${side}`).separate().add("Pillar").string;
        env.active = false;
        env.push();

        // Disabling the reflector and laser light (weird spotlight things)
        env.id = new Regex().add(id).separate().add(`RotationBase${side}`).separate().add("(Reflector$|LaserLight)").string;
        env.push();

        // Disabling the laser light on the inner rings too
        env.id = new Regex().add(id).separate().add("LaserLight").string;
        env.push();
    }
}

// From Swifter
env = new Environment("GlowLineH$", "Regex");
env.active = true;
env.lightID = 100;
env.duplicate = 100;
env.position = [0,0,1000];
env.scale = [1,1,100000000]
env.rotation = [90,0,0];
env.track = "sun"
env.push();

// NOTE MODS


// Install "Note" and "activeDiff" classes

// Install "Note" and "activeDiff" classes

// function noteDupe(start: number, end: number, amount = 4, step = 0.25, callback?: ((note: Note, index: number) => void)) {
//     notesBetween(start, end, note => {
//         for (let i = 1; i <= amount; i++) {
//             const newNote = copy(note);
//             newNote.fake = true;
//             newNote.interactable = false;
//             newNote.time += step * i;
//             if (callback) callback(note, i);
//             newNote.push();
//         }
//     })
// }

function noteDupe(start: number, end: number, amount = 4, step = 0.25, callback?: ((note: Note, index: number) => void)) {
    notesBetween(start, end, note => {
        for (let i = 1; i <= amount; i++) {
            const newNote = copy(note);
            newNote.fake = true;
            newNote.NJS = 40
            newNote.interactable = false;
            newNote.time += step * i;
            if (callback) callback(note, i);
            newNote.push();
        }
    })
}

function cringeNoteDupe(
    beat: number,
    endBeat: number,
    amount: number,
    space: number,
    delay: number,
    rot: number,
    dissolveAmount: number,
    arrowDissolveAmount: number,
    NJS: number,
    NJSOffset: number,
    dissolveHalf: number) {
    noteDupe(beat, endBeat, amount, delay, (note, index) => {
        note.animate.rotation = [[0, 0, rot * index, 0]];
        note.animate.localRotation = [[0, 0, rot * index, 0]];
        note.animate.position = [[0, 0, space * index, 0]];
        note.animate.dissolve = [[0, 0], [dissolveAmount, 0.45], [dissolveAmount, 0.5], [dissolveHalf, 0.5]]
        note.animate.dissolveArrow = [[0, 0], [0, 0.25], [0, 0.45], [arrowDissolveAmount, 0.5], [arrowDissolveAmount, 0.5]]
        note.NJS = NJS;
        note.offset = NJSOffset;
    })
}

cringeNoteDupe(485, 516, 5, 4, 0.2, -18, 0.25, 0.9, 19, 0, 0)

// intro

notesBetween(0, 527, x => {
    if (x.track.has("buildMain")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 6
    }
})

notesBetween(0, 527, x => {
    if (x.track.has("buildDrift1")) {
        x.spawnEffect = false
        x.interactable = false
        x.fake = true
        x.NJS = 16
        x.offset = 6
    }
})
notesBetween(0, 527, x => {
    if (x.track.has("buildDrift2")) {
        x.spawnEffect = false
        x.interactable = false
        x.fake = true
        x.NJS = 16
        x.offset = 6
    }
})
let pathAnim = new CustomEvent().assignPathAnimation("buildMain", 6);
pathAnim.animate.position = [[0, 14, 26, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.2, 0.1], [0.75, 0.5]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, -581.743, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1], [1, 0.5]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildDrift2", 6);
pathAnim.animate.position = [[0, 14, 26, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.2, 0.1], [0.75, 0.5]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, -581.743, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1], [1, 0.5]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildDrift1", 6);
pathAnim.animate.position = [[0, 14, 26, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolve = [[0, 0], [0.2, 0.1], [0.75, 0.5]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, -581.743, 0], [0, 0, 0, 0.45, "easeInOutQuad"]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1], [1, 0.5]]

pathAnim.push();

let drift = new CustomEvent(91.75).animateTrack("buildDrift1", 1)
drift.animate.position = [[0, 0, 0, 0], [0, 5, 0, 1, "easeOutExpo"]]
drift.animate.rotation = [[0, 0, 0, 0], [0, -39, 0, 1, "easeOutExpo"]]

drift.push();

drift = new CustomEvent(91.75).animateTrack("buildDrift2", 1)
drift.animate.position = [[0, 0, 0, 0], [0, 5, 0, 1, "easeOutExpo"]]
drift.animate.rotation = [[0, 0, 0, 0], [0, 39, 0, 1, "easeOutExpo"]]

drift.push();

for (let i = 0; i <= 30; i++) {
    drift = new CustomEvent(91.75 + i / 4).animateTrack("buildDrift2", 0.25)
    drift.animate.dissolve = [[Math.abs(1 - (0.05 * i)), 0], [0, 1, "easeOutExpo"]]
    drift.animate.dissolveArrow = [[Math.abs(1 - (0.05 * i)), 0], [0, 1, "easeOutExpo"]]

    drift.push();

    drift = new CustomEvent(91.75 + i / 4).animateTrack("buildDrift1", 0.25)
    drift.animate.dissolve = [[Math.abs(1 - (0.05 * i)), 0], [0, 1, "easeOutExpo"]]
    drift.animate.dissolveArrow = [[Math.abs(1 - (0.05 * i)), 0], [0, 1, "easeOutExpo"]]

    drift.push();
}

drift = new CustomEvent(92).animateTrack("buildDrift1", 5)
drift.animate.position = [[0, 0, 0, 0], [0, -20, 0, 1, "easeInExpo"]]

drift.push();

drift = new CustomEvent(92).animateTrack("buildDrift2", 5)
drift.animate.position = [[0, 0, 0, 0], [0, -20, 0, 1, "easeInExpo"]]

drift.push();

map.save();