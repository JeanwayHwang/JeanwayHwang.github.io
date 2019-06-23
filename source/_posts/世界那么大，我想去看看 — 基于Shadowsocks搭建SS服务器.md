---
title: 世界那么大，我想去看看 — 基于Shadowsocks搭建SS服务器
date: 2018-05-01 00:08
tags:
  - 翻墙
  - 网络
  - Shadowsocks
  - 服务器
categories:
  - 网络
urlname: shadowsocks
img: https://huangzhenwei.cn/images/blog/vpn.jpg
---

# 科学上网
科学上网=翻墙=利用技术手段能够访问在中国被GFW禁止/过滤掉而无法访问的网站
> 注：GFW=Great Firewall (of China)=防火长城=中国国家防火墙，简称：墙

# 如何科学上网

Step1.购买VPS服务器

Step2.部署VPS服务器

Step3.下载&配置SSR/SS客户端

# Shadowsocks运行原理
> Shadowsocks（简称SS）是一种基于Socks5代理方式的加密传输协议，也可以指实现这个协议的各种开发包。 ——维基百科

Shadowsocks的运行原理与其他代理工具基本相同，使用特定的中转服务器完成数据传输。例如用户无法直接访问Google但代理服务器可以访问，且用户可以直接连接代理服务器，那么用户就可以通过特定软件连接代理服务器，然后由代理服务器获取网站内容并回传给用户，从而实现代理上网的效果。

## Step1.购买VPS服务器

[搬瓦工](https://bwh88.net)是个不错的选择，我在18年末购买的时候年付才19美元不到，性价比高而且支持支付宝购买，还是比较方便的。

## Step2.部署VPS服务器

1、安装CentOS系统
2、登录服务器 
```
ssh root@144.34.240.219 -p 26512
```
3、安装setuptools和pip
```
yum install -y python-setuptools
easy_install pip // Pip是安装Python包的工具，提供了和easy_install相同的功能
// 注：安装Pip前必须先安装setuptools，安装setuptools前必须先安装Python，CentOS6.5默认安装的Python版本是2.6.6
```

5、安装shadowsocks
```
pip install shadowsocks
```
6、修改配置文件：
```
vi /etc/shadowsocks.json
{
    "server":"144.34.240.219", // 服务器 IP (IPv4/IPv6)，注意这也将是服务端监听的 IP 地址
    "server_port":26512, // 监听的服务器端口
    "local_address": "127.0.0.1", // 本地监听的 IP 地址
    "local_port":3000, // 本地端端口
    "port_password":{ // 加密密码
        "3001":"123456",
        "3002":"888000"
    },
    "timeout":600, // 超时时间（秒）
    "method":"aes-256-cfb", // 加密方法，可选择 “bf-cfb”, “aes-256-cfb”, “des-cfb”, “rc4”, 等等。默认是一种不安全的加密，推荐用 “aes-256-cfb”
    "fast_open": false, // 如果你的服务器 Linux 内核在3.7+，可以开启 fast_open 以降低延迟
    "workers": 1 // works数量，默认为 1
}
```
7、安装M2Crypto 
```
// 默认加密方法table速度很快但很不安全，推荐使用aes-256-cfb或bf-cfb，请勿使用不安全的rc4。若选择table之外的加密，需要安装M2Crypto
yum install -y openssl-devel gcc swig python-devel autoconf libtool
pip install M2Crypto
```
8、安装gevent（提升shadowsocks性能）
```
yum install -y libevent
pip install greenlet
pip install gevent / pip install gevent==1.1b5
```
9、后台启动服务
```
ssserver -c /etc/shadowsocks.json // 当下运行
nohup ssserver -c /etc/shadowsocks.json > /dev/null 2>&1 & // // 在后台一直运行Shadowsocks
```
10、 防火墙设置（如有）
```
// 编辑防火墙配置文件/etc/sysconfig/iptables，将服务器端口（server_port）放行
// 新增一条防火墙规则：
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8989 -j ACCEPT

// 重启防火墙iptables
service iptables restart
```

至此，一个SS服务器的搭建和启动就宣告成功了！

## ## Step3.下载&配置SSR/SS客户端

以Mac为例，可以使用[ShadowsocksX-NG](https://github.com/shadowsocksr-backup/ShadowsocksX-NG/releases)，在其Github主页可以下载安装包进行安装。

配置过程非常简单，基本过程如下：
* 启动应用
* 下拉菜单栏启动自动模式
* 新增服务器设置
* 填写IP、端口及密码（需与上述搭建SS服务器中shadowsocks.json的配置保持一致）

![客户端配置步骤](https://huangzhenwei.cn/images/blog/shadowsocks-client.png '客户端配置步骤')
