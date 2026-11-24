// QUIZ 9 DATA: Hibernate ORM Architecture, Entity Lifecycle & Mapping (Chapters 17 & 18)
const QUIZ_9_DATA = [
  {
    "id": 1,
    "topic": "Chapter 17: Object-Relational Mapping (ORM) Concept",
    "question": "What is the primary role of an Object-Relational Mapping (ORM) framework like Hibernate (Slide 4)?",
    "options": [
      "To act as a bridge between the object-oriented world of Java and the relational world of SQL databases, eliminating manual JDBC boilerplate",
      "To convert Java code into Adobe Photoshop images",
      "To replace the internet protocol with a local printer driver",
      "To delete all database tables whenever a user logs in"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 17): 'Hibernate is a powerful ORM framework... It acts as a bridge between the object-oriented world of Java and the relational world of databases, simplifying data persistence'.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 17): Hibernate đóng vai trò là cầu nối giữa mô hình hướng đối tượng của Java (Classes, Objects, Inheritance) và mô hình quan hệ của CSDL (Tables, Rows, Foreign Keys), giúp lập trình viên thao tác với dữ liệu thông qua đối tượng mà không cần viết các câu lệnh JDBC thủ công cồng kềnh.",
      "1": "Sai. Hibernate là framework dữ liệu backend, không phải phần mềm xử lý hình ảnh.",
      "2": "Sai. Hibernate không can thiệp vào driver máy in hay giao thức internet.",
      "3": "Sai. Hibernate bảo vệ và quản trị dữ liệu, không tự ý xóa CSDL."
    },
    "keyTakeaway": "Hibernate ORM là cầu nối tự động ánh xạ giữa các lớp đối tượng Java và các bảng trong cơ sở dữ liệu quan hệ, loại bỏ mã JDBC thủ công."
  },
  {
    "id": 2,
    "topic": "Chapter 17: Hibernate `SessionFactory` Characteristics",
    "question": "What are the core characteristics of Hibernate's `SessionFactory` interface (Slide 9-10)?",
    "options": [
      "It is a thread-safe, heavyweight factory object created once during application startup, responsible for creating Sessions and holding the optional second-level cache",
      "It is a short-lived, lightweight object that must be created on every single keystroke",
      "It is an interface that directly renders HTML pages inside web browsers",
      "It is deprecated and replaced by plain text files"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 17): 'SessionFactory is a factory of session... It is thread-safe, holds second level cache, and is usually created once per application'.",
    "explanations": {
      "0": "Chính xác! Slide 9 & 10 (Ch 17): `SessionFactory` là đối tượng nặng (heavyweight), an toàn đa luồng (thread-safe), khởi tạo một lần duy nhất lúc ứng dụng khởi động từ file cấu hình. Nó là nhà máy sản sinh ra các `Session` và quản lý Second-level Cache của Hibernate.",
      "1": "Sai. Đối tượng nhẹ (lightweight) và có vòng đời ngắn là `Session`, không phải `SessionFactory`.",
      "2": "Sai. `SessionFactory` thuộc tầng Persistence, không render HTML.",
      "3": "Sai. `SessionFactory` là trái tim kiến trúc của Hibernate, vẫn được sử dụng cốt lõi dưới nền JPA EntityManagerFactory."
    },
    "keyTakeaway": "`SessionFactory` là đối tượng khởi tạo một lần (Singleton/Heavyweight), an toàn luồng (Thread-safe), chuyên sản sinh các Session và quản lý bộ nhớ đệm cấp hai."
  },
  {
    "id": 3,
    "topic": "Chapter 17: Hibernate `Session` Characteristics",
    "question": "How does Hibernate's `Session` interface differ from `SessionFactory` (Slide 10)?",
    "options": [
      "`Session` is a lightweight, non-thread-safe, short-lived object that wraps a single JDBC connection and provides a mandatory first-level cache for CRUD operations",
      "`Session` is thread-safe and shared by millions of users simultaneously across the entire application",
      "`Session` is stored on client-side browser cookies",
      "`Session` cannot perform database insert or delete operations"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 17): 'The session object provides an interface between the application and database. It is a short-lived object, wraps JDBC connection, holds first-level cache (mandatory), and is NOT thread-safe'.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 17): `Session` là đối tượng nhẹ, có vòng đời ngắn (thường gắn liền với một request hoặc một transaction), KHÔNG an toàn đa luồng (non-thread-safe), bọc một kết nối JDBC vật lý và chứa First-level Cache bắt buộc.",
      "1": "Sai. `Session` không được chia sẻ giữa các luồng vì nó không an toàn đa luồng (not thread-safe).",
      "2": "Sai. Hibernate `Session` là đối tượng Java chạy trên RAM của máy chủ, không phải cookie trình duyệt.",
      "3": "Sai. `Session` cung cấp các phương thức cốt lõi `persist()`, `merge()`, `remove()`, `find()`."
    },
    "keyTakeaway": "`Session` là đối tượng nhẹ, không an toàn luồng (non-thread-safe), có vòng đời ngắn và chứa bộ nhớ đệm cấp một (First-level Cache) bắt buộc."
  },
  {
    "id": 4,
    "topic": "Chapter 17: Entity State - Transient",
    "question": "In the Hibernate Entity Lifecycle, when is an object considered to be in the 'Transient' state (Slide 12)?",
    "options": [
      "When the object has just been instantiated using the `new` operator in Java, has no database identifier (primary key), and is not associated with any active Hibernate Session",
      "When the object has been permanently deleted from the database hard drive",
      "When the object is stored inside a database transaction log",
      "When the object is encrypted using AES-256"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 17): Trạng thái sơ khai nhất khi bạn vừa viết `Student s = new Student('John');` - đối tượng chỉ tồn tại trên RAM của JVM.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 17): Trạng thái Transient (Tạm thời) là khi đối tượng mới được tạo bằng từ khóa `new`. Đối tượng này chưa có ID trong cơ sở dữ liệu và chưa hề được gắn kết với bất kỳ Hibernate Session nào; nếu mất tham chiếu nó sẽ bị Garbage Collector thu hồi.",
      "1": "Sai. Đối tượng đã bị đánh dấu xóa trong CSDL thuộc trạng thái `Removed`.",
      "2": "Sai. Đối tượng nằm trong session và tương ứng bản ghi CSDL thuộc trạng thái `Persistent` (Managed).",
      "3": "Sai. Mã hóa không phải là định nghĩa của trạng thái Transient."
    },
    "keyTakeaway": "Trạng thái Transient: Thực thể vừa được tạo bằng toán tử `new`, chưa có khóa chính ID trong cơ sở dữ liệu và chưa gắn kết với Hibernate Session."
  },
  {
    "id": 5,
    "topic": "Chapter 17: Entity State - Persistent & Automatic Dirty Checking",
    "question": "What happens when an entity is in the 'Persistent' (Managed) state and you invoke a setter method (e.g. `student.setName(\"Bob\")`) inside an active transaction?",
    "options": [
      "Hibernate tracks changes automatically via Dirty Checking and issues an SQL `UPDATE` statement upon transaction commit or session flush without needing manual update calls",
      "Nothing happens because persistent entities cannot be modified",
      "The program immediately throws an `EntityImmutableException`",
      "The database is automatically wiped and recreated"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 17): Một trong những tính năng kỳ diệu nhất của Hibernate: cơ chế 'Dirty Checking' tự động so sánh bản chụp ban đầu (snapshot) với trạng thái hiện tại.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 17): Khi một thực thể ở trạng thái Persistent (được quản lý bởi Session), Hibernate lưu lại bản chụp (snapshot) ban đầu của nó. Bất kỳ thay đổi nào qua setter sẽ được cơ chế Automatic Dirty Checking phát hiện và tự động sinh câu lệnh SQL `UPDATE` tương ứng khi commit giao dịch.",
      "1": "Sai. Thực thể Persistent hoàn toàn có thể thay đổi dữ liệu.",
      "2": "Sai. Không có ngoại lệ nào được ném ra.",
      "3": "Sai. CSDL không bị xóa."
    },
    "keyTakeaway": "Thực thể ở trạng thái Persistent được Hibernate giám sát qua cơ chế Automatic Dirty Checking; mọi thay đổi dữ liệu qua setter sẽ tự động được đồng bộ xuống CSDL khi commit."
  },
  {
    "id": 6,
    "topic": "Chapter 17: Entity State - Detached",
    "question": "How does an entity transition into the 'Detached' state in Hibernate (Slide 12)?",
    "options": [
      "When the Hibernate Session that was managing the entity is closed, cleared (`session.clear()`), or the entity is evicted (`session.evict(entity)`)",
      "When the computer loses internet connection",
      "When the Java class file is deleted from disk",
      "When the entity's primary key is changed to negative one"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 17): Thực thể đã từng có mặt trong DB và có ID, nhưng Session quản lý nó đã bị đóng (closed) hoặc tách rời.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 17): Trạng thái Detached (Tách rời) xảy ra khi thực thể có khóa chính trong DB nhưng Session quản lý nó đã bị đóng lại (`session.close()`), bị xóa trắng (`session.clear()`) hoặc thực thể bị đuổi ra khỏi session (`session.evict(entity)`). Các thay đổi trên đối tượng Detached sẽ không được tự động đồng bộ xuống DB trừ khi được gọi `session.merge()`.",
      "1": "Sai. Kết nối mạng không quyết định trạng thái trong mô hình bộ nhớ Hibernate.",
      "2": "Sai. File class vẫn nằm trong bộ nhớ JVM.",
      "3": "Sai. Khóa chính không tự động đổi sang số âm."
    },
    "keyTakeaway": "Thực thể chuyển sang trạng thái Detached khi Session quản lý nó bị đóng hoặc giải phóng; dữ liệu của nó không còn được Hibernate tự động theo dõi."
  },
  {
    "id": 7,
    "topic": "Chapter 17: `hbm2ddl.auto` Configuration Modes",
    "question": "Why is setting `spring.jpa.hibernate.ddl-auto=create` or `create-drop` extremely dangerous in a PRODUCTION environment?",
    "options": [
      "Because it drops and deletes all existing tables and data upon application startup",
      "Because it deletes the operating system kernel",
      "Because it disables all network firewalls",
      "Because it converts MySQL into SQLite"
    ],
    "correct": 0,
    "hint": "Slide 18 (Ch 17): `create` sẽ thực thi lệnh `DROP TABLE IF EXISTS` trước khi `CREATE TABLE` ở mỗi lần khởi động server!",
    "explanations": {
      "0": "Chính xác! Slide 18 (Ch 17): Chế độ `create` hoặc `create-drop` sẽ xóa bỏ toàn bộ các bảng hiện có trong cơ sở dữ liệu (`DROP TABLE`) rồi mới tạo lại từ đầu mỗi khi ứng dụng khởi chạy. Nếu cấu hình chế độ này trên môi trường Production, toàn bộ dữ liệu thực tế của khách hàng sẽ bị xóa sạch vĩnh viễn! Trên production chỉ nên dùng `validate` hoặc `none`.",
      "1": "Sai. Hibernate chỉ tác động trong phạm vi CSDL, không can thiệp vào kernel hệ điều hành.",
      "2": "Sai. Không ảnh hưởng đến tường lửa mạng.",
      "3": "Sai. DDL-auto không thay đổi loại hệ quản trị CSDL."
    },
    "keyTakeaway": "Chế độ `ddl-auto=create` xóa sạch toàn bộ bảng và dữ liệu cũ khi khởi động ứng dụng; tuyệt đối chỉ dùng `validate` hoặc `none` trên môi trường Production."
  },
  {
    "id": 8,
    "topic": "Chapter 17: Core JPA Entity Annotations",
    "question": "Which annotation specifies the primary key generation strategy using the database's auto-increment column (e.g. MySQL `AUTO_INCREMENT` or PostgreSQL `SERIAL`)?",
    "options": [
      "`@GeneratedValue(strategy = GenerationType.IDENTITY)`",
      "`@GeneratedValue(strategy = GenerationType.AUTO_INCREMENT)`",
      "`@PrimaryKeyStrategy(type = \"AUTO\")`",
      "`@Column(isAutoIncrement = true)`"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 17): `GenerationType.IDENTITY` dựa vào cột tự tăng tích hợp sẵn của hệ quản trị cơ sở dữ liệu.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 17): `GenerationType.IDENTITY` ủy quyền cho cơ chế cột tự tăng (identity column / auto_increment) của CSDL gán giá trị khóa chính khi câu lệnh SQL INSERT được thực thi.",
      "1": "Sai. Trong enum `GenerationType` chỉ có: `IDENTITY`, `SEQUENCE`, `TABLE`, và `AUTO`; không có `AUTO_INCREMENT`.",
      "2": "Sai. Annotation `@PrimaryKeyStrategy` không tồn tại trong JPA.",
      "3": "Sai. `@Column` không có thuộc tính `isAutoIncrement`."
    },
    "keyTakeaway": "Sử dụng `@GeneratedValue(strategy = GenerationType.IDENTITY)` để ánh xạ với các cột khóa chính tự động tăng (auto-increment) của cơ sở dữ liệu."
  },
  {
    "id": 9,
    "topic": "Chapter 17: `@Transient` Annotation Purpose",
    "question": "What is the purpose of placing `@Transient` on an entity field in Hibernate?",
    "options": [
      "It instructs Hibernate NOT to persist this field in the database table (it is ignored by ORM mapping)",
      "It marks the field as an encrypted credit card number",
      "It makes the field transition into an HTML button",
      "It forces the field to be saved in an external JSON file"
    ],
    "correct": 0,
    "hint": "Slide 24 (Ch 17): Dùng cho các trường tính toán tạm thời (ví dụ: `age` tính từ `birthDate`) mà bạn không muốn lưu thành cột trong CSDL.",
    "explanations": {
      "0": "Chính xác! Slide 24 (Ch 17): Annotation `@Transient` báo hiệu cho Hibernate biết rằng trường dữ liệu này chỉ dùng cho mục đích xử lý nội bộ trong bộ nhớ Java và KHÔNG được ánh xạ thành một cột trong bảng cơ sở dữ liệu.",
      "1": "Sai. Để mã hóa cần dùng AttributeConverter, không phải `@Transient`.",
      "2": "Sai. `@Transient` thuộc tầng dữ liệu JPA, không liên quan đến giao diện HTML.",
      "3": "Sai. Trường transient hoàn toàn bị bỏ qua khi lưu trữ."
    },
    "keyTakeaway": "`@Transient` chỉ định rằng thuộc tính Java này chỉ tồn tại trong bộ nhớ và sẽ không được ánh xạ hoặc lưu trữ vào bất kỳ cột nào trong bảng cơ sở dữ liệu."
  },
  {
    "id": 10,
    "topic": "Chapter 17: The `mappedBy` Attribute in Relationships",
    "question": "In a bidirectional `@OneToMany` / `@ManyToOne` relationship (e.g. `Department` and `Employee`), where MUST the `mappedBy` attribute be placed, and what does it indicate?",
    "options": [
      "On the `@OneToMany` side (inverse/non-owning side), pointing to the field name in the `@ManyToOne` owning entity that manages the foreign key",
      "On the `@ManyToOne` side only",
      "Inside the database configuration file only",
      "On every single attribute in both classes"
    ],
    "correct": 0,
    "hint": "Slide 30 (Ch 17): Bên sở hữu khóa ngoại (Owning side) là bên Many có chứa `@JoinColumn`. Bên One là bên bị sở hữu (Inverse side) phải dùng `mappedBy` để chỉ định.",
    "explanations": {
      "0": "Chính xác! Slide 30 (Ch 17): Trong quan hệ hai chiều, bên One (`@OneToMany`) là bên nghịch đảo (Inverse side) và bắt buộc phải khai báo `mappedBy = \"department\"` trỏ tới tên biến thuộc tính nằm trong lớp `Employee`. Điều này báo cho Hibernate biết không tạo bảng phụ thừa thãi mà dùng khóa ngoại ở bảng `Employee`.",
      "1": "Sai. Bên `@ManyToOne` là bên sở hữu khóa ngoại (Owning side), chứa `@JoinColumn`, không dùng `mappedBy`.",
      "2": "Sai. `mappedBy` là thuộc tính của JPA Annotation trên thực thể Java.",
      "3": "Sai. Chỉ một bên quan hệ nghịch đảo mới sử dụng `mappedBy`."
    },
    "keyTakeaway": "Thuộc tính `mappedBy` luôn đặt ở phía `@OneToMany` (bên không sở hữu khóa ngoại) trỏ tới tên trường ở thực thể con để ngăn sinh bảng nối thừa thãi."
  },
  {
    "id": 11,
    "topic": "Chapter 17: `@JoinColumn` Placement",
    "question": "Where is the `@JoinColumn(name = \"dept_id\")` annotation placed in a standard `@ManyToOne` relationship?",
    "options": [
      "Directly on the `@ManyToOne` association field in the owning entity, specifying the physical foreign key column name in that table",
      "On the database server's hardware mother board",
      "Inside the `index.html` head section",
      "On every getter method in the entire project"
    ],
    "correct": 0,
    "hint": "Slide 31 (Ch 17): Ví dụ trong lớp `Employee`: `@ManyToOne @JoinColumn(name = \"department_id\") private Department department;`.",
    "explanations": {
      "0": "Chính xác! Slide 31 (Ch 17): `@JoinColumn(name = \"department_id\")` được đặt trực tiếp trên trường `@ManyToOne` của lớp sở hữu (Owning side) để quy định tên cột khóa ngoại thực tế trong bảng CSDL.",
      "1": "Sai. Đây là câu đùa về phần cứng.",
      "2": "Sai. Không liên quan đến file HTML.",
      "3": "Sai. `@JoinColumn` chỉ đặt trên các trường quan hệ bảng."
    },
    "keyTakeaway": "`@JoinColumn(name = \"...\")` được đặt trên bên sở hữu (`@ManyToOne`) để xác định tên cột khóa ngoại vật lý trong bảng cơ sở dữ liệu."
  },
  {
    "id": 12,
    "topic": "Chapter 17: Fetch Types - LAZY vs EAGER Defaults",
    "question": "What are the default JPA fetch types for `@ManyToOne` and `@OneToMany` relationships respectively?",
    "options": [
      "`@ManyToOne` defaults to `FetchType.EAGER`; `@OneToMany` defaults to `FetchType.LAZY`",
      "Both default to `FetchType.EAGER`",
      "Both default to `FetchType.LAZY`",
      "`@ManyToOne` defaults to `FetchType.LAZY`; `@OneToMany` defaults to `FetchType.EAGER`"
    ],
    "correct": 0,
    "hint": "Slide 35 (Ch 17): Quy tắc chung trong JPA: Mọi quan hệ kết thúc bằng `...ToOne` đều mặc định là EAGER; mọi quan hệ kết thúc bằng `...ToMany` đều mặc định là LAZY.",
    "explanations": {
      "0": "Chính xác! Slide 35 (Ch 17): Theo đặc tả JPA: Các quan hệ trỏ tới một đối tượng (`@ManyToOne`, `@OneToOne`) mặc định là `EAGER` (tải ngay lập tức). Các quan hệ trỏ tới tập hợp danh sách (`@OneToMany`, `@ManyToMany`) mặc định là `LAZY` (chỉ tải khi thực sự được truy cập).",
      "1": "Sai. Nếu `@OneToMany` mà mặc định EAGER thì khi tải 1 khách hàng sẽ tự động kéo theo hàng triệu đơn hàng của họ vào RAM, gây sập bộ nhớ.",
      "2": "Sai. `@ManyToOne` mặc định là EAGER chứ không phải LAZY.",
      "3": "Sai. Đây là thứ tự đảo ngược hoàn toàn so với chuẩn JPA."
    },
    "keyTakeaway": "Quy ước chuẩn JPA: Các quan hệ đơn lẻ kết thúc bằng `ToOne` mặc định là `EAGER`, các quan hệ tập hợp kết thúc bằng `ToMany` mặc định là `LAZY`."
  },
  {
    "id": 13,
    "topic": "Chapter 17: CascadeType Propagation",
    "question": "What is the effect of setting `cascade = CascadeType.ALL` on a parent entity's `@OneToMany` relationship?",
    "options": [
      "Any persistence operation performed on the parent (save, update, delete, refresh) is automatically cascaded and applied to all associated child entities",
      "It deletes all tables in the entire database",
      "It turns off database transactions permanently",
      "It copies all data into an external Microsoft Excel spreadsheet"
    ],
    "correct": 0,
    "hint": "Slide 38 (Ch 17): Cơ chế 'Lan truyền thao tác' (Cascading) giúp khi lưu hoặc xóa một Đơn hàng (`Order`), toàn bộ các Dòng đơn hàng (`OrderItem`) con sẽ tự động được lưu hoặc xóa theo.",
    "explanations": {
      "0": "Chính xác! Slide 38 (Ch 17): `CascadeType.ALL` bao gồm tất cả các kiểu lan truyền: `PERSIST`, `MERGE`, `REMOVE`, `REFRESH`, `DETACH`. Khi gọi thao tác lưu hoặc xóa trên thực thể cha, Hibernate sẽ tự động áp dụng thao tác tương ứng lên toàn bộ các thực thể con liên kết.",
      "1": "Sai. Cascade chỉ tác động tới các thực thể con liên quan, không xóa các bảng khác.",
      "2": "Sai. Không ảnh hưởng đến cơ chế Transaction.",
      "3": "Sai. Không liên quan đến việc xuất file Excel."
    },
    "keyTakeaway": "`CascadeType.ALL` lan truyền mọi thao tác vòng đời (PERSIST, MERGE, REMOVE) từ thực thể cha sang các thực thể con phụ thuộc."
  },
  {
    "id": 14,
    "topic": "Chapter 18: First-Level Cache Mechanics",
    "question": "What is Hibernate's First-Level Cache according to Slide 9-10 (Ch 17)?",
    "options": [
      "A mandatory, Session-scoped cache enabled by default that stores managed entity instances for the duration of the current Session",
      "An optional cache stored on an external Redis server shared across the internet",
      "A browser cache stored inside Google Chrome",
      "A hardware cache on the CPU chip"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 17): 'Session holds a first-level cache (mandatory) of data'. Nếu bạn gọi `session.get(Student.class, 1L)` 2 lần trong cùng 1 session, lần thứ hai Hibernate lấy ngay từ RAM mà không sinh câu lệnh SQL.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 17): First-Level Cache (Bộ nhớ đệm cấp một) gắn liền với vòng đời của `Session`. Nó là tính năng bắt buộc và luôn được bật mặc định. Khi truy vấn một thực thể bằng ID nhiều lần trong cùng một Session, Hibernate chỉ phát sinh SQL ở lần đầu, các lần sau sẽ lấy trực tiếp từ bộ nhớ đệm cấp một này.",
      "1": "Sai. Cache chia sẻ dùng chung giữa các session là Second-Level Cache (có thể dùng Ehcache, Redis).",
      "2": "Sai. Đây là cache phía server của Hibernate, không phải browser cache.",
      "3": "Sai. Đây là cấu trúc dữ liệu Map trong Java heap memory, không phải L1/L2 cache trên chip CPU."
    },
    "keyTakeaway": "Bộ nhớ đệm cấp một (First-Level Cache) là bắt buộc, gắn liền với Session, giúp tái sử dụng các thực thể đã tải trong cùng một phiên làm việc mà không cần truy vấn lại CSDL."
  },
  {
    "id": 15,
    "topic": "Chapter 18: Second-Level Cache Scope",
    "question": "What is Hibernate's Second-Level Cache and how does it differ from First-Level Cache?",
    "options": [
      "It is an optional, SessionFactory-scoped cache shared across all sessions and transactions in the application, requiring a third-party caching provider (e.g. Ehcache, Infinispan)",
      "It is mandatory and cannot be disabled under any circumstances",
      "It only stores password hashes for user login",
      "It is stored in the browser's localStorage"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 17): 'SessionFactory holds second level cache (optional) of data'. Chia sẻ giữa các Session khác nhau trên toàn ứng dụng.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 17): Second-Level Cache là bộ nhớ đệm tùy chọn (optional) thuộc phạm vi của `SessionFactory`. Dữ liệu được chia sẻ xuyên suốt các `Session` khác nhau của ứng dụng. Để sử dụng, cần cấu hình nhà cung cấp cache ngoài như Ehcache hoặc Hazelcast.",
      "1": "Sai. Bộ nhớ đệm cấp hai là tùy chọn (optional) và mặc định bị tắt.",
      "2": "Sai. Nó lưu trữ dữ liệu thực thể hoặc kết quả truy vấn, không chỉ lưu mật khẩu.",
      "3": "Sai. Cache này nằm trên máy chủ ứng dụng Java, không nằm trên localStorage của trình duyệt."
    },
    "keyTakeaway": "Bộ nhớ đệm cấp hai (Second-Level Cache) có phạm vi toàn cục thuộc SessionFactory, dùng để chia sẻ dữ liệu thực thể giữa nhiều Session khác nhau."
  },
  {
    "id": 16,
    "topic": "Chapter 18: The N+1 Query Problem",
    "question": "What is the notorious 'N+1 Query Problem' in Hibernate / JPA (Slide 5 & 25)?",
    "options": [
      "Executing 1 initial query to fetch N parent records, which then inadvertently triggers N additional separate queries to load associated children for each parent",
      "A mathematical formula used to calculate database encryption keys",
      "An error when a developer creates N+1 tables in MySQL",
      "When a query takes N+1 hours to complete"
    ],
    "correct": 0,
    "hint": "Ví dụ: Lấy 100 sinh viên (1 query). Khi duyệt qua từng sinh viên để in tên Khoa, Hibernate lại phát sinh thêm 100 câu query riêng biệt nữa (1 + 100 = 101 queries) gây thảm họa hiệu năng!",
    "explanations": {
      "0": "Chính xác! Vấn đề N+1 truy vấn xảy ra khi ứng dụng thực hiện 1 câu query ban đầu để lấy danh sách N đối tượng cha, nhưng do cấu hình lazy loading hoặc eager không đúng cách, vòng lặp truy cập thuộc tính quan hệ lại kích hoạt thêm N câu lệnh SELECT con riêng lẻ, biến 1 thao tác thành N+1 câu truy vấn làm nghẽn kết nối cơ sở dữ liệu.",
      "1": "Sai. Đây là vấn đề suy giảm hiệu năng truy vấn ORM, không phải công thức mã hóa.",
      "2": "Sai. Số lượng bảng trong CSDL không liên quan đến lỗi N+1 query.",
      "3": "Sai. Đây không phải thuật ngữ đo thời gian."
    },
    "keyTakeaway": "Lỗi N+1 Query xảy ra khi 1 câu truy vấn lấy danh sách cha kéo theo N câu truy vấn phụ để tải danh sách con, làm suy giảm nghiêm trọng hiệu năng hệ thống."
  },
  {
    "id": 17,
    "topic": "Chapter 18: Resolving N+1 with `JOIN FETCH`",
    "question": "How can developers effectively eliminate the N+1 query problem using JPQL / HQL?",
    "options": [
      "By using an explicit `JOIN FETCH` clause in JPQL (e.g. `SELECT d FROM Department d JOIN FETCH d.employees`) to load parent and children in a single SQL query",
      "By deleting the foreign key constraints in the database",
      "By changing all `@OneToMany` annotations to `@Transient`",
      "By turning off the database server during queries"
    ],
    "correct": 0,
    "hint": "Từ khóa `JOIN FETCH` hướng dẫn Hibernate thực hiện phép kết (INNER/LEFT JOIN) và nạp tức thì toàn bộ dữ liệu liên quan vào cùng một tập kết quả SQL duy nhất.",
    "explanations": {
      "0": "Chính xác! Sử dụng cú pháp `JOIN FETCH` trong JPQL/HQL hướng dẫn Hibernate phát sinh một câu lệnh SQL JOIN duy nhất để nạp cả thực thể cha lẫn tập hợp con liên quan vào bộ nhớ trong đúng một lần truy vấn mạng, giải quyết triệt để lỗi N+1.",
      "1": "Sai. Xóa ràng buộc khóa ngoại sẽ phá hủy tính toàn vẹn dữ liệu của CSDL.",
      "2": "Sai. Đổi sang `@Transient` sẽ làm mất hoàn toàn mối liên kết quan hệ trong ORM.",
      "3": "Sai. Tắt database sẽ gây lỗi sập hệ thống."
    },
    "keyTakeaway": "Sử dụng mệnh đề `JOIN FETCH` trong câu truy vấn JPQL/HQL để tải đồng thời thực thể cha và các thực thể con liên quan trong một câu lệnh SQL duy nhất."
  },
  {
    "id": 18,
    "topic": "Chapter 18: HQL vs Native SQL",
    "question": "What is the primary difference between Hibernate Query Language (HQL) and Native SQL (Slide 5)?",
    "options": [
      "HQL uses Java class and property names instead of database table and column names, making queries database-independent and portable across different SQL dialects",
      "HQL is written in HTML markup, while Native SQL is written in Python",
      "Native SQL cannot retrieve data from tables",
      "HQL can only be used on Windows operating systems"
    ],
    "correct": 0,
    "hint": "Slide 5 (Ch 17): 'HQL: Powerful object-oriented query language for retrieving and manipulating data... Dialects: Generates database-specific SQL for portability'.",
    "explanations": {
      "0": "Chính xác! Slide 5 & 9 (Ch 17): HQL (Hibernate Query Language) là ngôn ngữ truy vấn hướng đối tượng. Bạn viết `SELECT s FROM Student s WHERE s.name = ...` (dùng tên Class và tên biến trong Java). Hibernate sẽ dịch HQL này thành câu lệnh Native SQL tương ứng dựa vào Dialect của hệ quản trị CSDL đang dùng (MySQL, PostgreSQL, Oracle), đảm bảo tính độc lập và di động mã nguồn.",
      "1": "Sai. HQL có cú pháp tương tự SQL nhưng nhắm vào đối tượng Java, không phải HTML.",
      "2": "Sai. Native SQL là ngôn ngữ truy vấn gốc của CSDL, hoàn toàn truy xuất dữ liệu bình thường.",
      "3": "Sai. HQL chạy trên máy ảo Java (JVM) trên mọi hệ điều hành (cross-platform)."
    },
    "keyTakeaway": "HQL là ngôn ngữ truy vấn hướng đối tượng thao tác trên các Lớp và Thuộc tính Java, được Hibernate tự động biên dịch thành Native SQL phù hợp với từng hệ CSDL."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_9_DATA;
}
