(function () {

  'use strict';

  /* global Ractive */
  /* jshint esnext: true */

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
    data: function () {
      return {
        labels: this.labels || index__TriState.labels,
        values: this.values || index__TriState.values
      };
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

}).call(global);
//# sourceMappingURL=./index.js.map