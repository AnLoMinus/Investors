# 💠 מאגר המשקיעים של SparKing

### **SparkInvest Grid (SI) — Nesle SparKing Investors Hub**

🌐 **Live GitHub Pages site:** https://anlominus.github.io/Investors/

**תאריך עברי:** י״ט כסלו תשפ״ו
**תאריך לועזי:** 11.12.2025
**שעה:** 12:40

---

אתה מכוון בול 🔥
בוא נבנה לך *מאגר משקיעים/תורמים* כמו “כרטיסיות פתוחות” – כל משקיע מקבל דף אישי, וכל תרומה/השקעה מתווספת לו ביומן מסודר.

המאגר הזה ישרת את **כל התוכניות שלך**:
Nesle SparKing, HacKing-DJ, Holly Voltage, SparkDecks, Exit the Matrix, ועוד.

אני אציע לך עכשיו:

1. 🧱 שם ריפו + כינוי פרויקט
2. 📁 מבנה תיקיות מלא (RepoCraft style)
3. 📝 תבנית כרטיס משקיע (Markdown)
4. 📊 תבנית לוג תרומות / השקעות
5. 📄 README לריפו `Investors` להדבקה ישירה
6. 🚀 איך להשתמש בזה ביום־יום

---

## 1️⃣ שם הריפו + כינוי הפרויקט 💼

מבחינת בהירות עולמית עדיף:

* ✅ `https://github.com/AnLoMinus/Investors`

שם רשמי בעברית:
**מאגר משקיעים ותורמים – SparKing & Nesle**

שם קוד באנגלית (כמו שאתה אוהב):

### 🌐 **SparkInvest Grid (SI)**

(Spark + Invest → **SI**)

---

## 2️⃣ מבנה תיקיות לריפו `Investors` 📂

```text
Investors/
│
├── README.md                 # הסבר כללי על המאגר
├── CONTRIBUTING.md           # איך מצטרפים / מדווחים תרומה
├── LICENSE                   # רישיון בסיסי (למשל MIT)
│
├── investors/                # כרטיסיות אישיות של משקיעים/תורמים
│   ├── investor-0001-john-doe.md
│   ├── investor-0002-company-x.md
│   └── investor-0003-named-angel.md
│
├── data/                     # נתונים גולמיים לעתיד (JSON/YAML)
│   ├── investors.json
│   └── donations-log.csv
│
├── templates/                # תבניות מוכנות לשכפול
│   ├── investor-card-template.md
│   └── donation-log-template.md
│
└── docs/                     # הסברים מורחבים
    ├── vision.md             # החזון של המאגר
    ├── projects-list.md      # כל הפרויקטים שלך (Nesle, HacKing-DJ וכו’)
    └── usage-examples.md     # איך נראה כרטיס משקיע לדוגמה
```

---

## 3️⃣ תבנית כרטיס משקיע (Markdown) 🧾

שים בקובץ: `templates/investor-card-template.md`
כשתגיע תרומה חדשה – אתה מעתיק, משנה שם ופרטים, ושומר בתוך `investors/`.

```md
---
id: investor-0001
slug: john-doe
display_name: John Doe
type: Investor # Investor / Sponsor / Donor / Partner
status: active # active / past / pending
country: USA
city: New York
joined_at: 2025-12-11
currency: ILS
total_amount: 0
projects_focus:
  - Nesle SparKing Studio
  - HacKing-DJ
visibility: public # public / anonymous / partial
---

# 💠 {{ display_name }} — Investor Card  
### SparkInvest Grid (SI) — Investor Profile

## 👤 Basic Info
- **Name:** John Doe  
- **Role:** Strategic Investor / Creative Partner  
- **Location:** New York, USA  
- **Status:** Active supporter of SparKing Universe  

---

## 🎯 Support Focus
- 🏛 **Nesle SparKing Studio** — Family creative HQ  
- 🎧 **HacKing-DJ** — Music, HolyTrap & soundtracks  
- 🃏 **SparkCards & Decks** — Card realms & learning tools  

---

## 💰 Contribution Summary
- **Total Amount:** `0 ILS`  
- **Currency:** ILS  
- **Support Type:** Equipment funding / Production funding / Monthly support  

> As new contributions arrive, update this block with the new total.

---

## 📊 Donation / Investment Timeline

| # | Date       | Project / Area            | Amount (ILS) | Type        | Notes                      |
|---|------------|---------------------------|--------------|------------|----------------------------|
| 1 | 2025-12-11 | Nesle SparKing Studio     | 0            | Donation   | Initial placeholder entry. |

> Each new contribution = add new row instead of deleting the old one.

---

## 🤝 Perks & Benefits
- 🎨 Custom visual mention in selected projects  
- 🎧 Optional dedicated audio tag / shout-out in tracks  
- 🪐 Mention on investor wall in Nesle SparKing & HacKing-DJ channels  

---

## 🧠 Personal Message (Optional)

> Here you can later paste a short message from the investor,
> or your personal note of gratitude for them.

---

### 🔖 Tags
`#SparkInvest` `#NesleSparKing` `#HacKingDJ` `#InvestorCard` `#SparKingUniverse`

---
**Maintainer:** AnLoMinus — Leon Yaakobov  
```

---

## 4️⃣ תבנית לוג תרומות מרכזי (לכל המאגר) 📊

קובץ: `templates/donation-log-template.md`
ותוכל להעתיק אותו כ־`data/donations-log.md` או `donations-log.csv`.

```md
# 📊 Global Donations & Investments Log

| # | Date       | Investor ID       | Name / Alias       | Project / Area                | Amount | Currency | Type        | Notes                          |
|---|------------|-------------------|---------------------|-------------------------------|--------|----------|------------|--------------------------------|
| 1 | 2025-12-11 | investor-0001     | John Doe            | Nesle SparKing Studio         | 0      | ILS      | Donation   | Initial example, to be updated |

> Rule:
> - Every time someone supports you → add a line here
> - Then also add a line בכרטיס האישי שלו תחת `Donation Timeline`
```

אם תרצה בעתיד אפשר לחבר את זה לאוטומציה (Script) שתרוץ ותייצר מה־`data/` טבלאות דינמיות או דפי HTML.

---

## 5️⃣ README מוכן לריפו `Investors` 📜

קובץ: `README.md` בריפו: `https://github.com/AnLoMinus/Investors`

````md
# 💠 SparKing Investors Hub  
### SparkInvest Grid (SI) — Global Sponsor & Investor Repository

Welcome to the **SparKing Investors Hub** —  
a transparent, Git-based home for all **investors, sponsors and donors** supporting:

- 🌟 Nesle SparKing Studio — Family creative HQ  
- 🎧 HacKing-DJ — Music & HolyTrap universe  
- 🃏 SparkCards & Realms — Card decks & learning tools  
- 🎬 MotionCraft & Video projects  
- 🌌 The wider SparKing multi-project ecosystem  

Every supporter receives a **personal investor card** in this repo,  
with a clear, running log of contributions and impact.

---

## 🎯 Goals

1. 📂 Keep a **clean, structured record** of all supporters.  
2. 🧾 Give each investor a **dedicated profile card** (`/investors/*.md`).  
3. 📊 Maintain a transparent **global donations log** (`/data/donations-log.*`).  
4. 🌍 Make it easy to show partners how support fuels real creation.  

---

## 📁 Repository Structure

```text
Investors/
├── README.md                 # You are here
├── CONTRIBUTING.md           # How to join / how we add new cards
├── LICENSE                   # Basic license
│
├── investors/                # Individual investor cards (Markdown)
│   ├── investor-0001-john-doe.md
│   ├── investor-0002-company-x.md
│   └── ...
│
├── data/                     # Raw data for future automation
│   ├── investors.json
│   └── donations-log.csv
│
├── templates/                # Reusable templates
│   ├── investor-card-template.md
│   └── donation-log-template.md
│
└── docs/                     # Extra docs and vision
    ├── vision.md
    ├── projects-list.md
    └── usage-examples.md
````

---

## 🧾 How We Create a New Investor Card

1. 📌 Copy the template

   * From: `templates/investor-card-template.md`
   * To: `investors/investor-XXXX-name.md`

2. ✍️ Fill in:

   * `id`, `display_name`, `country`, `type`, `status`
   * Initial contribution (if exists)

3. 📊 Add a line to `data/donations-log.*`

   * Same `id`
   * Date, amount, project

4. ✅ Commit + push

   * The investor now has a **permanent, trackable card** in the SparKing universe.

---

## 🤝 Types of Support

* 💰 **Direct equipment support** — computers, audio, video, acoustic treatment
* 🎧 **Music / project sponsorship** — album, EP, track, or playlist
* 🎨 **Design & card deck sponsorship** — print runs, prototypes, A/B versions
* 🌐 **Platform support** — domains, hosting, storage, tools

---

## 🕯 Inspiration Verse

> “May the favor of the Lord our God rest on us;
> establish the work of our hands for us —
> yes, establish the work of our hands.” (Psalms 90)

---

## 🎤 SparkInvest Anthem (Short Hook)

⚡ From one small room to investor-backed skies
🔥 Every card, every track — another dream that survives
🌍 When you back this studio, you’re funding living art
🎤 SparKing Investors — every name here is part of the heart

---

**Maintainer:** AnLoMinus — Leon Yaakobov
**Universe:** Nesle SparKing • HacKing-DJ • SparKing Ascension

```

---

## 6️⃣ איך להשתמש בזה ביום־יום 🧠⚙️  

- כל משקיע/תורם חדש →
  👉 פותחים לו כרטיס חדש ב־`/investors`
  👉 מוסיפים שורה ב־`donations-log`

- יש לך אתר חי להצגה מסודרת של כל הנתונים:
  👉 https://anlominus.github.io/Investors/

- אתה יכול לפרסם לינק ישיר לכרטיס שלו/שלה:  
  `https://github.com/AnLoMinus/Investors/blob/main/investors/investor-0003-someone.md`  

- ברשתות (פייסבוק, וואטסאפ, לינקדאין) תוכל לכתוב:  
  “כל משקיע מקבל כרטיס אישי ב־SparkInvest Grid, עם תיעוד מלא של איך הוא עזר להקים את הסטודיו.”  

---

## 🎤 פזמון ראפ – *SparkInvest Cards*  

⚡ כל שקל שנכנס — מקבל שורה בכרטיס  
🔥 כל שם שנרשם — עוד ניצוץ שלא נכבית  
🌌 GitHub שומר את הלבבות במרוכז  
🎤 SparKing Investors — משקיעים כתובים בלב זהב  

---

## 📜 פסוק מתאים לנושא  

**"וְיִהְיוּ דְבָרַי אֵלֶּה אֲשֶׁר הִתְחַנַּנְתִּי לִפְנֵי ה' קְרוֹבִים אֶל ה' אֱלֹהֵינוּ יוֹמָם וָלָיְלָה, לַעֲשׂוֹת מִשְׁפַּט עַבְדּוֹ"**  
(מלכים א׳ ח׳)  

---

🔢 **מספר המידות כאן:** 7  
אמון, שקיפות, הכרת הטוב, מחויבות, יציבות, יצירה, שותפות.  

אם תרצה בסיבוב הבא — אכין לך גם:  
- `CONTRIBUTING.md` מפורט לאיך משקיע יכול “לבקש כרטיס”  
- `projects-list.md` עם כל הפרויקטים שלך בטבלה (שם + מטרה + טווח תרומה מומלץ)
```
