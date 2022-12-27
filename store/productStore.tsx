import { makeAutoObservable } from 'mobx';
import {TProduct} from "../types";

import krem from '../assets/крем.jpg';
import duhi from '../assets/duhi.jpg';
import kar from '../assets/karandash.jpg';
import ton from '../assets/ton.jpg';
import pudra from '../assets/pudra.jpg';
import gel from '../assets/gel.jpg';

class ProductStore {
  products: TProduct[] = [
    {
      name: 'Крем',
      price: 4000,
      count: 10,
      id: '43452',
      description: 'Ночной увлажняющий крем',
      photo: krem,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Духи',
      price: 6000 ,
      count: 5,
      id: '43782',
      description: 'Духи с нотками ванили и кокоса',
      photo: duhi,
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Карандаш для глаз',
      price: 1000,
      count: 1,
      id: '42360',
      description: 'Черный мягкий карандаш для глаз',
      photo: kar,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Тональная основа',
      price: 3000,
      count: 3,
      id: '43972',
      description: 'Плотная тональная основа',
      photo: ton,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Пудра',
      price: 4000,
      count: 0,
      id: '42375',
      photo: pudra,
      description: 'Белая рассыпчатая пудра',
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Гель для умывания',
      price: 2000,
      count: 5,
      id: '42701',
      description: 'Гель для умывания для проблемной кожи',
      photo: gel,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
  ]

  addCartCount(id: string) {
    this.products = this.products.map(product => (product.id === id ? { ...product, inCart: product.inCart + 1 } : product))
  }

  removeCartCount(id: string) {
    this.products = this.products.map(product => (product.id === id ? { ...product, inCart: 0} : product))
  }

  createFavorite(id: string) {
    this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: true } : product))
  }

  deleteFavorite(id: string) {
    this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: false } : product))
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export default new ProductStore();