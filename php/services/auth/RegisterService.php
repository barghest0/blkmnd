<?php

namespace app\services\auth;

use app\repositories\UserRepository;
use app\services\auth\dto\RegisterDto;

class RegisterService
{
    public function execute(array $data): \app\models\User
    {
        $repo = new UserRepository();
        $dto = new RegisterDto();
        $dto->username = $data['username'];
        $dto->password = \Yii::$app->security->generatePasswordHash($data['password']);
        return $repo->create($dto);
    }

}