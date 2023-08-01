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
function createSection (id, dataNav, content) {
  const section = document.createElement ('section')
  section.id = id;
  section.classList.add ('section-class');
  section.setAttribute ('data-nav', dataNav);
// Creates a div element with the class landing__container and adds the content to it.
  const container = document.createElement ('div');
  container.classList.add ('landing__container');
  container.textContent = content;
// Adds the div element to the section element.
section.appendChild (container);
return section
}; 
// Loop that iterates through the sectionsData array and creates a section for each object in the array.
for (const sectionData of sectionsData) {
  const section = createSection (sectionData.id, sectionData.dataNav, sectionData.content);
  const mainSection = document.getElementById ('main');
  mainSection.appendChild (section);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navList = document.getElementById('navbar--list'); 

// Function to create a list item for the navigation menu.
sectionsData.forEach (function (sectionData) {
document.createElementall

});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


