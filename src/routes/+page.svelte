<script>
	import Hero from "$lib/components/sections/Hero.svelte";
	import Stats from "$lib/components/sections/Stats.svelte";
	import Themes from "$lib/components/sections/Themes.svelte";
	import WhatIsIt from "$lib/components/sections/WhatIsIt.svelte";

	const features = [
		{
			src: 'data:image/png;base64,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',
			title: 'Ingenious',
			desc: 'Harnessing creativity and expertise of students, academicians and visionaries.'
		},
		{
			src: 'data:image/png;base64,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',
			title: 'engaging',
			desc: 'Sparking institute-level hackathons, fuelling imagination.'
		},
		{
			src: 'data:image/png;base64,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',
			title: 'futuristic',
			desc: 'Building funnel for Start-up India campaign.'
		},
		{
			src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZElEQVR4nO2dS6hVVRjHT6lpoFghmTkyBZOkB0TNpegBgg1KxYmQkxTEgVI6iRz0mEUIvsBBQWRCEJQgNLDy/UhFiB6IDzDU0iyvT9SfLO4SRNR71jrr29/69v1+cLkXzuGc/3//9rl7n73X2rvTcRzHcZxBAjAKmA2sAXYBp4Ar8Sf8vTM+Nis8VztvawHGASuB83RPeO5aYJJ2/tYADAeWA33kEz49H4fX0u5jGmAM8CPl2AY8pt3LJMBU4BjlORpeW7ufKYCxQjJulTJWu6cJgBHxX4s0W32b0p2Q5TTHh/KrmP1d274GhVwGntDuXS30f89omtXavasEGAmcUxASPpEjtftXRzwcosVb2v2rIx5/0mKVdv/qiAcKtdiu3b86gL/VdMBJ7f7VEXdBtbik3b86wkJBjwva/asDOKEo5C/t/tUB7FYUslO7f3XEM3ta+G7vHYTMUdMBs1XWwpoBHlLa0wo7E6O1+1cJ8IWCkM+1e1cL8AxwrUEZ4b2e0+5dNcDqBoWs1e5bPcAjwD8NyPjPR6B0L2VeA0LekV21WgbwlaCMjcB92h1NATwsNBToeBiAp93PJMCLcRhoyb2ql7R7mQb4oKCQj7T7tGWw9W8FZPwJPKjdp1WQsSH2jbfjOI5Dj/gSLAwupC5Im+x5O+e087cO+qc75+IjEwWELOxByPzigQY7wAPALxky9gLDOoMdYAjwAvAe8B2wLx69PR9/v5Hxmo8nSgkyxmnlrYJwvAhYGkYDDrCwLgATMj8pC+KxqbsRHpvfzSdDOq8qwGTgj4Q1OJyq/RaYm/pvBZgInL7La06oLa/WuYs7LaBu+TX1miTh+cDX8X3DwlofRNWa1+LZvRNNDDywljcZYB3l+Mbz9ibj0cJzO64DT0pJsZY3GWAR5VnmefOFhI1qaTYJCjGVN5kBvg/kctjz5gs5KyCkT1CIqbzJCM3puOJ584VIjC48IijEVN5kgC0CBX/2vPlCPhMQ8qmgEFN5kwFmChR80/PmC1kiIGSxoBBTeZMB9ggU3ON584X8KyDkjKAQU3mTiXP1SnPW8+YLOSgg5ICgEFN5tSfU3OR9z9vbNOaU89ID8Xs4oycoxFTeXq7VHma29sr3TVyT3VreLICnCxR8yvOWldLLRfS3NCXDat5kgNd7KPiK55WRsiFDxvqmZVjNm3shslTULiCGsbydnGnIqe08ryAupDLiPn4q4z2vAGEEH7A/Q8ghYJpEpjblTR2FvqrAEM3N8T4iojeAtJa3a+KMow0CF648BXxSeri/tbwpe1HTC9+B814DmX8Id8AJM6cGQ97UcmGSyw50OAK8DQxta97Utexd4Cr67AeebVPeVBlhduqX1MVFYEYb8lq7Wde9CGv/LOt5mzx629Q9CKdYzZsq4/74Bah2frKYN0fIy9jheWt5rd3xJpUV1vLmCNmOHfZZy5sj5Ax2+N9a3lpmGjn9HM0R8ppLESGs6K8mC3Ecx3Ecx3E6+dwAjTlSgJZtabUAAAAASUVORK5CYII=',
			title: 'collaborative',
			desc: 'Crowdsourcing intelligence for improving governance and quality of life.'
		},
		{
			src: 'data:image/png;base64,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',
			title: 'empowering',
			desc: 'Enabling possibilities and enhancing opportunities for citizens to deliver innovative solutions to India’s daunting problems.'
		}
	];
	const logoSrc = 'https://sbh.rcciit.org.in/static/media/logo.e13bd9e7c82e5e8bb6fe.png'
</script>


<Hero />
<div class="p-6 md:p-16 space-y-6">
	<div class="md:flex md:gap-4 md:flex-wrap md:flex-grow md:mx-auto md:pt-6">
		{#each features as { src, title, desc }}
			<div
				class="bg-base-200 md:bg-transparent md:p-0 min-w-[12rem] md:flex-1 mb-4 items-center p-4 rounded-box text-center space-y-4"
			>
				<div class="w-24 h-24 mx-auto bg-base-content rounded-full">
					<img {src} alt={title} />
				</div>
				<h2 class="text-xl font-bold text-primary capitalize">{title}</h2>
				<p class="mt-auto">{desc}</p>
			</div>
		{/each}
	</div>
	<div class="divider" />
	<WhatIsIt/>
  <Themes />
  <Stats />
  <h1 class="text-2xl md:text-5xl font-bold text-center">Supporters</h1>
</div>
<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <div class="w-16 h-16"><img src={logoSrc} alt="logo" class="w-full h-full block object-cover"></div>
    <p>&copy; 2022-23 Smart Bengal Hackathon.<br/>All rights reserved</p>
  </div> 

  <div>
    <span class="footer-title">Contact</span>
    <div>
      <span class="block footer-title capitalize p-0">Email</span>
      <a class="link link-hover">hiranmoy.roy@rcciit.org.in</a>
      <br/>
      <a class="link link-hover">arpan.deyasi@rcciit.org.in</a>
    </div>
    <div>
      <span class="block footer-title capitalize p-0">Phone</span>
      <a class="link link-hover">+919831445343</a>
      <br/>
      <a class="link link-hover">+919832244201</a>
    </div>
  </div>
  <div>
    <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </div>
  </div>
</footer>

<style>
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

</style>
