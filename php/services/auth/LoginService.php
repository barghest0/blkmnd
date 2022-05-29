<?php

namespace app\services\auth;

use app\repositories\ApiTokenRepository;
use app\services\auth\dto\LoginDto;

class LoginService
{
    public function execute(array $data)
    {
        $repo = new ApiTokenRepository();
        $dto = new LoginDto();
        $dto->username = $data['username'];
        $dto->token = \Yii::$app->security->generateRandomString();
        return $repo->create($dto);
    }

}