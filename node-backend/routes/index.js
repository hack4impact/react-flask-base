import { userController } from '../controllers/controllers.js';

export default (app) => {
    app.route('/admin/users')
        .get(userController.getAllUsers);

    app.route('/admin/user/:userId')
        .post(userController.updateUser)
        .delete(userController.deleteUser);

    // app.route('/admin/invite-user')
    // app.route('/auth/refresh-access-token')
    // app.route('/auth/check-auth')
    // app.route('/auth/sign-up')
    // app.route('/auth/logout')
    // app.route('/auth/verify-email/:token')
    // app.route('/auth/reset-password')
    // app.route('/auth/reset-password/:token')
    // app.route('/auth/settings/change-password')
    // app.route('/auth/settings/change-email')
    // app.route('/auth/settings/change-user-info')
    // app.route('/auth/settings/delete-account')

};
