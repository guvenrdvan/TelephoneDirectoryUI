import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/auth/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import path from 'path';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ɵBrowserGetTestability } from '@angular/platform-browser';
import { ReadVarExpr } from '@angular/compiler';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './guards/auth-guard.guard';



export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full', },
    { path: 'login', component: LoginComponent, canActivate: [authGuard] },
    { path: 'register', component: RegisterComponent },
    { path: ' user', component: UserComponent, },

    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'user',
                component: UserComponent,
                canActivate: [authGuard]
            }
        ]
    },
];
