---
id: ellie-tale-test-cases
title: Ellie Tale | Test Cases
sidebar_label: Test Cases
---

## Session Parameters

| Session Parameter     	| Default Value 	|          Expected          	|
|-----------------------	|:-------------:	|:--------------------------:	|
| Language Selection    	|       English     	|      English  : instructions in English
|                         |                     |       Arabic  : instructions in Arabic(not implemented yet)
| Level Selection       	|                   	| Level 1: The player must reveal all objects  |                  |
|                         |                     | Level 2: The main objective is the same as Level 1. However, while collecting the objects with Ellie, Noah will walk around on the same track as an animated distractor 	     |
|                         |       3             | Level 3: The main objective is the same as Level 2. However, after the player is done collecting the objects with Ellie, Noah will ask the player to shake or point at an obstacle to reveal more objects.            	        |
| Timer Selection       	|                   	| 30: The player must reveal all objects in less than 30Sec                         	|
|                         |                     | 60: The player must reveal all objects in less than 60Sec       	        |
|                         |                     | 90: The player must reveal all objects in less than 90Sec            	            |
|                         |        Open         | Open: There's no timer at the game              	        |
| Environment Selection 	|                   	| Garden:  The objective is to collect fruits                    	|
|                       	|     Beach          	| Beach:   The objective is to collect fish and fishing tools                   	|
|  	                      |               	    | Library: The objective is to collect letters                	|

## Gameplay

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            | Animations: Illy flying in front of player and Uncle Noah standing to the side working    |                                                      
|                                       	| Voice overs: Illy introduces the game to the player                                                         	|
|                                       	| Sounds:  None                                                            	|
|                                       	| Interactions: Illy points at the first object with her wand,The object lights up and glow.                                                                          	|
| Perform a task successfully             | Animations: Illy flips and dances happily,target opens animation ,object animation                                                          	|
|                                       	| Voice overs:  Illy says the object name                                                         	|
|                                       	| Sounds:   None                                                                  	|
|                                       	| Interactions: The object disappears in 5s,Illy flies to next one                                                           	|
|                                       	| Statistics:   score +1 ,task counter +1   ,response time Average time between finishing a task (Opening a box) and starting the following task (Opening the next box), throughout a session.                                                    	|
| Getting distracted or performing poorly: 	| Animations:Illy moves in front of player animation                                                           	|
|                                       	| Voice overs:   Illy asks again                                                         	|
|                                       	| Sounds:              None                                                 	|
|                                       	| Interactions:If the player doesn’t follow illy for  3s, Illy asks again and moves in front of the player                                                        	|
|                                       	| Statistics: duration (not count) of interruptions+1                                                        	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   happy Illy dancing animation                                                         	|
|                                       	| Voice overs:     Illy thanks the player                                                      	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: Illy and the player are done collecting all objects                                                	|
|                                       	| Statistics:  final Actual Attention Span and session time |
|   Lost(with Closed time option):        | Animations:  Illy’s glow is reduced and she is sad                                                         	|
|                                       	| Voice overs:   Illy tells the player that they’re too slow and Uncle Noah must leave now.                                                      	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: Back to menu                                               	|
|                                       	| Statistics:  final Actual Attention Span and session time |

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:  same as level 1 expect that Noah will walk around on the same track as an animated distractor.                                                          	|
|                                       	| Voice overs:      same as level 1                                                     	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions:  same as level 1 expect that Noah will walk around on the same track as an animated distractor                                                       	|
| Perform a task successfully              	| Animations: same as level 1                                         	|
|                                       	| Voice overs:    same as level 1                                                       	|
|                                       	| Sounds:        None                                                       	|
|                                       	| Interactions: same as level 1                                                          	|
|                                       	| Statistics:    same as level 1                                                       	|
| Getting distracted or performing poorly: 	| Animations:  same as level 1                                                         	|
|                                       	| Voice overs:    same as level 1                                                       	|
|                                       	| Sounds:             None                                                  	|
|                                       	| Interactions:       same as level 1                                                    	|
|                                       	| Statistics:        same as level 1 and   Distracting time+1                                           	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   same as level 1                                                    	|
|                                       	| Voice overs:     same as level 1                                                    	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics:  same as level 1 |
|   Lost(with Closed time option):        | Animations: same as level 1                                                        	|
|                                       	| Voice overs:   same as level 1                                                      	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics: same as level 1                              |

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations: same as level 2                                                            	|
|                                       	| Voice overs:  same as level 2 and Noah will ask the player to shake or point at an obstacle to reveal more objects                                                         	|
|                                       	| Sounds:            None                                                   	|
|                                       	| Interactions: same as level 1 but also the player should follow Uncle Noah’s instructions and point at noah and click to open the target                                                        	|
| Perform a task successfully              	| Animations: same as level 2                                                           	|
|                                       	| Voice overs: same as level 2                                      	|
|                                       	| Sounds:       None                                                 	|
|                                       	| Interactions:  same as level 2                                                         	|
|                                       	| Statistics:   same as level 2 but response time will be The average (throughout the whole session) between:Average time between finishing a task and starting the following task, throughout a session and Average time between average time from Noah hit box and player response, throughout a session                                       |
| Getting distracted or performing poorly: 	| Animations:    same as level 2                                                       	|
|                                       	| Voice overs:   same as level 2                                                         	|
|                                       	| Sounds:         None                                                      	|
|                                       	| Interactions:   same as level 2                                                         	|
|                                       	| Statistics:     same as level 2                                                       	|
| Level Ended                              |	                                                                                   |
|   Win:                                     | Animations:   same as level 1                                                    	|
|                                       	| Voice overs:     same as level 1                                                    	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics:  same as level 1 |
|   Lost(with Closed time option):        | Animations: same as level 1                                                        	|
|                                       	| Voice overs:   same as level 1                                                      	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions: same as level 1                                               	|
|                                       	| Statistics: same as level 1                              |
