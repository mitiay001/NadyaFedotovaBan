// Получение элементов формы
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseDateInput = document.getElementById('expense-date');
const addExpenseButton = document.getElementById('add-expense-button');
const expenseList = document.getElementById('expense-list');
const filterStartDateInput = document.getElementById('start-date');
const filterEndDateInput = document.getElementById('end-date');
const applyFilterButton = document.getElementById('apply-filter-button');

// Хранение списка расходов
let expenses = [];

// Обработчик события клика на кнопку "Добавить"
addExpenseButton.addEventListener('click', function (event) {
  event.preventDefault(); // Отмена стандартного поведения кнопки

  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);
  const expenseDate = expenseDateInput.value;

  // Проверка на пустые поля
  if (expenseName === '' || isNaN(expenseAmount) || expenseDate === '') {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  // Создание нового объекта расхода
  const expense = {
    name: expenseName,
    amount: expenseAmount,
    date: expenseDate
  };

  // Добавление расхода в список
  expenses.push(expense);

  // Очистка полей ввода
  expenseNameInput.value = '';
  expenseAmountInput.value = '';
  expenseDateInput.value = '';

  renderExpenseList();
});

// Обработчик события клика на кнопку "Применить фильтр"
applyFilterButton.addEventListener('click', function (event) {
  event.preventDefault(); // Отмена стандартного поведения кнопки

  renderExpenseList();
});

function renderExpenseList() {
  // Очистка списка расходов
  expenseList.innerHTML = '';

  // Получение дат фильтра
  const filterStartDate = filterStartDateInput.value;
  const filterEndDate = filterEndDateInput.value;

  // Фильтрация расходов по дате
  const filteredExpenses = expenses.filter(function (expense) {
    return (
      (!filterStartDate || expense.date >= filterStartDate) &&
      (!filterEndDate || expense.date <= filterEndDate)
    );
  });

  // Добавление расходов в список
  filteredExpenses.forEach(function (expense, index) {
    const expenseItem = document.createElement('li');
    const expenseInfo = document.createElement('span');
    const expenseDate = document.createElement('span');

    expenseInfo.textContent = `${expense.name} - $${expense.amount.toFixed(2)}`;
    expenseDate.textContent = `(${expense.date})`;

    expenseItem.appendChild(expenseInfo);
    expenseItem.appendChild(expenseDate);

    // Добавление класса для чередования фона
    if (index % 2 === 1) {
      expenseItem.classList.add('even');
    }

    expenseList.appendChild(expenseItem);
  });
}
