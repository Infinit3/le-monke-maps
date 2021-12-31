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

29:TextToWall
  Path:font.dae
  line:A
  thicc:12
  spreadspawntime:0
  size:0.2
  animatedefiniteposition:[-10,5,25,0],[5,1.5,25,1,"easeInOutQuad"]
  animateLocalRotation:[0,0,30,0]
  duration:1
  interactable:false

Workspace:script

0:Run
  Javascript:template.js
  RunBefore: false
  refreshonsave:true

