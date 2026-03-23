const initSite = () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMobile = document.querySelector("[data-nav-mobile]");

  if (navToggle instanceof HTMLButtonElement && navMobile instanceof HTMLElement) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const tabButtons = Array.from(document.querySelectorAll("[data-offer-tab]"));
  const offerCards = Array.from(document.querySelectorAll("[data-offer-card]"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-offer-tab");

      tabButtons.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });

      offerCards.forEach((card) => {
        const kinds = (card.getAttribute("data-kind") || "").split(" ");
        const visible = filter === "all" || kinds.includes(filter || "");
        card.classList.toggle("is-visible", visible);
        card.setAttribute("aria-hidden", String(!visible));
      });
    });
  });

  const faqItems = Array.from(document.querySelectorAll("[data-faq-item]"));
  faqItems.forEach((item) => {
    const toggle = item.querySelector("[data-faq-toggle]");
    const answer = item.querySelector("[data-faq-answer]");
    if (!(toggle instanceof HTMLButtonElement) || !(answer instanceof HTMLElement)) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const copyEmailBtn = document.querySelector("[data-copy-email]");
  if (copyEmailBtn instanceof HTMLButtonElement) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = copyEmailBtn.getAttribute("data-email");
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        const original = copyEmailBtn.textContent;
        copyEmailBtn.textContent = "Copied";
        window.setTimeout(() => {
          copyEmailBtn.textContent = original;
        }, 1400);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));

  const setActiveLink = () => {
    const y = window.scrollY + 120;
    let currentId = "";

    sections.forEach((section) => {
      const element = /** @type {HTMLElement} */ (section);
      if (y >= element.offsetTop && y < element.offsetTop + element.offsetHeight) {
        currentId = element.id;
      }
    });

    navLinks.forEach((link) => {
      const match = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", match);
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}
