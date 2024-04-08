<script lang="ts">
	import Footer from './../lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Team from '$lib/team.svelte';
	import AltService from '$lib/altService.svelte';
	import { base } from '$lib';
	import { onMount } from 'svelte';
	import Construction from '$lib/construction.svelte';
</script>

<Navbar />

<!-- ======= Hero Section ======= -->
<section id="hero" class="hero">

    <div class="info flex items-center">
        <div class="container">
            <div class="flex flex-wrap justify-center">
                <div class="lg:w-1/2 w-full text-center">
                    <h2 data-aos="fade-down">Welcome to <span>Zamfara state govenment</span></h2>
                    <p data-aos="fade-up font-bold">we believe transparency is key. That's why we've developed zamfara state project monitoring software, a user-friendly platform dedicated to making government project and contract information readily available to the public.</p>
                    <a data-aos="fade-up mt-5" data-aos-delay="200" href="#main" class="btn-get-started">Get Started</a>
                </div>
            </div>
        </div>
    </div>

    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-item active" style="background-image: url(img/hero-carousel/hero-carousel-1.jpg)"></div>
    </div>

</section><!-- End Hero Section -->

<main id="main">
    <Team />
    <AltService />

    
    <!-- ======= Constructions Section ======= -->
    <section id="constructions" class="constructions">
        <div class="container" data-aos="fade-up">

            <div class="section-header">
                <h2>Constructions</h2>
                <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt
                    quis dolorem dolore earum</p>
            </div>

            <Construction />
        </div>
    </section><!-- End Constructions Section -->
</main><!-- End #main -->

<Footer />
