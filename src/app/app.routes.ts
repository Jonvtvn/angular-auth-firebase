import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'auth',
        children: [
            {
                path: 'sign-up',
                loadComponent: () =>
                    import('./pages/auth/sign-up/sign-up.component'),
            },
            {
                path: 'log-in',
                loadComponent: () =>
                    import('./pages/auth/log-in/log-in.component').then(m => m.LogInComponent),
            },
        ],
    },
];

export default routes;
