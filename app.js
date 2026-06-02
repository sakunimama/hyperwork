// ===========================
// PAGE NAVIGATION
// ===========================

function showPage(page) {

```
document.getElementById("dashboardPage").style.display = "none";
document.getElementById("settingsPage").style.display = "none";

if (page === "dashboard") {
    document.getElementById("dashboardPage").style.display = "block";
}

if (page === "settings") {
    document.getElementById("settingsPage").style.display = "block";
}
```

}

// ===========================
// SETTINGS
// ===========================

function saveSettings() {

```
const settings = {

    officeName:
        document.getElementById("officeName").value,

    officeCode:
        document.getElementById("officeCode").value

};

localStorage.setItem(
    "hyperworkSettings",
    JSON.stringify(settings)
);

alert("Settings Saved Successfully");
```

}

// ===========================
// SECTION MASTER
// ===========================
// ===========================
// RECIPIENT DIRECTORY
// ===========================

let recipients =
JSON.parse(
localStorage.getItem("recipients")
) || [];

function addRecipient() {

```
let name =
    document.getElementById("recipientName")
    .value
    .trim();

if (name === "") {

    alert("Enter Recipient Name");

    return;
}

recipients.push(name);

localStorage.setItem(
    "recipients",
    JSON.stringify(recipients)
);

displayRecipients();

document.getElementById(
    "recipientName"
).value = "";
```

}

function displayRecipients() {

```
let html = "";

if (recipients.length === 0) {

    html =
        "<p>No recipients added.</p>";

} else {

    recipients.forEach((recipient) => {

        html += `
            <div style="
                padding:8px;
                border-bottom:1px solid #ddd;
            ">
                ${recipient}
            </div>
        `;
    });
}

document.getElementById(
    "recipientList"
).innerHTML = html;
```

}


let sections =
JSON.parse(
localStorage.getItem("sections")
) || [];

function addSection() {

```
let code =
    document.getElementById("sectionCode")
    .value
    .trim()
    .toUpperCase();

let name =
    document.getElementById("sectionName")
    .value
    .trim();

if (code === "" || name === "") {

    alert(
        "Please enter both Code and Description"
    );

    return;
}

sections.push({
    code: code,
    name: name
});

localStorage.setItem(
    "sections",
    JSON.stringify(sections)
);

displaySections();

document.getElementById("sectionCode").value = "";
document.getElementById("sectionName").value = "";
```

}

function displaySections() {

```
let html = "";

if (sections.length === 0) {

    html =
        "<p>No section codes added.</p>";

} else {

    sections.forEach((section, index) => {

        html += `
            <div style="
                padding:8px;
                border-bottom:1px solid #ddd;
            ">
                <strong>${section.code}</strong>
                - ${section.name}
            </div>
        `;

    });
}

document.getElementById(
    "sectionList"
).innerHTML = html;
```

}

// ===========================
// LOAD SAVED DATA
// ===========================

window.onload = function () {

```
let data =
    localStorage.getItem(
        "hyperworkSettings"
    );

if (data) {

    let settings =
        JSON.parse(data);

    document.getElementById(
        "officeName"
    ).value =
        settings.officeName || "";

    document.getElementById(
        "officeCode"
    ).value =
        settings.officeCode || "";
}

displaySections();
```

};
