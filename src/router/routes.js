
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '', 
        component: () => import('pages/Index.vue') 
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('pages/About.vue')
      }
    ]
  },
  {
    path: '/maintenance',
    component: () => import('layouts/MaintenanceLayout.vue'),
    children: [{ 
        name: 'Maintenance',
        path: '', 
        component: () => import('pages/Maintenance.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
