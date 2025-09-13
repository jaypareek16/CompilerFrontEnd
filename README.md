# Java Compiler Frontend

This is a web-based code editor and compiler interface built with React.  
It allows users to write code in Java, C++, or Python, select the language, and send code to a backend for compilation and execution.

## Features

- Monaco-based code editor with syntax highlighting
- Language selection (Java, C++, Python)
- Theme toggle (light/dark)
- Output display panel
- "Run" button to compile and execute code via backend API

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jaypareek16/Compiler-React-SpringBoot-.git
   cd javacompiler
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```
The production build will be in the `build` folder.

## Usage

- Select your preferred language from the dropdown.
- Write or paste your code in the editor.
- Toggle the theme using the switch.
- Click the **Run** button to send your code to the backend.
- View the output in the output panel.

## Backend Integration

- The frontend sends a POST request to `http://localhost:8080/compile` with:
  - `language`: selected language (e.g., `java`, `cpp`, `python`)
  - `file`: code file
  - `outputDir`: output directory name (string)

Make sure your backend is running and accessible at the specified endpoint.

## Customization

- You can modify supported languages in `src/Components/Header.js` and `src/Components/CodeEditor.js`.
- Change editor options in `src/Components/CodeEditor.js`.

## License

This project is licensed under the MIT License.
