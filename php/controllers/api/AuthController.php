<?php

namespace app\controllers\api;


use app\services\auth\LoginService;
use app\services\auth\RegisterService;
use app\validators\auth\LoginRequestValidator;
use app\validators\auth\RegisterRequestValidator;
use Yii;

class AuthController extends BaseController
{
    private RegisterService $registerService;
    private LoginService $loginService;

    public function __construct($id, $module, $config = [])
    {
        parent::__construct($id, $module, $config);
        $this->registerService = new RegisterService();
        $this->loginService = new LoginService();
    }

    public function actionRegister()
    {
        $params = Yii::$app->request->getBodyParams();
        $validator = new RegisterRequestValidator($params);
        if ($validator->validate()) {
            try {
                return $this->registerService->execute($params);
            } catch (\Exception $e) {
                Yii::$app->response->setStatusCode(500, $e->getMessage());
            }
        } else {
            Yii::$app->response->setStatusCode(400);
            return $validator->getErrors();
        }
    }

    public function actionLogin()
    {
        $params = Yii::$app->request->getBodyParams();
        $validator = new LoginRequestValidator($params);
        if ($validator->validate()) {
            try {
                return $this->loginService->execute($params);
            } catch (\Exception $e) {
                Yii::$app->response->setStatusCode(500, $e->getMessage());
            }
        } else {
            Yii::$app->response->setStatusCode(400);
            return $validator->getErrors();
        }
    }
}
