<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/navbar.svelte';
	import { onMount } from 'svelte';
	import { base } from '$lib';
	import Projects from '$lib/projects.svelte';

    let projects: {
		Files: any[];
		milestones: any[];
		status: 'IN_PROGRESS'|'ON_HOLD'|'COMPLETED'|'NOT_STARTED'|'CANCELED';
		date_of_award: string | number | Date;
		due_date: string | number | Date;
		start_date: string | number | Date;
		contractor: string;
		project_number: string;
		desc: string; title: string; 
    };

    const toDate = (d:string | number | Date) =>{
        return new Date(d).toLocaleDateString("en-NG",{month:'short',year:"numeric"})
    }
    let statusColor = 'bg-green-500'

    onMount(async ()=>{
        let id = $page.params.id
        projects = await fetch(base+'api/products.php?projects&id='+id)
        .then((res)=>res.json())
        .then((res)=>res[0])

        console.log(projects)

        switch (projects.status) {
            case "CANCELED":
                statusColor = 'bg-red-500'
                break;
            case 'IN_PROGRESS':
            case 'COMPLETED':
                statusColor = 'bg-green-500'
                break;
            case 'ON_HOLD':
            case 'NOT_STARTED':
                statusColor = 'bg-gray-500'
                break;
            default:
                break;
        }
    })

    $:loading = !projects
</script>

{#if !loading}
    <Navbar />
    
    <main id="main">
    
        <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs flex items-center" style="background-image: url('{base}storage/projects/breadcrumbs-bg.jpg');">
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
                <div class="grid grid-cols-12 gap-x-4 mt-4">
                    <div class="lg:col-span-8 order-2 lg:order-1">
                        <div class="portfolio-description">
                            <h2>{projects.title}</h2>
                            
                            <div class="">{@html projects.desc}</div>
    
                        </div>
    
                        <Projects data={projects.Files} />
                    </div>
    
                    <div class="lg:col-span-4 order-1 lg:order-2">
                        <div class="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li><strong>Project NO.:</strong> <span>{projects.project_number}</li>
                                <li><strong>Project Status</strong> <span class={statusColor}>{projects.status.replaceAll("_"," ")}</li>
                                <li><strong>Contractor</strong> <span>{projects.contractor}</span></li>
                                <li><strong>Project Award Date</strong> <span>{toDate(projects.date_of_award)}</span></li>
                                <li><strong>Project Start Date</strong> <span>{toDate(projects.start_date)}</span></li>
                                <li><strong>Project Due Date</strong> <span>{toDate(projects.due_date)}</span></li>
                                <li><strong>Project Sum Amount </strong> <span>{projects.contractor}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
            </div>
        </section><!-- End Projet Details Section -->
    
    </main>
{:else}
    <div id="preloader"></div>
{/if}