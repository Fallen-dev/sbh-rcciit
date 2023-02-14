<script>
  const themes = [
    {
      src: null,
      title: 'Smart Vehicle',
      desc: 'Creating intelligent devices to improve commutation sector.'
    },
    {
      src: null,
      title: 'Robotics and Drones',
      desc: 'There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.'
    },
    {
      src: null,
      title: 'Disaster Management',
      desc: 'Disaster management includes ideas related to risk mitigation, Planning and management before, after or during a disaster.'
    },
    {
      src: null,
      title: 'Smart Education',
      desc: 'Smart education,a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.'
    },
    {
      src: null,
      title: 'Smart Automation',
      desc: 'Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.'
    },
    {
      src: null,
      title: 'Intelligent Transportation and logistics',
      desc: 'Submit your ideas to address the growing pressures on the city’s resources, transport networks, and logistic infrastructure.'
    },
    {
      src: null,
      title: 'Clean/Green Technology',
      desc: 'Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.'
    },
    {
      src: null,
      title: 'Renewable and sustainable energy',
      desc: 'Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.'
    },
    {
      src: null,
      title: 'Blockchain and Cybersecurity',
      desc: 'Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.'
    },
    {
      src: null,
      title: 'Fitness and Sports',
      desc: 'Ideas that can boost fitness activities and assist in keeping fit.'
    },
    {
      src: null,
      title: 'Agriculture, Foodtech and Rural Development',
      desc: 'Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.'
    },
    {
      src: null,
      title: 'Biotech and healthcare',
      desc: 'Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.'
    },
    {
      src: null,
      title: 'IOT with AI',
      desc: 'Submit your idea on Artificial intelligence technologies with the Internet of things infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.'
    },
    {
      src: null,
      title: 'Miscellaneous',
      desc: 'Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment and Retail.'
    }
  ]
</script>

  <div class="text-center">
    <h1 class="mb-4 text-2xl md:text-5xl font-bold">SBH's Themes</h1>
    <p>No problem is too big... No idea is too small.</p>  
  </div>
  <div class="flex overflow-x-scroll gap-6 md:block md:columns-3 md:overflow-auto md:mx-auto md:max-w-4xl" style="scrollbar-width: none; -ms-overflow-style: none;">
    {#each themes as {src, title, desc}}
      <div class="max-w-xs flex flex-none p-3 md:break-inside-avoid md:mb-6 md:w-full card flex-col items-center justify-center text-center bg-base-200">
        <figure id="hide"><img src="" alt="" ></figure>
        <h2 class="text-2xl font-bold mb-6 text-neutral">{title}</h2>
        <p>{desc}</p>
      </div>
    {/each}
  </div>

  <style>
  figure#hide {
    display: none;
  }
  </style>