có 3 môi trừơng khi làm việc

1. Môi trường vs Cide , khi code ta click chuột vào đường dẫn mà chạy đến là đúng
2. Môi trường ES Lint

- Vào file eslintrc , sửa tên file

```ts
"import/resolver": {
      "node": {
        "paths": ["."],//đổi chổ này thành dấu .
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
```

3. Môi trường Terminal
