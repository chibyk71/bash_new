<script>
// @ts-nocheck

	import { base } from "$lib";
	import { IconLink, IconZoom } from "@tabler/icons-svelte";

    /**
	 * @type {string}
	 */
     export let data; 

    data = JSON.parse(data)
    console.log( typeof data)
</script>

<section id="projects" class="projects">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
            <h2>Gallery</h2>
        </div>

        <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            
                {#each data as item, index}
                    {#if item.name}
                        <div class="portfolio-item">
                            <div class="portfolio-content h-56">
                                <img src="{base}uploaded/projects/{item.name}" class="img-fluid object-cover h-full" alt="">
                                <div class="portfolio-info">
                                    <p>{item.folder}</p>
                                    <a href="{base}uploaded/projects/{item.name}" title={item.folder} class="glightbox preview-link"><IconZoom class="" /></a>
                                </div>
                            </div>
                        </div>
                    {/if}<!-- End Projects Item -->
                {/each}
            </div><!-- End Projects Container -->
        </div>

    </div>
</section>