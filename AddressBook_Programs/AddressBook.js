

class ContactDetails{
    /**
     * Contact details of addressBook
     */
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;
    /**
     * Prameterized Constructor
     */
    ContactDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
    }
    /**
     * default constructor
     */
   ContactDetails(){

    }
    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", zip code : " + this.zipCode + ", Phone Number : " + this.phoneNumber + ", emailId : " + this.emailId;
    }
}
/**
 * This Function Validate the FirstName And LastName
 */
function firstName(value){
   let pattern = new RegExp("^[A-Z]{1}[a-z]{2,}$");
   let input;
   while(true){
    input=prompt("Enter"+value+"(First Latter is UpperCase)");
    let status=pattern.test(input);
    if(status){
       break; 
    }  
   }
   return input;
}
/**
 * This function is Validate the Address,city,state.
 */
function address(value){
    let pattern = new RegExp("^[A-Z]{1}[a-z]{2,}$")
    let input;
    while(true){
        input=prompt("Enter"+value+"(First letter is UpperCase )");
        let status=pattern.test(input);
        if(status){
            break;
        }
    }
    return input;
}

/**
 * This function is Validate the ZipCode
 */
function zipCode(){
    let pattern =new RegExp("^[1-9]{1}[0-9]{5}$");
    let input;
    while(true){
        input=prompt("Enter Zip code (Zip code Contains 6 digits");
        let status = pattern.test(input);
        if(status){
            break;
        }
    }
    return input;
}
/**
 * This function is Validate the PhoneNumber
 */
function phoneNumber(){
    let pattern = new RegExp("^[6-9]{1}[0-9]{9}$");
    let input;
    while(true){
        input = prompt("Enter PhoneNumber (The Mobile Number contains ten digits and First digit contain inbetween 6-9 digit: )");
        let status = pattern.test(input);
        if(status){
            break;
        }
    }
    return input;
}
/**
 * This function is Validate the EmailId
 */
function emailId(value){
    let pattern = new RegExp("^[A-Za-z]{3,20}[0-9]{0,10}[@]{1}[gmail.com]{9}$");
    let input;
    while(true){
        input=prompt("Enter EmailId")
        let status =pattern.test(input);
        if(status){
            break;
        }
    }
    return input;
}
contactList =new Array();
/**
 * Method for adding the contact Details
 */
function addContactDetails(){
    contact = new ContactDetails();
    contact.firstName = firstName('first name');
    let status;
    status = contactList.filter(x => x.firstName == contact.firstName);
    if (status == 0) {
        contact.lastName = firstName('last name');
        contact.address = address('Address');
        contact.city = address('city');
        contact.state = address('State');
        contact.zipCode = zipCode();
        contact.phoneNumber = phoneNumber();
        contact.emailId = emailId();
        contactList.push(contact)
    }
    else {
        console.log(contact.firstName + " details is already exists");
    }

}
/**
 * function for Printing the Contact details
 */
function printContactDetails() {
   
    console.log(contactList);
}
/**
 * function for editing the contact details 
 */
function editContactDetails() {
    
    let input = prompt("Enter first name");
    let status = true;
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].firstName == input) {
            contactList.splice(i, 1);
            status = false;
            break;
        }
    }
    if (status == true) {
        console.log(input + " details not found");
    }
    else {
        addContactDetails();
    }

}
/**
 * function for deleting the contact details use firstName
 */
function deleteContactDetails(){
    let input =prompt("Enter first Name");
    let status=true;
    for(let i=0;i<contactList.length;i++){
        if(contactList[i].firstName==input){
            contactList.splice(i,1);
            status=false;
            break;
        }
    }
    if (status==true){
        console.log(input+" details are not found");

    }else{
        console.log(input+"details are deleted");
    }
}
/**
 * function for counting the total numbers of contact in array
 */
function countOfContact(){
    let count = contactList.length;
    console.log(" Count of contact details :"+count);
}
/**
 * function for searching person for perticular city or state;
 */
function personInCity() {   
    let contact = new Array();
    let name = prompt("Enter person first name");
    let city = prompt("Enter city name")
    contact.push(contactList.filter(x => x.firstName == name && x.city == city));
    if (contact.length == 0) {
        console.log(name + " details not found in " + city);
    }
    else {
        console.log(name + " details found in " + city);
        console.log(contact);
    }
}
/**
 * function for Printing the person In city
 */
function printPersonsInCity() {
    
    let contact = new Array();
    let city = prompt("Enter city name")
    contact.push(contactList.filter(x => x.city == city));
    if (contact.length == 0) {
        console.log("No details found in " + city);
    }
    else {
        console.log(contact);
    }
}