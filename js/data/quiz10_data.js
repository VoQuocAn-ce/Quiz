// QUIZ 10 DATA: Spring Security, NoSQL MongoDB & DevOps Tools (Chapters 13, 16, 19, 20, 21, 22)
const QUIZ_10_DATA = [
  {
    "id": 1,
    "topic": "Chapter 16: Authentication vs Authorization",
    "question": "What is the fundamental distinction between 'Authentication' and 'Authorization' in security systems (Slide 3)?",
    "options": [
      "Authentication verifies WHO you are (identity verification); Authorization verifies WHAT you are permitted to do (access permissions)",
      "Authentication is for desktop computers, while Authorization is strictly for mobile phones",
      "Authentication encrypts files, while Authorization deletes files",
      "There is no distinction; they are exact synonyms"
    ],
    "correct": 0,
    "hint": "Slide 3 (Ch 16): Khi đăng nhập bằng username/password là Authentication (Xác thực danh tính). Khi kiểm tra bạn có quyền ADMIN để xóa người dùng hay không là Authorization (Phân quyền truy cập).",
    "explanations": {
      "0": "Chính xác! Slide 3 (Ch 16): Authentication (Xác thực) trả lời câu hỏi: 'Bạn là ai?' (kiểm tra username/password, token). Còn Authorization (Phân quyền/Cấp quyền) trả lời câu hỏi: 'Bạn có được phép làm điều này không?' (kiểm tra Role, Permission, Authority).",
      "1": "Sai. Cả hai khái niệm an ninh mạng này áp dụng trên mọi loại thiết bị và nền tảng.",
      "2": "Sai. Không liên quan đến việc xóa file.",
      "3": "Sai. Đây là hai trụ cột bảo mật độc lập và liên kết chặt chẽ trong mọi hệ thống phần mềm."
    },
    "keyTakeaway": "Authentication xác minh danh tính người dùng (Bạn là ai); Authorization xác định quyền hạn truy cập của người dùng đó (Bạn được phép làm gì)."
  },
  {
    "id": 2,
    "topic": "Chapter 16: Digest Authentication Nonce Protection",
    "question": "According to Slide 8-9 (Ch 16), how does Digest Authentication enhance security over HTTP Basic Authentication?",
    "options": [
      "It uses a nonce (a unique one-time number) combined with a cryptographic hash to prevent replay attacks, without sending the password in plain text",
      "It requires users to mail physical letters to the server administrator",
      "It requires a retina biometric scan on every web page visit",
      "It deletes all cookies immediately upon form submission"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 16): 'Digest Authentication: More secure than Basic Authentication. Uses a nonce (one-time value) to prevent replay attacks. Credentials are not sent in plain text'.",
    "explanations": {
      "0": "Chính xác! Slide 8 & 9 (Ch 16): Digest Authentication khắc phục nhược điểm gửi mật khẩu Base64 rõ của Basic Auth bằng cách sử dụng giá trị `nonce` (number used once - số ngẫu nhiên dùng 1 lần do server cấp) kết hợp thuật toán băm (MD5/SHA), giúp chống lại các cuộc tấn công phát lại (replay attacks).",
      "1": "Sai. Đây là một câu đùa phi lý.",
      "2": "Sai. Không yêu cầu quét sinh trắc học võng mạc.",
      "3": "Sai. Cơ chế Digest diễn ra qua các tiêu đề HTTP Authorization, không liên quan đến xóa cookie."
    },
    "keyTakeaway": "Digest Authentication sử dụng giá trị nonce (dùng 1 lần) và băm mật khẩu để ngăn chặn tấn công phát lại (Replay Attacks), an toàn hơn Basic Auth."
  },
  {
    "id": 3,
    "topic": "Chapter 16: JSON Web Token (JWT) Anatomy",
    "question": "What are the three components of a JSON Web Token (JWT) separated by dots (Slide 14)?",
    "options": [
      "`Header . Payload . Signature`",
      "`Username . Password . Database`",
      "`Host . Port . Protocol`",
      "`Public . Protected . Private`"
    ],
    "correct": 0,
    "hint": "Slide 14 (Ch 16): Cấu trúc chuỗi JWT chuẩn: `xxxxx.yyyyy.zzzzz` tương ứng với 3 phần được mã hóa Base64URL.",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 16): Một chuỗi JWT gồm 3 phần ngăn cách bởi dấu chấm `.`: 1) Header (chứa thuật toán mã hóa như HS256 và kiểu token), 2) Payload (chứa các claims như sub, username, roles, exp), 3) Signature (chữ ký số dùng secret key để đảm bảo token không bị giả mạo).",
      "1": "Sai. Không bao giờ lưu trực tiếp password trong chuỗi JWT.",
      "2": "Sai. Đây là các thành phần của địa chỉ mạng socket.",
      "3": "Sai. Đây là các access modifier trong lập trình hướng đối tượng."
    },
    "keyTakeaway": "JSON Web Token (JWT) bao gồm 3 phần ngăn cách bởi dấu chấm: Header (thuật toán), Payload (dữ liệu claims), và Signature (chữ ký số xác thực tính toàn vẹn)."
  },
  {
    "id": 4,
    "topic": "Chapter 16: Spring Security 6 `SecurityFilterChain`",
    "question": "In modern Spring Boot 3 / Spring Security 6, how is web security configured after `WebSecurityConfigurerAdapter` was deprecated?",
    "options": [
      "By declaring a `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` method",
      "By writing XML configuration files inside the Apache Tomcat root directory",
      "By extending `Thread` and running a while(true) loop",
      "By creating a static HTML page named `security.html`"
    ],
    "correct": 0,
    "hint": "Spring Security 6 chuyển sang mô hình cấu hình dựa trên Component/Bean thuần túy, định nghĩa chuỗi bộ lọc bảo mật thông qua `SecurityFilterChain`.",
    "explanations": {
      "0": "Chính xác! Trong Spring Security 6 (Spring Boot 3), lớp kế thừa `WebSecurityConfigurerAdapter` đã bị xóa bỏ hoàn toàn. Lập trình viên định nghĩa cấu hình bảo mật bằng cách khai báo một `@Bean` trả về `SecurityFilterChain` nhận đối số `HttpSecurity` và cấu hình qua biểu thức lambda (`authorizeHttpRequests`, `csrf`, `sessionManagement`).",
      "1": "Sai. Cấu hình XML là phong cách cũ của Spring Framework thời kỳ đầu.",
      "2": "Sai. Vòng lặp vô hạn sẽ làm treo ứng dụng.",
      "3": "Sai. File tĩnh HTML không thể cấu hình an ninh hệ thống."
    },
    "keyTakeaway": "Spring Security 6 cấu hình bảo mật thông qua việc khai báo `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` sử dụng cú pháp Lambda DSL."
  },
  {
    "id": 5,
    "topic": "Chapter 16: BCrypt Password Hashing",
    "question": "Why should passwords ALWAYS be hashed using `BCryptPasswordEncoder` before being stored in the database?",
    "options": [
      "BCrypt is a one-way salted hashing algorithm with an adjustable work factor, making stored passwords immune to rainbow table attacks and brute force cracking even if the database is leaked",
      "BCrypt translates passwords into plain English text so administrators can read them easily",
      "BCrypt makes database queries 1000 times faster",
      "BCrypt compresses passwords so they take 0 bytes of disk space"
    ],
    "correct": 0,
    "hint": "Slide 20 (Ch 16): Tuyệt đối không bao giờ lưu mật khẩu dạng bản rõ (plain text). BCrypt tự động sinh 'muối' (salt) ngẫu nhiên cho từng mật khẩu.",
    "explanations": {
      "0": "Chính xác! Slide 20 (Ch 16): `BCryptPasswordEncoder` thực hiện băm một chiều (one-way hashing) kèm salt ngẫu nhiên cho mỗi bản ghi. Ngay cả khi hai người dùng có mật khẩu giống nhau, chuỗi băm của họ vẫn khác biệt. Thuật toán này có độ trễ cố ý (work factor) giúp chống lại các cuộc tấn công dò mật khẩu (brute force) và tra bảng cầu vồng (rainbow tables).",
      "1": "Sai. BCrypt băm mật khẩu thành chuỗi ký tự ngẫu nhiên không thể đảo ngược, người quản trị cũng không thể đọc được mật khẩu gốc.",
      "2": "Sai. Quá trình băm cố tình tốn thêm CPU để chống hacker dò mật khẩu nhanh.",
      "3": "Sai. Chuỗi băm BCrypt luôn có độ dài cố định 60 ký tự."
    },
    "keyTakeaway": "Luôn dùng `BCryptPasswordEncoder` để băm mật khẩu một chiều kèm muối (salt), bảo vệ tuyệt đối an toàn dữ liệu người dùng ngay cả khi cơ sở dữ liệu bị lộ."
  },
  {
    "id": 6,
    "topic": "Chapter 16: Method-Level Security with `@PreAuthorize`",
    "question": "Which annotation enables declarative method-level role checking like `@PreAuthorize(\"hasRole('ADMIN')\")` in Spring Boot 3?",
    "options": [
      "`@EnableMethodSecurity` on a `@Configuration` class",
      "`@TurnOnSecurity`",
      "`@EnableAllRoles`",
      "`@CheckPermissionsAlways`"
    ],
    "correct": 0,
    "hint": "Slide 25 (Ch 16): Thay thế cho annotation cũ `@EnableGlobalMethodSecurity` trong các phiên bản Spring Boot trước.",
    "explanations": {
      "0": "Chính xác! Slide 25 (Ch 16): Thêm annotation `@EnableMethodSecurity` trên lớp cấu hình bảo mật sẽ kích hoạt hỗ trợ SpEL (Spring Expression Language) cho các annotation phân quyền trên phương thức như `@PreAuthorize(\"hasRole('ADMIN')\")` hoặc `@PostAuthorize`.",
      "1": "Sai. `@TurnOnSecurity` không tồn tại trong Spring Framework.",
      "2": "Sai. `@EnableAllRoles` không phải annotation của Spring.",
      "3": "Sai. `@CheckPermissionsAlways` không tồn tại."
    },
    "keyTakeaway": "Sử dụng `@EnableMethodSecurity` trên lớp cấu hình để kích hoạt tính năng kiểm soát phân quyền cấp phương thức bằng `@PreAuthorize`."
  },
  {
    "id": 7,
    "topic": "Chapter 19: 4 Categories of NoSQL Databases",
    "question": "According to Slide 4 (Ch 19), what are the 4 main types of NoSQL databases and their example technologies?",
    "options": [
      "Document Stores (MongoDB), Key-Value Stores (Redis), Wide-Column Stores (Cassandra), and Graph Databases (Neo4j)",
      "Relational, SQL, Access, and Excel",
      "PDF, Word, Text, and PowerPoint",
      "Chrome, Firefox, Safari, and Edge"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 19): 4 loại CSDL NoSQL phân loại theo mô hình lưu trữ: Document, Key-Value, Wide-Column, Graph.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 19) phân loại rõ: 1) Document Databases (MongoDB, Couchbase); 2) Key-Value Stores (Redis, Memcached); 3) Wide-Column Stores (Cassandra, HBase); 4) Graph Databases (Neo4j).",
      "1": "Sai. Đây là các hệ quản trị CSDL quan hệ hoặc bảng tính, không phải 4 loại NoSQL.",
      "2": "Sai. Đây là các định dạng tài liệu văn phòng.",
      "3": "Sai. Đây là danh sách các trình duyệt web."
    },
    "keyTakeaway": "4 phân loại CSDL NoSQL chính: Document (MongoDB), Key-Value (Redis), Wide-Column (Cassandra), và Graph (Neo4j)."
  },
  {
    "id": 8,
    "topic": "Chapter 19: MongoDB Document Architecture & BSON",
    "question": "How does MongoDB store data internally in collections (Slide 6 & 10)?",
    "options": [
      "In flexible, binary JSON-like structures called BSON (Binary JSON) documents containing typed key-value pairs",
      "In fixed-width ASCII comma-separated values (CSV) text files",
      "In binary compiled Java bytecode classes",
      "In physical magnetic tape tracks"
    ],
    "correct": 0,
    "hint": "Slide 6 & 10 (Ch 19): 'MongoDB stores data in flexible, JSON-like documents called BSON. Documents are grouped into Collections'.",
    "explanations": {
      "0": "Chính xác! Slide 6 & 10 (Ch 19): MongoDB lưu trữ dữ liệu dưới dạng các Document tuân theo định dạng BSON (Binary JSON). BSON mở rộng định dạng JSON bằng cách hỗ trợ thêm các kiểu dữ liệu phong phú như Date, Binary data, và ObjectId, cho phép tốc độ quét và phân tích nhị phân cực nhanh.",
      "1": "Sai. CSV không hỗ trợ cấu trúc dữ liệu lồng nhau phức tạp và không tối ưu truy vấn.",
      "2": "Sai. MongoDB không lưu trữ Java bytecode.",
      "3": "Sai. Đây là công nghệ lưu trữ băng từ cổ điển."
    },
    "keyTakeaway": "MongoDB lưu trữ các bản ghi dưới dạng tài liệu BSON (Binary JSON) linh hoạt (schema-less), cho phép lồng mảng và đối tượng con phức tạp."
  },
  {
    "id": 9,
    "topic": "Chapter 19: MongoDB Primary Key `_id` & `ObjectId`",
    "question": "What is the default primary key field in every MongoDB document, and what is its standard data type (Slide 10)?",
    "options": [
      "`_id` with type `ObjectId` (a 12-byte BSON identifier encoding timestamp, machine ID, process ID, and counter)",
      "`primaryKey` with type `AutoIncrementInteger`",
      "`id` with type `StringUUID4`",
      "`row_number` with type `BigInt`"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 19): 'Stores data in flexible documents: { \"_id\": ObjectId(\"5f49c2482c3d190000000000\"), ... }'.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 19): Mọi tài liệu MongoDB bắt buộc phải có một trường khóa chính tên là `_id`. Nếu người dùng không chỉ định, MongoDB sẽ tự động sinh giá trị kiểu `ObjectId` gồm 12 byte nhị phân (chứa 4 byte dấu thời gian timestamp, 5 byte định danh máy/tiến trình, và 3 byte số đếm tăng dần).",
      "1": "Sai. Tên trường mặc định trong MongoDB là `_id`, không phải `primaryKey`.",
      "2": "Sai. Kiểu mặc định là `ObjectId`, không phải chuỗi UUID.",
      "3": "Sai. `row_number` không phải là khóa chính của MongoDB."
    },
    "keyTakeaway": "Mọi tài liệu MongoDB đều có trường khóa chính mặc định là `_id` với giá trị là một `ObjectId` 12-byte chứa dấu thời gian khởi tạo độc nhất."
  },
  {
    "id": 10,
    "topic": "Chapter 19: MongoDB Shell CRUD Commands",
    "question": "Which MongoDB shell command correctly inserts a single document into the `students` collection (Slide 11)?",
    "options": [
      "`db.students.insertOne({ name: \"Alice\", gpa: 3.8 })`",
      "`INSERT INTO students VALUES ('Alice', 3.8)`",
      "`db.insert('students', 'Alice', 3.8)`",
      "`students.createRecord({ name: \"Alice\" })`"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 19): 'Create: db.<collection_name>.insertOne() or db.<collection_name>.insertMany()'.",
    "explanations": {
      "0": "Chính xác! Slide 11 (Ch 19): Cú pháp CRUD tiêu chuẩn của MongoDB: Tạo mới dùng `db.collection.insertOne()` hoặc `insertMany()`; Đọc dùng `find()`, `findOne()`; Cập nhật dùng `updateOne()`, `updateMany()`; Xóa dùng `deleteOne()`, `deleteMany()`.",
      "1": "Sai. Đây là cú pháp SQL của các hệ quản trị CSDL quan hệ (RDBMS), không phải MongoDB.",
      "2": "Sai. Cú pháp không hợp lệ trong Mongo shell.",
      "3": "Sai. `createRecord` không tồn tại trong MongoDB API."
    },
    "keyTakeaway": "Trong MongoDB Shell, sử dụng lệnh `db.<collection>.insertOne({...})` để thêm một tài liệu mới vào tập hợp."
  },
  {
    "id": 11,
    "topic": "Chapter 20: Spring Data MongoDB Annotations",
    "question": "Which Spring Data MongoDB annotation maps a Java domain class to a specific MongoDB collection (Slide 6)?",
    "options": [
      "`@Document(collection = \"students\")`",
      "`@Entity`",
      "`@Table(name = \"students\")`",
      "`@MongoTable`"
    ],
    "correct": 0,
    "hint": "Slide 6 (Ch 20): Khác với JPA dùng `@Entity` và `@Table`, Spring Data MongoDB sử dụng annotation riêng biệt đại diện cho tài liệu NoSQL.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 20): Annotation `@Document(collection = \"students\")` đánh dấu một lớp Java là một tài liệu được quản lý bởi MongoDB và chỉ định tên tập hợp (collection) lưu trữ trong cơ sở dữ liệu.",
      "1": "Sai. `@Entity` là annotation tiêu chuẩn của JPA dành cho CSDL quan hệ (RDBMS).",
      "2": "Sai. `@Table` thuộc về JPA dành cho bảng CSDL quan hệ.",
      "3": "Sai. `@MongoTable` không tồn tại trong Spring Data MongoDB."
    },
    "keyTakeaway": "Sử dụng annotation `@Document(collection = \"...\")` để ánh xạ một lớp Java Model thành một Document Collection trong MongoDB."
  },
  {
    "id": 12,
    "topic": "Chapter 20: Spring Data `MongoRepository`",
    "question": "Which interface should your data access repository extend to perform CRUD operations on a `Student` document with String ID in Spring Data (Slide 6)?",
    "options": [
      "`public interface StudentRepository extends MongoRepository<Student, String>`",
      "`public interface StudentRepository extends JpaRepository<Student, String>`",
      "`public class StudentRepository implements SQLDatabase`",
      "`public interface StudentRepository extends NoSqlInterface`"
    ],
    "correct": 0,
    "hint": "Slide 6 (Ch 20): 'Core Concepts: Repositories - Define, Don't Implement. Create interfaces extending MongoRepository<Entity, IDType>'.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 20): Kế thừa `MongoRepository<Student, String>` cung cấp sẵn đầy đủ các phương thức CRUD (`save`, `findById`, `findAll`, `deleteById`), phân trang và sắp xếp riêng biệt cho MongoDB mà lập trình viên không cần viết bất kỳ dòng mã hiện thực nào.",
      "1": "Sai. `JpaRepository` dùng cho Hibernate và các cơ sở dữ liệu quan hệ (RDBMS).",
      "2": "Sai. Repository trong Spring Data là Interface, không phải class triển khai `SQLDatabase`.",
      "3": "Sai. `NoSqlInterface` không tồn tại trong Spring Data."
    },
    "keyTakeaway": "Kế thừa interface `MongoRepository<T, ID>` để nhận ngay toàn bộ các phương thức thao tác dữ liệu CRUD NoSQL được Spring Data tạo mã tự động."
  },
  {
    "id": 13,
    "topic": "Chapter 21: Embedded Documents vs `@DBRef`",
    "question": "When modeling relationships in MongoDB with Spring Data, when should you use an Embedded Document (nested POJO) instead of `@DBRef`?",
    "options": [
      "Use embedded documents when the child data is tightly bound, accessed together with the parent, and has a 'Contains' relationship (e.g. `Address` inside `User`)",
      "Always use `@DBRef` for every single field in the application",
      "Embedded documents are not supported in MongoDB",
      "Only when the child data contains more than 10 gigabytes of text"
    ],
    "correct": 0,
    "hint": "Mô hình hướng tài liệu ưu tiên nhúng (Embed) dữ liệu con vào trong cha để truy vấn nhanh chỉ trong 1 lần đọc mà không cần JOIN.",
    "explanations": {
      "0": "Chính xác! Triết lý mô hình hóa NoSQL: Nếu dữ liệu con luôn đi kèm với cha (như địa chỉ của người dùng, hoặc các dòng chi tiết hóa đơn), việc nhúng trực tiếp (Embedding) thành đối tượng con bên trong tài liệu cha mang lại hiệu năng đọc ghi vượt trội vì không cần thực hiện nhiều vòng truy vấn tham chiếu.",
      "1": "Sai. Lạm dụng `@DBRef` biến MongoDB thành một CSDL quan hệ chắp vá với hiệu năng kém.",
      "2": "Sai. Embedded Documents là tính năng cốt lõi nền tảng của MongoDB.",
      "3": "Sai. Một Document trong MongoDB bị giới hạn kích thước tối đa là 16 Megabytes (BSON limit)."
    },
    "keyTakeaway": "Ưu tiên nhúng tài liệu (Embedded Documents) cho các dữ liệu phụ thuộc mật thiết vào cha để tối ưu tốc độ đọc dữ liệu mà không cần truy vấn tham chiếu phụ."
  },
  {
    "id": 14,
    "topic": "Chapter 21: MongoDB Aggregation Pipeline",
    "question": "What is the purpose of the MongoDB Aggregation Pipeline (Slide 7)?",
    "options": [
      "To perform complex multi-stage data processing and transformation (like `$match`, `$group`, `$sort`, `$project`) directly within the database engine",
      "To restart the computer whenever an error occurs",
      "To convert MongoDB into an email server",
      "To delete all indexes from the hard drive"
    ],
    "correct": 0,
    "hint": "Slide 7 (Ch 19 & 21): 'Aggregation Framework: Perform complex data analysis and transformations directly within the database'.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 19 & 21): Khung tổng hợp Aggregation Pipeline của MongoDB cho phép xử lý dữ liệu qua nhiều giai đoạn nối tiếp (pipeline stages) tương tự như SQL `GROUP BY`, `SUM`, `AVG`, `HAVING` nhưng mạnh mẽ hơn nhiều, thực thi trực tiếp trên database server.",
      "1": "Sai. Không liên quan đến việc khởi động lại phần cứng.",
      "2": "Sai. MongoDB là CSDL, không phải email server.",
      "3": "Sai. Pipeline tổng hợp không xóa chỉ mục của hệ thống."
    },
    "keyTakeaway": "MongoDB Aggregation Pipeline cung cấp khung xử lý dữ liệu đa giai đoạn hùng mạnh (`$match`, `$group`, `$sort`) ngay tại tầng cơ sở dữ liệu."
  },
  {
    "id": 15,
    "topic": "Chapter 22: Spring Boot Actuator Purpose",
    "question": "What is the primary purpose of the `spring-boot-starter-actuator` dependency in production environments (Slide 4)?",
    "options": [
      "To provide production-ready features for monitoring and managing the application, including health checks, metrics, and environment details",
      "To actuate physical robotic arms connected via USB",
      "To automatically fix syntax errors in Java code",
      "To increase internet download speed by 200%"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 22): 'Why Spring Boot for DevOps? Monitoring & management: Built-in support for health checks and metrics via Spring Boot Actuator'.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 22): Spring Boot Actuator cung cấp sẵn các endpoint HTTP và JMX sẵn sàng cho production để giám sát tình trạng hoạt động (health), thu thập chỉ số hiệu năng (metrics), xem luồng dữ liệu (threads), bộ nhớ heap, và trạng thái môi trường của ứng dụng mà không cần viết mã thủ công.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về cánh tay robot cơ khí.",
      "2": "Sai. Lỗi cú pháp phải được sửa trước khi biên dịch bằng javac.",
      "3": "Sai. Actuator không thể làm tăng tốc độ đường truyền vật lý của nhà mạng."
    },
    "keyTakeaway": "Spring Boot Actuator cung cấp các công cụ và endpoint sẵn sàng cho Production để giám sát trạng thái sức khỏe (health checks) và chỉ số vận hành (metrics) của hệ thống."
  },
  {
    "id": 16,
    "topic": "Chapter 22: Essential Actuator Endpoints",
    "question": "Which Actuator endpoint is primarily used by container orchestrators (like Kubernetes) and cloud platforms to determine if an application is alive and healthy?",
    "options": [
      "`/actuator/health`",
      "`/actuator/killserver`",
      "`/actuator/database/delete`",
      "`/actuator/hack`"
    ],
    "correct": 0,
    "hint": "Endpoint trả về JSON dạng `{\"status\": \"UP\"}` báo hiệu ứng dụng đang hoạt động tốt.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 22): Endpoint `/actuator/health` trả về trạng thái tổng thể của ứng dụng (`UP`, `DOWN`, `OUT_OF_SERVICE`). Các hệ thống điều phối container như Kubernetes sử dụng endpoint này làm Liveness Probe và Readiness Probe để tự động khởi động lại container khi gặp sự cố.",
      "1": "Sai. Không có endpoint mặc định tên là `killserver` (đóng app dùng `/shutdown` nếu được bật).",
      "2": "Sai. Actuator không cung cấp endpoint xóa database.",
      "3": "Sai. Không có endpoint nào như vậy."
    },
    "keyTakeaway": "Endpoint `/actuator/health` là tiêu chuẩn công nghiệp được các nền tảng DevOps (Kubernetes, Docker) sử dụng để kiểm tra tình trạng sống còn (Health Check) của ứng dụng."
  },
  {
    "id": 17,
    "topic": "Chapter 22: Dockerfile for Spring Boot Microservices",
    "question": "Given a Spring Boot JAR file in `target/app.jar`, which Dockerfile instruction specifies the default command executed when the container starts?",
    "options": [
      "`ENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]`",
      "`RUN java -jar /app.jar`",
      "`START \"java app.jar\"`",
      "`EXECUTE [\"run\", \"java\"]`"
    ],
    "correct": 0,
    "hint": "Slide 7 (Ch 22): `ENTRYPOINT` định nghĩa lệnh chạy chính của container khi container được khởi tạo (khác với `RUN` chạy trong quá trình build image).",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 22): Chỉ thị `ENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]` cấu hình tiến trình khởi động mặc định của container Docker, chạy máy ảo JVM và thực thi file JAR tự chứa của Spring Boot.",
      "1": "Sai. `RUN` thực thi lệnh trong quá trình xây dựng (build time) để tạo layer image, không phải lệnh chạy lúc container start.",
      "2": "Sai. `START` không phải là lệnh hợp lệ trong cú pháp Dockerfile.",
      "3": "Sai. `EXECUTE` không phải từ khóa của Dockerfile."
    },
    "keyTakeaway": "Chỉ thị `ENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]` trong Dockerfile thiết lập câu lệnh thực thi file JAR của Spring Boot khi container khởi động."
  },
  {
    "id": 18,
    "topic": "Chapter 22: DevOps Principles in Modern Software",
    "question": "According to Slide 3 (Ch 22), what is the core objective of the DevOps practice in modern software engineering?",
    "options": [
      "To encourage communication, collaboration, integration, and automation between software development and IT operations teams to achieve continuous delivery",
      "To completely replace human programmers with robot hardware",
      "To stop writing code and only configure servers",
      "To eliminate testing before deploying to production"
    ],
    "correct": 0,
    "hint": "Slide 3 (Ch 22): 'DevOps is the practice that encourages communication, collaboration, integration, and automation between software development and operations teams'.",
    "explanations": {
      "0": "Chính xác! Slide 3 (Ch 22): Định nghĩa chuẩn: 'DevOps is the practice that encourages communication, collaboration, integration, and automation between software development and operations teams'. Mục tiêu là rút ngắn chu kỳ phát triển và đạt được khả năng phân phối liên tục (Continuous Delivery) với độ tin cậy cao.",
      "1": "Sai. DevOps là văn hóa và quy trình làm việc giữa các kỹ sư con người kết hợp các công cụ tự động hóa.",
      "2": "Sai. Phát triển phần mềm (Dev) vẫn là thành phần cốt lõi của DevOps.",
      "3": "Sai. Kiểm thử tự động (Automated Testing) là một trong những trụ cột quan trọng nhất của quy trình CI/CD trong DevOps."
    },
    "keyTakeaway": "DevOps là văn hóa kết hợp giao tiếp, cộng tác và tự động hóa giữa đội ngũ Phát triển (Dev) và Vận hành (Ops) nhằm đạt được quy trình phát hành phần mềm liên tục và ổn định."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_10_DATA;
}
