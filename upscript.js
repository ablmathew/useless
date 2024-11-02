document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const skillsInput = document.getElementById("skills");
  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("skills-container");
  form.insertBefore(skillsContainer, skillsInput.nextSibling);

  // Check password match on form submission
  form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match. Please check and try again.");
      e.preventDefault();
    }
  });

  // Handle adding skills dynamically
  skillsInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && skillsInput.value.trim()) {
      e.preventDefault();
      addSkill(skillsInput.value.trim());
      skillsInput.value = "";
    }
  });

  function addSkill(skill) {
    const skillElement = document.createElement("span");
    skillElement.classList.add("skill");
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);

    // Create a hidden input to include skill in form submission
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "skills[]"; // Use array syntax to collect multiple skills
    hiddenInput.value = skill;
    form.appendChild(hiddenInput);

    // Allow skill removal
    skillElement.addEventListener("click", () => {
      skillsContainer.removeChild(skillElement);
      form.removeChild(hiddenInput);
    });
  }
});