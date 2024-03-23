# Regex Form Validator Project ✨

This project demonstrates the implementation of regular expressions (regex) to validate a form in an HTML file. The form includes fields for username, email, and phone number. The JavaScript code validates each field based on specific regex patterns and provides feedback to the user. 🚀

## Files Included 📁
1. **index.html**: 
   - Contains the HTML structure for the form.
   - Defines fields for username, email, phone number, and a submit button.
   - Utilizes Bootstrap for styling and responsiveness.
   
2. **app.js**: 
   - JavaScript file responsible for form validation using regex.
   - Validates the username, email, and phone number fields.
   - Displays appropriate feedback messages for each field.

## How to Use 🛠️
1. Open the `index.html` file in a web browser.
2. Fill in the form fields with appropriate values.
3. Blur out of each field (click outside of the field) to trigger validation.
4. If the entered data matches the regex patterns, the fields will be marked as valid.
5. If the entered data does not match the regex patterns, the fields will be marked as invalid, and appropriate error messages will be displayed.
6. Once all fields are valid, click the "Submit" button.
7. If all fields are valid, a success message will be displayed indicating that the form has been submitted successfully. Otherwise, an error message will be displayed prompting the user to fill the form correctly.

## Regex Patterns Used 🧩
1. **Username**:
   - Pattern: `^[a-zA-Z\_][a-zA-Z0-9]{1,14}$`
   - Rules: 
     - Must start with a letter or underscore.
     - Can contain letters, numbers, and underscores.
     - Length must be between 2 and 15 characters.
   
2. **Email**:
   - Pattern: `^[a-zA-Z][a-zA-Z0-9\_]{4,14}\@([a-z]){3,9}\.com$`
   - Rules:
     - Must start with a letter.
     - Can contain letters, numbers, and underscores before '@'.
     - Must be followed by a domain name ending with ".com".
   
3. **Phone Number**:
   - Pattern: `^98[0-9]{8}$`
   - Rules:
     - Must start with '98'.
     - Must be followed by 8 digits.

## Dependencies 📦
- Bootstrap 4.0.0: Included via CDN for styling purposes.

Feel free to extend or modify this project according to your requirements. Contributions are welcome! 🎉
