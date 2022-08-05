# ScuffedWalls v2.1.0

# Documentation on functions can be found at
# https://github.com/thelightdesigner/ScuffedWalls/blob/main/Functions.md
            
# DM @thelightdesigner#1337 for more help?

# Using this tool requires an understanding of Noodle Extensions.
# https://github.com/Aeroluna/Heck/wiki

# Playtest your maps

Workspace:Default

0:import
    path:ExpertStandard.dat

0:Run
  Script:index.js
  RunBefore: false
  RefreshOnSave: true

0:ModelToWall
  Path:envImplode.dae
  Track:envImplode
  type:3

0:ModelToWall
  Path:env.dae
  Track:env
  fake:true
  interactable:false
  type:3

0:ModelToWall
  Path:lasers.dae
  Track:Lasers
   fake:true
  interactable:false
  type:3


0:Environment
   id:BTSEnvironment\.\[0\]Environment\.\[17\]SmallPillarPair$
   lookupmethod:Regex
    position:[10000,-10000,0]
   
0:Environment
   repeat:4
   id:BTSEnvironment\.\[0\]Environment\.\[{18+(repeat*2)}\]PillarPair\ \({repeat+1}\)$
   lookupmethod:Regex
   position:[10000,-10000,0]

0:Environment
   repeat:3
   id:BTSEnvironment\.\[0\]Environment\.\[{19+(repeat*2)}\]SmallPillarPair\ \({repeat+1}\)$
   lookupmethod:Regex
   position:[10000,-10000,0]

0:Environment
   id:Environment\.\[\d\d\]GlowLineL$
   lookupmethod:Regex
   position:[10000,-10000,0]
   


0:Environment
   id:Environment\.\[\d\d\]GlowLineH$
   lookupmethod:Regex
   position:[10000,-10000,0]

0:Environment
   id:Environment\.\[\d\d\]GlowLineR$
   lookupmethod:Regex
   position:[10000,-10000,0]

0:Environment
   id:Environment\.\[\d\]TrackMirror$
   lookupmethod:Regex
   active:false

0:Environment
   id:Environment\.\[\d\]Construction$
   lookupmethod:Regex
   active:false

0:Environment
   id:Environment\.\[\d\d]SideLaser
   lookupmethod:Regex
   active:false

0:Environment
   id:Environment\.\[\d\]MagicDoorSprite
   lookupmethod:Regex
   position:[10000,10000,10000]

0:Environment
Lookupmethod:Contains
id:PillarTrackLaneRingsR
active:false

0:Environment
   id:Environment\.\[\d\d]Clouds\.\[\d]LowCloudsGenerator
   lookupmethod:Regex
   scale:[2,1,2]

0:Environment
   id:Environment\.\[\d\d]Clouds\.\[\d]HighCloudsGenerator
   lookupmethod:Regex
   scale:[2,1,2]