(function (global, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // export as AMD
    define(['exports'], factory);
  } else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
    // node/browserify
    factory(exports);
  } else {
    // browser global
    global.RactiveTriState = {};
    factory(global.RactiveTriState);
  }

}(typeof window !== 'undefined' ? window : this, function (exports) {

  'use strict';

  /* global Ractive */

  var index__TriState;
  index__TriState = Ractive.extend({
    template: "<button style=\"{{#.style}}{{.style}}{{/}}\" class=\"ractive-tri-state{{#.class}} {{.class}}{{/}}\" on-click=\"toggle()\">{{#.state === 0}}{{{labels.no}}}{{/}}{{#.state === 1}}{{{labels.yes}}}{{/}}{{#.state === 2}}{{{labels.none}}}{{/}}</button>",
    onrender: function () {
      var val, values = this.get("values");

      if ((val = this.get("value"))) {
        this.set("state", val === values.yes ? 1 : val === values.no ? 0 : 2);
      } else {
        this.set("state", 2);
      }
    },
    data: function (data) {
      if (typeof data.labels !== "object") data.labels = index__TriState.labels;

      if (typeof data.values !== "object") data.values = index__TriState.values;

      return data;
    },
    toggle: function () {
      if (this.event) {
        this.event.original.preventDefault();
        this.event.original.stopPropagation();
      }
      var c = this.get("state"), values = this.get("values");
      if (c === 0) {
        this.set({ value: values.none, state: 2 });
      } else if (c === 1) {
        this.set({ value: values.no, state: 0 });
      } else {
        this.set({ value: values.yes, state: 1 });
      }
    }
  });

  index__TriState.values = { yes: true, no: false, none: undefined };
  index__TriState.labels = { yes: "On", no: "Off", none: "-" };

  var index__default = index__TriState;
  //# sourceMappingURL=01-_6to5-index.js.map

  exports['default'] = index__default;

}));
//# sourceMappingURL=./ractive-tri-state.js.map