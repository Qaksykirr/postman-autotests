// Автотесты для postman /api/users

var jsonData = pm.response.json();

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Check name field", function () {
    var name = pm.variables.get("createUserName");
    pm.expect(jsonData.name).to.eql(name);
});

pm.test("Check id is not empty", function () {
    pm.expect(jsonData.id).to.be.not.empty;
});

pm.test("Check createdAt is not empty", function () {
    pm.expect(jsonData.createdAt).to.be.not.empty;
});
