# Staff Logic Backend - Інструкція з налаштування

Ця папка містить серверний код (Node.js Express), який забезпечує хмарну синхронізацію даних для додатка Staff Logic.

---

## 🚀 Як безкоштовно запустити сервер в хмарі за 2 хвилини (на Render.com)

1. **Створіть новий репозиторій на GitHub** (наприклад, `staff-logic-backend`).
2. **Завантажте туди ці два файли** (`server.js` та `package.json`).
3. Зареєструйтесь на сайті [Render.com](https://render.com/) (можна увійти через GitHub).
4. Натисніть кнопку **New +** та виберіть **Web Service**.
5. Підключіть свій репозиторій з GitHub.
6. Вкажіть наступні налаштування:
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `node server.js`
7. Натисніть **Deploy Web Service**.
8. Через хвилину Render видасть вам посилання (наприклад, `https://staff-logic-db.onrender.com`).
9. Скопіюйте це посилання та вставте його у файл `app.js` у змінну `BACKEND_URL` на самому початку файлу!

---

## 💻 Як запустити сервер локально на ПК

1. Встановіть [Node.js](https://nodejs.org/).
2. Відкрийте термінал у папці `backend/` та запустіть команду:
   ```bash
   npm install
   ```
3. Після цього запустіть сервер:
   ```bash
   node server.js
   ```
4. Сервер запуститься на `http://localhost:3000`. Вкажіть цю адресу в `BACKEND_URL` в `app.js`.
