<div align="right">
    <h4>📥 » Last update: 19.11.2024 [DD.MM.YYYY]</h4>
</div>

## 🔥 Part 1 - Main firewall
> **Action:** Block
```
(cf.waf.credential_check.password_leaked) or
(http.referer eq "http://n666888.com") or
(http.request.full_uri eq "https://api.sefinek.net/api/v2/random/animal/cat" and ip.geoip.asnum eq 8075 and http.user_agent eq "python-requests/2.31.0") or
(http.request.uri.path contains ".aspx") or
(http.request.uri.path contains ".aws") or
(http.request.uri.path contains ".bash") or
(http.request.uri.path contains ".credentials") or
(http.request.uri.path contains ".docker") or
(http.request.uri.path contains ".DS_Store") or
(http.request.uri.path contains ".env") or
(http.request.uri.path contains ".git" and not http.host contains "git." and not http.host contains "gitlab." and not http.host contains "gitlab-test.") or
(http.request.uri.path contains ".htaccess") or
(http.request.uri.path contains ".htpasswd") or
(http.request.uri.path contains ".idea") or
(http.request.uri.path contains ".kube") or
(http.request.uri.path contains ".mysql_history") or
(http.request.uri.path contains ".npmrc") or
(http.request.uri.path contains ".smbcredentials") or
(http.request.uri.path contains ".sql") or
(http.request.uri.path contains ".ssh") or
(http.request.uri.path contains ".vs") or
(http.request.uri.path contains "//") or
(http.request.uri.path contains "/actuator") or
(http.request.uri.path contains "/backup") or
(http.request.uri.path contains "/bkp") or
(http.request.uri.path contains "/cms") or
(http.request.uri.path contains "/config") or
(http.request.uri.path contains "/credentials") or
(http.request.uri.path contains "/debug") or
(http.request.uri.path contains "/env") or
(http.request.uri.path contains "/install") or
(http.request.uri.path contains "/license") or
(http.request.uri.path contains "/login.action") or
(http.request.uri.path contains "/old") or
(http.request.uri.path contains "/phpmyadmin") or
(http.request.uri.path contains "/readme") or
(http.request.uri.path contains "/sito") or
(http.request.uri.path contains "/temp" and not http.host contains "cdn.") or
(http.request.uri.path contains "/tmp" and not http.host contains "cdn.") or
(http.request.uri.path contains "/user.action") or
(http.request.uri.path contains "/webdav") or
(http.request.uri.path contains "/~adm") or
(http.request.uri.path contains "/~sysadm") or
(http.request.uri.path contains "/~webmaster") or
(http.request.uri.path contains "authorized_keys") or
(http.request.uri.path contains "backup.") or
(http.request.uri.path contains "Dockerfile") or
(http.request.uri.path contains "dump.") or
(http.request.uri.path contains "file_put_contents") or
(http.request.uri.path contains "id_rsa") or
(http.request.uri.path contains "keys.json") or
(http.request.uri.path contains "pboot:if") or
(http.request.uri.path contains "phpinfo") or
(http.request.uri.path contains "server.key") or
(http.request.uri.path contains "sftp") or
(http.request.uri.path contains "web.config") or
(http.request.uri.path contains "\\") or
(http.request.uri.path contains "~ftp") or
(http.request.uri.path contains "~tmp") or
(http.request.uri.path eq "/.cache") or
(http.request.uri.path eq "/config.json") or
(http.request.uri.path eq "/dbadmin") or
(http.request.uri.path eq "/git") or
(http.request.uri.path eq "/ssh") or
(http.request.uri.path eq "/www-sql") or
(http.request.uri.path eq "/_all_dbs") or
(http.request.uri.path eq "wlwmanifest") or
(http.user_agent contains "   ") or
(http.user_agent eq "" and not http.host contains "api." and not http.host contains "cdn." and http.host ne "blocklist.sefinek.net") or
(lower(http.user_agent) contains "embeddedbrowser" and not http.host contains "api." and not http.host contains "cdn.") or
(lower(http.user_agent) contains "go-http-client" and not http.host contains "api." and not http.host contains "cdn." and http.host ne "blocklist.sefinek.net") or
(lower(http.user_agent) contains "headless" and not http.host contains "api." and not http.host contains "cdn.") or
(lower(http.user_agent) contains "private_keys") or
(lower(http.user_agent) contains "secrets.json")
```

## 🗑️ Part 2 - Deprecated browsers
> **Action:** Managed Challenge
```
(http.user_agent contains "/112.0") or
(http.user_agent contains "/113.0") or
(http.user_agent contains "/114.0" and not http.user_agent contains "OPR/114.0") or
(http.user_agent contains "/118.0") or
(http.user_agent contains "Android 7" and not http.host contains "api." and not http.user_agent contains "Google-Read-Aloud;" and not http.user_agent contains "(compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)") or
(http.user_agent contains "Chrome/74" and not http.user_agent contains "Better Uptime Bot" and not http.host contains "api.") or
(http.user_agent contains "Windows NT 5" and not http.user_agent contains "(via ggpht.com GoogleImageProxy)" and not http.host contains "api.") or
(lower(http.user_agent) contains "android 8" and not http.host contains "api.") or
(lower(http.user_agent) contains "chrome/103") or
(lower(http.user_agent) contains "chrome/100") or
(lower(http.user_agent) contains "chrome/17") or
(lower(http.user_agent) contains "chrome/30") or
(lower(http.user_agent) contains "chrome/31") or
(lower(http.user_agent) contains "chrome/32") or
(lower(http.user_agent) contains "chrome/33") or
(lower(http.user_agent) contains "chrome/34") or
(lower(http.user_agent) contains "chrome/35") or
(lower(http.user_agent) contains "chrome/36") or
(lower(http.user_agent) contains "chrome/37") or
(lower(http.user_agent) contains "chrome/39") or
(lower(http.user_agent) contains "chrome/41") or
(lower(http.user_agent) contains "chrome/42") or
(lower(http.user_agent) contains "chrome/44") or
(lower(http.user_agent) contains "chrome/49") or
(lower(http.user_agent) contains "chrome/52") or
(lower(http.user_agent) contains "chrome/53") or
(lower(http.user_agent) contains "chrome/58") or
(lower(http.user_agent) contains "chrome/60") or
(lower(http.user_agent) contains "chrome/64") or
(lower(http.user_agent) contains "chrome/65") or
(lower(http.user_agent) contains "chrome/67") or
(lower(http.user_agent) contains "chrome/68") or
(lower(http.user_agent) contains "chrome/69") or
(lower(http.user_agent) contains "chrome/71") or
(lower(http.user_agent) contains "chrome/77") or
(lower(http.user_agent) contains "chrome/78") or
(lower(http.user_agent) contains "chrome/79") or
(lower(http.user_agent) contains "chrome/80") or
(lower(http.user_agent) contains "chrome/81") or
(lower(http.user_agent) contains "chrome/83") or
(lower(http.user_agent) contains "chrome/84") or
(lower(http.user_agent) contains "chrome/85") or
(lower(http.user_agent) contains "chrome/87") or
(lower(http.user_agent) contains "chrome/88") or
(lower(http.user_agent) contains "chrome/89") or
(lower(http.user_agent) contains "chrome/91") or
(lower(http.user_agent) contains "chrome/92") or
(lower(http.user_agent) contains "chrome/93") or
(lower(http.user_agent) contains "chrome/94") or
(lower(http.user_agent) contains "chrome/95") or
(lower(http.user_agent) contains "chrome/96") or
(lower(http.user_agent) contains "chrome/98") or
(lower(http.user_agent) contains "crios/121") or
(lower(http.user_agent) contains "edg/101") or
(lower(http.user_agent) contains "edg/96") or
(lower(http.user_agent) contains "firefox/45") or
(lower(http.user_agent) contains "firefox/52") or
(lower(http.user_agent) contains "firefox/57") or
(lower(http.user_agent) contains "firefox/62") or
(lower(http.user_agent) contains "firefox/76") or
(lower(http.user_agent) contains "firefox/77") or
(lower(http.user_agent) contains "firefox/79") or
(lower(http.user_agent) contains "firefox/83") or
(lower(http.user_agent) contains "html5plus" and not http.host contains "api.") or
(lower(http.user_agent) contains "mac os x 10_9") or
(lower(http.user_agent) contains "msie 9.0") or
(lower(http.user_agent) contains "netfront") or
(lower(http.user_agent) contains "symbianos") or
(lower(http.user_agent) contains "version/15.4")
```

## 🤖 Part 3 - Block unnecessary bots
> **Action:** Block
```
(lower(http.user_agent) contains "barkrowler") or
(lower(http.user_agent) contains "blexbot") or
(lower(http.user_agent) contains "bomborabot") or
(lower(http.user_agent) contains "buck") or
(lower(http.user_agent) contains "bvbot") or
(lower(http.user_agent) contains "bytespider") or
(lower(http.user_agent) contains "ccbot") or
(lower(http.user_agent) contains "checkhost") or
(lower(http.user_agent) contains "cincraw") or
(lower(http.user_agent) contains "claudebot") or
(lower(http.user_agent) contains "clickagy") or
(lower(http.user_agent) contains "cocolyzebot") or
(lower(http.user_agent) contains "criteobot") or
(lower(http.user_agent) contains "df bot 1.0") or
(lower(http.user_agent) contains "domainstatsbot") or
(lower(http.user_agent) contains "domcopbot") or
(lower(http.user_agent) contains "dotbot") or
(lower(http.user_agent) contains "gulperbot") or
(lower(http.user_agent) contains "httrack") or
(lower(http.user_agent) contains "internet-structure") or
(lower(http.user_agent) contains "ioncrawl") or
(lower(http.user_agent) contains "keys-so-bot") or
(lower(http.user_agent) contains "magpie-crawler") or
(lower(http.user_agent) contains "megaindex") or
(lower(http.user_agent) contains "mj12bot") or
(lower(http.user_agent) contains "nimbostratus") or
(lower(http.user_agent) contains "omgili") or
(lower(http.user_agent) contains "onalyticabot") or
(lower(http.user_agent) contains "panscient.com") or
(lower(http.user_agent) contains "proximic") or
(lower(http.user_agent) contains "riddler") or
(lower(http.user_agent) contains "rogerbot") or
(lower(http.user_agent) contains "sbl-bot") or
(lower(http.user_agent) contains "semantic-visions") or
(lower(http.user_agent) contains "semanticbot") or
(lower(http.user_agent) contains "serpstatbot") or
(lower(http.user_agent) contains "sqlmap") or
(lower(http.user_agent) contains "trendictionbot") or
(lower(http.user_agent) contains "ttd-content") or
(lower(http.user_agent) contains "voluumdsp") or
(lower(http.user_agent) contains "wc-test-dev-bot") or
(lower(http.user_agent) contains "webtechbot") or
(lower(http.user_agent) contains "whatcms") or
(lower(http.user_agent) contains "zgrab")
```

## 🌍 Part 4 - Block bots, ASNs and IPs
> **Action:** Block
```
(ip.geoip.country eq "T1") or
(ip.src in {
    102.22.20.58          102.68.128.195        103.106.114.106
    103.151.30.155        103.153.134.22        103.156.70.38
    103.165.155.254       103.169.129.4         103.169.254.9
    103.171.156.218       103.177.9.104         103.188.252.66
    103.208.27.214        103.24.213.118        103.242.104.182
    103.250.130.104       103.46.4.7            103.6.177.174
    103.68.214.97         109.202.99.46         113.164.94.137
    114.129.2.82          114.132.202.246       114.132.202.78
    115.127.116.242       118.101.56.156        12.127.44.138
    120.28.217.209        122.155.165.191       122.185.198.242
    124.158.182.34        125.25.56.164         132.147.137.52
    134.122.135.138       138.121.161.84        138.68.86.32
    139.99.8.91           143.255.80.134        148.230.206.229
    152.32.213.18         156.146.33.76         161.49.215.28
    164.92.244.132        165.16.88.161         167.99.55.197
    168.232.174.43        172.183.241.1         175.100.91.212
    175.22.148.13         177.130.104.106       177.234.240.123
    177.54.226.50         177.70.72.103         177.87.144.122
    179.1.192.5           179.43.188.122        179.49.162.133
    180.211.183.2         180.31.234.71         184.72.145.180
    184.82.244.173        185.130.44.86         185.220.101.37
    185.255.45.241        187.188.101.205       187.204.18.213
    188.134.80.97         188.136.154.43        189.35.11.247
    189.48.88.204         190.102.139.146       190.83.12.220
    190.94.212.198        190.94.212.240        191.179.216.84
    191.240.153.144       191.37.1.155          193.176.211.244
    194.126.177.84        194.163.149.123       199.167.236.12
    20.191.210.159        200.174.198.136       200.174.198.144
    200.174.198.222       200.174.198.224       200.174.198.92
    2001:bc8:182c:1005::1 201.131.239.233       201.77.128.158
    201.77.96.149         202.47.181.150        202.47.88.2
    202.62.84.210         205.185.125.235       209.209.28.22
    212.174.79.169        213.232.87.230        213.232.87.232
    213.232.87.234        216.87.69.230         216.9.224.141
    217.182.194.108       24.172.34.114         2400:e920:0:8:250:56ff:fe94:474e
    2a01:239:2d0:bc00::1  36.182.49.26          36.255.84.69
    36.91.135.141         36.95.142.35          37.120.192.154
    4.227.97.45           43.134.1.40           43.134.121.40
    43.153.207.93         45.164.174.27         45.227.195.121
    45.231.223.252        45.236.170.234        45.66.35.22
    45.70.236.150         46.161.196.222        46.2.5.84
    47.106.193.183        47.51.30.226          5.75.225.67
    51.145.176.250        52.169.23.0           52.178.159.39
    77.238.225.41         82.80.249.249         91.215.85.29
    93.91.196.190         94.179.141.78
}) 
```