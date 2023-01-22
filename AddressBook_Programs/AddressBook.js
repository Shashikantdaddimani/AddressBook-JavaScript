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