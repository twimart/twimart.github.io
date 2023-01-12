---
title: "Projet de configuration d'un réseau"
date: 2023-01-12T14:01:35+01:00
FRtags: ["configuration", "cisco"]
---

## Intro ##

Dans ce contexte, on va ici configurer le réseau d’un bâtiment qui gère les ligues sportives d’une région.
Voici la maquette du réseau en question :

## Les différentes missions ##

On va devoir configurer ce réseau, et pour cela plusieurs missions sont nécessaires :

- Il va falloir segmenter le réseau, réfléchir au nombre de VLAN qu’il faut attribuer, aux IP…

- On va ensuite devoir donner un configuration basique au équipements, de manière à ce qu’il s puissent se « ping » entre eux.

- On va devoir mettre en place un serveur NTP, afin de synchroniser l’heure des équipements.

- Mettre en place une solution de sauvegarde des configurations des équipements via TFTP sera fortement recommandé.

- On devra aussi mettre en place un serveur Syslog, pour enregistrer les logs des équipements.

    -La création d’ACL sera aussi une étape clé de ce projet, afin que note réseau puisse avoir un accès Internet. On pensera a adapter les ACL pour la DMZ.

la suite des missions arrive plus tard! 😊

### 1ere mission : segmentation du réseau ###

On va ici définir la segmentation de notre réseau, c’est à dire qu’on va définir le nombre de VLAN, ainsi que leur plage d’adresse.

- On va tout d’abord créer 80 VLAN, chacun de 32 adresses, qui seront adaptable en fonction du nombre de ligues présente dans le bâtiment grâce a VLSM.

plage d’adresses : **172.16.0.1/27 - 172.16.9.254/27**

- On va ensuite faire un VLAN pour le Wifi public. On va prévoir un grand nombre d’adresses au cas ou, avec 4 096 adresses disponible dans ce VLAN.

plage d’adresse : **172.16.16.1/20 – 172.16.31.254/20**

- On va créer un VLAN « Administration », de 27 adresses. Il sera réservé pour la salle d’administration.

plage d’adresses : **172.16.10.1/27 – 172.16.10.30/27**

- Il y a une salle de reprographie dans le bâtiment. On va créer un VLAN de 32 adresses pour cette pièce. 

plage d’adresse : **172.16.10.33/27 – 172.16.10.62/27**

- Pour la salle Multimédia, on va aussi faire un VLAN de 32 adresses.

plage d’adresses : **172.16.10.65/27 – 172.16.10.94/27**

- Pour l’Amphithéâtre, la salle de réunion, et la salle de convivialité, un VLAN filaire public sera nécessaire. 29 adresses seront suffisantes pour ce VLAN.

plage d’adresses : **172.160.10.91.
