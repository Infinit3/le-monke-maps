# ScuffedWalls v1.4.2

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/NoodleExtensions/blob/master/Documentation/AnimationDocs.md

# Playtest your maps

Workspace:Default

0:import
	path:ExpertLawless.dat
	
0:AssignPathAnimation
	track:beginningPath
	duration:16
	animatePosition:[-4,4,0,0],[0,0,0,0.3,"easeInQuad"]
	animateDissolveArrow:[0.2,0],[1,0.3]
	
0:AppendToAllNotesBetween
	tobeat:15.6
	NJS:8
	
16.125:AppendToAllNotesbetween
	tobeat:18.281
	selecttype:1
	animateLocalRotation:[0,{index*10},0,1]
	animateRotation:[0,0,{index*12},1]
	animateColor:[0.76078431372,0,0,0,0],[0,0,0.76078431372,0,0.05],[0.76078431372,0,0,0,0.1],[0,0,0.76078431372,0,0.15],[0.76078431372,0,0,0,0.2],[0,0,0.76078431372,0,0.25],[0.76078431372,0,0,0,0.3],[0,0,0.76078431372,0,0.35],[0.76078431372,0,0,0,0.4],[0,0,0.76078431372,0,0.45],[0.76078431372,0,0,0,0.5],[0,0,0.76078431372,0,0.55],[0.76078431372,0,0,0,0.6],[0,0,0.76078431372,0,0.65],[0.76078431372,0,0,0,0.7],[0,0,0.76078431372,0,0.75],[0.76078431372,0,0,0,0.8],[0,0,0.76078431372,0,0.85],[0.76078431372,0,0,0,0.9],[0,0,0.76078431372,0,0.95],[0.76078431372,0,0,0,1]
	disableNoteLook:true
	disableNoteGravity:true
	interactable:false
	njs:60
	fake:true
	animateDissolve:[{index*0.005},0],[{index*0.07},1]
	
20:note
	repeataddtime:0.05
	repeat:320
	fake:true
	interactable:false
	animaterotation:[Random(0,360),Random(0,360),Random(0,360),0.5],[Random(0,360),Random(0,360),Random(0,360),1]
	animateScale:[1,1,1,0],[2,2,4,0.5]
	animatePosition:[10,10,10,0]
	animateLocalRotation:[Random(0,360),Random(0,360),Random(0,360),0.5],[Random(0,360),Random(0,360),Random(0,360),1]
	type:1
	animateColor:[1,0,0.85,1,0],[1,0,0.85,1,0.25],[1,0,0.85,1,0.75],[1,0,0.85,1,1]
	
0:AssignPlayerToTrack
	track:spin
	
21:AnimateTrack
	track:spin
	duration:0.9
	repeat:5
	repeataddtime:2
	animateRotation:[0,0,0,0],[0,90,0,0.5],[0,180,0,1]
	
22:AnimateTrack
	track:spin
	duration:0.9
	repeat:5
	repeataddtime:2
	animateRotation:[180,0,0,0],[0,270,0,0.5],[0,0,0,1]