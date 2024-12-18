import { Page } from 'playwright';

export class ProductPage {
  constructor(private page: Page) {}

  // declare locators for Product Page
  public locators = {
    quantityInput: 'input[name="quantity"]',
    addToCartButton: 'div.product-information button.cart[type="button"]',
    viewProductButton: (productIndex: number) => `a[href="/product_details/${productIndex}"]`,
  }
  async navigateToProductsPage() {
    // it looks for the link to products page and click on it.
    await this.page.click('a[href="/products"]');
  }

  async addProductsToCart(productIndex: number, randomQuantity: number) {
    // it selects the 3rd product on the list, set quantity and click on AddToCart button.
    await this.page.click(await this.locators.viewProductButton(productIndex));
    await this.page.fill( await this.locators.quantityInput, randomQuantity.toString());
    await this.page.click(await this.locators.addToCartButton)
  }
  
  // navigate to the Cart page clicking on the link in the Success Modal after adding a product
  async navigateToCartFromModal(){
    await this.page.click('#cartModal a[href="/view_cart"]');
  }
}