// Автотесты для postman api/users?page=2

var jsonData = pm.response.json();

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check total field", function () {
    pm.expect(jsonData.total).to.eql(12);
});

pm.test("Check data is not empty", function () {
    pm.expect(jsonData.data).to.be.not.empty;
});

pm.test("Check support url", function () {
    var host = pm.variables.get("host");
    pm.expect(jsonData.support.url).to.eql(host + "/#support-heading");
});
