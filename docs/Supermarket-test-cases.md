---
id: supermarket-test-cases
title: supermarket | Test Cases
sidebar_label: Test Cases
---

## Session Parameters

| Session Parameter     	| Default Value 	|          Expected          	|
|-----------------------	|:-------------:	|:--------------------------:	|
|   Timer Selection       |                   	| 30: The player must shoot at all targets in less than 30Sec                         	|
|                         |                     | 60: The player must shoot at all targets in less than 60Sec       	        |
|                         |                     | 90:The player must shoot at all targets in less than 90Sec            	            |
|                         |        Open         | Open: There's no timer at the game              	        |  	|            	|       
|                         |                     |      



## Gameplay

The expected behaviours can be one of the following:
- A clear description of the expected behaviour in the scene
- None
- Same as in (mention another expected behaviour)

### Level 1
| Action                                   	|                                Expected Behavior                                	|
|------------------------------------------	|:----------------------------------------------------------------------:	|
| Level Started                           	|Interactions: The player must point at the targets on the shelfs with laser and click. 
|                                          	|                                            |
| Perform a task successfully              | Animations: targets falls from the shelfs and  go the cart and scale up and down                                               |
|                                       	| Interactions: a player point to another target, or to arrow to teleport to next section                                     	|
|                                       	|                                                        	|
| Level Ended                              |	                                                                                   |
|   Win:                                     |                                                       	|
|                                       	| Interactions:  the player are done hitting all targets                                                	|
=
  
