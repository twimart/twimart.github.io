---
title: "Create a TFTP server and backup and restore device configurations".
date: 2023-01-06T11:24:04+01:00
FRtags: ["tftp", "linux", "cisco"] 
---

⚠ **I am using a Debian machine for my TFTP server, so the commands presented are only valid for Linux.**

## To do on your server 

On a Debian 10 machine, install a TFTP server:

```
sudo -s
apt install xinetd tftpd tftp
```

Once the service is installed, you need to create the configuration file :

```
nano /etc/xinetd.d/tftp
```

and add the following lines to the file:

```
service tftp
{
protocol = udp
port = 69
socket_type = dgram
wait = yes
user = nobody
server = /usr/sbin/in.tftpd
server_args = /tftpboot
disable = no
}
```

Now we need to create a directory called ``/tftpboot`` in the root and we will think of giving it rights:

```
sudo mkdir /tftpboot
sudo chmod -R 777 /tftpboot
sudo chown -R nobody /tftpboot
```

Then you have to restart the service:

```
sudo /etc/init.d/xinetd restart
```

Technically, your server is ready! But we will go further in this tutorial: indeed the goal here is to make a server able to save the configuration of devices (like switches or routers).

So we will create a file that will contain the configuration of our device (here, it will be "SwitchToto"):

```
touch /tftpboot/SwitchToto
```

We'll think about giving it some rights:

```
chmod 777 /tftpboot/SwitchToto
```

## To do on your equipment

```
SwitchToto> en
SwitchToto> copy running-config tftp
```
This command will ask you 2 questions:

```
1- The IP address of the TFTP server
2- The destination of the configuration file, which is /tftpboot/SwitchToto
```

And a configuration file will be stored on your TFTP server! 

Thanks to **[Enzo Ribeiro](https://enzo-ribeiro.github.io/portfolio)** for his help!
