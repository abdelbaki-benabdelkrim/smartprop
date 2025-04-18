// بيانات وهمية للخدمات
const services = [
    { name: "العقارات", icon: "🏠", description: "ابحث عن عقار أو أرض" },
    { name: "النجارة", icon: "🪚", description: "حرفيون معتمدون" },
    { name: "الكهرباء", icon: "💡", description: "فنيون مرخصون" },
];

// عرض الخدمات
function loadServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map(service => `
        <div class="service-card">
            <h2>${service.icon} ${service.name}</h2>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// وظيفة البحث
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    alert('سيتم تطبيق البحث لاحقًا: ' + input);
}

// تحميل البيانات عند فتح الصفحة
window.onload = loadServices;