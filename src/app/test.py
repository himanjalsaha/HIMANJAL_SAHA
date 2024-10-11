class BankAccount:
    def __init__(self, name, initial_balance=0):
        self.name = name
        self.balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposit successful! New balance: ${self.balance}")
        else:
            print("Deposit amount must be positive!")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawal successful! New balance: ${self.balance}")
        else:
            print("Invalid withdrawal amount or insufficient funds!")

    def check_balance(self):
        print(f"{self.name}'s balance: ${self.balance}")

class BankingSystem:
    def __init__(self):
        self.accounts = {}

    def create_account(self, name):
        if name in self.accounts:
            print(f"Account already exists for {name}!")
        else:
            initial_balance = float(input(f"Enter initial deposit for {name}: "))
            self.accounts[name] = BankAccount(name, initial_balance)
            print(f"Account created successfully for {name}!")

    def deposit(self, name):
        if name in self.accounts:
            amount = float(input(f"Enter amount to deposit for {name}: "))
            self.accounts[name].deposit(amount)
        else:
            print(f"No account found for {name}!")

    def withdraw(self, name):
        if name in self.accounts:
            amount = float(input(f"Enter amount to withdraw for {name}: "))
            self.accounts[name].withdraw(amount)
        else:
            print(f"No account found for {name}!")

    def check_balance(self, name):
        if name in self.accounts:
            self.accounts[name].check_balance()
        else:
            print(f"No account found for {name}!")

    def transfer(self, from_name, to_name):
        if from_name in self.accounts and to_name in self.accounts:
            amount = float(input(f"Enter amount to transfer from {from_name} to {to_name}: "))
            if self.accounts[from_name].balance >= amount:
                self.accounts[from_name].withdraw(amount)
                self.accounts[to_name].deposit(amount)
                print(f"Transferred ${amount} from {from_name} to {to_name}!")
            else:
                print("Insufficient funds!")
        else:
            print("One or both accounts not found!")

    def menu(self):
        print("\n*** Banking System Menu ***")
        print("1. Create Account")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Check Balance")
        print("5. Transfer")
        print("6. Exit")

def main():
    bank = BankingSystem()
    
    while True:
        bank.menu()
        choice = input("Choose an option: ")

        if choice == '1':
            name = input("Enter account holder name: ")
            bank.create_account(name)
        elif choice == '2':
            name = input("Enter account holder name: ")
            bank.deposit(name)
        elif choice == '3':
            name = input("Enter account holder name: ")
            bank.withdraw(name)
        elif choice == '4':
            name = input("Enter account holder name: ")
            bank.check_balance(name)
        elif choice == '5':
            from_name = input("Enter the sender's name: ")
            to_name = input("Enter the receiver's name: ")
            bank.transfer(from_name, to_name)
        elif choice == '6':
            print("Exiting the banking system. Have a great day!")
            break
        else:
            print("Invalid option! Please try again.")

if __name__ == "__main__":
    main()
