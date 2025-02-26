import { IEvents } from "../components/base/events";

export interface ICart {
  items: Map<string, number>;
  add(id: string): void;
  remove(id: string): void;
}

export interface ICatalog {
  items: IProduct;
  setItems(items: IProduct[]): void;
  getProduct(id: string): IProduct;
}

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IOrderForm {
    payment?: string;
    address?: string;
    phone?: string;
    email?: string;
    total?: string | number;
}

export interface IOrder extends IOrderForm {
    items: string[];
}

export type OrderError = Partial<Record<keyof IOrder, string>>;

export interface IOrderResponse {
    id: string;
    total: number;
}

export interface IView {
    render(data?: object): HTMLElement;
}

export interface IViewConstructor {
    new(container: HTMLElement, events?: IEvents): IView;
}