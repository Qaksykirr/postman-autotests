// Автотесты для postman /api/users/{{deleteUserId}}

pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});
