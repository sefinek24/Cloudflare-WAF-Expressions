<div align="center">
    <h1>☁️ Cloudflare Web Application Firewall Expressions</h1>
</div>

With these expressions for WAF, you can effectively block all unnecessary requests to your server, enhancing its security.
If you find this repository helpful, please consider giving it a star ⭐. Thank you!

<img src="assets/images/brave_7V0Mb1E81rC0.png" alt="Cloudflare Web Application Firewall (WAF)"> 

> [!IMPORTANT]  
> It is also recommended to **disable** the `Bot Fight Mode` feature in the `Security` tab.  
> Although this feature helps detect and block automated bot traffic, it can inadvertently block safe, legitimate bots as well, which is not our intention.

> [!TIP]  
> Remember to check back here from time to time. These lists are frequently updated to stay effective against the latest threats.

<div align="center">
   <h3>>> <a href="markdown/main.md">View Main Expressions</a> <<</h3>
   <h3>>> <a href="markdown/cache.md">View Expressions for Caching</a> <<</h3>
</div>


## 🛡️ What Can This List Block?
This list has been carefully crafted to enhance the security of your origin server by blocking a wide range of unnecessary and potentially malicious requests. Here is a summary of what it can block:

1. **Sensitive Files and Directories:**
   - Blocks access to critical files and directories like `.git`, `.env`, and `.htaccess`, which often contain sensitive information that should remain private. It also prevents access to other commonly used configuration files and sensitive keys, such as SSH keys.

2. **Common Attack Vectors:**
   - Blocks URLs with patterns commonly used in attacks, helping to prevent attempts to exploit known application vulnerabilities.

3. **Backup Files:**
   - Blocks requests for backup files that could contain sensitive data.

4. **Outdated Browsers:**
   - Identifies and blocks outdated browser versions often used by bots for automated attacks or unnecessary web crawling. It can also block DDoS attacks from botnets, which frequently use outdated user agents.

5. **Unwanted bots:**
   - Blocks various unwanted, unnecessary web crawlers and known malicious bots. This helps reduce unwanted bot traffic and alleviate server resource strain.

6. **Specific IP Addresses and ASNs:**
   - Blocks traffic from known malicious IP addresses and ASNs to prevent attacks from flagged sources. The list also includes IP addresses associated with botnets.


## ❌ What This List Will Never Block
1. Known and safe search engine bots, such as `Google`, `Bing`, `DuckDuckGo`, `Yandex`, `Yahoo!`, and others.
2. Outgoing requests from [Node.js](https://nodejs.org) applications using libraries like `node-fetch`, `axios`, `superagent`, `request`, and similar.
3. Outgoing requests from tools like `curl`, `wget`, `Postman`, `httpie`, `Insomnia`, and similar.
4. Legitimate traffic from widely used APIs and services essential to your application's functionality.
5. Webhooks and callbacks from trusted third-party services.
6. Requests for standard web files, such as `robots.txt`, `ads.txt`, `sitemap.xml`, `humans.txt`, and similar, which are important for proper indexing and ad management.


## 📝 How to Use These Expressions
1. Log in to your [Cloudflare](https://dash.cloudflare.com) account.
2. Select the domain where you want to add the expressions.
3. Click on the `Security` tab, then choose `WAF` from the dropdown menu.
4. In the `Custom rules` tab, click the `Create rule` button.
5. Copy the expressions from the [markdown/main.md](markdown/main.md) file.
6. Click `Edit expression` and paste the copied expressions.
7. Click `Deploy` to save the changes. Repeat this process for the remaining parts of the expressions, ensuring you select the appropriate action (Block or Managed Challenge) as specified in the file.
8. Done! The expressions are now active and will start blocking unwanted traffic to your origin server. Check that your website functions correctly, and visit this repository periodically for the latest updates.


## 🔥 DDoS Mitigation (Highly Recommended)
Enabling DDoS protection in the `Security` tab is also recommended. Navigate to `DDoS` and click `Deploy a DDoS override`.

### Configuration
1. **Override name:** DDoS L7 ruleset
2. **Ruleset action:** Block
3. **Ruleset sensitivity:** Default


## 🤔 Help
If you have any questions or need help with the expressions, feel free to open an [Issue](https://github.com/sefinek/Cloudflare-WAF-Expressions/issues). I'll be happy to assist you.


## 🤝 Pull requests
If you have any suggestions or improvements, feel free to open a [Pull request](https://github.com/sefinek/Cloudflare-WAF-Expressions/pulls). Your contributions are highly appreciated and will help keep this list up-to-date and effective against the latest threats.


## 🔖 License
This project is licensed under the [MIT License](LICENSE).