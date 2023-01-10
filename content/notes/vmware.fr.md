---
title: "Créer une machine virtuelle avec Vmware"
date: 2022-12-01T11:21:10+01:00
FRtags: ["vmware", "vm"]
---
Je précise que j'utilise *Vmware Worksation 16 Pro*. L'installation d'un machine virtuelle (VM) se déroule de la même manière si vous utilisez la version *Player*.

## Télécharger une image iso ##

Rendez-vous sur la page de téléchargement du système d'exploitaion désiré. Dans cet exemple, on va choisir [Linux Ubuntu](https://www.ubuntu-fr.org/download/).

## Créer la VM ##

Sur Vmware, appuyer sur "Create a new virtual machine":

![vmware1](/images/vmware/vmware1.png)

Un assistant de création de machine virtuelle apparait.
Sélectionnez "Typical", puis "Next":

![vmware2](/images/vmware/vmware2.png)

Choisissez l'option "Installer disc image file (iso), puis sélectonnez le ficher .iso que vous venez de télécharger, puis "Next".

![vmware3](/images/vmware/vmware3.png)

⚠️ **Attention! La fenêtre qui suit peut ne pas apparaître lors de la création de votre VM. Pas de panique! C'est une fonctionnalité qui n'est supporté que par quelques OS mais ça ne change en rien l'installation.**

Linux Ubuntu supporte "Easy Install". Grâce à cela, nous pouvons rentrer les information de login et de mot de passe lors de la création de la VM.

![vmware4](/images/vmware/vmware4.png)

Vous pouvez ensuite changer le nom de votre machine.

![vmware5](/images/vmware/vmware5.png)

Personnellement, pour les options de stockage, je laisse les paramètres par défault:

![vmware6](/images/vmware/vmware6.png)

Sur cette fenêtre, vous avez la possiblité de modifier les ressource alloué à cette VM. Là encrore, je laisse par défaut. Vous pouvez appuyer sur "Finish" pour démarrer la machine.

![vmware7](/images/vmware/vmware7.png)

Et nous nous retrouvons finalement sur notre machine virtuelle! 🤩

![vmware8](/images/vmware/vmware8.png)
