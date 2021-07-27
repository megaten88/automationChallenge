const Page = require('./page');
const chai = require('chai');
const chaiAssert = chai.assert;
const chaiExpect = chai.expect;

const selectors = {
    parkingLot:'#ParkingLot',
    valetParking: 'option[value="Valet"]',
    shortParking: 'option[value="Short"]',
    economyParking: 'option[value="Economy"]',
    longGarageParking: 'option[value="Long-Garage"]',
    longSurfaceParking: 'option[value="Long-Surface"]',
    startingDate: '#StartingDate',
    startingTime: '#StartingTime',
    startingTimeAm: '//input[name="StartingTimeAMPM" and value="AM"]',
    startingTimePm: '//input[name="StartingTimeAMPM" and value="PM"]',
    leavingDate: '#LeavingDate',
    leavingTime: '#LeavingTime',
    leavingTimeAm: '//input[name="LeavingTimeAMPM" and value="AM"]',
    leavingTimePm: '//input[name="LeavingTimeAMPM" and value="PM"]',
    calculateButton: 'input[name="Submit"]',
    totalValue:'span.SubHead > b',
    timeCalculation: 'span.BodyCopy > b'


};
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectParkingLot () { return $(selectors.parkingLot) };
    get optionValetParking () { return $(selectors.valetParking) };
    get optionShortParking () { return $(selectors.shortParking) };
    get optionEconomyParking () { return $(selectors.economyParking) };
    get optionLongGarageParking () { return $(selectors.longGarageParking) };
    get optionLongSurfaceParking () { return $(selectors.longSurfaceParking) };
    get inputStartingDate () { return $(selectors.startingDate) };
    get inputStartingTime () { return $(selectors.startingTime) };
    get inputStartingTimeAm () { return $(selectors.startingTimeAm) };
    get inputStartingTimePm () { return $(selectors.startingTimePm) };
    get inputLeavingDate () { return $(selectors.leavingDate) };
    get inputLeavingTime () { return $(selectors.leavingTime) };
    get inputLeavingTimeAm () { return $(selectors.leavingTimeAm) };
    get inputLeavingTimePm () { return $(selectors.leavingTimePm) };
    get submitButton () {return $(selectors.calculateButton)};
    get spanTotalValue () {return $(selectors.totalValue)};
    get spantTimeCalculation () {return $(selectors.timeCalculation)};
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    fieldsAssertions(){
        expect(this.selectParkingLot).toBeDisplayed;
    }

    async calculate(){
        await (await this.submitButton).click()
    }

    async enterValues (parkingLot, startDate, startTime,startTZ, endDate, endTime, endTz) {
        let patternDate = /([\d]*)\/([\d]*)\/([\d]*)/;
        let patternTime = /(^[0-9][0-2]?):([0-5][0-9])/;

        chaiAssert.typeOf(parkingLot,'string');
        chaiAssert.match(startDate,patternDate,'Matches the correct date format');
        chaiAssert.match(startTime,patternTime, 'Matches the correct time format');
        chaiAssert.match(endDate,patternDate,'Matches the correct date format');
        chaiAssert.match(endTime,patternTime, 'Matches the correct time format');
        
        // await (await this.inputUsername).setValue(username);
        // await (await this.inputPassword).setValue(password);
        // await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('parkcalc');
    }
}

module.exports = new CalculatorPage();
