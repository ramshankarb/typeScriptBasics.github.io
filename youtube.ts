class Youtube {
	constructor(public title: string, public views: number, public likes: number, public dislikes: number, public shares: number) {
		this.views = views;
		this.likes = likes;
		this.dislikes = dislikes;
		this.shares = shares;

	}
	getTitle = () => {
		return this.title
	}
	getNumberofViews = () => {
		return this.views
	}
	getNumberoflikes = () => {
		return this.likes
	}
	getNumberofshares = () => {
		return this.shares
	}
	getNumberofdislikes = () => {
		return this.dislikes
	}
}
let salman = new Youtube("Bodyguard", 255, 107, 4, 2)
let hrithik = new Youtube("Krazy 4", 220, 97, 2, 5)
let sharukh = new Youtube("New Year", 357, 147, 3, 1)
console.log("Below is the details of Salman's Video")
console.log("Title: " + salman.getTitle())
console.log("Views: " + salman.getNumberofViews())
console.log("Likes: " + salman.getNumberoflikes())
console.log("Dislikes: " + salman.getNumberofdislikes())
console.log("Shares: " + salman.getNumberofshares())
