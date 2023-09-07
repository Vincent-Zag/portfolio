// JavaScript function to add an achievement card
function addAchievement(title, description) {
    const achievementsContainer = document.getElementById("achievements");

    // Create a new div for the achievement card
    const achievementCard = document.createElement("div");
    achievementCard.classList.add("achievement-card");

    // Populate the achievement card with title and description
    achievementCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    // Append the achievement card to the achievements container
    achievementsContainer.appendChild(achievementCard);
}

// Call the addAchievement function for each achievement
addAchievement("Achievement 1", "Description of your first achievement.");
addAchievement("Achievement 2", "Description of your second achievement.");
