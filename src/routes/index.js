
import { Redirect } from 'react-router-dom'
import JMDiscover from '@/pages/discover/index'
import JMRecommend from '@/pages/discoverRecommend/index'
import JMRanking from '@/pages/discoverRanking/index'
import JMPlaylist from '@/pages/discoverPlaylist/index'
import JMRadio from '@/pages/discoverRadio/index'
import JMArtist from '@/pages/discoverArtist/index'

import JMMine from '@/pages/mine/index'
import JMFriend from '@/pages/friend/index'

const routes = [
  { path: '/', exact: true, render: () => <Redirect to='/discover' /> },
  {
    path: '/discover',
    component: JMDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: JMRecommend
      },
      {
        path: '/discover/ranking',
        component: JMRanking
      },
      {
        path: '/discover/playlist',
        component: JMPlaylist
      },
      {
        path: '/discover/djradio',
        component: JMRadio
      },
      {
        path: '/discover/artist',
        component: JMArtist
      }
    ]
  },
  { path: '/mine', component: JMMine },
  { path: '/friend', component: JMFriend }
]

export default routes
