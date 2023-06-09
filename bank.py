class BankAccount:

    def __init__(self, initial_balance=0):

        self.balance = initial_balance



    def deposit(self, amount):

        self.balance += amount



    def withdraw(self, amount):

        if amount > self.balance:

            print("Недостаточно средств на счете.")

        else:

            self.balance -= amount



    def check_balance(self):

        return self.balance




# Функция для вывода меню

def show_menu():

    print("Меню:")

    print("1. Снятие наличных")

    print("2. Пополнение баланса")

    print("3. Проверка баланса")

    print("4. Выход")




# Создаем объект банковского аккаунта с начальным балансом

initial_balance = float(input("Введите сумму начального баланса: "))

account = BankAccount(initial_balance)



while True:

    show_menu()

    choice = input("Выберите операцию (1-4): ")



    if choice == "1":

        amount = float(input("Введите сумму для снятия: "))

        account.withdraw(amount)

        print("Снято", amount, "евро.")


        print("Баланс пополнен на", amount, "евро.")



    elif choice == "3":

        balance = account.check_balance()

        print("Текущий баланс:", balance, "евро.")



    elif choice == "4":

        print("Программа завершена.")

        break



    else:

        print("Неверный выбор. Попробуйте снова.")