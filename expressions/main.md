## 🌌 Part 1 - Block unnecessary requests
> **Action:** Block
```
(http.request.uri.path contains ".DS_Store") or
(http.request.uri.path contains ".env") or
(http.request.uri.path contains ".git") or
(http.request.uri.path contains ".idea") or
(http.request.uri.path contains ".php") or
(http.request.uri.path contains ".vs") or
(http.request.uri.path contains "//feed") or
(http.request.uri.path contains "/2018") or
(http.request.uri.path contains "/?rest_route=/wp/v2/users") or
(http.request.uri.path contains "/api/search?folderIds=0") or
(http.request.uri.path contains "/blog") or
(http.request.uri.path contains "/cms") or
(http.request.uri.path contains "/debug/default/view?panel=config") or
(http.request.uri.path contains "/ecp/Current/exporttool/microsoft.exchange.ediscovery.exporttool.application") or
(http.request.uri.path contains "/login.action") or
(http.request.uri.path contains "/readme") or
(http.request.uri.path contains "/readme.html") or
(http.request.uri.path contains "/readme.md") or
(http.request.uri.path contains "/side") or
(http.request.uri.path contains "/sito") or
(http.request.uri.path contains "/user.action") or
(http.request.uri.path contains "/webadm/?q=moni_detail.do&action=gragh") or
(http.request.uri.path contains "/wordpress") or
(http.request.uri.path contains "/wp") or
(http.request.uri.path contains "/wp1") or
(http.request.uri.path contains "/wp2") or
(http.request.uri.path contains "sftp") or
(http.request.uri.path contains "ssh") or
(http.request.uri.path contains "telescope/requests") or
(http.request.uri.path contains "v2/_catalog") or
(http.request.uri.path contains "wordpress") or
(http.request.uri.path contains "wp-admin") or
(http.request.uri.path contains "wp-content") or
(http.request.uri.path contains "wp-includes") or
(http.request.uri.path eq "/03/license.txt") or
(http.request.uri.path eq "/3/license.txt") or
(http.request.uri.path eq "/?search==%00{.cookie|EuWUov|value%3dCVE-2014-6287.}") or
(http.request.uri.path eq "/ALFA_DATA/alfacgiapi/perl.alfa") or
(http.request.uri.path eq "/config.json") or
(http.request.uri.path eq "/feed") or
(http.request.uri.path eq "/test") or
(http.request.uri.path eq "/web") or
(http.request.uri.path eq "/website") or
(http.request.uri.path eq "/xmlrpc.php") or
(http.user_agent contains "/bsh.servlet.BshServlet") or
(http.user_agent contains "/s=set&_method=__construct&method=*&filter[]=system") or
(http.user_agent contains "/seeyon/htmlofficeser") or
(http.user_agent contains "/seeyon/test123456.jsp") or
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
(http.user_agent contains "Chrome/33") or
(http.user_agent contains "Chrome/34") or
(http.user_agent contains "Chrome/35") or
(http.user_agent contains "Chrome/36") or
(http.user_agent contains "Chrome/37") or
(http.user_agent contains "Chrome/41") or
(http.user_agent contains "Chrome/49") or
(http.user_agent contains "Chrome/52") or
(http.user_agent contains "Chrome/60") or
(http.user_agent contains "Chrome/65") or
(http.user_agent contains "Chrome/77") or
(http.user_agent contains "Chrome/78") or
(http.user_agent contains "Chrome/83") or
(http.user_agent contains "Chrome/84") or
(http.user_agent contains "Chrome/88") or
(http.user_agent contains "Chrome/94") or
(http.user_agent contains "Chrome/95") or
(http.user_agent contains "Chrome/96") or
(http.user_agent contains "Edg/96.0.1054.43") or
(http.user_agent contains "Firefox/57.0") or
(http.user_agent contains "Firefox/76.0") or
(http.user_agent contains "Firefox/77.0") or
(http.user_agent contains "Firefox/79.0") or
(http.user_agent contains "HeadlessChrome") or
(http.user_agent contains "Html5Plus") or
(http.user_agent contains "Windows NT 10.0; WOW64") or
(http.user_agent contains "Windows NT 6.1") or
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
(lower(http.user_agent) contains "internet-structure-research-project-bot") or
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
(ip.src eq 189.35.11.247) or
(ip.src eq 4.227.97.45) or
(ip.src eq 47.106.193.183) or
(ip.src eq 52.169.23.0) or
(ip.src eq 52.178.159.39) or
(ip.src eq 91.215.85.29)
```


<div align="right">
    <br>
    <h4>📥 » Last changes: 19.05.2024 [DD.MM.YYYY]</h4>
</div>