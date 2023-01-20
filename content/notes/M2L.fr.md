---
title: "Projet de configuration d'un réseau"
date: 2023-01-12T14:01:35+01:00
FRtags: ["configuration", "cisco"]
---

## Intro ##

Dans ce TP, nous allons réalisier la configuration du réseau de la "Maison des Ligues", un bâtiment qui accueil les différentes ligues sportives de la région Lorraine.

![shema_reseau](/images/M2L/shema_reseau.png)

## Les différentes missions ##

On va devoir configurer ce réseau, et pour cela plusieurs missions sont nécessaires :

- Il va falloir segmenter le réseau, réfléchir au nombre de VLAN qu’il faut attribuer, aux IP…

- On va ensuite devoir donner un configuration basique au équipements, de manière à ce qu’il s puissent se « ping » entre eux.

- On va devoir mettre en place un serveur NTP, afin de synchroniser l’heure des équipements.

- Mettre en place une solution de sauvegarde des configurations des équipements via TFTP sera fortement recommandé.

- On devra aussi mettre en place un serveur Syslog, pour enregistrer les logs des équipements.

    -La création d’ACL sera aussi une étape clé de ce projet, afin que note réseau puisse avoir un accès Internet. On pensera a adapter les ACL pour la DMZ.

la suite des missions arrive plus tard! 😊

### 1ere mission : segmentation du réseau ###

On va ici définir la segmentation de notre réseau, c’est à dire qu’on va définir le nombre de VLAN, ainsi que leur plage d’adresse.

- On va tout d’abord créer 80 VLAN, chacun de 32 adresses, qui seront adaptable en fonction du nombre de ligues présente dans le bâtiment grâce a VLSM.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Ligues"         |            80 VLANs de 32 adresses        | 172.16.0.1/27 - 172.16.9.254/27    |

- On va ensuite faire un VLAN pour le Wifi public. On va prévoir un grand nombre d’adresses au cas ou, avec 4 096 adresses disponible dans ce VLAN.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Wifi Publique"  |            1 VLAN de 4096 adresses        | 172.16.16.1/20 – 172.16.31.254/20  |

- On va créer un VLAN « Administration », de 27 adresses. Il sera réservé pour la salle d’administration.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Administration" |             1 VLAN de 27 adresses         | 172.16.10.1/27 – 172.16.10.30/27   |

- Il y a une salle de reprographie dans le bâtiment. On va créer un VLAN de 32 adresses pour cette pièce.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Reprographie"   |             1 VLAN de 32 adresses         | 172.16.10.33/27 – 172.16.10.62/27  |

- Pour la salle Multimédia, on va aussi faire un VLAN de 32 adresses.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Multimédia"     |             1 VLAN de 32 adresses         | 172.16.10.65/27 – 172.16.10.94/27  |

- Pour l’Amphithéâtre, la salle de réunion, et la salle de convivialité, un VLAN filaire public sera nécessaire. 32 adresses seront suffisantes pour ce VLAN.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Filaire Public" |             1 VLAN de 32 adresses         | 172.16.10.97/27 - 172.16.10.126/27 |

- Il y a des ecrans qui affichent des informations dans les couloirs. On va donc leurs créer un VLAN spécifique, 32 addresses seront largement suffisantes.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Ecrans"         |             1 VLAN de 32 adresses         | 172.16.10.129/27 - 172.16.10.12/27 |

- On va aussi evdemment créer un VLAN spécifique pour la serveurs de la DMZ, de 32 addresses.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "DMZ"            |             1 VLAN de 32 adresses         | 10.54.0.1/16 - 10.54.0.31/16       |

- Et enfin un dernier VLAN "Management", qui nous permettra d'administrer les divers équipements d'inter-connexion. 32 addresses devrait suffire.

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Management"     |             1 VLAN de 32 adresses         | 172.16.10.193/27 172.16.10.222/27  |

Et voila pour la segmentation de notre réseau!

**Voila un tableau de tout les VLANs pour résumer:**

|       Nom du VLAN     | Nombres de VLAN et d'adresses disponnible |           Plage d'adresses         |
| :---------------------|:-----------------------------------------:| ----------------------------------:|
| VLAN "Ligues"         |            80 VLANs de 32 adresses        | 172.16.0.1/27 - 172.16.9.254/27    |
| VLAN "Wifi Publique"  |            1 VLAN de 4096 adresses        | 172.16.16.1/20 – 172.16.31.254/20  |
| VLAN "Administration" |             1 VLAN de 27 adresses         | 172.16.10.1/27 – 172.16.10.30/27   |
| VLAN "Reprographie"   |             1 VLAN de 32 adresses         | 172.16.10.33/27 – 172.16.10.62/27  |
| VLAN "Multimédia"     |             1 VLAN de 32 adresses         | 172.16.10.65/27 – 172.16.10.94/27  |
| VLAN "Filaire Public" |             1 VLAN de 32 adresses         | 172.16.10.97/27 - 172.16.10.126/27 |
| VLAN "Ecrans"         |             1 VLAN de 32 adresses         | 172.16.10.129/27 - 172.16.10.12/27 |
| VLAN "DMZ"            |             1 VLAN de 32 adresses         | 10.54.0.1/16 - 10.54.0.31/16       |
| VLAN "Management"     |             1 VLAN de 32 adresses         | 172.16.10.193/27 172.16.10.222/27  |

### 2ième mission : Configuration des équipements et serveur NTP ###

Nous allons maintenant configurer les équipements d'interconnexion, c'est-à-dire les switch et les routeurs. Il nous faudra aussi créer un serveur NTP et synchronyser nos divers équipements.

- On commence par donner un nom explicite à nos machines.

Voir comment faire [ici.](https://thomasgarden.netlify.app/fiches/cisco/ios/donner-un-nom-a-un-equipement-cisco/)

- On devra créer une bannière de connexion pour les équipements.

Voir comment faire [ici.](https://thomasgarden.netlify.app/fiches/cisco/ios/configurer-un-banniere-sur-ios/)

- Puis on s'occupera de créer un serveur NTP et de définir les machines d'interconnexion comme clientes de ce serveur.

Voir comment faire [ici.](/fr/notes/ntp)


