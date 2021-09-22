# ScuffedWalls v0.8.2

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md

# An example SW File can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/ScuffedWalls%20Documentation%20Map/ExpertPlusStandard_ScuffedWalls.txt

# DM @thelightdesigner#1337 for more help?

Workspace

0:AppendToAllWallsBetween:
  tobeat:10000
  interactable:false

0: Import
   Path:ExpertPlusStandard.dat

0: Import
   Path:ExpertStandard.dat

26:AppendToALlNotesBetween
  tobeat:55
  animateDissolveArrow:[0,0],[1,0.3],[1,1]
  animateDissolve:[0,0],[1,0.3],[1,1]

57:AppendToAllNotesBetween
tobeat:144
Njsoffset:Random(1,3)
AnimatePosition:[Random(-10,2),Random(-10,2),0,0],[0,0,0,0.35,"easeOutQuint"],[0,0,0,1]
AnimateDissolve:[0,0],[0,0.1],[1,0.3],[1,1]
NoSpawnEffect:true
 
146:AnimateTrack
  track:rotations
  duration:2
  AnimatePosition:[0.5,0,0,0],[-0.5,0,0,0.1],[0.5,0,0,0.2],[-0.5,0,0,0.3],[0.5,0,0,0.4],[-0.5,0,0,0.5],[0.5,0,0,0.6],[-0.5,0,0,0.7],[0.5,0,0,0.8],[-0.5,0,0,0.9],[0.5,0,0,1]

148:AnimateTrack
  track:rotations
  duration:2
  AnimatePosition:[0.5,0,0,0],[-0.5,0,0,0.1],[0.5,0,0,0.2],[-0.5,0,0,0.3],[0.5,0,0,0.4],[-0.5,0,0,0.5],[0.5,0,0,0.6],[-0.5,0,0,0.7],[0.5,0,0,0.8],[-0.5,0,0,0.9],[0.5,0,0,1]

150:AnimateTrack
  track:rotations
  duration:2
  AnimatePosition:[0.5,0,0,0],[-0.5,0,0,0.1],[0.5,0,0,0.2],[-0.5,0,0,0.3],[0.5,0,0,0.4],[-0.5,0,0,0.5],[0.5,0,0,0.6],[-0.5,0,0,0.7],[0.5,0,0,0.8],[-0.5,0,0,0.9],[0,0,0,1]


146:AppendToALlNotesBetween
  tobeat:152
  track:scales
  color:[0.8,0.8,0.8,1]

146:AppendToAllWallsBetween
  tobeat:152
  track:vibro

146:AppendToAllNotesBetween
  tobeat:379
  track:rotations
  njsOffset:0.5

154:AppendToAllNotesBetween
  tobeat:217
  track:vibro

163:AppendToAllNotesBetween
  tobeat:165.5
  track:notecolors2
  appendTechnique:1

234:AppendToAllNotesBetween 
  tobeat:246
  track:NoteColors
  AnimateColor:[0.8,0.8,0.8,0.8,1]

233:AnimateTrack
  duration:13
  AnimateColor:[0.8,0.8,0.8,0.8,1]
  track:NoteColors

478:Note
  repeatAddTime:1
  repeat:23 
  animateDefinitePosition:[30,15,30,0],[30,0,30,0.0001],[30,15,-250,1]
  color:[0.14901960784,0.98431372549,1]
  animateLocalRotation:[0,0,0,0],[37,0,0,1]
  fake:true
  interactable:false
  animateScale:[25,50,50,1]
  animateDissolveArrow:[0.5,0],[0,1]
  track:deeznuts

178:AssignPathAnimation
  track:deeznuts
  duration:23
  animateScale:[25,50,50,0],[50,15,50,0.0001],[50,50,50,1]


489:AppendToAllNotesBetween
  tobeat:502
  track:yes

489:AssignPathAnimation
  track:yes
  animatePosition:[0,100,0,0],[0,0,0,0.2],[0,0,0,1]
  duration:13

478:Note
  repeatAddTime:1
  repeat:23 
  animateDefinitePosition:[-30,15,30,0],[-30,0,30,0.0001],[0,15,-30,0.1],[-30,15,-250,1]
  color:[0.14901960784,0.98431372549,1]
  animateLocalRotation:[0,0,0,0],[-37,0,0,1]
  fake:true
  interactable:false
  animateScale:[25,50,50,1]
  animateDissolveArrow:[0.5,0],[0,1]
  track:deeznuts


500:Note
  repeatAddTime:0.25
  repeat:15
  position:[-30,15,0]
  njs:100
  color:[0.14901960784,0.98431372549,1]
  animateLocalRotation:[0,0,0,0],[-37,0,0,1]
  fake:true
  interactable:false
  animateScale:[50,50,50,1]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  animateDissolve:[0,0],[0,1]

500:Note
  repeatAddTime:0.25
  repeat:15
  position:[30,15,0]
  njs:100
  color:[0.14901960784,0.98431372549,1]
  animateLocalRotation:[0,0,0,0],[-37,0,0,1]
  fake:true
  interactable:false
  animateScale:[50,50,50,1]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  animateDissolve:[0,0],[0,1]

505:AppendToAllNotesBetween
  toBeat:634
  Njsoffset:Random(2,3)
  track:thefunni

505:AssignPlayerToTrack
  track:thefunni

505:AnimateTrack
  track:thefunni
  duration:129
  animatePosition:[0,0,0,0],[0,0,100,1]

563.5:note
  track:funni
  animateDefinitePosition:[0,-20,-60,0],[0,5,45,0.07],[0,5,145,1]
  njsoffset:61.5
  animateDissolve:[0,0],[1,0.07],[1,1]
  type:3
  interactable:false

505.5:AnimateTrack
  duration:1
  track:funni
  animateScale:[15,15,15,0],[30,30,30,0.1,"easeInSine"],[15,15,15,1,"easeOutSine"]
  repeat:2000
  repeatAddTime:1
  animateColor:[0.56470588235,0,0.72156862745,1,1]



634:AnimateTrack
  track:thefunni
  duration:0.01
  animatePosition:[0,0,0,1]

506:Wall
  duration:5
  animateScale:[5,5,25,0],[5,5,25,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[50,-50,0]


506:Wall
  duration:5
  animateScale:[5,5,25,0],[5,5,25,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-50,-50,0]

506:Wall
  duration:5
  animateScale:[5,5,25,0],[5,5,25,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[50,50,0]




506:Wall
  duration:5
  animateScale:[5,5,25,0],[5,5,25,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-50,50,0]

506:Note
  repeat:635
  repeatAddTime:0.2
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  Rotation:[180,0,0]
  Position:[45,-1]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.06,0.06]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  Color:[0.04705882352,0.9294117647,0.96078431372]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff

506:Note
  repeat:635
  repeatAddTime:0.2
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Rotation:[180,0,0]
  Position:[-45,-1]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.06,0.06]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  Color:[0.04705882352,0.9294117647,0.96078431372]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff

506:Note
  repeat:635
  repeatAddTime:0.2
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Rotation:[180,0,0]
  Position:[0,-45]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.06,0.06]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  Color:[0.04705882352,0.9294117647,0.96078431372]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  track:RandomStuff
  interactable:false

506:Note
  repeat:635
  repeatAddTime:0.2
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Rotation:[180,0,0]
  Position:[0,45]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.06,0.06],[0.06,0.06],[0.06,0.06],[0.06,0.06],[0,0]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  Color:[0.04705882352,0.9294117647,0.96078431372]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  track:RandomStuff
  interactable:false

506:Note
  repeat:635
  repeatAddTime:0.2
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  Rotation:[180,0,0]
  Position:[0,-1]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.06,0.06]
  animateDissolveArrow:[0,0],[0,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  Color:[0.04705882352,0.9294117647,0.96078431372]
  NJS:250
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]

510:Note
  repeat:127
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Position:[0,45]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  AnimateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff

510:Note
  repeat:127
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  Position:[90,0]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  animateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  track:RandomStuff
  interactable:false

510:Note
  repeat:127
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Position:[90,90]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  AnimateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  track:RandomStuff
  interactable:false

510:Note
  repeat:127
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Position:[0,-90]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  AnimateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff

515:Note
  repeat:100
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Position:[-90,-90]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  AnimateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  interactable:false
  track:RandomStuff

510:Note
  repeat:100
  repeatAddTime:1
  localRotation:[Random(0,360),Random(0,360),Random(0,360)]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  Position:[0,90]
  AnimatePosition:[0,0,-10,0],[0,0,-10,1]
  animateDissolve:[0.8,1]
  AnimateScale:[50,50,50,0],[50,50,50,1]
  AnimateColor:[1, 0, 0, 1,0], [0, 1, 0, 0.5, 0.0832], [0, 0, 1, 1, 0.15], [1, 0, 0, 1, 0.23], [0, 1, 0, 1, 0.30], [0, 0, 1, 1, 0.38], [1, 0, 0, 1, 0.45], [0, 1, 0, 1, 0.52],     [0, 0, 1, 1, 0.60], [1, 0, 0, 1, 0.68], [0, 1, 0, 1, 0.75], [0, 0, 1, 1, 0.84],[1,1,1,1,1]
  NJS:100
  NJSOffset:4
  fake:true
  isInteractable:false
  track:RandomStuff
  interactable:false



531:AnimateTrack
  track:RandomStuff
  duration:3
  animatePosition:[0,0,0,0,"easeInBounce"],[0,70,0,1,"easeInBounce"]

532.5:AnimateTrack
  track:RandomStuff
  duration:1.5
  animatePosition:[0,0,0,0,"easeOutBounce"]

521:AppendToAllNotesBetween:
  toBeat:523
  track:DissolveNotes

521:AnimateTrack
  track:DissolveNotes
  animateDissolve:[0,0],[0,1]
  duration:1


535:AnimateTrack
  track:RandomStuff
  animatePosition:[0,0,0,0,"easeInBounce"],[100,0,0,1,"easeInBounce"]
  duration:2 

537:AnimateTrack
  track:RandomStuff
  duration: 1.5
  animatePosition:[100,0,0,0,"easeOutBounce"],[0,0,0,1,"easeOutBounce"]

587:note
  repeat:10
  repeatAddTime:0.1
  position:[3,2.5]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni

587:note
  repeat:10
  repeatAddTime:0.1
  position:[6,2]
  animateScale:[5,5,5,1]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni

587:note
  repeat:10
  repeatAddTime:0.1
  position:[3,1.5]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni

587:note
  repeat:10
  repeatAddTime:0.1
  position:[-3,2.5]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni

587:note
  repeat:10
  repeatAddTime:0.1
  position:[-6,2]
  animateScale:[5,5,5,1]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni

587:note
  repeat:10
  repeatAddTime:0.1
  position:[-3,1.5]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni

595:note
  repeat:10
  repeatAddTime:0.1
  position:[3,2.5]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]

595:note
  repeat:10
  repeatAddTime:0.1
  position:[3,2]
  animateScale:[5,5,5,1]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]

595:note
  repeat:10
  repeatAddTime:0.1
  position:[3,1.5]
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]

595:note
  repeat:10
  repeatAddTime:0.1
  position:[-3,2.5]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]

595:note
  repeat:10
  repeatAddTime:0.1
  position:[-6,2]
  animateScale:[5,5,5,1]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]

595:note
  repeat:10
  repeatAddTime:0.1
  position:[-3,1.5]
  animateRotation:[0,0,0,0],[0,0,-90,0.25],[0,0,-180,0.5],[0,0,-270,0.75],[0,0,0,1]
  type:3
  track:thefunni
  rotation:[90,0,0]



604:AssignPathAnimation
  track:yes
  animatePosition:[100,0,0,0],[0,0,0,0.2],[0,0,0,1]
  duration:6


616:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[25,-25,0]

616:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-25,-25,0]

616:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[25,25,0]

616:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-25,25,0]

620:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[25,-25,0]

620:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-25,-25,0]

620:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[25,25,0]

620:Wall
  duration:0.75
  animateScale:[5,5,1,0],[5,5,1,1]
  normal:false
  animateRotation:[0,0,0,0],[0,0,90,0.25],[0,0,180,0.5],[0,0,270,0.75],[0,0,0,1]
  color:[5,5,5,1]
  fake:true
  isInteractable:false
  interactable:false
  position:[-25,25,0]

762:TextToWall
  thicc:12
  path:COMICSANS.png
  line:Thanks for playing!
  spreadSpawnTime:0.075
  duration:15
  AnimateDefinitePosition:[0,45,30,0,"easeOutSine"],[0,5,15,0.125,"easeOutSine"],[0,3,12.5,1]
  size:0.1
  animateDissolve:[0,0],[1,0.175],[1,1]

780:TextToWall
  thicc:12
  path:COMICSANS.png
  line:Mapped by
  line:totally balloon
  spreadSpawnnTime:0.075
  duration:23
  size:0.15
  AnimateDefinitePosition:[45,45,30,0,"easeOutSine"],[0,5,15,0.125,"easeOutSine"],[0,3,12.5,1]

