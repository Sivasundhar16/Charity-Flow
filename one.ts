snapd.service - Snap Daemon
     Loaded: loaded (/usr/lib/systemd/system/snapd.service; enabled; preset: enabled)
     Active: inactive (dead) since Wed 2025-03-12 11:15:10 IST; 23s ago
   Duration: 8.063s
 Invocation: e47ffe9107b5405d9221628ecb68118e
TriggeredBy: ● snapd.socket
    Process: 16055 ExecStart=/usr/lib/snapd/snapd (code=exited, status=42)
   Main PID: 16055 (code=exited, status=42)
   Mem peak: 13.5M
        CPU: 323ms

Mar 12 11:15:02 Siva snapd[16055]: overlord.go:279: Acquired state lock file
Mar 12 11:15:02 Siva snapd[16055]: daemon.go:250: started snapd/2.67.1+24.10 (series 16; classic) ubuntu/2>
Mar 12 11:15:02 Siva snapd[16055]: daemon.go:353: adjusting startup timeout by 30s (pessimistic estimate o>
Mar 12 11:15:02 Siva snapd[16055]: backends.go:58: AppArmor status: apparmor is enabled and all features a>
Mar 12 11:15:02 Siva systemd[1]: Started snapd.service - Snap Daemon.
Mar 12 11:15:07 Siva snapd[16055]: daemon.go:548: gracefully waiting for running hooks
Mar 12 11:15:07 Siva snapd[16055]: daemon.go:550: done waiting for running hooks
Mar 12 11:15:10 Siva snapd[16055]: overlord.go:518: Released state lock file
Mar 12 11:15:10 Siva snapd[16055]: daemon stop requested to wait for socket activation
Mar 12 11:15:10 Siva systemd[1]: snapd.service: Deactivated successfully.

● snapd.socket - Socket activation for snappy daemon
lines 1-23

