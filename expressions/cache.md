# Bypass cache for CDNs
```
(starts_with(http.request.full_uri, "cdn.")) or (starts_with(http.request.full_uri, "screenshots."))
```

## Eligible for cache
## Edge TTL
### Ignore cache-control header and use this TTL
## Browser TTL
### Respect origin TTL


# Cache default file extensions
```js
(http.request.uri.path.extension in {"7z" "avi" "avif" "apk" "bin" "bmp" "bz2" "class" "css" "csv" "doc" "docx" "dmg" "ejs" "eot" "eps" "exe" "flac" "gif" "gz" "ico" "iso" "jar" "jpg" "jpeg" "js" "mid" "midi" "mkv" "mp3" "mp4" "ogg" "otf" "pdf" "pict" "pls" "png" "ppt" "pptx" "ps" "rar" "svg" "svgz" "swf" "tar" "tif" "tiff" "ttf" "webm" "webp" "woff" "woff2" "xls" "xlsx" "zip" "zst"})
```

## Eligible for cache