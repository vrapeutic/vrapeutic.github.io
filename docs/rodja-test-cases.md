---
id: rodja-test-cases
title: Rodja | Test Cases
sidebar_label: Test Cases
---

## Session Parameters

| Session Parameter     	| Default Value 	|          Expected          	|
|-----------------------	|:-------------:	|:--------------------------:	|
| Language Selection    	|          Arabic     	|        Arabic : instructions in Arabic                    	|
|     	|               	|        English :instructions in English (Not implemented)                 	|
| Level Selection       	|               	| Level 1:   The player must help the NPC collect all the jewlery             |
|                           |                   | Level 2: 	   The main objective is the same as Level 1. However, while collecting the jowelery , a flying butterfly is added as an animated distractor               |
|                           |                   | Level 3:   The main objective is the same as Level 2 . However the jowelery itself will be moving        	        |
|           Enviroment selection                |                   | Snow        	        |
|                          |                   | Desert        	        |
|                           |                   | Garden   (Not implemented)     	        |
|                         |                   | Space    (Not implemented)    	        |
|           Road selection                |                   | 5 different roads with 5 different shapes  	        |
| Timer Selection       	|               	|  Open: There's no timer at the game                         	|



## Gameplay

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:  The npc waving to welcome the player                                                          	|
|                                       	| Voice overs:   NPC welcome the player  and tell him to be ready                                                       	|
|                                       	| Sounds:        None                                                       	|
|                                       	| Interactions:  Player start to point to jowelery                                                         	|
| Perform a task successfully              	| Animations:   The NPC moves towards the jowelery the player pointed to                                                          	|
|                                       	| Voice overs:  None                                                         	|
|                                       	| Sounds:        Collecting jowelery sound                                                       	|
|                                       	| Interactions:   The jowelery disapeares and the next now shows up                                                        	|
|                                       	| Statistics:                    Statistics: score +1 ,task counter +1 ,response time Average time between finishing a task (collecting a jowelery) and starting the following task (collecting the next jowelery), throughout a session.                                       	|
| Getting distracted or performing poorly: 	| Animations:      None                                                     	|
|                                       	| Voice overs:       None                                                    	|
|                                       	| Sounds:            None                                                   	|
|                                       	| Interactions:       None                                                    	|
|                                       	| Statistics:           duration (not count) of interruptions+1                                                 	|
| Level Ended                              	| Animations:    when collected all the  joweleries the treasure box opens at the end                                                     	|
|                                       	| Voice overs:      the NPC cheers (Bravo)                                                     	|
|                                       	| Sounds:     None                                                          	|
|                                       	| Interactions:   None                                                        	|
|                                       	| Statistics:     final Actual Attention Span and session time                                                       	|

### Level 2

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:   same as level 1 and a flying butterfly distractor is added                                                         	|
|                                       	| Voice overs:         same as level 1                                                  	|
|                                       	| Sounds:                   None                                            	|
|                                       	| Interactions:           same as level 1                                                	|
| Perform a task successfully              	| Animations:            same as level 1                                                 	|
|                                       	| Voice overs:              same as level 1                                             	|
|                                       	| Sounds:                   same as level 1                                            	|
|                                       	| Interactions:             same as level 1                                              	|
|                                       	| Statistics:                   same as level 1                                        	|
| Getting distracted or performing poorly: 	| Animations:      same as level 1                                                     	|
|                                       	| Voice overs:       same as level 1                                                    	|
|                                       	| Sounds:                 None                                              	|
|                                       	| Interactions:              same as level 1                                             	|
|                                       	| Statistics:        same as level 1 and Distracting time+1                                                   	|
| Level Ended                              	| Animations:         same as level 1                                                    	|
|                                       	| Voice overs:             same as level 1                                                	|
|                                       	| Sounds:                 none                                              	|
|                                       	| Interactions:             same as level 1                                                	|
|                                       	| Statistics:               same as level 1                                              	|

### Level 3

| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                            	| Animations:       same as level 2                                                      	|
|                                       	| Voice overs:           same as level 1                                                 	|
|                                       	| Sounds:                None                                               	|
|                                       	| Interactions:             same as level 1 but  the jowelery itself will be moving                                               	|
| Perform a task successfully              	| Animations:             same as level 1                                                  	|
|                                       	| Voice overs:             same as level 1                                                	|
|                                       	| Sounds:                    same as level 1                                             	|
|                                       	| Interactions:              same as level 1                                               	|
|                                       	| Statistics:               same as level 1  and TFD (time following distractor)                                          	|
| Getting distracted or performing poorly: 	| Animations:              same as level 1                                             	|
|                                       	| Voice overs:                same as level 1                                           	|
|                                       	| Sounds:                      None                                         	|
|                                       	| Interactions:                same as level 1                                           	|
|                                       	| Statistics:                 same as level 2                                          	|
| Level Ended                              	| Animations:                 same as level 1                                           	|
|                                       	| Voice overs:                   same as level 1                                         	|
|                                       	| Sounds:                          None                                     	|
|                                       	| Interactions:                    None                                       	|
|                                       	| Statistics:                     same as level 1                                        	|
