var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    const setHeaderHeight = () => {
        document.querySelector(".header").style.height = window.innerHeight + "px";
    };

    // Set initial header height
    setHeaderHeight();

    // Update header height on window resize
    window.addEventListener("resize", setHeaderHeight);

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
