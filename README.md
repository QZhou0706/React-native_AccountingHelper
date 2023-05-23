### Accounting App

---

Our Accounting App is a concise, convenient, and fast accounting software. Due to the unclear concept of managing living expenses among college students, we have designed this app to help them better manage their daily expenses, which can help them cultivate good spending and accounting habits. In order to provide college students with a better user experience, many of them believe that keeping track of expenses is a tedious task. However, our software has an efficient and simple recording method and a beautiful interface design, which allows college students to no longer resist recording every expenditure and thus develop good accounting habits.

Motivated by the fact that our teammates have difficulty  well managing their daily expenses, we have created this new Accounting App that contains a quick and convenient way to keep records of expenses and an intuitive display of financial statements.

Happy Accounting!

---



### Running the App

---

To run the guide locally, you will need to:

1. Install Expo CLI and Expo Go. Check [here](https://docs.expo.dev/get-started/installation/#expo-cli) for detailed instructions.
2. Connect to the same wireless network as your computer.
3. Running in simulator or Scan QR code from your terminal

If you have any questions, please check [here](https://reactnative.dev/docs/environment-setup).

---



### Structure

---

```
├── App.js
├── app.json
├── assets
├── babel.config.js
├── global
│   ├── itemData.js
│   └── userInfo.js
├── routes
├── screens
│   ├── about.js
│   ├── addExpense.js
│   ├── addIncome.js
│   ├── details.js
│   ├── editProfileScreen.js
│   ├── home.js
│   ├── profileScreen.js
│   ├── reviewDetails.js
│   ├── showExp.js
│   ├── showIncome.js
│   ├── src
│   └── suggestion.js
├── shared
│   ├── card.js
│   ├── colorCard.js
│   ├── header.js
│   ├── ModuleCard.js
│   ├── rect.js
│   ├── sheetCard.js
│   └── whiteCard.js
└── styles
    └── global.js
```

---



### Main APIs

---

- [React Navigation](https://reactnavigation.org/)
  - Stack Navigation
  - Drawer Navigation
  - Top Tab Navigation
  - Bottom Tab Navigation

- [React-native chart kit](https://github.com/indiespirit/react-native-chart-kit)
- 