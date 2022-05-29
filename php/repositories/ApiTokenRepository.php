<?php

namespace app\repositories;

use app\models\ApiToken;
use app\models\User;
use app\services\auth\dto\LoginDto;

class ApiTokenRepository
{
    private UserRepository $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }

    public function create(LoginDto $dto): ApiToken
    {
        $user = $this->userRepository->findByUsername($dto->username);
        $model = new ApiToken();
        $model->userId = $user->id;
        $model->token = $dto->token;
        if (!$model->save()) {
            throw new \Exception('Не удалось сохранить токен в БД');
        }
        return $model;
    }
}