---
id: archeeko-test-cases
title: Archeeko | Test Cases
sidebar_label: Test Cases
---

## Session Parameters

| Session Parameter     	| Default Value 	|          Expected          	|
|-----------------------	|:-------------:	|:--------------------------:	|
| Language Selection    	|       English     	|      English  : instructions in English
|                         |                     |       Arabic  : instructions in Arabic(not implemented yet)
| Level Selection       	|                   	| Level 1:  tree in front of the player which contains the targets that the player has to shoot at.  |                  |
|                         |                     | Level 2: The main objective is the same as Level 1. However, while collecting the objects with Ellie, Noah will walk around on the same track as an animated distractor 	     |
|                         |       3             | Level 3: The main objective is the same as Level 2. However, after the player hits a target, a small ball is popping up from the target's position to the player, and he should move away before hitting him because he will lose one of his lives.
| Timer Selection       	|                   	| 30: The player must shoot at all targets in less than 30Sec                         	|
|                         |                     | 60: The player must shoot at all targets in less than 60Sec       	        |
|                         |                     | 90:The player must shoot at all targets in less than 90Sec            	            |
|                         |        Open         | Open: There's no timer at the game              	        |
| Arrows Selection       	|                     | 25:  The number of the player's Arrows will be 25                    	|
|                       	|                   	| 50:   The number of the player's Arrows will be 50                  	|
|  	                      |         75      	  | 75: The number of the player's Arrows will be 75                	|
| Distance Selection    	|                   	| 5:  The distance and trees with target will be 5                 	|
|  	                      |               	    | 7:  The distance and trees with target will be 7                	|
|                       	|        10          	| 10:  The distance and trees with target will be 10                  	|
| Character Selection     |       male      	  | male: The non palyer Character will be Hussien               	|
|                       	|                     | female: The non palyer Character will be Reem                 	|


## Gameplay

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                           | Animations: The NPC waves their hand    |                                                     
|                                       	| Voice overs: The NPC introduces themselves                                                       	|
|                                       	| Sounds: background music-Sounds of the bow stretching and the arrow release should be played when the player uses the arrow         	|
|                                        	| Interactions: The player must shoot at the targets on the fir tree.                                                                   |
| Perform a task successfully             | Animations: targets falls from the tree and produces a particle system, arrow's realse animation                                                |
|                                       	| Voice overs: NPC should tell the player good job and encourage the player to continue                                             	|
|                                       	| Sounds:   Sound played when target is hit                                                                  	|
|                                       	| Interactions: e player hits a target, it falls from the tree and produces a particle system                                        	|
|                                       	| Statistics:   score +1 ,task counter +1   ,response time Average time between finishing a task (hit a target) and starting the following task (hiting the next target), throughout a session.                                                    	|
| Getting distracted or performing poorly: 	| Animations: none                                                           	|
|                                       	| Voice overs:   npc  asks again                                                         	|
|                                       	| Sounds:              None                                                 	|
|                                       	| Interactions:If the player doesn’t look at ther tree  for  3s, npc asks again to hit the targets                                                        	|
|                                       	| Statistics: duration (not count) of interruptions+1                                                        	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   happy npc  animation                                                         	|
|                                       	| Voice overs:     npc thanks the player                                                      	|
|                                       	| Sounds:        winnig sound                                                       	|
|                                       	| Interactions:  the player are done hitting all targets                                                	|
|                                       	| Statistics:  final Actual Attention Span and session time |

|   Lost:                                  | Animations:  npc is sad                                                         	|
|                                       	| Voice overs:   The NPC tells the player to try again and the level .                                                      	|
|                                       	| Sounds: losing sound                                                         	|
|                                       	| Interactions: the player finishes his arrows or time out if it closed time;                                              	|
|                                       	| Statistics:  final Actual Attention Span and session time |

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:  same as level 1 expect that butterflyy  is flying around .                                                          	|
|                                       	| Voice overs:      same as level 1                                                     	|
|                                       	| Sounds:       same as level 1                                                          	|
|                                       	| Interactions:  same as level 1 expect that butterflyy  is flying around                                                      	|
| Perform a task successfully              	| Animations: same as level 1                                         	|
|                                       	| Voice overs:    same as level 1                                                       	|
|                                       	| Sounds:         same as level 1                                                        	|
|                                       	| Interactions: same as level 1                                                          	|
|                                       	| Statistics:    same as level 1                                                       	|
| Getting distracted or performing poorly: 	| Animations:  same as level 1                                                         	|
|                                       	| Voice overs:    same as level 1                                                       	|
|                                       	| Sounds:              same as level 1                                                   	|
|                                       	| Interactions:       same as level 1                                                    	|
|                                       	| Statistics:        same as level 1 and   Distracting time+1                                           	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   same as level 1                                                    	|
|                                       	| Voice overs:     same as level 1                                                    	|
|                                       	| Sounds:       same as level 1                                                          	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics:  same as level 1 |
|   Lost:                                 | Animations: same as level 1                                                        	|
|                                       	| Voice overs:   same as level 1                                                      	|
|                                       	| Sounds:       same as level 1                                                          	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics: same as level 1                              |

## Level 3

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations: same as level 2                                                          	|
|                                       	| Voice overs:  same as level 2                                                          	|
|                                       	| Sounds:    same as level 2                                                    	|
|                                       	| Interactions: same as level 1 
| Perform a task successfully              	| Animations: same as level 2                                                           	|
|                                       	| Voice overs: same as level 2                                      	|
|                                       	| Sounds:       same as level 2                                                  	|
|                                       	| Interactions:  same as level 2                                                         	|
|                                       	| Statistics:   same as level 2 but response time will be The average (throughout the whole session) between:Average time between finishing a task and starting the following task, throughout a session and Average time between average time from ball hit player and player response, throughout a session                                       |
| Getting distracted or performing poorly: 	| Animations:    same as level 2                                                       	|
|                                       	| Voice overs:   same as level 2                                                         	|
|                                       	| Sounds:         same as level 2                                                       	|
|                                       	| Interactions:   same as level 2                                                         	|
|                                       	| Statistics:     same as level 2                                                       	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   same as level 1                                                    	|
|                                       	| Voice overs:     same as level 1                                                    	|
|                                       	| Sounds:      same as level 2                                                          	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics:  same as level 1 |
|   Lost:                                 | Animations: same as level 1 -ball twords the player                                                       	|
|                                       	| Voice overs:   same as level 1 and npc will ask the player to move before the ball hits him                                                 	|
|                                       	| Sounds:      same as level 2                                                          	|
|                                       	| Interactions: same as level 1 but also when the player hits a gift a ball comes out from the gift towards the player. 
target ,the player to move before the ball hits him                                                       	|                                              	|
|                                       	| Statistics: same as level 2                             |
