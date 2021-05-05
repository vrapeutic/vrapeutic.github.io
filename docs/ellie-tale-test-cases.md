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

## Gameplay (closed-time)

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
|                                       	| Statistics:   score +1 ,task counter +1                                                        	|
| Getting distracted or performing poorly: 	| Animations:Illy moves in front of player animation                                                           	|
|                                       	| Voice overs:   Illy asks again                                                         	|
|                                       	| Sounds:              None                                                 	|
|                                       	| Interactions:If the player doesn’t follow illy for  3s, Illy asks again and moves in front of the player                                                        	|
|                                       	| Statistics: duration (not count) of interruptions+1                                                        	|
| Level Ended                              	| Animations:   happy Illy dancing animation                                                         	|
|                                       	| Voice overs:     Illy thanks the player                                                      	|
|                                       	| Sounds:      None                                                         	|
|                                       	| Interactions:       Illy and the player are done collecting all objects                                                     	|
|                                       	| Statistics:  calculate Actual Attention Span and session time                                             	|

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:                                                            	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
| Perform a task successfully              	| Animations:                                                             	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Getting distracted or performing poorly: 	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Level Ended                              	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|

### Level 3

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:                                                            	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
| Perform a task successfully              	| Animations:                                                             	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Getting distracted or performing poorly: 	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Level Ended                              	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|

## Gameplay (open-time)

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:                                                            	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
| Perform a task successfully              	| Animations:                                                             	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Getting distracted or performing poorly: 	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Level Ended                              	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:                                                            	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
| Perform a task successfully              	| Animations:                                                             	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Getting distracted or performing poorly: 	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Level Ended                              	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|

### Level 3

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:                                                            	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
| Perform a task successfully              	| Animations:                                                             	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Getting distracted or performing poorly: 	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
| Level Ended                              	| Animations:                                                           	|
|                                       	| Voice overs:                                                           	|
|                                       	| Sounds:                                                               	|
|                                       	| Interactions:                                                           	|
|                                       	| Statistics:                                                           	|
