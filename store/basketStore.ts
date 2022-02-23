import create from 'zustand';
import { IBasketItem } from '../components/basket/Basket';

interface basketStore {
    items: Array<IBasketItem>;
    addItem: (item: IBasketItem) => void;
    removeItem: (id: number) => void;
}

export const useStore = create<basketStore>(set => ({
    items: [],
    addItem: (item: IBasketItem) => set(state => ({
        items: state.items.concat([item])
    })),
    removeItem: (id: number) => set(state => ({
        items: state.items.filter((item, index) => index !== id)
    }))
}));