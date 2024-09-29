/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Dropdown Closure on Item Click
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var dropdown = item.closest('.dropdown');
            var bsDropdown = bootstrap.Dropdown.getInstance(dropdown.querySelector('.dropdown-toggle'));
            if (bsDropdown) {
                bsDropdown.hide();
            }
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        var nav = document.getElementById('mainNav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll and offset for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 76; // Adjust this value based on your header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add hover effect to nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('nav-item-hover');
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('nav-item-hover');
        });
    });

    // Animate logo on page load
    window.addEventListener('load', function() {
        const logo = document.querySelector('.logo-text');
        if (logo) {
            logo.classList.add('logo-animate');
        }
    });

    // Accessibility: Handle keyboard navigation for dropdowns
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                bootstrap.Dropdown.getOrCreateInstance(toggle).toggle();
            }
        });
    });

    // Load header and footer
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Activate the current page's nav item
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage || 
                    (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                    link.classList.add('active');
                    if (link.classList.contains('dropdown-item')) {
                        link.closest('.nav-item').querySelector('.nav-link').classList.add('active');
                    }
                }
            });
            // Call navbarShrink after header is loaded
            navbarShrink();
        });


    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);

    // Gallery data
    const galleryData = [
        {
            title: "Equipment",
            description: "State-of-the-art refrigeration equipment for various industrial and commercial applications.",
            images: [
                "assets/img/gallery/01-equipment-1.jpg",
                "assets/img/gallery/01-equipment-2.jpg",
                "assets/img/gallery/01-equipment-3.jpg",
                "assets/img/gallery/01-equipment-4.jpg",
                "assets/img/gallery/01-equipment-5.jpg",
                "assets/img/gallery/01-equipment-6.jpg",
                "assets/img/gallery/01-equipment-7.jpg",
                "assets/img/gallery/01-equipment-8.jpg",
                "assets/img/gallery/01-equipment-9.jpg",
                "assets/img/gallery/01-equipment-10.jpg",
                "assets/img/gallery/01-equipment-11.jpg",
                "assets/img/gallery/01-equipment-12.jpg",
                "assets/img/gallery/01-equipment-13.jpg",
                "assets/img/gallery/01-equipment-14.jpg",
                "assets/img/gallery/01-equipment-15.jpg",
                "assets/img/gallery/01-equipment-16.jpg",
                "assets/img/gallery/01-equipment-17.jpg",
            ]
        },
        {
            title: "Custom Tailored Design",
            description: "Bespoke refrigeration solutions designed to meet your specific needs and requirements.",
            images: [
                "assets/img/gallery/02-custom-tailored-design-1.jpg",
                "assets/img/gallery/02-custom-tailored-design-2.jpg",
            ]
        },
        {
            title: "Climate Controlled, Frozen & Logistical Stores",
            description: "Advanced storage solutions for temperature-sensitive products and efficient logistics.",
            images: [
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-1.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-2.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-3.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-4.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-5.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-6.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-7.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-8.jpg",
                "assets/img/gallery/03-climate-controlled,frozen-&-logistical-stores-9.jpg",
            ]
        },
        {
            title: "Chillers",
            description: "High-performance chillers for various industrial cooling applications.",
            images: [
                "assets/img/gallery/04-chillers-1.jpg",
                "assets/img/gallery/04-chillers-2.jpg",
            ]
        },
        {
            title: "Meat and Poltury",
            description: "Tailored refrigeration solutions for meat and Poltury processing and storage.",
            images: [
                "assets/img/gallery/05-meat-and-poltury-1.jpg",
                "assets/img/gallery/05-meat-and-poltury-2.jpg",
                "assets/img/gallery/05-meat-and-poltury-3.jpg",
                "assets/img/gallery/05-meat-and-poltury-4.jpg",
                "assets/img/gallery/05-meat-and-poltury-5.jpg",
            ]  
        },
        {
            title: "Dairy and Beverages",
            description: "Specialized cooling systems for the dairy and beverage industries.",
            images: [
                "assets/img/gallery/06-dairy-and-beverages-1.jpg",
                "assets/img/gallery/06-dairy-and-beverages-2.jpg",
            ]
        },
        {
            title: "Pharmaceutical Industry",
            description: "Precision cooling systems for pharmaceutical manufacturing and storage.",
            images: [
                "assets/img/gallery/07-pharmacitucals-1.jpg",
                "assets/img/gallery/07-pharmacitucals-2.jpg"
            ]
        },
        {
            title: "Petrochemical Industry",
            description: "Robust refrigeration solutions for the demanding petrochemical sector.",
            images: [
                "assets/img/gallery/08-petrochemicals-1.jpg",
                "assets/img/gallery/08-petrochemicals-2.jpg",
            ]
        },
        {
            title: "Automation",
            description: "Cutting-edge automation systems for efficient refrigeration management.",
            images: [
                "assets/img/gallery/09-automation-1.jpg",
                "assets/img/gallery/09-automation-2.jpg",
                "assets/img/gallery/09-automation-3.jpg",
                "assets/img/gallery/09-automation-4.jpg",
            ]
        },
        {
            title: "Production Lines",
            description: "Integrated cooling solutions for various production lines and manufacturing processes.",
            images: [
                "assets/img/gallery/10-production-lines-1.jpg",
                "assets/img/gallery/10-production-lines-2.jpg",
                "assets/img/gallery/10-production-lines-3.jpg",
                "assets/img/gallery/10-production-lines-4.jpg",
            ]
        },
        {
            title: "Quick Freezing and Glazing Solutions",
            description: "Rapid freezing and glazing systems for food processing and preservation.",
            images: [
                "assets/img/gallery/11-quick-freezing-and-glazing-1.jpg",
                "assets/img/gallery/11-quick-freezing-and-glazing-2.jpg",
            ]
        },
        {
            title: "Vacuum Freeze Dry",
            description: "Advanced vacuum freeze-drying technology for various applications.",
            images: [
                "assets/img/gallery/12-vaccum-freeze-dry-1.jpg",
            ]
        },
        {
            title: "Spare Parts & After Sale Service",
            description: "Comprehensive spare parts supply and after-sales support for all our refrigeration systems.",
            images: [
                "assets/img/gallery/13-spareparts-&-after-sale-service-1.jpg",
                "assets/img/gallery/13-spareparts-&-after-sale-service-2.jpg",
                "assets/img/gallery/13-spareparts-&-after-sale-service-3.jpg",
                "assets/img/gallery/13-spareparts-&-after-sale-service-4.jpg",
            ]
        },
    ];


    // Function to generate gallery HTML
    function generateGallery() {
        const galleryContainer = document.getElementById('gallery-container');
        if (!galleryContainer) {
            console.error("Gallery container not found");
            return;
        }
        let galleryHtml = '';
        
        galleryData.forEach((category, index) => {
            galleryHtml += `
                <div class="gallery-item" data-order="${index + 1}">
                    <div class="gallery-category">
                        <h3 class="text-center mb-3">${category.title}</h3>
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                ${category.images.map(img => `
                                    <div class="swiper-slide">
                                        <a href="#" class="gallery-image" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="${img}">
                                            <div class="image-wrapper">
                                                <img src="${img}" alt="${category.title}" loading="lazy" width="600" height="400">
                                            </div>
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            `;
        });

        galleryContainer.innerHTML = galleryHtml;

        // Initialize gallery Swipers
        const swipers = document.querySelectorAll('.gallery-category .swiper');
        swipers.forEach(function(swiperContainer) {
            new Swiper(swiperContainer, {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                preloadImages: false,
                lazy: true,
                observer: true,
                observeParents: true,
            });
        });
    }

    // Call the function to generate the gallery
    generateGallery();

    // Initialize custom Modal for image viewing
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = imageModal.querySelector('.modal-title');
        let currentImageIndex = 0;
        let currentCategory = null;

        imageModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img-src');
            modalImage.src = imgSrc;

            // Find current category and image index
            currentCategory = galleryData.find(category => category.images.includes(imgSrc));
            currentImageIndex = currentCategory.images.indexOf(imgSrc);
            modalTitle.textContent = currentCategory.title;
        });

        // Navigation buttons
        const prevButton = imageModal.querySelector('.btn-prev');
        const nextButton = imageModal.querySelector('.btn-next');

        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + currentCategory.images.length) % currentCategory.images.length;
            modalImage.src = currentCategory.images[currentImageIndex];
        });


        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % currentCategory.images.length;
            modalImage.src = currentCategory.images[currentImageIndex];
        });

        // Zoom functionality
        const zoomButton = imageModal.querySelector('.btn-zoom');
        let isZoomed = false;
        let dragStart = { x: 0, y: 0 };

        zoomButton.addEventListener('click', () => {
            isZoomed = !isZoomed;
            modalImage.classList.toggle('zoomed', isZoomed);
            zoomButton.innerHTML = isZoomed ? '<i class="fas fa-search-minus"></i> Unzoom' : '<i class="fas fa-search-plus"></i> Zoom';
        });


        modalImage.addEventListener('mousedown', (e) => {
            if (isZoomed) {
                dragStart.x = e.clientX - modalImage.offsetLeft;
                dragStart.y = e.clientY - modalImage.offsetTop;
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stopDrag);
            }
        });

        function drag(e) {
            modalImage.style.left = (e.clientX - dragStart.x) + 'px';
            modalImage.style.top = (e.clientY - dragStart.y) + 'px';
        }


        function stopDrag() {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }

        // Fullscreen functionality
        const fullscreenButton = imageModal.querySelector('.btn-fullscreen');
        let isFullscreen = false;

        fullscreenButton.addEventListener('click', () => {
            if (!isFullscreen) {
                if (imageModal.requestFullscreen) {
                    imageModal.requestFullscreen();
                } else if (imageModal.mozRequestFullScreen) { // Firefox
                    imageModal.mozRequestFullScreen();
                } else if (imageModal.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    imageModal.webkitRequestFullscreen();
                } else if (imageModal.msRequestFullscreen) { // IE/Edge
                    imageModal.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { // Firefox
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    document.msExitFullscreen();
                }
            }
        });

        document.addEventListener('fullscreenchange', updateFullscreenButton);
        document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
        document.addEventListener('mozfullscreenchange', updateFullscreenButton);
        document.addEventListener('MSFullscreenChange', updateFullscreenButton);

        function updateFullscreenButton() {
            isFullscreen = !isFullscreen;
            fullscreenButton.innerHTML = isFullscreen ? '<i class="fas fa-compress"></i> Exit Fullscreen' : '<i class="fas fa-expand"></i> Fullscreen';
        }

        // Reset zoom and position when modal is hidden
        imageModal.addEventListener('hidden.bs.modal', () => {
            isZoomed = false;
            modalImage.classList.remove('zoomed');
            modalImage.style.left = '';
            modalImage.style.top = '';
            zoomButton.innerHTML = '<i class="fas fa-search-plus"></i> Zoom';
        });
    } else {
        console.warn('Image modal not found in the DOM');
    }

    // Initialize partners Swiper
    new Swiper('.partners-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 50
            }
        }
    });

    // Initialize hero Swiper
    new Swiper('.hero-swiper', {
        slidesPerView: 1,
        effect: 'fade',
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
    });
});