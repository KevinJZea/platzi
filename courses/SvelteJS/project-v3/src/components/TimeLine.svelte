<script>
  import Card from './Card.svelte';

  export let posts = [];
</script>

<div class="TimeLine">
  <div class="TimeLine-container">
    {#each posts as post}
      <Card {...post} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</div>
