---
title: "Créer un serveur proxy avec Pfsense et Squid"
date: 2022-12-01T09:04:41+01:00
FRtags: ["pfsense", "proxy"] 
---
Dans cette note, nous allons voir comment installer un serveur proxy, en utilisant Pfsense et Squid. On utilisera des machines virtuelles, créées sous le logiciel *Vmware Workstation 16 Pro*. 

## Topologie de notre réseau ## 

Voila la topologie du réseau que nous allons utiliser dans ce tuto: 

![reseau](/images/reseau.png)

Pour accéder à Internet, le PC "Linux" passera par le routeur "Pfsense", afin de sortir du réseau local "LAN". Ici la subtilité est que si "Linux" veut accéder à certaines page web, ces requêtes passeront d'abord par notre serveur proxy "Squid".    
"Squid" pourra alors bloquer certaines pages web ou encore enregistrer certaine données dans sont cache afin d'améliorer les performances.    

*Je précise que ce shéma ne sert que d'illustration, Pfsense et Squid ne forment en réalité qu'une seule machine dans notre cas.*

## Création des machines virtuelles ##

Sur la page de téléchargement de [Pfsense](https://www.pfsense.org/download/), télécharger l'iso de notre futur routeur virtuel. Je précise que vous allez obtenir fichier .gz, vous devez extraire ce fichier sur votre ordinateur.

Téléchargez aussi l'iso d'une VM, pour PC1. Personnellement, je vais utiliser une distribution Linux Ubuntu, qui fera amplement l'affaire, mais vous êtes libre d'utiliser n'importe quel OS que vous maitrisez. 

Ensuite, sur Vmware, vous pouvez créer les machines virtuelles (vous pouvez mon suivre mon tutoriel [ici](/fr/notes/vmware).)

## Paramétrage des machines virtuelles ##

Une fois les machines créées, on va devoir modifier leurs paramètres. En effet, notre routeur Pfsense possède 2 interfaces: une LAN et une WAN. On va donc devoir lui en ajouter une, et les paramétrer corectement.

⚠️ ***Il faut que votre ordinateur soit connecté à Internet.***

1. Allez dans les paramètres de la VM:

![freebsd1](/images/freebsd/freebsd1.png)

2. Appuyez sur "Add":

![freebsd2](/images/freebsd/freebsd2.png)

3. Sélectionnez "Network Adaptater", puis "Finish":

![freebsd3](/images/freebsd/freebsd3.png)

4. On va maintenant paramétrer nos deux interfaces. Appuyez sur la première, puis sur "Advanced"

![freebsd4](/images/freebsd/freebsd4.png)

5. Appuyer sur "Generate", et  ***notez bien*** (si, si, j'insiste) les deux derniers octets de l'addresse MAC qui vient d'être générée. C'est normal de ne pas avoir la même valeur que moi 😉 . Puis "OK".

![freebsd5](/images/freebsd/freebsd5.png)

6. Ensuite, appuyez sur le bouton "Lan Segments":

![freebsd6](/images/freebsd/freebsd6.png)

7. On va créer un nouveau segment LAN. Cliquez sur "Add", donner lui le nom que vous voulez, puis "OK".

![freebsd7](/images/freebsd/freebsd7.png)

8. Enfin, toujours sur la première interface, dans la section "Network Connection", sélectionnez LAN segment, puis choisissez le segment LAN que vous venez de créer. 
 
![freebsd8](/images/freebsd/freebsd8.png)

Nous venons ici de preciser que la première interface fera partie du LAN.

Pour la deuxième interface de notre routeur Pfsense, répétez la 4ième et 5ième étape de configuration de la première interface. Puis sélelectionnez "Bridged", et "OK" (en bas à droite).

![freebsd9](/images/freebsd/freebsd9.png)

Notre machine virtuelle Pfsense est maintenant prête à démarrer! 

⚠️Pensez aussi à configurer la machine "PC1". Pour cela, choisissez le "Network Adaptater" de votre VM, puis là encore sélectionnez "LAN segment", en choisissant le segement LAN que vous mis pour la première interface du routeur Pfsense:

![freebsd8](/images/freebsd/freebsd8.png)

Vous pouvez alors démarrer votre machine Pfsense. 


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

![pfsense16](/images/pfsense/pfsense16.png)

## Configuration de PC1 ##

On va maintenant se concentrer sur PC1. Rassurez-vous, c'est plus simple! 

⚠️***Comme dit plus tôt, je vais travailler ici avec une machine Linux Ubuntu, donc les commandes et les manipulations qui vont suivre ne sont que valides pour cet OS.***

Sur votre machine, lancer un terminal, puis faites la commande `nmtui`

![pc1](/images/pc/pc1.png)

Sélectionnez "Edit Connection", puis "Wired Connexion 1". Vous devriez arriver sur un écran similaire au mien. Modifier les paramètre comme l'image ci-dessous, puis "OK" (Pour Gateway, il faut mettre l'IP de l'interface LAN de Pfsense).

![pc2](/images/pc/pc2.png)

Pour être certain que les changements ont été pris en compte, désactivez et réactivez l'interface (toujours avec `nmtui`).

Si tout ce passe bien, vous devriez pouvoir ping la machine Pfsense ! ➡️ `ping <ip_pfsense>`

![pc3](/images/pc/pc3.png)

Lancer votre navigateur, puis inscivez-y l'IP de la VM Pfsense. On arrive sur la page de connexion. Mettez `admin` pour le nom d'utilisateur, et `pfsense` pour le mot de passe.

![pc4](/images/pc/pc4.png)

## Configuration détaillé de Pfsense ##

Une fois connecté, vous allez faire face à un assistant. Cliquez sur "Next" jusqu'a tomber sur la fenêtre ci-dessous:

![cpfsence1](/images/cpfsense/cpfsense1.png)

Inscivez la même configuration que moi.

Sélectionnez votre fuseau horaire, puis "Next":

![cpfsence2](/images/cpfsense/cpfsense2.png)

Laissez les paramètre par défaut, puis "Next":

![cpfsence3](/images/cpfsense/cpfsense3.png)

Idem pour cette fenêtre: 

![cpfsence4](/images/cpfsense/cpfsense4.png)

Inscrivez le nouveau mot de passe pour accèder Pfsense depuis le Web ou  en SSH: 

![cpfsence5](/images/cpfsense/cpfsense5.png)

Enfin, appuyer sur le bouton "Reload", et "Finish".

Nous nous retrouvons donc sur la page principale de "monitoring" de Pfsense.

![cpfsence6](/images/cpfsense/cpfsense6.png)

Naviguer dans le menus "Firewall", puis "Rules", et sélectionnez l'interface WAN. Puis appuyez sur le bouton "Add".

![cpfsence7](/images/cpfsense/cpfsense7.png)

On va ici créer une règle de pare-feu, afin d'avoir accès à Internet depuis PC1. En effet, pour l'instant, il est impossible d'accéder à une page web depuis PC1, car les trames Ethernet sont bloquées par notre routeur virtuel Pfsense.



