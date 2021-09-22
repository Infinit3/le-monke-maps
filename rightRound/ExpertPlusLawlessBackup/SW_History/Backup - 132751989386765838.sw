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
	
3:AssignPathAnimation
	track:beginningPath
	duration:13
	animatePosition:[-4,4,0,0],[0,0,0,0.3,"easeInQuad"]
	animateDissolveArrow:[0.2,0],[1,0.3]
	
0:AppendToAllNotesBetween
	tobeat:15.6
	NJS:8