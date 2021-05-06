---
id: garden-do-test-cases
title: GardenDo | Test Cases
sidebar_label: Test Cases
---

## Session Parameters

| Session Parameter     	| Default Value 	|          Expected          	|
|-----------------------	|:-------------:	|:--------------------------:	|
| Language Selection    	| Arabic              	|   Arabic : instructions in Arabic                         	|
|    	|             	|   English : instructions in English                         	|
| Level Selection       	|               	| Level 1:  Must water all flower                     |
|                           |                   | Level 2: 	 The main objective is the same as Level 1. However, while watering a butterfly will fly around him as distractor                   |
|                           |                   | Level 3:   Level 3: The main objective is the same as Level 2. However,while watering a flying bird could land on the flower he is watering and stop the watering process until the player touches it and makes it flies         	        |
| Timer Selection       	|               	|     Open: There's no timer at the game                     	|
| Environment Selection 	|               	| Garden:                    	|



## Gameplay

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:     NPC wave his hands to welcome the player                                                        	|
|                                       	| Voice overs:     NPC welcome the player and tell him the instruction to water the flower                                                      	|
|                                       	| Sounds:                None                                               	|
|                                       	| Interactions:     the player hold the bucket                                                    	|
| Perform a task successfully              	| Animations: The flower starts growing                                                            	|
|                                       	| Voice overs:   NPC says bravo you've planted a beautiful  flower                                                       	|
|                                       	| Sounds:       None                                                        	|
|                                       	| Interactions:  Hold the bucket and put in front of the the flowerwhile looking at the flower                                                         	|
|                                       	| Statistics:  Statistics: score +1 ,task counter +1 ,response time Average time between finishing a task (watering a flower) and starting the following task (watering the next flower), throughout a session.                                                         	|
| Getting distracted or performing poorly: 	| Animations:   The flower stops growing and gets smaller                                                        	|
|                                       	| Voice overs:       None                                            	|
|                                       	| Sounds:               None                                                	|
|                                       	| Interactions:     None                                                      	|
|                                       	| Statistics:         Statistics: duration (not count) of interruptions+1                                                  	|
| Level Ended                              	| Animations:   NPC waves his hand as he thanking the player                                               	|
|                                       	| Voice overs:   NPC says thank you for helping me make the garden looks amazing                                                        	|
|                                       	| Sounds:              None                                                 	|
|                                       	| Interactions:       None                                                    	|
|                                       	| Statistics:           final Actual Attention Span and session time                                                	|

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:   Same as level one with added butterfly flying around animation as distractor                                                        	|
|                                       	| Voice overs:             same as level 1                                              	|
|                                       	| Sounds:              none                                                 	|
|                                       	| Interactions:        same as level 1                                                   	|
| Perform a task successfully              	| Animations:        same as level 1                                                     	|
|                                       	| Voice overs:          same as level 1                                                 	|
|                                       	| Sounds:                    None                                           	|
|                                       	| Interactions:             same as level 1                                              	|
|                                       	| Statistics:               same as level 1                                            	|
| Getting distracted or performing poorly: 	| Animations:              same as level 1                                             	|
|                                       	| Voice overs:                same as level 1                                           	|
|                                       	| Sounds:                     None                                          	|
|                                       	| Interactions:               same as level 1                                            	|
|                                       	| Statistics:                 same as level 1                                          	|
| Level Ended                              	| Animations:                   same as level 1                                        	|
|                                       	| Voice overs:                  same as level 1                                         	|
|                                       	| Sounds:                       None                                        	|
|                                       	| Interactions:                None                                           	|
|                                       	| Statistics:                   same as level 1                                        	|

### Level 3

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:   Animations: same as level 2 and flying bird that land on a flower animation added                                                         	|
|                                       	| Voice overs:      same as level 1                                                     	|
|                                       	| Sounds:          None                                                     	|
|                                       	| Interactions:     same as level 1                                                        	|
| Perform a task successfully              	| Animations:        same as level 1                                                       	|
|                                       	| Voice overs:       same as level 1                                                      	|
|                                       	| Sounds:                  none                                             	|
|                                       	| Interactions:           same as level 1  but when the bird chooses the flower the player is watering it and lands on it the player will hav to touch the bird so it flies and can now continue watering.                                                	|
|                                       	| Statistics:               same as level 1                                              	|
| Getting distracted or performing poorly: 	| Animations:    same as level 1                                                         	|
|                                       	| Voice overs:         same as level 1                                                    	|
|                                       	| Sounds:              None                                                 	|
|                                       	| Interactions:          same as level 1                                                   	|
|                                       	| Statistics:    same as level 1  with TFD(time following the distractor added)                                                       	|
| Level Ended                              	| Animations:     same as level 1                                                        	|
|                                       	| Voice overs:      same as level 1                                                       	|
|                                       	| Sounds:            None                                                   	|
|                                       	| Interactions:      None                                                     	|
|                                       	| Statistics:        same as level 1                                                     	|
