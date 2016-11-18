var AtomHistory;
var CompositeDisposable = require('atom').CompositeDisposable;
var controller = require('./atom-history-ctrl');

module.exports = {
  activate: (state) => {
    controller.init();
    this.subscriptions = new CompositeDisposable();

    for (var i = 0; i < controller.collection.max; i++) {
      subscription = controller.subscribe(i);
    }
  },
  deactivate: () => {
    this.subscriptions.dispose();
  }
};