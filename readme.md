## Repo for Apply digital ##
# 1. Framework Selection:
### Selected Playwright as test automation framework ###
### Because I feel most confortable using it as it is the latest test framework that I have been using in my currents projects ###

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

Automated test cases:

1. Test case number 1: User signs up. [PRE-CONDITION]
2. Test case number 9: Success product purchase flow.
3. Performance and accessibility test. For this test cases we added lighthouse dependencies to the automation project.


