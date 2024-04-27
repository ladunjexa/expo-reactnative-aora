# React Native Aora

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/expo-reactnative-aora?label=Latest%20release&style=social)](https://github.com/ladunjexa/expo-reactnative-aora/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/expo-reactnative-aora?style=social)](https://github.com/ladunjexa/expo-reactnative-aora/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/expo-reactnative-aora?style=social)](https://github.com/ladunjexa/expo-reactnative-aora/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/expo-reactnative-aora?style=social&logo=github)](https://github.com/ladunjexa/expo-reactnative-aora/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/expo-reactnative-aora?style=social&logo=github)](https://github.com/ladunjexa/expo-reactnative-aora/pulls)

![demo](https://i.ibb.co/djCrDzT/324992616-0831a528-0eef-4ed3-91ea-b7f720805622.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![License](https://img.shields.io/github/license/ladunjexa/expo-reactnative-aora?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/expo-reactnative-aora/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/expo-reactnative-aora?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![Contributors](https://img.shields.io/github/contributors/ladunjexa/expo-reactnative-aora?style=flat&color=orange&label=Contributors)](https://github.com/ladunjexa/expo-reactnative-aora/graphs/contributors)
![Release](https://img.shields.io/github/release/ladunjexa/expo-reactnative-aora.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/expo-reactnative-aora/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/expo-reactnative-aora/badge.svg)](https://snyk.io/test/github/ladunjexa/expo-reactnative-aora)

<!-- ## 🌐 Live Demo

Explore the live demonstration of the project:
[reactnative-aora](https://expo-reactnative-aora.vercel.app/) -->

## 📝 Description

**Aora** is a social media platform that allows users to share AI-generated videos with the
community and discover trending videos.

<details><summary><b>Folder Structure</b></summary>

```bash
reactnative-aora/
├── .vscode/
├   └── settings.json
├── app/
├   ├── _layout.tsx
├   ├── index.tsx
├   ├── (auth)/
├   ├   ├── _layout.tsx
├   ├   ├── sign-in.tsx
├   ├   └── sign-up.tsx
├   ├── (tabs)/
├   ├   ├── layout.tsx
├   ├   ├── bookmark.tsx
├   ├   ├── create.tsx
├   ├   ├── home.tsx
├   ├   └── profile.tsx
├   └── search/
├       └── [query].tsx
├── components/
├   ├── atoms/
├   ├   ├── custom-button.tsx
├   ├   ├── empty-state.tsx
├   ├   └── info-box.tsx
├   ├── cards/
├   ├   └── video-card.tsx
├   ├── layout/
├   ├   └── tab-icon.tsx
├   ├── shared/
├   ├   ├── form-field.tsx
├   ├   └── search-input.tsx
├   └── trending/
├       ├── trending-item.tsx
├       └── index.tsx
├── constants/
├   ├── icons.ts
├   ├── images.ts
├   └── index.ts
├── context/
├   └── global-provider.tsx
├── hooks/
├   └── use-appwrite.ts
├── lib/
├   ├── appwrite.ts
├   ├── animations.ts
├   └── actions/
├       ├── post.action.ts
├       ├── user.action.ts
├       ├── file.action.ts
├       └── shared.types.d.ts
├── assets/
├   ├── adaptive-icon.png
├   ├── favicon.png
├   ├── icon.png
├   ├── splash.png
├   ├── fonts/[[...]].png
├   ├── icons/[[...]].ttf
├   └── images/[[...]].png
├── types/
├   └── index.d.ts
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app.json
├── babel.config.js
├── nativewind-env.d.ts
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.ts
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

<!-- - [Live Demo](#-live-demo) -->

- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
  - [Launching](#-launching)
    - [Launch on Expo Go (recommended)](#-launch-on-expo-go-recommended)
    - [Launch on Android](#-launch-on-android)
    - [Launch on iOS](#-launch-on-ios)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>Aora</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Expo](https://expo.dev/): Expo is an open-source platform for making universal native apps for
  Android, iOS, and the web with JavaScript and React.
- [React Native](https://reactnative.dev/): React Native is an open-source mobile application
  framework created by Facebook.
- [Appwrite](https://appwrite.io/): Appwrite is an open-source backend server that helps you build
  modern applications much faster with real-time APIs for authentication, databases, files storage,
  and much more.
- [NativeWind](https://nativewind.dev/): NativeWind is a utility-first CSS framework for React
  Native based on Tailwind CSS.
- [React Native Animatable](https://npmjs.com/package/react-native-animatable/): React Native
  Animatable is a library for React Native that provides animations for React Native components.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,react,tailwind,appwrite)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

> [!IMPORTANT]
>
> - the application uses Appwrite for Authentication and User Management, therefore, you need to
>   create Appwrite account [here](https://appwrite.io/) and sets the environment variables in the
>   `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/expo-reactnative-aora.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm start
```

**Step 4:**

Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.

### 🚀 Launching

#### Launch on Expo Go (recommended)

You can deploy this app on Expo Go by scanning the QR code generated by the Expo development server.

```bash
npx expo start
```

#### Launch on Android

You can deploy this app on Android by running the following command:

```bash
npm run android
```

#### Launch on iOS

You can deploy this app on iOS by running the following command:

```bash
npm run ios
```

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script                           | Action                                   |
| :------------------------------- | :--------------------------------------- |
| `npm install & npx expo install` | Installs dependencies                    |
| `npm run start`                  | Start expo development server            |
| `npm run android`                | Start expo development server on Android |
| `npm run ios`                    | Start expo development server on iOS     |
| `npm run web`                    | Start expo development server on Web     |
| `npm run ts:check`               | Check TypeScript types                   |
| `npm run lint`                   | Run ESLint                               |

## 🔒 Environment Variables

Environment variables[^7] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**Aora** uses [Appwrite](https://appwrite.io) as a backend service. You need to create an account on
Appwrite and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=<APPWRITE_ENDPOINT>
EXPO_PUBLIC_APPWRITE_PLATFORM=<APPWRITE_PLATFORM>
EXPO_PUBLIC_APPWRITE_PROJECT_ID=<APPWRITE_PROJECT_ID>
EXPO_PUBLIC_APPWRITE_DATABASE_ID=<APPWRITE_DATABASE_ID>
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=<APPWRITE_USER_COLLECTION_ID>
EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID=<APPWRITE_VIDEO_COLLECTION_ID>
EXPO_PUBLIC_APPWRITE_STORAGE_ID=<APPWRITE_STORAGE_ID>
```

## 🔧 Contributing

[![contributors](https://contrib.rocks/image?repo=ladunjexa/expo-reactnative-aora)](https://github.com/ladunjexa/expo-reactnative-aora/graphs/contributors)

Contributions are what make the open source community such an amazing place to learn, inspire, and
create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉

### 📩 Bug / Feature Request

If you find a bug (failure of a module to execute its intended function), kindly open an issue
[here](https://github.com/ladunjexa/expo-reactnative-aora/issues/new) by including the issue with a
title and clear description.

If you'd like to request a new function, feel free to do so by opening an issue
[here](https://github.com/ladunjexa/expo-reactnative-aora/issues/new). Please include sample queries
and their corresponding results.

## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Appwrite](https://appwrite.io/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NativeWind](https://nativewind.dev/)
- [React Native Animatable](https://github.com/oblador/react-native-animatable)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816)

<!-- [![Twitter](https://img.shields.io/twitter/follow/ladunjexa.svg?style=social)](https://twitter.com/intent/follow?screen_name=ladunjexa) -->

## 📋 License

**Aora** is open source software [licensed as MIT](https://opensource.org/license/mit/) and is free
to use — See [LICENSE](https://github.com/ladunjexa/expo-reactnative-aora/blob/main/LICENSE) for
more details.
