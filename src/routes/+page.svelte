<script lang="ts">
	import Footer from './../lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Team from '$lib/team.svelte';
	import AltService from '$lib/altService.svelte';
	import { base } from '$lib';
	import { onMount } from 'svelte';
    let projects: any[] = [];

    onMount(async ()=>{
        projects = await fetch(base+'api/products.php?projects')
        .then((res)=>res.json())

        console.table(projects)
    })
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

            <div class="lg:grid gap-4 grid-cols-2">

                {#each projects as item}
                    <div class="" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-item">
                            <div class="grid xl:grid-cols-12 gap-y-4 ">
                                <div class="xl:col-span-5">
                                    <div class="card-bg" style="background-image: url({base}uploaded/projects/{item.image});">
                                    </div>
                                </div>
                                <div class="xl:col-span-7 flex items-center">
                                    <div class="card-body">
                                        <h4 class="card-title">{item.title}</h4>
                                        <ul>
                                            <li class="capitalize font-bold">project no.: <span class="text-lg/none">{item.project_number}</span></li>
                                            <li class="capitalize line-clamp-1 font-bold">start date <span class="text-lg/none">{new Date(item.start_date).toLocaleDateString('en-NG')}</span></li>
                                            <li class="capitalize line-clamp-1 font-bold">due date <span class="text-lg/none">{new Date(item.due_date).toLocaleDateString('en-NG')}</span></li>
                                            <li class="capitalize font-bold">contractor <span class="text-lg/none">{item.contractor_name}</span></li>
                                            <li class="capitalize font-bold">progress 
                                                <div class="h-4 rounded-full relative bg-gray-400">
                                                    <div class="h-4 rounded-full bg-purple-500 animate" style="width: {item.progress}%"></div>
                                                    <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">{item.progress}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- End Card Item -->
                {/each}
            </div>
        </div>
    </section><!-- End Constructions Section -->
</main><!-- End #main -->

<Footer />
