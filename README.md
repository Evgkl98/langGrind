# LangGrind

 **React Native simple App for memorizing new foreign words** 
 
## Built with
- 🚩 ***General***: React Native, Expo, Redux-toolkit (incl. Redux Persist)
- 🎞 ***Animation***: Reanimated 3, Moti, Swipable by react-native-gesture-handler
- 🗂 ***Data Management***: SQLite

## Demo
- Check out this [video](https://youtu.be/n94lElQCwK0) to see all features of the app

## Launch Locally 

To launch project locally you need:

- Node.js
- A device with installed Expo Go app or Android/iOS simulator

### Instalation

1. Clone this repository and open in your IDE  
2. Navigate to the project folder
3. Install dependencies

   `npm install`

4. Start project
   
   `npm start`
   
5. Follow the instructions in the terminal (scan QR code or start simulator)

## Platforms

- 🛠 Android and iOS

## Design

  - 🖼 The user interface design as the name of the App are unique
    
    <img src="https://github.com/Evgkl98/langGrind/blob/workBranch/demo/menu.PNG" width="315" height="550">
    <img src = "https://github.com/Evgkl98/langGrind/blob/workBranch/demo/demo.gif" width="315" height="550">
    
## Features

- Basic **CRUD** actions: 
  - **Create** cards with words and their translations
  - **Read** the content of the card, translate the word and check yourself
  - **Update** the word or its translation by swiping the card to the right
  - **Delete** card by swiping the card to the left
  
    
- User Friendly Validation:

  - Prevents to create cards with identical content
  - Empty input fields validation
  - Accepts uppercase/lowercase first letter of the input value

- Extra:
  - Feedback to user after writing correct or incorrect answer
  - User can choose one of four languages for the app (the language list will be expanded in the future)
  - Feedback feature directly in the app


## Project Management

- The whole depeloping process (tasks and progress tracking) was maintained by [Jira](https://www.atlassian.com/software/jira)
 
## Addition
  
It is the first version of the app, the set of features is now primitive. The project is still under development. With the next versions the app will contain such features as:

  - Integrated translator
  - Folders, sorting, language info and more and more ...

