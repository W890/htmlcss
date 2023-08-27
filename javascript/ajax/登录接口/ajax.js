// 公共地址
let BACEURL = 'http://wish.byesame.com/'

function ajax({method,url,data,success,wh}) {
    // 准备ajax
    var xhr = new XMLHttpRequest();
    // 拼接公共域名
    url = BACEURL+url
    //   判断get/post
    if (method == "get") {
      // 拼接参数
      let str = "";
      if(wh){
        str += data.id
        url = url + str ;
      } else {
        for (var i in data) {
          str += i + "=" + data[i] + "&";
        }
        url = url + "?" + str.substring(0, str.length - 1);
      }
    }
    // 拨号
    xhr.open(method, url);
    //设置请求头
 if (method=='post') {
    xhr.setRequestHeader("Content-type", "application/json");
 }
    // 判断token
    let token = localStorage.getItem('token')
    if (token) {
        xhr.setRequestHeader("token",token);
    }
    if (method == "get") {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(data));
    }
    // 处理接受到的数据
    xhr.onload = function () {
      success(JSON.parse(xhr.responseText));
    };
  }
  