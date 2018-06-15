const account = {
    name : 'Adam Doquiatan',
    income : [],
    expenses : [],
    addIncome : function (description, amount) {
        this.income.push({
            description : description,
            amount : amount
        })
    },
    addExpense : function (description, amount) {
        this.expenses.push({
            description : description,
            amount : amount
        })
    },
    getAccountSummary : function () {
        let incomeTotal = 0
        let expensesTotal = 0

        this.income.forEach(function (pay) {
            incomeTotal += pay.amount
        })
        for(i = 0; i < this.expenses.length; i++) {
            expensesTotal += this.expenses[i].amount
        }
        return `${this.name} has a balance of $${incomeTotal - expensesTotal}. $${incomeTotal} in income. $${expensesTotal} in expenses.`
    }
    
}

//1. add income array to account
//2. addIncome method -> description, amount
//3. Tweak getAccountSummary -> 

//Adam has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 550)
account.addExpense('Coffee', 2.50)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

