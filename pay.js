function addExpense() {
    var expenseInput = document.getElementById('expense-input');
    var expenseValue = expenseInput.value;
    
    if (expenseValue !== '') {
        var expenseList = document.getElementById('expense-list');
        var newExpenseItem = document.createElement('li');
        newExpenseItem.textContent = expenseValue;
        expenseList.appendChild(newExpenseItem);
        
        expenseInput.value = '';
    }
}
