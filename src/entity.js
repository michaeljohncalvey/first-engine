function Entity(xCoordinate, yCoordinate, rotation, velocity) {
  this._allInstances = [];

  this.rotation = rotation;
  this.velocity = velocity;
  this.position = {
    x: xCoordinate,
    y: yCoordinate,
    xExact: xCoordinate,
    yExact: yCoordinate
  };

  function addInstance(instance) {
    allInstances.push(instance);
  }
}

Entity.prototype.update = function() {
  for (var i = 0, len = _allInstances.length; i < len; i++) {
    _allInstances[i].updatePosition();
  }
};

Entity.prototype.updatePosition = function() {
  if(this.velocity === 0) {return true;
  }
  else if(this.velocity > 0) {

  }
  else if(this.velocity < 0) {

  }
  else {return false;}
};
