import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/pages/Home')),
    authority: []
  },
  {
    key: 'Cities',
    path: '/cities',
    component: lazy(() => import('@/pages/Cities')),
    authority: []
  },
  {
    key: 'families',
    path: '/families',
    component: lazy(() => import('@/pages/Families')),
    authority: []
  },
  // {
  //   key: 'files',
  //   path: '/dashboard/files',
  //   component: lazy(() => import('@/pages/examples/Files')),
  //   authority: []
  // },
  {
    key: 'chat',
    path: '/chat',
    component: lazy(() => import('@/pages/Chat')),
    authority: []
  },
]
