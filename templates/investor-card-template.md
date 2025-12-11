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

# 🔠 {{ display_name }} — Investor Card
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

## 📍 Contribution Log

| Date       | Amount | Currency | Project | Notes |
| ---------- | ------ | -------- | ------- | ----- |
| 2025-12-11 | 0      | ILS      | General | Initial card creation |

---

## 🗂️ Repository Structure

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
```
