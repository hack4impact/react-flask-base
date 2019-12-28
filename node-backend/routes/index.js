const controllers = require('../controllers/controllers.js');

module.exports = (app) => {
    app.route('/admin/users')
        .get(controllers.adminController.getAllUsers);

    app.route('/admin/user/:userId')
        .post(controllers.adminController.updateUser)
        .delete(controllers.adminController.deleteUser);

    // app.route('/admin/invite-user')
    // app.route('/auth/refresh-access-token')
    // app.route('/auth/check-auth')
    app.route('/auth/sign-up')
        .post(controllers.authController.signUp);

    app.route('/auth/logout')
        .delete(controllers.authController.logout);
    // app.route('/auth/verify-email/:token')
    // app.route('/auth/reset-password')
    // app.route('/auth/reset-password/:token')
    // app.route('/auth/settings/change-password')
    // app.route('/auth/settings/change-email')
    // app.route('/auth/settings/change-user-info')
    // app.route('/auth/settings/delete-account')

};
