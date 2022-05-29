<?php

namespace app\repositories;

use app\models\User;
use app\services\auth\dto\RegisterDto;

class UserRepository
{
    public function findByUsername(string $username)
    {
        return User::find()->where(['username' => $username])->one();
    }

    public function create(RegisterDto $dto): User
    {
        $model = new User();
        $model->username = $dto->username;
        $model->password = $dto->password;
        if (!$model->save()) {
            throw new \Exception('Не удалось сохранить в БД');
        }
        return $model;
    }
}