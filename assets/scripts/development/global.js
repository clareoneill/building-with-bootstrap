// See https://github.com/hakimel/reveal.js#configuration for a full list of configuration options
Reveal.initialize({
  // Display controls in the bottom right corner
  controls: true,
  // Display a presentation progress bar
  progress: true,
  // Display the page number of the current slide
  slideNumber: true,
  // Push each slide change to the browser history
  history: false,
  // Enable keyboard shortcuts for navigation
  keyboard: true,
  // Enable the slide overview mode
  overview: true,
  // Vertical centering of slides
  center: true,
  // Enables touch navigation on devices with touch input
  touch: true,
  // Loop the presentation
  loop: false,
  // Change the presentation direction to be RTL
  rtl: false,
  // Turns fragments on and off globally
  fragments: true,
  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,
  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,
  // Stop auto-sliding after user input
  autoSlideStoppable: true,
  // Enable slide navigation via mouse wheel
  mouseWheel: false,
  // Hides the address bar on mobile devices
  hideAddressBar: true,
  // Opens links in an iframe preview overlay
  previewLinks: false,
  // Theme (e.g., beige, black, blood, league, moon, night, serif, simple, sky, solarized, white)
  // NOTE setting the theme in the config no longer works in reveal.js 3.x
  //theme: Reveal.getQueryHash().theme || 'solarized',
  // Transition style (e.g., none, fade, slide, convex, concave, zoom)
  transition: Reveal.getQueryHash().transition || 'convex',
  // Transition speed (e.g., default, fast, slow)
  transitionSpeed: 'default',
  // Transition style for full page slide backgrounds (e.g., none, fade, slide, convex, concave, zoom)
  backgroundTransition: 'fade',
  // Number of slides away from the current that are visible
  viewDistance: 3,
  // Parallax background image (e.g., "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'")
  parallaxBackgroundImage: '',
  // Parallax background size in CSS syntax (e.g., "2100px 900px")
  parallaxBackgroundSize: '',

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around the content
  margin: 0.1,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5,

  // Optional libraries used to extend on reveal.js
  dependencies: [{
      src: '../../../reveal.js/lib/js/classList.js',
      condition: function() {
          return !document.body.classList;
      }
      }, {
          src: '../../../reveal.js/plugin/markdown/marked.js',
          condition: function() {
              return !!document.querySelector('[data-markdown]');
          }
      }, {
          src: '../../../reveal.js/plugin/markdown/markdown.js',
          condition: function() {
              return !!document.querySelector('[data-markdown]');
          }
      },

      {
          src: '../../../reveal.js/plugin/zoom-js/zoom.js',
          async: true,
          condition: function() {
              return !!document.body.classList;
          }
      }, {
          src: '../../../reveal.js/plugin/notes/notes.js',
          async: true,
          condition: function() {
              return !!document.body.classList;
          }
      }
  ]
});