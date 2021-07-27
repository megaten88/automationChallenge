const { Given, When, Then } = require('@cucumber/cucumber');

const CalculatorPage = require('../pageobjects/calculator.page');

const pages = {
    calculator: CalculatorPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I add the values (\w+), (\w+), (\w+), (\w+), (\w+), (\w+), (.+)$/, async (parkingLot, startDate, startTime,startTZ, endDate, endTime, endTz) => {
    await CalculatorPage.enterValues(parkingLot, startDate, startTime,startTZ, endDate, endTime, endTz)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

