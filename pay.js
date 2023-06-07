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
    var totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.textContent = 'Общая сумма расходов: ' + totalExpenses;
}

function filterExpenses() {
    var startDateInput = document.getElementById('start-date-input');
    var endDateInput = document.getElementById('end-date-input');

    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);

    var filteredExpenses = expenses.filter(function(expense) {
        return expense.date >= startDate && expense.date <= endDate;
    });

    displayExpenses(filteredExpenses);
}

function sortExpensesByAmount() {
    var sortedExpenses = expenses.sort(function(a, b) {
        return a.amount - b.amount;
    });

    displayExpenses(sortedExpenses);
}

function displayExpenses(expensesToDisplay) {
    var expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    for (var i = 0; i < expensesToDisplay.length; i++) {
        var expense = expensesToDisplay[i];

        var newExpenseItem = document.createElement('li');
        newExpenseItem.textContent = expense.name;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', deleteExpense.bind(null, i));

        newExpenseItem.appendChild(deleteButton);
        expenseList.appendChild(newExpenseItem);
    }
}

// Инициализация обработчиков событий и обновление списка расходов
document.getElementById('expense-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addExpense();
    }
});

updateTotalExpenses
