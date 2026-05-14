<script>
  import Profile from './Profile.svelte';
  import Stories from './Stories.svelte';
  import Footer from './Footer.svelte';

  export let nickname;
  export let name;
</script>

<div class="Sidebar">
  <div class="Sidebar-container">
    <Profile {nickname} {name} />
    <Stories />
    <Footer />
  </div>
</div>
