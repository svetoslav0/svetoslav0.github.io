/* „Доброто започва от мен“ — SPA логика */
(function () {
  "use strict";

  /* ---------- Данни за тетрадките ---------- */

  var GRADES = [
    { grade: "I клас", num: 1, color: "#e97132" },
    { grade: "II клас", num: 2, color: "#e8b307" },
    { grade: "III клас", num: 3, color: "#2fa48c" },
    { grade: "IV клас", num: 4, color: "#3d5fab" },
    { grade: "V клас", num: 5, color: "#5fa052" },
    { grade: "VI клас", num: 6, color: "#8b7bb5" },
    { grade: "VII клас", num: 7, color: "#c6403c" }
  ];

  function renderBooksRow(containerId) {
    var row = document.getElementById(containerId);
    if (!row) return;
    GRADES.forEach(function (g, index) {
      var card = document.createElement("div");
      card.className = "book-card";
      card.style.setProperty("--bc", g.color);

      var img = document.createElement("img");
      img.src = "img/banners/banner-" + g.num + ".png";
      img.alt = "Корица на учебна тетрадка „Доброто започва от мен“ за " + g.grade;
      img.loading = "lazy";

      var label = document.createElement("span");
      label.textContent = g.grade;

      card.appendChild(img);
      card.appendChild(label);
      row.appendChild(card);

      // Разделяне на кориците: 4 на първия ред, 3 на втория
      if (index === 3) {
        var lineBreak = document.createElement("div");
        lineBreak.className = "books-row-break";
        lineBreak.setAttribute("aria-hidden", "true");
        row.appendChild(lineBreak);
      }
    });
  }

  renderBooksRow("books-row-home");
  renderBooksRow("books-row-programa");

  /* ---------- Рутер (hash-базиран, подходящ за GitHub Pages) ---------- */

  var ROUTES = { "": "home", "programa": "programa", "za-nas": "za-nas" };
  var pages = document.querySelectorAll(".page");
  var navLinks = document.querySelectorAll(".nav-link[data-route]");

  function parseHash() {
    // Поддържа формати: #/, #/programa, #/programa#kontakt
    var hash = window.location.hash.replace(/^#\/?/, "");
    var parts = hash.split("#");
    return { route: parts[0] || "", anchor: parts[1] || "" };
  }

  function showPage() {
    var parsed = parseHash();
    var pageName = ROUTES.hasOwnProperty(parsed.route) ? ROUTES[parsed.route] : "home";

    pages.forEach(function (page) {
      page.hidden = page.dataset.page !== pageName;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.dataset.route === pageName);
    });

    closeMobileNav();

    if (parsed.anchor) {
      var target = document.getElementById(parsed.anchor);
      if (target) {
        // Изчакваме страницата да се покаже, преди да скролнем
        requestAnimationFrame(function () {
          target.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  window.addEventListener("hashchange", showPage);

  /* ---------- Мобилно меню ---------- */

  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  function closeMobileNav() {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (event) {
    if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMobileNav();
    }
  });

  /* ---------- Хедър при скрол ---------- */

  var header = document.getElementById("site-header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ---------- Анимации при появяване ---------- */

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Лайтбокс ---------- */

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxClose = document.getElementById("lightbox-close");

  document.querySelectorAll("[data-lightbox] img").forEach(function (img) {
    img.closest("[data-lightbox]").addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* ---------- Контактна форма (Web3Forms) ---------- */

  var contactForm = document.getElementById("contact-form");
  var submitBtn = document.getElementById("contact-submit");
  var formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Изпращане…";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    var data = Object.fromEntries(new FormData(contactForm));

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (result.success) {
          formStatus.textContent = "Благодарим ви! Запитването е изпратено успешно.";
          formStatus.classList.add("success");
          contactForm.reset();
        } else {
          throw new Error(result.message || "Unknown error");
        }
      })
      .catch(function () {
        formStatus.textContent = "Възникна грешка при изпращането. Моля, опитайте отново.";
        formStatus.classList.add("error");
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Изпратете запитване";
      });
  });

  /* ---------- Година във футъра ---------- */

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Начално зареждане ---------- */

  showPage();
})();
