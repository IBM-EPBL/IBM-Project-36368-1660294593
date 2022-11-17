feather.replace(); // Load feather icons

form = document.querySelector('.upload')
loading = document.querySelector("#loading")
select = document.querySelector("#upload-image");

select.addEventListener("change", (e) => {
	e.preventDefault();

	form.submit()
	form.style.visibility = "hidden";
	loading.style.display = 'flex';
});
