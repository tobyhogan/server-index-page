// Sample data - replace this with your actual website data
const websites = [
  {
    name: "Tab Title Picker",
    url: "/tab-title-picker/"
  },
  {
    name: "Completed Task Tracker",
    url: "/completed-task-tracker/"
  },
  {
    name: "Custom/Variable Site",
    url: "/custom-variable-site/"
  },
  {
      name: "React & Vite Test - Counter",
      url: "/react-server-test/"
  },
  {
      name: "Test Site - Counter",
      url: "/basic-html-test-1/"
  }
  // Add more websites as needed
];

// Function to create website cards
function createWebsiteCard(website) {
    return `
        <div class="website-card">
            <a href="${website.url}"></a>
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