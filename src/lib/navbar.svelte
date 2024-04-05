<script>
	import { IconList, IconX } from "@tabler/icons-svelte";
	import { onMount } from "svelte";

	onMount(()=>{
		const mobileNavShow = document.querySelector('.mobile-nav-show');
		const mobileNavHide = document.querySelector('.mobile-nav-hide');

		document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
			el.addEventListener('click', function(event) {
			event.preventDefault();
			mobileNavToogle();
			})
		});

		function mobileNavToogle() {
			document.body.classList.toggle('mobile-nav-active');
			mobileNavShow?.classList.toggle('hidden');
			mobileNavHide?.classList.toggle('hidden');
		}
	})
</script>

<header id="header" class="header flex items-center">
	<div class="container flex items-center justify-between">
		<a href="index.html" class="logo flex items-center">
			<h1>UpConstruction<span>.</span></h1>
		</a>

		<IconList size={42} class="mobile-nav-toggle mobile-nav-show" />
		<IconX size={42} class="mobile-nav-toggle mobile-nav-hide hidden" />
		<nav id="navbar" class="navbar">
			<ul>
				<li><a href="index.html" class="active">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="services.html">Services</a></li>
				<li><a href="projects.html">Projects</a></li>
				<li><a href="blog.html">Blog</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>
<!-- end here -->
