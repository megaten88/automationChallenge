const { Given, When, Then } = require('@cucumber/cucumber');

const CalculatorPage = require('../pageobjects/calculator.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: CalculatorPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await CalculatorPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

