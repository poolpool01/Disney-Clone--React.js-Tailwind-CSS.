# 🎬 Disney+ Clone (React.js + Tailwind CSS)

เว็บไซต์ Disney+ Clone 2.0 ที่เน้นความสวยงาม การแสดงผลลื่นไหล และการดึงข้อมูลภาพยนตร์จริงจาก The Movie Database (TMDB) มาแสดงผลแบบ Dynamic พัฒนาด้วย React.js

---

## ✨ Features (จุดเด่นของโปรเจค)
-Interactive Navigation Bar: แถบเมนูพร้อมไอคอนจาก React Icons (Hi2) และรองรับ Dropdown บนมือถือ
-Dynamic Movie Slider: แบนเนอร์หนังยอดนิยม ดึงข้อมูลแบบ Real-time จาก TMDB พร้อมเลื่อนซ้าย–ขวา
-Production House Cards: การ์ดค่ายหนัง (Disney, Pixar, Marvel ฯลฯ) พร้อมเอฟเฟกต์ Hover เล่นวิดีโอพื้นหลัง
-Movie List by Genre: แสดงรายการหนังแยกตามประเภท (Action, Comedy, Animation ฯลฯ) โดยดึงข้อมูลผ่าน Axios ตาม Genre ID
-Responsive Design: รองรับทุกขนาดหน้าจอ (Mobile / Tablet / Desktop) ด้วย Tailwind CSS
-Smooth UI & Custom Scrollbar: ปรับแต่ง Scrollbar ให้ดูสะอาดตาและทันสมัย

## 🛠️ Tech Stack (เครื่องมือที่ใช้)
-Framework: React.js (Vite)
-Styling: Tailwind CSS
-API Client: Axios
-Icons: React Icons (Hi2)
-Scrollbar Plugin: tailwind-scrollbar
-API Source: The Movie Database

## 📸 Screenshots (ตัวอย่างหน้าเว็บ)
<img width="2546" height="1241" alt="image" src="https://github.com/user-attachments/assets/18d1064b-d540-47e6-93be-aed4a4642fd7" />

(Mobile)
<img width="519" height="1120" alt="image" src="https://github.com/user-attachments/assets/18c0bc33-18e6-402e-97c1-4d08d00a1601" />

## 🚀 Getting Started (วิธีรันโปรเจคในเครื่อง)
1.Clone the repository
   ```bash
git clone https://github.com/your-username/disney-clone.git
cd disney-clone
```

2.Install dependencies
 ```bash
npm install
```

3.Setup TMDB API Key
-สมัครสมาชิกที่ The Movie Database
-สร้าง API Key
-สร้างไฟล์ .env และเพิ่มค่า:
```bash
VITE_TMDB_API_KEY=your_api_key_here
```

4.Run the project
```bash
npm run dev
```

5.เปิดเบราว์เซอร์ที่
```bash
[npm run dev](http://localhost:5173)
```

## 🎯 จุดประสงค์ของโปรเจค

-ฝึกการพัฒนาเว็บด้วย React แบบ Component-based

-ฝึกเชื่อมต่อ REST API จริง

-ฝึกการออกแบบ UI ด้วย Tailwind CSS

-พัฒนา Responsive Design ให้ใกล้เคียงงาน Production
