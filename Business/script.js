// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // Adjust for fixed header
            behavior: 'smooth',
        });
    });
});

// Service details data
const serviceDetails = {
    consulting: {
        title: "Consulting",
        description: "Our expert consultants work closely with you to identify growth opportunities and craft strategies that deliver measurable results.",
    },
    marketing: {
        title: "Marketing",
        description: "We create and execute tailored marketing campaigns designed to engage your audience and amplify your brand's reach.",
    },
    development: {
        title: "Development",
        description: "Our development team provides cutting-edge solutions to transform your business digitally and drive innovation.",
    },
};

// Function to show service details
function showServiceDetails(serviceKey) {
    const serviceDetailDiv = document.getElementById("service-details");
    const titleElement = document.getElementById("service-title");
    const descriptionElement = document.getElementById("service-description");

    const service = serviceDetails[serviceKey];
    if (service) {
        titleElement.textContent = service.title;
        descriptionElement.textContent = service.description;
        serviceDetailDiv.classList.remove("hidden");
    }
}

// Function to hide service details
function hideServiceDetails() {
    const serviceDetailDiv = document.getElementById("service-details");
    serviceDetailDiv.classList.add("hidden");
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Build mailto URL
    const mailtoLink = `mailto:dataconqurers@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AEmail: ${encodeURIComponent(email)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Reset the form
    this.reset();
    alert('Thank you for contacting us!');
});