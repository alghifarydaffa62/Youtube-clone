const sidebar = document.querySelector('.sidebar');
const maincontent = document.querySelector('.Home');

// Add event listeners to prevent simultaneous scrolling
sidebar.addEventListener('scroll', () => {
    maincontent.scrollTop = 0; // Reset the main content scroll position
});
  
maincontent.addEventListener('scroll', () => {
    sidebar.scrollTop = 0; // Reset the sidebar scroll position
});