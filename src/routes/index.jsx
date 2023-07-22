import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';

import { HeaderOnlyLayout } from '@/components/Layout';
import routesConfig from '@/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: '/profile/:nickname', component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
