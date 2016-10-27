describe("Entity", function() {

  var entity;

  beforeEach(function() {
    entity = new Entity(200, 199, 0, 1);
  });

  describe("Initialize", function() {
    it("start location param", function() {
      newEntity = new Entity(200, 199, 0, 1);
      console.log(newEntity);
      expect(newEntity.position.x).toBe(200);
      expect(newEntity.position.y).toBe(199);
    });
  });

  describe("#updatePosition", function() {
    it("increases x by 1 if rotation is 0 and velocity is 1", function() {
      entity.updatePosition();
      expect(entity.position.x).toBe(201);
    });
  });
});
