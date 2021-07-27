Feature: The Parking Lot Calculator

  Scenario Outline: As a user, I can calculate the parking lot total issue

    Given I am on the calculator page
    When I add the values <parking>, <startDate>, <startTime>, <startAmPm>, <endDate>, <endTime>, <endAmPm> 
    Then I should see a flash message saying <message>

    Examples:
      | parking  | startDate  | startTime  | startAmPm  | endDate  | endTime  | endAmPm  | message                        |
      | parking  | startDate  | startTime  | startAmPm  | endDate  | endTime  | endAmPm  | message                        |
      | parking  | startDate  | startTime  | startAmPm  | endDate  | endTime  | endAmPm  | message                        |
