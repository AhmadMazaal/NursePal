export interface User {
    _id: string;
    firstName: string;
    lastName: string;
}

export interface DrawerIcon {
    label: string;
    icon: JSX.Element;
    route: string;
}

export interface DrawerScreen {
    name: string;
    component: React.FC;
    options?: any;
    label: string;
    route: string;
    icon: JSX.Element;
}