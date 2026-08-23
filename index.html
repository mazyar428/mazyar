// --- 1. دەستنیشانکردنی ئەلەمێنتەکانی DOM ---
const authScreen = document.getElementById('authScreen');
const chatScreen = document.getElementById('chatScreen');
const loginForm = document.getElementById('loginForm');
const googleBtn = document.getElementById('googleBtn');
const logoutBtn = document.getElementById('logoutBtn');

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// --- 2. بەڕێوەبردنی حاڵەتی چوونەژوورەوە و دەرچوون ---
function showChatView() {
  authScreen.style.display = 'none';
  chatScreen.style.display = 'flex';
}

function showLoginView() {
  chatScreen.style.display = 'none';
  authScreen.style.display = 'block';
  chatMessages.innerHTML = '<div class="message bot">سڵاو! من ژیریی دەستکردم. چۆن دەتوانم هاوکاریت بکەم؟</div>';
}

// چوونەژوورەوە بە ئیمەیڵ و وشەی نهێنی
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // لێرەدا دەتوانیت Firebase Auth یان API ناوەکی خۆت بەکاربهێنیت
    console.log(`Loggin in with: ${email}`);
    showChatView();
  }
});

// چوونەژوورەوە بە Google
googleBtn.addEventListener('click', () => {
  // شوێنی بەستنەوەی Google Auth SDK
  console.log('Initiating Google Login...');
  showChatView();
});

// دەرچوون لە ئەپڵیکەیشن
logoutBtn.addEventListener('click', () => {
  showLoginView();
});


// --- 3. لۆجیکی چات و پەیوەندیکردن بە AI ---

// ناردنی پەیام
function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  // ۱. نیشاندانی پەیامی بەکارهێنەر
  appendMessage(text, 'user');
  userInput.value = '';

  // ۲. نیشاندانی نیشانەی "وەڵامدانەوە..."
  const typingIndicator = appendMessage('لە وەڵامدانەوەدایە...', 'bot');

  // ۳. پەیوەندیکردن بە APIی ژیریی دەستکرد (نموونە بۆ OpenAI یان backend)
  fetchAIResponse(text)
    .then((reply) => {
      typingIndicator.textContent = reply;
    })
    .catch((err) => {
      typingIndicator.textContent = 'کێشەیەک ڕوویدا لە وەرگرتنی وەڵام.';
      console.error(err);
    });
}

// دروستکردنی ئەلەمێنتی پەیام لەرێگەی DOM
function appendMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll بۆ خوارەوە
  
  return msgDiv;
}

// سیستەمی وەڵامدانەوەی دەستکرد (Mock API / Real API Target)
async function fetchAIResponse(userText) {
  /* ئەگەر API واقعی بەکاربهێنیت:
  const response = await fetch('https://api.your-backend.com/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userText })
  });
  const data = await response.json();
  return data.reply;
  */

  // وەڵامی نموونەیی بۆ تاقیکردنەوە (دواکەوتنی ۱ چرکە)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`وەڵامی دروستکراو بۆ: "${userText}"`);
    }, 1000);
  });
}

// گوێگرتن لە کلیلی Enter و دوگمەی Send
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
