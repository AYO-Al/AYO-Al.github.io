var posts=["2023/11/23/DNS深入/","2023/03/02/Docker/","2023/03/16/HTTPD/","2023/01/16/ELK日志平台/","2022/03/10/JavaScript/","2022/10/16/Linux/","2023/01/20/Linux安全/","2023/01/25/Linux网络基础/","2022/10/16/Linux命令行/","2023/06/14/Prometheus/","2023/03/20/Nginx/","2023/03/02/ansible/","2023/03/14/keepalived/","2023/07/20/kubernetes网络/","2023/04/01/Nginx-all/","2023/05/07/shell/","2022/06/16/python基础/","2022/11/02/redis/","2022/12/10/三高数据库/","2023/03/10/文件共享服务/","2024/01/09/命令/","2023/06/02/zabbix/","2023/04/24/文件系统与磁盘/","2023/08/16/系统端口和普通用户/","2023/03/17/时间同步/","2022/08/10/爬虫初始/","2022/09/10/网络架构/","2023/05/08/自定义终止符/","2022/08/16/聚焦式爬虫/","2022/08/09/爬虫导论/","2023/04/20/防火墙/","2023/04/20/软件管理/","2023/01/15/Linux/Linux服务管理/","2022/06/20/Linux/常用内置函数/","2023/01/07/Linux/云计算/Linux日志管理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };