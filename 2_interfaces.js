var rect1 = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 25,
        heigth: 5
    }
};
rect2.color = '#fhg';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '334',
    size: {
        width: 23,
        heigth: 4
    },
    getArea: function () {
        return this.size.width * this.size.heigth;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
