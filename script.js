/**
 * 🎯 SYSTEM: CONVERSION & PATIENT TRAFFIC TRACKING DETECTOR
 * DESIGNED FOR: DR. NASHWAN AL-KHAWLANI DENTAL CLINIC
 * PURPOSE: DYNAMICALLY CAPTURE VISITOR INTENT & CUSTOMIZE WHATSAPP MESSAGES
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. تحديد رقم الواتساب الرسمي للمركز (بدون أصفار إضافية أو علامة +)
    const whatsappNumber = "967779690850";
    
    // 2. قراءة اسم الملف الحالي من الرابط لتحديد سياق التتبع (Page Context)
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";

    // 3. قاعدة البيانات الذكية للرسائل التلقائية بناءً على الصفحة التي يتصفحها المريض
    let customMessage = "مرحباً دكتور نشوان، أود الاستفسار عن الخدمات العلاجية المتوفرة في المركز وحجز موعد كشف.";

    if (pageName.includes("about.html")) {
        customMessage = "مرحباً دكتور نشوان، تصفحت سيرتكم الذاتية الموقرة وأود حجز موعد كشف واستشارة تخصصية في مركزكم.";
    } else if (pageName.includes("services.html")) {
        customMessage = "مرحباً دكتور، أنا أطلع على دليل الخدمات بمركزكم وأرغب في الاستفسار عن تكلفة خطة علاجية مخصصة لحالتي.";
    } else if (pageName.includes("contact.html")) {
        customMessage = "مرحباً بمركز الدكتور نشوان الخولاني، أنا متواجد في صفحة الاتصال وأرغب في تنسيق موعد زيارة للمركز بمفرق جبلة.";
    } else if (pageName.includes("dental-implants.html")) {
        customMessage = "مرحباً دكتور نشوان، أنا مهتم بـ (منظومة زراعة الأسنان وحلول الضمور العظمي الشديد) وأود الاستفسار عن الزرعات الوجنية/ثلاثية الأبعاد.";
    } else if (pageName.includes("oral-maxillofacial-surgery.html")) {
        customMessage = "مرحباً دكتور، أود حجز استشارة جراحية عاجلة بخصوص (جراحة الفم والوجه والفكين / أضراس العقل المطمورة المعقدة).";
    } else if (pageName.includes("cosmetic-dentistry.html")) {
        customMessage = "مرحباً دكتور نشوان، أرغب في حجز موعد لجلسة تصوير ومسح رقمي لتصميم ابتسامة هوليود (الفينير/اللومينير الخزفي).";
    } else if (pageName.includes("digital-dentistry.html")) {
        customMessage = "مرحباً دكتور، أود الاستفسار عن تكنولوجيا طب الأسنان الرقمي والماسح الضوئي وأخذ مقاس رقمي لتركيبات الزيركون بالمركز.";
    } else if (pageName.includes("tmj-disorder.html")) {
        customMessage = "مرحباً دكتور نشوان، قرأت مقالكم الطبي بخصوص (آلام المفصل الفكي واضطرابات العصب الخامس) وأعاني من أعراض مشابهة وأطلب موعد فحص.";
    }

    // 4. تشفير الرسالة الطبية لتتوافق مع بروتوكولات روابط الويب (URL Encoding)
    const encodedMessage = encodeURIComponent(customMessage);
    const finalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. محرك الحقن التلقائي: البحث عن كافة روابط الواتساب في الصفحة وتحديثها بالرسالة المشفرة
    const allLinks = document.querySelectorAll("a");
    let injectedCount = 0;

    allLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        // التحقق مما إذا كان الرابط موجهاً للواتساب العام أو يحتوي على الأيقونة العائمة
        if (href && (href.includes("wa.me") || link.classList.contains("whatsapp-float"))) {
            link.setAttribute("href", finalWhatsappUrl);
            link.setAttribute("target", "_blank"); // فتح المحادثة في نافذة جديدة دوماً لعدم تشتيت المريض
            injectedCount++;
        }
    });

    console.log(`[Tracking System Activated]: Successfully injected custom messages into (${injectedCount}) WhatsApp buttons for context: ${pageName}`);
});