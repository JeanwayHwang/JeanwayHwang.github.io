---
title: 始于颜值，终于才华 — 打造iTerm终端利器
date: 2018-06-22 19:20
tags:
  - 终端
  - iTerm
  - zsh
  - oh-my-zsh
categories:
  - 工具
urlname: oh-my-zsh
img: https://huangzhenwei.cn/images/blog/iterm.png
---

工欲善其事，必先利其器。——《论语》
> iTerm2 + OhMyZsh = 更优雅、便捷地使用终端

# 安装iTerm2

前往iTerm2官网 [http://iterm2.com](http://iterm2.com) 下载并安装

或者使用 Homebrew 进行安装：
``` bash
$ brew cask install iterm2
```


# 安装oh-my-zsh
> oh-my-zsh 帮我们整理了一些常用的 Zsh 扩展功能和主题，无需自己去鼓捣Zsh

以Mac为例，在安装 oh-my-zsh 之前需要先将当前系统使用的shell切换设置为zsh

查看当前的shell：
``` bash
$ echo $SHELL 
/bin/bash
```

查看shell列表：
``` bash
$ cat /etc/shells
```

若无zsh，则用yum安装zsh：
``` bash
$ yum -y install zsh
```

已有zsh，则切换shell为zsh：
``` bash
$ chsh -s /bin/zsh
```

重启终端后，再次查看当前shell：
``` bash
$ echo $SHELL 
/bin/zsh
```

至此安装/切换shell为zsh完毕，开始安装 oh-my-zsh （源码是放在 github 上，先确保你的机器上已安装了 git）

安装命令：
``` bash
$ wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

安装完毕，接下来只需简单的配置即可

# 设置主题

oh-my-zsh自带很多主题，从[主题列表](https://github.com/robbyrussell/oh-my-zsh/wiki/themes)中挑选喜欢的主题

我使用的主题是 geoffgarside

修改主题：
```bash
$ vim ~/.zshrc
```

将ZSH_THEME改成你的主题名称：
```bash
ZSH_THEME="geoffgarside"
```
更新配置：
```bash
$ source ~/.zshrc
```

重启终端即可体验新的主题风格！

# 安装自动补齐插件

我们要安装的是 incr.zsh 补全插件

这款插件除了可以自动提示linux指令、参数外，还能在目录切换后自动展示该目录下的文件夹，非常的方便、高效。

![插件演示](https://huangzhenwei.cn/images/blog/zsh.png '插件演示')

下载此插件：
```bash
$ wget http://mimosa-pudica.net/src/incr-0.2.zsh
```

将此插件拷贝到oh-my-zsh目录（~/.oh-my-zsh/plugins）下的incr文件夹（需新建）

在~/.zshrc文件末尾加上
```bash
source ~/.oh-my-zsh/plugins/incr/incr*.zsh
```

更新配置：
```bash
$ source ~/.zshrc
```

开箱体验，渐渐喜欢上这种锦上添花的感觉...

# 设置终端背景

作为颜狗，终端光有主题是不够的，还需要一张养眼的背景图

iterm2 -> Preferences -> Profiles -> window -> Background Image

选择一张自己喜欢的壁纸（可以通过Blending调节壁纸的透明度：透明度为0时背景变为纯黑色)

# 没有对比就没有伤害

iTerm2原始效果：

![iTerm2原始效果](https://huangzhenwei.cn/images/blog/iterm2.png 'iTerm2原始效果')

最终效果：

![最终效果图](https://huangzhenwei.cn/images/blog/iterm.png '最终效果图')