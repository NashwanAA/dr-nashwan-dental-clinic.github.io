/* 
   إعدادات الألوان والخطوط الأساسية 
   المصدر: مركز الدكتور نشوان الخولاني
*/
:root {
    --primary-color: #00b894; /* اللون الأخضر الطبي المريح */
    --secondary-color: #2c3e50; /* اللون الكحلي الوقور للهيبة الطبية */
    --accent-color: #e74c3c; /* لون التنبيه والطوارئ */
    --text-color: #444;
    --light-bg: #f9fbfd;
    --transition: all 0.3s ease-in-out;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    line-height: 1.8;
    color: var(--text-color);
    background-color: var(--light-bg);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

/* --- شريط التنقل (Navbar) --- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 15px 0;
    transition: var(--transition);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary-color);
    text-decoration: none;
}

.nav-menu ul {
    display: flex;
    list-style: none;
    gap: 25px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: 700;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--primary-color);
}

.btn-nav {
    background: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
}

/* --- القسم الرئيسي (Hero Section) --- */
.hero-section {
    padding: 180px 0 100px;
    background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    color: var(--secondary-color);
    margin-bottom: 20px;
    line-height: 1.3;
}

.hero-content p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
    color: #666;
}

.hero-btns {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: var(--transition);
}

.btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    padding: 13px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: var(--transition);
}

.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0, 184, 148, 0.2); }

/* --- شبكة المقالات (Articles Grid) --- */
.section-padding { padding: 80px 0; }
.section-title { text-align: center; margin-bottom: 50px; font-size: 2rem; color: var(--secondary-color); }

.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.article-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: var(--transition);
    display: block;
}

.article-card:hover { transform: translateY(-10px); }

.article-card img { width: 100%; height: 200px; object-fit: cover; }

.article-card h3 { padding: 20px 20px 10px; color: var(--secondary-color); }
.article-card p { padding: 0 20px 20px; font-size: 0.9rem; color: #777; }

/* --- نموذج الحجز (Booking Form) --- */
input, select {
    transition: var(--transition);
    outline: none;
}

input:focus, select:focus {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 8px rgba(0, 184, 148, 0.1);
}

/* --- الاستجابة للموبايل (Responsive) --- */
@media (max-width: 768px) {
    .hero-content h1 { font-size: 2rem; }
    .nav-menu ul { display: none; } /* يمكن تحويلها مستقبلاً لقائمة منسدلة */
    .hero-btns { flex-direction: column; }
    .platforms-grid { gap: 20px !important; }
}
