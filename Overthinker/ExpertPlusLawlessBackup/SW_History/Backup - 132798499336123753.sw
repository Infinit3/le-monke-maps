# ScuffedWalls v1.5.0

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/NoodleExtensions/blob/master/Documentation/AnimationDocs.md

# Playtest your maps

Workspace:Default

0:import
    path:HardLawless.dat

Workspace:text

27.25:TextToWall
  Path:font.dae
  line:A
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[-10,7,25,0],[5,5,30,1,"easeInOutSine"]
  animateRotation:[0,0,-1,0]
  definiteDurationbeats:0.75
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]


28:TextToWall
  Path:font.dae
  line:person
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[10,4,30,0],[-5,1.5,30,1,"easeInOutSine"]
  animateRotation:[0,0,1,0]
  definiteDurationbeats:1
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

29.188:TextToWall
  Path:font.dae
  line:who
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[-10,7,25,0],[5,5,30,1,"easeInOutSine"]
  animateRotation:[0,0,-1,0]
  definiteDurationbeats:0.75
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

30.562:TextToWall
  Path:font.dae
  line:thinks
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[10,4,30,0],[-5,1.5,30,1,"easeInOutSine"]
  animateRotation:[0,0,1,0]
  definiteDurationbeats:1.5
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

32:TextToWall
  Path:font.dae
  line:all
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[-10,7,25,0],[5,5,30,1,"easeInOutSine"]
  animateRotation:[0,0,-1,0]
  definiteDurationbeats:0.75
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

32.75:TextToWall
  Path:font.dae
  line:the
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[10,4,30,0],[-5,1.5,30,1,"easeInOutSine"]
  animateRotation:[0,0,1,0]
  definiteDurationbeats:0.75
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

33.25:TextToWall
  Path:font.dae
  line:time,
  thicc:12
  spreadspawntime:0.0025
  size:0.5
  animatedefiniteposition:[-10,7,25,0],[5,5,30,1,"easeInOutSine"]
  animateRotation:[0,0,-1,0]
  definiteDurationbeats:2
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

38:TextToWall
  Path:font.dae
  line:has
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[10,4,30,0],[-5,1.5,30,1,"easeInOutSine"]
  animateRotation:[0,0,1,0]
  definiteDurationbeats:0.75
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

38.5:TextToWall
  Path:font.dae
  line:nothing
  thicc:12
  size:0.5
  animatedefiniteposition:[-10,7,25,0],[5,5,30,1,"easeInOutSine"]
  animateRotation:[0,0,-1,0]
  definiteDurationbeats:1
  definitetime:beats
  interactable:false
  animateDissolve:[0,0],[1,0.1],[1,0.8],[0,1]

Workspace:script

0:Run
  Javascript:template.js
  RunBefore: true
  refreshonsave:true