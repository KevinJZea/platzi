<script>
  import { blur } from 'svelte/transition';
  import Comments from './Comments.svelte';
  import Modal from './Modal.svelte';
  import Share from './Share.svelte';

  import { likeCount } from '../stores/store';

  export let username;
  export let location;
  export let photo;
  export let postComment;
  export let comments;
  export let avatar;

  let isModal = false;
  let like = false;
  let bookmark = false;

  function handleClick() {
    isModal = !isModal;
  }

  function handleLike() {
    like = !like;

    if (like) likeCount.update((n) => n + 1);
    else likeCount.update((n) => n - 1);
  }
</script>

<div class="Card">
  {#if isModal}
    <div transition:blur>
      <Modal>
        <Share on:click={handleClick} />
      </Modal>
    </div>
  {/if}

  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img
          src={avatar
            ? avatar
            : 'https://static.platzi.com/media/public/uploads/elmo002_25658817-f5c1-44b5-91c3-18f73d365073.jpg'}
          alt={username ? username : ''}
        />
        <h2>
          {username ? username : 'kevinjzea'}
          <span>{location ? location : 'Monterrey, México'}</span>
        </h2>
      </div>

      <div class="Card-settings">
        <i class="fas fa-ellipsis-h" />
      </div>

      <div class="Card-photo">
        <figure on:dblclick={handleLike}>
          <img
            src={photo
              ? photo
              : 'https://static.platzi.com/media/public/uploads/elmo002_25658817-f5c1-44b5-91c3-18f73d365073.jpg'}
            alt={username ? username : ''}
          />
        </figure>
      </div>

      <div class="Card-icons">
        <div class="Card-icon-first">
          <i
            class="fas fa-heart"
            class:active-like={like}
            on:click={handleLike}
          />
          <i class="fas fa-paper-plane" on:click={handleClick} />
        </div>
        <div class="Card-icon-second">
          <i
            class="fas fa-bookmark"
            class:active-bookmark={bookmark}
            on:click={() => (bookmark = !bookmark)}
          />
        </div>
      </div>

      <div class="Card-description">
        <h3>{username ? username : 'kevinjzea'}</h3>
        <span>{postComment ? postComment : 'Hi!'}</span>
      </div>

      <Comments {...comments} />
    </div>
  </div>
</div>
