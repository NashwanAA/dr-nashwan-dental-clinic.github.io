/* ===================================================================
   DR NASHWAN DENTAL CENTER - ENTERPRISE SCRIPT SYSTEM (UPDATED v2.0)
=================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeSmoothScroll();
    initializeStickyHeader();
    initializeRevealAnimations();
    initializeBackToTop();
    initializeLazyLoading();
    initializePerformanceMonitor();
    initializeDynamicWhatsAppTracking(); // تفعيل محرك التتبع الديناميكي الجديد للمرضى
});

/* SMOOTH SCROLL FOR INTERNAL ANCHORS */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

/* STICKY HEADER SYSTEM */
function initializeStickyHeader() {
    const header = document.querySelector(".header");
    if (!header) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,.98)";
            header.style.backdropFilter = "blur(10px)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
        } else {
            header.style.background = "#ffffff";
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,.05)";
        }
    });
}

/* REVEAL ANIMATION VIA INTERSECTION OBSERVER */
function initializeRevealAnimations() {
    const elements = document.querySelectorAll(
        ".service-card, .article-card, .specialty-card, .feature-box, .faq-item, .contact-card, .landing-cta-box"
    );
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-element");
                }
            });
        },
        { threshold: 0.12 }
    );
    elements.forEach(element => {
        element.classList.add("hidden-element");
        observer.observe(element);
    });
}

/* BACK TO TOP BUTTON BUTTON WITH SYSTEM */
function initializeBackToTop() {
    const button = document.createElement("button");
    button.innerHTML = "↑";
    button.id = "backToTop";
    document.body.appendChild(button);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });
    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* AUTOMATIC IMAGE LAZY LOADING */
function initializeLazyLoading() {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
}

/* PERFORMANCE CORE MONITOR */
function initializePerformanceMonitor() {
    window.addEventListener("load", () => {
        const pageLoadTime = performance.now();
        console.log(`Dr. Nashwan System: Page Loaded in ${pageLoadTime.toFixed(0)} ms`);
    });
}

/* GOOGLE ANALYTICS REUSABLE TRACKING EVENT */
function trackEvent(category, action, label = "") {
    if (typeof gtag === "function") {
        gtag("event", action, {
            event_category: category,
            event_label: label
        });
    }
}

/* 🟢 🚀 DYNAMIC WHATSAPP TRACKING ENGINE (Conversion Hub) */
function initializeDynamicWhatsAppTracking() {
    // استخراج اسم الملف الحالي بدقة متناهية لتحديد مكان نقرة المريض
    const path = window.location.pathname;
    const pageName = path.substring(path.lastIndexOf('/') + 1) || "index.html";
    
    // خريطة تتبع العناقيد والصفحات لربط الإعلانات بالنتائج الاستشارية
    const pageTrackingMap = {
        "index.html": "MAIN_HOME_PAGE",
        "about.html": "ABOUT_DOCTOR_PAGE",
        "services.html": "SERVICES_GUIDE_PAGE",
        "contact.html": "CONTACT_US_PAGE",
        "oral-maxillofacial-surgery.html": "SURGERY_SPECIALTY",
        "dental-implants.html": "IMPLANTS_SPECIALTY",
        "orthodontics.html": "ORTHODONTICS_SPECIALTY",
        "cosmetic-dentistry.html": "COSMETIC_SPECIALTY",
        "digital-dentistry.html": "DIGITAL_DENTAL_SPECIALTY",
        "wisdom-tooth-surgery.html": "CLUSTER_WISDOM_TOOTH",
        "zygomatic-implants.html": "CLUSTER_ZYGOMATIC",
        "tmj-disorder.html": "CLUSTER_TMY_PAIN",
        "trigeminal-neuralgia.html": "CLUSTER_NEURALGIA",
        "whitening-teeth.html": "CLUSTER_WHITENING",
        "implants-ib.html": "LANDING_IMPLANTS_ADS",
        "wisdom-tooth-ib.html": "LANDING_WISDOM_ADS",
        "smile-design-ib.html": "LANDING_SMILE_ADS"
    };

    const trackingCode = pageTrackingMap[pageName] || "GENERAL_PLATFORM";
    const customMessage = encodeURIComponent(`مرحباً دكتور نشوان، أود الاستفسار وحجز موعد عبر المنصة الرقمية. كود الخدمة: [${trackingCode}]`);

    // تحديث كافة روابط الواتساب في الصفحة بالرسالة المخصصة للتتبع
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = `https://wa.me/967779690850?text=${customMessage}`;
        
        link.addEventListener("click", () => {
            trackEvent("WhatsApp_Conversion", "Click", trackingCode);
        });
    });

    // تتبع نقرات مراجعات جوجل بشكل منفصل
    document.querySelectorAll('a[href*="g.page"]').forEach(link => {
        link.addEventListener("click", () => {
            trackEvent("Google_Review", "Click", trackingCode);
        });
    });
}
