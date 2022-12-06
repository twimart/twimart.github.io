---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 5)"
date: 2022-12-06T10:55:47+01:00
ShowBreadCrumbs: false
searchHidden: true
showTOC: true
---

Les différentes parties qui composent ce tutoriel:

- [Part-1](/fr/notes/proxy)
- [Part-2](/fr/proxy/proxy2)
- [Part-3](/fr/proxy/proxy3)
- [Part-4](/fr/proxy/proxy4)
- [Part-5](/fr/proxy/proxy5)


## Prérequis pour le filtrage ##
Avant d'installer Squid et de le configurer, on a quelques services à activer. 
Allez dans "System", puis "Cert. Manager". On va créer un certificat SSL afin de filtrer les requêtes HTTPS. Dans l'onglet "CA's", appuyer sur le bouton "Add".

La, on va remplir les informations qu'on nous demande (pour le "descriptive name", j'ai mis "tw certificate"): 

![squid4](/images/squid/squid4.png)

Notre certificat est maintenant créé! 

## Installation de SQUID ##

Nous arrivons maintenant à la dernière ligne droite de ce tutoriel! On va devoir installer "Squid", un paquet pour Pfsense qui permet de faire de notre machine virtuelle un veritable serveur proxy.

Dans les menus de Pfsense, allez dans "System", "Package Manager", et cliuez sur l'onglet " Available Packages".    
Recherchez "squid":

![squid1](/images/squid/squid1.png)

Puis installer le paquet qui s'appelle "squid" (Dans mon cas, c'est le deuxième de la liste.)    
⚠️*L'installation peut prendre quelques minutes! Soyez patient et ne rafaichissez pas la page!* 


Une fois le paquet installé, rendez-vous dans "Services", puis "Squid Proxy Server". 

⚠️***Avant toute chose, allez dans l'onglet "Local Cache". Ces options permettent de configurer le cache du proxy. Peu importe si vous modifier les options ou non, vous DEVEZ appuyer sur "Save" en bas de la page pour que le proxy puisse démarrer.***

On va alors aller dans la section "General", afin de configurer notre proxy. Modifier ces paramètres:

- Enable Squid Proxy : on coche la case pour démarrer le service.    
- Listen IP Version : On utilise IPV4, donc je peux mettre IPV4.
- Proxy interface(s) : Je veux que mon proxy agisse sur l'interface LAN, donc je choisi LAN.
- Proxy Port : on va laisser le port par défaut (3128).
- Allow Users on interface : cochez cette case pour autoriser les utilisateurs présent dans le LAN à utiliser le proxy. 
- Cochez la case "Resolve DNS IPV4 First".

![squid2](/images/squid/squid2.png)

Dans la section suivante ("Transparent Proxy Settings") cochez la case "Transparent HTTP Proxy", puis selectionnez l'interface LAN. 

![squid3](/images/squid/squid3.png)

Les options "Bypass" permettent à certainent machines du réseau LAN de passer outre le proxy.

Ensuite, on passe à la section "SSL Man In The Middle Filtering":

- Cochez la case "Enable SSL Filtering".
- Choississez "Splice all" pour le mode. 

![squid5](/images/squid/squid5.png)

- Pour l'option "CA", choississez le certificat que vous avez créé dans la section [précédente](#prérequis-pour-le-filtrage) (dans mon cas, "tw certificate").

![squid6](/images/squid/squid6.png)

Ensuite, dans la section suivante, cochez l'option "Enable Acess Login".

On passe enfin à la dernière section, vous pouvez y renseigner les infos de l'administrateur du système.
N'oubliez pas de cocher la dernière case de la section (pour plus de sécurité)!

![squid7](/images/squid/squid7.png)

On peut maintenant cliquer sur "Save".

Allez ensuite dans la section "ACLs". Dans "Blacklist", inscrivez l'addresse des sites web dont vous souhaitez bloquer l'accès. On va essayer avec Youtube: 

![squid8](/images/squid/squid8.png)

Pour finir, retrourner dans l'onglet General. Puis appuyer sur l'icone de redémarrage, afin que Squid prenne en compte les changement.

![squid9](/images/squid/squid9.png)

Vous pouvez alors essayer d'accèder à `https://youtube.com`. Vous allez obtenir un message d'erreur concernant un certficat invalide. C'est bien la preuve que la requête émise par PC1 pour accèder à Youtube passe par note proxy, et que celui-ci  l'a bloquée. 

![squid10](/images/squid/squid10.png)


⚠️*Si vous arrivez à accèder à Youtube, pas de panique! Le service Squid peut parfois mettre beaucoup de temps à démarrer. Relisez-bien vos paramètre, appuyez bien sur "Save" en bas des pages de configuration, et pensez à redemarrer le service.* 

Ce tutoriel est maintenant terminé! Je vous remercie sincèrement de l'avoir suivi jusqu'au bout! 🥰❤️


