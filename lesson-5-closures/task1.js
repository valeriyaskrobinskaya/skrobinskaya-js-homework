var tipsJohn = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
    calcTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push((this.bills[i] / 100) * 20);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips.push((this.bills[i] / 100) * 15);
            } else {
                this.tips.push((this.bills[i] / 100) * 10);
            }
        }
        for (var i = 0; i < this.tips.length; i++) {
            this.finalPaid.push(this.tips[i] + this.bills[i]);
        }
    }
};

console.log('John family bills: ' + tipsJohn.bills + ' ' + 'John family final paid: ' + tipsJohn.finalPaid);

var tipsMark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalPaid: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips.push((this.bills[i] / 100) * 20);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.tips.push((this.bills[i] / 100) * 15);
            } else {
                this.tips.push((this.bills[i] / 100) * 25);
            }
        }
        for (var i = 0; i < this.tips.length; i++) {
            this.finalPaid.push(this.tips[i]+this.bills[i]);
        }
    }
};

console.log('Mark family bills: ' + tipsMark.bills + ' ' + 'Mark family final paid: ' + tipsMark.finalPaid);
