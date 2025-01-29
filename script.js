
document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project-container");

    // Fetch GitHub repositories
    fetch("https://api.github.com/users/Ayushltp/repos")
        .then(response => response.json())
        .then(repositories => {
            repositories.forEach(repo => {
                // Create project card
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");

                // Populate project card
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
                `;

                // Append to project container
                projectContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error("Error fetching GitHub projects:", error);
            projectContainer.innerHTML = `<p>Unable to load projects at this time. Please try again later.</p>`;
        });
});


document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        const hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            hamburger.style.transform = "rotate(45deg)";
            hamburger.style.background = "#fc6d3f";
        } else {
            hamburger.style.transform = "rotate(0)";
        }
    });
});
