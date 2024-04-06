<script>
	import { base } from "$lib";
	import { IconLink, IconZoom } from "@tabler/icons-svelte";
	import { onMount } from "svelte";

    /**
	 * @type {any[]}
	 */
    let request = []
    onMount(async ()=>{
        request = await fetch(base+'api/products.php?projects')
        .then((res)=>res.json())
    })
</script>
<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

    {#each request as item, index}
        <div class="portfolio-item">
            <div class="portfolio-content h-56">
                <h4>Remodeling 1</h4>
                <img src="{base}storage/projects/img_{index+40}.jpg" class="img-fluid" alt="">
                <div class="portfolio-info">
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="{base}storage/projects/img_{index+40}.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><IconZoom class="" /></a>
                    <a href="project/1" title="More Details" class="details-link"><IconLink class="" /></a>
                </div>
            </div>
        </div><!-- End Projects Item -->
    {/each}
</div><!-- End Projects Container -->