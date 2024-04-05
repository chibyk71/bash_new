<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<Navbar />

<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs flex items-center"
        style="background-image: url('img/breadcrumbs-bg.jpg');">
        <div class="container relative flex flex-col items-center" data-aos="fade">

            <h2>Project Details</h2>
            <ol>
                <li><a href="/">Home</a></li>
                <li>Project Details</li>
            </ol>

        </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Projet Details Section ======= -->
    <section id="project-details" class="project-details">
        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="relative h-full">
                <div class="slides-1 portfolio-details-slider swiper">
                    <div class="swiper-wrapper items-center">

                        <div class="swiper-slide">
                            <img src="img/projects/remodeling-1.jpg" alt="">
                        </div>

                        <div class="swiper-slide">
                            <img src="img/projects/construction-1.jpg" alt="">
                        </div>

                        <div class="swiper-slide">
                            <img src="img/projects/design-1.jpg" alt="">
                        </div>

                        <div class="swiper-slide">
                            <img src="img/projects/repairs-1.jpg" alt="">
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

            </div>

            <div class="grid grid-cols-12 gap-x-4 mt-4">
                <div class="lg:col-span-8">
                    <div class="portfolio-description">
                        <h2>This is an example of portfolio detail</h2>
                        <p>
                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
                            labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque
                            itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur
                            dignissimos. Sequi nulla at esse enim cum deserunt eius.
                        </p>
                        <p>
                            Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus
                            ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et
                            doloribus doloremque nesciunt molestiae laboriosam.
                        </p>

                        <div class="testimonial-item">
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                legam anim culpa.
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                            <div>
                                <img src="img/testimonials/testimonials-2.jpg" class="testimonial-img"
                                    alt="">
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                        </div>

                        <p>
                            Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati
                            earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae
                            incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.

                        <p>
                            Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem
                            libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque
                            praesentium rem et qui nesciunt.
                        </p>

                    </div>
                </div>

                <div class="lg:col-span-4">
                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong> <span>Web design</span></li>
                            <li><strong>Client</strong> <span>ASU Company</span></li>
                            <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                            <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                            <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section><!-- End Projet Details Section -->

</main>