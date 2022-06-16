function MediaPlayer({ el, plugins = [] }) {
  this.media = el;
  this.plugins = plugins;

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.togglePlay = function () {
  const { media } = this;
  media.paused ? media.play() : media.pause();
};

MediaPlayer.prototype.toggleMute = function () {
  const { media } = this;
  media.muted = !media.muted;
};

export default MediaPlayer;
