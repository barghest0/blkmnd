<?php

namespace app\validators\auth;

use app\repositories\UserRepository;
use app\validators\BaseValidator;

class RegisterRequestValidator extends BaseValidator
{
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
        if (!empty($existsUser)) {
            $this->model->addError('username', 'Уже используется');
        }
    }

    private function checkPassword()
    {
        $password = $this->data['password'] ?? null;
        $confirmPassword = $this->data['confirmPassword'] ?? null;
        if (empty($password)) {
            $this->model->addError('password', 'Обязательно для заполнения');
        }
        if (empty($confirmPassword)) {
            $this->model->addError('confirmPassword', 'Обязательно для заполнения');
        }
        if ($password != $confirmPassword) {
            $this->model->addError('confirmPassword', 'Должно совпадать с паролем');
        }
    }
}