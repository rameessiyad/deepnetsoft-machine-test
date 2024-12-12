export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  menuId: string;
}

export interface Menu {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
