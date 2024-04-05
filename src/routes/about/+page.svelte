<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
    import type { PageData } from './$types';
    export let data: PageData;
    import { IconMoodSmile, IconAddressBook, IconListTree, IconSunElectricity, IconSunFilled, IconSunMoon, IconSunHigh } from "@tabler/icons-svelte";
    import Countup from "svelte-countup";
</script>

<Navbar />


<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs flex items-center"
        style="background-image: url('img/breadcrumbs-bg.jpg');">
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

                <div class="lg:w-7/12 w-full about-img" style="background-image: url(img/about.jpg);"></div>

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

    <!-- ======= Alt Services Section ======= -->
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">

            <div class="grid lg:grid-cols-12 justify-around gap-x-4">
                <div class="lg:col-span-6 img-bg" style="background-image: url(img/alt-services.jpg);"
                    data-aos="zoom-in" data-aos-delay="100"></div>

                <div class="lg:col-span-5 flex flex-col justify-center">
                    <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                    <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed
                        minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                    <div class="icon-box flex relative" data-aos="fade-up" data-aos-delay="100">
                        <IconSunElectricity class="flex-shrink-0" />
                        <div>
                            <h4><a href="" class="stretched-link">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident</p>
                        </div>
                    </div><!-- End Icon Box -->

                    <div class="icon-box flex relative" data-aos="fade-up" data-aos-delay="200">
                        <IconSunFilled class="flex-shrink-0" />
                        <div>
                            <h4><a href="" class="stretched-link">Nemo Enim</a></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque</p>
                        </div>
                    </div><!-- End Icon Box -->

                    <div class="icon-box flex relative" data-aos="fade-up" data-aos-delay="300">
                        <IconSunMoon class="flex-shrink-0" />
                        <div>
                            <h4><a href="" class="stretched-link">Dine Pad</a></h4>
                            <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                                deserunt minus aut eligendi omnis</p>
                        </div>
                    </div><!-- End Icon Box -->

                    <div class="icon-box flex relative" data-aos="fade-up" data-aos-delay="400">
                        <IconSunHigh class="flex-shrink-0" />
                        <div>
                            <h4><a href="" class="stretched-link">Tride clov</a></h4>
                            <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non
                                aspernatur odit amet. Et eligendi</p>
                        </div>
                    </div><!-- End Icon Box -->

                </div>
            </div>

        </div>
    </section><!-- End Alt Services Section -->

    <!-- ======= Our Team Section ======= -->
    <section id="team" class="team">
        <div class="container" data-aos="fade-up">

            <div class="section-header">
                <h2>Our Team</h2>
                <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat
                    sunt id nobis omnis tiledo stran delop</p>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5">

                <div class="member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                        <img src="img/team/team-1.jpg" class="img-fluid" alt="">
                        <div class="social">
                            <a href="#"><i class="bi bi-twitter" /></a>
                            <a href="#"><i class="bi bi-facebook" /></a>
                            <a href="#"><i class="bi bi-instagram" /></a>
                            <a href="#"><i class="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div class="member-info text-center">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum
                            distinctio dire flow</p>
                    </div>
                </div><!-- End Team Member -->

                <div class="member" data-aos="fade-up" data-aos-delay="200">
                    <div class="member-img">
                        <img src="img/team/team-2.jpg" class="img-fluid" alt="">
                        <div class="social">
                            <a href="#"><i class="bi bi-twitter" /></a>
                            <a href="#"><i class="bi bi-facebook" /></a>
                            <a href="#"><i class="bi bi-instagram" /></a>
                            <a href="#"><i class="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div class="member-info text-center">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                        <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores
                            exercitationem ut</p>
                    </div>
                </div><!-- End Team Member -->

            </div>

        </div>
    </section><!-- End Our Team Section -->

</main><!-- End #main -->

<Footer />