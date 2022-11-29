---
title: "Etablir une connexion SSH sur un appareil Cisco"
date: 2022-11-29T10:04:21+01:00
FRtags: ["cisco", "SSH"]
---

#### Activer une connexion SSH sur un appareil Cisco ####

```
Router(config)# ip domain-name exemplesecurity.com

Router(config)# username SSHadmin privilege 15 secret topsecret

Router(config)# line vty 0 4

Router(config-line)# login local

Router(config-line)# transport input ssh    

Router(config)# crypto key zeroize rsa

Router(config)# crypto key generate rsa

% Please define a hostname other than Router.

Router(config)# hostname RouterExemple

RouterExemple(config)# crypto key generate rsa [Enter]

The name for the keys will be: RouterExemple.exemple.org

Choose the size of the key modulus in the range of 360 to 2048 for your

General Purpose Keys. Choosing a key modulus greater than 512 may take
a few minutes.

How many bits in the modulus [512]:1024

% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]

RouterExemple(config)# ip ssh time-out 90

RouterExemple(config)# ip ssh authentication-retries 2

RouterExemple(config)# ip ssh version 2
```