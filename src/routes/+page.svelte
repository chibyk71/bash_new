<script lang="ts">
	import Footer from './../lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
    import type { PageData } from './$types';
	import Team from '$lib/team.svelte';
	import AltService from '$lib/altService.svelte';
    import { IconZoom, IconLink } from '@tabler/icons-svelte';
	import { base } from '$lib';

    const filter = ['remodeling','construction','repairs','design']
    
    export let data: PageData;
</script>

<Navbar />

<!-- ======= Hero Section ======= -->
<section id="hero" class="hero">

    <div class="info flex items-center">
        <div class="container">
            <div class="flex flex-wrap justify-center">
                <div class="lg:w-1/2 w-full text-center">
                    <h2 data-aos="fade-down">Welcome to <span>Zamfara state govenment</span></h2>
                    <p data-aos="fade-up">Project Monitoring Software</p>
                    <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
                </div>
            </div>
        </div>
    </div>

    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-item active"
            style="background-image: url(img/hero-carousel/hero-carousel-1.jpg)"></div>
        <div class="carousel-item" style="background-image: url(img/hero-carousel/hero-carousel-2.jpg)">
    </div>

</section><!-- End Hero Section -->

<main id="main">
    <Team />

    <!-- ======= Constructions Section ======= -->
    <section id="constructions" class="constructions">
        <div class="container" data-aos="fade-up">

            <div class="section-header">
                <h2>Constructions</h2>
                <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt
                    quis dolorem dolore earum</p>
            </div>

            <div class="lg:grid gap-4 grid-cols-2">

                <div class="" data-aos="fade-up" data-aos-delay="100">
                    <div class="card-item">
                        <div class="grid xl:grid-cols-12 gap-y-4 ">
                            <div class="xl:col-span-5">
                                <div class="card-bg" style="background-image: url({base}storage/projects/img_{50}.jpg);">
                                </div>
                            </div>
                            <div class="xl:col-span-7 flex items-center">
                                <div class="card-body">
                                    <h4 class="card-title">Eligendi omnis sunt veritatis.</h4>
                                    <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem
                                        placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia
                                        temporibus illo magnam. Dolor eos et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- End Card Item -->

                <div class="" data-aos="fade-up" data-aos-delay="200">
                    <div class="card-item">
                        <div class="grid xl:grid-cols-12">
                            <div class="xl:col-span-5">
                                <div class="card-bg" style="background-image: url({base}storage/projects/img_{52}.jpg);">
                                </div>
                            </div>
                            <div class="xl:col-span-7 flex items-center">
                                <div class="card-body">
                                    <h4 class="card-title">Possimus ut sed velit assumenda</h4>
                                    <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum
                                        blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem
                                        architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- End Card Item -->

                <div class="" data-aos="fade-up" data-aos-delay="300">
                    <div class="card-item">
                        <div class="grid xl:grid-cols-12">
                            <div class="xl:col-span-5">
                                <div class="card-bg" style="background-image: url({base}storage/projects/img_63.jpg);">
                                </div>
                            </div>
                            <div class="xl:col-span-7 flex items-center">
                                <div class="card-body">
                                    <h4 class="card-title">Error beatae dolor inventore aut</h4>
                                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis
                                        numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia
                                        laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- End Card Item -->

                <div class="" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-item">
                        <div class="xl:grid xl:grid-cols-12">
                            <div class="xl:col-span-5">
                                <div class="card-bg" style="background-image: url({base}storage/projects/img_64.jpg);">
                                </div>
                            </div>
                            <div class="xl:col-span-7 flex items-center">
                                <div class="card-body">
                                    <h4 class="card-title">Expedita voluptas ut ut nesciunt</h4>
                                    <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos
                                        doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione
                                        dolores. Aut aliquid ea dolores libero nobis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- End Card Item -->
            </div>
        </div>
    </section><!-- End Constructions Section -->

    <AltService />

    <!-- ======= Our Projects Section ======= -->
    <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h2>Our Projects</h2>
                <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel
                    architecto accusamus fugit aut qui distinctio</p>
            </div>

            <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-remodeling">Remodeling</li>
                    <li data-filter=".filter-construction">Construction</li>
                    <li data-filter=".filter-repairs">Repairs</li>
                    <li data-filter=".filter-design">Design</li>
                </ul><!-- End Projects Filters -->

                <div class="grid lg:grid-cols-3 lmd:grid-cols-2 gap-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    {#each [1,2,3,4,5,6,7,8,9,10,11,12] as item, index}
                        <div class="portfolio-item filter-{filter[Math.floor(Math.random()*4)]}">
                            <div class="portfolio-content h-56">
                                <img src="{base}storage/projects/img_{index+40}.jpg" class="img-fluid" alt="">
                                <div class="portfolio-info">
                                    <h4>{filter[Math.floor(Math.random()*4)]}</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <a href="{base}storage/projects/img_{index+40}.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><IconZoom class="" /></a>
                                    <a href="project/1" title="More Details" class="details-link"><IconLink class="" /></a>
                                </div>
                            </div>
                        </div><!-- End Projects Item -->
                    {/each}
                </div><!-- End Projects Container -->

            </div>

        </div>
    </section><!-- End Our Projects Section -->
</main><!-- End #main -->

<Footer />
