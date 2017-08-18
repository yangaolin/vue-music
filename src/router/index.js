import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'compontents/recommend/recommend'
import Singer from 'compontents/singer/singer'
import Rank from 'compontents/rank/rank'
import Search from 'compontents/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
    	path: '/singer',
    	component: Singer
    },
    {
    	path: '/rank',
    	component:Rank
    },
    {
    	path: 'search',
    	component: Search
    }
  ]
})
