// Автотесты для postman /api/users/2

var jsonData = pm.response.json();

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check name field", function () {
    var name = pm.variables.get("updateUserName");
    pm.expect(jsonData.name).to.eql(name);
});

pm.test("Check updatedAt is not empty", function () {
    pm.expect(jsonData.updatedAt).to.be.not.empty;
});
