var posts=["2024/07/27/4DDiG/","2024/07/28/DocKer/","2024/08/09/QQ微信变声/","2024/08/12/ai图转视频/","2024/07/31/ai带货/","2024/07/29/bot/","2024/07/27/clash/","2024/08/02/codm美化/","2024/08/21/iOS证书/","2024/08/09/iOS越狱源/","2024/08/12/nas反向代理/","2024/08/12/pe工具箱/","2024/08/02/qq微信怎么安装apk-1/","2024/07/28/vue/","2024/08/09/youtube下载/","2024/08/09/书籍漫画报刊等/","2024/08/12/以图搜漫/","2024/08/12/内网穿透小工具/","2024/08/02/变声器/","2024/07/28/图床/","2024/08/12/在线模拟器游戏/","2024/07/28/安装Mysql/","2024/07/31/夸克自动化/","2024/07/27/完美解码/","2024/08/09/影视网站推/","2024/07/28/攻击/","2024/07/28/服务器安全/","2024/07/28/清理alist/","2024/07/31/漫画轻小说/","2024/08/08/软路由1/","2024/08/12/黏土网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };