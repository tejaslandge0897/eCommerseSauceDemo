import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CartPage } from "../pages/CartPage"
import { CheckoutPage } from "../pages/CheckOutPage"
import { CheckoutOverviewPage } from "../pages/CheckOutOverViewPage"
import { CheckoutCompletePage } from "../pages/CheckOutCompletePage"

type Fixtures ={
    loginPage:LoginPage
    productPage:ProductPage
    cartPage:CartPage
    checkoutPage:CheckoutPage
    checkoutOverviewPage:CheckoutOverviewPage
    checkoutCompletePage:CheckoutCompletePage
}

export const test=base.extend<Fixtures>({
    loginPage:async({page},use)=>{
        await use (new LoginPage(page))
    },
    productPage:async({page},use)=>{
        await use (new ProductPage(page))
    },
    cartPage:async({page},use)=>{
        await use (new CartPage(page))
    },
    checkoutPage:async({page},use)=>{
        await use (new CheckoutPage(page))
    },
    checkoutOverviewPage:async({page},use)=>{
        await use (new CheckoutOverviewPage(page))
    },
    checkoutCompletePage:async({page},use)=>{
        await use (new CheckoutCompletePage(page))
    }
})

export {expect} from "@playwright/test"