// QUIZ 8 DATA: API Versioning, Paging, Sorting & Automated Testing (Chapter 12)
const QUIZ_8_DATA = [
  {
    "id": 1,
    "topic": "Chapter 12: API Versioning Need",
    "question": "Why is API versioning crucial when maintaining enterprise RESTful web services (Slide 3)?",
    "options": [
      "To introduce breaking changes, updated schemas, or new business rules without breaking existing client applications (mobile apps, 3rd party partners)",
      "Because Git requires all files to be renamed every Monday",
      "To force users to purchase a new computer hardware every year",
      "To delete all old records from the relational database"
    ],
    "correct": 0,
    "hint": "Slide 3 & 4 (Ch 12): Ứng dụng di động cài trên điện thoại người dùng không thể bắt buộc cập nhật cùng ngày với backend server. Ta cần hỗ trợ song song nhiều phiên bản API.",
    "explanations": {
      "0": "Chính xác! Slide 3 & 4 (Ch 12): Versioning là kỹ thuật bắt buộc để hệ thống có thể nâng cấp, thay đổi cấu trúc dữ liệu mà không làm sập (break) các phiên bản ứng dụng cũ của khách hàng hoặc đối tác đang kết nối.",
      "1": "Sai. Git quản lý lịch sử commit của file, không yêu cầu đổi tên file định kỳ.",
      "2": "Sai. Nâng cấp API web độc lập hoàn toàn với việc mua sắm phần cứng máy tính.",
      "3": "Sai. Versioning bảo vệ tính liên tục của dữ liệu, không xóa CSDL."
    },
    "keyTakeaway": "Quản lý phiên bản API (API Versioning) cho phép triển khai các thay đổi lớn (breaking changes) mà không làm gián đoạn các ứng dụng client đang hoạt động."
  },
  {
    "id": 2,
    "topic": "Chapter 12: URI Path Versioning",
    "question": "Which code snippet demonstrates standard URI path-based API versioning in Spring Boot?",
    "options": [
      "`@GetMapping(\"/api/v1/products\")` and `@GetMapping(\"/api/v2/products\")`",
      "`@GetMapping(value = \"/products\", memory = \"v1\")`",
      "`@GetMapping(url = 1.0)`",
      "`@Version(1) public String get()`"
    ],
    "correct": 0,
    "hint": "Slide 6 (Ch 12): Phiên bản được gắn trực tiếp như một phần của đường dẫn URI, là cách trực quan và phổ biến nhất thế giới.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 12): URI Path Versioning nhúng số phiên bản trực tiếp vào đường dẫn URL (`/api/v1/...` và `/api/v2/...`). Đây là cách rõ ràng, dễ hiểu nhất, thân thiện với bộ nhớ đệm (caching) và được áp dụng phổ biến nhất trong thực tế.",
      "1": "Sai. Không có thuộc tính `memory` trên `@GetMapping`.",
      "2": "Sai. Cú pháp không hợp lệ trong Java.",
      "3": "Sai. `@Version` trong JPA dùng cho Khóa lạc quan (Optimistic Locking), không dùng cho API routing."
    },
    "keyTakeaway": "URI Path Versioning (`/v1/resource`) là phương pháp phân phiên bản trực quan nhất, cho phép dễ dàng kiểm thử và định tuyến qua các gateway."
  },
  {
    "id": 3,
    "topic": "Chapter 12: Request Parameter Versioning",
    "question": "How is Request Parameter-based API versioning configured in a Spring Boot controller method?",
    "options": [
      "`@GetMapping(value = \"/products\", params = \"version=1\")`",
      "`@GetMapping(value = \"/products\", headerVersion = 1)`",
      "`@GetMapping(\"/products?v=1\")` inside the path directly",
      "`@QueryVersion(1)`"
    ],
    "correct": 0,
    "hint": "Slide 7 (Ch 12): Thuộc tính `params` trong `@GetMapping` ràng buộc phương thức chỉ kích hoạt khi request URL có chứa tham số truy vấn đó.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 12): `@GetMapping(value = \"/products\", params = \"version=1\")`. Khi client gọi `/products?version=1`, Spring MVC sẽ tự động đối chiếu thuộc tính `params` để kích hoạt đúng phương thức tương ứng.",
      "1": "Sai. Thuộc tính của `@GetMapping` là `headers`, không phải `headerVersion`.",
      "2": "Sai. Không đưa chuỗi query string (`?v=1`) trực tiếp vào thuộc tính `path` của `@GetMapping` vì Spring MVC sẽ không phân giải được.",
      "3": "Sai. `@QueryVersion` không tồn tại trong Spring framework."
    },
    "keyTakeaway": "Sử dụng thuộc tính `params = \"version=1\"` trên `@GetMapping` để định tuyến phiên bản API dựa trên tham số truy vấn (Query Parameter)."
  },
  {
    "id": 4,
    "topic": "Chapter 12: Custom Header Versioning",
    "question": "Which Spring Boot mapping instructs a method to only handle requests that include a custom header `X-API-VERSION=2`?",
    "options": [
      "`@GetMapping(value = \"/products\", headers = \"X-API-VERSION=2\")`",
      "`@GetMapping(value = \"/products\", customHeader = \"2\")`",
      "`@HeaderMatch(\"X-API-VERSION=2\")`",
      "`@RequestHeaderOnly(name = \"version\", value = 2)`"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 12): Thuộc tính `headers` của `@GetMapping` cho phép lọc request dựa trên tiêu đề HTTP Header được gửi kèm.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 12): `@GetMapping(value = \"/products\", headers = \"X-API-VERSION=2\")`. Cách tiếp cận này giữ cho URL sạch đẹp, không bị biến đổi đường dẫn URI, nhưng client bắt buộc phải thiết lập thêm tiêu đề HTTP tùy biến.",
      "1": "Sai. `@GetMapping` không có thuộc tính `customHeader`.",
      "2": "Sai. `@HeaderMatch` không phải annotation của Spring.",
      "3": "Sai. `@RequestHeaderOnly` không tồn tại."
    },
    "keyTakeaway": "Thuộc tính `headers = \"X-API-VERSION=2\"` giúp định tuyến phiên bản dựa vào Custom Header, giữ cho cấu trúc URL tài nguyên hoàn toàn trong sạch."
  },
  {
    "id": 5,
    "topic": "Chapter 12: Media Type / Accept Header Versioning",
    "question": "What is Media Type Versioning (Content Negotiation) in Spring REST controllers (Slide 9)?",
    "options": [
      "Specifying the expected version in the `Accept` header using the `produces` attribute (e.g. `produces = \"application/vnd.company.app-v1+json\"`)",
      "Renaming all MP3 and MP4 files on the web server",
      "Restricting the API to only run inside video media players",
      "Compiling the backend into a television broadcast signal"
    ],
    "correct": 0,
    "hint": "Slide 9 (Ch 12): Tận dụng cơ chế thương lượng nội dung (Content Negotiation) chuẩn của HTTP thông qua tiêu đề `Accept`.",
    "explanations": {
      "0": "Chính xác! Slide 9 (Ch 12): Media Type Versioning (còn gọi là Vendor Media Types) sử dụng thuộc tính `produces = \"application/vnd.company.app-v1+json\"`. Client gửi tiêu đề `Accept: application/vnd.company.app-v1+json` để yêu cầu phiên bản tương ứng.",
      "1": "Sai. 'Media Type' ở đây là MIME type của dữ liệu web, không phải file đa phương tiện MP3/MP4.",
      "2": "Sai. Hoàn toàn không liên quan đến phần mềm video player.",
      "3": "Sai. Đây là một câu đùa nghĩa đen về truyền hình."
    },
    "keyTakeaway": "Media Type Versioning sử dụng cơ chế Content Negotiation của HTTP qua tiêu đề `Accept` và thuộc tính `produces` của controller."
  },
  {
    "id": 6,
    "topic": "Chapter 12: Spring Data `Pageable` & `PageRequest`",
    "question": "In Spring Data JPA, how do you construct a `Pageable` instance to request page 0 with 10 elements, sorted by `price` descending?",
    "options": [
      "`Pageable pageable = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, \"price\"));`",
      "`Pageable pageable = new Pageable(0, 10, \"desc\");`",
      "`Pageable pageable = PageRequest.createPage(10, 0);`",
      "`Pageable pageable = Sort.create(0, 10);`"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 12): `Pageable` là interface, còn `PageRequest.of(...)` là static factory method chuẩn để khởi tạo đối tượng phân trang.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 12): Phương thức nhà máy tĩnh `PageRequest.of(page, size, sort)` là cách khởi tạo chuẩn của Spring Data. Lưu ý chỉ số trang (`page`) trong Spring bắt đầu từ số 0 (0-based index).",
      "1": "Sai. `Pageable` là một Interface trong Java, không thể khởi tạo trực tiếp bằng từ khóa `new Pageable()`.",
      "2": "Sai. Không có phương thức `createPage` trên `PageRequest`.",
      "3": "Sai. Lớp `Sort` không có phương thức tạo `Sort.create(0, 10)`."
    },
    "keyTakeaway": "Sử dụng `PageRequest.of(page, size, Sort.by(Direction, property))` để tạo đối tượng `Pageable` điều khiển phân trang và sắp xếp trong Spring Data."
  },
  {
    "id": 7,
    "topic": "Chapter 12: `Page<T>` vs `Slice<T>` Performance",
    "question": "What is the crucial performance difference between returning `Page<T>` versus `Slice<T>` from a Spring Data repository method?",
    "options": [
      "`Page<T>` executes an additional `COUNT(*)` query to calculate total elements and total pages, which can be very expensive on massive tables; `Slice<T>` only queries `size + 1` records to know if a next page exists without running a count query",
      "`Slice<T>` deletes half of the records from the database on every query",
      "`Page<T>` only works on Oracle databases, while `Slice<T>` only works on MySQL",
      "There is no difference; `Slice` is just an obsolete synonym for `Page`"
    ],
    "correct": 0,
    "hint": "Slide 14 & 15 (Ch 12): Hãy nghĩ đến tính năng Infinite Scroll (cuộn trang vô tận trên mạng xã hội) - bạn chỉ cần biết còn trang sau không chứ không cần biết tổng số hàng triệu bài viết.",
    "explanations": {
      "0": "Chính xác! Slide 14 & 15 (Ch 12): `Page<T>` cung cấp các phương thức `getTotalElements()` và `getTotalPages()`, do đó Spring Data BẮT BUỘC phải thực thi một câu lệnh `SELECT COUNT(*)` phụ. Trên các bảng có hàng chục triệu bản ghi, câu lệnh count này rất chậm. Ngược lại, `Slice<T>` chỉ lấy dư 1 phần tử (`limit size + 1`) để biết còn dữ liệu tiếp theo hay không (`hasNext()`), hoàn toàn bỏ qua câu lệnh COUNT, giúp tăng tốc vượt trội cho giao diện cuộn vô tận.",
      "1": "Sai. `Slice` chỉ đọc dữ liệu, không xóa bất kỳ bản ghi nào trong database.",
      "2": "Sai. Cả hai đều được hỗ trợ độc lập với loại hệ quản trị CSDL quan hệ.",
      "3": "Sai. Hai kiểu trả về này có mục đích kiến trúc và chi phí hiệu năng khác nhau hoàn toàn."
    },
    "keyTakeaway": "`Page<T>` thực hiện thêm câu lệnh `COUNT(*)` tốn kém để tính tổng trang; `Slice<T>` không đếm tổng, chỉ kiểm tra xem còn dữ liệu tiếp theo không, lý tưởng cho tính năng Infinite Scroll."
  },
  {
    "id": 8,
    "topic": "Chapter 12: Page Size Protection (DoS Prevention)",
    "question": "Why should REST endpoints accepting a `size` parameter enforce a maximum limit (e.g. `@Max(100)` or `max-page-size=100`)?",
    "options": [
      "To prevent malicious clients from requesting `?size=10000000`, which could exhaust server heap memory (OutOfMemoryError) and cause Denial of Service (DoS)",
      "Because database drivers automatically delete all tables if a query requests more than 100 rows",
      "Because HTTP packets cannot carry more than 50 bytes of text",
      "Because the Java garbage collector is disabled when paging"
    ],
    "correct": 0,
    "hint": "Slide 16 (Ch 12): Bảo vệ máy chủ khỏi nguy cơ cạn kiệt tài nguyên RAM (Heap memory exhaustion).",
    "explanations": {
      "0": "Chính xác! Slide 16 (Ch 12): Nếu không giới hạn kích thước tối đa của tham số `size`, kẻ tấn công có thể gửi yêu cầu `size=1000000`, buộc máy chủ tải hàng triệu thực thể vào RAM cùng lúc, dẫn tới lỗi `java.lang.OutOfMemoryError` và làm sập toàn bộ dịch vụ backend.",
      "1": "Sai. Driver không tự ý xóa bảng.",
      "2": "Sai. Gói tin HTTP và giao thức TCP truyền tải khối lượng dữ liệu megabytes bình thường.",
      "3": "Sai. Garbage Collector vẫn hoạt động bình thường trong JVM."
    },
    "keyTakeaway": "Luôn thiết lập giới hạn `max-page-size` cho tham số phân trang để ngăn chặn nguy cơ cạn kiệt bộ nhớ RAM và các cuộc tấn công từ chối dịch vụ (DoS)."
  },
  {
    "id": 9,
    "topic": "Chapter 12: `@SpringBootTest` Scope",
    "question": "What does the `@SpringBootTest` annotation do when executing integration tests (Slide 20)?",
    "options": [
      "It bootstraps the complete Spring ApplicationContext with all beans, configuration, and dependencies for comprehensive end-to-end testing",
      "It only tests CSS styling inside web browsers",
      "It deletes all test files immediately after execution",
      "It converts Java source code into JavaScript files"
    ],
    "correct": 0,
    "hint": "Slide 20 (Ch 12): Annotation toàn diện nhất của Spring Boot Test, khởi động toàn bộ ngữ cảnh ứng dụng (ApplicationContext).",
    "explanations": {
      "0": "Chính xác! Slide 20 (Ch 12): `@SpringBootTest` tìm kiếm lớp cấu hình chính (`@SpringBootApplication`) và khởi động toàn bộ Spring ApplicationContext với đầy đủ các Bean (Controllers, Services, Repositories). Nó được dùng cho các bài kiểm thử tích hợp toàn diện (Integration Tests).",
      "1": "Sai. `@SpringBootTest` kiểm thử logic backend Java, không kiểm tra CSS.",
      "2": "Sai. Mã kiểm thử vẫn được lưu giữ bình thường.",
      "3": "Sai. Annotation kiểm thử không biên dịch mã sang JavaScript."
    },
    "keyTakeaway": "`@SpringBootTest` khởi động toàn bộ ngữ cảnh Spring ApplicationContext, cung cấp môi trường kiểm thử tích hợp toàn diện cho các thành phần của hệ thống."
  },
  {
    "id": 10,
    "topic": "Chapter 12: Slice Testing with `@WebMvcTest`",
    "question": "When should you use `@WebMvcTest` instead of `@SpringBootTest`?",
    "options": [
      "When performing slice testing focused strictly on the Spring MVC web layer (Controllers), without loading the full service layer or database repositories",
      "Only when running tests on production database servers without backups",
      "When testing hardware components like network cables and hard drives",
      "When you want tests to run 10 times slower"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 12): 'Slice Testing' chỉ khởi động một lát cắt hẹp của ứng dụng (chỉ tải Controller, Filter, Converter), giúp bài test chạy cực nhanh.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 12): `@WebMvcTest(StudentController.class)` là một dạng kiểm thử lát cắt (Slice Test). Nó chỉ tải tầng Web MVC của Spring mà không tải tầng Service hay Database Repositories, giúp bài test controller khởi động cực nhanh và độc lập.",
      "1": "Sai. Không nên chạy kiểm thử trên cơ sở dữ liệu production.",
      "2": "Sai. Không dùng để kiểm tra phần cứng vật lý.",
      "3": "Sai. `@WebMvcTest` chạy nhanh hơn đáng kể so với `@SpringBootTest` vì không phải nạp toàn bộ ứng dụng."
    },
    "keyTakeaway": "`@WebMvcTest` cô lập việc kiểm thử trên tầng Web MVC (Controllers), bỏ qua các tầng dữ liệu và nghiệp vụ nặng nề giúp kiểm thử giao diện API diễn ra nhanh chóng."
  },
  {
    "id": 11,
    "topic": "Chapter 12: `MockMvc` Execution Architecture",
    "question": "What is `MockMvc` in Spring testing (Slide 24)?",
    "options": [
      "A utility that simulates HTTP requests and tests Spring MVC controllers without running a real embedded HTTP servlet container",
      "A video game emulator inside Java",
      "A fake database that stores data in text files",
      "A tool that mocks the developer's keyboard"
    ],
    "correct": 0,
    "hint": "Slide 24 (Ch 12): Cho phép gửi request giả lập thẳng vào `DispatcherServlet` mà không cần tốn chi phí mở cổng socket mạng Tomcat.",
    "explanations": {
      "0": "Chính xác! Slide 24 (Ch 12): `MockMvc` là công cụ cốt lõi của Spring Test cho phép giả lập gửi các yêu cầu HTTP (GET, POST, PUT, DELETE) trực tiếp vào `DispatcherServlet` của Spring MVC và kiểm tra kết quả trả về mà không cần khởi động máy chủ web Tomcat thực sự, giúp tăng tốc độ test tối đa.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về trình giả lập game.",
      "2": "Sai. `MockMvc` kiểm thử tầng web HTTP, không phải giả lập cơ sở dữ liệu.",
      "3": "Sai. Không liên quan đến bàn phím."
    },
    "keyTakeaway": "`MockMvc` mô phỏng các yêu cầu HTTP và kiểm thử Controller một cách trực tiếp mà không cần khởi chạy máy chủ Servlet thực tế."
  },
  {
    "id": 12,
    "topic": "Chapter 12: Mocking Dependencies with `@MockBean`",
    "question": "How does `@MockBean` assist when testing a controller with `@WebMvcTest`?",
    "options": [
      "It adds a Mockito mock instance into the Spring ApplicationContext, allowing you to define fake return values for service layer dependencies",
      "It converts Java beans into edible coffee beans",
      "It deletes all mock objects before the test starts",
      "It disables the Java virtual machine"
    ],
    "correct": 0,
    "hint": "Slide 26 (Ch 12): Vì `@WebMvcTest` không nạp Service thật, ta dùng `@MockBean StudentService studentService;` để giả lập các hành vi nghiệp vụ.",
    "explanations": {
      "0": "Chính xác! Slide 26 (Ch 12): Annotation `@MockBean` tạo ra một đối tượng mock (bằng Mockito) và tự động tiêm (inject) vào Spring ApplicationContext. Bạn có thể quy định trước hành vi trả về bằng `when(studentService.findById(1L)).thenReturn(...)` mà không cần gọi xuống database.",
      "1": "Sai. Đây là một câu đùa chữ nghĩa về hạt cà phê.",
      "2": "Sai. `@MockBean` tạo mock để phục vụ bài test chứ không xóa đi.",
      "3": "Sai. JVM vẫn điều khiển việc thực thi bài test bình thường."
    },
    "keyTakeaway": "`@MockBean` chèn một đối tượng giả lập Mockito vào Spring ApplicationContext, cho phép cô lập hoàn toàn Controller khỏi sự phụ thuộc vào tầng Service thật."
  },
  {
    "id": 13,
    "topic": "Chapter 12: JSON Assertion with `jsonPath`",
    "question": "Which MockMvc assertion verifies that the first student in a returned JSON array has the name 'Alice'?",
    "options": [
      "`.andExpect(jsonPath(\"$[0].name\").value(\"Alice\"))`",
      "`.andExpect(sqlPath(\"Alice\"))`",
      "`.andExpect(xpath(\"//name\").is(\"Alice\"))`",
      "`.andExpect(rawString().equals(\"Alice\"))`"
    ],
    "correct": 0,
    "hint": "Slide 28 (Ch 12): Cú pháp JsonPath: ký hiệu `$` đại diện cho đối tượng gốc, `$[0]` là phần tử mảng đầu tiên, `.name` là trường thuộc tính.",
    "explanations": {
      "0": "Chính xác! Slide 28 (Ch 12): `mockMvc.perform(get(\"/api/students\")).andExpect(jsonPath(\"$[0].name\").value(\"Alice\"))`. Cú pháp JsonPath sử dụng `$` đại diện cho gốc của payload JSON để truy xuất và kiểm chứng các thuộc tính bên trong phản hồi.",
      "1": "Sai. `sqlPath` không tồn tại trong thư viện kiểm thử Spring MVC.",
      "2": "Sai. `xpath` dùng để phân tích tài liệu XML, không dùng cho JSON.",
      "3": "Sai. `rawString().equals()` không phải phương thức khớp dữ liệu của MockMvc ResultMatchers."
    },
    "keyTakeaway": "Sử dụng biểu thức `jsonPath(\"$[0].fieldName\").value(...)` để trích xuất và khẳng định tính chính xác của các thuộc tính trong cấu trúc JSON phản hồi."
  },
  {
    "id": 14,
    "topic": "Chapter 12: Testing POST Requests with MockMvc",
    "question": "When sending a POST request with MockMvc, how do you set the JSON request payload and media type?",
    "options": [
      "`mockMvc.perform(post(\"/api/students\").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(student)))`",
      "`mockMvc.perform(post(\"/api/students\").sendTextOnly(\"student\"))`",
      "`mockMvc.perform(get(\"/api/students\").withBody(student))`",
      "`mockMvc.perform(delete(\"/api/students\").asJson(student))`"
    ],
    "correct": 0,
    "hint": "Slide 30 (Ch 12): Dùng `contentType(MediaType.APPLICATION_JSON)` để đặt header và `content(jsonString)` để truyền chuỗi JSON đã tuần tự hóa qua ObjectMapper.",
    "explanations": {
      "0": "Chính xác! Slide 30 (Ch 12): `mockMvc.perform(post(\"/api/students\").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(student)))`. Đây là cú pháp chuẩn mực để gửi một payload JSON trong bài kiểm thử tạo mới dữ liệu.",
      "1": "Sai. `sendTextOnly` không phải phương thức của `MockHttpServletRequestBuilder`.",
      "2": "Sai. HTTP GET không được khuyến nghị gửi payload trong body và phương thức `withBody` không chuẩn.",
      "3": "Sai. Đây là phương thức xóa DELETE, không dùng để kiểm thử thao tác tạo mới POST."
    },
    "keyTakeaway": "Thiết lập `contentType(MediaType.APPLICATION_JSON)` và truyền chuỗi JSON vào `.content(...)` của MockMvc khi kiểm thử các yêu cầu POST hoặc PUT."
  },
  {
    "id": 15,
    "topic": "Chapter 12: Repository Slice Testing with `@DataJpaTest`",
    "question": "What environment does `@DataJpaTest` configure when testing database access layers?",
    "options": [
      "It configures an in-memory database (like H2), scans only `@Entity` classes and Spring Data JPA repositories, and enables transaction rollback after every test",
      "It deletes the production database and creates a text file",
      "It launches a full Tomcat web server listening on port 80",
      "It disables all SQL logging and prevents any queries from running"
    ],
    "correct": 0,
    "hint": "Slide 32 (Ch 12): Annotation kiểm thử chuyên biệt cho tầng Repository JPA, dùng database nhúng (in-memory) để kiểm tra độ chính xác của câu lệnh SQL/JPQL.",
    "explanations": {
      "0": "Chính xác! Slide 32 (Ch 12): `@DataJpaTest` là slice test cho tầng Persistence. Nó tự động cấu hình cơ sở dữ liệu in-memory (như H2), chỉ quét các lớp `@Entity` và các repository Spring Data JPA, và tự động rollback dữ liệu sau mỗi test method để tránh làm bẩn môi trường test.",
      "1": "Sai. `@DataJpaTest` được thiết kế an toàn, không bao giờ can thiệp xóa cơ sở dữ liệu production.",
      "2": "Sai. `@DataJpaTest` không khởi động máy chủ web Tomcat (nó chỉ kiểm thử tầng CSDL).",
      "3": "Sai. `@DataJpaTest` cho phép log toàn bộ câu lệnh SQL để lập trình viên kiểm tra."
    },
    "keyTakeaway": "`@DataJpaTest` cấu hình CSDL in-memory (H2) và cô lập việc kiểm thử trên các Entity và Repository JPA, tự động rollback dữ liệu sau mỗi ca kiểm thử."
  },
  {
    "id": 16,
    "topic": "Chapter 12: Test Transaction Rollback",
    "question": "Why are test methods annotated with `@Transactional` (or inside `@DataJpaTest`) automatically rolled back by default at the end of each test execution?",
    "options": [
      "To ensure test isolation, preventing database mutations from one test from leaking into and corrupting subsequent tests",
      "Because SQL databases do not allow data to be stored permanently during test runs",
      "Because Java runs out of memory if transactions commit",
      "To force developers to re-enter data manually"
    ],
    "correct": 0,
    "hint": "Slide 34 (Ch 12): Tính độc lập giữa các ca kiểm thử (Test Isolation). Ca test A không được để lại rác làm hỏng kết quả của ca test B.",
    "explanations": {
      "0": "Chính xác! Slide 34 (Ch 12): Cơ chế tự động Rollback sau mỗi test đảm bảo tính độc lập tuyệt đối giữa các bài test (Test Isolation). Bất kỳ dữ liệu thêm/sửa/xóa nào được thực hiện trong bài test sẽ được hoàn tác, giữ cho cơ sở dữ liệu luôn ở trạng thái nguyên vẹn cho các bài test tiếp theo.",
      "1": "Sai. CSDL hoàn toàn có thể lưu vĩnh viễn nếu bạn thêm `@Rollback(false)`.",
      "2": "Sai. Việc commit giao dịch không làm cạn kiệt bộ nhớ RAM.",
      "3": "Sai. Tự động hóa kiểm thử hướng đến việc loại bỏ thao tác thủ công."
    },
    "keyTakeaway": "Mặc định, các bài kiểm thử Spring có `@Transactional` sẽ tự động Rollback sau khi chạy xong để đảm bảo tính cô lập và dữ liệu sạch cho các ca kiểm thử sau."
  },
  {
    "id": 17,
    "topic": "Chapter 12: Mockito `when(...).thenReturn(...)` Contract",
    "question": "In Mockito, how do you define that calling `studentService.getById(5L)` should return a mock student object?",
    "options": [
      "`when(studentService.getById(5L)).thenReturn(mockStudent);`",
      "`studentService.getById(5L) = mockStudent;`",
      "`setMockReturn(studentService, 5L, mockStudent);`",
      "`alwaysReturn(mockStudent).from(studentService);`"
    ],
    "correct": 0,
    "hint": "Slide 36 (Ch 12): Cú pháp stubbing tiêu chuẩn của thư viện Mockito: `when(hành_động).thenReturn(kết_quả)`.",
    "explanations": {
      "0": "Chính xác! Slide 36 (Ch 12): `when(studentService.getById(5L)).thenReturn(mockStudent);` là cú pháp thiết lập hành vi giả lập (Stubbing) trong Mockito, quy định kết quả trả về khi phương thức được gọi với tham số xác định.",
      "1": "Sai. Không thể gán kết quả lời gọi hàm bằng toán tử gán `= ` trong Java.",
      "2": "Sai. Không có hàm `setMockReturn` trong Mockito chuẩn.",
      "3": "Sai. `alwaysReturn` không phải cú pháp của Mockito."
    },
    "keyTakeaway": "Sử dụng cú pháp `when(mockObject.method(args)).thenReturn(result)` của Mockito để thiết lập hành vi giả lập cho các phụ thuộc trong bài kiểm thử."
  },
  {
    "id": 18,
    "topic": "Chapter 12: Verifying Mock Invocations",
    "question": "Which Mockito method is used to verify that a service method was invoked exactly once with specific arguments?",
    "options": [
      "`verify(studentService, times(1)).save(any(Student.class));`",
      "`checkInvocation(studentService, 1);`",
      "`assertCalled(studentService.save);`",
      "`studentService.hasBeenExecuted();`"
    ],
    "correct": 0,
    "hint": "Slide 38 (Ch 12): Phương thức `verify(mock, times(n))` kiểm tra xem mock object có thực sự được gọi theo đúng số lần kỳ vọng hay không.",
    "explanations": {
      "0": "Chính xác! Slide 38 (Ch 12): `verify(studentService, times(1)).save(any(Student.class));` xác nhận rằng phương thức `save` đã được gọi đúng 1 lần duy nhất trong quá trình thực thi bài kiểm thử controller.",
      "1": "Sai. `checkInvocation` không tồn tại trong Mockito.",
      "2": "Sai. `assertCalled` không phải phương thức của Mockito.",
      "3": "Sai. `hasBeenExecuted` không phải API của Mockito."
    },
    "keyTakeaway": "Dùng `verify(mock, times(1)).method(...)` trong Mockito để xác minh tính chính xác của các tương tác và lời gọi hàm giữa các tầng kiến trúc."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_8_DATA;
}
