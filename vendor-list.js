document.addEventListener("DOMContentLoaded", () => {
  fetch("data/vendors.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("vendor-list");
      data.forEach(vendor => {
        const div = document.createElement("div");
        div.className = "category";
        div.innerHTML = `
          <img src="${vendor.image}" alt="${vendor.name} Image" />
          <p>${vendor.name} - ${vendor.category}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Failed to load vendors:", err);
    });
});
