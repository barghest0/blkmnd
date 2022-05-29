<?php

namespace app\validators\auth;

use app\models\User;
use app\repositories\UserRepository;
use app\validators\BaseValidator;
use Yii;

class LoginRequestValidator extends BaseValidator
{
    private ?User $user = null;

    public function __construct(array $requestParams)
    {
        parent::__construct();
        $this->data = $requestParams;
    }

    public function validate(): bool
    {
        $this->checkUsername();
        $this->checkPassword();
        return $this->isSuccess();
    }

    private function checkUsername(): void
    {
        if (empty($this->data['username'])) {
            $this->model->addError('username', 'Обязательно для заполнения');
            return;
        }
        $repo = new UserRepository();
        $existsUser = $repo->findByUsername($this->data['username']);
        if (empty($existsUser)) {
            $this->model->addError('username', 'Не зарегистрирован');
        } else {
            $this->user = $existsUser;
        }
    }

    private function checkPassword()
    {
        $password = $this->data['password'] ?? null;
        if (empty($password)) {
            $this->model->addError('password', 'Обязательно для заполнения');
            return;
        }
        if (!empty($this->user)) {
            if (!Yii::$app->security->validatePassword($password, $this->user->password)) {
                $this->model->addError('password', 'Не подходит');
            }
        }
    }
}