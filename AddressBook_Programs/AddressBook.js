class ContactDetails {
    /**
     * In this class create contact details as data members
     */
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailID;
    /**
     *  peremeterized constructor
     */
    ContactDetails(firstName, lastName, address, city, state, zipCode, phoneNumber, emailID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.emailID = emailID;
    }
    /**
     * default constructor
     */
    ContactDetails() {

    }
    /**
     * toString Method
     */
    toString() {
        return "First Name : " + this.firstName + "Last Name : " + this.lastName + "Address : " + this.address + "City : " + this.city + "State : " + this.state + "zip code : " + this.zipCode + "Phone Number : " + this.phoneNumber + "emailID : " + this.emailID;
    }
}
/**
 * Create Array and ContactDetails Objects
 */
contactList = new Array();
contact = new ContactDetails();
function addDetails() {
    /**
     * In this method Ability to add contact details to address book
     */
    contact.firstName = firstName('first name');
    contact.lastName = firstName('last name');
    contact.address = address('Address');
    contact.city = address('city');
    contact.state = address('State');
    contact.zipCode = zipCode();
    contact.phoneNumber = phoneNumber();
    contact.emailID = emailID();
    contactList.push(contact)
}
function printDetails() {
    /**
     * In this method print the Address book contact details
     */
    console.log(contactList);
}
function firstName(value) {
    /**
     * In this method validate the first name and last name
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function address(value) {
    /**
     * In this method validate the address, city and state
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function zipCode() {
    /**
     * In this method validate the zip code
     */
    let pattern = new RegExp('^[0-9]{6}$');
    let input;
    while (true) {
        input = prompt("Enter zip code (Enter 6 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function phoneNumber() {
    /**
     * In this method validate the mobile number
     */
    let pattern = new RegExp('^[7-9]{1}[0-9]{9}$');
    let input;
    while (true) {
        input = prompt("Enter Mobile Number (Enter 9 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function emailID() {
    /**
     * In this method validate the email
     */
    let pattern = new RegExp('^[A-Za-z]{3,20}[0-9]{0,10}[@]{1}[gmail.com]{9}$');
    let input;
    while (true) {
        input = prompt("Enter email ");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}