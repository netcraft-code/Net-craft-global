import type { NavigationTree } from '@/@types/navigation';
import { ICON_MAP } from '@/configs/icons'; // icons.ts se import



const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: '',
    icon: ICON_MAP['Dashboard'], 
    authority: [],
    subMenu: [],
  },
  {
    key: 'cities',
    path: '/cities',
    title: 'Cities',
    translateKey: '',
  icon: ICON_MAP['Cities'],
    authority: [],
    subMenu: [],
  },
   {
    key: 'families',
    path: '/families',
    title: 'Families',
    translateKey: '',
   icon: ICON_MAP['Families'],
    authority: [],
    subMenu: [],
  },
    {
    key: 'chat',
    path: '/chat',
    title: 'Chat',
    translateKey: '',
  icon: ICON_MAP['Chat'],
    authority: [],
    subMenu: [],
  },
];

export default navigationConfig;
