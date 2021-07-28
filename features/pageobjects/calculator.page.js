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

    messageAssertions(message){
        if(message=="error"){
            pass
        }else{
            pass
        }
    }



    async calculate(parkingLot, startDate, startTime,startTZ, endDate, endTime, endTz) {
        let patternDate = /([1-9]|1[0-2])\/([1-9]|[12]\d|30|31)\/(\d{4})/;
        let patternTime = /([0-9]|1[0-2]):([0-5][0-9])/;

        chaiAssert.typeOf(parkingLot,'string');
        chaiExpect(startDate).to.match(patternDate,'Incorrect date format')
        chaiExpect(startTime).to.match(patternTime,'Incorrect time format')
        chaiExpect(endDate).to.match(patternDate,'Incorrect date format')
        chaiExpect(endTime).to.match(patternTime,'Incorrect time format')

        await (await this.selectParkingLot).setValue(parkingLot);
        await (await this.inputStartingDate).setValue(startDate);
        await (await this.inputStartingTime).setValue(startTime);  
        if(startTZ === 'AM'){
            await (await this.inputStartingTimeAm).click();  
        }else{
            await (await this.inputStartingTimePm).click();
        }
        await (await this.inputLeavingDate).setValue(endDate);
        await (await this.inputLeavingTime).setValue(endTime);
        if(endTZ === 'AM'){
            await (await this.inputLeavingTimeAm).click();  
        }else{
            await (await this.inputLeavingTimePm).click();
        } 

        await (await this.submitButton).click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('parkcalc');
    }
}

module.exports = new CalculatorPage();
