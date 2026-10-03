gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {

    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 }
    });

    tl.from(".site-header", { y: -40, opacity: 0 })
        .from(".hero > *", {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            clearProps: "transform",           
            onComplete() {                     
                this.targets().forEach((el) => el.classList.add("is-ready"));
            }
        }, "-=0.5");

    gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 85%" }
        });
    });

    gsap.from(".card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "transform",
        onComplete() {
            this.targets().forEach((el) => el.classList.add("is-ready"));
        },
        scrollTrigger: { trigger: ".cards", start: "top 80%" }
    });

    const steps = gsap.utils.toArray(".step");
    gsap.set(steps, { opacity: 0.2, y: 30 });

    const processTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".process",
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });

    steps.forEach((step) => {
        processTl.to(step, { opacity: 1, y: 0, duration: 1 });
    });
});

mm.add("(prefers-reduced-motion: reduce)", () => {
    // Todo se ve directamente. Solo dejamos activo el hover de botón y tarjetas.
    document.querySelectorAll(".btn, .card").forEach((el) => el.classList.add("is-ready"));
});