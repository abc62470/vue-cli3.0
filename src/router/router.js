import Vue from 'vue'
import vueRouter from 'vue-router'
// import Home from './views/home.vue'
const Index = () => import('../views/index.vue')
const Home = () => import('../views/home/home.vue')
const Message = () => import('../views/message/message.vue')
const Login = () => import('../views/login/login.vue')
const Personal = () => import('../views/personal/personal.vue')
const Search = () => import('../views/addClient/search.vue')
const AddClient = () => import('../views/addClient/addClient.vue')
const Setting = () => import('../views/setting/setting.vue')
const Passwd = () => import('../views/setting/passwd.vue')
const BankCard = () => import('../views/setting/bankCard.vue')
const PhoneNum = () => import('../views/setting/phoneNum.vue')
const AboutUs = () => import('../views/setting/aboutUs.vue')
const Feedback = () => import('../views/setting/feedback.vue')
const Forget = () => import('../views/login/forget.vue')
const News = () => import('../views/news/news.vue')
const Detail = () => import('../views/news/detail.vue')
const DetailClient = () => import('../views/detailClient/detailClient.vue')
const AddLinkman = () => import('../views/detailClient/addLinkman.vue')
const ClientFol = () => import('../views/detailClient/clientFol.vue')
const FolMsg = () => import('../views/detailClient/folMsg.vue')
const AddFol = () => import('../views/detailClient/addFol.vue')
const RegTrademark = () => import('../views/detailClient/regtrademark.vue')
const RegDomain = () => import('../views/detailClient/regdomain.vue')

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          alias: '/'
        },
        {
          path: 'message',
          name: 'message',
          component: Message
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
          requireAuth: true
        }
    },
    {
      path: '/addClient',
      name: 'addClient',
      component: AddClient,
      meta: {
          requireAuth: true
        }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {
          requireAuth: true
        }
    }, 
    {
      path: '/setting/passwd',
      name: 'passwd',
      component: Passwd,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/setting/bankCard',
      name: 'bankCard',
      component: BankCard,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/setting/phoneNum',
      name: 'phoneNum',
      component: PhoneNum,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/setting/aboutUs',
      name: 'aboutUs',
      component: AboutUs,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/setting/feedback',
      name: 'feedback',
      component: Feedback,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/detailClient',
      name: 'detailClient',
      component: DetailClient,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/addLinkman',
      name: 'addLinkman',
      component: AddLinkman,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/clientFol',
      name: 'clientFol',
      component: ClientFol,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/folMsg',
      name: 'folMsg',
      component: FolMsg,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/addFol',
      name: 'addFol',
      component: AddFol,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/regtrademark',
      name: 'regtrademark',
      component: RegTrademark,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/regdomain',
      name: 'regdomain',
      component: RegDomain,
      meta: {
        requireAuth: true
      }
    }
    
    
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (localStorage.token) {
      next();
    } else{
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else{
    next();
  }
  next();
})

export default router