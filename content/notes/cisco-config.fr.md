---
title: "Configuration de base pour un commutatueur Cisco "
date: 2022-11-17T13:39:04+01:00
FRtags: ["cisco", "configuration"] 
---

## Configuration basique ##

Passer en mode privilégié, puis configuration du terminal:

```
Switch>en
    
Switch#conf t

```
Définir le nom du switch,  ainsi que le domaine auquel il appartient (optionnel).

```
Switch(config)#

Switch(config)# hostname SwitchToto

SwitchToto(config)# ip domain-name ewempledomaine.local

SwitchToto(config)# end

```
Définir l'addressage IP du switch. Pour cela, on doit créer un VLAN dédié à la configuration du switch (ici le vlan 10).
L'IP que nous allons définir sera donc associé à ce VLAN.
Créer le VLAN: 

```
SwitchToto(config)# vlan 10
SwitchToto(config-vlan)# exit

```
Puis définir la configuration IP:
- Addresse IP: 192.168.10.1
- Masque de sous-réseau: 255.255.255.0
- Passerelle par défaut: 192.168.10.254

```
SwitchToto(config)# interface vlan 10 
SwitchToto(config-if)# ip address 192.168.10.1 255.255.255.0
SwitchToto(config-if)# ex
SwitchToto(config)# ip default-gateway 192.168.10.254

```
Pour voir la configuration de notre vlan d'administration:
```
SwitchToto# sh run int vlan 10

```
Pour supprimer l'addresse IP, son masque, ainsi que la passerelle par défaut:

```
SwitchToto(config)# interface vlan 10
SwitchToto(config-if)# no ip address
SwitchToto(config-if)# ex
SwitchToto(config)# no ip default-gateway
```
Il faut maintenant sécuriser notre Switch. ***Même si cette étape est optionnelle, je vous la recommande fortement.***
On va tout d'abord masquer les futurs mots de passe que nous allons mettre sur ce switch, de manière à ce qu'ils ne s'affichent pas à l'écran même lors d'un `show running config`. On va donc ajouter le service **password-encryption**.


```
Switch(config)# service password-encryption

```
Puis nous pouvons définir le mot de passe qui sera demandé lorsque l'on voudra accèder au mode priviligié:

```
SwitchToto(config)# enable secret P@55w0rd

```
Désormais, si je veux rentrer dans le mode privilégié, il faudra que j'inscrive le mot de passe "P@55w0rd" (qui est d'ailleur un très mauvais mot de passe).


## Sauvegarder la configuration ##

### Explication ###
Les commutateur Cisco possède 2 configurations: la "running-config" et la "startup-config". Lorsque le switch démarre, il utilise sa "startup-config". Si des changements de configuration sont crées, ils se feront dans la "running-config". Le commutateur utilisera alors sa "running-config".    
En revanche, si les changements opérés se révelent être un échec, il suffit 
de le redémarrer. Ainsi, le switch utilisera sa "startup-config", qui n'a donc pas changée.    
Lorsque l'on est sur des changements faits, on peut copier la "running-config" dans la "startup-config". Les changements seront alors pris en compte dans la config par défaut, de démarrage, du commutateur.

### Commandes ###

```
SwitchToto# copy running-config st

Destination filename [startup-config]?

Building configuration...

[OK]
0 bytes copied in 0.923 secs (0 bytes/sec)

SwitchToto# write

Building configuration...

[OK]

SwitchToto#

```