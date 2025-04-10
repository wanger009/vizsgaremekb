
import { Product, Category } from '../lib/types';
import { products, categories, getProductById, getProductsByCategory, getFeaturedProducts, getProductsOnSale } from '../data/products';

/**
 * ProductService
 * 
 * Ez a szolgáltatás jelenleg a helyi adatokkal dolgozik,
 * de később könnyen kicserélhető adatbázis-kapcsolatra.
 */
export class ProductService {
  // Összes termék lekérése
  static async getAllProducts(): Promise<Product[]> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(products);
  }

  // Termék lekérése ID alapján
  static async getProductById(id: number): Promise<Product | undefined> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(getProductById(id));
  }

  // Termékek lekérése kategória alapján
  static async getProductsByCategory(category: string): Promise<Product[]> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(getProductsByCategory(category));
  }

  // Kiemelt termékek lekérése
  static async getFeaturedProducts(): Promise<Product[]> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(getFeaturedProducts());
  }

  // Akciós termékek lekérése
  static async getProductsOnSale(): Promise<Product[]> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(getProductsOnSale());
  }

  // Új termék hozzáadása
  static async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    // TODO: Később itt adatbázis hívás lesz
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId };
    return Promise.resolve(newProduct);
  }

  // Termék módosítása
  static async updateProduct(id: number, product: Partial<Product>): Promise<Product | undefined> {
    // TODO: Később itt adatbázis hívás lesz
    const existingProduct = getProductById(id);
    if (!existingProduct) return undefined;
    return Promise.resolve({ ...existingProduct, ...product });
  }

  // Termék törlése
  static async deleteProduct(id: number): Promise<boolean> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(true);
  }

  // Kategóriák lekérése
  static async getAllCategories(): Promise<Category[]> {
    // TODO: Később itt adatbázis hívás lesz
    return Promise.resolve(categories);
  }
}
