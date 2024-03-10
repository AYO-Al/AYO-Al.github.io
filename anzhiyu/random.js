var posts=["2021/09/20/MarkDown/web/JavaScript/","2021/11/03/MarkDown/web/pythonweb/","2023/04/22/MarkDown/云计算/RabbitMQ/","2021/06/15/MarkDown/python/python基础/python垃圾回收机制/","2021/02/15/MarkDown/python/python基础/python基础/","2021/04/04/MarkDown/python/python基础/常用内置函数/","2021/09/09/MarkDown/python/爬虫/增量式爬虫/","2021/08/17/MarkDown/python/爬虫/爬虫初始/","2021/08/17/MarkDown/python/爬虫/爬虫导论/","2021/09/09/MarkDown/python/爬虫/聚焦式爬虫/","2023/02/15/MarkDown/云计算/Linux/DNS与CDN/","2024/06/20/MarkDown/云计算/Linux/ELK日志平台/","2024/03/20/MarkDown/云计算/Linux/HTTPD/","2023/04/20/MarkDown/云计算/Linux/LVS/","2023/04/22/MarkDown/云计算/Linux/Linux安全/","2024/01/15/MarkDown/云计算/Linux/Linux/","2024/03/20/MarkDown/云计算/Linux/Linux日志管理/","2024/03/16/MarkDown/云计算/Linux/Linux服务管理/","2024/03/22/MarkDown/云计算/Linux/Linux网络基础/","2024/03/16/MarkDown/云计算/Linux/Nginx/","2024/03/17/MarkDown/云计算/Linux/keepalived/","2024/04/16/MarkDown/云计算/Linux/文件共享服务/","2024/05/22/MarkDown/云计算/Linux/文件系统与磁盘/","2024/04/16/MarkDown/云计算/Linux/时间同步/","2024/03/16/MarkDown/云计算/Linux/软件管理/","2024/05/11/MarkDown/云计算/Linux/防火墙/","2024/06/01/MarkDown/云计算/Nginx/反向代理/","2024/05/27/MarkDown/云计算/Nginx/Nginx-all/","2023/03/10/MarkDown/云计算/shell编程/shell/","2023/04/26/MarkDown/云计算/shell编程/shell高级编程/","2023/06/11/MarkDown/云计算/自动化运维/ansible/","2023/10/15/MarkDown/云计算/监控/Prometheus/","2023/07/15/MarkDown/云计算/容器/Docker/","2023/11/09/MarkDown/云计算/监控/Zabbix常用API/","2023/06/11/MarkDown/云计算/监控/zabbix/","2022/12/23/MarkDown/数据库/mysql/(转)mysql主从复制原理/","2023/01/17/MarkDown/数据库/mysql/MySQL8.0/","2022/09/23/MarkDown/数据库/mysql/mysql/","2022/08/20/MarkDown/数据库/redis/redis-trib.rb/","2022/11/23/MarkDown/数据库/mysql/三高数据库/","2022/06/15/MarkDown/计算机基础/网络/常用状态码/","2022/06/11/MarkDown/数据库/redis/redis/","2022/03/15/MarkDown/计算机基础/网络/网络架构/","2023/09/15/MarkDown/云计算/Linux/场景复现/系统端口和普通用户/","2022/02/20/MarkDown/计算机基础/网络/计网/","2023/03/15/MarkDown/云计算/shell编程/随笔/linux中的环境变量/","2023/03/18/MarkDown/云计算/shell编程/随笔/shell中set命令/","2023/03/22/MarkDown/云计算/shell编程/随笔/单引号与双引号区别/","2023/11/06/MarkDown/云计算/shell编程/随笔/自定义终止符/","2023/11/23/MarkDown/云计算/容器/知识小结/kubernetes网络/","2023/04/11/MarkDown/数据库/mysql/随笔/MySQL中关于自动提交过程标志位变化/","2023/09/17/MarkDown/数据库/mysql/数据库优化/数据库优化/","2023/12/15/MarkDown/云计算/shell编程/命令/命令/"];function toRandomPost(){
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