---
layout: post
title: Random "xprop input/output error" on Pop!_OS
---

About a month ago I installed Pop!\_OS as the only OS on my T480. I'm still very satisfied in general, although once in a while a "xprop input/output error" message pops up.

Shortly after that, Gnome icons would start to disappear, followed by xorg crashing completely.
After that the system prints a bunch of errors:

```
EXT4-fs error (device nvme0n1p2): __ext4_find_entry:1531: inode #7352672 comm gmain: reading directory lblock 0
```

```
systemd-journald[442]: Failed to write entry (9 items, 325 bytes), ignoring: Input/output error
```

```
systemd-journald[442]: Failed to rotate /var/log/journal/90d5346a9517fb47bbd7bf195eadf0b7/system.journal: Read-only file system
systemd-journald[442]: Failed to rotate /var/log/journal/90d5346a9517fb47bbd7bf195eadf0b7/user-1000.journal: Read-only file system
```

```
EXT4-fs error (device nvme0n1p2): __ext4_find_entry:1531: inode #7352681 comm systemd: reading directory lblock 0
EXT4-fs error (device nvme0n1p2): __ext4_find_entry:1531: inode #7346652 comm systemd-logind: reading directory lblock 0
```

_Note: nvme0n1p2 is my root fs_

Since all of these are related to the filesystem, I ran a check on my root parition, but didn't find any problems there.


`dmesg` contained two errors that might be related:

```
[    3.674746] systemd-journald[440]: File /var/log/journal/90d5346a9517fb47bbd7bf195eadf0b7/system.journal corrupted or uncleanly shut down, renaming and replacing.
[    3.716248] FAT-fs (nvme0n1p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

nvme0n1p1 is the UEFI partition on my device.
A filesystem check revealed the UEFI partition to be corrupt - repairing it (`sudo fsck /boot/efi`) seems to have fixed the problem.

During the installation of Pop!\_OS, I wiped the old UEFI partition, as the previous one did not suffice Pop!\_OS' size-requirements, and then overwrote it with a new, bigger partition. _Most likely I messed up some settings at that time. Perhaps not wiping the old partition?_
