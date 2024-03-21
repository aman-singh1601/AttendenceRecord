import React from 'react';

import Dashboard from "@/pages/dashboard/Dashboard";

import Auth from "@/pages/auth/Auth";
import UserRecord from '@/pages/attendence/UserRecord';
import MarkUsers from '@/pages/attendence/MarkUsers';


interface Route {
    path: string,
    component: React.ReactNode
}


const AuthProtectedRoutes: Route[] = [
    { path: '/home', component: <Dashboard/> },
    { path: '/:id', component: < UserRecord/> },
    { path: '/attendence', component: < MarkUsers/> }
];

const PublicRoutes = [
    { path: '/auth', component: <Auth/>},
]

export { AuthProtectedRoutes, PublicRoutes };