<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user}}`.
 */
class m220528_115410_create_user_table extends Migration
{

    const TABLE_NAME = '{{%user}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable(self::TABLE_NAME, [
                'id' => $this->primaryKey(),
                'username' => $this->string()->notNull()->unique(),
                'password' => $this->string()->notNull(),
            ]
        );
    }

    public function safeDown()
    {
        $this->dropTable(self::TABLE_NAME);
    }
}