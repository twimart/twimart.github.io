---
title: "Créer un serveur Chrony et synchroniser ses équipements "
date: 2023-01-06T09:24:04+01:00
FRtags: ["chrony", "linux", "cisco"] 
---

⚠**J'utilise une machine Debian pour mon serveur Chrony**

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