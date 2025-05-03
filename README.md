# mini-expense-tracker
A simple React app to add expenses and show total spending.

Purpose:
Add small expenses with amount and description.

Display the total of all expenses.

Show a list of all expenses.

Imports:
import React, { useState } from "react";
This imports React and the useState hook.
useState lets your component hold and update local state (like amount, description, and expenses).

Component Function and State Initialization:
App() is the main function component.
It has three pieces of state:
expenses: array of all added expenses.
amount: the current value typed into the "amount" input.
desc: the current value typed into the "description" input.


addExpense() is called when the "Add Expense" button is clicked.
It checks if both amount and desc are filled.

Creates a newExpense object with:
A unique id using Date.now() (milliseconds since epoch).
amount converted to a number using parseFloat().
The desc string from input.
Adds the new expense at the beginning of the expenses array using [newExpense, ...expenses].
Then it clears the input fields.
