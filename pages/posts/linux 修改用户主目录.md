---
layout: post
title: linux 修改用户主目录
date: 2022-12-11 11:28:37
category: 笔记
tags: 笔记
---

```bash
usermod -d {新文件夹} -u {UID} {用户名}
```

例：

```bash
$ id nouser
用户id=1001(nouser) 组id=1001(nouser) 组=27(sudo),1000(user),1001(nouser)
$ usermod -d /nouser-home -u 1001 nouser
```

查看一下完成没有

```bash
$ su nouser
密码：
$ cd ~
$ pwd -P
/nouser-home
```

good，成功修改了用户主目录
