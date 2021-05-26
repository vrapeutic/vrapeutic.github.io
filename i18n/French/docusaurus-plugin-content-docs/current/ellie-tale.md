---
id: ellie-tale-vr-module-description
title: Ellie Tale | Description du module VR
sidebar_label: Module VR
---

## [Mettez votre casque VR et essayez-le!](https://ellie-tale1.web.app/) 

## [Vérifiez le référentiel GitHub d'Archeeko](https://github.com/vrapeutic/Ellie-Tale)

## La description
 
Une application thérapeutique gamifiée ** de réalité virtuelle ** qui aborde les compétences d'attention à différents niveaux. Le gameplay consiste en un exercice de suivi visuel de la cible conçu pour aborder et mesurer les différentes variables d'attention évaluées par le ** Test des variables d'attention ** ([TOVA](https://www.tovatest.com/)) .

## Histoire
** Oncle Noah ** est un gentil vieil homme vivant seul dans le quartier. Puisqu'il vit seul, il a généralement besoin d'aide dans ses activités quotidiennes. Il pêche, cultive, cultive des fruits et écrit des livres pour gagner sa vie.

** Ellie ** est une fée vivant dans le quartier. Un soir, elle a vu l'oncle Noah alors qu'il travaillait sur son jardin et elle lui a parlé. Lorsqu'elle a appris qu'il vivait et travaillait tout seul, elle a décidé qu'elle passerait chaque jour pour l'aider. Ellie a invité le ** vous ** à se joindre à elle pour aider l'oncle Noah en déballant ses outils ou en ramassant ses objets.

Le gameplay se déroule dans ** trois environnements uniques **. Chacun est composé d'une piste ronde sur laquelle le joueur doit révéler des objets cachés avec l'aide d'Ellie qui sont ensuite collectés. Oncle Noah est toujours présent dans les environnements sur le côté faisant une animation inactive, et les objets que le joueur et Ellie trouvent sont rassemblés dans un conteneur qui se trouve à côté de l'oncle Noah.
Les trois environnements sont:

 - **Jardin**; et l'objectif est de récolter des fruits et légumes
 - **Plage**; et l'objectif est de collecter des poissons et des outils de pêche
 - **Bibliothèque**; et l'objectif est de collecter des lettres

## Les niveaux
###  Premier niveau:
Le joueur doit révéler tous les objets en moins d'une période de temps spécifique (30, 60 et 90 secondes). Chaque boîte doit être ouverte en moins d'une période de temps (60 secondes).
 
### Niveau deux (* distracteur * inclus):
L'objectif principal est le même que le ** Niveau 1 **. Cependant, tout en collectant les objets avec Ellie, Noah se promènera sur la même piste qu'un * distracteur * animé. Le joueur ne doit pas être distrait par l'oncle Noah et se concentrer pour continuer à révéler des objets avec Ellie.
 
 
### Niveau trois (* distracteur * et * interaction * sont inclus):
L'objectif principal est le même que le ** Niveau 2 **. Cependant, une fois que le joueur a fini de collecter les objets avec Ellie, Noah demandera au joueur de secouer ou de pointer un obstacle pour révéler plus d'objets. Le joueur doit suivre les instructions de l’oncle Noah.

## Boîte de dialogue de scène détaillée

- Au début, le joueur peut voir Illy voler devant lui et Oncle Noah debout sur le côté en train de travailler (le type de travail dépend de l'environnement choisi). L'objet derrière un obstacle se trouve devant le joueur. (Animation Illy volant au ralenti, 1 des 4 animations inactives de Noah, musique de fond)
    
- Illy présente le jeu au joueur (animation de mouvement de la bouche)
    
    > «Bonjour! Je suis Illy la fée, et c'est l'oncle Noah là-bas. Oncle Noah a beaucoup de travail à faire et personne n'est là pour l'aider, alors nous allons l'aider!

- Illy décrit ensuite ce pour quoi l'oncle Noah a besoin d'aide en fonction de l'environnement choisi.

    > Jardin: «Aujourd'hui, oncle Noah cueille des fruits dans le jardin, aidons-le à ramasser les fruits!»

    > Plage: «Aujourd'hui, l'oncle Noah pêche sur la plage! Aidons-le à ramasser des outils de plage et des poissons! »

    > Bibliothèque: «Aujourd'hui, l'oncle Noah écrit un livre! Aidons-le à collecter des lettres à utiliser dans son livre! "
    
- Illy continue. (Animation de mouvement de bouche)

    > "Je pointerai un objet et vous devrez cliquer dessus pour le révéler! Essayons-le."
    
- Illy montre le premier objet avec sa baguette. (Animations de mouvement de main et de baguette)

- L'objet s'allume et brille. (Animation)
    
- Une animation du contrôle devrait apparaître si le joueur n’ouvre pas la première boîte dans 20s.
    
- Une fois que le joueur pointe et clique sur l'objet, un système de particules est affiché et Illy vole et retourne joyeusement et encourage le joueur et dit le nom de l'objet qui est apparu. Après avoir été révélé, l'objet disparaît après un court laps de temps (5 s). (Obstacle supprimé et objets révélés animations, animation de vol et de retournement illy. Animation de mouvement de bouche Illy. Système de particules. Son de l'ouverture de la boîte. Son de réussite)

    > «Ouais! Ceci est un - nom d'objet »
    
    > «Génial! C’est un… nom d’objet »
    
    > «Woho! Ceci est un - nom d'objet »

(Illy dit n'importe laquelle de ces phrases au hasard à chaque fois pour ne pas être répétitive)

- L'objet révélé par le joueur est ajouté à la case à côté de l'oncle Noah et un score (+1) apparaît brièvement sur la case. (Animation de l'objet ajouté à la boîte de l'oncle Noé et un signe +1 apparaît)
    
- Si le joueur n’ouvre pas la boîte dans les années 40, Illy demande à nouveau et se déplace devant le joueur. (Animation de mouvement de bouche, Illy se déplace devant l'animation du joueur)

    > «Je pointerai l'objet et ensuite vous devrez cliquer dessus pour le révéler! Cliquez maintenant pour révéler l'objet avant le départ de l'oncle Noah. »

- Si le joueur ne répond pas pendant 1 m, la scène Game Lost s’affiche.

- Tout au long du jeu, tous les 1 m, Illy peut afficher une animation de retournement au ralenti tout en volant pour interagir avec le joueur pendant qu'il vole à côté / devant eux. (Animation de retournement illégal).

Pour en savoir plus sur la conception de l'application de RV thérapeutique gamifiée, consultez notre [GDD](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing) (Game Design Document)
​
##  Statistiques
  Dans chaque session, nous avons besoin de collecter des données pour mesurer la progression du joueur. Plus d'informations sur les informations collectées peuvent être trouvées [ici](https://docs.google.com/document/d/1hfb-5QqN-BFjP4_b4bqCiUYKa5b7ye6Q0TGulNYexKg/edit?usp=sharing).
 

** Statistiques Ellie™ **

![TOVA Stats](https://i.ibb.co/5GYCvNS/e1.png)
​
## Diagramme de flux de jeu

![Flux de jeu Ellie-Tale](https://i.ibb.co/C02VjJR/e2.png)
