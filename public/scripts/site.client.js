const setPressedState = (buttons, activeButton) => {
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setNavOpenState = (navToggle, navMobile, isOpen) => {
  navMobile.hidden = !isOpen;
  navMobile.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
};

const initMobileNav = () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMobile = document.querySelector("[data-nav-mobile]");

  if (!(navToggle instanceof HTMLButtonElement) || !(navMobile instanceof HTMLElement)) {
    return;
  }

  const closeNav = () => setNavOpenState(navToggle, navMobile, false);
  const toggleNav = () => setNavOpenState(navToggle, navMobile, navMobile.hidden);

  closeNav();

  navToggle.addEventListener("click", () => {
    toggleNav();
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !navMobile.hidden) {
      closeNav();
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !navMobile.hidden &&
      event.target instanceof Node &&
      !navMobile.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeNav();
    }
  });
};

const initOfferFilters = () => {
  const tabButtons = Array.from(document.querySelectorAll("[data-offer-tab]"));
  const offerCards = Array.from(document.querySelectorAll("[data-offer-card]"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-offer-tab");
      setPressedState(tabButtons, button);

      offerCards.forEach((card) => {
        const kinds = (card.getAttribute("data-kind") || "").split(" ");
        const visible = filter === "all" || kinds.includes(filter || "");
        card.classList.toggle("is-visible", visible);
        card.setAttribute("aria-hidden", String(!visible));
      });
    });
  });
};

const initFaq = () => {
  const faqItems = Array.from(document.querySelectorAll("[data-faq-item]"));
  faqItems.forEach((item) => {
    const toggle = item.querySelector("[data-faq-toggle]");
    if (!(toggle instanceof HTMLButtonElement)) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
};

const initCopyEmail = () => {
  const copyEmailBtn = document.querySelector("[data-copy-email]");
  const copyStatus = document.querySelector("[data-copy-status]");
  if (!(copyEmailBtn instanceof HTMLButtonElement)) {
    return;
  }

  const setCopyStatus = (message) => {
    if (!(copyStatus instanceof HTMLElement)) {
      return;
    }

    copyStatus.textContent = "";
    window.requestAnimationFrame(() => {
      copyStatus.textContent = message;
    });
  };

  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.getAttribute("data-email");
    const successMessage =
      copyEmailBtn.getAttribute("data-copy-success") || "Email copied to clipboard.";
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      const original = copyEmailBtn.textContent;
      copyEmailBtn.textContent = "Copied";
      setCopyStatus(successMessage);
      window.setTimeout(() => {
        copyEmailBtn.textContent = original;
      }, 1400);
    } catch {
      setCopyStatus("Opening email client.");
      window.location.href = `mailto:${email}`;
    }
  });
};

const initRevealAnimations = () => {
  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  if (!revealElements.length) {
    return;
  }

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealElements.forEach((element) => element.classList.add("in-view"));
    return;
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

  revealElements.forEach((element) => observer.observe(element));
};

const initActiveNavState = () => {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  if (!sections.length || !navLinks.length) {
    return;
  }

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
      if (match) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
};

const initSite = () => {
  initMobileNav();
  initOfferFilters();
  initFaq();
  initCopyEmail();
  initRevealAnimations();
  initActiveNavState();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}
