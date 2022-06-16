class AutoPause {
  constructor() {
    this.threshold = 0.25;
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(player.media);
  }

  handleIntersection(entries) {
    const [entry] = entries;

    const isVisible = entry.intersectionRatio >= this.threshold;

    this.player.togglePlay();
  }
}

export default AutoPause;
