class BankAccount:
   def __init__(self, initial_balance=0):
       self.balance = initial_balance

   def deposit(self, amount):
       self.balance += amount
       print("Баланс пополнен на", amount, "евро.")

   def withdraw(self, amount):
       if amount > self.balance:
           print("Недостаточно средств на счете.")
       else:
           self.balance -= amount
           print("Снято", amount, "евро.")

   def check_balance(self):
       print("Текущий баланс:", self.balance, "евро.")


