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

1. Allez dans les paramètres de la VM:

![freebsd1](/images/freebsd/freebsd1.png)

2. Appuyez sur "Add":

![freebsd2](/images/freebsd/freebsd2.png)

3. Sélectionnez "Network Adaptater", puis "Finish":

![freebsd3](/images/freebsd/freebsd3.png)

4. On va maintenant paramétrer nos deux interfaces. Appuyez sur la première, puis sur "Advanced"

![freebsd4](/images/freebsd/freebsd4.png)

5. Appuyer sur "Generate", et  **notez bien** les deux derniers octets de l'addresse MAC qui vient d'être générée. C'est normal de ne pas avoir la même valeur que moi 😉 . Puis "OK".

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

⚠️Pensez aussi à configurer la machine "PC1". Pour cela, choisissez le "Network Adaptater" de votre VM, puis là encore sélectionnez "LAN segment", en choisissant le segement LAN que vous mis pour la première interface du routeur Pfsense.

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

Vous redémarrerez la machine virtuelle quand l'installateur vous le proposera.

Au redémarrage, on vous demandera si les VLANS doivent être configurés. Appuyez sur "n" puis "Enter"

![pfsense7](/images/pfsense/pfsense7.png)

Ensuite, vous devez dire à Pfsense quelles interfaces correspondent au WAN et au LAN. Ne vous inquiètez pas si vous ne savez pas, on pourra changer cela plus tard! 
Dans mon cas, j'ai mis:
- "em1" pour le WAN
- "em0" pour le LAN

![pfsense8](/images/pfsense/pfsense8.png)

Puis confirmer en appuyant sur "y": 

![pfsense9](/images/pfsense/pfsense9.png)

Et nous avons enfin fini l'installation de Pfsense! Vous devrez maintenant arriver sur le menu de configuration principal.

![pfsense10](/images/pfsense/pfsense10.png)


La suite arrive bientôt ! 😉



