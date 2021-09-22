# ScuffedWalls v1.5.0

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/NoodleExtensions/blob/master/Documentation/AnimationDocs.md

# Playtest your maps

Workspace:Default

0:ModelToWall
	path:cart.dae
	definitedurationbeats:40
	track:cart
	interactable:false
	color:[0.1,0,0,1]
	
0:ModelToWall
	path:track.dae
	definitedurationbeats:40
	interactable:false
	color:[1,1,1,1]
	thicc:1
	
	
0:import
    path:HardLawless.dat
	
###cart animations###

0:assignplayertotrack
	track:cart
	animateposition:[0,-1,0.5,1]
	
0.1:AnimateTrack
	track:cart
	duration:7
	animatePosition:[0,0,0,0],[0,2,0,1]
	
10:animateTrack
	track:cart
	duration:9
	animatePosition:[0,2,0,0],[0,2,128,1,"easeInQuad"]
	
19:animateTrack
	track:cart
	duration:14
	animatePosition:[0,2,128,0],[0,60,128,1,"easeOutCubic"]
	
18.5:animateTrack
	track:cart
	animatelocalrotation:[0,0,0,0],[-90,0,0,1,"easeInOutQuad"]
	duration:0.25
	
workspace:balls
	
33:animateTrack
	track:cart
	duration:7.5
	animatePosition:[0,60,128,0],[0,0,128,1,"easeInOutSine"]