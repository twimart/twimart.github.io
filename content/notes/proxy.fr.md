---
title: "Créer un serveur proxy avec Pfsense et Squid"
date: 2022-12-01T09:04:41+01:00
FRtags: ["pfsense", "proxy"] 
---
Dans cette note, nous allons voir comment installer un serveur proxy, en utilisant Pfsense et Squid. On utilisera des machines virtuelles, créées sous le logiciel *Vmware*. 

## Topologie de notre réseau ## 

Voila la topologie du réseau que nous allons utiliser dans ce tuto: 

![reseau](/images/reseau.png)

Pour accéder à Internet, le PC "Linux" passera par le routeur "Pfsense", afin de sortir du réseau local "LAN". Ici la subtilité est que si "Linux" veut accéder à certaines page web, ces requêtes passeront d'abord par notre serveur proxy "Squid".    
"Squid" pourra alors bloquer certaines pages web ou encore enregistrer certaine données dans sont cache afin d'améliorer les performances.    

*Je précise que ce shéma ne sert que d'illustration, Pfsense et Squid ne forment en réalité qu'une seule machine dans notre cas.*

## Création de la machine virtuelle ##

Sur la page de téléchargement de [Pfsense](https://www.pfsense.org/download/), télécharger l'iso de notre future machine virtuelle. Je précise que vous allez obtenir fichier .gz, vous devez extraire ce fichier sur votre ordinateur.

Ensuite, sur Vmware, vous pouvez créer votre machine virtuelle. (vous pouvez mon suivre mon tutoriel [ici](/fr/notes/vmware).)



## Installation de Pfsense ##

Vous pouvez alors démarrer votre machine virtuelle. 

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



