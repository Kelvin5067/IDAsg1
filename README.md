# FlexiWeb Website Project

---

## Overview
FlexiWeb is a modern, responsive three-page website built to showcase the services and capabilities of a digital solutions company. Designed with clarity and user experience in mind, the project highlights FlexiWeb’s strengths in web design, web development, mobile app development, maintenance, and digital marketing.

The main goal of this project is to create a clean, credible, and approachable interface where potential clients can quickly understand what FlexiWeb does and easily reach out for enquiries. A unified contact form is implemented across all pages to eliminate confusion and create a consistent user experience. This project demonstrates my ability to plan, design, code, and test a functional front-end web solution.

---

## Design Process
The design process focused on understanding who the website is for: business owners, entrepreneurs, and organisations looking for digital solutions. These users want clear service information, credibility indicators, and an easy way to make enquiries.

A deliberate design decision in this project was implementing the same unified contact form across all three pages — Home, Services, and Contact. This was done to prevent user confusion, maintain consistency, and ensure that anyone who wants to enquire can do so easily from any page. This also simplifies JavaScript validation and maintenance since the same logic applies across the entire site.

The website layout was planned using Figma wireframes, which helped determine where the hero section, service cards, contact sections, and “Brands That Trust Us” grid would be placed. These wireframes guided the translation from design to HTML and CSS.

My personal FlexiWeb logo was created in Adobe Illustrator, while the 12 fictional brand logos showcased in the Services page were generated using ChatGPT to simulate real client brands and build visual credibility.

### User Stories
- As a potential client, I want to quickly understand what services FlexiWeb offers so I can decide whether they match my needs.
- As a business owner, I want to view previous work or credibility indicators so that I can trust the company.
- As a new customer, I want a consistent contact form across all pages so I can submit enquiries without confusion.
- As a returning user, I want easy navigation between pages so I can quickly find what I need.
- As a mobile user, I want the site to respond and scale properly for smaller screens.

https://www.figma.com/design/H3Dd6auFIjcXD7JUD1H5Fo/Kelvin_ID-Asg1?node-id=0-1&t=jDPf81Od8h0mXQvY-1

---

## Features

### Existing Features

#### Navigation Bar
A clean three-link navigation menu available on all pages: Home, Services, Contact.

#### Homepage
- Hero banner with central messaging  
- Digital experience introduction  
- About section describing FlexiWeb’s approach  
- Featured project highlight  
- Call-to-action button to the Services page  
- Contact form with validation + confirmation popup  

#### Services Page
- Five service cards displayed in a centered, responsive layout  
- “Brands That Trust Us” section showing 12 brand logos generated using ChatGPT  
- Unified contact form placed at the bottom for convenience  

#### Contact Page
- Contact information cards  
- Location image  
- Unified contact form identical to other pages  

#### Unified Contact Form (All Pages)
- Same form structure across the entire website  
- Prevents user confusion  
- JavaScript validation for all fields (name, email, enquiry type, message)  
- Error highlighting for incorrect or missing inputs  
- Confirmation popup before submission  
- Success alert and automatic form reset  

---

## Features Left to Implement
- Backend email handling (PHP/Node.js)  
- Google Maps API integration  
- Dark mode toggle  
- Scroll-triggered animations  
- A filterable services or project section  

---

## Technologies Used

### HTML5  
To Structure the content across all pages using semantic elements.  


### CSS 
Used for layout, responsiveness, spacing, grid and flexbox systems, styling, and hover effects.  
All CSS passed W3C validation.  
  

### JavaScript  
Used for:  
- Form validation  
- Confirmation messages  
- Success alerts  
- Dynamic footer year  


### Adobe Illustrator  
Used to design the FlexiWeb personal logo.

### Figma  
Used to create the wireframes and design layout before implementation.

### ChatGPT  
Assisted with:  
- Generating 12 fictional brand logos  
- HTML tag recommendations  
- CSS structure and responsive layout improvements  
- JavaScript validation & confirmation logic  
- Debugging and refinement of code  

---

## Testing

### Contact Form Testing

**Empty form submission**  
- Expected: Error messages for all fields  
- Result: Passed  

**Invalid email format**  
- Expected: Email field error  
- Result: Passed  

**Missing enquiry type**  
- Expected: Error highlight  
- Result: Passed  

**Valid submission**  
- Expected: Confirmation popup → success alert → reset  
- Result: Passed  





### Browser Compatibility
Tested on:  
- Chrome  
- Edge  
- Safari (mobile)  

All worked without layout issues.

### Validation
- **HTML validated** using W3C Validator after correcting minor issues  
- **CSS validated** with zero errors  


---

## Credits

### Content
All written copy was created specifically for the FlexiWeb project.

### Media
- FlexiWeb personal logo was created using Adobe Illustrator  
- The 12 client logos were generated using ChatGPT  
- Placeholder images used for services and map by generated by ChatGPT
- Used Canva Elements use as icons and  media and i also canva background removal tool to remove the background from the logos generated by ChatGPT

### Acknowledgements
I received inspiration and guidance from **ChatGPT**, especially in:  
- Determining HTML structure and functions to use  
- Resolving CSS layout issues  
- Implementing JavaScript validation and confirmation logic  
- Designing fictional brand logos  

This greatly supported the development of the project.


# IDAsg1
Github Page Link: https://kelvin5067.github.io/IDAsg1
Github Repo Link: https://github.com/Kelvin5067/Asg1-Kelvin