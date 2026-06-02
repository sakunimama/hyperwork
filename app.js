alert("app.js loaded");
function showPage(page) {

    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("settingsPage").style.display = "none";

    if (page === "dashboard") {
        document.getElementById("dashboardPage").style.display = "block";
    }

    if (page === "settings") {
        document.getElementById("settingsPage").style.display = "block";
    }
}

function saveSettings() {

    const settings = {
        officeName: document.getElementById("officeName").value,
        officeCode: document.getElementById("officeCode").value
    };

    localStorage.setItem(
        "hyperworkSettings",
        JSON.stringify(settings)
    );

    alert("Settings Saved");
}

window.onload = function () {

    let data = localStorage.getItem("hyperworkSettings");

    if (data) {

        let settings = JSON.parse(data);

        document.getElementById("officeName").value =
            settings.officeName || "";

        document.getElementById("officeCode").value =
            settings.officeCode || "";
    }
};
