# 沙湖神大人求包养

这是一个部署在 GitHub Pages 的中文互动视觉小说项目，使用 [WebGAL](https://github.com/OpenWebGAL/WebGAL) 运行。

线上地址：<https://taoma.cuio.asia/>

## 项目结构

- `index.html`：WebGAL 运行入口和首屏加载页
- `game/`：游戏配置、剧本、背景、立绘、音乐和音效资源
- `assets/`：WebGAL 运行时资源
- `icons/`：网站图标和 PWA 图标
- `manifest.json`：PWA 配置
- `CNAME`：GitHub Pages 自定义域名
- `webgal-serviceworker.js`：静态资源缓存策略
- `lib/`：Live2D SDK 文件

## 本地预览

这是一个纯静态站点，不需要安装依赖。请使用任意静态文件服务器启动项目，例如：

Windows 用户可以直接双击 `启动游戏.bat`，它会启动本地服务器并打开游戏。

```bash
python -m http.server 8080
```

然后访问 <http://localhost:8080/>。直接双击 `index.html` 可能会受到浏览器跨域和音频策略限制。

## 发布

仓库通过 GitHub Pages 发布，域名由根目录的 `CNAME` 文件固定为 `taoma.cuio.asia`。提交到 `main` 分支后，由 GitHub Pages 自动更新站点。

## 内容维护

游戏文本位于 `game/scene/`，通用配置位于 `game/config.txt`。修改资源路径时请保持文件名与脚本中的引用一致，尤其要注意中文文件名和大小写。

## 许可说明

Live2D SDK 文件已按 OpenWebGAL 文档放在 `lib/`。模型资源仍需由制作者自行取得授权，并将完整模型目录放入 `game/figure/`；剧本中通过模型的 JSON 文件调用立绘。

本仓库中的剧本、图片、音乐和音效资源仅供本项目使用。WebGAL 运行时遵循其上游项目的许可证；第三方资源的版权归原作者所有。
