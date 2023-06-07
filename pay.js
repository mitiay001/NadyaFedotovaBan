var expenses = []; // Массив для хранения расходов

function addExpense() {
    var expenseNameInput = document.getElementById('expense-name-input');
    var expenseAmountInput = document.getElementById('expense-amount-input');
    var expenseDateInput = document.getElementById('expense-date-input');

    var expenseName = expenseNameInput.value;
    var expenseAmount = parseFloat(expenseAmountInput.value);
    var expenseDate = new Date(expenseDateInput.value);

    if (expenseName !== '' && !isNaN(expenseAmount)) {
        var expense = {
            name: expenseName,
            amount: expenseAmount,
            date: expenseDate
        };

        expenses.push(expense); // Добавляем расход в массив

        // Отобразить расход в списке
        var expenseList = document.getElementById('expense-list');
        var newExpenseItem = document.createElement('li');
        newExpenseItem.textContent = expenseName + ' - ' + expenseAmount + ' - ' + expenseDate.toDateString();
        expenseList.appendChild(newExpenseItem);

        expenseNameInput.value = '';
        expenseAmountInput.value = '';
        expenseDateInput.value = '';

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
        total += expenses[i].amount;
    }
    return total;
}

function updateTotalExpenses() {
    var totalExpenses = calculateTotalExpenses();
    var totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.textContent = 'Общая сумма расходов: ' + totalExpenses;
}

function filterExpensesByDate() {
    var startDateInput = document.getElementById('start-date-input');
    var endDateInput = document.getElementById('end-date-input');

    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);

    var filteredExpenses = expenses.filter(function(expense) {
        return expense.date >= startDate && expense.date <= endDate;
    });

    displayExpenses(filteredExpenses);
}

function displayExpenses(expensesToDisplay) {
    var expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    for (var i = 0; i < expensesToDisplay.length; i++) {
        var expense = expensesToDisplay[i];

        var newExpenseItem = document.createElement('li');
        newExpenseItem.textContent = expense.name + ' - ' + expense.amount + ' - ' + expense.date.toDateString();

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', deleteExpense.bind(null, i));

        newExpenseItem.appendChild(deleteButton);
        expenseList.appendChild(newExpenseItem);
    }
}

// Инициализация обработчиков событий
document.getElementById('add-expense-button').addEventListener('click', addExpense);

document.getElementById('start-date-input').addEventListener('change', filterExpensesByDate);
document.getElementById('end-date-input').addEventListener('change', filterExpensesByDate);

updateTotalExpenses();
displayExpenses(expenses);
