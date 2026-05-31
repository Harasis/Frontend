# OTP Input Component

A simple React OTP (One-Time Password) input component with automatic focus management and keyboard navigation.

## Features

* Fixed-length OTP input (5 digits by default)
* Automatically focuses the next input after entering a digit
* Supports Backspace navigation to the previous input
* Restricts input to numeric values only
* Automatically focuses the first input on page load
* Built using React Hooks (`useState`, `useRef`, `useEffect`)

## Tech Stack

* React
* JavaScript (ES6+)
* CSS

## How It Works

### Auto Focus

When the component mounts, the first input field is automatically focused.

### Numeric Validation

Only numeric values are allowed. Non-numeric input is ignored.

### Forward Navigation

After entering a digit, focus automatically moves to the next input field.

### Backward Navigation

Pressing Backspace on an empty input moves focus to the previous input field.

## Project Structure

```text
src/
├── App.js
├── styles.css
└── index.js
```

## Installation

```bash
git clone <repository-url>
cd otp-input
npm install
npm start
```

## Usage

```jsx
const OTP_DIGITS = 5;
```

Change the value of `OTP_DIGITS` to customize the OTP length.

Example:

```jsx
const OTP_DIGITS = 6;
```

## Future Enhancements

* Support pasting complete OTP values
* Auto-submit when OTP is complete
* Custom validation callbacks
* Mobile-friendly numeric keyboard
* Error states and styling
* Accessibility improvements

## Learning Concepts

This project demonstrates:

* Controlled Components
* React State Management
* Refs and DOM Manipulation
* Keyboard Event Handling
* Focus Management
* Array-based Dynamic Rendering

## License

MIT License
