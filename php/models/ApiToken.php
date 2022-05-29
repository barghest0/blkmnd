<?php

namespace app\models;


/**
 * This is the model class for table "api_token".
 *
 * @property int $id
 * @property int $userId
 * @property string $token
 */
class ApiToken extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'api_token';
    }

    /**
     * {@inheritdoc}
     */
    public function getUserId()
    {
        return $this->getAttribute('user_id');
    }

    public function setUserId($userId)
    {
        $this->setAttribute('user_id', $userId);
    }
}
