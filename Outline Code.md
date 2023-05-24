### Outline Code

- Assets: Source of whole project, contains some images and fonts
- Global:  Global data
- Routes: all navigations
  - Home Stack
  - Drawer
  - Profile Stack
  - Sheet Tab
  - Bottom Tab
- Screens: All of our interface
- Shared: Some shared components



### Details Presenting

1. **Bottom Tab**

- Tab List: contains three interface of our app
- Tab Button: 
  - Some settings of navigations
  - Focused: if it changes, the button will play the navigations
    - the button will rise a little, enlarge and generate a pinkcircle inside
    - also, there is a text will appear
- Tab Navigator: 
  - listening the keyboard and it will work in the style of tab to avoid tabBar moving with keyboard
  - hide the header cause the drawer has render the header
  - use TabList.map to render all the interfaces in TabList
- I consider it pretty nice

2. **Drawer**

- 
