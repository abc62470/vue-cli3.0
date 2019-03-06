import axios from 'axios';
import Qs from 'qs';
import router from '@/router/router';

axios.defaults.baseURL = 'https://api.xn--mnq481g.xn--czr694b/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(config => {
  if (localStorage.token) {
      config.data.token = localStorage.token;
      // config.data.token = '3ea90b36f2a71254a4bd9a01999ae53s';
  }
  if(config.method=='post'){
    config.data = Qs.stringify(config.data);//防止post请求参数无法传到后台
  }
  return config
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // 发送请求后判断token时候有效
  if (response.data.code < 0 && response.data.msg == 'token不存在，请重新登录') {
    localStorage.removeItem('token');
    router.replace({
      path: '/login',
      query: { redirect: router.currentRoute.fullPath}
    });
  }
  return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios