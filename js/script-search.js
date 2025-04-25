document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('button');
    const searchInput = document.querySelector('input');
    const profileBox = document.getElementById('profile-box');
    const alertBox = document.getElementById('alert-box');
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Function to handle search
    function handleSearch() {
        const username = searchInput.value.trim();
        if (username) {
            // Show the loading spinner
            loadingSpinner.style.display = 'block';
            fetchGitHubProfile(username);
        }
    }

    // Function to hide all result boxes
    function hideAllBoxes() {
        profileBox.classList.add('hidden');
        alertBox.classList.add('hidden');
    }

    // Function to fetch GitHub profile data
    async function fetchGitHubProfile(username) {
        try {
            // Hide all boxes before showing new results
            hideAllBoxes();
            
            // Fetch user data from GitHub API
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) {
                throw new Error('User not found or API rate limit exceeded');
            }
            
            const userData = await response.json();
            
            // Update profile UI with data
            updateProfileUI(userData);
            
        } catch (error) {
            console.error('Error fetching GitHub profile:', error);
            // Show the alert box when user is not found
            alertBox.classList.remove('hidden');
        } finally {
            // Hide the loading spinner when the operation is complete
            loadingSpinner.style.display = 'none';
        }
    }

    // Function to update the profile UI with user data
    function updateProfileUI(user) {
        // Update profile elements
        profileImage.src = user.avatar_url || '/api/placeholder/150/150';
        profileName.textContent = user.name || user.login;
        profileBio.textContent = user.bio || 'Este usuário não possui uma bio no GitHub.';
        
        // Show the profile box
        profileBox.classList.remove('hidden');
    }

    // Add click event listener to the search button
    searchButton.addEventListener('click', handleSearch);

    // Add keypress event listener to the input field
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});