var Ractive = require('ractive');

var TriState;
TriState = Ractive.extend({
  template: '<button style="{{#.style}}{{.style}}{{/}}" class="ractive-tri-state{{#.class}} {{.class}}{{/}}" on-click="toggle">{{#.state === 0}}{{{.no}}}{{/}}{{#.state === 1}}{{{.yes}}}{{/}}{{#.state === 2}}{{{.none}}}{{/}}</button>',
  beforeInit: function(opts) {
    if (opts.data.yes === undefined) opts.data.yes = TriState.labels.yes;
    if (opts.data.no === undefined) opts.data.no = TriState.labels.no;
    if (opts.data.none === undefined) opts.data.none = TriState.labels.none;

    if (opts.data.yesValue === undefined) opts.data.yesValue = TriState.values.yes;
    if (opts.data.noValue === undefined) opts.data.noValue = TriState.values.no;
    if (opts.data.noneValue === undefined) opts.data.noneValue = TriState.values.none;

    opts.data.value = opts.data.noneValue;
    if (opts.data.state === undefined) opts.data.state = 2;
  },
  init: function() {
    this.on('toggle', function() {
      var c = this.get('state');
      if (c === 0) {
        this.set({ value: this.get('yesValue'), state: 1 });
      } else if (c === 1) {
        this.set({ value: this.get('noneValue'), state: 2 });
      } else {
        this.set({ value: this.get('noValue'), state: 0 });
      }
    });
  },
  values: function(no, yes, none) {
    this.set({ noValue: no, yesValue: yes, noneValue: none });
  },
  labels: function(no, yes, none) {
    this.set({ no: no, yes: yes, none: none });
  }
});

TriState.labels = { yes: 'On', no: 'Off', none: '-' };
TriState.values = { yes: true, no: false, none: undefined };

module.exports = TriState;
