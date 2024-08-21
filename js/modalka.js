// Відкриття модального вікна
document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}

// Закриття модального вікна
document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

// Закриття при натисканні поза модальним вікном
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

// Обробка форми
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    
    // Отримання даних з форми
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    // Виведення даних в консоль
    console.log(`Ім'я: ${firstName}, Прізвище: ${lastName}, Номер телефону: ${phone}, Емайл: ${email}`);
    
    // Очищення форми
    document.getElementById('contactForm').reset();
    
    // Відображення повідомлення
    document.getElementById('thankYouMessage').style.display = "block";

    // Відправка даних в Telegram бот
    const TOKEN = "6744938621:AAFyjBSJR5arRq1b1JRpK0IQKXcDcCOoaRc";
    const CHAT_ID = "743364707";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    let message = `<b>Заявка з сайту: my business card</b>\n`;
    message += `<b>Ім'я: </b>${firstName}\n`;
    message += `<b>Прізвище: </b>${lastName}\n`;
    message += `<b>Номер телефону: </b>${phone}\n`;
    message += `<b>Email: </b>${email}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        console.log("Повідомлення відправлено в Telegram");
    })
    .catch((err) => {
        console.warn("Помилка при відправленні повідомлення в Telegram", err);
    })
    .finally(() => {
        console.log("Відправка завершена");
    });
}
