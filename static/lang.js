/* ===============================
   Language Settings
================================= */

// let currentLang = localStorage.getItem("lang") || "en";

/* Run when page loads */
window.onload = function () {
    if (currentLang === "mr") {
        applyMarathi();
    }
};

/* Toggle Language Button */
function toggleLanguage() {
    if (currentLang === "en") {
        applyMarathi();
        currentLang = "mr";
    } else {
        applyEnglish();
        currentLang = "en";
    }

    localStorage.setItem("lang", currentLang);
}

/* ===============================
   MARATHI TRANSLATION
================================= */
function applyMarathi() {

    /* Dashboard */
    setText("dashboardBtn", "🏠 डॅशबोर्ड");
    setText("customerListBtn", "📋 ग्राहक यादी");
    setText("totalCustomersText", "एकूण ग्राहक");

    setText("title", "शिंपी डॅशबोर्ड");
    setText("th_id", "क्रमांक");
    setText("th_name", "नाव");
    setText("th_phone", "मोबाईल");
    setText("th_action", "क्रिया");

    setPlaceholder("searchBox", "नाव किंवा मोबाईल नंबर शोधा...");
    setText("newCustomerBtn", "+ नवीन ग्राहक");
    setText("logoutBtn", "लॉगआउट");

    /* Form Titles */
    setText("customerDetails", "ग्राहक तपशील");
    setText("shirtTitle", "👕 शर्ट माप");
    setText("pantTitle", "👖 पँट माप");

    /* Customer Info */
    setText("lblName", "नाव");
    setText("lblPhone", "मोबाईल नंबर");

    /* Shirt Labels */
    setText("lblShirtLength", "लांबी");
    setText("lblChest", "छाती");
    setText("lblShoulder", "खांदा");
    setText("lblSleeve", "बाह्याची लांबी");
    setText("lblCollar", "कॉलर");
    setText("lblShirtType", "शर्ट प्रकार");

    /* Pant Labels */
    setText("lblPantLength", "लांबी");
    setText("lblWaist", "कंबर");
    setText("lblSit", "सीट");
    setText("lblThigh", "मांडी");
    setText("lblKnee", "गुडघा");
    setText("lblBottom", "बॉटम");

    /* Buttons */
    setText("saveBtn", "सेव्ह");
    setText("updateBtn", "अपडेट");
    setText("backBtn", "मागे जा");

    /* Language Button */
    setText("langBtn", "English");
}

/* ===============================
   ENGLISH TRANSLATION
================================= */
function applyEnglish() {

    /* Dashboard */
    setText("dashboardBtn", "🏠 Dashboard");
    setText("customerListBtn", "📋 Customer List");
    setText("totalCustomersText", "Total Customers");


    setText("title", "Tailor Dashboard");
    setText("th_id", "ID No");
    setText("th_name", "Name");
    setText("th_phone", "Mobile No");
    setText("th_action", "Action");

    setPlaceholder("searchBox", "Search by name or mobile number...");
    setText("newCustomerBtn", "+ New Customer");
    setText("logoutBtn", "Logout");

    /* Form Titles */
    setText("customerDetails", "Customer Details");
    setText("shirtTitle", "👕 Shirt Measurement");
    setText("pantTitle", "👖 Pant Measurement");

    /* Customer Info */
    setText("lblName", "Name");
    setText("lblPhone", "Phone");

    /* Shirt Labels */
    setText("lblShirtLength", "Length");
    setText("lblChest", "Chest");
    setText("lblShoulder", "Shoulder");
    setText("lblSleeve", "Sleeve Length");
    setText("lblCollar", "Collar");
    setText("lblShirtType", "Shirt Type");

    /* Pant Labels */
    setText("lblPantLength", "Length");
    setText("lblWaist", "Waist");
    setText("lblSit", "Sit");
    setText("lblThigh", "Thigh");
    setText("lblKnee", "Knee");
    setText("lblBottom", "Bottom");

    /* Buttons */
    setText("saveBtn", "Save");
    setText("updateBtn", "Update");
    setText("backBtn", "Back");

    /* Language Button */
    setText("langBtn", "मराठी");
}

/* ===============================
   HELPER FUNCTIONS (SAFE)
================================= */

function setText(id, value) {
    let el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setPlaceholder(id, value) {
    let el = document.getElementById(id);
    if (el) el.placeholder = value;
}

/* ===============================
   Language Settings
================================= */

let currentLang = localStorage.getItem("lang") || "en";

/* Run when page loads */
window.onload = function () {
    if (currentLang === "mr") {
        applyMarathi();
    }
};

/* Toggle Language Button */
function toggleLanguage() {
    if (currentLang === "en") {
        applyMarathi();
        currentLang = "mr";
    } else {
        applyEnglish();
        currentLang = "en";
    }

    localStorage.setItem("lang", currentLang);
}

/* ===============================
   MARATHI TRANSLATION
================================= */
function applyMarathi() {

    /* Dashboard */
    setText("dashboardBtn", "🏠 डॅशबोर्ड");
    setText("customerListBtn", "📋 ग्राहक यादी");
    setText("totalCustomersText", "एकूण ग्राहक");

    setText("title", "शिंपी डॅशबोर्ड");
    setText("th_id", "क्रमांक");
    setText("th_name", "नाव");
    setText("th_phone", "मोबाईल");
    setText("th_action", "क्रिया");

    setPlaceholder("searchBox", "नाव किंवा मोबाईल नंबर शोधा...");
    setText("newCustomerBtn", "+ नवीन ग्राहक");
    setText("logoutBtn", "लॉगआउट");

    /* Form Titles */
    setText("customerDetails", "ग्राहक तपशील");
    setText("shirtTitle", "👕 शर्ट माप");
    setText("pantTitle", "👖 पँट माप");

    /* Customer Info */
    setText("lblName", "नाव");
    setText("lblPhone", "मोबाईल नंबर");

    /* Shirt Labels */
    setText("lblShirtLength", "लांबी");
    setText("lblChest", "छाती");
    setText("lblShoulder", "खांदा");
    setText("lblSleeve", "बाह्याची लांबी");
    setText("lblCollar", "कॉलर");
    setText("lblShirtType", "शर्ट प्रकार");

    /* Pant Labels */
    setText("lblPantLength", "लांबी");
    setText("lblWaist", "कंबर");
    setText("lblSit", "सीट");
    setText("lblThigh", "मांडी");
    setText("lblKnee", "गुडघा");
    setText("lblBottom", "बॉटम");

    /* Buttons */
    setText("saveBtn", "सेव्ह");
    setText("updateBtn", "अपडेट");
    setText("backBtn", "मागे जा");

    /* Language Button */
    setText("langBtn", "English");
    translateAlertsToMarathi();

}

/* ===============================
   ENGLISH TRANSLATION
================================= */
function applyEnglish() {

    /* Dashboard */
    setText("dashboardBtn", "🏠 Dashboard");
    setText("customerListBtn", "📋 Customer List");
    setText("totalCustomersText", "Total Customers");


    setText("title", "Tailor Dashboard");
    setText("th_id", "ID No");
    setText("th_name", "Name");
    setText("th_phone", "Mobile No");
    setText("th_action", "Action");

    setPlaceholder("searchBox", "Search by name or mobile number...");
    setText("newCustomerBtn", "+ New Customer");
    setText("logoutBtn", "Logout");

    /* Form Titles */
    setText("customerDetails", "Customer Details");
    setText("shirtTitle", "👕 Shirt Measurement");
    setText("pantTitle", "👖 Pant Measurement");

    /* Customer Info */
    setText("lblName", "Name");
    setText("lblPhone", "Phone");

    /* Shirt Labels */
    setText("lblShirtLength", "Length");
    setText("lblChest", "Chest");
    setText("lblShoulder", "Shoulder");
    setText("lblSleeve", "Sleeve Length");
    setText("lblCollar", "Collar");
    setText("lblShirtType", "Shirt Type");

    /* Pant Labels */
    setText("lblPantLength", "Length");
    setText("lblWaist", "Waist");
    setText("lblSit", "Sit");
    setText("lblThigh", "Thigh");
    setText("lblKnee", "Knee");
    setText("lblBottom", "Bottom");

    /* Buttons */
    setText("saveBtn", "Save");
    setText("updateBtn", "Update");
    setText("backBtn", "Back");

    /* Language Button */
    setText("langBtn", "मराठी");
    translateAlertsToEnglish();

}

/* ===============================
   HELPER FUNCTIONS (SAFE)
================================= */

function setText(id, value) {
    let el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setPlaceholder(id, value) {
    let el = document.getElementById(id);
    if (el) el.placeholder = value;
}

/* ===============================
   ALERT TRANSLATION
================================= */
function translateAlertsToMarathi() {

    document.querySelectorAll(".alert").forEach(alert => {
        let msg = alert.getAttribute("data-alert");

        if (msg === "Customer added successfully!")
            alert.querySelector(".alert-text").innerText =
                "ग्राहक यशस्वीरित्या जोडला!";

        if (msg === "Customer updated successfully!")
            alert.querySelector(".alert-text").innerText =
                "ग्राहकाची माहिती अपडेट झाली!";

        if (msg === "Mobile number already exists!")
            alert.querySelector(".alert-text").innerText =
                "हा मोबाईल नंबर आधीच अस्तित्वात आहे!";

        if (msg === "Mobile number must be exactly 10 digits")
            alert.querySelector(".alert-text").innerText =
                "मोबाईल नंबर नेमका १० अंकांचा असावा";

        if (msg === "Invalid username or password!")
            alert.querySelector(".alert-text").innerText =
                "चुकीचे यूजरनेम किंवा पासवर्ड!";

        if (msg === "Welcome Master Tailor 👏")
            alert.querySelector(".alert-text").innerText =
                "स्वागत आहे मास्टर टेलर 👏";

    });
}

function translateAlertsToEnglish() {
    document.querySelectorAll(".alert").forEach(alert => {
        let msg = alert.getAttribute("data-alert");
        alert.querySelector(".alert-text").innerText = msg;
    });
}
