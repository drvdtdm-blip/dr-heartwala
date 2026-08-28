/**
 * Dr Heartwala - Dynamic Website Interactivity Layer
 * Author: Antigravity AI
 * Logic for Tab Routing, Modals, Drawer Navigation, and micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Elements ---
    const navTabs = document.querySelectorAll('.nav-tab:not(.future-tab)');
    const drawerTabs = document.querySelectorAll('.drawer-tab');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    const mobileToggle = document.getElementById('mobile-toggle');
    const drawerClose = document.getElementById('drawer-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    
    const consultModal = document.getElementById('consult-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const openConsultBtn = document.getElementById('open-consult-btn');
    const mobileConsultBtn = document.getElementById('mobile-consult-btn');
    const heroConsultBtn = document.getElementById('hero-btn-book');
    const closeConsultBtn = document.getElementById('modal-close-btn');
    const consultationForm = document.getElementById('consultation-form');
    
    const heroAboutBtn = document.getElementById('hero-btn-about');

    // --- Tab Switching Logic ---
    function switchTab(tabId) {
        // 1. Update Panels
        tabPanels.forEach(panel => {
            if (panel.id === `panel-${tabId}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        // 2. Update Desktop Nav Active States
        navTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 3. Update Mobile Drawer Active States
        drawerTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 4. Scroll to Top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Attach click handlers to Desktop Navigation
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Attach click handlers to Mobile Drawer Navigation
    drawerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            switchTab(targetTab);
            closeDrawer();
        });
    });

    // Attach click handlers to Footer Nav Links
    footerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Landing Page Action Button: "Know More About Me"
    if (heroAboutBtn) {
        heroAboutBtn.addEventListener('click', () => {
            switchTab('about');
        });
    }

    // --- Mobile Drawer Handling ---
    function openDrawer() {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // --- Consultation Modal Handling ---
    function openModal() {
        consultModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeDrawer(); // Close drawer if booking from mobile navigation
    }

    function closeModal() {
        consultModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (consultationForm) consultationForm.reset();
    }

    if (openConsultBtn) openConsultBtn.addEventListener('click', openModal);
    if (mobileConsultBtn) mobileConsultBtn.addEventListener('click', openModal);
    if (heroConsultBtn) heroConsultBtn.addEventListener('click', openModal);
    const bookOrderBtn = document.getElementById('book-btn-order');
    if (bookOrderBtn) bookOrderBtn.addEventListener('click', openModal);
    if (closeConsultBtn) closeConsultBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape Key to Close Modal & Drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDrawer();
        }
    });

});
