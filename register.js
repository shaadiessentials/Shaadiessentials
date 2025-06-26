document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vendor-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const vendor = {
      name: form.name.value,
      email: form.email.value,
      category: form.category.value,
      description: form.description.value
    };

    alert("Vendor submitted successfully!");
    form.reset();
  });
});
