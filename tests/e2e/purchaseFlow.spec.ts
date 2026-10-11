import {test, expect} from "../../fixtures/testFixtures"
import products from "../../test-data/products.json"    
import checkOut from "../../test-data/checkOut.json"

test("Complete Product Purchase Journey",async({page,productPage,cartPage,checkoutPage,checkoutOverviewPage,checkoutCompletePage})=>{

    //Login
    await page.goto('/inventory.html')
    await expect(page).toHaveURL(/inventory.html/)

    //Verify Product
    await expect(productPage.productItems).toHaveCount(6)
    
    //add Product to cart 
    await productPage.addProductToCart(products.backpack.name)

    //Open Cart
    await productPage.openCart()
   
    //Verify Cart
    await expect(cartPage.cartItems).toContainText(products.backpack.name)

    //Proceed to checkot
    await cartPage.checkout()

    await expect(page).toHaveURL(/checkout-step-one.html/)

    //Enter Customer info
    
    await checkoutPage.fillCustomerInformation(checkOut.customer.firstName,checkOut.customer.lastName,checkOut.customer.postalCode)
    await checkoutPage.continueToOverview()

    //verify product before placing the order

    await expect(checkoutOverviewPage.cartItems).toContainText(products.backpack.name)

    //verify order confirmation

    await checkoutOverviewPage.finishOrder()

    await expect(checkoutCompletePage.successMessage).toBeVisible()


})