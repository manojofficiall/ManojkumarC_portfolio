(() => {
function initLoader() {
const loader = document.getElementById("portfolio-loader");
const fill = document.getElementById("loading-fill");
const percent = document.getElementById("loading-percent");

```
    if (!loader) return;

    let closed = false;
    let index = 0;
    const stages = [0, 10, 40, 75, 100];

    function hideLoader() {
        if (closed) return;
        closed = true;

        document.body.style.overflow = "auto";

        loader.classList.add("done");

        // Force hide if CSS animation fails
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 900);
    }

    function updateProgress() {
        if (closed) return;

        if (index >= stages.length) {
            setTimeout(hideLoader, 300);
            return;
        }

        const value = stages[index++];

        if (fill) fill.style.width = value + "%";
        if (percent) percent.textContent = value + "%";

        setTimeout(updateProgress, 600);
    }

    document.body.style.overflow = "hidden";
    updateProgress();

    // Emergency fallback
    setTimeout(hideLoader, 5000);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLoader, {
        once: true
    });
} else {
    initLoader();
}
```

})();
