<script lang="ts">
	import { base } from '$lib';
	import AltService from '$lib/altService.svelte';
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Team from '$lib/team.svelte';
    import type { PageData } from './$types';
    export let data: PageData;
    import { IconMoodSmile, IconAddressBook, IconListTree } from "@tabler/icons-svelte";
    import Countup from "svelte-countup";
</script>

<Navbar />


<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs flex items-center"
        style="background-image: url('{base}storage/projects/breadcrumbs-bg.jpg');">
        <div class="container relative flex flex-col items-center" data-aos="fade">

            <h2>About</h2>
            <ol>
                <li><a href="index.html">Home</a></li>
                <li>About</li>
            </ol>

        </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="flex flex-wrap relative">

                <div class="lg:w-7/12 w-full about-img" style="background-image: url({base}storage/projects//about.jpg);"></div>

                <div class="lg:w-7/12 w-full">
                    <h2>Consequatur eius et magnam</h2>
                    <div class="our-story">
                        <h4>Est 1988</h4>
                        <h3>Our Story</h3>
                        <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia
                            maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at
                            dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                        <ul>
                            <li><i class="bi bi-check-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea
                                    commo</span></li>
                            <li><i class="bi bi-check-circle" /> <span>Duis aute irure dolor in reprehenderit
                                    in</span></li>
                            <li><i class="bi bi-check-circle" /> <span>Ullamco laboris nisi ut aliquip ex
                                    ea</span></li>
                        </ul>
                        <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit
                            repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                        <div class="watch-video flex items-center relative">
                            <i class="bi bi-play-circle" />
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                class="glightbox stretched-link">Watch Video</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Stats Counter Section ======= -->
    <section id="stats-counter" class="stats-counter section-bg">
        <div class="container">

            <div class="grid lg:grid-cols-3 md:col-span-2 gap-x-4">

                <div class="">
                    <div class="stats-item flex items-center w-full h-full">
                        <IconMoodSmile class="w-12 h-12 color-blue flex-shrink-0" />
                        <div>
                            <Countup value={232} class='color-blue' duration={1000} />
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div><!-- End Stats Item -->

                <div class="">
                    <div class="stats-item flex items-center w-full h-full">
                        <IconAddressBook class="color-orange flex-shrink-0" />
                        <div>
                            <Countup value={521} duration={1000} />
                            <p>Projects</p>
                        </div>
                    </div>
                </div><!-- End Stats Item -->

                <div class="">
                    <div class="stats-item flex items-center w-full h-full">
                        <IconListTree class="color-green flex-shrink-0" />
                        <div>
                            <Countup value={1463} duration={1000} />
                            <p>Hours Of Support</p>
                        </div>
                    </div>
                </div><!-- End Stats Item -->
            </div>

        </div>
    </section><!-- End Stats Counter Section -->

   <AltService />

    <Team />

</main><!-- End #main -->

<Footer />