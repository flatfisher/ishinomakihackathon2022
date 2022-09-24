## ishinomakihackathon2022

### Run Server

```
# go run main.go
```

Open the website on your phone, Scan the marker picture to see content through the camera.

### ngrok

```
# ngrok http 8080
```

### Edit marker and 3d model

```:html
<a-assets>
    <a-asset-item id="test" src="./assets/test.glb"></a-asset-item>
</a-assets>

<a-marker type="pattern" url="./assets/pattern-sample.patt">
    <a-entity gltf-model="#test"></a-entity>
</a-marker>
```

### Links
- [AR.js Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
