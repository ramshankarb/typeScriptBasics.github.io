var Youtube = /** @class */ (function () {
    function Youtube(title, views, likes, dislikes, shares) {
        var _this = this;
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.shares = shares;
        this.getTitle = function () {
            return _this.title;
        };
        this.getNumberofViews = function () {
            return _this.views;
        };
        this.getNumberoflikes = function () {
            return _this.likes;
        };
        this.getNumberofshares = function () {
            return _this.shares;
        };
        this.getNumberofdislikes = function () {
            return _this.dislikes;
        };
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.shares = shares;
    }
    return Youtube;
}());
var salman = new Youtube("Bodyguard", 255, 107, 4, 2);
var hrithik = new Youtube("Krazy 4", 220, 97, 2, 5);
var sharukh = new Youtube("New Year", 357, 147, 3, 1);
console.log("Below is the details of Salman's Video");
console.log("Title: " + salman.getTitle());
console.log("Views: " + salman.getNumberofViews());
console.log("Likes: " + salman.getNumberoflikes());
console.log("Dislikes: " + salman.getNumberofdislikes());
console.log("Shares: " + salman.getNumberofshares());
