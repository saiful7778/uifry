# Uifry

**Live link**: [uifry.vercel.app](https://uifry-saiful7778s-projects.vercel.app)

![Screenshot from 2024-06-02 22-40-53](https://github.com/saiful7778/uifry/assets/83330293/96cefa20-3135-4cad-a2e6-8ae3223dc030)

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Design](#design)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Nextjs file conventions](#nextjs-file-conventions)
7. [Setup and Installation](#setup-and-installation)

## Introduction

This project is a modern web application built using React 18 and Next.js 14 app router. It features a responsive design with dark and light modes, animations, and a demo dashboard backend. The project leverages several libraries and tools to enhance the development process and user experience.

## Technologies Used

- **TypeScript**
- **React 18**
- **Next.js 14**
- **TailwindCSS**: For styling.
- **next-themes**: For theme switching (dark, light, system default).
- **Framer Motion**: For animations.
- **Shadcn**: For building buttons, dropdowns, toast messages, and forms.
- **Radix UI**: For unstyled UI components.
- **react-hook-form**: For handling form state and validation.
- **Zod**: For schema validation.

## Design

- **Figma Link:** [Figma Link](https://www.figma.com/community/file/1145991068621514311)

## Features

- ### Button and Dropdown

  Build Button and Dropdown by using Shadcn also Redix UI library for native features like keyboard key control.

- ### Toast Messages

  Implemented with Shadcn Toast component

- ### Forms and Validation

  Forms are managed using react-hook-form and Zod for schema validation also shadcn form component.

- ### Dark Mode and Light Mode

  Theme switching is handled by next-themes npm package, allowing users to toggle between dark, light, and system default themes.

- ### Animations
  Animations are created using Framer Motion and CSS animations to enhance the user experience with smooth transitions and interactions.

## Project Structure

```plaintext
|── src
|-- |-- app
│   ├── components
│   │   ├── Forms
│   │   ├── Sections
│   │   ├── shared
│   │   ├── ui
│   ├── context
│   ├── hooks
│   ├── lib
│   │   ├── schemas
│   │   ├── styles
│   │   ├── toast
│   │   ├── utils
│   ├── types
```

## Nextjs file conventions

This project follows Next.js file conventions, including:

- **page.tsx**: Used for page
- **layout.tsx**: Used for layout
- **loading.tsx**: Used for displaying page loading.
- **error.tsx**: Used for show errors.
- **not-found.tsx**: Used for show 404 errors.
- **(route-group)**: Used for invisiable path layout

## Setup and Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saiful7778/uifry
   cd uifry
   ```

2. **Install dependencies:**

   ```js
   npm install
   // or
   yarn install
   // or
   pnpm install
   // or
   bun install
   ```

   > **Note:** Here I use `bun` you can any of them

3. **Run the development server:**

   ```javascript
     npm run dev
     // or
     yarn dev
     // or
     pnpm dev
     // or
     bun run dev
   ```

4. **Build for production:**
   ```javascript
     npm run build
     // or
     yarn build
     // or
     pnpm build
     // or
     bun run build
   ```
