/* import MediaPlayer from './MediaPlayer.mjs';
import AutoPlay from './plugins/AutoPlay.mjs';
import AutoPause from './plugins/AutoPause.mjs'; */

const video = document.querySelector('video');
const buttons = document.getElementsByTagName('button');

// ----------- AUTOPLAY -------------

function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  player.toggleMute();
  player.togglePlay();
};

// ----------- AUTOPLAY -------------

// ----------- AUTOPAUSE -------------

class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleIntersection(entries) {
    const [entry] = entries;
    entry.isIntersecting ? this.player.play() : this.player.pause();
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    isVisible ? this.player.play() : this.player.pause();
  }
}

// ----------- AUTOPAUSE -------------

// ----------- MEDIAPLAYER -------------

function MediaPlayer({ el, plugins = [] }) {
  this.media = el;
  this.plugins = plugins;

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    togglePlay: () => this.togglePlay(),
    toggleMute: () => this.toggleMute(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  const { media } = this;
  media.paused ? media.play() : media.pause();
};

MediaPlayer.prototype.toggleMute = function () {
  const { media } = this;
  media.muted = !media.muted;
};

// ----------- MEDIAPLAYER -------------

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

buttons[0].onclick = () => player.togglePlay();
buttons[1].onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  console.log('aja');
  navigator.serviceWorker
    .register('./sw.js')
    .catch((error) => console.error(error.message));
}
