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



### Github

---

Link:  `git@github.com:QZhou0706/React-native_AccountingHelper.git`

Teammates & Labor: 

- Q Zhou

  - Project file structure configuration
  - Navigations between Screens
  - UI design
  - Animatable Componests
  - Passing parameters ...

- QQ Dai

  - Details of Screens

  - Some Modal Cards components
  - Profile Screen
  - main Screens of Home

- YFY Zhao

  - Data Sheet Screen
  - ProfileEditing Screen

---



### Layout

---

- Home

![](https://cdn.jsdelivr.net/gh/QZhou0706/picGoStorage@master/img/Screenshot_1684831906.png)

- Details

![](https://cdn.jsdelivr.net/gh/QZhou0706/picGoStorage@master/img/Screenshot_1684831924.png)

We will display other screens in our presentation. ( \^_\^)



### Features (some Examples)

---

- Stateless components

```js
import { View, StyleSheet,Text } from "react-native";

export default function ModuleCard(props) {
    return (
        <View style = {styles.box}>
            <View style = {styles.titleWrapper}>
                <View style = {styles.rectangle}></View>
                <Text style = {styles.title}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    );
}
```

- Stateful components

```js
const RenderRecord = () => {
    if (todayData.length < 1) {
      return (
        <ModuleCard title={'RECORD'}>
          <NoDataTip />
        </ModuleCard>
      );
    }
    else {
      return (
        <ModuleCard title={'RECORD'}>
          {todayData.map((item, index) => (
            <TouchableOpacity
              onPress={() => reviewDetails(item)}
              key={index}>
              <Card>
                <Accounts item={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </ModuleCard>
      );
    }
  }
```

- Navigation system

1. Stack Navigation

```js
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="Details" component={Details} options={{
        headerShown: true,
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
```

2. Drawer Navigation

```js
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={() => {
        return {
          drawerActiveBackgroundColor: '#FDCB18',
          drawerActiveTintColor: '#333',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'nunito-regular',
            fontSize: 17,
            borderRadius: 20,
          },
        }
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='TabNavigator' component={TabNavigator} options={({ navigation }) => {
        return {
          drawerIcon: ({ color, size }) => (
            <IonIcons name='home-outline' color={color} size={size} />
          ),
          header: () => <Header navigation={navigation} title='Home' />,
        }
      }} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={({ navigation }) => {
        return {
          drawerIcon: ({ color, size }) => (
            <IonIcons name='ios-person-circle-outline' color={color} size={size} />
          ),
          header: () => <Header navigation={navigation} title='Profile' />,
        }
      }} />
      <Drawer.Screen name="About" component={About} options={({ navigation }) => {
        return {
          drawerIcon: ({ color, size }) => (
            <IonIcons name='document-text-outline' color={color} size={size} />
          ),
          header: () => <Header navigation={navigation} title='About' />,
        }
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
```

3. Top Tab Navigation

```js
const Tab = createMaterialTopTabNavigator();

export default function SheetTab() {
  return (
      <Tab.Navigator screenOptions={{
      }}>
        <Tab.Screen name="IncomeSheet" component={IncomeSheet} />
        <Tab.Screen name="ExpSheet" component={ExpSheet} />
      </Tab.Navigator>
  );
}
```

4. Bottom Tab Navigation

```js
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            bottom: keyboardShown ? -100 : 20,
            position: 'absolute',
            borderRadius: 16,
            left: 16,
            right: 16,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#ccc',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.3,
          },
        }
      }}>
      {TabList.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component} options={{
            tabBarButton: (props) => (
              <TabButton {...props} item={item} />
            ),
          }}
            key={index} />
        )
      })}
    </Tab.Navigator>
  )
}
```

- Code organization 

```
├── App.js
├── app.json
├── assets
├── babel.config.js
├── global
│   ├── itemData.js
│   └── userInfo.js
├── routes		// about navigations
├── screens		// all of our screens
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
└── shared		// some shared components
    ├── card.js
    ├── colorCard.js
    ├── header.js
    ├── ModuleCard.js
    ├── rect.js
    ├── sheetCard.js
    └── whiteCard.js

```

---



### Main APIs

---

- [React Navigation](https://reactnavigation.org/)
  - Stack Navigation
  - Drawer Navigation
  - Top Tab Navigation
  - Bottom Tab Navigation

- [React native chart kit](https://github.com/indiespirit/react-native-chart-kit)
- [React native icon](https://github.com/oblador/react-native-vector-icons)
  - IonIcons
  - Foundation
  - MaterialIcons
- Animatable Componests
- ETC.

---

