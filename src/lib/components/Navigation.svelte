<script lang="ts">
	const discover_sbh_contents = [
		{ route: '/about', title: 'About SBH 2023' },
		{ route: '/process-flow', title: 'SBH 2023 process flow' },
		{ route: '/themes', title: 'SBH 2023 themes' },
		{ route: '/problem-statements', title: 'SBH 2023 problem statements' },
		{ route: '/team', title: 'SBH 2023 team' }
	];
	const guidelines = [
		{ route: '/guidelines/junior', title: 'SBH Junior' },
		{ route: '/guidelines/senior', title: 'SBH Senior' }
	];
	$: transparent = false
	function checkScroll() {
		const container = window.pageYOffset
		if (container > 0) transparent = true
		if(container === 0) transparent = false
	}
	const logoSrc = 'https://sbh.rcciit.org.in/static/media/logo.e13bd9e7c82e5e8bb6fe.png'
</script>

<svelte:window on:scroll={checkScroll}></svelte:window>

<div class="fixed w-full top-0 z-50 {transparent && 'bg-base-100'} transition-colors">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<nav class="navbar hidden px-12 md:flex">
		<div class="flex-1">
			<img src={logoSrc} alt="logo" class="w-8 h-8 object-cover block {transparent || 'hidden'}">
			<a href="/" class="btn btn-ghost normal-case text-xl {transparent || 'opacity-0'} transition-opacity">SBH RCCIIT</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1 hidden md:inline-flex">
				<li tabindex="0">
					<a href="/" class="{transparent || 'text-base-100'}">
						Discover SBH
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-200">
						{#each discover_sbh_contents as { route, title }}
							<li><a href={route} {title} class="capitalize">{title}</a></li>
						{/each}
					</ul>
				</li>
				<li><a href="/" class="{transparent || 'text-base-100'}">Venue</a></li>
				<li><a href="/" class="{transparent || 'text-base-100'}">Eligibility</a></li>
				<li><a href="/" class="{transparent || 'text-base-100'}">Prizes</a></li>
				<div class="dropdown dropdown-end p-0">
					<label for="" tabindex="0" class="btn btn-ghost btn-circle {transparent || 'text-base-100'}">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-max"
					>
						<li><a>Executive Team</a></li>
						<li><a>Project Implementation</a></li>
						<span class="menu-title px-4 py-2">Guidelines</span>
						{#each guidelines as { route, title }}
							<li><a href={route} {title} class="capitalize ml-4">{title}</a></li>
						{/each}
						<span class="menu-title px-4 py-2">Idea Template</span>
						<li><a href="/" class="ml-4">For Schools</a></li>
						<li><a href="/" class="ml-4">For College</a></li>
						<li><a>Updates</a></li>
						<li><a>FAQs</a></li>
						<li><a>Contact</a></li>
					</ul>
				</div>
			</ul>
		</div>
	</nav>
	<nav class="navbar md:hidden">
		<div class="flex-1">
			<img src={logoSrc} alt="logo" class="w-8 h-8 object-cover block">
			<a href="/" class="btn btn-ghost normal-case text-xl {transparent || 'text-base-100'}">SBH RCCIIT</a>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle {transparent || 'text-base-100'}">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul tabindex="0" class="menu menu-compact dropdown-content bg-base-200 rounded-box w-64">
					<div class="collapse collapse-arrow rounded-box">
						<input type="checkbox" class="peer" />
						<div class="collapse-title font-sm peer-checked:bg-base-300">Discover SBH</div>
						<div class="collapse-content peer-checked:bg-base-300">
							{#each discover_sbh_contents as { route, title }}
								<li><a href={route} {title} class="capitalize">{title}</a></li>
							{/each}
						</div>
					</div>
					<li><a>Executive Team</a></li>
					<li><a>Project Implementation</a></li>
					<div class="collapse collapse-arrow rounded-box">
						<input type="checkbox" class="peer" />
						<div class="collapse-title font-sm peer-checked:bg-base-300">Guidelines</div>
						<div class="collapse-content peer-checked:bg-base-300">
							{#each guidelines as { route, title }}
								<li><a href={route} {title} class="capitalize">{title}</a></li>
							{/each}
						</div>
					</div>
					<div class="collapse collapse-arrow rounded-box">
						<input type="checkbox" class="peer" />
						<div class="collapse-title font-sm peer-checked:bg-base-300">Idea Template</div>
						<div class="collapse-content peer-checked:bg-base-300">
							<li><a href="/" title="For college" class="capitalize">For College</a></li>
							<li><a href="/" title="For school" class="capitalize">For School</a></li>
						</div>
					</div>
					<li><a href="/" title="Venue" class="capitalize">Venue</a></li>
					<li><a href="/" title="Venue" class="capitalize">Updates</a></li>
					<li><a href="/" title="Venue" class="capitalize">Prize</a></li>
					<li><a href="/" title="Venue" class="capitalize">Eligibility</a></li>
					<li><a href="/" title="Venue" class="capitalize">FAQs</a></li>
					<li><a href="/" title="Venue" class="capitalize">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
</div>
