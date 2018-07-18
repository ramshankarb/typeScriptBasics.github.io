class Facebook {
	constructor(public Name: string, public OtherName: string, public location: string, public Livesin: string, public Birthday: any, public Age: number, public FamilyMembers: number, public Contact: number, public Emailid: string) {
		this.Name = Name;
		this.OtherName = OtherName;
		this.location = location;
		this.Livesin = Livesin;
		this.Birthday = Birthday;
		this.Age = Age;
		this.FamilyMembers = FamilyMembers;
		this.Contact = Contact;
		this.Emailid = Emailid;
    } //end constructor
    //getter methods
	getName = () => {
		return this.Name
	}
	getOtherName = () => {
		return this.OtherName
	}
	getlocation = () => {
		return this.location
	}
	getLivesin = () => {
		return this.Livesin
	}
	getBirthday = () => {
		return this.Birthday
	}
	getAge = () => {
		return this.Age
	}
	getFamilyMembers = () => {
		return this.FamilyMembers
	}
	getContact = () => {
		return this.Contact
	}
	getEmailid = () => {
		return this.Emailid
	}

}//end class

//object
let Ram = new Facebook("Ramshankar B", "Dimitri", "Chennai", "TamilNadu", "09/10/1993", 24, 5, 9962586093, "4612sainik@gmail.com")
console.log("Below is the detail of Rakesh's about section")
console.log("Name: " + Ram.getName())
console.log("Location: " + Ram.getlocation())
console.log("Lives in: " + Ram.getLivesin())
console.log("Birthday: " + Ram.getBirthday())
console.log("Age: " + Ram.getAge())
console.log("Family-members: " + Ram.getFamilyMembers())
console.log("Contact: " + Ram.getContact())
console.log("Email-id: " + Ram.getEmailid())

