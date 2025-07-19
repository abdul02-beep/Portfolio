tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#1E40AF',
                dark: '#1F2937',
                light: '#F9FAFB'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif']
            }
        }
    }
}


 // Mobile menu toggle
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');
 
 mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });
 
 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             if (!mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
             }
         }
     });
 });
 
 // Show more experience toggle
 const showMoreExpBtn = document.getElementById('show-more-exp');
 const moreExperience = document.getElementById('more-experience');
 
 showMoreExpBtn.addEventListener('click', () => {
     moreExperience.classList.toggle('hidden');
     showMoreExpBtn.innerHTML = moreExperience.classList.contains('hidden') 
         ? 'Show More Experience <i class="fas fa-chevron-down ml-1"></i>' 
         : 'Show Less <i class="fas fa-chevron-up ml-1"></i>';
 });
 
 // Portfolio filtering
 const portfolioFilters = document.querySelectorAll('.portfolio-filter');
 const projectCards = document.querySelectorAll('.project-card');
 
 portfolioFilters.forEach(filter => {
     filter.addEventListener('click', () => {
         // Remove active class from all filters
         portfolioFilters.forEach(f => f.classList.remove('active', 'bg-primary', 'text-white'));
         portfolioFilters.forEach(f => f.classList.add('bg-white', 'text-gray-700'));
         
         // Add active class to clicked filter
         filter.classList.add('active', 'bg-primary', 'text-white');
         filter.classList.remove('bg-white', 'text-gray-700');
         
         const filterValue = filter.getAttribute('data-filter');
         
         projectCards.forEach(card => {
             if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                 card.style.display = 'block';
             } else {
                 card.style.display = 'none';
             }
         });
     });
 });
 
 // Contact form handling
 const contactForm = document.getElementById('contact-form');
 const formMessage = document.getElementById('form-message');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // In a real implementation, you would send the form data to a server
     // For demo purposes, we'll just show a success message
     formMessage.classList.remove('hidden');
     contactForm.reset();
     
     // Hide the message after 5 seconds
     setTimeout(() => {
         formMessage.classList.add('hidden');
     }, 5000);
 });
 
 // Add active class to nav link based on scroll position
 window.addEventListener('scroll', () => {
     const sections = document.querySelectorAll('section');
     const navLinks = document.querySelectorAll('.nav-link');
     
     let current = '';
     
     sections.forEach(section => {
         const sectionTop = section.offsetTop - 100;
         const sectionHeight = section.clientHeight;
         
         if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
             current = section.getAttribute('id');
         }
     });
     
     navLinks.forEach(link => {
         link.classList.remove('text-primary');
         if (link.getAttribute('href') === `#${current}`) {
             link.classList.add('text-primary');
         }
     });
 });

 const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent page reload

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset(); // Optional: clears form fields after submission
    console.log("Message sent successfully!");
  } else {
    console.error("Something went wrong with the form submission.");
  }
});

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9614244175bf5694',t:'MTc1Mjg2NDM4NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
