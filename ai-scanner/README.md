# Duna AI Scan — Website tĩnh

Website phục vụ App Store Connect: Privacy, Terms, Support và trang giới thiệu.

**Không cần build.** Chỉ HTML + CSS + JS thuần.

## Cấu trúc thư mục

```
web/
├── .nojekyll                 # Bắt buộc cho GitHub Pages (tắt Jekyll)
├── index.html                # Trang chủ
├── assets/
│   ├── style.css
│   └── site.js               # (tuỳ chọn, không dùng trên trang legal)
├── privacy/
│   └── index.html            # Privacy Policy (English)
├── terms/
│   └── index.html            # Terms of Service (English)
├── support/
│   └── index.html            # Support & FAQ (English)
└── README.md
```

## Upload / deploy

Copy **toàn bộ nội dung** thư mục `web/` lên host tĩnh — không cần cấu hình, không cần Ruby/Node:

| Host | Gợi ý |
|------|--------|
| **GitHub Pages** | Repo `ai-scanner`, publish thư mục gốc → URL `https://<user>.github.io/ai-scanner/` |
| **Netlify / Cloudflare Pages** | Kéo-thả hoặc trỏ repo, root = `web/` |
| **cPanel / FTP** | Upload file vào `public_html/ai-scanner/` (hoặc subdomain tương đương) |

Thêm file `.nojekyll` ở root site trên GitHub Pages để GitHub không chạy Jekyll (tránh bỏ qua thư mục `_` hoặc parse sai).

## URL phải khớp AppConfig

Trong app iOS, các URL legal trỏ tới path tương đối:

| Trang | Path |
|-------|------|
| Privacy | `privacy/` |
| Terms | `terms/` |
| Support | `support/` |

Ví dụ production (GitHub Pages):

- `https://hoainam8x.github.io/ai-scanner/privacy/`
- `https://hoainam8x.github.io/ai-scanner/terms/`
- `https://hoainam8x.github.io/ai-scanner/support/`

## App Store Connect

| Trường ASC | URL mẫu |
|------------|---------|
| Privacy Policy URL | `https://hoainam8x.github.io/ai-scanner/privacy/` |
| Support URL | `https://hoainam8x.github.io/ai-scanner/support/` |
| Marketing URL (tuỳ chọn) | `https://hoainam8x.github.io/ai-scanner/` |
| EULA (tuỳ chọn) | `https://hoainam8x.github.io/ai-scanner/terms/` |

## Cập nhật nội dung

Sửa trực tiếp file `privacy/index.html`, `terms/index.html`, `support/index.html` (cả section `#en` và `#vi`). Đổi ngày "Last updated" / "Cập nhật lần cuối" khi có thay đổi đáng kể.

## Preview cục bộ

```bash
cd web
python3 -m http.server 8080
# Mở http://127.0.0.1:8080/
```

## Liên hệ

`hoainam8x@gmail.com`
