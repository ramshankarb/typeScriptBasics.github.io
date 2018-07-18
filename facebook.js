var Facebook = /** @class */ (function () {
    function Facebook(Name, OtherName, location, Livesin, Birthday, Age, FamilyMembers, Contact, Emailid) {
        var _this = this;
        this.Name = Name;
        this.OtherName = OtherName;
        this.location = location;
        this.Livesin = Livesin;
        this.Birthday = Birthday;
        this.Age = Age;
        this.FamilyMembers = FamilyMembers;
        this.Contact = Contact;
        this.Emailid = Emailid;
        //getter methods
        this.getName = function () {
            return _this.Name;
        };
        this.getOtherName = function () {
            return _this.OtherName;
        };
        this.getlocation = function () {
            return _this.location;
        };
        this.getLivesin = function () {
            return _this.Livesin;
        };
        this.getBirthday = function () {
            return _this.Birthday;
        };
        this.getAge = function () {
            return _this.Age;
        };
        this.getFamilyMembers = function () {
            return _this.FamilyMembers;
        };
        this.getContact = function () {
            return _this.Contact;
        };
        this.getEmailid = function () {
            return _this.Emailid;
        };
        this.Name = Name;
        this.OtherName = OtherName;
        this.location = location;
        this.Livesin = Livesin;
        this.Birthday = Birthday;
        this.Age = Age;
        this.FamilyMembers = FamilyMembers;
        this.Contact = Contact;
        this.Emailid = Emailid;
    }
    return Facebook;
}());
var Ram = new Facebook("Ramshankar B", "Dimitri", "Chennai", "TamilNadu", "09/10/1993", 24, 5, 9962586093, "4612sainik@gmail.com");
console.log("Below is the detail of Rakesh's about section");
console.log("Name: " + Ram.getName());
console.log("Location: " + Ram.getlocation());
console.log("Lives in: " + Ram.getLivesin());
console.log("Birthday: " + Ram.getBirthday());
console.log("Age: " + Ram.getAge());
console.log("Family-members: " + Ram.getFamilyMembers());
console.log("Contact: " + Ram.getContact());
console.log("Email-id: " + Ram.getEmailid());
