<?php

namespace app\validators;

use yii\base\DynamicModel;

abstract class BaseValidator
{
    protected DynamicModel $model;
    protected array $data = [];

    public function __construct()
    {
        $this->model = new DynamicModel();
    }

    abstract public function validate(): bool;

    public function getErrors(): array
    {
        return $this->model->getErrors();
    }

    protected function isSuccess(): bool
    {
        return !$this->model->hasErrors();
    }
}