# ScuffedWalls v1.5.0

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/NoodleExtensions/blob/master/Documentation/AnimationDocs.md

# Playtest your maps

Workspace:Default

0:import
    path:ExpertLawless.dat

Workspace:text

27.25:TextToWall
  Path:font.dae
  line:A
  thicc:12
  spreadspawntime:0
  size:0.5
  animatedefiniteposition:[-10,5,25,0],[5,1.5,25,1,"easeInOutQuad"]
  animateRotation:[0,0,30,0]
  definiteDurationbeats:0.5
  definitetime:beats
  interactable:false

Workspace:script

0:Run
  Javascript:template.js
  RunBefore: true
  refreshonsave:true
