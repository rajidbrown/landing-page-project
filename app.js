/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Define the data structure for the sections. An array of objects, with each object representing a section.
const sectionsData = [
  {
    id: 'section4',
    dataNav: 'Section 4',
    content: 'Content for Section 4 goes here',
  },
  {
    id: 'section5',
    dataNav: 'Section 5',
    content: 'Content for Section 5 goes here',
  },
  {
    id: 'section6',
    dataNav: 'Section 6',
    content: 'Content for Section 6 goes here',
  },
  {
    id: 'section7',
    dataNav: 'Section 7',
    content: 'Content for Section 7 goes here',
  },
];
/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
*/
// Function to create a section.
function createSection(id, dataNav, content) {
  const section = document.createElement('section')
  section.id = id;
  section.classList.add('section-class');
  section.setAttribute('data-nav', dataNav);
  // Creates a div element with the class landing__container and adds the content to it.
  const container = document.createElement('div');
  container.classList.add('landing__container');
  container.textContent = content;
  // Adds the div element to the section element.
  section.appendChild(container);
  return section
};
// Loop that iterates through the sectionsData array and creates a section for each object in the array.
for (const sectionData of sectionsData) {
  const section = createSection(sectionData.id, sectionData.dataNav, sectionData.content);
  const mainSection = document.getElementById('main');
  mainSection.appendChild(section);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Selects the unordered list element with the id navbar__list.
const navList = document.getElementById('navbar__list');
// creates a html collection of all the sections with the class section-class, and turns it into an arra

// Selects all the sections with the class section-class and turns it into an array.
const existingSections = Array.from(document.getElementsByClassName('section-class'));

// Helper function to handle navigation link clicks
function handleNavLinkClick(event) {
  event.preventDefault(); // Prevent the default action of the link
  const sectionId = this.getAttribute('href').slice(1); // Get the ID of the target section from the href attribute
  const targetSection = document.getElementById(sectionId); // Find the corresponding section based on the ID
  targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
}


// Loop through existingSections and create navigation links
existingSections.forEach((existingSection) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('data-nav', existingSection.getAttribute('data-nav'));

  const anchor = document.createElement('a');
  anchor.setAttribute('href', `#${existingSection.id}`);
  anchor.textContent = existingSection.getAttribute('data-nav');

  anchor.addEventListener('click', handleNavLinkClick); // Add click event listener to each navigation link

  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});



// Add class 'active' to section when near top of viewport
function highlightActiveSection() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.menu__link');

  sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add your-active-class to active section
          section.classList.add('your-active-class');

          // Find the corresponding navigation item and add the 'active' class to it
          const dataNav = section.getAttribute('data-nav');
          navItems.forEach((navItem) => {
            if (navItem.textContent === dataNav) {
              navItem.classList.add('active');
            } else {
              navItem.classList.remove('active');
            }
          });
        } else {
          // Remove your-active-class from inactive section
          section.classList.remove('your-active-class');
        }
      });
    });

    observer.observe(section);
  });
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Add an event listener to the window object for the scroll event.
window.addEventListener('scroll', function () {
  // Function to check if a section is in the viewport.
  highlightActiveSection();
});
// Build menu

// Scroll to section on link click

// Set sections as active
