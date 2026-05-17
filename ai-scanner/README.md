# Duna AI Scan — Public Website

> Source of truth cho `https://hoainam8x.github.io/ai-scanner/` (Privacy / Terms / Support — bắt buộc cho App Store Connect).
> Build bằng **Jekyll**, host **free** trên **GitHub Pages** (project-page mode, không custom domain).

## Cấu trúc

```
web/
├── _config.yml               # Jekyll config (baseurl = /ai-scanner)
├── _layouts/default.html     # HTML wrapper (header + footer + nav)
├── assets/style.css          # Apple-like minimal CSS (light + dark)
├── index.md                  # Marketing homepage  →  /ai-scanner/
├── privacy.md                # Privacy Policy      →  /ai-scanner/privacy/
├── terms.md                  # Terms of Service    →  /ai-scanner/terms/
├── support.md                # Support + FAQ       →  /ai-scanner/support/
├── Gemfile                   # Ruby deps for jekyll
├── .gitignore
└── .github/workflows/deploy.yml  # Auto-deploy on push to main
```

Mọi trang có **language switcher EN ↔ VI** ngay đầu trang (anchor `#en` / `#vi`).

## Preview cục bộ

```bash
cd web
bundle install
bundle exec jekyll serve              # → http://127.0.0.1:4000/ai-scanner/
```

Hoặc Docker (không cần Ruby trên máy):

```bash
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 \
  jekyll serve --watch --force_polling
```

## Deploy lên GitHub Pages

### Bước 1: Tạo repo `ai-scanner`

```bash
# Từ thư mục web/
cd web
git init && git add -A && git commit -m "Initial: ai-scanner website"
gh repo create hoainam8x/ai-scanner --public --source=. --remote=origin --push
```

### Bước 2: Bật GitHub Pages với GitHub Actions source

Trong browser: `https://github.com/hoainam8x/ai-scanner/settings/pages`

- **Source**: chọn **GitHub Actions** (KHÔNG chọn "Deploy from a branch")
- Save.

Hoặc qua CLI:

```bash
gh api repos/hoainam8x/ai-scanner/pages -X POST \
  -f build_type=workflow
```

### Bước 3: Push để trigger deploy

Workflow `.github/workflows/deploy.yml` đã setup sẵn — mọi `git push origin main` đều tự rebuild + deploy trong ~1 phút.

Kiểm tra status:

```bash
gh run watch
```

### Bước 4: Verify

Sau ~1 phút, các URL sau phải live:

- Homepage: <https://hoainam8x.github.io/ai-scanner/>
- Privacy:  <https://hoainam8x.github.io/ai-scanner/privacy/>
- Terms:    <https://hoainam8x.github.io/ai-scanner/terms/>
- Support:  <https://hoainam8x.github.io/ai-scanner/support/>

## URL final — paste vào App Store Connect

| ASC Field | URL |
|---|---|
| **Privacy Policy URL** | `https://hoainam8x.github.io/ai-scanner/privacy/` |
| **Support URL** | `https://hoainam8x.github.io/ai-scanner/support/` |
| **Marketing URL** (optional) | `https://hoainam8x.github.io/ai-scanner/` |
| **EULA** (optional, hoặc dùng Apple default) | `https://hoainam8x.github.io/ai-scanner/terms/` |

> Apple chấp nhận URL `github.io` cho tất cả 3 field bắt buộc — không cần custom domain.

## Cập nhật chính sách

Sửa Markdown → `git push` → site tự re-deploy ~1 phút. Nhớ đổi "Last updated" / "Cập nhật lần cuối" ở đầu mỗi file.

Khi thay đổi đáng kể (vd. thêm SDK mới, thêm data collection mới) → bắt buộc:

1. Update **Privacy Policy** (`privacy.md`)
2. Update **App Privacy Nutrition Labels** trong App Store Connect
3. Update `../docs/golive/02-privacy-labels.md` ở repo iOS để giữ sync

## Email support

`hoainam8x@gmail.com` (Gmail) đang dùng làm support contact trong mọi file legal + ASC App Review Information. Khi khôi phục domain `duna.vn`:

1. Setup **Cloudflare Email Routing** (free, ~5 phút) để `support@duna.vn` → forward về `hoainam8x@gmail.com`.
2. Bulk-replace `hoainam8x@gmail.com` → `support@duna.vn` trong `web/*.md` + `docs/golive/*.md`.
3. Push site lại; cập nhật App Review email trong ASC (không cần resubmit).

## Test trước khi go-live

- [ ] `bundle exec jekyll serve` → mở `http://127.0.0.1:4000/ai-scanner/` → kiểm 4 trang render đúng.
- [ ] Light mode + dark mode (Safari → Develop → Web Inspector → Render → Force Dark).
- [ ] Mobile viewport (Cmd+R rotate trong Simulator hoặc Chrome DevTools 375×667).
- [ ] Tất cả internal link (Privacy / Terms / Support trong header + footer + body) không bị 404 — đã dùng `{{ ... | relative_url }}` để tự prepend baseurl.
- [ ] Language switcher anchor `#en` / `#vi` cuộn đúng section.
- [ ] HTTPS cert auto-issue bởi GitHub (Let's Encrypt).

## Migrate sang custom domain sau này

Khi muốn dùng lại `duna.vn` (hoặc domain khác):

1. Tạo file `web/CNAME` chứa `duna.vn` (hoặc domain mới).
2. Sửa `web/_config.yml`:
   ```yaml
   url: https://duna.vn
   baseurl: ""
   ```
3. Add DNS records (`A 185.199.108-111.153`, `AAAA 2606:50c0:8000-8003::153`, `CNAME www → hoainam8x.github.io`) tại registrar.
4. GitHub Settings → Pages → Custom domain: `duna.vn` → Save → Enforce HTTPS sau ~5 phút.
5. Cập nhật URL trong App Store Connect (có thể đổi không cần resubmit, vào App Information).
