## 🌌 Part 1 - Block unnecessary requests
> **Action:** Block
```regexp
(http.request.uri.path contains ".php") or
(http.request.uri.path contains "//feed") or
(http.request.uri.path contains "/2018") or
(http.request.uri.path contains "/?rest_route=/wp/v2/users") or
(http.request.uri.path contains "/api/search?folderIds=0") or
(http.request.uri.path contains "/blog") or
(http.request.uri.path contains "/cms") or
(http.request.uri.path contains "/debug/default/view?panel=config") or
(http.request.uri.path contains "/ecp/Current/exporttool/microsoft.exchange.ediscovery.exporttool.application") or
(http.request.uri.path contains "/login.action") or
(http.request.uri.path contains "/media") or
(http.request.uri.path contains "/readme") or
(http.request.uri.path contains "/readme.html") or
(http.request.uri.path contains "/readme.md") or
(http.request.uri.path contains "/s/33e27393e2431313e2838313/_/;/META-INF/maven/com.atlassian.jira/jira-webapp-dist/pom.properties") or
(http.request.uri.path contains "/server-status") or
(http.request.uri.path contains "/side") or
(http.request.uri.path contains "/sito") or
(http.request.uri.path contains "/wordpress") or
(http.request.uri.path contains "/wp") or
(http.request.uri.path contains "/wp1") or
(http.request.uri.path contains "/wp2") or
(http.request.uri.path contains "sftp") or
(http.request.uri.path contains "ssh") or
(http.request.uri.path contains "telescope/requests") or
(http.request.uri.path contains "v2/_catalog") or
(http.request.uri.path contains "/user.action") or
(http.request.uri.path contains "/webadm/?q=moni_detail.do&action=gragh") or
(http.request.uri.path contains "wordpress") or
(http.request.uri.path eq ".DS_Store") or
(http.request.uri.path eq ".env") or
(http.request.uri.path eq ".git") or
(http.request.uri.path eq ".idea") or
(http.request.uri.path eq ".php") or
(http.request.uri.path eq ".vs") or
(http.request.uri.path eq "/03/license.txt") or
(http.request.uri.path eq "/3/license.txt") or
(http.request.uri.path eq "/ALFA_DATA/alfacgiapi/perl.alfa") or
(http.request.uri.path eq "/config.json") or
(http.request.uri.path eq "/feed") or
(http.request.uri.path eq "/test") or
(http.request.uri.path eq "/web") or
(http.request.uri.path eq "/website") or
(http.request.uri.path eq "/website/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/wordpress/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/?search==%00{.cookie|EuWUov|value%3dCVE-2014-6287.}") or
(http.request.uri.path eq "/xmlrpc.php") or
(http.request.uri.path eq "wp-admin") or
(http.request.uri.path eq "wp-content") or
(http.request.uri.path eq "wp-includes") or
(http.user_agent contains "/bsh.servlet.BshServlet") or
(http.user_agent contains "/s=set&_method=__construct&method=*&filter[]=system") or
(http.user_agent contains "/seeyon/htmlofficeser") or
(http.user_agent contains "/seeyon/test123456.jsp") or
(http.user_agent contains "ipconfig") or
(http.user_agent contains "wlwmanifest") or
(http.user_agent contains "wp_is_mobile") or
(http.user_agent eq "Knights%20of%20Degen/4 CFNetwork/1402.0.8 Darwin/22.1.0") or
(http.user_agent eq "Knights%20of%20Degen/4 CFNetwork/1402.0.8 Darwin/22.2.0")
```

## 🗑️ Part 2 - Block deprecated browsers
> **Action:** Managed Challenge
```regexp
(http.user_agent eq "") or
(http.user_agent eq "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2656.18 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4240.19 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36") or
(http.user_agent eq "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1") or
(http.user_agent eq "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36")
```

## 🤖 Part 3 - Block unnecessary bots
> **Action:** Block
```regexp
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
(lower(http.user_agent) contains "cincraw") or
(lower(http.user_agent) contains "clickagy") or
(lower(http.user_agent) contains "cocolyzebot") or
(lower(http.user_agent) contains "df bot 1.0") or
(lower(http.user_agent) contains "domainstatsbot") or
(lower(http.user_agent) contains "domcopbot") or
(lower(http.user_agent) contains "dotbot") or
(lower(http.user_agent) contains "embed.ly") or
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
(lower(http.user_agent) contains "semrushbot") or
(lower(http.user_agent) contains "serpstatbot") or
(lower(http.user_agent) contains "sogou") or
(lower(http.user_agent) contains "sqlmap") or
(lower(http.user_agent) contains "traackr") or
(lower(http.user_agent) contains "trendictionbot") or
(lower(http.user_agent) contains "voluumdsp") or
(lower(http.user_agent) contains "wc-test-dev-bot") or
(lower(http.user_agent) contains "webtechbot") or
(lower(http.user_agent) contains "whatcms")
```

## 🌍 Part 4 - Block bots, AS Num or IP
> **Action:** Block
```regexp
(ip.geoip.asnum eq 37963) or
(ip.src eq 47.106.193.183)
```

    
<div align="right">
    <br>
    <h4>📥 » Last changes: 23.01.2024 [DD.MM.YYYY]</h4>
</div>