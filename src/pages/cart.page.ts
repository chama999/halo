import { Page } from 'playwright';

export class CartPage {
  constructor(private page: Page) {}

  public locators = {
    cartPageLink: 'a[href="/view_cart"]',
    checkoutPageLink: 'a[href="/checkout"]',
    proceedToCheckoutButton: () => this.page.getByText('Proceed To Checkout')
  }

  // this async function navigate users to cart page.
  async navigateToCartPage() { await this.page.click(this.locators.cartPageLink) }

  // below function navigate users to checkout page by clicking on the Proceed to checkout button. 
  async proceedToCheckout() {
    //Just for using different type of selectors.
    await this.locators.proceedToCheckoutButton().click();
  }

}