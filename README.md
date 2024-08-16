# Fruit Party

## Project Overview

Fruit Party is a classic memory game where you match pairs of identical images to earn points and advance to the next level. The game starts with three types of fruits and adds two more types with each level until a maximum of nine fruit types is reached.

## Technologies Used

- **TypeScript** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
- **React** ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
- **JavaScript** ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1C?logo=javascript&logoColor=black)
- **CSS** ![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
- **Node.js** ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- **Supabase** ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)

## Installed Libraries

- **canvas-confetti** ![canvas-confetti](https://img.shields.io/badge/canvas--confetti-1.9.3-blue)
  - Library for displaying confetti animations in the game.
- **i18next** ![i18next](https://img.shields.io/badge/i18next-23.12.3-blue)
  - Internationalization library for handling multiple languages.
- **react-bootstrap** ![react-bootstrap](https://img.shields.io/badge/react--bootstrap-2.10.4-blue)
  - Bootstrap components for React to ensure responsive design.
- **react-countdown** ![react-countdown](https://img.shields.io/badge/react--countdown-2.3.5-blue)
  - Countdown timer component to track the game time.
- **react-flagkit** ![react-flagkit](https://img.shields.io/badge/react--flagkit-2.0.4-blue)
  - Library for displaying country flags.
- **react-i18next** ![react-i18next](https://img.shields.io/badge/react--i18next-15.0.1-blue)
  - React bindings for i18next, used for translating the application.

## Game Instructions

- **Gameplay**: The game is a classic memory game where you need to match two identical images to score points and progress to the next level.
- **Level Progression**: Initially, there are three types of fruits. As you advance, two more types are added with each level, up to a maximum of nine fruit types.

## Scoring System

- **Exact Moves**: If you match all the cards in the exact number of moves required, you will earn double the number of cards plus a bonus based on the level.
- **Few Extra Moves**: If you complete the game with fewer than 5 extra moves, you will receive the number of cards plus a bonus based on the level.
- **Moderate Extra Moves**: If you complete the game with between 5 and 10 extra moves, you will receive half the number of cards plus a bonus based on the level.
- **Many Extra Moves**: If you complete the game with more than 10 extra moves, you will receive one-third of the number of cards, rounded, plus a bonus based on the level.

## Saving Your Score

- **Save Score**: After the time has passed, you can save your score with a name.
