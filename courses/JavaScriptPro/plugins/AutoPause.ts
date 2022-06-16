import MediaPlayer from '../MediaPlayer.mjs';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    entry.isIntersecting && this.player.togglePlay();
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    isVisible && this.player.togglePlay();
  }
}

export default AutoPause;
