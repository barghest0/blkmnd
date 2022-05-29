<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%api_token}}`.
 */
class m220529_111410_create_api_token_table extends Migration
{
    const TABLE_NAME = 'api_token';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable(self::TABLE_NAME, [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'token' => $this->string()->notNull(),
        ]);

        $this->addForeignKey(
            'fk-' . self::TABLE_NAME . 'user_id',
            self::TABLE_NAME,
            'user_id',
            'user',
            'id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-' . self::TABLE_NAME . 'user_id', self::TABLE_NAME);
        $this->dropTable(self::TABLE_NAME);
    }
}
