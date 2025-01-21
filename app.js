let people = [
    { name: "George", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads&facialHairType=BeardMedium&clotheType=ShirtVNeck" },
    { name: "McKay", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairCurly&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    //{ name: "Gus", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&facialHairType=Blank&clotheType=ShirtVNeck" },
    //{ name: "Anne", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairStraight&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    { name: "Xander", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads&facialHairType=BeardMedium&clotheType=ShirtVNeck" },
    //{ name: "Seth", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairCurly&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    { name: "Lola", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue" },
    { name: "Maddie", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&facialHairType=Blank&clotheType=ShirtVNeck&eyeType=Default&eyebrowType=SadConcerned&mouthType=Twinkle&skinColor=Pale" },
    { name: "Britta", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairStraight&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    //{ name: "Avree", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairCurly&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    //{ name: "Ellie", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairStraight&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    //{ name: "Naomi", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue" },
    { name: "Copelin", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairStraight&facialHairType=Blank&clotheType=ShirtCrewNeck" },
    { name: "Tess", avatarUrl: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&facialHairType=Blank&clotheType=ShirtVNeck" }
];



function createCircleLayout(containerId, numberOfAvatars) {
    const container = document.getElementById(containerId);
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Adjust the radius based on the number of avatars and container size
    const maxAvatarsInCircle = 12; // We can adjust this if you want more/less avatars
    const radius = Math.min(containerWidth, containerHeight) / 2 - 60; // Padding to keep avatars inside
    
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Ensure the circle radius is appropriate based on the number of avatars
    const adjustedRadius = Math.max(radius, (numberOfAvatars * 100) / (2 * Math.PI)); // Avoid too small a circle for large numbers

    // Calculate spacing so avatars don't overlap
    const angleStep = 2 * Math.PI / numberOfAvatars;

    // Loop through the 'people' array and create avatars dynamically
    for (let i = 0; i < numberOfAvatars; i++) {
        const angle = angleStep * i;
        const x = centerX + adjustedRadius * Math.cos(angle) - 50; // Center avatar at the right position
        const y = centerY + adjustedRadius * Math.sin(angle) - 50; // Center avatar at the right position

        // Create a container for the avatar and the name
        const avatarContainer = document.createElement("div");
        avatarContainer.className = "avatar-container";
        avatarContainer.style.position = "absolute";
        avatarContainer.style.left = `${x}px`;
        avatarContainer.style.top = `${y}px`;
        avatarContainer.style.textAlign = "center"; // Center the name under the avatar

        // Create the avatar image using the data from the 'people' object
        const avatarImage = document.createElement("img");
        avatarImage.src = people[i].avatarUrl; // Dynamically set avatar URL from the people array
        avatarImage.alt = `${people[i].name}'s Avatar`; // Set the alt text to the person's name
        avatarImage.className = "avatar"; // Add the 'avatar' class here
        avatarImage.style.width = "100px"; // Avatar size
        avatarImage.style.height = "100px"; // Avatar size

        // Create the name element under the avatar
        const avatarName = document.createElement("div");
        avatarName.textContent = people[i].name; // Set the name under the avatar
        avatarName.style.marginTop = "10px"; // Space between avatar and name
        avatarName.style.fontSize = "14px"; // Font size for the name

        // Append the avatar image and name to the avatar container
        avatarContainer.appendChild(avatarImage);
        avatarContainer.appendChild(avatarName);

        // Add the avatar container to the main container
        container.appendChild(avatarContainer);

        // Add the click event listener for highlighting
        avatarContainer.addEventListener('mouseover', () => {
            highlightAvatar(i); // Highlight the clicked avatar
        });
    }
}

function highlightAvatar(index) {
    // Remove the 'highlighted' class from all avatars
    //console.log(`We are highlighting ${people[index].name}`);
    const allAvatars = document.querySelectorAll('.avatar'); // Now targeting the images with 'avatar' class
    allAvatars.forEach(avatar => {
        avatar.classList.remove('highlighted');
    });

    // Add the 'highlighted' class to the selected avatar
    const avatarToHighlight = document.querySelectorAll('.avatar')[index]; // Target avatar image
    avatarToHighlight.classList.add('highlighted');
}



// Example usage: create a layout with a number of avatars, e.g., 5 avatars
createCircleLayout("circle", people.length);

