
import { test } from '../fixtures/testFixure';
import userData from '../test-data/testData.json';

// Unique Email
function getUniqueEmail() {
    return `karthikthulasimani48+${Date.now()}@gmail.com`;
}

test.describe('Practice Software Testing - End to End', () => {

    // Test 1
    test('User Registration', async ({ registerPage }) => {

        const email = getUniqueEmail();

        await registerPage.register(
         userData.firstName,
            userData.lastName,
            userData.dateOfBirth,
            userData.country,
            userData.postalCode,
            userData.houseNumber,
            userData.street,
            userData.city,
            userData.state,
            userData.phone,
            email,
            userData.password
        );

    });

    // Test 2
    test('Register and Login', async ({ registerPage, login }) => {

        const email = getUniqueEmail();

        await registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.dateOfBirth,
            userData.country,
            userData.postalCode,
            userData.houseNumber,
            userData.street,
            userData.city,
            userData.state,
            userData.phone,
            email,
            userData.password
        );

        await login.openLoginPage();

        await login.login(email,userData.password);

        await login.verifyLoginSuccess();

    });

    // Test 3
    test('Register Login and Search Product',async ({registerPage,login,homePage,product,cart}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Home
            await homePage.clickHome();

            // Search
            await homePage.searchProduct('Hammer');

            // Product
            await product.selectHammer();

            await product.verifyHammerProduct();

            await product.addToCart();

            // Cart
            await cart.verifyCartQuantity('1');

        }
    );

    // Test 4
    test('Register Login and Complete Checkout', async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Product
            await homePage.clickHome();

            await homePage.searchProduct('Hammer');

            await product.selectHammer();

            await product.verifyHammerProduct();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectCashOnDelivery();

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 5
    test('Register Login Sort Pliers and Bank Transfer Checkout',async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Product
            await homePage.clickHome();

            await homePage.searchProduct('PLIERS');

            await homePage.sortByPriceHighToLow();

            await product.selectCombinationPliers();

            await product.verifyCombinationPliers();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Bank Transfer
            await checkout.selectBankTransfer();

            await checkout.enterBankDetails(
            userData.bankDetails.bankName,
            userData.bankDetails.accountName,
            userData.bankDetails.accountNumber
);

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 6
    test('Validate logged-in user can select product using Price Range Search and complete purchase using Cash on Delivery',
        async ({registerPage,login,homePage,product,cart,checkout
        }) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login( email,userData.password);

            await login.verifyLoginSuccess();

            // Price Range
            await homePage.clickHome();

            await homePage.searchProduct('Hammer');

            await homePage.setPriceRange(10, 50);

            // Product
            await product.selectFiberglassHammer();

            await product.verifyFiberglassHammer();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectCashOnDelivery();

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 7
    test('Register Login Select Chisels Category and Complete Credit Card Checkout',async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Category
            await homePage.clickHome();

            await homePage.selectChiselsCategory();

            // Product
            await product.selectWoodCarvingChisels();

            await product.verifyWoodCarvingChisels();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectCreditCard();

            await checkout.enterCreditCardDetails(
            userData.creditCardDetails.cardNumber,
            userData.creditCardDetails.expirationDate,
            userData.creditCardDetails.cvv,
            userData.creditCardDetails.cardHolderName
);

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 8
    test('Register Login Select ForgeFlex Brand and Complete Buy Now Pay Later Checkout',async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Brand
            await homePage.clickHome();

            await homePage.selectForgeFlexToolsBrand();

            // Product
            await product.selectAdjustableWrench();

            await product.verifyAdjustableWrench();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectBuyNowPayLater();

            await checkout.selectTwelveMonthlyInstallment();

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 9
    test('Register Login Select Sustainability and Complete Gift Card Checkout',
        async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password);

            await login.verifyLoginSuccess();

            // Sustainability
            await homePage.clickHome();

            await homePage.selectSustainability();

            // Product
            await product.selectSafetyGoggles();

            await product.verifySafetyGoggles();

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.verifyCartQuantity('1');

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber));

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectGiftCard();

            await checkout.enterGiftCardDetails(
            userData.giftCardDetails.giftCardNumber,
            userData.giftCardDetails.validationCode
);

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

    // Test 10
    test('Register Login Select Rental Excavator and Complete Cash on Delivery Checkout',async ({registerPage,login,homePage,product,cart,checkout}) => {

            const email = getUniqueEmail();

            // Register
            await registerPage.register(
                userData.firstName,
                userData.lastName,
                userData.dateOfBirth,
                userData.country,
                userData.postalCode,
                userData.houseNumber,
                userData.street,
                userData.city,
                userData.state,
                userData.phone,
                email,
                userData.password
            );

            // Login
            await login.openLoginPage();

            await login.login(email,userData.password
            );

            await login.verifyLoginSuccess();

            // Rental
            await homePage.clickHome();

            await homePage.selectRentalCategory();

            // Product
            await product.selectExcavator();

            await product.verifyExcavator();

            await product.selectRentalDuration(4);

            await product.addToCart();

            // Cart
            await cart.openCart();

            await cart.clickProceedToCheckout();

            // Checkout
            await checkout.clickProceedStep2();

            await checkout.enterHouseNumber(String(userData.houseNumber)
            );

            await checkout.clickProceedStep3();

            // Payment
            await checkout.selectCashOnDelivery();

            await checkout.clickConfirm();

            await checkout.verifyPaymentSuccess();

            await checkout.clickFinalConfirm();

            await checkout.verifyOrderSuccess();

            // Sign Out
            await login.signOut();

        }
    );

});

