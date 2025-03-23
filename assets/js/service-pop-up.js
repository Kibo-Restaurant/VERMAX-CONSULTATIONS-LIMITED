document.addEventListener("DOMContentLoaded", function () {
    let serviceData = {};

    // Fetch JSON data
    fetch("assets/json/services.json")
        .then(response => response.json())
        .then(data => {
            serviceData = data.services.reduce((acc, service) => {
                acc[service.id] = service;
                return acc;
            }, {});
        })
        .catch(error => console.error("Error loading JSON:", error));

    // Modal elements
    const modal = document.getElementById("custom-modal");
    const modalBody = modal.querySelector(".modal-body");
    const closeModal = modal.querySelector(".modal-close");

    // Attach event listeners
    document.querySelectorAll(".dynamic-lightbox").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let serviceId = link.getAttribute("data-id");
            let service = serviceData[serviceId];

            if (service) {
                // Populate modal content with description
                modalBody.innerHTML = `
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul>${service.additionalInfo.map(info => `<li>${info}</li>`).join('')}</ul>
                    <div class="glightbox-buttons">
                        <a href="${service.whatsapp}" class="btn btn-primary" target="_blank">Consult Now</a>
                        <a  id="close-service" class="btn btn-secondary">Back to Home</a>
                    </div>`;

                // Set background image
                modal.style.backgroundImage = `url(${service.image})`;
                modal.style.display = "block"; // Show modal
                
                const closeService= document.getElementById('close-service');
                console.log(closeService);
                // Close modal with Back to Home
                closeService.addEventListener("click", function () {
                    modal.style.display = "none";
                });

                
            } else {
                console.error("Service data not found for ID:", serviceId);
            }
        });
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
   

    // Close on outside click
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
     // Close on outside click
     window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});