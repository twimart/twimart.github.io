---
title: "Create a virtual machine with Vmware"
date: 2022-12-01T13:57:01+01:00
tags: ["vmware", "vm"]
---

I specify that I'm using *Vmware Worksation 16 Pro*. The installation of a Virtual Machine (VM) is running the same way if you use the *Player* version.

## Download an iso image ##

Go to the download page of the desired OS. In this exemple, we gonna choose a very known Linux distribution, [Ubuntu](https://ubuntu.com/download/desktop).

## Create the virtual machine ##

On Vmware, select "Create a new virtual machine":

![vmware1](/images/vmware/vmware1.png)

A virtual machine creation wizard appears.
Select "Typical", then "Next":

![vmware2](/images/vmware/vmware2.png)  

Choose the option "Install disc image file (iso), then select the .iso file you just downloaded, then "Next".

![vmware3](/images/vmware/vmware3.png)  

⚠️ **Caution! The following window may not appear when creating your VM. Don't panic! This is a feature that is only supported by some OS but it doesn't change the installation at all**.

Linux Ubuntu supports "Easy Install". Thanks to this, we can enter the login and password information when creating the VM.

![vmware4](/images/vmware/vmware4.png)  

Vous pouvez ensuite changer le nom de votre machine.

You can then change the name of your machine.

![vmware5](/images/vmware/vmware5.png)

Personnaly, for the storage options, I leave the default settings:

![vmware6](/images/vmware/vmware6.png)

On this window, you have the possibility to modify the resources allocated to this VM. Here I leave it as default. You can press "Finish" to start the machine.

![vmware7](/images/vmware/vmware7.png)

And we finally arrive at our virtual machine! 🤩

![vmware8](/images/vmware/vmware8.png)
