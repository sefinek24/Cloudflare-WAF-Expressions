<div align="center">
    <h1>☁️ Cloudflare Web Application Expressions</h1>
</div>

With these expressions (for WAF), you can effectively block all unnecessary requests to your server, enhancing its security and performance.

Additionally, it is recommended to **disable** the `Bot Fight Mode` feature located in the `Security tab`.
This feature is designed to detect and block automated traffic from bots. However, it often blocks safe bots as well, which is not our intention.

![brave_3bq3ILedXwKD.png](assets/images/brave_3bq3ILedXwKD.png)


## ⚠️ Important
Please note that these expressions should not be used if you are utilizing WordPress or any similar content management system (CMS).
They are **highly recommended for Node.js applications** built on frameworks like Express, for example.


## 🛡️ What This List Can Block

This list is meticulously crafted to block a wide variety of unnecessary and potentially harmful requests to your server, enhancing its security. Here’s an overview of what it can block:

1. **Sensitive Files and Directories:**
   - Prevents access to critical files and directories such as `.git` and `.env`, which often contain sensitive information that should never be publicly accessible. It also blocks access to other commonly used configuration files and keys, such as SSH keys.

2. **Common Attack Vectors:**
   - Blocks URLs containing patterns often used in attacks, helping to thwart attempts to exploit known vulnerabilities in applications.

3. **Backup Files:**
   - Protects against requests for access to backup files, which could contain sensitive data.

4. **Outdated Browsers:**
   - Identifies and blocks old versions of browsers and user agents, which are often used by bots for automated attacks or simply crawling.

5. **Unwanted Bots:**
   - Detects and blocks various unwanted, unnecessary, and known harmful bots by analyzing specific user-agent strings. This reduces unwanted bot traffic, which can burden server resources.

6. **Specific IP Addresses and ASNs:**
   - Blocks traffic from known malicious IP addresses and ASNs, helping prevent attacks from sources flagged as malicious. The list also includes some IP addresses associated with botnets.

By implementing these blocks, you can significantly enhance the security of your Node.js applications while reducing the server load caused by unwanted traffic.


<div align="center">
    <h3>>> <a href="expressions/main.md">View Expressions.md (for Node.js servers)</a> <<</h3>
    <br>
    <h3>⭐ » Star the repo if you found it useful « ⭐</h3>
</div>


[//]: # (<h3>>> <a href="expressions/php">View Expressions.md &#40;servers with PHP installed&#41;</a> <<</h3>)