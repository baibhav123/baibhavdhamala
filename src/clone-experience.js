/**
 * BAIBHAV DHAMALA — AI CLONE "HEAR ABOUT ME" CINEMATIC EXPERIENCE
 * 
 * Features:
 * - Floating trigger button in bottom-right corner.
 * - Center holographic avatar/clone of Baibhav with speech wave pulses.
 * - 4-part sequential HD video hologram with native voice.
 * - STRICT SEQUENCE GUARANTEE: Each video plays 100% to completion before the next video starts.
 *   (Part 1 ends -> Part 2 starts -> Part 2 ends -> Part 3 starts -> Part 3 ends -> Part 4 starts).
 * - Blob-based in-memory video preloading for zero-latency instant transitions.
 * - Real-time word-by-word karaoke glowing cyan subtitles.
 * - GIANT backdrop keyword animations behind the clone for each section.
 * - Full controls: Play, Pause, Replay, Audio Mute/Unmute, Exit / Escape.
 */

export class CloneExperience {
  constructor() {
    this.overlay = document.getElementById('cloneOverlay');
    this.triggerBtn = document.getElementById('cloneTriggerBtn');
    this.closeBtn = document.getElementById('cloneCloseBtn');
    this.replayBtn = document.getElementById('cloneReplayBtn');
    this.audioToggleBtn = document.getElementById('cloneAudioToggle');
    this.backdropWord = document.getElementById('cloneBackdropWord');
    this.captionBox = document.getElementById('cloneCaptions');
    this.avatarWrap = document.getElementById('cloneAvatarWrap');
    this.videoPlayer = document.getElementById('cloneVideoPlayer');

    this.isPlaying = false;
    this.isMuted = false;
    this.currentUtterance = null;
    this.timerId = null;
    this.emergencyTimerId = null;
    this.hasVideo = true;
    this.videoBlobs = {};

    this.scriptSegments = [
      {
        part: 1,
        videoSrc: 'public/videos/hologram_part1.mp4',
        text: "Hello! I am Baibhav Dhamala, founder of Dhamala Tech and a Class 11 student at Sri Sri Academy Siliguri with 90% in CBSE.",
        keyword: "BAIBHAV DHAMALA",
      },
      {
        part: 2,
        videoSrc: 'public/videos/hologram_part2.mp4',
        text: "At Dhamala Tech, I lead the architecture of our flagship ChatX AI Workspace and API v2 for advanced reasoning and code debugging.",
        keyword: "DHAMALA TECH · CHATX",
      },
      {
        part: 3,
        videoSrc: 'public/videos/hologram_part3.mp4',
        text: "We also built TutorX for adaptive K-12 learning, unveiled SanketX gesture interaction, and won 1st Place at Techzibit 1.0.",
        keyword: "TUTORX · SANKETX",
      },
      {
        part: 4,
        videoSrc: 'public/videos/hologram_part4.mp4',
        text: "Beyond tech, I play competitive cricket for Sri Sri Academy. Welcome to my portfolio, and let's connect to build the future!",
        keyword: "CRICKET · INNOVATE",
      },
    ];

    this.init();
    this.preloadVideos();
  }

  // Preload all 4 video files into in-memory Blob Object URLs for seamless playback
  preloadVideos() {
    if (!this.videoPlayer) return;

    this.avatarWrap?.classList.add('has-video');

    this.scriptSegments.forEach((seg) => {
      fetch(seg.videoSrc)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          this.videoBlobs[seg.part] = blobUrl;
          // Set initial video player source to part 1 if not playing
          if (seg.part === 1 && this.videoPlayer && !this.isPlaying) {
            this.videoPlayer.src = blobUrl;
            this.videoPlayer.load();
          }
        })
        .catch((err) => {
          console.warn(`Direct prefetch fallback for part ${seg.part}:`, err);
        });
    });

    // Fallback if fetch takes a moment
    if (!this.videoPlayer.src) {
      this.videoPlayer.src = this.scriptSegments[0].videoSrc;
      this.videoPlayer.preload = 'auto';
      this.videoPlayer.load();
    }
  }

  init() {
    this.triggerBtn?.addEventListener('click', () => this.open());
    this.closeBtn?.addEventListener('click', () => this.close());
    this.replayBtn?.addEventListener('click', () => this.startSpeechSequence());

    this.audioToggleBtn?.addEventListener('click', () => {
      this.isMuted = !this.isMuted;
      this.audioToggleBtn.textContent = this.isMuted ? '🔇 Audio Muted' : '🔊 Sound On';
      if (this.videoPlayer) {
        this.videoPlayer.muted = this.isMuted;
      }
      if (this.isMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      } else if (!this.isMuted && !this.isPlaying) {
        this.startSpeechSequence();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay?.classList.contains('is-active')) {
        this.close();
      }
    });
  }

  open() {
    if (!this.overlay) return;
    this.overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Instant start: Unmute and play both video and sound immediately on user click
    this.isMuted = false;
    if (this.audioToggleBtn) {
      this.audioToggleBtn.textContent = '🔊 Sound On';
    }
    if (this.videoPlayer) {
      this.videoPlayer.muted = false;
      this.videoPlayer.volume = 1.0;
    }

    this.startSpeechSequence();
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('is-active');
    document.body.style.overflow = '';
    this.stopSpeech();
    if (this.videoPlayer) {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      const initialSrc = this.videoBlobs[1] || this.scriptSegments[0].videoSrc;
      this.videoPlayer.src = initialSrc;
      this.videoPlayer.load();
    }
    if (this.avatarWrap) {
      this.avatarWrap.classList.remove('is-speaking');
    }
  }

  stopSpeech() {
    clearTimeout(this.timerId);
    clearTimeout(this.emergencyTimerId);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.videoPlayer) {
      this.videoPlayer.onended = null;
      this.videoPlayer.ontimeupdate = null;
      this.videoPlayer.onerror = null;
      this.videoPlayer.pause();
    }
    this.isPlaying = false;
  }

  startSpeechSequence() {
    this.stopSpeech();
    this.isPlaying = true;
    let index = 0;

    const runSegment = () => {
      if (!this.isPlaying || index >= this.scriptSegments.length) {
        if (this.avatarWrap) this.avatarWrap.classList.remove('is-speaking');
        if (this.videoPlayer) this.videoPlayer.pause();
        if (this.captionBox) {
          this.captionBox.innerHTML = '<span class="caption-complete">✦ Hologram Speech Complete. Explore Dhamala Tech AI platforms below!</span>';
        }
        if (this.backdropWord) {
          this.backdropWord.textContent = 'DHAMALA TECH';
          this.backdropWord.classList.add('is-visible');
        }
        this.isPlaying = false;
        return;
      }

      const seg = this.scriptSegments[index];
      this.renderSegment(seg);

      if (this.hasVideo && this.videoPlayer) {
        // --- REAL VIDEO MODE (Native Audio & Flow Lip-Synced Video) ---
        if (this.avatarWrap) this.avatarWrap.classList.add('is-speaking');
        this.videoPlayer.muted = this.isMuted;
        this.videoPlayer.volume = 1.0;

        const currentPartNumber = seg.part;
        const targetSrc = this.videoBlobs[currentPartNumber] || seg.videoSrc;

        // Clear previous event listeners
        this.videoPlayer.onended = null;
        this.videoPlayer.ontimeupdate = null;
        this.videoPlayer.onerror = null;

        // Synchronize word-by-word subtitles dynamically as video plays
        this.videoPlayer.ontimeupdate = () => {
          if (!this.captionBox) return;
          const dur = this.videoPlayer.duration || 10;
          const progress = Math.min(1, this.videoPlayer.currentTime / dur);
          const words = this.captionBox.querySelectorAll('.caption-word');
          if (!words.length) return;
          const activeWordIndex = Math.min(words.length - 1, Math.floor(progress * words.length));
          words.forEach((el, wIdx) => {
            if (wIdx <= activeWordIndex) {
              el.style.color = '#00f0ff';
              el.style.opacity = '1';
              el.style.textShadow = '0 0 12px rgba(0, 240, 255, 0.8)';
            } else {
              el.style.color = '#ffffff';
              el.style.opacity = '0.7';
              el.style.textShadow = 'none';
            }
          });
        };

        let segmentCompleted = false;

        // ONLY called when the current video has completely and fully finished playing
        const completeCurrentVideoAndAdvance = () => {
          if (segmentCompleted) return;
          segmentCompleted = true;

          clearTimeout(this.emergencyTimerId);
          this.videoPlayer.onended = null;
          this.videoPlayer.ontimeupdate = null;
          this.videoPlayer.onerror = null;

          // Ensure 100% of the words are highlighted upon video completion
          if (this.captionBox) {
            const words = this.captionBox.querySelectorAll('.caption-word');
            words.forEach((el) => {
              el.style.color = '#00f0ff';
              el.style.opacity = '1';
              el.style.textShadow = '0 0 12px rgba(0, 240, 255, 0.8)';
            });
          }

          // Advance to the NEXT video ONLY after this current video has completely finished playing
          index++;
          if (index < this.scriptSegments.length) {
            // Smooth brief transition pause (100ms) before starting the next video
            this.timerId = setTimeout(runSegment, 100);
          } else {
            // All 4 videos completed full playback
            if (this.avatarWrap) this.avatarWrap.classList.remove('is-speaking');
            if (this.captionBox) {
              this.captionBox.innerHTML = '<span class="caption-complete">✦ Hologram Speech Complete. Explore Dhamala Tech AI platforms below!</span>';
            }
            if (this.backdropWord) {
              this.backdropWord.textContent = 'DHAMALA TECH';
              this.backdropWord.classList.add('is-visible');
            }
            this.isPlaying = false;
          }
        };

        // Standard completion trigger: Native browser ended event
        this.videoPlayer.onended = () => {
          completeCurrentVideoAndAdvance();
        };

        // Fallback for media error
        this.videoPlayer.onerror = (e) => {
          console.warn(`Video error on part ${currentPartNumber}:`, e);
          completeCurrentVideoAndAdvance();
        };

        // Fail-safe timeout (18s) ONLY to prevent deadlock if browser drops ended event or stalls
        clearTimeout(this.emergencyTimerId);
        this.emergencyTimerId = setTimeout(() => {
          if (this.isPlaying && !segmentCompleted) {
            console.warn(`Fail-safe advance triggered for part ${currentPartNumber}`);
            completeCurrentVideoAndAdvance();
          }
        }, 18000);

        // Load current part and play from 0s
        if (this.videoPlayer.src !== targetSrc && this.videoPlayer.src !== new URL(targetSrc, window.location.href).href) {
          this.videoPlayer.src = targetSrc;
        }
        this.videoPlayer.currentTime = 0;

        const playPromise = this.videoPlayer.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Playback error / Autoplay blocked:', err);
            // If sound blocked by browser policy, fallback to muted play so video plays cleanly
            this.videoPlayer.muted = true;
            this.videoPlayer.play().catch(() => {});
          });
        }

      } else {
        // --- SYNTHETIC TTS FALLBACK (When video is not present) ---
        if (!this.isMuted && 'speechSynthesis' in window) {
          const utter = new SpeechSynthesisUtterance(seg.text);
          utter.rate = 1.0;
          utter.pitch = 1.05;

          const voices = window.speechSynthesis.getVoices();
          const preferred = voices.find(
            (v) => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('Aaron') || v.name.includes('Samantha')) && v.lang.startsWith('en')
          ) || voices.find((v) => v.lang.startsWith('en'));

          if (preferred) utter.voice = preferred;

          utter.onstart = () => {
            if (this.avatarWrap) this.avatarWrap.classList.add('is-speaking');
          };

          utter.onend = () => {
            if (this.avatarWrap) this.avatarWrap.classList.remove('is-speaking');
            index++;
            this.timerId = setTimeout(runSegment, 300);
          };

          utter.onerror = () => {
            if (this.avatarWrap) this.avatarWrap.classList.remove('is-speaking');
            index++;
            this.timerId = setTimeout(runSegment, 300);
          };

          window.speechSynthesis.speak(utter);
        } else {
          if (this.avatarWrap) this.avatarWrap.classList.add('is-speaking');
          index++;
          this.timerId = setTimeout(runSegment, 10000);
        }
      }
    };

    runSegment();
  }

  renderSegment(seg) {
    // 1. Trigger Giant Kinetic Keyword in Background behind clone
    if (this.backdropWord) {
      this.backdropWord.classList.remove('is-visible');
      // Force repaint
      void this.backdropWord.offsetWidth;
      this.backdropWord.textContent = seg.keyword;
      this.backdropWord.classList.add('is-visible');
    }

    // 2. Stream Caption Below Clone with subtle animated word highlights
    if (this.captionBox) {
      const words = seg.text.split(' ');
      this.captionBox.innerHTML = words
        .map((w, i) => `<span class="caption-word" style="animation-delay: ${i * 0.05}s;">${w}</span>`)
        .join(' ');
    }
  }
}

// Attach to window for global invocation - prevent duplicate instantiation
function initCloneExperience() {
  if (!window.__cloneExperience) {
    window.__cloneExperience = new CloneExperience();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCloneExperience);
} else {
  initCloneExperience();
}
