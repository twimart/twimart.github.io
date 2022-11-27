---
title: "Create and configure a DNS server on Linux with Bind9"
date: 2022-11-17T14:01:35+01:00
---

-Install Bind9:

`sudo apt-get install bind9`

-First, we put these 3 lines in the named.conf file:

```
include "/etc/bind/named.conf.options";
include "/etc/bind/named.conf.local";
include "/etc/bind/named.conf.default-zones";
```
-In the bind9 configuration file "named.conf.local", declare its zones :

```
zone "example.com" {
        type master;
        file "/etc/bind/db.example.com";
};
```
→ The "file" line specifies that the configuration of our example.com zone will be done in the "db.example.com" file.

In db.example.com, we configure our zone (the IP of my DNS server is 192.168.1.15 ):

```
;
; BIND data file for example.com
;
$TTL    604800
@       IN      SOA     example.com. root.example.com. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
        IN      A       192.168.1.15
;
@       IN      NS      ns.example.com.
ns      IN      A       192.168.1.15
serv1   IN      A       192.168.1.1
serv2   IN      A       192.168.1.2
```

The first paragraph corresponds to the SOA record, we can leave it as it is.

In the second paragraph, we are going to give information to our DNS server, that means, we are going to enter manually the names of machines and their IP useful to my DNS server.  

⚠ It is strongly recommended to make the NS record, it is the standard.

First, I gave my DNS server the IPs of the other DNS servers in the example.com domain (this is the NS record). Although there is only one (my DNS server), I put it anyway.   

Then I declared 2 web servers, serv1 and serv2.

***I remind you that you will have to adapt this configuration according to your needs, this is only an example.***

If our DNS server is not able to resolve a certain domain name, it must send these requests to other DNS servers that can do it. These servers are called "forwarders". We must indicate them in the file "named.conf.options". 


```
forwarders {
        8.8.8.8;
        172.25.254.15 ;
    };
```
You should now have a working DNS server! 😁