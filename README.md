# Expressions for Cloudflare WAF

## 📝 Info
Block all useless requests.

## ⚠ Warning
Don't use this if you're using WordPress.

## 🤖 Bot Fight Mode
I recommend enabling Bot Fight Mode in the Security tab.

## ✨ When incoming requests match…
```
(http.request.uri.path eq "/2018") or
(http.request.uri.path eq "/2018/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/2019/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/blog") or
(http.request.uri.path eq "/blog/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/cms") or
(http.request.uri.path eq "/cms/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/media") or
(http.request.uri.path eq "/media/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/news/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/shop") or
(http.request.uri.path eq "/shop/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/side") or
(http.request.uri.path eq "/site/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/sito") or
(http.request.uri.path eq "/sito/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/test") or
(http.request.uri.path eq "/test/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/web") or
(http.request.uri.path eq "/web/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/website") or
(http.request.uri.path eq "/website/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/wordpress") or
(http.request.uri.path eq "/wp") or
(http.request.uri.path eq "/wp-admin") or
(http.request.uri.path eq "/wp-includes") or
(http.request.uri.path eq "/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/wp-login.php") or
(http.request.uri.path eq "/wp/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/wp1") or
(http.request.uri.path eq "/wp1/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/wp2") or
(http.request.uri.path eq "/wp2/wp-includes/wlwmanifest.xml") or
(http.request.uri.path eq "/xmlrpc.php?rsd")
```

## 🌠 Then…
Block

<div align="center">
    <h1>⭐ » Star the repo if you liked it « ⭐</h1>
</div>