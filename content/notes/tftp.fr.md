---
title: "Créer un serveur TFTP et sauvegarder et restaurer les configuration des équipements"
date: 2023-01-06T11:24:04+01:00
FRtags: ["tftp", "linux", "cisco"] 
---

⚠ **J'utilise une machine Debian pour mon serveur TFTP, les commandes présentés ne sont donc valide que pour Linux.**

## A faire sur votre serveur 

Sur une machine Debian 10, installer un serveur TFTP:

```
sudo -s
apt install xinetd tftpd tftp
```

Une fois le service installé, il faut créer le fichier de configuration :

```
nano /etc/xinetd.d/tftp
```

et ajouter les lignes suivantes dans le fichier :

```
service tftp
{
protocol    	= udp
port        	= 69
socket_type 	= dgram
wait        	= yes
user        	= nobody
server      	= /usr/sbin/in.tftpd
server_args 	= /tftpboot
disable     	= no
}
```

Maintenant, il faut créer un répertoire du nom de /tftpboot à la racine et on pensera à lui donner des droits :

```
sudo mkdir /tftpboot
sudo chmod -R 777 /tftpboot
sudo chown -R nobody /tftpboot
```

Ensuite il faut redémarrer le service :

```
sudo /etc/init.d/xinetd restart
```

Techniquement, votre serveur est prêt! Mais on va aller plus loin dans ce tuto: en effet le but est ici de faire un serveur capable de sauvegarder la configuration d'appareil (comme des switch ou des routeurs).

On va donc créer un fichier qui contiendra la configuration de notre appareil (ici, ce sera "SwitchToto"):

```
touch /tftpboot/SwitchToto
```

On pense à lui donner des droits:

```
chmod 777 /tftpboot/SwitchToto
```

## A faire sur votre équipement

```
SwitchToto> en
SwitchToto> copy running-config tftp
```
Cette commande vous posera 2 question:

```
1- L'adresse IP du serveur TFTP
2- La destination du fichier de configuration, soit /tftpboot/SwitchToto
```

Et un fichier de configuration ira se stocker sur votre serveur TFTP! 

Merci à **[Enzo Ribeiro](https://enzo-ribeiro.github.io/portfolio)** pour son aide! 

