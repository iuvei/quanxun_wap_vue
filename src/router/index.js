import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutew from '@/pages/home/route'

/*以下用const 定义后面又用箭头函数属于vue里面的懒加载*/
const Home1 = () => import('@/pages/home')
const Assure = () => import('@/pages/assure')
const Discount = () => import('@/pages/discount')
const News = () => import('@/pages/news')
const Search_result = () => import('@/components/search_result')
const Notice = () => import('@/components/notice.vue')
const DiscountDetail = () => import('@/pages/discount/detail')
const RecomendDetail = () => import('@/pages/discount/recomend.vue')
const NewsDetail = () => import('@/pages/news/news')
const Play = () => import('@/pages/play')
const Ceping1 = () => import('@/pages/ceping/ceping1')
const Ceping2 = () => import('@/pages/ceping/ceping2')
const Ceping3 = () => import('@/pages/ceping/ceping3')
const Ceping4 = () => import('@/pages/ceping/ceping4')
const Ceping5 = () => import('@/pages/ceping/ceping5')
const Ceping6 = () => import('@/pages/ceping/ceping6')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: HomeRoutew,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home1
                },
                {
                    path: '/assure',
                    name: 'assure',
                    component: Assure
                },
                {
                    path: '/discount',
                    name: 'discount',
                    component: Discount
                },
                {
                    path: '/play',
                    name: 'play',
                    component: Play
                },
                {
                    path: '/news',
                    name: 'news',
                    component: News
                },
                {
                    path: '/Search_result',
                    name: 'Search_result',
                    component: Search_result
                },
                {
                    path: '/notice',
                    name: 'notice',
                    component: Notice
                }

            ]
        },
        {
            path: '/discount/:a_id',
            name: 'DiscountDetail',
            component: DiscountDetail
        },
        {
            path: '/recomend/:a_id',
            name: 'RecomendDetail',
            component: RecomendDetail
        },
        {
            path: '/news/:num',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/ceping/ceping1',
            name: 'ceping1',
            component: Ceping1
        },
        {
            path: '/ceping/ceping2',
            name: 'ceping2',
            component: Ceping2
        },
        {
            path: '/ceping/ceping3',
            name: 'ceping3',
            component: Ceping3
        },
        {
            path: '/ceping/ceping4',
            name: 'ceping4',
            component: Ceping4
        },
        {
            path: '/ceping/ceping5',
            name: 'ceping5',
            component: Ceping5
        },
        {
            path: '/ceping/ceping6',
            name: 'ceping6',
            component: Ceping6
        }
    ],
    /* eslint-disable no-new */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
