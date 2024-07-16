interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  id?: any;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  id?: any;
  children?: Array<Children>;
}
const menu: Array<Menu> = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },

  {
    icon: "nav-icon fa fa-cogs",
    title: "Motorlar",
    path: "/motorlar",
  },
  {
    icon: "nav-icon fa fa-bolt",
    path: "/sensorler",
    title: "Sensörler",
  },
];

export default menu;
