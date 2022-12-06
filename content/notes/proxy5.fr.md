---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 5)"
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


## Installation de SQUID ##

Nous arrivons maintenant à la dernière ligne droite de ce tutoriel! On va devoir installer "Squid", un paquet pour Pfsense qui permet de faire de notre machine virtuelle un veritable serveur proxy.

Dans les menus de Pfsense, allez dans "System", "Package Manager", et cliuez sur l'onglet " Available Packages".    
Recherchez "squid":

![squid1](/images/squid/squid1.png)

Puis installer le paquet qui s'appelle "squid" (Dans mon cas, c'est le deuxième de la liste.)    
⚠️*L'installation peut prendre quelques minutes! Soyez patient et ne rafaichissez pas la page!* 

Une fois le paquet installé, rendez-vous dans "Services", puis "Squid Proxy Server". 

La suite arrive bientôt! 😉