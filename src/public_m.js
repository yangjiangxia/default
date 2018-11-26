import router from './router'





var sd_iux = "http://youpin.cangniao.cc/"  /*线下*/
//var sd_iux = "http://youpin.cangniaowl.com/"  /*线上*/


//跳转商城后台线上 线下链接
var enter_url='http://web.hzshop.com/'      /*线下*/
//var enter_url='http://web.cangniaowl.com/'  /*线上*/

export default {
    install(Vue, options) {

        Vue.prototype.sd_iux = sd_iux
        Vue.prototype.enter_url = enter_url



        /*自由设置返回错误状态*/
        Vue.prototype.post2 = function (url, cn, xy) {
            if (!cn) {
                cn = {}
            }
            cn.token = localStorage.getItem('token');
            this.$http.post(sd_iux + url, cn).then((response) => {

              xy(response.data);

            }, (response) => {
              // this.hf("login")
            });
        }


        Vue.prototype.post = function (url, cn, xy,lock) {
           if(lock){
             this.lock=true;
           }
        if (!cn) {
          cn = {}
        }
        cn.token = localStorage.getItem('token');
        this.$http.post(sd_iux + url, cn).then((response) => {
          if (response.data.err_code === '00001' || response.data.err_code === '00002') {
            return false;
          }
          if(response.data.return_code == 'FAIL'){
            this.$alert(response.data.return_msg, '提示', {
              type: 'warning',
              center: true
            })
            if(lock){
              this.lock=false;
            }
            return false;
          }

          xy(response.data.data, response.data)

        }, (response) => {
          // this.hf("login")
        });
      }


      Vue.prototype.post3 = function (url, cn, xy,lock) {
        if(lock){
          this.lock=true;
        }
        if (!cn) {
          cn = {}
        }
        cn.token = localStorage.getItem('token');
        this.$http.post(enter_url + url, cn).then((response) => {
          if (response.data.err_code === '00001' || response.data.err_code === '00002') {
            this.hf('admin/login');
            return false;
          }
          if(response.data.return_code == 'FAIL'){
            this.$alert(response.data.return_msg, '提示', {
              type: 'warning',
              center: true
            })
            if(lock){
              this.lock=false;
            }
            return false;
          }

          xy(response.data.data, response.data)

        }, (response) => {
          // this.hf("login")
        });
      }

        Vue.prototype.ge_t= function (url, cn, xy,lock) {
           if(lock){
             this.lock=true;
           }
        if (!cn) {
          cn = {}
        }
        cn.token = localStorage.getItem('token');
        this.$http.get(enter_url + url, cn).then((response) => {
          if (response.data.err_code === '00001' || response.data.err_code === '00002') {
            return false;
          }
          if(response.data.return_code == 'FAIL'){
            this.$alert(response.data.return_msg, '提示', {
              type: 'warning',
              center: true
            })
            if(lock){
              this.lock=false;
            }
            return false;
          }

          xy(response.data.data, response.data)

        }, (response) => {
          // this.hf("login")
        });
      }


      Vue.prototype.hf = function (url, cu) { //路由跳转


              router.push({
                path:  url,
                query: cu
              })

        }


        //获取cookie
        Vue.prototype.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }

        Vue.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            console.info(document.cookie);
        }

        Vue.prototype.yanza = {
            mail: function (a) {//邮箱
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {//电话
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {//正则身份证
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {//
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };

        Vue.filter("baoliu", function (t) { //保留两位小数点
            return parseFloat(t).toFixed(2)
        })
        Vue.prototype.time_c = function (t) {  //时间戳转变
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
            Month < 10 ? Month = 0 + '' + Month : Month = Month
            return Year + "-" + Month + "-" + Data
        }
        Vue.prototype.time_d = function (t) { //
        let time = new Date()
        time.setTime(t * 1000)
        let Year = time.getFullYear(),
          Month = time.getMonth() + 1,
          Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
          hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
          Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
          Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
        Month < 10 ? Month = 0 + '' + Month : Month = Month
        return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
      }


      //拼接url
      Vue.prototype.urlencode = function (data) {  // console.log(this.urlencode({'aa':'啊水电费撒地方','bb':'啊水电费撒地方'}));
        var _result = [];
        for (var key in data) {
          var value = data[key];
          if (value.constructor == Array) {
            value.forEach(function (_value) {
              _result.push(key + "=" + _value);
            });
          } else {
            _result.push(key + '=' + value);
          }
        }

        return _result.join('&');
      }

      Vue.prototype.fenxiang = function (company, sd_us, shop_logo, desc) { //分享

        wx.ready(function () {
          wx.onMenuShareTimeline({
            title: company, // 分享标题
            link: sd_us, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shop_logo, // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
          wx.onMenuShareAppMessage({
            title: company,
            desc: desc,
            link: sd_us,
            imgUrl: shop_logo,
            trigger: function (res) {

            },
            success: function (res) {

            },
            cancel: function (res) {

            }
          });
        })
      }


      Vue.prototype.getsign = function (datex) {  //md5 加密

            var sdsr_sd = {}
            sdsr_sd.timestamp = new Date().getTime()
            Object.assign(sdsr_sd, datex)
            let jian = Object.keys(sdsr_sd)
            jian.sort()
            var sd_srttx = {}
            jian.map(function (a) {
                sd_srttx[a] = sdsr_sd[a]
            })


            return md5.hexMD5(sd_srttx)
        }

        /*token验证*/

      Vue.prototype.token_Verification =function () {
          let new_token=localStorage.getItem('token');
          if(!new_token){
          }
      }

      Vue.prototype.tab_add =function (name,path,id) {
        var data={
          'name':name,
          'path':path
        }
        if(id){
          data.id=id;
        }
        this.$store.state.editableTabs2.push(data);
        this.$store.state.index_active=this.$store.state.editableTabs2.length-1;
        this.hf(path)
      }
      Vue.prototype.tab_add2 =function (name,path) { //页面刷新时候 用
        if( this.$store.state.editableTabs2.length==0){
          this.$store.state.editableTabs2.push({'name':name,'path':path});
          this.$store.state.index_active=0;
          return false;
        }
      }
      Vue.prototype.tab_add3 =function (name,path) {  //新开页面过滤
        for(var i=0;i<this.$store.state.editableTabs2.length;i++){
          if(this.$store.state.editableTabs2[i].name==name){
            this.$store.state.index_active=i;
            this.hf(path)
            return  false
          }
        }
        this.$store.state.editableTabs2.push({'name':name,'path':path});
        this.$store.state.index_active=this.$store.state.editableTabs2.length-1;
        this.hf(path)
      }



      /*输入正整数  @keyup.native="proving1" */
      Vue.prototype.integer =function (index) {

        console.log(index)
        index= index.replace(/[^\.\d]/g,'');
        index= index.replace('.','');
        return  index
      }


      /*获取品牌列表*/
      Vue.prototype.get_brand_list=function (th) {
        th.post("admin/brand/lists",'',function(data){
          th.shop_list=data;
        })
      }





    }
}
