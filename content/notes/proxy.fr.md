---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 1)"
date: 2022-12-01T09:04:41+01:00
FRtags: ["pfsense", "proxy"] 
---

Dans cette note, nous allons voir comment installer un serveur proxy, en utilisant Pfsense et Squid. On utilisera des machines virtuelles, créées sous le logiciel *Vmware Workstation 16 Pro*.

Les différentes parties qui composent ce tutoriel:
- [Part-1](/fr/notes/proxy)
- [Part-2](/fr/notes/proxy2)
- [Part-3](/fr/notes/proxy3)
- [Part-4](/fr/notes/proxy4)
- [Part-5](/fr/notes/proxy5)


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


La suite du tutoriel se trouve [ici](/fr/notes/proxy2/).

