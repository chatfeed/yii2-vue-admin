<?php
/**
 * Created by chatfeed.
 * @Author:$Id$
 */
namespace VueAdmin\web;

use yii\web\AssetBundle;

class VueAdminAsset extends AssetBundle {
    public $sourcePath = '@vendor/chatfeed/yii2-vue-admin/assets';
    public $css = [
        'element-ui/theme-default/index.css',
    ];
    public $js = [
        'vue/vue.js',
        'element-ui/index.js'
    ];
    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }
}