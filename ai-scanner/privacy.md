---
title: Privacy Policy
description: Privacy Policy for Duna AI Scan — on-device first, zero backend.
permalink: /privacy/
lang: en
---

<div class="lang-switch" role="tablist" aria-label="Language">
  <a class="active" href="#en">English</a>
  <a href="#vi">Tiếng Việt</a>
</div>

<section id="en">

# Privacy Policy

**Effective date:** 14 May 2026
**Last updated:** 14 May 2026

This Privacy Policy describes how the **Duna AI Scan** mobile application ("Duna AI Scan", "the App", "we", "us", "our"), published by **Duna Labs**, handles information when you use the App.

We built Duna AI Scan to be **on-device first**. The vast majority of your data — including scanned documents, OCR text, and AI extractions — **never leaves your device**.

## 1. Information we DO NOT collect

We do **not** collect, store, transmit, or have access to any of the following:

- Your scanned documents (images or PDFs)
- Text recognized by on-device OCR
- Tags, fields, or any metadata extracted by on-device AI (Apple Intelligence / `NaturalLanguage`)
- Your photo library content
- Your email address, phone number, or postal address
- Your contacts
- Your precise location
- Your microphone or audio recordings
- Your health, fitness, or financial data

## 2. Information processed on your device only

The following data is processed **entirely on your device** and never transmitted to Duna Labs or any third party:

| Data | How it is used |
|---|---|
| Camera frames | Captured to scan documents. Frames are processed and discarded in real time. |
| Photo library access | Optional, used only to save exported PDFs or pick existing scans you choose to import. |
| Face ID / Touch ID biometrics | Used only to authenticate access to your encrypted vault. Biometric template never leaves Apple's Secure Enclave. |
| OCR text | Extracted on-device using Apple's Vision framework. |
| AI-extracted fields | Computed on-device using Apple Intelligence Foundation Models (on supported devices) or regex / `NaturalLanguage`. |

## 3. Information you choose to sync

If you sign in with **Sign in with Apple** and have iCloud enabled, the App syncs your documents and metadata via Apple's **iCloud Private Database (CloudKit)** under your own Apple ID.

- All synced data is stored in **your own iCloud account** under the container `iCloud.com.duna.scanner`.
- Duna Labs **never accesses, reads, or stores** this data. We do not operate a backend server for document storage.
- You can revoke sync at any time by removing the App in iOS Settings → Apple ID → iCloud, or by signing out.

## 4. Information collected by third parties

### 4.1 Google AdMob (banner advertisements)

When the App displays banner ads, Google AdMob may collect:

- Your **Advertising Identifier (IDFA)**, **only** if you grant permission via the App Tracking Transparency (ATT) prompt.
- **Coarse location** inferred from IP address.
- **Aggregated ad interaction data** (impressions, clicks).

Data handling is governed by Google's Privacy & Terms: <https://policies.google.com/privacy>

If you deny the ATT prompt, AdMob will serve **non-personalized ads** and will not track you across apps or websites.

### 4.2 Sign in with Apple (account)

Apple may share with us only the **opaque user identifier** (`Apple userIdentifier`) and, if you choose to share it, your name. We store the identifier in your device's Keychain — it **does not leave your device**. We **never** receive your real Apple ID email.

### 4.3 BizConnex Gateway / your own webhook (optional, user-initiated)

If you enter a webhook URL in **Settings → Gateway** and explicitly tap "Send to Enterprise" on a document, the App sends a deterministic JSON payload to **the URL you provided**. Duna Labs is not the receiver, does not see, log, or proxy the payload. You are responsible for the privacy practices of any webhook destination you configure.

## 5. Sensitive Documents Vault

When you enable the vault on a document:

- The document is encrypted on-device using **AES-256-GCM** (industry-standard authenticated encryption).
- The encryption key is either derived from a device key stored in **iCloud Keychain** (so the vault unlocks on your other Apple devices) or derived from a **passphrase you choose** using PBKDF2-HMAC-SHA256 with 210,000 iterations.
- The plain-text version of the document is securely deleted from device storage.
- Decryption is gated by Face ID, Touch ID, or your passphrase.

Duna Labs has **no access** to encryption keys or passphrases. If you forget your passphrase, encrypted documents cannot be recovered.

## 6. Children's privacy

The App is rated 4+ and is suitable for general audiences. We do not knowingly collect any personal information from children under the age of 13 (or 16 in the EEA). If you believe a child has provided personal information, please contact us so we can act accordingly.

## 7. Your rights (GDPR / CCPA)

You have the right to:

- **Access** — request a copy of any data we hold about you. (In most cases, we hold none.)
- **Delete** — delete the App from your device, which removes all locally stored data. Synced iCloud data can be removed via iOS Settings → Apple ID → iCloud → Manage Storage → Duna AI Scan.
- **Object** — opt out of personalized advertising via the ATT prompt or iOS Settings → Privacy & Security → Tracking.
- **Portability** — export documents as PDF from the App at any time.

To exercise any of these rights, email [hoainam8x@gmail.com](mailto:hoainam8x@gmail.com).

## 8. Security

- All on-device data is stored in the App's sandboxed container, protected by iOS file protection (`NSFileProtectionComplete`).
- Vault documents are encrypted with AES-256-GCM as described in §5.
- All network communication uses TLS 1.2 or higher.
- Biometric authentication uses Apple's Secure Enclave; raw biometric data never reaches the App.

## 9. Changes to this policy

We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest revision. Continued use of the App after a change constitutes acceptance.

## 10. Contact

**Duna Labs**
Email: [hoainam8x@gmail.com](mailto:hoainam8x@gmail.com)
Website: [https://hoainam8x.github.io/ai-scanner](https://hoainam8x.github.io/ai-scanner)

</section>

<section id="vi">

# Chính sách Bảo mật

**Ngày hiệu lực:** 14/05/2026
**Cập nhật lần cuối:** 14/05/2026

Chính sách Bảo mật này mô tả cách ứng dụng di động **Duna AI Scan** ("Duna AI Scan", "Ứng dụng", "chúng tôi"), do **Duna Labs** phát hành, xử lý thông tin khi bạn sử dụng Ứng dụng.

Chúng tôi xây dựng Duna AI Scan theo nguyên tắc **on-device đầu tiên**. Phần lớn dữ liệu của bạn — bao gồm tài liệu quét, văn bản OCR, và các trường AI trích xuất — **không bao giờ rời khỏi thiết bị**.

## 1. Thông tin chúng tôi KHÔNG thu thập

Chúng tôi **không** thu thập, lưu trữ, truyền tải hay truy cập bất kỳ thông tin nào sau đây:

- Tài liệu bạn quét (ảnh hoặc PDF)
- Văn bản nhận diện bởi OCR trên thiết bị
- Thẻ, trường hoặc bất kỳ metadata nào do AI trên thiết bị trích xuất
- Nội dung thư viện ảnh của bạn
- Email, số điện thoại, địa chỉ bưu chính
- Danh bạ
- Vị trí chính xác
- Microphone hoặc ghi âm
- Dữ liệu sức khỏe, tài chính

## 2. Thông tin xử lý chỉ trên thiết bị của bạn

Các dữ liệu sau được xử lý **hoàn toàn trên thiết bị của bạn** và không bao giờ truyền tới Duna Labs hay bất kỳ bên thứ ba nào:

| Dữ liệu | Cách dùng |
|---|---|
| Khung hình camera | Chụp để quét tài liệu. Khung hình được xử lý và loại bỏ ngay tức thì. |
| Truy cập thư viện ảnh | Tuỳ chọn, chỉ dùng để lưu PDF xuất hoặc chọn ảnh bạn muốn import. |
| Sinh trắc Face ID / Touch ID | Chỉ dùng để xác thực truy cập két bảo mật. Mẫu sinh trắc không bao giờ rời khỏi Secure Enclave của Apple. |
| Văn bản OCR | Trích xuất trên thiết bị bằng Apple Vision framework. |
| Trường AI trích xuất | Tính toán trên thiết bị bằng Apple Intelligence Foundation Models (trên thiết bị hỗ trợ) hoặc regex / `NaturalLanguage`. |

## 3. Thông tin bạn chọn đồng bộ

Nếu bạn **Đăng nhập bằng Apple** và bật iCloud, Ứng dụng đồng bộ tài liệu và metadata qua **CloudKit Private Database của Apple** dưới chính Apple ID của bạn.

- Toàn bộ dữ liệu đồng bộ được lưu trong **tài khoản iCloud của chính bạn** dưới container `iCloud.com.duna.scanner`.
- Duna Labs **không bao giờ truy cập, đọc hay lưu trữ** dữ liệu này. Chúng tôi không vận hành server backend cho lưu trữ tài liệu.
- Bạn có thể thu hồi đồng bộ bất cứ lúc nào bằng cách xoá Ứng dụng trong iOS Cài đặt → Apple ID → iCloud, hoặc đăng xuất.

## 4. Thông tin do bên thứ ba thu thập

### 4.1 Google AdMob (banner quảng cáo)

Khi Ứng dụng hiển thị banner quảng cáo, Google AdMob có thể thu thập:

- **Advertising Identifier (IDFA)** của bạn, **chỉ khi** bạn cấp quyền qua prompt App Tracking Transparency (ATT).
- **Vị trí thô** suy ra từ địa chỉ IP.
- **Dữ liệu tương tác quảng cáo** tổng hợp (impressions, clicks).

Việc xử lý dữ liệu tuân theo Chính sách Quyền riêng tư & Điều khoản của Google: <https://policies.google.com/privacy>

Nếu bạn từ chối ATT, AdMob sẽ chỉ phục vụ **quảng cáo không cá nhân hoá** và không theo dõi bạn qua các ứng dụng/website khác.

### 4.2 Đăng nhập bằng Apple (tài khoản)

Apple chỉ chia sẻ với chúng tôi **opaque user identifier** (`Apple userIdentifier`) và, nếu bạn chọn chia sẻ, tên hiển thị. Chúng tôi lưu identifier trong Keychain của thiết bị — **không rời khỏi thiết bị**. Chúng tôi **không bao giờ** nhận email Apple ID thật.

### 4.3 BizConnex Gateway / webhook riêng của bạn (tuỳ chọn, do người dùng khởi tạo)

Nếu bạn nhập URL webhook trong **Cài đặt → Gateway** và chủ động chạm "Gửi tới Enterprise" trên một tài liệu, Ứng dụng gửi payload JSON deterministic tới **URL bạn cung cấp**. Duna Labs không phải bên nhận, không thấy, log hay proxy payload. Bạn chịu trách nhiệm về chính sách bảo mật của bất kỳ webhook đích nào bạn cấu hình.

## 5. Két Tài liệu Bảo mật

Khi bạn bật két cho một tài liệu:

- Tài liệu được mã hoá trên thiết bị bằng **AES-256-GCM** (mã hoá có xác thực chuẩn ngành).
- Khoá mã hoá hoặc được dẫn xuất từ device key lưu trong **iCloud Keychain** (để két mở khoá được trên thiết bị Apple khác của bạn), hoặc được dẫn xuất từ **passphrase do bạn chọn** bằng PBKDF2-HMAC-SHA256 với 210,000 iterations.
- Bản gốc của tài liệu được xoá an toàn khỏi lưu trữ thiết bị.
- Giải mã được kiểm soát bởi Face ID, Touch ID hoặc passphrase.

Duna Labs **không có quyền truy cập** vào khoá mã hoá hoặc passphrase. Nếu bạn quên passphrase, tài liệu đã mã hoá không thể khôi phục.

## 6. Quyền riêng tư của trẻ em

Ứng dụng được xếp hạng 4+ và phù hợp với khán giả phổ thông. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi (hoặc 16 tuổi ở EEA). Nếu bạn cho rằng một trẻ em đã cung cấp thông tin cá nhân, vui lòng liên hệ để chúng tôi xử lý.

## 7. Quyền của bạn (GDPR / CCPA)

Bạn có quyền:

- **Truy cập** — yêu cầu bản sao bất kỳ dữ liệu nào chúng tôi giữ về bạn. (Trong hầu hết trường hợp, chúng tôi không giữ gì.)
- **Xoá** — gỡ Ứng dụng khỏi thiết bị, việc này xoá toàn bộ dữ liệu cục bộ. Dữ liệu đã đồng bộ iCloud có thể xoá qua iOS Cài đặt → Apple ID → iCloud → Quản lý lưu trữ → Duna AI Scan.
- **Phản đối** — từ chối quảng cáo cá nhân hoá qua prompt ATT hoặc iOS Cài đặt → Quyền riêng tư & Bảo mật → Theo dõi.
- **Khả chuyển** — xuất tài liệu sang PDF từ Ứng dụng bất cứ lúc nào.

Để thực hiện các quyền trên, email [hoainam8x@gmail.com](mailto:hoainam8x@gmail.com).

## 8. Bảo mật

- Toàn bộ dữ liệu trên thiết bị lưu trong sandbox container của Ứng dụng, bảo vệ bởi iOS file protection (`NSFileProtectionComplete`).
- Tài liệu trong két được mã hoá bằng AES-256-GCM như mô tả ở §5.
- Mọi giao tiếp mạng dùng TLS 1.2 hoặc cao hơn.
- Xác thực sinh trắc dùng Secure Enclave của Apple; dữ liệu sinh trắc gốc không bao giờ chạm Ứng dụng.

## 9. Thay đổi chính sách

Chúng tôi có thể cập nhật Chính sách Bảo mật theo thời gian. Mục "Cập nhật lần cuối" ở đầu phản ánh phiên bản mới nhất. Tiếp tục sử dụng Ứng dụng sau khi có thay đổi tương đương việc chấp nhận.

## 10. Liên hệ

**Duna Labs**
Email: [hoainam8x@gmail.com](mailto:hoainam8x@gmail.com)
Website: [https://hoainam8x.github.io/ai-scanner](https://hoainam8x.github.io/ai-scanner)

</section>
