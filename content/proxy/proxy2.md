---
title: "Create a proxy server with Pfsense and Squid(Part 2)"
date: 2022-12-06T10:55:47+01:00
ShowBreadCrumbs: false
searchHidden: true
---

The different parts of this tutorial:

- [Part-1](/posts/proxy)
- [Part-2](/proxy/proxy2)
- [Part-3](/proxy/proxy3)
- [Part-4](/proxy/proxy4)
- [Part-5](/proxy/proxy5)


## Pfsense installation ##


![pfsense1](/images/pfsense/pfsense1.png)

Click on "Accept".

![pfsense2](/images/pfsense/pfsense2.png)

Select "Install", then "OK"    

The wizard will then ask you to select the layout of your keyboard (I have a French keyboard). Select the layout that suits you, then press "Select".

![pfsense3](/images/pfsense/pfsense3.png)

Confirm your choice.

![pfsense4](/images/pfsense/pfsense4.png)

We are then asked how to partition our disk. Choose "Auto (UFS) BIOS", then "OK".

![pfsense5](/images/pfsense/pfsense5.png)

Pfsense will then start its installation:

![pfsense6](/images/pfsense/pfsense6.png)

If the wizard asks you to open a Shell, answer "no."    

You will restart the virtual machine when the wizard suggests it.

## Pfsense startup configuration ## 

On reboot, you will be asked if the VLANS should be configured. Press "n" then "Enter".

![pfsense7](/images/pfsense/pfsense7.png)

Then you have to tell Pfsense which interfaces correspond to the WAN and the LAN. For the moment, we don't know what "em0" and "em1" correspond to, so let's put them randomly (we can change this later).

![pfsense8](/images/pfsense/pfsense8.png)

Then confirm by pressing "y":

![pfsense9](/images/pfsense/pfsense9.png)

And we have finally finished the installation of Pfsense! Now you should arrive on the main configuration menu.

![pfsense10](/images/pfsense/pfsense10.png)

Don't panic if you don't have IP addresses for "em1" or "em0" (like me), we'll fix that right away! 

Press the "1" key on the keyboard to assign the interfaces correctly.


![pfsense11](/images/pfsense/pfsense11.png)

We then notice that next to "em0" and "em1", there are MAC addresses...

The wizard (re)asks us if we want to configure the VLANS. Press "n".    

Then we are asked which interface corresponds to the WAN. But how do we know? "em0"? "em1"? A little explanation is necessary.

When we configured the interfaces of the Pfsense VM, we put one in "LAN segment" and another in "Bridged". The "LAN segment" one corresponds to the LAN side of Pfsense, while the "Bridged" one corresponds to the WAN side.    

But how do you know which one corresponds to "em0" or "em1"? With the MAC addresses you normally wrote down earlier! In my case, I know that the LAN interface has a MAC address that ends with :d9:f4; and that the WAN interface's MAC address ends with :6a:69.    

It says right above which one corresponds to what.

So you can enter the interface that corresponds to the WAN side (in my case, "em0"):

![pfsense12](/images/pfsense/pfsense12.png)

Do the same for the LAN interface:

![pfsense13](/images/pfsense/pfsense13.png)

Press "y" to confirm the changes:

![pfsense14](/images/pfsense/pfsense14.png)

Personally, I will change the IP address of my LAN interface, so I will choose option 2:

![pfsense15](/images/pfsense/pfsense15.png)

I will give it the IP address 192.168.100.254, with a mask of /24. (I also specify that I don't want to use DHCP).

If you are offered to use HTTP for the WebConfigurator, press "y". 

![pfsense16](/images/pfsense/pfsense16.png)


We will then proceed to the configuration of PC1!   
   
***The next part of the tutorial is  ➡️ [here](/proxy/proxy3) ⬅️.***
