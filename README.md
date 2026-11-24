# SBA301 - THE DARK FANTASY ARCANUM: 10 MASTER QUIZZES
**Course:** SBA301 - Spring Boot & ReactJS / Full-stack Development  
**Theme:** Dark Fantasy Eldritch Grimoire & Arcane Testing Grounds  
**Primary Accent Color:** Ethereal Soul Cyan (`#78E3F1` / `#9FEAF7`)

---

## 🌌 Tổng Quan Hệ Thống

Hệ thống Quiz này được xây dựng bám sát toàn bộ **22 Chapters** trong giáo trình slide SBA301, với thiết kế giao diện **Dark Fantasy** huyền ảo, sắc nét, tông màu chủ đạo **Soul Cyan** lấy từ bảng màu yêu cầu kết hợp nền đá đen vực thẳm Abyss (`#06090f`, `#0d1524`).

- **Ngôn ngữ câu hỏi & các lựa chọn:** Tiếng Anh chuyên ngành chuẩn mực.
- **Ngôn ngữ gợi ý (Hint):** Tiếng Việt trực quan, giúp định hướng tư duy mà không làm lộ đáp án.
- **Ngôn ngữ giải thích chi tiết:** Tiếng Việt chuyên sâu:
  - ✅ **Tại sao đáp án đúng lại ĐÚNG:** Trích dẫn nguyên lý cốt lõi từ Slide.
  - ❌ **Phân tích vì sao từng đáp án còn lại lại SAI:** Chỉ rõ bản chất sai sót hoặc định nghĩa thực tế của phương án đó.
  - 📖 **Trọng tâm kiến thức từ Slide:** Tóm tắt ngắn gọn quy tắc vàng cần ghi nhớ.
- **Âm thanh ma thuật (Web Audio API):** Tự động phát âm thanh chuông phép khi chọn đúng, âm trầm khi chọn sai và nhạc chiến thắng khi hoàn thành (có nút bật/tắt tiện lợi).
- **Lưu trữ tiến trình tự động (localStorage):** Tự động lưu điểm, số câu đã hoàn thành, cấp bậc pháp sư và tỷ lệ chính xác.

---

## 📜 Cấu Trúc 10 Bài Quiz (Bao Quát Trọn Vẹn 22 Chapters)

| STT | Tên Thử Thách (Quest) | Phạm Vi Chapters | Số Câu | Trọng Tâm Kiến Thức |
|---|---|---|:---:|---|
| **01** | **React Fundamentals & Modern Tooling** | Chapter 01 & 02 | 18 | Virtual DOM, Reconciliation, Node.js V8 Engine, Non-blocking I/O, npm flags, Vite, Git, JSX rules, Component lifecycle. |
| **02** | **React-Bootstrap & UI Layout Architecture** | Chapter 02 & 03 | 18 | Hệ thống 12-Column Grid, Container & fluid, Breakpoints (xs-xxl), Buttons, Form validation, Navbar responsive, Modals, Cards. |
| **03** | **State Management, Props Flow & Context API** | Chapter 04 | 18 | Tính bất biến của Props, Children prop, Lifting State Up, Declarative vs Imperative UI, Reset state với `key`, Context API. |
| **04** | **React Hooks Mastery (Core & Advanced)** | Chapter 05 | 18 | Rules of Hooks (Top level only), `useState` batching, `useEffect` dependencies & cleanup, `useReducer`, `useRef`, `useMemo`, `useCallback`, Custom Hooks. |
| **05** | **Client-Side Routing & SPA Architecture** | Chapter 06, 09, 14 | 18 | Kiến trúc Single Page Application, React Router v6, `<Routes>`, `<Link>`, `<NavLink>`, `useParams`, `useSearchParams`, `useNavigate`, `<Outlet>`, Nested & Protected Routes, 404 rewrite. |
| **06** | **Client-Server Communication & Data Caching** | Chapter 07, 08, 15 | 18 | Axios vs Fetch, Request/Response Interceptors, `async/await`, AbortController, Race Conditions, Stale-While-Revalidate (SWR), React Query, CORS. |
| **07** | **Spring Boot RESTful Services & OpenAPI** | Chapter 10 & 11 | 18 | 6 nguyên tắc REST, chuẩn URI, HTTP Verbs & Status codes (200, 201, 401, 403), `@RestController`, `@RequestBody`, `@PathVariable`, ResponseEntity, OpenAPI 3, Swagger UI, SpringDoc. |
| **08** | **API Versioning, Paging, Sorting & Testing** | Chapter 12 | 18 | 4 chiến lược Versioning (URI, Params, Headers, Media type), `Pageable`, `PageRequest`, `Page<T>` vs `Slice<T>` performance, JUnit 5, `@SpringBootTest`, `@WebMvcTest`, `MockMvc`, `@MockBean`, JsonPath. |
| **09** | **Hibernate ORM Architecture, Entity Lifecycle & Mapping** | Chapter 17 & 18 | 18 | Kiến trúc Hibernate (SessionFactory vs Session), 4 Entity States (Transient, Persistent, Detached, Removed), hbm2ddl, `@OneToMany`, `mappedBy`, `@JoinColumn`, FetchType LAZY/EAGER, First/Second-level cache, N+1 query problem & `JOIN FETCH`. |
| **10** | **Spring Security, NoSQL MongoDB & DevOps Tools** | Chapter 13, 16, 19-22 | 18 | Spring Security 6 (`SecurityFilterChain`), JWT (Header.Payload.Signature), BCrypt, `@PreAuthorize`, 4 loại NoSQL, MongoDB Document model, BSON, ObjectId, `MongoRepository`, Actuator (`/health`, `/metrics`), Dockerfile Spring Boot. |

**Tổng cộng:** **180 câu hỏi trắc nghiệm chuyên sâu** không bỏ sót bất kỳ khía cạnh nào trong 22 Chapters của slide!

---

## 🚀 Hướng Dẫn Sử Dụng

### 1. Khởi Chạy
Bạn chỉ cần mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Brave):
- Đường dẫn: `d:\University\2026\Fall26\SBA301\Quiz\index.html` (hoặc trong thư mục `Quiz\index.html`).
- Không cần cài đặt web server; ứng dụng chạy thuần túy trên client-side!

### 2. Các Tính Năng Trong Đấu Trường Quiz (Arena)
- **Chọn đáp án:** Nhấp vào phương án A, B, C, D. Hệ thống sẽ phát âm thanh và hiển thị ngay lập tức phương án đúng (Màu xanh ngọc Emerald sáng) và phương án sai (Màu đỏ Crimson).
- **Hộp giải thích toàn diện:** Tự động mở ngay bên dưới, phân tích rõ lý do đúng và lý do sai của từng lựa chọn, kèm bài học cốt lõi từ slide.
- **Nút Gợi ý (Hint):** Bấm "Hiển thị Gợi ý" để đọc manh mối định hướng tư duy bằng tiếng Việt.
- **Runic Matrix:** Bảng ma trận 18 câu bên phải cho phép bạn nhảy nhanh tới bất kỳ câu nào, theo dõi câu đúng (xanh), câu sai (đỏ), và câu đang làm (phát sáng).
- **Đánh dấu (★ Bookmark):** Nhấp vào icon ngôi sao ở góc phải để đánh dấu những câu khó cần xem lại.
- **Tổng kết & Lọc câu sai:** Sau khi nộp bài, xem tỷ lệ phần trăm và danh hiệu, cùng nút "Xem lại câu sai" để tập trung ôn luyện những phần còn yếu.
