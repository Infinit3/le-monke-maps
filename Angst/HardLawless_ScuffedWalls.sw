# ScuffedWalls v1.5.0

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/NoodleExtensions/blob/master/Documentation/AnimationDocs.md

# Playtest your maps

Workspace:main

0:import
    path:ExpertPlusLawless.dat

#0:ModelToWall
#  path:pyramid2.dae
#  track:environment
#  type:3 
#  fake:true
#  animatedissolve:[0,0]
#  animatedissolvearrow:[0,0]
#  interactable:false

0:Run
  Javascript:Angst.js
  RunBefore: false
  refreshonsave:true

## Start note anims ##

98:AppendToAllNotesBetween
  tobeat:101
  track:FlyNoteOne
  NJS:9
  NJSOffset:5

100:AppendToAllNotesBetween
  tobeat:136
  NJS:9
  NJSOffset:8

0:AssignPathAnimation
  track:FlyNoteOne
  animatePosition:[0,15,15,0],[0,0,0,0.35,"easeOutCubic"]
  AnimateDissolve:[0,0],[1,0.5,"easeInCubic"],[0.6,1,"easeInOutSine"]
  AnimateDissolveArrow:[0,0],[1,0.5,"easeInCubic"],[0.6,1,"easeInOutSine"]
  AnimateScale:[0,0,0,0],[2,2,2,0.2,"easeInCubic"],[1,1,1,0.4,"easeInOutSine"]

0:AssignPathAnimation
  track:FlyNoteLeft
  animatePosition:[-10,10,0,0],[0,0,0,0.45,"easeInOutSine"]
  animateScale:[10,10,10,0],[1,1,1,0.4,"easeInOutSine"]
  animateDissolve:[0,0],[0.9,0.1,"easeInOutSine"],[0,1,"easeInOutSine"]

0:AssignPathAnimation
  track:FlyNoteRight
  animatePosition:[10,10,0,0],[0,0,0,0.45,"easeInOutSine"]
  animateScale:[10,10,10,0],[1,1,1,0.4,"easeInOutSine"]
  animateDissolve:[0,0],[0.9,0.1,"easeInOutSine"],[0,1,"easeInOutSine"]

0:AssignPathAnimation
  track:Build1
  animateDissolve:[0,0],[1,0.125,"easeInOutSine"]
  animateDissolveArrow:[0,0],[1,0.125,"easeInOutSine"]
  animatePosition:[0,5,0,0],[0,0,0,0.125,"easeInOutSine"]

194.9:AppendToAllNotesBetween
  tobeat:195.1
  NJS:19
  NJSOffset:1
  disablespawneffect:true
  disablenotegravity:true
  disablenotelook:true

290:AppendToAllNotesBetween
  tobeat:291.5
  NJS:19
  NJSOffset:1
  disablespawneffect:true
  disablenotegravity:true
  disablenotelook:true



Workspace:Walls

15:Wall
  scale:[0.25,0.25,0.25]
  position:[Random(-15,15),Random(-5,15),0]
  njs:5
  NJSOffset:2
  repeat:1400
  repeatAddTime:0.06
  interactable:false
  color:[Random(0.239,0.992),Random(0.106,0.25),Random(0.475,0.737)]
  animateDissolve:[0,0],[1,0.2,"easeInOutSine"],[0.25,0.4,"easeInOutSine"],[1,0.6,"easeInOutSine"],[0,0.8,"easeInOutSine"]
  animateLocalRotation:[180,180,180,0,"easeInOutSine"],[45,76,23,0.25,"easeInOutSine"],[0,0,0,0.6,"easeInOutSine"]
  track:introWalls

360:Note
  repeat:300
  repeataddtime:0.001
  animatedefiniteposition:[Random(-60,60),-2,Random(-20,60),0]
  scale:[2,2,2]
  track:anxiety
  fake:true
  interactable:false
  animatedissolvearrow:[0,0]
  localrotation:[Random(360,-360),Random(360,-360),Random(360,-360)]
  color:[Random(0,0.317),Random(0.286,0.901),Random(0.741,0.321),1]

225:Wall
  scale:[1.5,1.5,1.5]
  position:[Random(-20,-3.5),Random(0,-30),Random(10,30)]
  rotation:[-90,0,0]
  repeat:100
  repeatAddTime:0.1
  fake:true
  interactable:false
  NJS:20
  NJSOffset:4
  color:[Random(0,0.317),Random(0.286,0.901),Random(0.741,0.321),1]
  localrotation:[Random(360,-360),Random(360,-360),Random(360,-360)]
  track:WallFade

225:Wall
  scale:[1.5,1.5,1.5]
  position:[Random(20,3.5),Random(0,-30),Random(10,30)]
  rotation:[-90,0,0]
  repeat:100
  repeatAddTime:0.1
  fake:true
  interactable:false
  NJS:20
  NJSOffset:4
  color:[Random(0,0.317),Random(0.286,0.901),Random(0.741,0.321),1]
  localrotation:[Random(360,-360),Random(360,-360),Random(360,-360)]
  track:WallFade

327:Wall
  scale:[1.5,1.5,1.5]
  position:[Random(-20,-3.5),Random(0,-30),Random(10,30)]
  rotation:[-90,0,0]
  repeat:100
  repeatAddTime:0.1
  fake:true
  interactable:false
  NJS:20
  NJSOffset:4
  color:[Random(0,0.317),Random(0.286,0.901),Random(0.741,0.321),1]
  localrotation:[Random(360,-360),Random(360,-360),Random(360,-360)]
  track:WallFade2

327:Wall
  scale:[1.5,1.5,1.5]
  position:[Random(20,3.5),Random(0,-30),Random(10,30)]
  rotation:[-90,0,0]
  repeat:100
  repeatAddTime:0.1
  fake:true
  interactable:false
  NJS:20
  NJSOffset:4
  color:[Random(0,0.317),Random(0.286,0.901),Random(0.741,0.321),1]
  localrotation:[Random(360,-360),Random(360,-360),Random(360,-360)]
  track:WallFade2