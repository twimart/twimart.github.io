---
title: "Create a proxy server with Pfsense and Squid"
date: 2022-12-01T10:29:45+01:00
tags: ["proxy", "pfsense"]
---

In this note, we will see how to install a proxy server, using Pfsense and Squid. We will use virtual machines, created under *Vmware*. 

## Topology of our network ##

Here is the network topology that we will use in this tutorial: 

![network](/images/reseau.png)

To access the Internet, the "Linux" PC will go through the "Pfsense" router, in order to leave the local network "LAN". Here the subtlety is that if "Linux" wants to access some web pages, these requests will first go through our proxy server "Squid".    
"Squid" will then be able to block some web pages or save some data in its cache to improve performance.    

*I specify that this schema is only an illustration, Pfsense and Squid are actually one machine.*

## Creation of the virtual machine ##

On the download page of [Pfsense](https://www.pfsense.org/download/), download the iso of our future virtual machine. I would like to specify that you will get a .gz file, you have to extract this file on your computer.    

Then, on Vmware, you can create your virtual machine. (you can follow my tutorial [here](/en/notes/tuto) ).

***make a tuto ⬆️***

## Installing Pfsense ##

You can now start your virtual machine. 

![pfsense1](/images/pfsense/pfsense1.png)

Click on "Accept".

![pfsense2](/images/pfsense/pfsense2.png)

Select "Install", then "OK".    

The wizard will then ask you to select the layout of your keyboard (I have a french keyboard). Select the layout that suits you, then press "Select".

![pfsense3](/images/pfsense/pfsense3.png)

Confirm your choice.

![pfsense4](/images/pfsense/pfsense4.png)

We are then asked how to partion our disk. Choose "Auto (UFS) BIOS", then "OK".

![pfsense5](/images/pfsense/pfsense5.png)

Pfsense will then start its installation:

![pfsense6](/images/pfsense/pfsense6.png)

You will restart the virtual machine when the wizard suggests it.    

On reboot, you will be asked if the VLANS should be configured. Press "n" then "Enter".

![pfsense7](/images/pfsense/pfsense7.png)

Then you have to tell Pfsense which interfaces correspond to the WAN and the LAN. Don't worry if you don't know, we can change that later! 
In my case, I put:
- "em1" for the WAN
- "em0" for the LAN

![pfsense8](/images/pfsense/pfsense8.png)

Confirm by pressing "y":

![pfsense9](/images/pfsense/pfsense9.png)

Et nous avons enfin fini l'installation de Pfsense! Vous devrez maintenant arriver sur le menu de configuration principal.
And we done with the Pfsense installation! You should now arrive at the main configuration menu.

![pfsense10](/images/pfsense/pfsense10.png)

the next parts is comming soon ! 😉