<?php
/**
 * Created by chatfeed.
 * @Author:$Id$
 */
namespace VueAdmin\web;

use yii\web\AssetBundle;

class VueAdminAsset extends AssetBundle {
    public $sourcePath = '@vendor/chatfeed/yii2-vue-admin/dist';
    public $css = [
        'css/AdminLTE.min.css',
    ];
}