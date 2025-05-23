# Github-profile-finder

Github profile finder

Features:

Search functionality to find GitHub profiles by username
API integration with GitHub to fetch real user data
Profile display with user avatar, name, and bio
Error handling for non-existent users
Responsive design with decorative elements

Technical Implementation:

HTML: Clean structure with proper semantic elements
CSS: Responsive styling with modern effects
JavaScript: API integration with async/await and error handling
Decorative Elements: Background image and gradient effects

File Structure:

index.html: Main structure with search interface and profile display
styles.css: Complete styling including responsive design
script.js: GitHub API integration and UI interaction

feat: Add loading spinner outside search box

- Add a spinning loading animation to the right of the search box
- Display spinner during API calls to GitHub
- Hide spinner when search operation completes
- Improve user feedback during search operations

The spinner provides visual feedback when a search is in progress,
improving the user experience by indicating when the application
is waiting for a response from the GitHub API.
