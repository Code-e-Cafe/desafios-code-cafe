# Calculator 🔢

An interactive and stylish web calculator, developed with HTML, CSS, and pure JavaScript (Vanilla JS). It features basic and advanced functionalities, calculation history, and multiple selectable visual themes to customize the user experience.

## ✨ Implemented Features

*   [x] Addition (+)
*   [x] Subtraction (-)
*   [x] Multiplication (*)
*   [x] Division (/)
*   [x] Exponentiation (^)
*   [x] Square Root (√)
*   [x] Percentage (%)
*   [x] Sign Inversion (+/-)
*   [x] Comma-Based Decimal Numbers *BRAZILIAN STANDARD* (,) 
*   [x] User-Friendly Web Interface
*   [x] Calculation History (accessible via a sidebar)
*   [x] Multiple Visual Themes (Cyberpunk, Lofi, Fall, Harbor, Balcony, Rain, Sakura)
*   [x] Theme Selection and Persistence (saves choice in LocalStorage)
*   [x] Responsive Design (adapts to different screen sizes)
*   [x] Clear Functions:
    *   `Clear All` (Clears everything, including history - trash can icon)
    *   `Reset/Clear Entry` (Clears only the current input - eraser icon)
    *   `Backspace` (Deletes the last digit - backspace icon)
*   [x] Sequential Calculation (chained operations, e.g., 5 + 3 * 2)
*   [x] Error Handling (Division by zero, Square root of negative number, Invalid input)
*   [x] Scientific Notation Support for very large or small results.
*   [x] Visual Feedback (button click effects, error messages)

## 🎨 Available Themes

The calculator offers visual themes that change the color scheme, background image, and fonts:

*   City 
*   Coffee 
*   Fall
*   Harbor
*   Balcony
*   Rain
*   Sakura

The selected theme is automatically saved in the user's browser via LocalStorage.

## 🛠️ Technologies Used

*   **Language:** HTML5, CSS3, JavaScript (ES6+ Vanilla)
*   **Web Features:**
    *   CSS Variables (for easy theming)
    *   CSS Grid & Flexbox (for layout)
    *   DOM Manipulation
    *   LocalStorage API (for saving the theme)
    *   Font Awesome (for icons)
    *   Google Fonts (for varied typography in themes)
*   **Tools:**
    *   Git & GitHub (Version Control)
    *   VS Code (Development Environment)

## ⚙️ Prerequisites

*   A modern web browser (Chrome, Firefox, Edge, Safari, Opera, etc.)
*   Git (optional, to clone the repository)

## 🚀 Installation and Execution

**Option 1: Access Online**

*   Visit: `[https://calculatoralucinado.vercel.app]`

## 📖 How to Use

1.  Open the calculator in your browser.
2.  Click the number buttons (`0`-`9`) to enter numbers into the input display (`typed`).
3.  Use the `,` button to add the decimal part.
4.  Click the operation buttons (`+`, `-`, `*`, `/`, `^`, `√`, `%`) to select the desired operation.
5.  Enter the second number (if applicable).
6.  Click the `=` button (calculator icon) to perform the calculation and display the result in the main display (`result`).
7.  **Actions:**
    *   **Trash Can (`Clear`):** Clears the current input, result, and history. Resets the calculator state.
    *   **Eraser (`Reset`):** Clears only the current input (`typed`).
    *   **Backspace:** Removes the last digit from the current input.
    *   **`+/-` (`Invert`):** Inverts the sign of the number in the current input.
8.  **Sidebars:**
    *   Click "**View History**" to open/close the right sidebar and view the calculation history.
    *   Click "**Select a theme**" to open/close the left sidebar and choose one of the available visual themes.

## 📸 Screenshots 

<img src='/src/imgs/screenshots/calculator-screenshot.png' alt='screenshot of the calculator'>
<figcaption> Screenshot of the calculator in City theme</figcaption>
<br>
<br>
<img src='/src/imgs/screenshots/calculator-screenshot-2.png' alt='screenshot of the calculator 2'>
<figcaption> Screenshot of the calculator in Rain theme with the two sidebars opened</figcaption>
<br>
<br>

## 🤝 How to Contribute 

Contributions are welcome! If you have suggestions for improving this project, please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

You can also simply open an [Issue](https://github.com/Alucinado-dev/Futuristic-Calculator/issues) with the tag "enhancement" or "bug".


## 📁 Folders

calculator/
├─ js/
│  ├─ globalFunctions.js
│  └─ index.js
├─ src/
│  ├─ assets/
│  │  ├─ ALucin4do-logo.png
│  │  └─ calculator-favicon.png
│  ├─ imgs/
│  │  ├─ screenshots/
│  │  │  ├─ calculator-screenshot-2.png
│  │  │  └─ calculator-screenshot.png
│  │  ├─ balcony-bg.gif
│  │  ├─ cyberpunk-bg.gif
│  │  ├─ fall-bg.gif
│  │  ├─ harbor-bg.gif
│  │  ├─ lofi-bg.gif
│  │  ├─ rain-bg.gif
│  │  └─ sakura-bg.gif
│  └─ stylesheets/
│     ├─ footer.css
│     ├─ main.css
│     ├─ preset.css
│     ├─ reset.css
│     ├─ responsive.css
│     └─ sidebar.css
├─ index.html
├─ LICENSE
└─ README.md


## 📄 License 

This project is licensed under the MIT License. See the `LICENSE` file for more details [License](/LICENSE).

##   [My Portifolio](https://alucinado-dev.vercel.app).  <img src="src/assets/ALucin4do-logo.png" alt="logo of ALucin4do" style='width: 35px; height: 35px;'>
            




