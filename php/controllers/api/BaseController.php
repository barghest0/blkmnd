<?php

namespace app\controllers\api;

use Yii;
use yii\filters\auth\HttpBearerAuth;
use yii\helpers\ArrayHelper;
use yii\rest\Controller;

class BaseController extends Controller
{
    public function behaviors()
    {
        return ArrayHelper::merge(parent::behaviors(), [
            'authenticator' => [
                'class' => HttpBearerAuth::className(),
                'except' => ['error', 'register', 'login'],
            ],
        ]);
    }
    public function actionError()
    {
        return Yii::$app->getErrorHandler();
    }
}
