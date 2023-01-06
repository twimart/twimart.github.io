---
title: "Create a NTP server with Chrony and synchronize its equipements"
date: 2023-01-06T09:24:04+01:00
FRtags: ["chrony", "linux", "cisco"] 
---

⚠**I'm using a Debian machine for my Chrony server**

## Things to do on your server (Linux or Windows) 

Firstly, install Chrony: 

```
sudo -s
apt install chrony
```

We can then check the content of the "chrony.conf" file:

```
nano /etc/chrony/chrony.conf
```

Then we have to declare our NTP pool. We will go to line 3 of the file to make some changes:

`pool 2.debian.pool.ntp.org iburst`

become:

`#pool 2.debian.pool.ntp.org iburst`

and now we can add our pools by entering the following lines instead:

```
server 0.fr.pool.ntp.org
server 1.fr.pool.ntp.org
server 2.fr.pool.ntp.org
server 3.fr.pool.ntp.org
```

Once this is done we can go a little further down to check the existence (or not) of the following lines:

```
# This directive specify the file into which chronyd will store the rate
# information.
driftfile /var/lib/chrony/chrony.drift
local stratum 8
manual
allow 
```

If these lines are not present, they must be modified as above.

The `local stratum 8` declares the "layer" of our NTP server. To finish this installation we have to start the server.

```
systemctl start chrony
```

we check that the service has started correctly:

```
systemctl status chrony
```

And finally the command that is used to activate the service every time the machine is turned on:

```
systemctl enable chrony
```

## Things to do on your equipment (in this case it's a cisco switch)

***Article from IT-Connect.fr, by Florian Burnel***

For the moment, the router is not synchronized via the NTP server, we can consult the current time thanks to the command "show clock", we notice that the time is not good at all...

```
SwitchToto#show clock
*0:8:8.942 UTC Mon Mar 1 1993
```

Let's move on to the configuration, which is very simple since all you have to do is indicate the address of the NTP server. Here is the configuration procedure:

```
Router#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Router(config)#ntp server 192.168.1.10
Router(config)#exit
```

We can check that our switch is associated with the ntp server:

```
Router#show ntp association
```

Display the date and time again, normally it should be updated:

```
Router#show clock
*11:51:11.134 UTC Fri Jan 1 2023
```

And your equipment is well synchronized! 


Thanks to Enzo Ribeiro for his help. 😊





