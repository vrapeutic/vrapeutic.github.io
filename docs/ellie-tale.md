---
id: ellie-tale
title: Ellie Tale
sidebar_label: Ellie Tale
---

## [Put on your VR Headset & Try it out!](https://ellie-tale1.web.app/) 
<!-- ![Ellie-poster](https://media.giphy.com/media/sPLvCsgHmeRORpXqEB/giphy.gif) -->

## [Check Ellie Tale's GitHub Repository](https://github.com/vrapeutic/Ellie-Tale)

## Description
 
A gamified **Virtual Reality** therapeutic application that addresses attention skills on various levels. The gameplay consists of a visual target tracking exercise that is designed to address and measure the various variables of attention assessed by the **Test of Variables of Attention** ([TOVA](https://www.tovatest.com/)).
​
## Story
**Uncle Noah** is a nice old man, living by himself in the neighborhood. Since he’s living alone, he usually needs help in his everyday activities. He does fishing, farming, growing fruits, and writes books to earn a living. 
​
**Ellie** is a fairy living in the neighborhood. One evening, she saw Uncle Noah while he was working on his garden and she talked to him. When she got to know that he was living and working all by himself, she decided that she’d pass by every day to help him. Ellie has invited the **you** to join her in helping Uncle Noah by unpacking his tools or collecting his objects.
​
The gameplay occurs in **three unique environments**. Each is composed of a round track on which the player shall reveal hidden items with the help of Ellie that are then collected. Uncle Noah is always present in the environments on the side doing an idle animation, and the items that the player and Ellie find are collected in a container that lies beside Uncle Noah.
The three environments are: 
​
 - **Garden**; and the objective is to collect fruits and vegetables
 - **Beach**; and the objective is to collect fish and fishing tools
 - **Library**; and the objective is to collect letters
​
## Levels
###  Level One: 
The player must reveal all objects in less than a specific time period (30, 60, and 90 seconds). Each box must be opened in less than a period of time (60 seconds).
 
###  Level Two (*distractor* included):
The main objective is the same as **Level 1**. However, while collecting the objects with Ellie, Noah will walk around on the same track as an animated *distractor*. The player must not be distracted by uncle Noah, and focus to continue revealing objects with Ellie.
 
 
 ###	Level Three (*distractor* and *interaction* are included):
The main objective is the same as **Level 2**. However, after the player is done collecting the objects with Ellie, Noah will ask the player to shake or point at an obstacle to reveal more objects. The player should follow Uncle Noah’s instructions.
 
## Detailed Scene Dialog
​
-   At the beginning, the player can see Illy flying in front of him and Uncle Noah standing to the side working (the type of work depends on the environment chosen). The object behind an obstacle lies in front of the player. (Idle flying Illy animation, 1 of 4 Noah working idle animations, background music)
    
-   Illy introduces the game to the player (Mouth motion animation)
    
    >   “Hello there! I am Illy the fairy, and that is Uncle Noah over there. Uncle Noah has a lot of work to do and nobody around to help him with it, so we are going to help him!”

-   Illy then describes what Uncle Noah needs help with according to the selected environment.    

    >   Garden: “Today, Uncle Noah is collecting fruits in the garden, let’s help him collect the fruits!”    

    >   Beach: “Today, Uncle Noah is fishing by the beach! Let’s help him collect beach tools and fish!”

    >   Library: “Today, Uncle Noah is writing a book! Let’s help him collect letters to use in his book!”
    
-   Illy continues. (Mouth motion animation)

    >   "I will point at an object and then you should click on it to reveal it! Let’s try it."
    
-   Illy points at the first object with her wand. (Hand and wand motion animations)

-   The object lights up and glows. (Animation)
    
-   An animation of the control should appear if the player doesn’t open the first box in 20s.
    
-   Once the player points at and clicks on the object, a particle system is displayed and Illy flies and flips happily and encourages the player and says the name of the object that has appeared. After being revealed, the object disappears after a short period of time (5s). (Obstacle removed and object revealed animations, Illy flying and flipping animation. Illy mouth motion animation. Particle system. Sound of box opening. Success sound)

    >   “Yay! This is a - object name”
    
    >   “Awesome! That’s a – object name”
    
    >   “Woho! This is a – object name”   
​
(Illy says any of these phrases randomly each time not to be repetitive)
​
-   The object revealed by the player is added to the box beside uncle Noah and a score (+1) briefly appears over the box. (Animation of the object being added to uncle Noah’s box and a +1 sign appears)
    
-   If the player doesn’t open the box in 40s, Illy asks again and moves in front of the player. (Mouth motion animation, Illy moves in front of player animation)

    >   “I will point at the object and then you should click on it to reveal it! Click now to reveal the object before Uncle Noah leaves.”

-   If the player doesn’t respond for 1m, Game Lost scene is displayed.

-   Throughout the whole game, every 1m Illy can display an idle flipping while flying animation to engage with the player while she’s flying beside/in front of them. (Illy flipping animation).
​
To know more about the design of the gamified therapeutic VR application, check our [GDD](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing) (Game Design Document)
​
##  Statistics
 In each session, we need collect data to measure the progress of the player. More information about the collected information could be found [here](https://docs.google.com/document/d/1hfb-5QqN-BFjP4_b4bqCiUYKa5b7ye6Q0TGulNYexKg/edit?usp=sharing).
 
 
**Ellie™ Statistics**

![TOVA Stats](https://i.ibb.co/5GYCvNS/e1.png)
​
## Game Flow Diagram

![Ellie-Tale Game Flow](https://i.ibb.co/C02VjJR/e2.png)
