import express from 'express';

//import controller file
import * as AuthController from '../controllers/user.auth.controller';
import * as ExpenseController from '../controllers/expense.controller';

// get an instance of express router
const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/register').post(AuthController.register);
router.route('/getList').post(ExpenseController.getList);
router.route('/createExpense').post(ExpenseController.createExpense);
router.route('/deleteExpense').post(ExpenseController.deleteExpense);
router.route('/getFilerList').post(ExpenseController.getFilerList);


export default router;
