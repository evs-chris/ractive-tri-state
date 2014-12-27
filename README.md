# Ractive TriState

A tri-state component built on [Ractive](https://github.com/ractivejs/ractive), because sometimes `true` and `false` just aren't enough for your booleans.

## Where to get it?

Racive TriState is available as a [giblet](https://github.com/evs-chris/gobble-giblet), a [component](https://github.com/componentjs/component), and a pre-assembled UMD module. Each flavor does not declare an explicit dependency on Ractive, but it is expected to be available as a global.

All of the pre-built files live in tags on the build branch.

### Development

Ractive TriState uses [gobble](https://github.com/gobblejs/gobble) as its build tool, which makes it easy to build and play around with. The default mode in the gobble file is `development`, which will automatically pull in the edge version of Ractive and make it available along with the sandbox. There is an example file provided along with the source, which you can access by running gobble and pointing you browser at http://localhost:4567/sandbox/example.html.

## Usage

To use TriState, add a component reference to your template.

### Attributes

* `value` - parameter - the current value of the component, preferably a binding.
* `values` - parameter - an object with `yes`, `no`, and `none` keys to be used for the corresponding values. Defaults to `{ yes: true, no: false, none: undefined }`. You can change the defaults using the `values` property of the TriState global/component instance.
* `labels` - parameters - an object with `yes`, `no`, and `none` keys to be displayed for the corresponding values. Defaults to `{ yes: 'On', no: 'Off', none: '-' }`. You can change the defaults using the `labels` property of the TriState global/component instance. The labels are rendered in triple mustaches, so you can use HTML in them.
* `class` - an additional class to add to a particular instance
* `style` - additional styling to add to a particular instance

### Methods

* `toggle()` - Change the current state to the next one. Yes -> No -> None

### Client

The default UI for this component is a button with text that changes with state. You can use something like FontAwesome, as in the example, to make checkboxier UIs.

If no value is bound or it is not defined, the default state is None.
