---
layout: post
title: Follow-up on random IO errors in Pop!_OS on NVMe drives
---

While manually adding a kernel options to Pop!\_OS' boot entry did solve the NVMe drive related IO errors temporarily, kernel updates would end up overwriting that file, which led to more IO errors later on.

To permanently add a kernel option to Pop!\_OS' boot config, I had to add the option with [kernelstub](https://github.com/pop-os/kernelstub#readme):

```
sudo kernelstub -a "nvme_core.default_ps_max_latency_us=500"
```
