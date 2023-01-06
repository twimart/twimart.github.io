---
title: "Créer un serveur Chrony et synchroniser ses équipements "
date: 2023-01-06T09:24:04+01:00
FRtags: ["chrony", "linux", "cisco"] 
---

⚠**J'utilise une machine Debian pour mon serveur Chrony**

## A faire sur votre serveur (Linux ou Windows)

Tout d'abord, installer un serveur NTP:

```
sudo -s
apt install chrony
```

On peut ensuite vérifier le contenu du fichier "chrony.conf"

```
nano /etc/chrony/chrony.conf
```

Ensuite nous devons déclarer nos pool NTP. Nous allons nous rendre à la ligne 3 du fichier pour faire quelques modification :

`pool 2.debian.pool.ntp.org iburst`

devient :

`#pool 2.debian.pool.ntp.org iburst`

et maintenant nous pouvons ajouter nos pools en entrant les lignes suivantes à la place :

```
server 0.fr.pool.ntp.org
server 1.fr.pool.ntp.org
server 2.fr.pool.ntp.org
server 3.fr.pool.ntp.org
```

Une fois cela fait on va pouvoir se rendre un peut plus bas pour vérifier l'existance (ou non) des lignes suivantes:

```
# This directive specify the file into which chronyd will store the rate
# information.
driftfile /var/lib/chrony/chrony.drift
local stratum 8
manual
allow 172.25
``` 
Si ces lignes ne sont pas présentes, il faudra les modifier comme ci-dessus.

Le  `local stratum 8` déclare la "couche" de notre serveur NTP. Pour terminer cette installation il faut lancer le serveur.

```
systemctl start chrony
```

on vérifie que le service s'est lancé correctement :

```
systemctl status chrony
```

Et enfin la commande qui sert à activer le service à chaque fois que la machine est allumée :

```
systemctl enable chrony
```

## A faire sur votre équipement (iici ce sera un switch Cisco)

***Article tiré de IT-Connect.fr, par Florian Burnel***

Pour le moment, le routeur n'est pas synchronisé via le serveur NTP, on peut consulter l'heure actuelle grâce à la commande "show clock", on remarque que l'heure n'est pas bonne du tout...

```
SwitchToto#show clock
*0:8:8.942 UTC Mon Mar 1 1993
```
Passons à la configuration, très simple puisqu'il suffit d'indiquer l'adresse du server NTP. Voici la procédure de configuration :

```
Router#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Router(config)#ntp server 192.168.1.10
Router(config)#exit
```

On peut vérifier que notre switch est bien associé au serveur ntp:

```
Router#show ntp association
```

Affichez à nouveau la date et l'heure, normalement elle doit être actualisée :

```
Router#show clock
*11:51:11.134 UTC Fri Jan 1 2023
```

Et vos équipements sont bien synchronisé entre eux! 