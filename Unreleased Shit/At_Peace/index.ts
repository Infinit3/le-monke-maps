import { BlenderEnvironment, Difficulty, ENV, LOOKUP, rand, SETTINGS, activeDiff, WALL, Wall, CustomEvent, Vec3, EASE, KeyframeValues, KeyframesAny, Environment, notesBetween, Note, NOTE } from "swifter_remapper";
let map = new Difficulty("ExpertPlusLawless.dat");
import * as Nootils from 'nootils'

const env = new Environment("BTSEnvironment.[0]Environment.[8]MagicDoorSprite", LOOKUP.EXACT);
env.position = [6000, 9000, 4200];

env.push();

const env4 = new Environment("MagicDoorSprite.[1]BloomR", LOOKUP.CONTAINS);
env4.position = [0.000388, 551.545, 325.873];
env4.rotation = [0, 0, 90];
env4.scale = [1, 0.5, 1];
env4.duplicate = 1

env4.push();

const env5 = new Environment("MagicDoorSprite.[1]BloomL", LOOKUP.CONTAINS);
env5.active = false
env5.push();
env5.id = "PillarTrackLaneRingsR";
env5.push();
env5.id = "Clouds";
env5.push();
env5.id = "Mirror";
env5.push();
env5.id = "Construction";
env5.push();

const env10 = new Environment("PillarPair", LOOKUP.CONTAINS);
env10.position = [6000, 9000, 4200];

env10.push();

const env11 = new Environment("GlowLine", LOOKUP.CONTAINS);
env11.position = [6000, 9000, 4200];

env11.push();



//drop work
for (let i = 1; i <= 50; i++) {
    let Burn = new Environment("PlayersPlace\\.\\[\\d*\\]RectangleFakeGlow$", LOOKUP.REGEX);
    Burn.trackSet = `burnMarks${i}`
    Burn.localRotation = [0,0,0]
    Burn.duplicate = 1
    Burn.push();
    Burn.id = "PlayersPlace\\.\\[\\d*\\]Frame$";
    Burn.localRotation = [0,0,0]
    Burn.push();
    Burn.id = "PlayersPlace\\.\\[\\d*\\]SaberBurnMarksArea$";
    Burn.localRotation = [0,0,0]
    Burn.duplicate = 2
    Burn.push();

    const xr1 = rand(0, 360)
    const yr1 = rand(0, 360)
    const zr1 = rand(0, 360)

    const x1 = rand(-40, 40)
    const y1 = rand(-2, 35)
    const z1 = rand(10, 70)

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

    const dropMarks = new CustomEvent(399.188).animateTrack(`burnMarks${i}`);
    dropMarks.duration = 19.937
    dropMarks.animate.scale = [[1, 1, 1, 0], [1.5, 1.5, 1.5, 1]]
    dropMarks.animate.localRotation = [[0, 0, 0, 0], [xr1, yr1, zr1, 1]]
    dropMarks.animate.position = [[0, -2, 0, 0], [x1, y1, z1, 1, EASE.OUT_QUAD]]
    dropMarks.push();

    let dropMarks2 = new CustomEvent(419.125).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 19.75
    dropMarks2.animate.localRotation = [[xr1, yr1, zr1, 0], [xr2, yr2, zr2, 1]]
    dropMarks2.animate.position = [[x1, y1, z1, 0], [x2, y2, z2, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();

    dropMarks2 = new CustomEvent(438.875).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 19.875
    dropMarks2.animate.localRotation = [[xr2, yr2, zr2, 0], [xr3, yr3, zr3, 1]]
    dropMarks2.animate.position = [[x2, y2, z2, 0], [x3, y3, z3, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();

    dropMarks2 = new CustomEvent(458.75).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 19.875
    dropMarks2.animate.localRotation = [[xr3, yr3, zr3, 0], [xr2, yr2, zr2, 1]]
    dropMarks2.animate.position = [[x3, y3, z3, 0], [x1, y1, z1, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();

    dropMarks2 = new CustomEvent(478.75).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 20
    dropMarks2.animate.localRotation = [[xr2, yr2, zr2, 0], [xr1, yr1, zr1, 1]]
    dropMarks2.animate.position = [[x1, y1, z1, 0], [x2, y2, z2, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();

    dropMarks2 = new CustomEvent(498.75).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 19.75
    dropMarks2.animate.localRotation = [[xr1, yr1, zr1, 0], [xr4, yr4, zr4, 1]]
    dropMarks2.animate.position = [[x2, y2, z2, 0], [x4, y4, z4, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();

    dropMarks2 = new CustomEvent(518.375).animateTrack(`burnMarks${i}`);
    dropMarks2.duration = 42.625
    dropMarks.animate.scale = [[1.5, 1.5, 1.5, 0], [1, 1, 1, 1, EASE.IN_QUAD]]
    dropMarks2.animate.localRotation = [[xr4, yr4, zr4, 0], [0, 0, 0, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.animate.position = [[x4, y4, z4, 0], [0, -2, 0, 1, EASE.IN_OUT_QUAD]]
    dropMarks2.push();
}

const fog1 = new CustomEvent(399).animateTrack("fog");
fog1.animate.startY = [-30];
fog1.animate.height = [[10, 0]];
fog1.duration = 0
fog1.push();

//end drop work


new CustomEvent(0).assignPlayerToTrack("test").push();

function AnimatePlayer(time: number, dur: number, startX: number, endX: number, startY: number, endY: number, startZ: number, endZ: number) {
    let event = new CustomEvent(time).animateTrack("test", dur);
    event.animate.position = [[startX, startY, startZ, 0], [endX, endY, endZ, 1]];
    event.push();
}

let blenderEnv = new BlenderEnvironment(ENV.BTS.PILLAR.SCALE, ENV.BTS.PILLAR.ANCHOR, ENV.BTS.PILLAR.ID, LOOKUP.REGEX);
let blenderEnvLasers = new BlenderEnvironment(ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR, ENV.BTS.SOLID_LASER.ID, LOOKUP.REGEX);
let blenderEnvClouds = new BlenderEnvironment([800, 40, 800], ENV.BTS.LOW_CLOUDS.ANCHOR, "HighCloudsGenerator$", LOOKUP.REGEX);







//note/balloon shit start

// let pathAnim = new CustomEvent().assignPathAnimation("introRight", 2);
// pathAnim.animate.position = [[4,3,0,0],[0,0,0,0.35,EASE.OUT_QUAD]]
// pathAnim.animate.dissolve = [[0,0],[1,0.2]]
// pathAnim.animate.dissolveArrow = [[0,0],[0.75,0.1,]]
// pathAnim.push();

// pathAnim = new CustomEvent().assignPathAnimation("introLeft", 2);
// pathAnim.animate.position = [[-4,3,0,0],[0,0,0,0.35,EASE.OUT_QUAD]]
// pathAnim.animate.dissolve = [[0,0],[1,0.2]]
// pathAnim.animate.dissolveArrow = [[0,0],[0.75,0.1,]]
// pathAnim.push();

notesBetween(0, 130, x => {
    if (x.track.has("introLeft")) {
        x.spawnEffect = false
        x.NJS = 8
        x.offset = 2
    }
})

notesBetween(0, 130, x => {
    if (x.track.has("introRight")) {
        x.spawnEffect = false
        x.NJS = 8
        x.offset = 2
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("buildRight")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 6
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("buildLeft")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 6
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("preRight")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 4
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("preLeft")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 4
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("dropRight")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 18
    }
})

notesBetween(0, 700, x => {
    if (x.track.has("dropLeft")) {
        x.spawnEffect = false
        x.NJS = 16
        x.offset = 18
    }
})

let trackAnim = new CustomEvent().animateTrack("dissolve1");
trackAnim.duration = 1
trackAnim.animate.dissolve = [[0, 0]]

trackAnim.push();

trackAnim = new CustomEvent(167.75).animateTrack("dissolve1");
trackAnim.duration = 0.2
trackAnim.animate.dissolve = [[0, 0], [1, 1]]

trackAnim.push();

trackAnim = new CustomEvent(193).animateTrack("chatterDissolve");
trackAnim.duration = 0.4
trackAnim.animate.dissolve = [[1, 0], [0.4, 1]]

trackAnim.push();

trackAnim = new CustomEvent(198).animateTrack("chatterDissolve");
trackAnim.duration = 0.4
trackAnim.animate.dissolve = [[0.4, 0], [1, 1]]

trackAnim.push();

trackAnim = new CustomEvent(199).animateTrack("chatterDissolve");
trackAnim.duration = 0.75
trackAnim.animate.dissolve = [[1, 0], [0, 0.5, EASE.OUT_QUAD], [1, 1, EASE.IN_OUT_QUAD]]

trackAnim.push();

trackAnim = new CustomEvent(200).animateTrack("chatterDissolve");
trackAnim.duration = 0.75
trackAnim.animate.dissolve = [[1, 0], [0, 0.5, EASE.OUT_QUAD], [1, 1, EASE.IN_OUT_QUAD]]

trackAnim.push();


for (let i = 1; i <= 12; i++) {
    trackAnim = new CustomEvent(167 + (i * 2)).animateTrack("dissolveKick");
    trackAnim.duration = 0.5
    trackAnim.animate.dissolveArrow = [[1, 0], [0, 0.75, EASE.OUT_QUAD], [1, 1, EASE.IN_OUT_QUAD]]

    trackAnim.push();
}

for (let i = 1; i <= 4; i++) {
    trackAnim = new CustomEvent(207.5 + (i * 1.5)).animateTrack("dissolveKick");
    trackAnim.duration = 0.5
    trackAnim.animate.dissolve = [[1, 0], [0, 0.75, EASE.OUT_QUAD], [1, 1, EASE.IN_OUT_QUAD]]

    trackAnim.push();
}

for (let i = 1; i <= 4; i++) {
    trackAnim = new CustomEvent(199.5 + (i * 1.5)).animateTrack("dissolveKick");
    trackAnim.duration = 0.5
    trackAnim.animate.dissolve = [[1, 0], [0, 0.75, EASE.OUT_QUAD], [1, 1, EASE.IN_OUT_QUAD]]

    trackAnim.push();
}

let pathAnim = new CustomEvent().assignPathAnimation("introRight", 6);
pathAnim.animate.position = [[11.5669, 14.3789, 26.4162, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.4]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, -581.743, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1,]]

pathAnim.push();


pathAnim = new CustomEvent().assignPathAnimation("introLeft", 6);
pathAnim.animate.position = [[-11.4105, 14.3789, 26.4162, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.4]]
pathAnim.animate.localRotation = [[39.4324, 3.27746, -508.891, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.1,]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildLeft", 8);
pathAnim.animate.position = [[-11.4105, -5, 26.4162, 0], [0, 0, 0, 0.4, EASE.IN_OUT_BACK]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.4]]
pathAnim.animate.localRotation = [[39.4324, 3.27746, -508.891, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.3,], [0.9, 1]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("buildRight", 8);
pathAnim.animate.position = [[11.5669, -5, 26.4162, 0], [0, 0, 0, 0.4, EASE.IN_OUT_BACK]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.1], [1, 0.4]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, -581.743, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0.75, 0.3,], [0.9, 1]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("bombReset1", 2);
pathAnim.animate.position = [[0, -1, 0, 0], [0, 0, 0, 0.4, EASE.OUT_QUAD]]
pathAnim.animate.dissolve = [[0, 0], [0.5, 0.05], [1, 0.25]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("preLeft", 6);
pathAnim.animate.position = [[-11.4105, 2, 26.4162, 0], [0, 0, 0, 0.4, EASE.OUT_CUBIC]]
pathAnim.animate.dissolve = [[0, 0], [0, 0.1], [1, 0.4]]
pathAnim.animate.scale = [[0.5, 0.5, 0.5, 0.4], [1, 1, 1, 0.45, EASE.IN_OUT_QUART]]
pathAnim.animate.localRotation = [[39.4324, 3.27746, 90, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0, 0.3,], [1, 0.35]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("preRight", 6);
pathAnim.animate.position = [[11.5669, 2, 26.4162, 0], [0, 0, 0, 0.4, EASE.OUT_CUBIC]]
pathAnim.animate.dissolve = [[0, 0], [0, 0.1], [1, 0.4]]
pathAnim.animate.scale = [[0.5, 0.5, 0.5, 0.4], [1, 1, 1, 0.45, EASE.IN_OUT_QUART]]
pathAnim.animate.localRotation = [[16.9907, -12.9693, 90, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0, 0.3,], [1, 0.35]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("dropLeft", 20);
pathAnim.animate.position = [[-25, 2, 26.4162, 0], [0, 0, 0, 0.45, EASE.OUT_CUBIC]]
pathAnim.animate.dissolve = [[0, 0], [1, 0.45, EASE.OUT_QUAD]]
pathAnim.animate.scale = [[100, 100, 100, 0], [1, 1, 1, 0.45, EASE.OUT_QUAD]]
pathAnim.animate.localRotation = [[179, -179, 179, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0, 0.03,], [1, 0.45, EASE.OUT_QUAD]]

pathAnim.push();

pathAnim = new CustomEvent().assignPathAnimation("dropRight", 20);
pathAnim.animate.position = [[25, 5, 26.4162, 0], [0, 0, 0, 0.45, EASE.OUT_CUBIC]]
pathAnim.animate.dissolve = [[0, 0], [1, 0.45, EASE.OUT_QUAD]]
pathAnim.animate.scale = [[100, 100, 100, 0], [1, 1, 1, 0.45, EASE.OUT_QUAD]]
pathAnim.animate.localRotation = [[179, -179, 179, 0], [0, 0, 0, 0.4, EASE.IN_OUT_QUAD]]
pathAnim.animate.dissolveArrow = [[0, 0], [0, 0.03,], [1, 0.45, EASE.OUT_QUAD]]

pathAnim.push();


Nootils.FloatingDebris(38.5, 123, 2, 1)

blenderEnv.animate([
    ["trees", 0, 0],
    ["end2", 399, 6]
])

blenderEnvLasers.animate([
    ["treeL", 0, 0],
    ["teeL", 70, 0],
    ["ttt", 391, 0],
    ["endL", 399, 0]
])





new CustomEvent().assignFogTrack("fog").push();

let event = new CustomEvent(0).animateTrack("fog");
event.animate.startY = [-30];
event.animate.height = [20];
event.push();

let event1 = new CustomEvent(151).animateTrack("fog");
event1.animate.startY = [-30];
event1.animate.height = [[20, 0], [40, 0.75], [20, 1]];
event1.animate.attenuation = [[0.002, 0], [0.0005, 0.75], [0.002, 1]];
event1.easing = EASE.OUT_QUAD
event1.duration = 0.75
event1.push();

let event2 = new CustomEvent(215).animateTrack("fog");
event2.animate.startY = [-30];
event2.animate.height = [[20, 0], [40, 0.75], [20, 1]];
event2.animate.attenuation = [[0.002, 0], [0.0005, 0.75], [0.002, 1]];
event2.easing = EASE.OUT_QUAD
event2.duration = 0.75
event2.push();

let event3 = new CustomEvent(167).animateTrack("fog");
event3.animate.startY = [-30];
event3.animate.height = [[20, 0], [40, 0.75], [20, 1]];
event3.animate.attenuation = [[0.002, 0], [0.0005, 0.75], [0.002, 1]];
event3.easing = EASE.OUT_QUAD
event3.duration = 0.75
event3.push();

let event4 = new CustomEvent(239).animateTrack("fog");
event4.animate.startY = [-30];
event4.animate.height = [[20, 0], [40, 0.75], [20, 1]];
event4.animate.attenuation = [[0.002, 0], [0.0005, 0.75], [0.002, 1]];
event4.easing = EASE.OUT_QUAD
event4.duration = 0.75
event4.push();

event4 = new CustomEvent(399).animateTrack("fog");
event4.animate.startY = [-10000];
event4.easing = EASE.OUT_QUAD
event4.duration = 0.75
event4.push();

for (let i = 0; i <= 50; i++) {

    let wall = new Wall(0, 10, WALL.CROUCH);
    wall.duration = 15
    wall.lifeStart = 2
    wall.trackSet = "wave"
    wall.position = [20, 10]
    wall.rotation = [0 + (i * (5 ^ 2)), 0 + (i * 3), 90 + (i * (10 ^ 2))]
    wall.interactable = false
    wall.fake = true
    wall.animate.color = [[0.768, 0.152, 0.807, 1000, 0], [0.945, 0.074, 0.517, 1000, 1]]
    wall.push();

    let wall2 = new Wall(0, 10, WALL.CROUCH);
    wall2.duration = 15
    wall2.lifeStart = 2
    wall2.trackSet = "wave"
    wall2.position = [-20, -10]
    wall2.rotation = [0 + (i * (5 ^ 2)), 0 + (i * 3), 90 + (i * (10 ^ 2))]
    wall2.interactable = false
    wall2.fake = true
    wall2.animate.color = [[0.768, 0.152, 0.807, 1000, 0], [0.945, 0.074, 0.517, 1000, 1]]
    wall2.push();

}

for (let i = 0; i <= 25; i++) {

    let note = new Note(151.5 + (0.1 * i), NOTE.BLUE, NOTE.UP);
    note.offset = 6
    note.NJS = 40
    note.trackSet = "noteSquiggle"
    note.rotation = [-90, 0, 0]
    note.interactable = false
    note.fake = true
    note.animate.position = [[2.5, 0, 0, 0]]
    note.animate.scale = [10, 10, 10]
    note.animate.dissolve = [[1, 0]]
    note.animate.dissolveArrow = [[0, 0]]
    note.animate.color = [[0.847, 0.094, 0.094, 1000, 0], [0.847, 0.094, 0.094, 1000, 1]]

    note.push();

}

for (let i = 0; i <= 240; i++) {

    let note = new Note(151.5 + (0.005 * i), NOTE.BOMB, NOTE.UP);
    note.trackSet = "bombSwarm"
    note.animate.rotation = [[rand(0, 360), rand(0, 360), rand(0, 360), 0], [rand(0, 360), rand(0, 360), rand(0, 360), 0.5], [rand(0, 360), rand(0, 360), rand(0, 360), 1]]
    note.interactable = false
    note.fake = true
    note.animate.position = [[0, 4, 0, 0]]
    note.animate.scale = [1, 1, 2]
    note.animate.dissolve = [[0, 0]]

    note.push();

}

let noteSquiggle = new CustomEvent(151).animateTrack("noteSquiggle")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

noteSquiggle = new CustomEvent(151).animateTrack("bombSwarm")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

for (let i = 0; i <= 25; i++) {

    let note = new Note(167.5 + (0.1 * i), NOTE.BLUE, NOTE.UP);
    note.offset = 6
    note.NJS = 40
    note.trackSet = "noteSquiggle"
    note.rotation = [-90, 0, 0]
    note.interactable = false
    note.fake = true
    note.animate.position = [[2.5, 0, 0, 0]]
    note.animate.scale = [10, 10, 10]
    note.animate.dissolve = [[1, 0]]
    note.animate.dissolveArrow = [[0, 0]]
    note.animate.color = [[0.847, 0.094, 0.094, 1000, 0], [0.847, 0.094, 0.094, 1000, 1]]

    note.push();

}

for (let i = 0; i <= 240; i++) {

    let note = new Note(167.5 + (0.005 * i), NOTE.BOMB, NOTE.UP);
    note.trackSet = "bombSwarm"
    note.animate.rotation = [[rand(0, 360), rand(0, 360), rand(0, 360), 0], [rand(0, 360), rand(0, 360), rand(0, 360), 0.5], [rand(0, 360), rand(0, 360), rand(0, 360), 1]]
    note.interactable = false
    note.fake = true
    note.animate.position = [[0, 4, 0, 0]]
    note.animate.scale = [1, 1, 2]
    note.animate.dissolve = [[0, 0]]

    note.push();

}

noteSquiggle = new CustomEvent(167).animateTrack("noteSquiggle")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

noteSquiggle = new CustomEvent(167).animateTrack("bombSwarm")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

for (let i = 0; i <= 25; i++) {

    let note = new Note(215.5 + (0.1 * i), NOTE.BLUE, NOTE.UP);
    note.offset = 6
    note.NJS = 40
    note.trackSet = "noteSquiggle"
    note.rotation = [-90, 0, 0]
    note.interactable = false
    note.fake = true
    note.animate.position = [[2.5, 0, 0, 0]]
    note.animate.scale = [10, 10, 10]
    note.animate.dissolve = [[1, 0]]
    note.animate.dissolveArrow = [[0, 0]]
    note.animate.color = [[0.847, 0.094, 0.094, 1000, 0], [0.847, 0.094, 0.094, 1000, 1]]

    note.push();

}

for (let i = 0; i <= 240; i++) {

    let note = new Note(215.5 + (0.005 * i), NOTE.BOMB, NOTE.UP);
    note.trackSet = "bombSwarm"
    note.animate.rotation = [[rand(0, 360), rand(0, 360), rand(0, 360), 0], [rand(0, 360), rand(0, 360), rand(0, 360), 0.5], [rand(0, 360), rand(0, 360), rand(0, 360), 1]]
    note.interactable = false
    note.fake = true
    note.animate.position = [[0, 4, 0, 0]]
    note.animate.scale = [1, 1, 2]
    note.animate.dissolve = [[0, 0]]

    note.push();

}

noteSquiggle = new CustomEvent(215).animateTrack("noteSquiggle")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

noteSquiggle = new CustomEvent(215).animateTrack("bombSwarm")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

for (let i = 0; i <= 25; i++) {

    let note = new Note(239.5 + (0.1 * i), NOTE.BLUE, NOTE.UP);
    note.offset = 6
    note.NJS = 40
    note.trackSet = "noteSquiggle"
    note.rotation = [-90, 0, 0]
    note.interactable = false
    note.fake = true
    note.animate.position = [[2.5, 0, 0, 0]]
    note.animate.scale = [10, 10, 10]
    note.animate.dissolve = [[1, 0]]
    note.animate.dissolveArrow = [[0, 0]]
    note.animate.color = [[0.847, 0.094, 0.094, 1000, 0], [0.847, 0.094, 0.094, 1000, 1]]

    note.push();

}

noteSquiggle = new CustomEvent(239).animateTrack("noteSquiggle")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();

noteSquiggle = new CustomEvent(239).animateTrack("bombSwarm")
noteSquiggle.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_QUAD]];
noteSquiggle.duration = 1.5
noteSquiggle.push();


let waveAnim = new CustomEvent(0).animateTrack("wave")
waveAnim.animate.dissolve = [[0, 0]];
waveAnim.push();

let waveAnim2 = new CustomEvent(6).animateTrack("wave")
waveAnim2.animate.dissolve = [[0.9, 0], [0, 1, EASE.IN_OUT_QUAD]];
waveAnim2.duration = 0.5
waveAnim2.push();

let waveAnim3 = new CustomEvent(6.6).animateTrack("wave")
waveAnim3.animate.dissolve = [[0.5, 0], [0, 1, EASE.IN_OUT_QUAD]];
waveAnim3.duration = 10
waveAnim3.push();

let anim = new CustomEvent(399).animateTrack("end2").push();
anim.animate.position = [0,0,0],[0,-50,0,1]
anim.duration = 20
anim.push();

//balloon shit end

map.save();
function exportMap(diff: Difficulty) {
    diff.require("Chroma");
    diff.require("Noodle Extensions", true)
}
exportMap(activeDiff);