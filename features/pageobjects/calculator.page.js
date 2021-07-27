const Page = require('./page');
const selectors = {
    parkingLot:'select[name="ParkingLot"]',
    valetParking: 'option[value="Valet"]',
    shortParking: 'option[value="Short"]',
    economyParking: 'option[value="Economy"]',
    longGarageParking: 'option[value="Long-Garage"]',
    longSurfaceParking: 'option[value="Long-Surface"]',
    startingDate: ''

}
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new CalculatorPage();
