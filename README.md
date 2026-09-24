# UNAI Event Management Platform (Case 02)

Official technical assessment submission for **United Nations Association Indonesia (UNAI)

**Live Demo:** [https://event-nine-tawny.vercel.app/](https://event-nine-tawny.vercel.app/)

->Summary
The **Event Management Platform** is designed to address the organization's need to display, manage, and track upcoming activities, conferences, training sessions, and social campaigns aligned with the Sustainable Development Goals (SDGs). 

The application features a fully responsive multi-page architecture built using modern Vanilla HTML5, CSS3, and JavaScript, backed by client-side state persistence (`localStorage`) to simulate a complete production-ready backend workflow.

->Key Features
1. **Homepage (`index.html`):** 
   - Organization hero section with UN-inspired professional branding.
   - Live statistics counters (Active Events, Total Volunteers/Registrants, Impacted Regions).
   - Featured upcoming events section.
2. **Events Listing Page (`events.html`):**
   - Comprehensive directory of all organizational activities.
   - **Real-time Live Search:** Filter events instantly by title or location.
   - **Category Filtering:** Sort events by *Konferensi*, *Pelatihan*, *Aksi Sosial*, and *Diskusi*.
3. **Event Detail & Registration Page (`detail.html`):**
   - Detailed view displaying date, location, Person in Charge (PIC), and full description.
   - **Interactive Volunteer/Participant Form:** Direct form submission that saves data securely to the system.
4. **Monthly Calendar View (`calendar.html`):**
   - Interactive monthly grid displaying date-specific event indicators.
5. **Admin Dashboard (`admin.html`):**
   - Overview metrics of total events and incoming registrations.
   - **CRUD Operations:** Secure interface for administrators to add new activities dynamically or remove past entries.
   - Real-time tabular view of all registered participants and their motivations.

->Technology Stack
* **Frontend:** HTML5, CSS3 (Custom Grid, Flexbox, Variables), Vanilla JavaScript (ES6+).
* **Icons & Styling:** FontAwesome, Inter Font Family.
* **Storage:** Browser `localStorage` API for state management.
* **Deployment:** Vercel Cloud Platform.

->AI Report
* **Google Gemini:** Used minimally as a supplementary reference assistant specifically for minor CSS styling adjustments (`style.css`).
* **Assisted Components:** 
  - Minor suggestions for styling rules and responsive layout adjustments within `style.css`.


Project Structure
```text
├── index.html          # Homepage
├── events.html         # Event listing with search & filters
├── detail.html         # Event details & registration form
├── calendar.html       # Monthly calendar schedule view
├── admin.html          # Admin dashboard & CRUD management
├── style.css           # Global modern stylesheet
└── script.js           # Centralized mock data & logic
