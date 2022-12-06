---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 4)"
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
(Dans mon cas, j'avais déja Internet, ce qui est assez étrange puisque le routeur bloque par défaut les paquets arrivant sur l'interface WAN... 🤔)   

Appuyer sur "Add ⬆️", puis laisser tout les paramètres par défaut, sauf la ligne "Protocol", ou vous mettrez "Any".

![cpfsence8](/images/cpfsense/cpfsense8.png)

Vous pouvez ensuite validez la règle, et appuyer sur le bouton "Apply changes".

Bien! Maintenant, on devrai avoir accès à Internet! 

![cpfsence9](/images/cpfsense/cpfsense9.png)

Effectivement, ça marche! On va maintenant essayer de bloquer [mon site](https://twimart.github.io), c'est à dire celui où vous êtes actuellement en train de naviguer.

La suite du tutoriel se trouve [ici](/fr/notes/proxy5).


