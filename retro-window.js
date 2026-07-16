// creates window for each page
// usage:
//   <retro-window title="problem.log" icon="list" bar="blueberry">
//     <p>...</p>
//   </retro-window>
//
// attributes:
//   title  - text shown in the title bar (required)
//   icon   - "list", "file", "gear"  (optional, defaults to no icon)
//   bar    - "", "blueberry"  (optional, defaults to sage)

(function () {
  var ICONS = {
    list: '<svg class="win-title-icon" viewBox="0 0 100 100"><rect x="10" y="18" width="80" height="64" fill="none" stroke="currentColor" stroke-width="8"/><line x1="22" y1="38" x2="78" y2="38" stroke="currentColor" stroke-width="8"/><line x1="22" y1="54" x2="78" y2="54" stroke="currentColor" stroke-width="8"/><line x1="22" y1="70" x2="60" y2="70" stroke="currentColor" stroke-width="8"/></svg>',
    file: '<svg class="win-title-icon" viewBox="0 0 100 100"><path d="M20 10h45l15 15v65H20z" fill="none" stroke="currentColor" stroke-width="8"/><path d="M65 10v15h15" fill="none" stroke="currentColor" stroke-width="8"/><line x1="32" y1="45" x2="70" y2="45" stroke="currentColor" stroke-width="8"/><line x1="32" y1="60" x2="70" y2="60" stroke="currentColor" stroke-width="8"/><line x1="32" y1="75" x2="58" y2="75" stroke="currentColor" stroke-width="8"/></svg>',
    gear: '<svg class="win-title-icon" viewBox="0 0 100 100"><circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="8"/><path d="M50 6v16M50 78v16M6 50h16M78 50h16M22 22l11 11M67 67l11 11M78 22l-11 11M33 67l-11 11" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>',
  };

  class RetroWindow extends HTMLElement {
    connectedCallback() {
      if (this.dataset.hydrated) return;
      this.dataset.hydrated = "true";

      var title = this.getAttribute("title") || "";
      var iconKey = this.getAttribute("icon");
      var barModifier = this.getAttribute("bar") || "";
      var iconSvg = iconKey && ICONS[iconKey] ? ICONS[iconKey] : "";
      var content = this.innerHTML;

      this.classList.add("win");
      this.innerHTML =
        '<div class="win-bar ' +
        barModifier +
        '">' +
        '<div class="win-title">' +
        iconSvg +
        title +
        "</div>" +
        '<div class="win-controls">' +
        '<div class="win-btn">_</div>' +
        '<div class="win-btn">\u25A1</div>' +
        '<div class="win-btn">\u00D7</div>' +
        "</div>" +
        "</div>" +
        '<div class="win-body">' +
        content +
        "</div>";
    }
  }

  customElements.define("retro-window", RetroWindow);
})();
