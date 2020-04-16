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

tipsJohn.calcTip();

console.log('John and his family bills: ' + tipsJohn.bills + ' ' + 'John and his family final paid: ' + tipsJohn.finalPaid);


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

tipsMark.calcTip();

console.log('Mark and his family bills: ' + tipsMark.bills + ' ' + 'Mark and his family final paid: ' + tipsMark.finalPaid);


function averageTips (tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum+= tips[i];
    }
    return sum / tips.length;
}

console.log('Mark and his family paid an average tip of ' + averageTips(tipsMark.tips));
console.log('John and his family paid an average tip of ' + averageTips(tipsJohn.tips));

if (averageTips(tipsMark.tips) > averageTips(tipsJohn.tips)) {
    console.log('Mark and his family paid the highest tips on average');
} else if (averageTips(tipsMark.tips) < averageTips(tipsJohn.tips)) {
    console.log('John and his family paid the highest tips on average');
} else {
    console.log('John and Mark paid the same tips average');
}