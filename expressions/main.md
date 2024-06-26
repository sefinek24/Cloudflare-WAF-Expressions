## 🌌 Part 1 - Block unnecessary requests
> **Action:** Block
```
(http.request.uri.path contains ".aspx") or
(http.request.uri.path contains ".DS_Store") or
(http.request.uri.path contains ".env") or
(http.request.uri.path contains ".git") or
(http.request.uri.path contains ".idea") or
(http.request.uri.path contains ".kube") or
(http.request.uri.path contains ".php") or
(http.request.uri.path contains ".vs") or
(http.request.uri.path contains "//") or
(http.request.uri.path contains "/?rest_route=/wp/v2/users") or
(http.request.uri.path contains "/api/search?folderIds=0") or
(http.request.uri.path contains "/blog") or
(http.request.uri.path contains "/cms") or
(http.request.uri.path contains "/login.action") or
(http.request.uri.path contains "/readme") or
(http.request.uri.path contains "/readme.html") or
(http.request.uri.path contains "/readme.md") or
(http.request.uri.path contains "/side") or
(http.request.uri.path contains "/sito") or
(http.request.uri.path contains "/user.action") or
(http.request.uri.path contains "/wordpress") or
(http.request.uri.path contains "/wp") or
(http.request.uri.path contains "/wp-json") or
(http.request.uri.path contains "/wp1") or
(http.request.uri.path contains "/wp2") or
(http.request.uri.path contains "backup.zip") or
(http.request.uri.path contains "id_rsa") or
(http.request.uri.path contains "server.key") or
(http.request.uri.path contains "sftp") or
(http.request.uri.path contains "wordpress") or
(http.request.uri.path contains "wp-admin") or
(http.request.uri.path contains "wp-content") or
(http.request.uri.path contains "wp-includes") or
(http.request.uri.path eq "/config.json") or
(http.request.uri.path eq "/feed") or
(http.request.uri.path eq "/git") or
(http.request.uri.path eq "/ssh") or
(http.request.uri.path eq "/test") or
(http.request.uri.path eq "/web") or
(http.request.uri.path eq "/website") or
(http.user_agent contains "Apache-HttpClient") or
(http.user_agent contains "ipconfig") or
(http.user_agent contains "Knights%20of%20Degen") or
(http.user_agent contains "wlwmanifest") or
(http.user_agent contains "wp_is_mobile") or
(http.user_agent eq "" and http.host ne "blocklist.sefinek.net")
```

## 🗑️ Part 2 - Block deprecated browsers
> **Action:** Managed Challenge \
> *Block old browsers or user agents that are frequently used by bots.*
```
(http.user_agent contains "Android 7" and http.user_agent ne "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://support.google.com/webmasters/answer/1061943)") or
(http.user_agent contains "Android 8") or
(http.user_agent contains "Android 9") or
(http.user_agent contains "Chrome/103") or
(http.user_agent contains "Chrome/106") or
(http.user_agent contains "Chrome/107") or
(http.user_agent contains "Chrome/117") or
(http.user_agent contains "Chrome/119") or
(http.user_agent contains "Chrome/17") or
(http.user_agent contains "Chrome/33") or
(http.user_agent contains "Chrome/34") or
(http.user_agent contains "Chrome/35") or
(http.user_agent contains "Chrome/36") or
(http.user_agent contains "Chrome/37") or
(http.user_agent contains "Chrome/41") or
(http.user_agent contains "Chrome/44") or
(http.user_agent contains "Chrome/49") or
(http.user_agent contains "Chrome/52") or
(http.user_agent contains "Chrome/60") or
(http.user_agent contains "Chrome/64") or
(http.user_agent contains "Chrome/65") or
(http.user_agent contains "Chrome/70" and http.host ne "blocklist.sefinek.net") or
(http.user_agent contains "Chrome/74") or
(http.user_agent contains "Chrome/77") or
(http.user_agent contains "Chrome/78") or
(http.user_agent contains "Chrome/79") or
(http.user_agent contains "Chrome/83") or
(http.user_agent contains "Chrome/84") or
(http.user_agent contains "Chrome/88") or
(http.user_agent contains "Chrome/87") or
(http.user_agent contains "Chrome/93") or
(http.user_agent contains "Chrome/94") or
(http.user_agent contains "Chrome/95") or
(http.user_agent contains "Chrome/96") or
(http.user_agent contains "Chrome/98") or
(http.user_agent contains "Dalvik") or
(http.user_agent contains "Edg/101") or
(http.user_agent contains "Edg/96") or
(http.user_agent contains "Firefox/52") or
(http.user_agent contains "Firefox/57") or
(http.user_agent contains "Firefox/76") or
(http.user_agent contains "Firefox/77") or
(http.user_agent contains "Firefox/79") or
(http.user_agent contains "Firefox/83") or
(http.user_agent contains "HeadlessChrome") or
(http.user_agent contains "Html5Plus") or
(http.user_agent contains "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6)") or
(http.user_agent contains "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2)") or
(http.user_agent contains "Windows NT 6.1") or
(http.user_agent contains "WOW64") or
(http.user_agent contains "YaApp_Android") or
(http.user_agent eq "Autoplius.lt/7.7.0 Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 EmbeddedBrowser DeviceUID:") or
(http.user_agent eq "BrightSign/8.3.23 (XT1144) Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.12.3 Chrome/69.0.3497.128 Safari/537.36") or
(http.user_agent eq "Go-http-client/1.1" and http.host ne "blocklist.sefinek.net") or
(http.user_agent eq "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; rv:9.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.2; BOIE9;ENUS)") or
(http.user_agent eq "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1") or
(http.user_agent eq "Mozilla/5.0 (Linux; U; Android 4.4.2; en-US; HM NOTE 1W Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.0.5.850 U3/0.8.0 Mobile Safari/534.30") or
(http.user_agent eq "Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.3.0.0.0")
```

## 🤖 Part 3 - Block unnecessary bots
> **Action:** Block
```
(lower(http.user_agent) contains "adbeat") or
(lower(http.user_agent) contains "admantx") or
(lower(http.user_agent) contains "ahrefsbot") or
(lower(http.user_agent) contains "appinsights") or
(lower(http.user_agent) contains "aspiegelbot") or
(lower(http.user_agent) contains "awariosmartbot") or
(lower(http.user_agent) contains "barkrowler") or
(lower(http.user_agent) contains "blexbot") or
(lower(http.user_agent) contains "bomborabot") or
(lower(http.user_agent) contains "buck") or
(lower(http.user_agent) contains "bvbot") or
(lower(http.user_agent) contains "bytespider") or
(lower(http.user_agent) contains "ccbot") or
(lower(http.user_agent) contains "censysinspect") or
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
(lower(http.user_agent) contains "embed.ly") or
(lower(http.user_agent) contains "friendlycrawler") or
(lower(http.user_agent) contains "grapeshotcrawler") or
(lower(http.user_agent) contains "gulperbot") or
(lower(http.user_agent) contains "httrack") or
(lower(http.user_agent) contains "ias_crawler") or
(lower(http.user_agent) contains "internet-structure-research-project-bot") or
(lower(http.user_agent) contains "keys-so-bot") or
(lower(http.user_agent) contains "linguee") or
(lower(http.user_agent) contains "linkfluence") or
(lower(http.user_agent) contains "magpie-crawler") or
(lower(http.user_agent) contains "mediatoolkitbot") or
(lower(http.user_agent) contains "megaindex") or
(lower(http.user_agent) contains "mj12bot") or
(lower(http.user_agent) contains "nimbostratus") or
(lower(http.user_agent) contains "omgili") or
(lower(http.user_agent) contains "onalyticabot") or
(lower(http.user_agent) contains "petalbot") or
(lower(http.user_agent) contains "proximic") or
(lower(http.user_agent) contains "pubmatic crawler bot") or
(lower(http.user_agent) contains "riddler") or
(lower(http.user_agent) contains "rogerbot") or
(lower(http.user_agent) contains "sbl-bot") or
(lower(http.user_agent) contains "seekport") or
(lower(http.user_agent) contains "semantic-visions") or
(lower(http.user_agent) contains "semanticbot") or
(lower(http.user_agent) contains "semrushbot" and http.host ne "blocklist.sefinek.net") or
(lower(http.user_agent) contains "serpstatbot") or
(lower(http.user_agent) contains "sogou") or
(lower(http.user_agent) contains "sqlmap") or
(lower(http.user_agent) contains "traackr") or
(lower(http.user_agent) contains "trendictionbot") or
(lower(http.user_agent) contains "ttd-content") or
(lower(http.user_agent) contains "voluumdsp") or
(lower(http.user_agent) contains "wc-test-dev-bot") or
(lower(http.user_agent) contains "webtechbot") or
(lower(http.user_agent) contains "whatcms") or
(lower(http.user_agent) contains "zgrab")
```

## 🌍 Part 4 - Block bots, AS Num or IP
> **Action:** Block
```
(ip.geoip.asnum eq 200651) or
(ip.geoip.asnum eq 2027) or
(ip.geoip.asnum eq 203953) or
(ip.geoip.asnum eq 205100) or
(ip.geoip.asnum eq 208323) or
(ip.geoip.asnum eq 210630) or
(ip.geoip.asnum eq 37963) or
(ip.geoip.asnum eq 399486) or
(ip.geoip.asnum eq 53667) or
(ip.geoip.asnum eq 55960) or
(ip.src eq 102.22.20.58) or
(ip.src eq 103.151.30.155) or
(ip.src eq 103.153.134.22) or
(ip.src eq 103.171.156.218) or
(ip.src eq 103.177.9.104) or
(ip.src eq 103.188.252.66) or
(ip.src eq 103.250.130.104) or
(ip.src eq 103.46.4.7) or
(ip.src eq 103.68.214.97) or
(ip.src eq 104.196.252.127) or
(ip.src eq 109.202.99.46) or
(ip.src eq 114.129.2.82) or
(ip.src eq 114.132.202.246) or
(ip.src eq 114.132.202.78) or
(ip.src eq 115.127.116.242) or
(ip.src eq 12.127.44.138) or
(ip.src eq 122.155.165.191) or
(ip.src eq 132.147.137.52) or
(ip.src eq 138.121.161.84) or
(ip.src eq 143.255.80.134) or
(ip.src eq 148.230.206.229) or
(ip.src eq 152.32.213.18) or
(ip.src eq 161.49.215.28) or
(ip.src eq 165.16.88.161) or
(ip.src eq 168.232.174.43) or
(ip.src eq 172.183.241.1) or
(ip.src eq 175.22.148.13) or
(ip.src eq 177.130.104.106) or
(ip.src eq 177.234.240.123) or
(ip.src eq 177.70.72.103) or
(ip.src eq 177.87.144.122) or
(ip.src eq 179.1.192.5) or
(ip.src eq 179.43.188.122) or
(ip.src eq 179.49.162.133) or
(ip.src eq 180.211.183.2) or
(ip.src eq 184.82.244.173) or
(ip.src eq 185.255.45.241) or
(ip.src eq 187.188.101.205) or
(ip.src eq 187.204.18.213) or
(ip.src eq 188.136.154.43) or
(ip.src eq 189.35.11.247) or
(ip.src eq 189.48.88.204) or
(ip.src eq 190.83.12.220) or
(ip.src eq 190.94.212.198) or
(ip.src eq 190.94.212.240) or
(ip.src eq 191.240.153.144) or
(ip.src eq 191.37.1.155) or
(ip.src eq 194.126.177.84) or
(ip.src eq 199.167.236.12) or
(ip.src eq 200.174.198.136) or
(ip.src eq 200.174.198.222) or
(ip.src eq 200.174.198.224) or
(ip.src eq 200.174.198.92) or
(ip.src eq 201.131.239.233) or
(ip.src eq 201.77.128.158) or
(ip.src eq 202.47.181.150) or
(ip.src eq 202.62.84.210) or
(ip.src eq 209.209.28.22) or
(ip.src eq 212.174.79.169) or
(ip.src eq 213.232.87.230) or
(ip.src eq 213.232.87.232) or
(ip.src eq 213.232.87.234) or
(ip.src eq 216.87.69.230) or
(ip.src eq 217.182.194.108) or
(ip.src eq 24.172.34.114) or
(ip.src eq 34.105.123.106) or
(ip.src eq 34.105.60.137) or
(ip.src eq 34.83.15.88) or
(ip.src eq 34.83.51.218) or
(ip.src eq 34.92.250.88) or
(ip.src eq 36.182.49.26) or
(ip.src eq 36.255.84.69) or
(ip.src eq 36.91.135.141) or
(ip.src eq 36.95.142.35) or
(ip.src eq 4.227.97.45) or
(ip.src eq 43.134.1.40) or
(ip.src eq 43.134.121.40) or
(ip.src eq 43.153.207.93) or
(ip.src eq 45.164.174.27) or
(ip.src eq 45.236.170.234) or
(ip.src eq 45.70.236.150) or
(ip.src eq 46.161.196.222) or
(ip.src eq 46.2.5.84) or
(ip.src eq 47.106.193.183) or
(ip.src eq 51.145.176.250) or
(ip.src eq 52.169.23.0) or
(ip.src eq 52.178.159.39) or
(ip.src eq 59.152.14.109) or
(ip.src eq 59.152.14.111) or
(ip.src eq 61.129.2.212) or
(ip.src eq 62.33.53.248) or
(ip.src eq 84.51.15.250) or
(ip.src eq 85.94.24.29) or
(ip.src eq 88.87.78.95) or
(ip.src eq 91.215.85.29) or
(ip.src eq 94.179.141.78)
```


<div align="right">
    <br>
    <h4>📥 » Last changes: 23.06.2024 [DD.MM.YYYY]</h4>
</div>