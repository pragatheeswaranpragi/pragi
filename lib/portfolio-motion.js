// Progressive motion: the server-rendered page stays readable without JavaScript.
export function installPortfolioMotion(root) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let observer;
  const animations = new Set();
  const activeDetails = new Map();
  const stop = () => {
    observer?.disconnect();
    animations.forEach((animation) => animation.finish());
    animations.clear();
  };
  if (!preference.matches && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          if (preference.matches || !entry.target.animate) return;
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(12px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 400, easing: "cubic-bezier(.22,1,.36,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.08 },
    );
    root
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
  }
  const onDetailsClick = (event) => {
    const summary = event.target.closest("details > summary");
    if (
      !summary ||
      preference.matches ||
      !summary.parentElement.animate ||
      event.defaultPrevented
    )
      return;
    const detail = summary.parentElement;
    event.preventDefault();
    const previous = activeDetails.get(detail);
    const startHeight = detail.getBoundingClientRect().height;
    const closing = previous ? !previous.closing : detail.open;
    if (previous) {
      previous.animation.onfinish = null;
      previous.animation.cancel();
      animations.delete(previous.animation);
    }
    detail.style.height = "";
    detail.open = true;
    const targetHeight = closing
      ? summary.getBoundingClientRect().height
      : detail.getBoundingClientRect().height;
    detail.style.overflow = "hidden";
    const animation = detail.animate(
      [{ height: `${startHeight}px` }, { height: `${targetHeight}px` }],
      { duration: 250, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    activeDetails.set(detail, { animation, closing });
    animations.add(animation);
    animation.onfinish = () => {
      detail.open = !closing;
      detail.style.overflow = "";
      activeDetails.delete(detail);
      animations.delete(animation);
    };
  };
  root.addEventListener("click", onDetailsClick, true);
  preference.addEventListener("change", stop);
  return () => {
    stop();
    root.removeEventListener("click", onDetailsClick, true);
    preference.removeEventListener("change", stop);
  };
}

export function openScreenshot(dialog) {
  if (!dialog?.showModal) return false;
  dialog.showModal();
  if (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    dialog.animate
  ) {
    dialog.animate(
      [
        { opacity: 0, transform: "scale(.98)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      { duration: 200, easing: "ease-out" },
    );
  }
  return true;
}

export function closeScreenshot(dialog) {
  if (!dialog?.open || dialog.dataset.closing) return;
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !dialog.animate
  ) {
    dialog.close();
    return;
  }
  dialog.dataset.closing = "true";
  const animation = dialog.animate(
    [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(.98)" },
    ],
    { duration: 160, easing: "ease-in" },
  );
  const finish = () => {
    delete dialog.dataset.closing;
    dialog.close();
  };
  animation.onfinish = finish;
  animation.oncancel = finish;
}
