# LangGrind

 **React Native simple App for memorizing new foreign words** 

 <span>Note: App undergoes global refactoring and reimagine process. For original codebase check legacy-main branch</span>
 
## Built with
- 🚩 ***General***: React Native, Expo, Redux-toolkit (incl. Redux Persist)
- 🎞 ***Animation***: Reanimated 3, Moti, Swipable by react-native-gesture-handler
- 🗂 ***Data Management***: SQLite

## Demo
- Check out this [video](https://www.youtube.com/watch?v=8i9twAs2W1Y) to see all features of the app

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

  - 🖼 The user interface design as the name of the App are unique, but partly inspired by [Langenscheidt Dictionary](https://en.langenscheidt.com/)
    
    <img src="https://github.com/Evgkl98/langGrind/blob/main/demo/MenuDemo.jpg" width="315" height="550">
    <img src = "https://github.com/Evgkl98/langGrind/blob/main/demo/demo.gif" width="315" height="550">
    
## Features

- Basic **CRUD** actions: 
  - **Create** cards with words and their translations
  - **Read** the content of the card, translate the word and check yourself
  - **Update** the word or its translation by swiping the card to the right
  - **Delete** card by swiping the card to the left
  
- Integrated Translator:
  - Powered by **Google Cloud Translation** and **Merriam-Webster API's**
  - Supports several languages for translating
  - Returns meaning of the word, part of speech and audio pronunciation
  <br>
      <img src = "https://github.com/Evgkl98/langGrind/blob/main/demo/TranslatorDemo.gif" width="315" height="550">
      <img src = "https://github.com/Evgkl98/langGrind/blob/main/demo/SettingsScreen.jpg" width="315" height="550">
 
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
  
At the moment the project is migration to newer versions.

