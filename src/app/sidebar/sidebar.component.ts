import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard', title: 'General Info', icon: 'ti-panel', class: '' },
    // { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    // { path: 'table', title: 'List of orders', icon: 'ti-view-list-alt', class: '' },
    // { path: 'icons', title: 'Statistics', icon: 'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Archive', icon: 'ti-map', class: '' },
    // { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
    
    { path: 'dashboard', title: 'General Info',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'icons', title: 'List of orders',  icon:'ti-view-list-alt', class: '' },
    { path: 'maps', title: 'Archive',  icon:'ti-map', class: '' },
    { path: 'table', title: 'Statistics',  icon:'ti-pencil-alt2', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
