/* global Ractive */

var TriState;
TriState = Ractive.extend({
  template: '<button style="{{#.style}}{{.style}}{{/}}" class="ractive-tri-state{{#.class}} {{.class}}{{/}}" on-click="toggle()">{{#.state === 0}}{{{labels.no}}}{{/}}{{#.state === 1}}{{{labels.yes}}}{{/}}{{#.state === 2}}{{{labels.none}}}{{/}}</button>',
  onrender() {
    var val, values = this.get('values');

    if ((val = this.get('value'))) {
      this.set('state', val === values.yes ? 1 : val === values.no ? 0 : 2);
    } else {
      this.set('state', 2);
    }
  },
  data(data) {
    if (typeof data.labels !== 'object')
      data.labels = TriState.labels;

    if (typeof data.values !=='object')
      data.values = TriState.values;

    return data;
  },
  toggle() {
    if (this.event) {
      this.event.original.preventDefault();
      this.event.original.stopPropagation();
    }
    var c = this.get('state'), values = this.get('values');
    if (c === 0) {
      this.set({ value: values.none, state: 2 });
    } else if (c === 1) {
      this.set({ value: values.no, state: 0 });
    } else {
      this.set({ value: values.yes, state: 1 });
    }
  }
});

TriState.values = { yes: true, no: false, none: undefined };
TriState.labels = { yes: 'On', no: 'Off', none: '-' };

export default TriState;
