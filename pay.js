var expenses = []; // Массив для хранения расходов

function addExpense() {
    var expenseInput = document.getElementById('expense-input');
    var expenseValue = expenseInput.value;

    if (expenseValue !== '') {
        var expense = {
            name: expenseValue,
            amount: 0, // Добавьте дополнительные поля, если необходимо
            date: new Date()
        };

        expenses.push(expense); // Добавляем расход в массив

        // Отобразить расход в списке
        var expenseList = document.getElementById('expense-list');
        var newExpenseItem = document.createElement('li');
        newExpenseItem.textContent = expenseValue;
        expenseList.appendChild(newExpenseItem);

        expenseInput.value = '';

        updateTotalExpenses(); // Обновляем общую сумму расходов
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1); // Удаляем расход из массива по индексу

    // Удаляем элемент списка
    var expenseList = document.getElementById('expense-list');
    expenseList.removeChild(expenseList.childNodes[index]);

    updateTotalExpenses(); // Обновляем общую сумму расходов
}

function calculateTotalExpenses() {
    var total = 0;
    for (var i = 0; i < expenses.length; i++) {
        total += expenses[i].amount; // Предположим, что сумма расхода хранится в поле "amount"
    }
    return total;
}

function updateTotalExpenses() {
    var totalExpenses = calculateTotalExpenses();
    var totalExpensesElement =
