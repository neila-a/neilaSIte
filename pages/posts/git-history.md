---
layout: post
title: git 拒绝合并无关的历史
date: 2022-12-09 02:49:39
tags: 笔记
slug: git history
---

![人家只是一张图片而已，为什么要人家不能加载。。。](/imgs/git-allow-unrelated-histories.png)  
通常什么情况下会发生此问题？  
假设主分支只有A项目，你想把在本地开发了很久的B项目上传，那么这时git会认为你不是同一个版本，会拒绝你的提交  
此时，如果在确认是同一个版本之后，可以使用如下命令使git允许合并不相关的历史：  

```bash
git (pull/push) --allow-unrelated-histories
```
