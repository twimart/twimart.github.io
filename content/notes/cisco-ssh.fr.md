---
title: "Etablir une connexion SSH sur un appareil Cisco"
date: 2022-11-29T10:04:21+01:00
FRtags: ["cisco", "SSH"]
---

## Création de noms d'utilisateurs, de domaines, et de clés ##

(Nous prenons ici l'exemple d'un router Cisco.)

Tout d'abord, si ça n'est pas déja fait, donner un nom personnalisé ainsi qu'un nom de domaine DNS à votre appareil:

```
Router(config)# hostname Toto
Toto(config)# ip domain-name exemple.com

```
*(si vous voulez faire votre propre serveur DNS Linux, j'ai fait un tuto [ici](/fr/notes/linux-dns/) )*    

Pensez à sécuriser le mode privilégié de votre appareil ! 

```
Toto(config)# enable secret <mot_de_passe>
```
Ensuite, nous devons dire à notre routeur (ou switch) de générer une paire de clés asymétrique (nécessaire à la connexion SSH).
Il faut aussi chiffrer ces clés, on va pour cela utiliser le protocole RSA:

```
Toto(config)# crypto key generate rsa
```
On va ensuite nous demander la taille voulu de la clé. Personnellement je met `1024` bits.

```
The name for the keys will be: Toto.exemple.com
Choose the size of the key modulus in the range of 360 to 2048 for your
General Purpose Keys. Choosing a key modulus greater than 512 may take a few minutes.

How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable. . . [OK]

Toto(config)# 

```
On va maintenant créer un utilisateur, c'est avec ses logins que l'on pourra se connecter au routeur (ou switch) à distance. 
Ici, j'ai mis `thomas` pour le username et `admin` pour le mot de passe, **mais vous mettrez évidemment les valeurs que vous voulez.**

```
Toto(config)# username thomas password admin

```
## Activation du protocole SSH ##

On peut maintenant activer le protocole SSH sur notre routeur (ou switch): 

```
Toto(config)# ip ssh version 2
```
### Petite parenthèse sur les commandes qui vont suivre: ###

Pour se connecter sur appareil à distance, il y a deux protocoles principaux: `Telnet` et `SSH`. Telnet est un protocole simple qui fonctionne bien, mais qui n'est pas du tout sécurisé et crypté: c'est à dire que n'importe qui peut intercepter les trames de communication entre vous et l'appareil.    

SSH est quand lui crypté (grâce aux clés que nous avons généré plus tôt). La norme veut donc que l'on force notre switch à ne communiquer qu'en SSH, et que la connexion en Telnet soit impossible (pour plus de sécurité).

C'est ce que l'on va faire maintenant.

On va d'abord forcer notre switch à n'accepter que la communication entrante en SSH: 
```
Toto(config)# line vty 0 4
Toto(config)# login local
Toto(config-line)# transport input ssh

```
Puis on fait de même pour la communication sortante: 
```
Toto(config-line)# transport output ssh
```

Maintenant, on peut vérifier les changement de configuration:

```
Toto# show running-config

```

N'oubliez pas de sauvegarder la nouvelle configuration ! 

```
Toto# copy running-config startup-config 

```

## Test de connexion (avec PuTTy) ##

PuTTy est un logiciel gratuit qui permet de se connecter à un appareil de plein de manières différentes: câble série, Telnet, SSH...    
Vous pouvez donc sélectionner SSH, puis rentrer l'addresse IP de votre appareil Cisco (la mienne était 192.168.100.33):
![putty](/images/putty.PNG)

On va alors vous demander un username. Vous pouvez mettre celui que vous avez créé précédemment (dans mon cas `thomas`).
Ensuite vous pouvez rentrer le mot de passe correspondant à cet utilisateur (pour moi c'est donc `admin`).    
   
Et vous êtes enfin connecté !    

![ssh](/images/ssh.PNG)

Un mot de passe vous sera demandé si vous voulez rentrer en mode privilégié. C'est celui que vous avez mis lors de la commande `enable secret <mot_de_passe>` 

C'est tout pour la connexion SSH sur Cisco 😁!  


