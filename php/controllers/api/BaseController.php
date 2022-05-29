<?php

namespace app\controllers\api;

use Yii;
use yii\rest\Controller;

class BaseController extends Controller
{
    public function actionError()
    {
        return Yii::$app->getErrorHandler();
    }
}
