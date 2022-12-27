import { makeAutoObservable } from 'mobx'
import { TProduct } from '../types';

class FavoriteStore {
  favorites: TProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  createFavorite(product: TProduct) {
    this.favorites.push(product)
  }

  deleteFavorite(id: string) {
    this.favorites = this.favorites.filter(product => product.id !== id)
  }
}

export default new FavoriteStore()