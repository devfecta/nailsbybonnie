document.querySelectorAll("#headerNav .nav-link").forEach((link) => {
	link.addEventListener("click", () => {
		const navbarCollapse = document.querySelector(".navbar-collapse");
		if (navbarCollapse.classList.contains("show")) {
			navbarCollapse.classList.remove("show");
			document.querySelector("#headerNav .navbar-toggler").classList.add("collapsed");
			document.querySelector("#headerNav .navbar-toggler").setAttribute("aria-expanded", false);
		}
	});
});

