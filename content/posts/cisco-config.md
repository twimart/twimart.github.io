---
title: "Basic configuration for a Cisco device"
date: 2022-11-29T10:25:59+01:00
tags: ["cisco", "configuration"]
ShowToc: true

---

## Basic Configuration ##

Switch to privileged mode, then terminal configuration:

```
Switch>en
    
Switch#conf t

```
Définir le nom du switch,  ainsi que le domaine auquel il appartient (optionnel).

```
Switch(config)#

Switch(config)# hostname SwitchToto

SwitchToto(config)# ip domain-name exempledomaine.local

SwitchToto(config)# end

```
Define the IP addressing of the switch. To do this, we must create a VLAN dedicated to the switch configuration (here vlan 10).
The IP we are going to define will be associated to this VLAN.
Create the VLAN: 

```
SwitchToto(config)# vlan 10
SwitchToto(config-vlan)# exit

```
Then define the IP configuration:
- IP address: 192.168.10.1
- Subnet mask: 255.255.255.0
- Default gateway: 192.168.10.254

```
SwitchToto(config)# interface vlan 10 
SwitchToto(config-if)# ip address 192.168.10.1 255.255.255.0
SwitchToto(config-if)# ex
SwitchToto(config)# ip default-gateway 192.168.10.254

```
To check the configuration of our administration vlan:

```
SwitchToto# sh run int vlan 10

```
To delete the IP address, the subnet mask, and the defaut gateway:

```
SwitchToto(config)# interface vlan 10
SwitchToto(config-if)# no ip address
SwitchToto(config-if)# ex
SwitchToto(config)# no ip default-gateway

```
Now we need to secure our switch.    
***Even if this step is optional, I strongly recommend it.***    

We will first hide the future passwords that we will put on this switch, so that they will not be displayed on the screen even during a `show running config`. So we will add the **password-encryption** service.

```
Switch(config)# service password-encryption

```

Then we can define the password that will be requested when we need to access to the privileged mode:

```
SwitchToto(config)# enable secret P@55w0rd

```

Now, if I want to access to the privileged mode, I will have to enter the "P@55w0rd" password (which is a very bad password
btw).

## Save the configuration ##

### Explanation ###
The Cisco switch has 2 configurations: the "running-config" and the "startup-config". When the switch starts, it uses its "startup-config". If configuration changes are created, they will be done in the running-config. The switch will then use its "running-config".    
On the other hand, if the changes made turn out to be a failure, you just need to reboot it. Thus, the switch will use its "startup-config", which has not changed.    
When changes made are validated, the running-config can be copied to the startup-config. The changes will then be taken into account in the default startup-config of the switch. 

### Commands ###

```
SwitchToto# copy running-config starting-config

Destination filename [startup-config]?

Building configuration...

[OK]
0 bytes copied in 0.923 secs (0 bytes/sec)

SwitchToto# write

Building configuration...

[OK]

SwitchToto#

```
You should now have a configurated and secure switch ! 😊