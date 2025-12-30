# TRACEWASTE ♻️  
### Geo-Tagged, QR-Based Waste Traceability & Verification System

**Hackathon:** Eco Champion Hackathon  
**Organised by:** Indian Institute of Technology (IIT), Hyderabad  
**Event:** Elan & nVision 2026  

TRACEWASTE is a lightweight, web-based system that transforms segregated waste into a **traceable and verifiable digital resource** using QR codes, geo-tagged proof submission, role-based verification, and incentive locking — **without adding any hardware**.

---

## 🌍 Live Demo

- **Main Website:**  
 https://itsmilindsahu.github.io/geo-proof-demo/

- **QR Code Generator:**  
 https://itsmilindsahu.github.io/geo-proof-demo/qr.html

---

## 📌 Motivation

I am a 19-year-old undergraduate student, and on my campus I observed that although waste segregation (dry, wet, e-waste) exists, there is **no reliable way to verify** what happens to waste after it is collected.

Most systems rely on trust:
- Trust that waste reaches recyclers  
- Trust that recycling actually happens  
- Trust that reports are accurate  

This project started with a simple question:

> *What if waste management was proof-based instead of trust-based?*

TRACEWASTE is my attempt to answer that question using simple, scalable technology.

---

## 🚨 Problem Statement

Despite segregation at source, waste management systems face:
- Broken chain of custody after collection  
- No batch-level identification  
- Manual inspections that are slow and costly  
- Incentives not linked to verified outcomes  

As a result, recyclable and hazardous waste often ends up in landfills.

---

## 💡 Proposed Solution: TRACEWASTE

TRACEWASTE introduces **batch-level accountability** by linking physical waste to digital proof.

**Core idea:**  
> Every waste batch must generate verifiable digital evidence before it is considered compliant.

---

## 🔄 System Workflow

1. Waste is segregated and assigned a **Batch ID**  
2. A **QR code** is generated and attached  
3. QR is scanned at different stages  
4. **Geo-location + timestamp** are captured  
5. Proof is submitted  
6. Auditor verifies or flags the proof  
7. Incentives are released only after verification  

---

## 🧩 Key Features

### 1️⃣ QR-Based Waste Batch Identification
- Unique QR for each batch  
- No RFID, GPS trackers, or smart bins  
- Works with existing infrastructure  

---

### 2️⃣ Geo-Tagged & Time-Stamped Proof
- Uses browser geolocation  
- Captures latitude, longitude, and time  
- Optional photo upload  

---

### 3️⃣ Role-Based Access Control
Roles supported:
- **Collector**
- **Recycler**
- **Auditor**

Ensures separation of duties and accountability.

---

### 4️⃣ Verification States
Each batch moves through:
- `Not Submitted`
- `Pending Verification`
- `Verified` ✅
- `Flagged` ⚠️

---

### 5️⃣ Incentive Mechanism
- Incentives are **locked** on submission  
- Released **only after verification**  
- Cancelled if flagged  

---

### 6️⃣ Batch Proof Timeline
Every action is logged chronologically, creating an **audit trail**.

---

## 🖥️ Interface Walkthrough (Correct System Order)

This section visually demonstrates the **end-to-end TRACEWASTE flow**.

---

### 📱 1️⃣ QR Scan (Entry Point)
*The process begins when a waste batch QR is scanned.*

![QR Scan](qr%201st.png)

---

### 📦 2️⃣ QR Code Generation
*Unique QR codes are generated and printed for tagging waste batches.*

![QR Generator](qr%20generated.png)

---

### 🟢 3️⃣ Collector Interface
*Collectors submit geo-tagged proof after collecting the waste.*

![Collector View](collector.png)

---

### 🔵 4️⃣ Recycler Interface
*Recyclers submit proof after receiving and processing the waste.*

![Recycler View](recycler.png)

---

### 🟠 5️⃣ Auditor Interface
*Auditors verify or flag proofs independently.*

![Auditor View](auditor.png)

---

## 🛠️ Technology Stack

- HTML, CSS, JavaScript  
- Browser Geolocation API  
- QRCode.js  
- GitHub Pages (static hosting)

No backend, database, blockchain, or proprietary services used.

---

## 💸 Cost & Scalability Analysis

| Deployment Scale | Cost per Batch |
|-----------------|---------------|
| Pilot (10 batches) | ₹0–₹10 |
| 100 batches | ₹0–₹5 |
| 1,000+ batches | ~₹0 |

Only physical cost is QR printing.

---

## 🌱 Sustainability & Impact

TRACEWASTE promotes:
- Verified recycling  
- Reduced illegal dumping  
- Lower monitoring costs  
- Transparent environmental governance  

The system is affordable, replicable, and practical in real-world conditions.

---

## 🔮 Future Scope

- Certified recycler integration  
- Location consistency checks  
- Municipal dashboards  
- Secure proof storage  

---

## 🧠 Personal Reflection

This project taught me that impactful environmental solutions do not always require complex hardware or AI. Good **system design, verification logic, and accountability** can create real impact using simple tools.

---

## 👤 Author

**Milind Sahu**  
Undergraduate Student (Age 19)  
First Year BS-MS student  
Indian Institute of Science Education and Research – IISER Tirupati

---

## 🏁 Final Note

TRACEWASTE focuses on:
- Originality  
- Practical deployment  
- Environmental accountability  

No unnecessary features were added to keep the system realistic and scalable.
