import { test, expect } from 'playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductPage } from '../../pages/product.page';
import { CartPage } from '../../pages/cart.page';
import {randomUser} from '../../utils/data-generator';
import { LoginPage } from '../../pages/login.page';
import { PaymentPage } from '../../pages/payment.page';

//Pre-condition
test.beforeEach('Register and login user', async ({page}) => {

  //Initializing loginPage.
  const loginPage = new LoginPage(page); 
  console.log('Precondition - Registering new user')

  //Navigate to Login and complete Sign-up test case as Pre-condition.
  await loginPage.navigateToLogin();
  await loginPage.completeSignUp(randomUser);
  await expect(page.getByText('Account Created!')).toBeVisible() //Validate if account created successful.
  await page.locator('[data-qa="continue-button"]').click()
}) 

test('Adding products to cart and completing checkout', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const paymentPage = new PaymentPage(page);
  let productIndex = 3
  const randomQuantity = Math.floor(Math.random() * 20) + 1;

  // Navigate to homepage -- no needed, after registration user is redirected to home page automatically.
  //await homePage.navigateToHomePage();
  
  // Navigate to Product Page.
  await productPage.navigateToProductsPage();

  // Select the 3rs product on the list, set random quantity, navigate to Cart.
  await productPage.addProductsToCart(productIndex, randomQuantity);
  await productPage.navigateToCartFromModal();

  // Validate quantity is ok and Proceed with the checkout. 
  await expect(page.locator('#product-' + productIndex).locator('td.cart_quantity').locator('button')).toHaveText(randomQuantity.toString())
  await cartPage.proceedToCheckout();

  // Complete payment information and validate final result.
  await paymentPage.placeOrder()
  await paymentPage.completePaymentInformation()

  await expect(page.getByText('Order Placed!')).toBeVisible();
  await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
  await expect(page.getByText('Download Invoice')).toBeVisible();

  });

  test.afterEach('Post-condition', async({page}) => {
    await page.click('a[href="/logout"]')
    await expect(page).toHaveURL(/login/)
  })