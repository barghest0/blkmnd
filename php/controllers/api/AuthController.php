<?php

namespace app\controllers\api;


use app\services\auth\RegisterService;
use app\validators\auth\RegisterRequestValidator;
use Yii;

class AuthController extends BaseController
{
    private RegisterService $registerService;

    public function __construct($id, $module, $config = [])
    {
        parent::__construct($id, $module, $config);
        $this->registerService = new RegisterService();
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
}
