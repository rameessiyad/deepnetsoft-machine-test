export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  menuId: string;
}

export interface Menu {
  _id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
