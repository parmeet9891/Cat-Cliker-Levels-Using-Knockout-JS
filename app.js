var viewModel = function() {
//we are going to define our view and model inside viewModel as Knockout will handle both of them.
this.clickCount = ko.observable(0);
this.name = ko.observable('Tabby');
this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
this.catLevel = ko.observableArray([
  {name: "Infant"},
  {name:"Adult"},
  {name:"Teen"}
]);

this.incrementCounter = function() {
  this.clickCount(this.clickCount() + 1);
};

  this.level = ko.computed(function() {
    if(this.clickCount()>50) {
      return 'Aged';
    }
    else if(this.clickCount()>20) {
      return 'Adult';
    }
    else if(this.clickCount()>10) {
      return 'Infant';
    }
    else return 'I dont know';
  }, this);
}
ko.applyBindings(new viewModel());
