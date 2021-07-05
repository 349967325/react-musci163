import React from 'react'
import { Redirect } from 'react-router-dom'

const JMDiscover = React.lazy(() => import('@/pages/discover/index'))
const JMRecommend = React.lazy(() => import('@/pages/discoverRecommend/index'))
const JMRanking = React.lazy(() => import('@/pages/discoverRanking/index'))
const JMPlaylist = React.lazy(() => import('@/pages/discoverPlaylist/index'))
const JMRadio = React.lazy(() => import('@/pages/discoverRadio/index'))
const JMArtist = React.lazy(() => import('@/pages/discoverArtist/index'))
const JMMine = React.lazy(() => import('@/pages/mine/index'))
const JMFriend = React.lazy(() => import('@/pages/friend/index'))

const routes = [
  { path: '/', exact: true, render: () => <Redirect to='/discover' /> },
  {
    path: '/discover',
    component: JMDiscover,
    routes: [
      {
        path: '/discover',
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
