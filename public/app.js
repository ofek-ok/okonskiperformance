const form = document.querySelector("#signup-form");
const status = document.querySelector("#form-status");
const successPanel = document.querySelector("#success-panel");
const successMessage = document.querySelector("#success-message");
const submitButton = form.querySelector("button[type='submit']");

const fields = {
  name: form.elements.name,
  phone: form.elements.phone,
  email: form.elements.email
};

const messages = {
  name: "נא להזין שם מלא.",
  phone: "נא להזין מספר טלפון תקין.",
  email: "נא להזין כתובת אימייל תקינה."
};

function setFieldError(name, message = "") {
  const field = fields[name];
  const error = document.querySelector(`#${name}-error`);
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) field.setAttribute("aria-describedby", `${name}-error`);
  else field.removeAttribute("aria-describedby");
  error.textContent = message;
}

function validate() {
  const values = {
    name: fields.name.value.trim(),
    phone: fields.phone.value.trim().replace(/[\s()-]/g, ""),
    email: fields.email.value.trim().toLowerCase()
  };
  const errors = {
    name: values.name.length >= 2 ? "" : messages.name,
    phone: /^\+?\d{9,15}$/.test(values.phone) ? "" : messages.phone,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? "" : messages.email
  };
  Object.entries(errors).forEach(([name, message]) => setFieldError(name, message));
  return { values, valid: !Object.values(errors).some(Boolean) };
}

Object.entries(fields).forEach(([name, field]) => {
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") setFieldError(name);
    status.textContent = "";
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "";
  const { values, valid } = validate();

  if (!valid) {
    const firstInvalid = Object.keys(fields).find(name => fields[name].getAttribute("aria-invalid") === "true");
    fields[firstInvalid]?.focus();
    status.textContent = "יש לבדוק את הפרטים שסומנו.";
    return;
  }

  if (form.elements.company.value) {
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.classList.add("is-loading");
  submitButton.querySelector(".button-label").textContent = "שומרים את המקום שלך…";

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ full_name: values.name, phone: values.phone, email: values.email, marketing_consent: true, utm_source: "website", utm_medium: "organic", utm_campaign: "performance_list" })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.ok) {
      if (data.errors) Object.entries(data.errors).forEach(([name, message]) => setFieldError(name, message));
      throw new Error(data.message || "לא הצלחנו לשמור את הפרטים. אפשר לנסות שוב.");
    }

    successMessage.textContent = data.message || "נעדכן אותך לפני פתיחת היומן בינואר 2027.";
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.focus();
  } catch (error) {
    status.textContent = error.message || "משהו השתבש. אפשר לנסות שוב בעוד רגע.";
  } finally {
    submitButton.disabled = false;
    submitButton.classList.remove("is-loading");
    submitButton.querySelector(".button-label").textContent = "הצטרפות ל־Performance List";
  }
});

document.querySelector("#edit-signup").addEventListener("click", () => {
  successPanel.hidden = true;
  form.hidden = false;
  fields.name.focus();
});

document.querySelectorAll("[data-scroll-signup]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#performance-list").scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => fields.name.focus({ preventScroll: true }), 650);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
