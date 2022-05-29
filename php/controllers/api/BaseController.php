<?php

namespace app\controllers\api;

use Yii;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\Cors;
use yii\helpers\ArrayHelper;
use yii\rest\Controller;

class BaseController extends Controller
{
    public $enableCsrfValidation = false;
    /**
     * List of allowed domains.
     * Note: Restriction works only for AJAX (using CORS, is not secure).
     *
     * @return array List of domains, that can access to this API
     */
    public static function allowedDomains()
    {
        return [
             '*',                        // star allows all domains
//            'http://test1.example.com',
//            'http://test2.example.com',
        ];
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
            'cors' => [
                'Origin' => ['*'],
                'Access-Control-Allow-Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Allow-Credentials' => null,
                'Access-Control-Allow-Headers' => [
                    'Access-Control-Allow-Headers',
                    'Origin',
                    'Accept',
                    'X-Requested-With',
                    'Content-Type',
                    'Access-Control-Request-Method',
                    'Access-Control-Request-Headers',
                    'Authorization',
                    'Refresh-Token',
                ],
            ],

        ];

        $behaviors['authenticator'] = [
            'class' =>  HttpBearerAuth::className(),
            'except' => ['options','login', 'error', 'register'],
        ];

        return $behaviors;
    }
    public function actionError()
    {
        return Yii::$app->getErrorHandler();
    }

    public function actions()
    {
        return [
            'options' => [
                'class' => 'yii\rest\OptionsAction',
            ],
        ];
    }
}
