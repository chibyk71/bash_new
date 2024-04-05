<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/navbar.svelte';
	import { IconZoom, IconLink } from '@tabler/icons-svelte';
    import type { PageData } from './$types';
	import { base } from '$lib';
    const filter = ['remodeling','construction','repairs','design']
    
    export let data: PageData;
</script>

<Navbar />


<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs flex items-center" style="background-image: url('{base}storage/projects/breadcrumbs-bg.jpg');">
        <div class="container relative flex flex-col items-center" data-aos="fade">

            <h2>Projects</h2>
            <ol>
                <li><a href="/">Home</a></li>
                <li>Projects</li>
            </ol>

        </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Our Projects Section ======= -->
    <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">

            <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

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