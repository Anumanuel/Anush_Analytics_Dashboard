import gsap from 'gsap';

export function initAnimations() {
  gsap.fromTo(
    '.chart-bar',
    { height: '0%' },
    {
      height: (i, el) => el.getAttribute('data-height'),
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.2,
    }
  );

  gsap.fromTo(
    '.chart-bar-horiz',
    { width: '0%' },
    {
      width: (i, el) => el.getAttribute('data-width'),
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.4,
    }
  );

  gsap.fromTo(
    '.scatter-dot',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.1, delay: 0.6 }
  );

  const countUp = (selector, formatFn) => {
    document.querySelectorAll(selector).forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target'));
      gsap.to(
        { val: 0 },
        {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate() {
            el.innerHTML = formatFn(this.targets()[0].val);
          },
        }
      );
    });
  };

  countUp('.kpi-number', (v) => '$' + v.toFixed(2) + 'M');
  countUp('.kpi-number-k', (v) => '$' + Math.floor(v) + 'K');
  countUp('.kpi-number-pct', (v) => v.toFixed(1) + '%');

  gsap.from('.kpi-sparkline', {
    strokeDasharray: 200,
    strokeDashoffset: 200,
    duration: 1.5,
    ease: 'power2.out',
    delay: 0.2,
  });
}
