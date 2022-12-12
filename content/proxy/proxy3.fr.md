---
title: "Créer un serveur proxy avec Pfsense et Squid (Part 3)"
date: 2022-12-06T10:55:47+01:00
ShowBreadCrumbs: false
searchHidden: true
showTOC: false
---

Les différentes parties qui composent ce tutoriel:

- [Part-1](/fr/notes/proxy)
- [Part-2](/fr/proxy/proxy2)
- [Part-3](/fr/proxy/proxy3)
- [Part-4](/fr/proxy/proxy4)
- [Part-5](/fr/proxy/proxy5)



## Configuration de PC1 ##

On va maintenant se concentrer sur PC1. Rassurez-vous, c'est plus simple! 

⚠️***Comme dit plus tôt, je vais travailler ici avec une machine Linux Ubuntu, donc les commandes et les manipulations qui vont suivre ne sont que valides pour cet OS.***

On va changer les paramètres réseau de notre machine.   
Sur votre machine, lancer un terminal, puis faites la commande `nmtui` (fonctionne uniquement sur Linux).

![pc1](/images/pc/pc1.png)

Sélectionnez "Edit Connection", puis "Wired Connexion 1". Vous devriez arriver sur un écran similaire au mien. Modifier les paramètre comme l'image ci-dessous, puis "OK" (pour la passerelle et le serveur DNS, il faut mettre l'IP de l'interface LAN de Pfsense).

![pc2](/images/pc/pc2.png)

Pour être certain que les changements ont été pris en compte, désactivez et réactivez l'interface (toujours avec `nmtui`).

Si tout ce passe bien, vous devriez pouvoir ping la machine Pfsense ! ➡️ `ping <ip_pfsense>`

![pc3](/images/pc/pc3.png)

Lancer votre navigateur, puis inscivez-y l'IP de la VM Pfsense. On arrive sur la page de connexion. Mettez `admin` pour le nom d'utilisateur, et `pfsense` pour le mot de passe.

![pc4](/images/pc/pc4.png)

C'est tout pour la configuration de PC1!    
   
***La suite du tutoriel se trouve ➡️ [ici](/fr/proxy/proxy4) ⬅️!***