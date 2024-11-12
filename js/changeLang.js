// Перевіряємо, чи є збережена мова, при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "uk"; // За замовчуванням українська
    changeLanguage(savedLanguage);
});

// Функція зміни мови і збереження вибору
function changeLanguage(lang) {
    localStorage.setItem("language", lang); // Зберігаємо вибрану мову
    const elements = document.querySelectorAll('.lang');
    
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}
