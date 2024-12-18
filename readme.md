## Repo for Apply digital ##
# 1. Framework Selection:
 * Selected test automation framework: PLAYWRIGHT.
 * Reason: I feel most comfortable using it as it is the latest test framework that I have been using in my currents projects.
 * Stack: Playwright, Typescript, Page object model, lighthouse, faker.

Test cases:

| ID | Name             | Pre-condition       | Steps | Expected results |
|----|------------------|---------------------|-------|------------------|
| 1  | User signs up.   | User doesn't exist  | 1. Navigate to login page 2. Complete username and email, then click submit. 3. Complete Account information 4. Click on Create Account button. | User is creatd and redirected to home page. |
| 2  | User Login   | Valid credentials for an existing user  | 1. Navigate to login page. 2. Set email and password. 3. Click on Login button | User is logged in and redirected to home page automatically. |
| 3  | Product Page validation  | User is logged   | 1. Click on Products link page.  | User is redirected to Products page. User sees Product Page elements.  |
| 4  | View Details of a product  | User is logged   | 1. Click on Products link page. 2. Click on "View Details" for some product on the list | User is redirected to View Product Details page. User sees Product details.  |
| 5  | Add single Product to the Cart | User is logged   | 1. Click on Products link page. 2. User click on "Add to cart" button  | User is redirected to Products page. User sees Product Page elements.  |
| 6  | Add mora than 1 product to the Cart   | User is logged   | 1. Click on Products link page. 2. Click on View Details link 3. Set product quantity and click on Add to Cart | The products are added to the cart and the product quantity is OK.  |
| 7  | Login with invalid credentials   |  | 1. Navigate to Login page. 2. Set invalid credentials and click on Login button.  | System shows an error "Your email or password is incorrect!" |
| 8  | Registering with duplicated email   | User is already registered.  | 1. Navigate to Login Page 2. Complete username and email, then click on Sign Up  | System displays an error "User already exists."  |
| 9  | Success product purchase flow | User is logged   | 1. Click on Products link page. 2. Click on View Details link 3. Set product quantity and click on Add to Cart 4. Click on Process to Checkout button. 5. Click on Place Order button 6. Complete payments details (Name on Card, Card Number, CVC and Expiration), then click on Pay and Confirm Order button. | 1. User sees a green message on the page "Your order has been placed successfully!" 2. System redirects users to payment done page and displays confirmation message and 2 buttons ("Download Invoice" and "continue")  |
|10 | Logout | User is logged | 1. Click on Logout | System redirect to login page | 

# 2. Automated test cases:

1. TC 1: [PRE-CONDITION] User signs up.
2. TC 9: Success product purchase flow.
3. Performance and accessibility test.
4. TC 10: [POST-CONDITION] Logout


# 3. Project structure:

project/
├── src/
│   ├── pages/
│   │   ├── cart.page.ts
│   │   ├── checkout.page.ts
│   │   ├── home.page.ts
│   │   ├── login.page.ts
│   │   ├── payment.page.ts
│   │   ├── product.page.ts
│   ├── tests/
│   │   ├── purchase.spec.ts
│   │   ├── performance.spec.ts
│   ├── utils/
│   │   └── data-generator.ts
├── lighthouse-reports/
├── package.json
├── playwright.config.ts
├── readme.md
├── tsconfig.json
└── package-lock.json


# 4. Setup

1. Create a folder and open the terminal in that folder.
2. execute:  git clone https://github.com/chama999/apply-digital
3. execute: cd apply-digital
4. execute: npm install
5. execute: npx playwright install 

# 5. How to run the tests
After cloning the repository and installed the dependencies, execute below commands to run tests:

* E2E Testing in headed mode: npx playwright test --headed
* Run only: performance and accessibility tests with lighthouse: npx playwright test --project=performance

