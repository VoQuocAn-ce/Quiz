// QUIZ 7 DATA: Spring Boot RESTful Web Services & Documentation (Chapters 10 & 11)
const QUIZ_7_DATA = [
  {
    "id": 1,
    "topic": "Chapter 10: REST Architectural Principles",
    "question": "Which of the following is NOT one of the fundamental architectural constraints of REST defined by Roy Fielding?",
    "options": [
      "Statelessness",
      "Client-Server separation of concerns",
      "Server-side session state storage required for all clients",
      "Uniform Interface"
    ],
    "correct": 2,
    "hint": "Slide 3 & 8 (Ch 10): Một trong những nguyên lý quan trọng nhất của REST là 'Statelessness' (phi trạng thái) - server KHÔNG lưu session của client.",
    "explanations": {
      "0": "Sai. Statelessness là ràng buộc cốt lõi của REST.",
      "1": "Sai. Client-Server là nguyên lý phân tách trách nhiệm cốt lõi của REST.",
      "2": "Chính xác! Slide 3 & 8 (Ch 10): Nguyên tắc cốt lõi của REST là Stateless (phi trạng thái). 'No data should be stored on the server during request transfer. The state of the session should be saved at the client's end'. Do đó, bắt buộc lưu session state trên server là SAI hoàn toàn với triết lý REST.",
      "3": "Sai. Uniform Interface (Giao diện thống nhất) là ràng buộc trung tâm của REST."
    },
    "keyTakeaway": "Kiến trúc REST mang tính Stateless (phi trạng thái): máy chủ không lưu giữ bất kỳ ngữ cảnh phiên (session) nào của client giữa các yêu cầu."
  },
  {
    "id": 2,
    "topic": "Chapter 10: RESTful URI Conventions",
    "question": "According to RESTful API design best practices (Slide 6), which URI convention is recommended for retrieving all students?",
    "options": [
      "`GET /api/v1/students` (plural noun)",
      "`GET /api/v1/getAllStudents` (verb)",
      "`GET /api/v1/students_get_all` (verb with underscore)",
      "`POST /api/v1/studentList`"
    ],
    "correct": 0,
    "hint": "Slide 6 (Ch 10): 'Use nouns for resource names: /users, /products, not /getUser, /addProduct. Keep URLs simple and consistent: use hyphens, not underscores'.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 10): Chuẩn thiết kế RESTful quy định: URI đại diện cho tài nguyên (Resource) nên dùng danh từ số nhiều (`/students`), hành động (action) được xác định bằng phương thức HTTP (GET), và dùng dấu gạch ngang `-` thay vì gạch dưới `_`.",
      "1": "Sai. Chèn động từ (`getAllStudents`) vào URI là phong cách RPC/SOAP cũ, vi phạm chuẩn thiết kế REST.",
      "2": "Sai. Không dùng động từ và không dùng dấu gạch dưới trong URI.",
      "3": "Sai. Lấy danh sách là thao tác đọc, phải dùng phương thức HTTP GET chứ không dùng POST."
    },
    "keyTakeaway": "Đường dẫn URI trong REST phải sử dụng danh từ (ưu tiên danh từ số nhiều, chữ thường) đại diện cho tài nguyên, tuyệt đối không chứa động từ."
  },
  {
    "id": 3,
    "topic": "Chapter 10: HTTP Methods & Idempotence",
    "question": "What does it mean for an HTTP method to be 'Idempotent' in REST architecture?",
    "options": [
      "Making multiple identical requests produces the exact same outcome on the server state as making a single request",
      "The request executes 10 times faster than non-idempotent requests",
      "The method can only be called once in the lifetime of the application",
      "The request is permanently deleted from the internet"
    ],
    "correct": 0,
    "hint": "Slide 5 (Ch 10): PUT, DELETE, GET là idempotent vì dù bạn gọi 1 lần hay 100 lần với cùng tham số, trạng thái tài nguyên trên server vẫn như nhau.",
    "explanations": {
      "0": "Chính xác! Tính lũy đẳng (Idempotence) nghĩa là việc thực hiện một yêu cầu nhiều lần liên tiếp mang lại cùng một kết quả trên trạng thái của hệ thống giống như khi thực hiện một lần duy nhất. Ví dụ: `PUT /products/1` (cập nhật) hoặc `DELETE /products/1` (xóa) là idempotent; còn `POST` (tạo mới) thì không vì mỗi lần gọi lại sinh ra một bản ghi mới.",
      "1": "Sai. Lũy đẳng là khái niệm toán học và ngữ nghĩa trạng thái, không liên quan đến tốc độ xử lý.",
      "2": "Sai. Phương thức idempotent có thể được gọi bao nhiêu lần tùy ý mà không làm sai lệch trạng thái.",
      "3": "Sai. Đây là câu giải thích vô căn cứ."
    },
    "keyTakeaway": "Phương thức HTTP Idempotent (như GET, PUT, DELETE) đảm bảo rằng việc thực thi một yêu cầu nhiều lần liên tiếp không làm thay đổi trạng thái server ngoài lần gọi đầu tiên."
  },
  {
    "id": 4,
    "topic": "Chapter 10: HTTP Status Codes Semantic Meanings",
    "question": "Which HTTP status code should a compliant REST API return when a new resource is successfully created via a POST request?",
    "options": [
      "`200 OK`",
      "`201 Created`",
      "`204 No Content`",
      "`304 Not Modified`"
    ],
    "correct": 1,
    "hint": "Slide 12 (Ch 10): '201 Created: This code indicates that the request is successful and a new resource is created'.",
    "explanations": {
      "0": "Sai. `200 OK` thường dùng cho các yêu cầu đọc dữ liệu thành công (GET) hoặc cập nhật thành công (PUT) khi trả về nội dung.",
      "1": "Chính xác! Slide 12 (Ch 10): Mã `201 Created` là mã trạng thái chuẩn xác nhất để phản hồi cho một yêu cầu POST tạo mới tài nguyên thành công, thường kèm theo Header `Location` trỏ tới URI của tài nguyên vừa tạo.",
      "2": "Sai. `204 No Content` báo hiệu thao tác thành công nhưng không có nội dung body trả về (thường dùng cho DELETE).",
      "3": "Sai. `304 Not Modified` dùng cho bộ nhớ đệm (caching) khi tài nguyên không thay đổi."
    },
    "keyTakeaway": "Khi tạo mới tài nguyên thành công qua POST, chuẩn RESTful yêu cầu trả về mã trạng thái HTTP `201 Created`."
  },
  {
    "id": 5,
    "topic": "Chapter 10: 401 Unauthorized vs 403 Forbidden",
    "question": "What is the crucial difference between HTTP Status Code `401 Unauthorized` and `403 Forbidden`?",
    "options": [
      "`401` means authentication is missing or invalid (the server does not know who you are); `403` means identity is known, but the authenticated user lacks permission to access the resource",
      "`401` is for desktop computers, while `403` is for mobile devices",
      "`401` indicates the database has crashed, while `403` indicates a network cable is unplugged",
      "There is no difference; servers choose between them at random"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 10): 401 liên quan đến 'Authentication' (chưa đăng nhập / sai token). 403 liên quan đến 'Authorization' (đã đăng nhập nhưng không đủ quyền hạn, ví dụ USER cố vào trang ADMIN).",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 10): `401 Unauthorized` (chính xác hơn là Unauthenticated): Client chưa cung cấp chứng thực hợp lệ để xác định danh tính. `403 Forbidden`: Server đã xác định được người dùng là ai, nhưng người dùng đó không có thẩm quyền truy cập tài nguyên được yêu cầu.",
      "1": "Sai. Cả hai mã trạng thái đều thuộc chuẩn giao thức HTTP cho mọi thiết bị.",
      "2": "Sai. Lỗi database hoặc hạ tầng thường trả về mã 500 Internal Server Error hoặc 503.",
      "3": "Sai. Hai mã này mang ý nghĩa ngữ nghĩa phân quyền hoàn toàn tách biệt."
    },
    "keyTakeaway": "`401 Unauthorized` báo hiệu thiếu hoặc sai thông tin xác thực danh tính (Authentication); `403 Forbidden` báo hiệu đã biết danh tính nhưng bị từ chối quyền hạn (Authorization)."
  },
  {
    "id": 6,
    "topic": "Chapter 10: `@RestController` Annotation",
    "question": "In Spring Boot, what does the `@RestController` annotation encapsulate?",
    "options": [
      "It combines `@Controller` and `@ResponseBody`, ensuring return values are serialized directly into the HTTP response body as JSON/XML rather than rendering HTML views",
      "It connects the application directly to the server's reset button",
      "It restricts the controller to only handle HTTP GET requests",
      "It disables all security filters for that class"
    ],
    "correct": 0,
    "hint": "Slide 14 (Ch 10): `@RestController` được tạo ra chuyên biệt để viết các API web dịch vụ trả về dữ liệu thuần (JSON).",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 10): `@RestController` là một meta-annotation cấu thành từ `@Controller` và `@ResponseBody`. Nhờ có `@ResponseBody` trên từng phương thức, Spring sẽ sử dụng Jackson để tự động tuần tự hóa (serialize) đối tượng Java thành chuỗi JSON trong phần thân phản hồi HTTP.",
      "1": "Sai. Annotation này không liên quan đến khởi động lại phần cứng.",
      "2": "Sai. `@RestController` có thể xử lý tất cả các phương thức HTTP (GET, POST, PUT, DELETE, PATCH, OPTIONS).",
      "3": "Sai. `@RestController` không vô hiệu hóa hệ thống bảo mật Spring Security."
    },
    "keyTakeaway": "`@RestController` kết hợp giữa `@Controller` và `@ResponseBody`, tự động chuyển đổi đối tượng trả về của Java thành dữ liệu JSON/XML trong thân phản hồi HTTP."
  },
  {
    "id": 7,
    "topic": "Chapter 10: Spring Parameter Binding Annotations",
    "question": "Match the following scenario: You have an endpoint `GET /api/students/{id}?detail=true`. Which annotations bind `{id}` and `detail` respectively in Spring Boot?",
    "options": [
      "`@PathVariable(\"id\") Long id` and `@RequestParam(\"detail\") boolean detail`",
      "`@RequestBody(\"id\") Long id` and `@HeaderParam(\"detail\") boolean detail`",
      "`@QueryParam(\"id\") Long id` and `@PathVar(\"detail\") boolean detail`",
      "`@FormData(\"id\") Long id` and `@BodyParam(\"detail\") boolean detail`"
    ],
    "correct": 0,
    "hint": "Slide 15 (Ch 10): `@PathVariable` lấy biến nằm trên đường dẫn URI `{id}`, còn `@RequestParam` lấy tham số query string sau dấu `?`.",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 10): `@PathVariable` dùng để trích xuất các biến động được nhúng trong đường dẫn URI template (như `{id}`). Trong khi đó, `@RequestParam` dùng để trích xuất các tham số dạng truy vấn (query parameters) nằm sau dấu `?` (như `?detail=true`).",
      "1": "Sai. `@RequestBody` dùng để trích xuất dữ liệu từ thân HTTP Body (POST/PUT), không đọc từ URI.",
      "2": "Sai. `@QueryParam` là annotation của thư viện JAX-RS (Jersey), không phải chuẩn của Spring MVC (`@RequestParam`).",
      "3": "Sai. Các annotation này không tồn tại trong Spring MVC chuẩn."
    },
    "keyTakeaway": "Dùng `@PathVariable` để trích xuất giá trị nằm trong đường dẫn URI (`{id}`), và dùng `@RequestParam` để đọc các tham số truy vấn (`?key=value`)."
  },
  {
    "id": 8,
    "topic": "Chapter 10: `ResponseEntity<T>` in Spring Controllers",
    "question": "Why is returning `ResponseEntity<T>` preferred over returning raw domain objects directly from Spring REST controller methods?",
    "options": [
      "It allows full programmatic control over the HTTP response status code, custom HTTP headers, and the response body",
      "It converts Java objects into C++ binary files",
      "It guarantees that the database query will never fail",
      "It is required by the Java compiler to compile Spring Boot applications"
    ],
    "correct": 0,
    "hint": "Slide 16 (Ch 10): Ví dụ: `return ResponseEntity.status(HttpStatus.CREATED).header(\"X-Custom\", \"Value\").body(savedUser);`.",
    "explanations": {
      "0": "Chính xác! Slide 16 (Ch 10): `ResponseEntity<T>` đại diện cho toàn bộ gói tin HTTP Response. Nó cho phép lập trình viên tùy biến linh hoạt mã trạng thái (Status Code: 200, 201, 204, 404), thêm các Header tùy chỉnh và gán nội dung Body một cách chặt chẽ theo chuẩn REST.",
      "1": "Sai. `ResponseEntity` không biên dịch thành file C++.",
      "2": "Sai. `ResponseEntity` ở tầng Web (Controller), không thể đảm bảo câu truy vấn database không bị lỗi.",
      "3": "Sai. Trả về đối tượng thô trực tiếp (POJO) vẫn biên dịch được nhờ `@ResponseBody`, nhưng kém linh hoạt hơn."
    },
    "keyTakeaway": "`ResponseEntity<T>` mang lại khả năng kiểm soát toàn diện đối với mã trạng thái HTTP, các Header tùy chỉnh và nội dung phần thân của phản hồi."
  },
  {
    "id": 9,
    "topic": "Chapter 10: 3-Layer Architecture in Spring Boot",
    "question": "In the standard 3-layer enterprise architecture demonstrated in Slide 2 & 18, what is the primary role of the Service Layer?",
    "options": [
      "To contain business logic, coordinate multiple repositories, and manage transactional boundaries",
      "To directly listen on TCP network ports and parse raw HTTP bytes",
      "To render HTML elements and display CSS stylesheets",
      "To replace the relational database engine"
    ],
    "correct": 0,
    "hint": "Slide 18 (Ch 10): Controller lo giao tiếp HTTP -> Service lo nghiệp vụ (Business Logic) và Transaction -> Repository lo kết nối CSDL (Data Access).",
    "explanations": {
      "0": "Chính xác! Slide 18 (Ch 10): Kiến trúc 3 tầng chuẩn: 1) Controller (xử lý request/response HTTP), 2) Service (thực thi logic nghiệp vụ, xác thực quy tắc kinh doanh, quản lý `@Transactional`), 3) Repository/DAO (truy vấn và lưu trữ dữ liệu vào database).",
      "1": "Sai. Lắng nghe port và giải mã HTTP là nhiệm vụ của Embedded Web Server (Tomcat) và Spring DispatcherServlet.",
      "2": "Sai. Service layer chạy ở backend, không trực tiếp vẽ HTML/CSS.",
      "3": "Sai. Service layer sử dụng Repository để tương tác với DB chứ không thay thế DB."
    },
    "keyTakeaway": "Tầng Service trong kiến trúc 3 lớp nắm giữ toàn bộ logic nghiệp vụ (Business Logic), điều phối các Repository và quản lý biên giao dịch (Transaction)."
  },
  {
    "id": 10,
    "topic": "Chapter 10: Global Exception Handling",
    "question": "Which combination of Spring annotations is used to implement centralized, global exception handling across all `@RestController` classes?",
    "options": [
      "`@RestControllerAdvice` and `@ExceptionHandler`",
      "`@GlobalCatch` and `@TryBlock`",
      "`@ErrorCatcher` and `@FilterExceptions`",
      "`@SecurityBypass` and `@IgnoreErrors`"
    ],
    "correct": 0,
    "hint": "Slide 20 (Ch 10): Annotation kết hợp giữa `@ControllerAdvice` và `@ResponseBody`, xử lý tập trung mọi ngoại lệ phát sinh từ các Controller.",
    "explanations": {
      "0": "Chính xác! Slide 20 (Ch 10): Đặt `@RestControllerAdvice` trên một lớp xử lý ngoại lệ toàn cục, bên trong sử dụng các phương thức đánh dấu bằng `@ExceptionHandler(ResourceNotFoundException.class)` để bắt các ngoại lệ và trả về phản hồi JSON có cấu trúc lỗi chuẩn hóa.",
      "1": "Sai. `@GlobalCatch` không tồn tại trong Spring Framework.",
      "2": "Sai. `@ErrorCatcher` không phải annotation của Spring.",
      "3": "Sai. Không có annotation nào tên là `@IgnoreErrors`."
    },
    "keyTakeaway": "Sử dụng `@RestControllerAdvice` kết hợp với `@ExceptionHandler` để xây dựng cơ chế xử lý ngoại lệ tập trung và nhất quán cho toàn bộ REST API."
  },
  {
    "id": 11,
    "topic": "Chapter 10: Jackson JSON Serialization Engine",
    "question": "Which default JSON library is bundled into `spring-boot-starter-web` for serializing and deserializing Java objects to/from JSON?",
    "options": [
      "Jackson (`ObjectMapper`)",
      "FastJSON 1.0",
      "XMLBeans",
      "JSON-RPC C++ Native"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 10): Thư viện Java hàng đầu thế giới với các annotation quen thuộc như `@JsonProperty`, `@JsonIgnore`, `@JsonFormat`.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 10): Spring Boot tích hợp mặc định thư viện Jackson (với lớp xử lý trung tâm là `ObjectMapper`) trong starter `spring-boot-starter-web` để tự động chuyển đổi đối tượng Java thành JSON và ngược lại.",
      "1": "Sai. FastJSON là thư viện của Alibaba, không phải bộ thư viện mặc định trong Spring Boot.",
      "2": "Sai. XMLBeans xử lý định dạng XML, không phải JSON.",
      "3": "Sai. Spring Boot sử dụng thư viện Java thuần túy, không dùng thư viện native C++ này."
    },
    "keyTakeaway": "Jackson là engine chuyển đổi JSON mặc định trong Spring Boot, tự động ánh xạ dữ liệu qua lại giữa Java POJO và JSON Payload."
  },
  {
    "id": 12,
    "topic": "Chapter 11: OpenAPI 3 Specification vs Swagger",
    "question": "What is the relationship between 'OpenAPI' and 'Swagger' according to Chapter 11?",
    "options": [
      "OpenAPI is the official vendor-neutral industry standard specification, while Swagger refers to the suite of commercial and open-source tools (like Swagger UI) built around the specification",
      "Swagger is for mobile apps, while OpenAPI is for relational databases",
      "OpenAPI has been completely banned by W3C",
      "They are two competing programming languages"
    ],
    "correct": 0,
    "hint": "Slide 3 & 4 (Ch 11): SmartBear đã tặng bản đặc tả Swagger 2.0 cho tổ chức OpenAPI Initiative (thuộc Linux Foundation) để phát triển thành chuẩn quốc tế OpenAPI 3.0.",
    "explanations": {
      "0": "Chính xác! Slide 3 & 4 (Ch 11): OpenAPI Specification (OAS) là chuẩn đặc tả tài liệu API quốc tế phi lợi nhuận (hiện hành phiên bản 3.x). Còn Swagger là tên gọi của bộ công cụ phần mềm (do SmartBear phát triển) gồm Swagger UI, Swagger Editor, Swagger Codegen nhằm trực quan hóa và hiện thực hóa bản đặc tả đó.",
      "1": "Sai. Cả hai đều hướng tới tài liệu hóa các dịch vụ web RESTful trên mọi nền tảng.",
      "2": "Sai. OpenAPI là chuẩn công nghiệp phổ biến nhất thế giới hiện nay.",
      "3": "Sai. Cả hai không phải là ngôn ngữ lập trình; chúng là đặc tả cấu trúc dữ liệu JSON/YAML và bộ công cụ tương ứng."
    },
    "keyTakeaway": "OpenAPI là bản đặc tả tiêu chuẩn công nghiệp (Specification), còn Swagger là bộ công cụ (Tools) bao gồm Swagger UI dùng để trực quan hóa bản đặc tả đó."
  },
  {
    "id": 13,
    "topic": "Chapter 11: SpringDoc Dependency for Spring Boot 3",
    "question": "Which dependency is modernly used in Spring Boot 3 projects to automatically generate OpenAPI 3 documentation and Swagger UI?",
    "options": [
      "`springdoc-openapi-starter-webmvc-ui`",
      "`springfox-swagger2-legacy`",
      "`swagger-core-jre7`",
      "`apache-axis-soap-starter`"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 11): SpringFox đã ngừng phát triển cho Spring Boot 3; thư viện hiện đại duy nhất được khuyến nghị là SpringDoc.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 11): Trong Spring Boot 3 (yêu cầu Java 17+ và Jakarta EE), gói `springdoc-openapi-starter-webmvc-ui` là chuẩn mực duy nhất hỗ trợ tạo tài liệu tự động OpenAPI 3 và tích hợp sẵn giao diện tương tác Swagger UI.",
      "1": "Sai. Springfox là thư viện cũ hỗ trợ Swagger 2 trên Spring Boot 2, đã ngưng phát triển và không tương thích với Spring Boot 3.",
      "2": "Sai. Thư viện này không phải là starter của Spring Boot.",
      "3": "Sai. Apache Axis là công cụ cho giao thức SOAP cổ điển."
    },
    "keyTakeaway": "Dự án Spring Boot 3 hiện đại sử dụng thư viện `springdoc-openapi-starter-webmvc-ui` để tự động hóa tài liệu chuẩn OpenAPI 3 và Swagger UI."
  },
  {
    "id": 14,
    "topic": "Chapter 11: Swagger UI Access Endpoint",
    "question": "By default, at which URL path can developers access the interactive Swagger UI web interface in a SpringDoc-enabled Spring Boot application?",
    "options": [
      "`http://localhost:8080/swagger-ui/index.html`",
      "`http://localhost:8080/docs/html/api.exe`",
      "`http://localhost:8080/api/view/swagger.pdf`",
      "`http://localhost:8080/database/admin/ui`"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 11): Giao diện web trực quan của Swagger UI cho phép thử nghiệm trực tiếp các endpoint API.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 11): Đường dẫn mặc định để mở giao diện kiểm thử tương tác Swagger UI trong SpringDoc là `/swagger-ui/index.html` (hoặc chuyển hướng từ `/swagger-ui.html`).",
      "1": "Sai. Trình duyệt không mở file thực thi `.exe` để xem tài liệu API.",
      "2": "Sai. Swagger UI là ứng dụng web tương tác HTML/JS, không phải file tài liệu tĩnh PDF.",
      "3": "Sai. Đường dẫn này giống trang quản trị CSDL, không phải Swagger UI."
    },
    "keyTakeaway": "Swagger UI được truy cập mặc định thông qua đường dẫn `http://localhost:8080/swagger-ui/index.html` trên máy chủ Spring Boot."
  },
  {
    "id": 15,
    "topic": "Chapter 11: OpenAPI Raw Specification Endpoint",
    "question": "Where can clients and automation tools download the raw JSON/YAML OpenAPI specification in SpringDoc?",
    "options": [
      "`http://localhost:8080/v3/api-docs`",
      "`http://localhost:8080/swagger-raw.zip`",
      "`http://localhost:8080/api/schema.txt`",
      "`http://localhost:8080/download-all-code`"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 11): Endpoint trả về cấu trúc dữ liệu JSON thuần túy chuẩn OpenAPI phiên bản 3.",
    "explanations": {
      "0": "Chính xác! Slide 11 (Ch 11): SpringDoc tự động sinh dữ liệu đặc tả thô (raw OpenAPI specification) định dạng JSON tại đường dẫn `/v3/api-docs` (hoặc `/v3/api-docs.yaml`). Đường dẫn này thường được dùng cho các công cụ CI/CD hoặc Postman import.",
      "1": "Sai. Đặc tả không được nén thành file zip.",
      "2": "Sai. Đường dẫn chuẩn không phải là `schema.txt`.",
      "3": "Sai. Endpoint này không tải mã nguồn dự án."
    },
    "keyTakeaway": "Bản đặc tả định dạng JSON chuẩn OpenAPI 3 được cung cấp tự động tại endpoint `http://localhost:8080/v3/api-docs`."
  },
  {
    "id": 16,
    "topic": "Chapter 11: Documenting Endpoints with `@Operation`",
    "question": "Which OpenAPI 3 annotation is placed on controller methods to provide a human-readable summary and detailed description of the operation?",
    "options": [
      "`@Operation(summary = \"Get student by ID\", description = \"Returns details of an enrolled student\")`",
      "`@DocMethod(name = \"Get student\")`",
      "`@SwaggerInfo(title = \"Student\")`",
      "`@ApiFunction(action = \"read\")`"
    ],
    "correct": 0,
    "hint": "Slide 14 (Ch 11): Annotation thuộc gói `io.swagger.v3.oas.annotations.Operation`.",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 11): Annotation `@Operation` của OpenAPI 3 cho phép định nghĩa tiêu đề vắn tắt (`summary`) và tài liệu chi tiết (`description`) cho từng phương thức API trong Swagger UI.",
      "1": "Sai. `@DocMethod` không phải là annotation của OpenAPI.",
      "2": "Sai. `@SwaggerInfo` không tồn tại; thông tin toàn cục ứng dụng dùng `@OpenAPIDefinition`.",
      "3": "Sai. `@ApiFunction` không tồn tại trong chuẩn OpenAPI 3."
    },
    "keyTakeaway": "Sử dụng annotation `@Operation(summary = \"...\", description = \"...\")` để mô tả mục đích và tài liệu chi tiết cho từng endpoint REST API."
  },
  {
    "id": 17,
    "topic": "Chapter 11: Documenting Responses with `@ApiResponse`",
    "question": "How do you document multiple potential HTTP response codes (e.g. 200 OK, 404 Not Found) using OpenAPI 3 annotations?",
    "options": [
      "`@ApiResponses(value = { @ApiResponse(responseCode = \"200\", description = \"Success\"), @ApiResponse(responseCode = \"404\", description = \"Not found\") })`",
      "`@ResponseCodes(200, 404)`",
      "`@HttpStatusCodes({ \"200\", \"404\" })`",
      "`@DocReturns(codes = \"200 and 404\")`"
    ],
    "correct": 0,
    "hint": "Slide 16 (Ch 11): Container annotation `@ApiResponses` chứa mảng các annotation con `@ApiResponse`.",
    "explanations": {
      "0": "Chính xác! Slide 16 (Ch 11): Chuẩn OpenAPI 3 sử dụng `@ApiResponses` để bọc danh sách các `@ApiResponse(responseCode = \"...\", description = \"...\")`, giúp Swagger UI hiển thị chi tiết các tình huống thành công hay thất bại cùng cấu trúc dữ liệu trả về.",
      "1": "Sai. `@ResponseCodes` không phải là annotation của Swagger/OpenAPI.",
      "2": "Sai. `@HttpStatusCodes` không tồn tại.",
      "3": "Sai. `@DocReturns` không phải annotation chuẩn."
    },
    "keyTakeaway": "Dùng `@ApiResponses` chứa các annotation con `@ApiResponse` để tài liệu hóa các mã phản hồi HTTP có thể xảy ra và ý nghĩa ngữ nghĩa của chúng."
  },
  {
    "id": 18,
    "topic": "Chapter 11: Preventing Documentation Drift",
    "question": "What is 'Documentation Drift' and how does code-first OpenAPI tooling in Spring Boot resolve it?",
    "options": [
      "Documentation drift occurs when manual API docs fall out of sync with actual code changes; SpringDoc resolves it by auto-generating docs directly from code annotations and controller signatures at runtime",
      "Documentation drift is when text files slowly slide across computer screens due to graphics bugs",
      "Documentation drift is the process of translating English docs into French",
      "Documentation drift occurs when a server runs out of disk space"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 11): Khi sửa code mà quên sửa file Word/Excel/PDF tài liệu, tài liệu sẽ bị sai lệch so với hệ thống thực tế. Tiếp cận Code-First loại bỏ vấn đề này.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 11): Sự lệch pha tài liệu (Documentation Drift) xảy ra khi lập trình viên cập nhật mã nguồn (thêm tham số, đổi kiểu dữ liệu) nhưng quên cập nhật tài liệu viết tay. Các công cụ Code-First như SpringDoc đọc trực tiếp code và annotations để sinh tài liệu tức thì tại runtime, đảm bảo tài liệu luôn phản ánh chính xác 100% thực trạng hệ thống.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về đồ họa máy tính.",
      "2": "Sai. Không liên quan đến dịch thuật ngôn ngữ.",
      "3": "Sai. Tràn dung lượng đĩa cứng là vấn đề hạ tầng lưu trữ."
    },
    "keyTakeaway": "Tiếp cận Code-First với SpringDoc giải quyết triệt để lỗi Documentation Drift bằng cách tự động sinh tài liệu chuẩn xác từ mã nguồn và annotations của hệ thống."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_7_DATA;
}
