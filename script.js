const navWrap = document.querySelector(".site-nav-wrap");
const siteNav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const sections = Array.from(document.querySelectorAll("[data-section]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setActiveNav(link) {
  navLinks.forEach((node) => node.classList.remove("is-active"));
  if (link) {
    link.classList.add("is-active");
  }
}

function setActiveBySectionId(sectionId) {
  const matchingLink = navLinks.find((link) => link.getAttribute("href") === `#${sectionId}`);
  if (matchingLink) {
    setActiveNav(matchingLink);
  }
}

function initActiveNavObserver() {
  if (!sections.length || !navLinks.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0] && visible[0].target.id) {
        setActiveBySectionId(visible[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.6]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initNavLinkBehavior() {
  if (!navLinks.length) {
    return;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveNav(link);
    });
  });

  const hashId = window.location.hash.replace("#", "");
  if (hashId) {
    setActiveBySectionId(hashId);
    return;
  }
  const heroLink = navLinks.find((link) => link.getAttribute("href") === "#hero");
  setActiveNav(heroLink || navLinks[0]);
}

function initRevealAnimations() {
  if (!sections.length) {
    return;
  }

  if (prefersReducedMotion.matches) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.18
    }
  );

  sections.forEach((section) => revealObserver.observe(section));
}

function initStaggeredReveals() {
  const staggerItems = Array.from(
    document.querySelectorAll(".work-card, .timeline-item")
  );

  if (!staggerItems.length) {
    return;
  }

  if (prefersReducedMotion.matches) {
    staggerItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  staggerItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(16px)";
  });

  const staggerObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = Array.from(
            parent.querySelectorAll(":scope > .work-card, :scope > .timeline-item")
          );
          const index = siblings.indexOf(entry.target);
          const delay = index * 80;

          entry.target.style.transition = `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.1
    }
  );

  staggerItems.forEach((item) => staggerObserver.observe(item));
}

function updateNavOverflowCues() {
  if (!navWrap || !siteNav) {
    return;
  }

  const maxScrollLeft = siteNav.scrollWidth - siteNav.clientWidth;
  const hasOverflow = maxScrollLeft > 1;
  const nearStart = siteNav.scrollLeft < 8;
  const nearEnd = siteNav.scrollLeft >= maxScrollLeft - 8;

  navWrap.classList.toggle("show-left-fade", hasOverflow && !nearStart);
  navWrap.classList.toggle("show-right-fade", hasOverflow && !nearEnd);
}

function initNavOverflowCues() {
  if (!navWrap || !siteNav) {
    return;
  }

  updateNavOverflowCues();
  siteNav.addEventListener("scroll", updateNavOverflowCues, { passive: true });
  window.addEventListener("resize", updateNavOverflowCues);
}

initNavLinkBehavior();
initActiveNavObserver();
initRevealAnimations();
initStaggeredReveals();
initNavOverflowCues();
