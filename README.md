jquery.drag.js
===================

固定要素内でドラッグができるプラグインです。


USAGE
-------------------

jQuery本体の後にプラグインを読み込ませる
```
<script src="jquery.js"></script>
<script src="jquery.drag.js"></script>
```

下記を実行する
```
$(function(){
    $('.drag').draggable();
});
```

OPTIONS
-------------------

option | description | default
--- | --- | ---
wrapperObj | 固定する要素 | .drag-wrapper-obj
objX | ドラッグする要素のleft値 | 0
objY | ドラッグする要素のtop値 | 0
cursor | ドラッグ中のカーソルアイコン（CSS） | cursor