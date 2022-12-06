---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 2)"
date: 2022-12-06T10:55:47+01:00
FRtags: ["pfsense", "proxy"] 
ShowBreadCrumbs: false
searchHidden: true
draft: true
---


Les différentes parties qui composent ce tutoriel:
- [Part-1](/fr/notes/proxy)
- [Part-2](/fr/notes/proxy2)
- [Part-3](/fr/notes/proxy3)
- [Part-4](/fr/notes/proxy4)
- [Part-5](/fr/notes/proxy5)



## Installation de Pfsense ##


![pfsense1](/images/pfsense/pfsense1.png)

Cliquer sur "Accept".

![pfsense2](/images/pfsense/pfsense2.png)

Sélectionnez "Install", puis "OK"    

L'installateur va alors vous demander de sélectionner la disposition de votre clavier (j'ai un clavier français). Sélectionnez la disposition qui vous convient, puis appuyer sur "Select".

![pfsense3](/images/pfsense/pfsense3.png)

Confirmer votre choix.

![pfsense4](/images/pfsense/pfsense4.png)

On nous demande ensuite comment partionner notre disque. Choisissez "Auto (UFS) BIOS", puis "OK".

![pfsense5](/images/pfsense/pfsense5.png)

Pfsense va alors démmarer son installation:

![pfsense6](/images/pfsense/pfsense6.png)

Si l'installateur vous demande d'ouvrir un Shell, répondez "non"    

Vous redémarrerez la machine virtuelle quand l'installateur vous le proposera.

## Configuration de démarrage de Pfsense ## 

Au redémarrage, on vous demandera si les VLANS doivent être configurés. Appuyez sur "n" puis "Enter"

![pfsense7](/images/pfsense/pfsense7.png)

Ensuite, vous devez dire à Pfsense quelles interfaces correspondent au WAN et au LAN. Pour l'instant, on ne sait pas à quoi correspond "em0" et "em1" donc mettons au hasard (on pourra modifier cela plus tard).

![pfsense8](/images/pfsense/pfsense8.png)

Puis confirmer en appuyant sur "y": 

![pfsense9](/images/pfsense/pfsense9.png)

Et nous avons enfin fini l'installation de Pfsense! Vous devrez maintenant arriver sur le menu de configuration principal.

![pfsense10](/images/pfsense/pfsense10.png)

Pas de panique si vous n'avez pas d'adresses IP pour "em0" ou "em1" (comme moi), on va règler cela tout de suite! 

Appuyer sur la touche "1" du clavier afin d'assigner les interfaces correctement.


![pfsense11](/images/pfsense/pfsense11.png)

Nous remarquons alors qu'à coté de "em0" et "em1", il y a des adresses MAC...

L'assistant nous (re)demande si nous voulons confiugurer les VLANS. Appuyer sur "n".    

Puis on nous demande quel interface correspond au WAN. Mais comment le savoir? "em0"? "em1"? Une petite explication s'impose.

Lorsque nous avons configuré les interfaces de la VM de Pfsense, nous en avons mis une en "LAN segment" et une autre en "Bridged". Celle en "LAN segment" correspond au coté LAN de Pfsense, tandis que la "Bridged" correspond au coté WAN.    

Mais comment savoir laquelle correspond à "em0" ou à "em1"? Avec les adresses MAC que vous avez normalement noté un peu plus tôt ! Dans mon cas, je sais donc que l'interface LAN à une adresse MAC qui se finit par :d9:f4 ; et que l'interface WAN se termine par :6a:69.    

C'est marqué juste au dessus laquelle correspond à quoi.

Vous pouvez donc entrer l'interface qui correspond au coté WAN (dans mon cas, "em0"):

![pfsense12](/images/pfsense/pfsense12.png)

Faites de même avec l'interface LAN:

![pfsense13](/images/pfsense/pfsense13.png)

Appuyer sur "y" pour confirmer les changements:

![pfsense14](/images/pfsense/pfsense14.png)

Personnellement, je vais changer l'adresse IP de mon interface LAN, je vais don choisir l'option 2:

![pfsense15](/images/pfsense/pfsense15.png)

Je vais lui donner l'addresse IP 192.168.100.254, avec un masque en /24. (Je spécifie aussi que je ne veux pas utiliser le DHCP.)    
Si on vous propose d'utiliser le protocole HTTP poour le WebConfigurator, appuyez sur "y". 

![pfsense16](/images/pfsense/pfsense16.png)


On passera ensuite à la configuration de PC1! La suite du tutoriel [ici](/fr/notes/proxy3).
