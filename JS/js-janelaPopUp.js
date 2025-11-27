    const popup = document.getElementById("popup-edit");
    const closePopup = document.getElementById("close-popup");

    document.querySelectorAll("#btn-table-edit").forEach(btn => {
        btn.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });


