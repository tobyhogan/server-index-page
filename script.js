// Sample data - replace this with your actual website data
const websites = [
    {
        name: "Blog Site",
        url: "/blog"
    },
    {
        name: "Portfolio",
        url: "/portfolio"
    },
    {
        name: "Photo Gallery",
        url: "/gallery"
    }
    // Add more websites as needed
];

// Function to create website cards
function createWebsiteCard(website) {
    return `
        <div class="website-card">
            <a href="${website.url}" target="_blank"></a>
            <span class="site-name">${website.name}</span>
            <span class="site-url">${website.url}</span>
        </div>
    `;
}

// Function to render all websites
function renderWebsites() {
    const websitesGrid = document.getElementById('websitesGrid');
    websitesGrid.innerHTML = websites.map(website => createWebsiteCard(website)).join('');
}

// Initial render
renderWebsites(); 