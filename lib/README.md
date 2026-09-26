# Live2D SDK（可选）

项目入口会加载以下 Live2D SDK 文件。它们已按 OpenWebGAL 文档放在当前目录：

```text
lib/live2d.min.js
lib/live2dcubismcore.min.js
```

这两个文件分别对应 Live2D 2.x JavaScript SDK 和 Cubism 4 Core。模型文件不包含在本仓库中；取得授权的模型应作为完整目录放到 `game/figure/`，并在 WebGAL 脚本中引用模型 JSON。请遵守 Live2D SDK 和模型资源的授权条款。
