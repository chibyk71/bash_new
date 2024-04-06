<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/navbar.svelte';
	import { IconZoom, IconLink } from '@tabler/icons-svelte';
    import type { PageData } from './$types';
	import { base } from '$lib';
	import Projects from '$lib/projects.svelte';
    
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

            <div class="portfolio-isotope">
               <Projects />
            </div>

        </div>
    </section><!-- End Our Projects Section -->

</main><!-- End #main -->