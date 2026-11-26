// QUIZ 11 DATA: MongoDB & Spring Data NoSQL Mastery (60 Questions)
const QUIZ_11_DATA = [
  {
    "id": 1,
    "topic": "Chapter 19: NoSQL Definition & Meaning",
    "question": "What does the acronym 'NoSQL' stand for in modern database architecture (Chapter 19, Slide 3)?",
    "options": [
      "Not Only SQL",
      "No Structured Query Language Allowed",
      "New Object SQL",
      "Null Output SQL"
    ],
    "correct": 0,
    "hint": "Slide 3 (Ch 19): NoSQL không có nghĩa là cấm tuyệt đối SQL mà là 'Không chỉ có SQL', mở rộng ngoài mô hình quan hệ bảng truyền thống.",
    "explanations": {
      "0": "Chính xác! Slide 3 (Ch 19): NoSQL viết tắt của 'Not Only SQL', chỉ nhóm các hệ quản trị CSDL khác biệt với RDBMS truyền thống về cách lưu trữ và truy xuất dữ liệu phi quan hệ, nhưng vẫn có thể hỗ trợ truy vấn tương tự SQL khi cần.",
      "1": "Sai. NoSQL không cấm truy vấn có cấu trúc; nhiều hệ NoSQL vẫn có ngôn ngữ truy vấn riêng hoặc SQL-like.",
      "2": "Sai. Đây không phải định nghĩa của thuật ngữ NoSQL.",
      "3": "Sai. Không liên quan đến giá trị Null."
    },
    "keyTakeaway": "NoSQL (Not Only SQL) là tập hợp các hệ quản trị cơ sở dữ liệu linh hoạt ngoài mô hình bảng quan hệ RDBMS cổ điển."
  },
  {
    "id": 2,
    "topic": "Chapter 19: 4 Categories of NoSQL Databases",
    "question": "Into which of the four primary NoSQL database categories does MongoDB fall (Chapter 19, Slide 4)?",
    "options": [
      "Document Database",
      "Key-Value Store",
      "Wide-Column Store",
      "Graph Database"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 19): MongoDB lưu trữ dữ liệu dưới dạng các tài liệu giống JSON (JSON-like documents).",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 19): MongoDB và Couchbase là đại diện tiêu biểu của Document Databases (lưu trữ dữ liệu trong các tài liệu JSON/BSON linh hoạt).",
      "1": "Sai. Key-Value Stores đại diện là Redis và Memcached.",
      "2": "Sai. Wide-Column Stores đại diện là Apache Cassandra và HBase.",
      "3": "Sai. Graph Databases đại diện là Neo4j."
    },
    "keyTakeaway": "MongoDB thuộc nhóm Document Database trong 4 phân loại chính của NoSQL."
  },
  {
    "id": 3,
    "topic": "Chapter 19: NoSQL Database Examples",
    "question": "Which pairing correctly matches a NoSQL database type with its representative technology from Slide 4?",
    "options": [
      "Graph Database -> Neo4j",
      "Key-Value Store -> MongoDB",
      "Document Database -> Redis",
      "Wide-Column Store -> MySQL"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 19): Đồ thị các nút và cạnh quan hệ (nodes & relationships) là thế mạnh của Neo4j.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 19): Graph Databases lưu trữ mạng lưới các nút (nodes) và mối quan hệ (relationships) — ví dụ điển hình là Neo4j.",
      "1": "Sai. MongoDB là Document Database; Redis mới là Key-Value Store.",
      "2": "Sai. Redis là Key-Value Store; MongoDB mới là Document Database.",
      "3": "Sai. MySQL là cơ sở dữ liệu quan hệ RDBMS, còn Wide-Column Store ví dụ là Cassandra."
    },
    "keyTakeaway": "Phân biệt chuẩn 4 nhóm NoSQL: Document (MongoDB), Key-Value (Redis), Wide-Column (Cassandra), Graph (Neo4j)."
  },
  {
    "id": 4,
    "topic": "Chapter 19: RDBMS vs MongoDB Terminology",
    "question": "In MongoDB terminology, what is the closest equivalent to a 'Row' (Tuple) in a traditional relational database (RDBMS)?",
    "options": [
      "Document",
      "Collection",
      "Shard",
      "Replica Set"
    ],
    "correct": 0,
    "hint": "Một bảng (Table) tương ứng với Collection, vậy một dòng dữ liệu (Row) trong bảng tương ứng với gì trong Collection?",
    "explanations": {
      "0": "Chính xác! Ánh xạ RDBMS -> MongoDB: Database -> Database; Table -> Collection; Row -> Document; Column -> Field.",
      "1": "Sai. Collection tương đương với Table (Bảng) trong RDBMS.",
      "2": "Sai. Shard là phân mảnh dữ liệu phân tán theo chiều ngang.",
      "3": "Sai. Replica Set là cụm máy chủ sao lưu dự phòng tính sẵn sàng cao."
    },
    "keyTakeaway": "Ánh xạ thuật ngữ: Table = Collection; Row = Document; Column = Field."
  },
  {
    "id": 5,
    "topic": "Chapter 19: RDBMS vs MongoDB Terminology",
    "question": "In MongoDB, what groups related documents together, serving an analogous role to a 'Table' in SQL databases?",
    "options": [
      "Collection",
      "Document",
      "Namespace",
      "Cluster"
    ],
    "correct": 0,
    "hint": "Slide 9 (Ch 19): 'Collections: Groups of related documents'.",
    "explanations": {
      "0": "Chính xác! Slide 9 (Ch 19): Collection là tập hợp chứa các Document liên quan (ví dụ collection `users`, `products`), tương đương Table trong SQL nhưng không ép buộc cùng một lược đồ cứng.",
      "1": "Sai. Document tương đương với một Row (bản ghi đơn lẻ).",
      "2": "Sai. Namespace là tên đầy đủ kết hợp `<database>.<collection>`.",
      "3": "Sai. Cluster là cụm máy chủ triển khai toàn bộ hệ thống MongoDB."
    },
    "keyTakeaway": "Collection trong MongoDB là nơi tập hợp các Document liên quan, đóng vai trò tương ứng với Table trong RDBMS."
  },
  {
    "id": 6,
    "topic": "Chapter 19: CAP Theorem Fundamentals",
    "question": "According to the CAP Theorem referenced in Chapter 19 (Slide 3), what three properties can a distributed data store choose at most two of simultaneously?",
    "options": [
      "Consistency, Availability, Partition Tolerance",
      "Concurrency, Atomicity, Persistence",
      "Caching, Authentication, Performance",
      "Columns, Arrays, Primary Keys"
    ],
    "correct": 0,
    "hint": "Định lý CAP (Brewer's theorem): C = Tính nhất quán, A = Tính sẵn sàng, P = Khả năng chịu lỗi phân mảnh mạng.",
    "explanations": {
      "0": "Chính xác! CAP Theorem phát biểu rằng một hệ thống phân tán chỉ có thể đảm bảo tối đa 2 trong 3 đặc tính cùng lúc khi có sự cố mạng: Consistency (Nhất quán), Availability (Sẵn sàng) và Partition Tolerance (Chịu lỗi phân vùng). MongoDB ưu tiên CP (Consistency & Partition Tolerance).",
      "1": "Sai. Đây là trộn lẫn các khái niệm ACID (Atomicity, Consistency, Isolation, Durability).",
      "2": "Sai. Không phải 3 chữ cái của định lý CAP.",
      "3": "Sai. Đây là thành phần dữ liệu, không phải định lý hệ phân tán."
    },
    "keyTakeaway": "Định lý CAP gồm Consistency (C), Availability (A) và Partition Tolerance (P); MongoDB mặc định thiết kế theo hướng CP."
  },
  {
    "id": 7,
    "topic": "Chapter 19: MongoDB Suitable Domains",
    "question": "Why is MongoDB particularly well-suited for domains like E-commerce product catalogs and Content Management Systems (Slide 8)?",
    "options": [
      "Because its flexible schema allows different items (e.g. a laptop vs a t-shirt) in the same collection to have completely different attributes without `ALTER TABLE` migrations",
      "Because MongoDB cannot store numbers or boolean values",
      "Because MongoDB enforces strict normalized 3NF tables with mandatory foreign keys",
      "Because it automatically converts all product catalogs into static PDF files"
    ],
    "correct": 0,
    "hint": "Slide 7 & 8 (Ch 19): Danh mục sản phẩm thương mại điện tử có thuộc tính rất đa dạng (áo có size/màu, laptop có RAM/CPU).",
    "explanations": {
      "0": "Chính xác! Slide 7 & 8 (Ch 19): Thiết kế Flexible Schema (schema-less) giúp các document trong cùng một collection `products` có thể mang các trường thuộc tính khác nhau tùy loại mặt hàng mà không cần tạo hàng chục bảng phụ hay cột NULL dư thừa.",
      "1": "Sai. MongoDB hỗ trợ đầy đủ kiểu số (Int32, Int64, Double, Decimal128), Boolean, Date, Array...",
      "2": "Sai. Chuẩn 3NF và khóa ngoại cứng nhắc là đặc trưng của RDBMS, không phải MongoDB.",
      "3": "Sai. MongoDB lưu trữ dữ liệu nhị phân BSON để truy vấn động."
    },
    "keyTakeaway": "Flexible Schema của MongoDB cực kỳ lý tưởng cho E-commerce, CMS và IoT nơi cấu trúc dữ liệu thay đổi liên tục và đa dạng."
  },
  {
    "id": 8,
    "topic": "Chapter 19: Scaling Models (Vertical vs Horizontal)",
    "question": "How does MongoDB primarily achieve massive scalability across high-traffic workloads (Slide 7 & 9)?",
    "options": [
      "Horizontal scaling via Sharding (distributing data chunks across multiple commodity servers)",
      "Vertical scaling only by buying infinitely larger single-CPU motherboards",
      "Deleting older customer documents every 24 hours",
      "Storing the entire database in browser localStorage"
    ],
    "correct": 0,
    "hint": "Slide 9 (Ch 19): 'Shards: Distributed chunks of data for horizontal scaling'.",
    "explanations": {
      "0": "Chính xác! Slide 7 & 9 (Ch 19): MongoDB được thiết kế cho khả năng mở rộng theo chiều ngang (Horizontal Scaling) thông qua Sharding — chia nhỏ dữ liệu (chunks) và phân tán trên nhiều máy chủ độc lập.",
      "1": "Sai. RDBMS truyền thống thường bị giới hạn bởi Vertical Scaling (nâng cấp phần cứng 1 máy), còn MongoDB sinh ra để Scale-out (Horizontal).",
      "2": "Sai. Mở rộng quy mô không bao giờ đồng nghĩa với việc tự ý xóa dữ liệu khách hàng.",
      "3": "Sai. Dữ liệu nằm trên hệ thống server cluster phân tán."
    },
    "keyTakeaway": "Sharding cho phép MongoDB mở rộng theo chiều ngang (Horizontal Scaling) bằng cách phân tán các mảnh dữ liệu qua nhiều máy chủ."
  },
  {
    "id": 9,
    "topic": "Chapter 19: BSON vs JSON Format",
    "question": "What format does MongoDB actually use internally on disk and over the wire to store and transfer documents?",
    "options": [
      "BSON (Binary JSON)",
      "Plain ASCII XML",
      "YAML 1.2",
      "CSV (Comma-Separated Values)"
    ],
    "correct": 0,
    "hint": "Định dạng nhị phân mở rộng của JSON hỗ trợ thêm các kiểu dữ liệu như Date, Binary, ObjectId và giúp quét cực nhanh.",
    "explanations": {
      "0": "Chính xác! MongoDB lưu trữ và truyền tải tài liệu ở định dạng BSON (Binary JSON). BSON mã hóa nhị phân cấu trúc JSON kèm thông tin độ dài tiền tố giúp duyệt bỏ qua các trường cực nhanh và bổ sung kiểu dữ liệu riêng (ObjectId, Date, BinData, Decimal128).",
      "1": "Sai. XML không phải định dạng lưu trữ của MongoDB.",
      "2": "Sai. YAML chỉ thường dùng cho file cấu hình như `mongod.cfg` hoặc Docker.",
      "3": "Sai. CSV chỉ là một định dạng tùy chọn khi export/import dữ liệu phẳng."
    },
    "keyTakeaway": "MongoDB dùng BSON (Binary JSON) để lưu trữ nội bộ, hỗ trợ nhiều kiểu dữ liệu phong phú hơn JSON và tối ưu tốc độ đọc ghi."
  },
  {
    "id": 10,
    "topic": "Chapter 19: BSON Advantages Over Standard JSON",
    "question": "Which data types are natively supported by MongoDB BSON but NOT directly supported in standard JSON?",
    "options": [
      "`ObjectId`, `Date`, `BinData` (Binary), and `Decimal128`",
      "`String` and `Boolean`",
      "`Array` and `Nested Object`",
      "`Number` and `null`"
    ],
    "correct": 0,
    "hint": "JSON chuẩn chỉ có 6 kiểu cơ bản: string, number, boolean, null, object, array. BSON bổ sung thêm ngày tháng chuẩn, định danh 12-byte, nhị phân...",
    "explanations": {
      "0": "Chính xác! JSON chuẩn không có kiểu `Date` hay `Binary` hay `Decimal128` chính xác cho tài chính. BSON bổ sung đầy đủ `ObjectId`, `ISODate`/`Date`, `BinData`, `Int32`/`Int64`, `Decimal128`.",
      "1": "Sai. `String` và `Boolean` đều có sẵn trong JSON tiêu chuẩn.",
      "2": "Sai. `Array` và `Object` lồng nhau là tính năng gốc của JSON.",
      "3": "Sai. `Number` và `null` có sẵn trong JSON chuẩn."
    },
    "keyTakeaway": "BSON mở rộng JSON bằng các kiểu dữ liệu chuyên dụng như `ObjectId`, `Date`, `BinData`, `Int64`, `Decimal128`."
  },
  {
    "id": 11,
    "topic": "Chapter 19: Maximum Document Size Limit",
    "question": "What is the maximum allowed size for a single BSON document in MongoDB?",
    "options": [
      "16 Megabytes (16 MB)",
      "64 Kilobytes (64 KB)",
      "2 Gigabytes (2 GB)",
      "Unlimited size"
    ],
    "correct": 0,
    "hint": "Giới hạn này ngăn một document đơn lẻ chiếm hết RAM khi đọc hoặc tốn quá nhiều băng thông. Nếu file lớn hơn (video, ảnh lớn), ta dùng GridFS.",
    "explanations": {
      "0": "Chính xác! MongoDB giới hạn kích thước tối đa của một BSON document là 16 MB nhằm đảm bảo hiệu năng RAM và mạng. Đối với dữ liệu lớn hơn 16 MB (như video, file lớn), MongoDB cung cấp đặc tả GridFS để chia nhỏ thành nhiều chunk 255 KB.",
      "1": "Sai. 64 KB quá nhỏ cho các tài liệu có mảng nhúng hoặc cấu trúc lồng nhau.",
      "2": "Sai. Giới hạn cứng của BSON document là 16 MB, không phải 2 GB.",
      "3": "Sai. Document có giới hạn cứng 16 MB (dùng GridFS nếu vượt quá)."
    },
    "keyTakeaway": "Kích thước tối đa của một BSON document trong MongoDB là 16 MB; dùng GridFS khi cần lưu tệp lớn hơn."
  },
  {
    "id": 12,
    "topic": "Chapter 19: `_id` Field Rules",
    "question": "Which statement is TRUE regarding the `_id` field in MongoDB documents?",
    "options": [
      "Every document must have a unique `_id` field that serves as its immutable primary key; MongoDB auto-generates an `ObjectId` if omitted",
      "The `_id` field is optional and does not need to be unique inside a collection",
      "You can freely update the `_id` value of an existing document using `$set`",
      "`_id` can only store integer numbers starting from 1"
    ],
    "correct": 0,
    "hint": "Khóa chính `_id` là bắt buộc, duy nhất trên từng collection và bất biến sau khi tạo.",
    "explanations": {
      "0": "Chính xác! Mọi document trong MongoDB đều phải có trường `_id` làm khóa chính (được đánh chỉ mục duy nhất mặc định). Nếu không truyền `_id` khi insert, driver hoặc server tự sinh `ObjectId`. Trường `_id` là bất biến (immutable).",
      "1": "Sai. `_id` là bắt buộc và MongoDB luôn tạo unique index trên `_id`.",
      "2": "Sai. MongoDB nghiêm cấm thay đổi giá trị `_id` của document đã tồn tại (phải xóa và chèn lại nếu muốn đổi `_id`).",
      "3": "Sai. `_id` có thể mang bất kỳ kiểu BSON nào (String, UUID, Int, ObjectId...) miễn không phải Array."
    },
    "keyTakeaway": "Trường `_id` là khóa chính duy nhất, bắt buộc và bất biến trong mỗi document MongoDB (mặc định tự sinh `ObjectId`)."
  },
  {
    "id": 13,
    "topic": "Chapter 19: ObjectId 12-Byte Anatomy",
    "question": "How is a standard 12-byte MongoDB `ObjectId` structured (Slide 10)?",
    "options": [
      "4-byte Unix timestamp + 5-byte random value (unique to machine/process) + 3-byte incrementing counter",
      "12-byte sequential auto-increment integer starting from 0",
      "6-byte username + 6-byte password hash",
      "8-byte IPv6 address + 4-byte TCP port"
    ],
    "correct": 0,
    "hint": "4 byte đầu lưu thời gian tạo (giây), nên có thể suy ra thời điểm tạo document từ chính `ObjectId` bằng `getTimestamp()`!",
    "explanations": {
      "0": "Chính xác! Một `ObjectId` dài 12 byte (hiển thị 24 ký tự hex) gồm: 4 byte đầu là Unix timestamp (giây), 5 byte tiếp theo là giá trị ngẫu nhiên định danh máy/tiến trình, và 3 byte cuối là bộ đếm tăng dần khởi tạo ngẫu nhiên. Điều này giúp sinh ID phân tán không đụng độ mà không cần máy chủ trung tâm.",
      "1": "Sai. `ObjectId` không phải số nguyên tự tăng tuần tự từ 0.",
      "2": "Sai. `ObjectId` không chứa thông tin người dùng hay mật khẩu.",
      "3": "Sai. Không lưu địa chỉ IPv6 hay port TCP."
    },
    "keyTakeaway": "`ObjectId` gồm 12 byte: 4-byte timestamp + 5-byte random value + 3-byte counter, giúp tạo khóa chính duy nhất trên hệ phân tán."
  },
  {
    "id": 14,
    "topic": "Chapter 19: Extracting Creation Time from ObjectId",
    "question": "Because the first 4 bytes of an `ObjectId` store a Unix timestamp, which method retrieves the creation date directly from an `ObjectId` in MongoDB Shell?",
    "options": [
      "`ObjectId(\"5f49c2482c3d190000000000\").getTimestamp()`",
      "`ObjectId(...).readSqlDate()`",
      "`ObjectId(...).parseYear()`",
      "`db.getCreatedTime()`"
    ],
    "correct": 0,
    "hint": "Tên phương thức có dạng `get...()` lấy dấu thời gian từ chính đối tượng ObjectId.",
    "explanations": {
      "0": "Chính xác! Gọi `.getTimestamp()` trên một đối tượng `ObjectId` trả về một `ISODate` biểu thị thời điểm (độ chính xác từng giây) mà `ObjectId` đó được tạo ra.",
      "1": "Sai. Không có phương thức `readSqlDate()`.",
      "2": "Sai. Không có phương thức `parseYear()`.",
      "3": "Sai. Không có phương thức `db.getCreatedTime()`."
    },
    "keyTakeaway": "Có thể trích xuất thời gian tạo của document trực tiếp từ `ObjectId` thông qua hàm `.getTimestamp()`."
  },
  {
    "id": 15,
    "topic": "Chapter 19: Flexible Schema vs Schema Validation",
    "question": "Although MongoDB is schema-less by default, how can you enforce field types or required fields at the database level if needed?",
    "options": [
      "By configuring JSON Schema Validation (`$jsonSchema`) rules on the collection using `validator`",
      "MongoDB strictly forbids any kind of validation rules",
      "By converting the collection into a Microsoft Excel file",
      "By writing SQL `ALTER TABLE ADD CONSTRAINT` commands"
    ],
    "correct": 0,
    "hint": "MongoDB hỗ trợ tùy chọn `validator: { $jsonSchema: { ... } }` khi tạo hoặc chỉnh sửa collection.",
    "explanations": {
      "0": "Chính xác! MongoDB cho phép vừa linh hoạt (schema-less) vừa chặt chẽ khi cần thiết nhờ Schema Validation thông qua chuẩn `$jsonSchema` (kiểm tra `required`, `bsonType`, `minimum`, `enum`...) ngay ở tầng database.",
      "1": "Sai. MongoDB hỗ trợ đầy đủ validation ở tầng database từ bản 3.2 trở lên.",
      "2": "Sai. Không chuyển thành file Excel.",
      "3": "Sai. MongoDB không dùng lệnh SQL DDL `ALTER TABLE`."
    },
    "keyTakeaway": "Có thể áp dụng ràng buộc dữ liệu ở tầng database trong MongoDB bằng `$jsonSchema` validator khi tạo hoặc `collMod` collection."
  },
  {
    "id": 16,
    "topic": "Chapter 19: MongoDB Data Types Restriction on `_id`",
    "question": "Which BSON data type is explicitly FORBIDDEN as the value of the `_id` field in MongoDB?",
    "options": [
      "Array",
      "String",
      "Embedded Sub-document (Object)",
      "Integer"
    ],
    "correct": 0,
    "hint": "Một khóa chính phải xác định duy nhất một bản ghi; kiểu dữ liệu tập hợp đa trị không thể làm khóa chính vì index mảng (multikey index) có ngữ nghĩa khác.",
    "explanations": {
      "0": "Chính xác! MongoDB cho phép `_id` chứa String, Int, Double, ObjectId, Date, thậm chí Embedded Document (khóa phức hợp), nhưng TUYỆT ĐỐI CẤM kiểu Array làm giá trị cho `_id`.",
      "1": "Sai. String (ví dụ UUID hoặc mã sinh viên) thường xuyên được dùng làm `_id`.",
      "2": "Sai. Embedded Object có thể dùng làm `_id` (tương đương composite primary key).",
      "3": "Sai. Integer là kiểu hợp lệ cho `_id`."
    },
    "keyTakeaway": "Có thể dùng nhiều kiểu dữ liệu cho `_id` (kể cả Embedded Object), nhưng tuyệt đối không được dùng kiểu Array."
  },
  {
    "id": 17,
    "topic": "Chapter 19: Inserting Documents (Create)",
    "question": "Which MongoDB Shell command inserts multiple student documents in a single database round-trip (Slide 11)?",
    "options": [
      "`db.students.insertMany([ { name: 'An' }, { name: 'Binh' } ])`",
      "`db.students.insertAll({ name: 'An' }, { name: 'Binh' })`",
      "`db.students.addBulk([ { name: 'An' } ])`",
      "`INSERT INTO students VALUES ('An'), ('Binh')`"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 19): 'Create: db.<collection_name>.insertOne() or db.<collection_name>.insertMany()'.",
    "explanations": {
      "0": "Chính xác! Slide 11 (Ch 19): `insertMany([...])` nhận vào một mảng các document và chèn hàng loạt trong một lần gọi mạng.",
      "1": "Sai. Không có phương thức `insertAll`.",
      "2": "Sai. Không có phương thức `addBulk` (bulk viết dùng `bulkWrite`).",
      "3": "Sai. Đây là cú pháp SQL, không chạy được trong MongoDB Shell."
    },
    "keyTakeaway": "Sử dụng `db.<collection>.insertMany([...])` để thêm nhiều tài liệu cùng lúc với hiệu năng tối ưu."
  },
  {
    "id": 18,
    "topic": "Chapter 19: `insertMany` Ordered Execution Option",
    "question": "When calling `db.items.insertMany(docs, { ordered: false })`, what happens if the 2nd document out of 5 fails due to a duplicate `_id` error?",
    "options": [
      "MongoDB continues inserting the remaining 3rd, 4th, and 5th documents despite the error on the 2nd document",
      "MongoDB immediately aborts and does not insert documents 3, 4, and 5",
      "MongoDB deletes the entire `items` collection",
      "MongoDB automatically changes the duplicate `_id` to random text"
    ],
    "correct": 0,
    "hint": "Mặc định `ordered: true` sẽ dừng ngay khi gặp lỗi đầu tiên. Đặt `ordered: false` cho phép chèn song song không theo thứ tự và không dừng khi gặp lỗi lẻ.",
    "explanations": {
      "0": "Chính xác! Với `ordered: false`, các thao tác chèn có thể thực thi độc lập; nếu một document lỗi (ví dụ trùng `_id`), các document hợp lệ còn lại vẫn tiếp tục được chèn vào collection.",
      "1": "Sai. Hành vi dừng ngay tại lỗi đầu tiên xảy ra khi `ordered: true` (mặc định).",
      "2": "Sai. Lỗi chèn không xóa collection.",
      "3": "Sai. MongoDB báo lỗi duplicate key chứ không tự sửa `_id` người dùng đã chỉ định."
    },
    "keyTakeaway": "Tùy chọn `{ ordered: false }` trong `insertMany` giúp bỏ qua document lỗi và tiếp tục chèn các document hợp lệ còn lại."
  },
  {
    "id": 19,
    "topic": "Chapter 19: Reading Single vs Multiple Documents",
    "question": "What is the key difference in return type between `db.students.find({ age: 20 })` and `db.students.findOne({ age: 20 })` in MongoDB Shell?",
    "options": [
      "`find()` returns a Cursor pointing to matching documents, whereas `findOne()` returns the first matching Document directly (or `null`)",
      "`find()` deletes matched documents after returning, whereas `findOne()` keeps them",
      "`findOne()` can only search by the `_id` field",
      "There is no difference; both return an Array"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 19): `find()` trả về con trỏ (Cursor) để có thể nối tiếp `.sort()`, `.limit()`; còn `findOne()` trả trực tiếp về object document đầu tiên.",
    "explanations": {
      "0": "Chính xác! `find()` trả về một **Cursor** (con trỏ duyệt kết quả theo từng lô - batch), cho phép chaining các phương thức như `.sort()`, `.skip()`, `.limit()`. Còn `findOne()` trả về trực tiếp **Document** đầu tiên tìm thấy (hoặc `null` nếu không có).",
      "1": "Sai. Cả hai đều là thao tác chỉ đọc.",
      "2": "Sai. `findOne()` nhận bất kỳ bộ lọc điều kiện truy vấn nào.",
      "3": "Sai. `find()` trả về Cursor, `findOne()` trả về Document (hoặc null)."
    },
    "keyTakeaway": "`find()` trả về Cursor hỗ trợ phân trang/sắp xếp chuỗi; `findOne()` trả thẳng về đối tượng Document đầu tiên khớp điều kiện."
  },
  {
    "id": 20,
    "topic": "Chapter 19: Field Projections in `find()`",
    "question": "In `db.users.find({}, { name: 1, email: 1, _id: 0 })`, what does the second argument `{ name: 1, email: 1, _id: 0 }` accomplish?",
    "options": [
      "Projection: it includes ONLY `name` and `email` in the returned documents and explicitly excludes `_id`",
      "It sorts results by `name` ascending and `_id` descending",
      "It deletes the `_id` field permanently from the database",
      "It updates `name` to `1` for all users"
    ],
    "correct": 0,
    "hint": "Tham số thứ 2 của `find(query, projection)` quy định các trường nào được phép xuất hiện (`1` = hiện, `0` = ẩn). `_id` mặc định luôn hiện trừ khi gán `0`.",
    "explanations": {
      "0": "Chính xác! Đây là Projection (Phép chiếu): `1` nghĩa là giữ lại trường đó, `0` nghĩa là loại bỏ khỏi kết quả trả về. Ngoại trừ `_id` (có thể đặt `0` để ẩn khi đang chọn `1` cho các trường khác), trong MongoDB bạn không được trộn lẫn `1` và `0` cho các trường thường.",
      "1": "Sai. Sắp xếp dùng `.sort({ name: 1 })`, không phải tham số thứ hai của `find()`.",
      "2": "Sai. Projection chỉ lọc kết quả hiển thị trả về client, không hề sửa đổi dữ liệu trong database.",
      "3": "Sai. Cập nhật dữ liệu dùng `updateOne`/`updateMany` với `$set`."
    },
    "keyTakeaway": "Tham số thứ 2 trong `find(filter, projection)` dùng để chọn lọc các trường cần lấy (`1`) hoặc ẩn đi (`0`, đặc biệt với `_id`)."
  },
  {
    "id": 21,
    "topic": "Chapter 19: Mixing Inclusion & Exclusion in Projections",
    "question": "What happens if you execute `db.products.find({}, { name: 1, secretCost: 0 })` in MongoDB?",
    "options": [
      "MongoDB throws an error because you cannot mix inclusion (`1`) and exclusion (`0`) in the same projection, except for excluding `_id`",
      "It successfully shows `name` and hides `secretCost`",
      "It shows all fields except `name`",
      "It deletes `secretCost` from disk"
    ],
    "correct": 0,
    "hint": "Quy tắc vàng của MongoDB Projection: Hoặc liệt kê những trường muốn lấy (`1`), hoặc liệt kê những trường muốn bỏ (`0`). Ngoại lệ duy nhất là `_id: 0`.",
    "explanations": {
      "0": "Chính xác! MongoDB cấm trộn lẫn phép chiếu bao gồm (`1`) và loại trừ (`0`) trong cùng một truy vấn. Nếu bạn đã viết `name: 1`, tất cả các trường khác tự động bị ẩn (trừ `_id` phải viết rõ `_id: 0` nếu muốn ẩn).",
      "1": "Sai. Truy vấn này bị từ chối với lỗi `Cannot do exclusion on field secretCost in inclusion projection`.",
      "2": "Sai. Lỗi cú pháp projection nên không trả về dữ liệu.",
      "3": "Sai. `find` không bao giờ xóa dữ liệu."
    },
    "keyTakeaway": "Không được trộn lẫn `1` (include) và `0` (exclude) trong cùng một projection, ngoại trừ trường hợp duy nhất là ẩn `_id: 0`."
  },
  {
    "id": 22,
    "topic": "Chapter 19: Sorting, Skipping, and Limiting Cursor Results",
    "question": "Which MongoDB Shell query retrieves the 2nd page of 10 products sorted by `price` from highest to lowest?",
    "options": [
      "`db.products.find().sort({ price: -1 }).skip(10).limit(10)`",
      "`db.products.find().sort({ price: 1 }).skip(2).limit(10)`",
      "`db.products.find().orderBy('price DESC').page(2, 10)`",
      "`db.products.find().limit(10).skip(20).sort({ price: 'desc' })`"
    ],
    "correct": 0,
    "hint": "Giảm dần là `-1`, tăng dần là `1`. Trang 1 bỏ qua 0, trang 2 (mỗi trang 10 phần tử) phải `skip(10)` và `limit(10)`.",
    "explanations": {
      "0": "Chính xác! `.sort({ price: -1 })` sắp xếp giá giảm dần (`-1`), `.skip(10)` bỏ qua 10 phần tử của trang 1, và `.limit(10)` lấy đúng 10 phần tử của trang 2.",
      "1": "Sai. `price: 1` là tăng dần, và `skip(2)` chỉ bỏ qua 2 phần tử chứ không phải trang 2.",
      "2": "Sai. `orderBy` và `page` không tồn tại trong MongoDB Shell.",
      "3": "Sai. Sort phải nhận `1` hoặc `-1` (hoặc meta), không nhận chuỗi `'desc'` trong Shell chuẩn, và `skip(20)` là trang 3."
    },
    "keyTakeaway": "Phân trang trong MongoDB dùng `.sort({ field: -1 })` (`1` tăng, `-1` giảm), `.skip((page - 1) * size)` và `.limit(size)`."
  },
  {
    "id": 23,
    "topic": "Chapter 19: Updating Documents Safely (`updateOne` vs `replaceOne`)",
    "question": "What critical mistake happens if you call `db.users.updateOne({ _id: 1 }, { age: 31 })` WITHOUT using `$set` (or in older Mongo drivers)?",
    "options": [
      "MongoDB rejects atomic updates without an update operator like `$set`, whereas `replaceOne` overwrites the ENTIRE document (wiping out `name`, `email`, etc.)",
      "It automatically adds 31 to the existing age",
      "It creates a new collection named `age`",
      "It updates all users in the database"
    ],
    "correct": 0,
    "hint": "Để chỉ sửa một trường mà giữ nguyên các trường khác trong document, phải dùng toán tử cập nhật `$set`. Nếu dùng `replaceOne`, toàn bộ document cũ bị thay thế bởi document mới.",
    "explanations": {
      "0": "Chính xác! Các hàm `updateOne`/`updateMany` yêu cầu phải có toán tử cập nhật như `$set: { age: 31 }`. Nếu truyền object thô không có `$` toán tử, MongoDB hiện đại báo lỗi (hoặc nếu gọi `replaceOne({ _id: 1 }, { age: 31 })`, toàn bộ các trường khác như `name`, `email` sẽ bị xóa sạch, chỉ còn lại `_id` và `age`).",
      "1": "Sai. Muốn cộng thêm phải dùng toán tử `$inc: { age: 31 }`.",
      "2": "Sai. Không tạo collection mới.",
      "3": "Sai. Bộ lọc `{ _id: 1 }` chỉ nhắm tới 1 bản ghi."
    },
    "keyTakeaway": "Luôn sử dụng toán tử `$set` trong `updateOne`/`updateMany` để cập nhật từng trường; dùng `replaceOne` chỉ khi muốn thay thế toàn bộ document."
  },
  {
    "id": 24,
    "topic": "Chapter 19: Upsert Behavior",
    "question": "What does setting `{ upsert: true }` in `db.stats.updateOne({ page: '/home' }, { $inc: { views: 1 } }, { upsert: true })` do?",
    "options": [
      "If a document matching `{ page: '/home' }` exists, it increments `views`; if NO matching document exists, it inserts a new document with `{ page: '/home', views: 1 }`",
      "It deletes the document if it already exists",
      "It prevents any updates from being written to disk",
      "It updates multiple databases simultaneously"
    ],
    "correct": 0,
    "hint": "'Upsert' là từ ghép giữa **Up**date và In**sert**.",
    "explanations": {
      "0": "Chính xác! Tùy chọn `upsert: true` thực hiện hành vi 'Update or Insert': Nếu tìm thấy document thỏa mãn filter thì cập nhật; nếu không tìm thấy bản ghi nào khớp, MongoDB tự động tạo mới (insert) một document kết hợp giữa điều kiện filter và các thay đổi cập nhật.",
      "1": "Sai. Upsert không xóa document.",
      "2": "Sai. Thay đổi vẫn được ghi xuống bộ nhớ lưu trữ bình thường.",
      "3": "Sai. Chỉ thao tác trên collection hiện tại."
    },
    "keyTakeaway": "Tùy chọn `{ upsert: true }` tự động chèn document mới nếu bộ lọc không tìm thấy bản ghi nào khớp để cập nhật."
  },
  {
    "id": 25,
    "topic": "Chapter 19: Deleting Documents vs Dropping Collection",
    "question": "What is the performance and structural difference between `db.logs.deleteMany({})` and `db.logs.drop()`?",
    "options": [
      "`deleteMany({})` removes documents one by one while keeping the collection and its indexes intact; `drop()` immediately deletes the entire collection along with all its indexes much faster",
      "`drop()` only deletes the first document in the collection",
      "`deleteMany({})` deletes the entire database including other collections",
      "There is no difference; both preserve all custom indexes"
    ],
    "correct": 0,
    "hint": "Nếu bạn muốn làm sạch hoàn toàn một bảng/collection lớn hàng triệu dòng mà không cần giữ lại định nghĩa index, `drop()` nhanh hơn gấp nhiều lần.",
    "explanations": {
      "0": "Chính xác! `deleteMany({})` xóa từng bản ghi và cập nhật lại từng cây B-Tree index (chậm hơn nhưng giữ nguyên collection và các index). Ngược lại, `drop()` hủy toàn bộ file/cấu trúc của collection lẫn tất cả index đi kèm một cách tức thì.",
      "1": "Sai. Xóa 1 document dùng `deleteOne()`, còn `drop()` xóa sạch cả collection.",
      "2": "Sai. Để xóa cả database phải dùng `db.dropDatabase()` (Slide 27, Ch 19).",
      "3": "Sai. `drop()` xóa luôn tất cả các index (trừ sau này tạo lại)."
    },
    "keyTakeaway": "`deleteMany({})` giữ lại collection và các indexes; `drop()` xóa toàn bộ collection lẫn mọi indexes với tốc độ tức thì."
  },
  {
    "id": 26,
    "topic": "Chapter 19: Dropping a Database",
    "question": "Which command permanently deletes the currently selected database in MongoDB Shell (Chapter 19, Slide 27)?",
    "options": [
      "`db.dropDatabase()`",
      "`DROP DATABASE current;`",
      "`db.deleteAll()`",
      "`db.removeDatabase()`"
    ],
    "correct": 0,
    "hint": "Slide 27 (Ch 19): 'Drop Database' - gọi phương thức trên đối tượng `db` hiện tại.",
    "explanations": {
      "0": "Chính xác! Slide 27 (Ch 19): Lệnh `db.dropDatabase()` sẽ xóa vĩnh viễn database đang được chọn hiện tại (bạn có thể kiểm tra bằng lệnh `db` hoặc chuyển sang DB khác bằng `use <dbName>` trước khi xóa).",
      "1": "Sai. Đây là cú pháp SQL.",
      "2": "Sai. Không có hàm `db.deleteAll()`.",
      "3": "Sai. Không có hàm `db.removeDatabase()`."
    },
    "keyTakeaway": "Dùng `db.dropDatabase()` để xóa toàn bộ cơ sở dữ liệu hiện hành đang trỏ tới trong MongoDB Shell."
  },
  {
    "id": 27,
    "topic": "Chapter 19: Counting Documents Accurately",
    "question": "In modern MongoDB versions, which method accurately counts documents matching a filter `{ status: 'ACTIVE' }`?",
    "options": [
      "`db.users.countDocuments({ status: 'ACTIVE' })`",
      "`db.users.length({ status: 'ACTIVE' })`",
      "`db.users.sumRows({ status: 'ACTIVE' })`",
      "`db.users.total({ status: 'ACTIVE' })`"
    ],
    "correct": 0,
    "hint": "Phương thức `count()` cũ đã bị deprecated; thay vào đó dùng `countDocuments()` (đếm chính xác theo filter) hoặc `estimatedDocumentCount()` (ước lượng nhanh toàn bộ collection).",
    "explanations": {
      "0": "Chính xác! `countDocuments(filter)` thực hiện quét chính xác số lượng document thỏa mãn điều kiện lọc (hỗ trợ cả transaction). Còn `estimatedDocumentCount()` đọc metadata để ước tính nhanh tổng số document trong toàn bộ collection.",
      "1": "Sai. Collection không có hàm `.length()`.",
      "2": "Sai. Không có hàm `sumRows()`.",
      "3": "Sai. Không có hàm `total()`."
    },
    "keyTakeaway": "Dùng `countDocuments(filter)` để đếm chính xác số lượng document khớp điều kiện thay cho hàm `count()` cũ."
  },
  {
    "id": 28,
    "topic": "Chapter 19: Finding Distinct Values",
    "question": "Which command returns an array of all unique `department` names across the `employees` collection?",
    "options": [
      "`db.employees.distinct('department')`",
      "`db.employees.unique('department')`",
      "`db.employees.find({ distinct: 'department' })`",
      "`SELECT DISTINCT department FROM employees`"
    ],
    "correct": 0,
    "hint": "Tên phương thức giống từ khóa loại bỏ trùng lặp trong SQL, gọi trực tiếp trên collection.",
    "explanations": {
      "0": "Chính xác! `db.employees.distinct('department')` trả về một mảng các giá trị không trùng lặp của trường `department` (cũng hỗ trợ nhận tham số filter thứ 2).",
      "1": "Sai. Không có phương thức `.unique()` trên collection.",
      "2": "Sai. `{ distinct: 'department' }` sẽ tìm các document có field tên là `distinct` mang giá trị `'department'`.",
      "3": "Sai. Đây là cú pháp SQL."
    },
    "keyTakeaway": "Sử dụng `db.<collection>.distinct('field')` để lấy mảng các giá trị phân biệt không trùng lặp của một trường."
  },
  {
    "id": 29,
    "topic": "Chapter 19: Comparison Query Operators",
    "question": "Which MongoDB query matches all products with a `price` greater than or equal to 100 and less than 500?",
    "options": [
      "`db.products.find({ price: { $gte: 100, $lt: 500 } })`",
      "`db.products.find({ price: '>= 100 && < 500' })`",
      "`db.products.find({ price: { $min: 100, $max: 500 } })`",
      "`db.products.find({ price: { $between: [100, 500] } })`"
    ],
    "correct": 0,
    "hint": "Toán tử so sánh trong MongoDB đều bắt đầu bằng `$`: `$gt`, `$gte`, `$lt`, `$lte`, `$eq`, `$ne`.",
    "explanations": {
      "0": "Chính xác! Kết hợp nhiều điều kiện so sánh trên cùng một trường bằng cách đặt chúng trong cùng một object điều kiện: `{ price: { $gte: 100, $lt: 500 } }` (ngầm hiểu là phép AND).",
      "1": "Sai. MongoDB không phân tích biểu thức chuỗi SQL trong value.",
      "2": "Sai. `$min`/`$max` là toán tử cập nhật hoặc aggregation accumulator, không phải filter so sánh.",
      "3": "Sai. MongoDB không có toán tử `$between`."
    },
    "keyTakeaway": "Các toán tử so sánh gồm `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`; đặt nhiều toán tử trong cùng object để tạo điều kiện khoảng giá trị."
  },
  {
    "id": 30,
    "topic": "Chapter 19: Logical `$or` and `$in` Operators",
    "question": "Which query finds students whose `major` is either `'SE'`, `'AI'`, or `'IA'` in the cleanest syntax?",
    "options": [
      "`db.students.find({ major: { $in: ['SE', 'AI', 'IA'] } })`",
      "`db.students.find({ major: ['SE', 'AI', 'IA'] })`",
      "`db.students.find({ major: { $or: ['SE', 'AI', 'IA'] } })`",
      "`db.students.find({ major: { $equalsAny: ['SE', 'AI', 'IA'] } })`"
    ],
    "correct": 0,
    "hint": "Khi kiểm tra một trường có nằm trong một danh sách các giá trị cho trước hay không, dùng toán tử `$in`.",
    "explanations": {
      "0": "Chính xác! `{ major: { $in: ['SE', 'AI', 'IA'] } }` khớp với bất kỳ document nào có trường `major` bằng một trong các phần tử trong mảng. (Ngoài ra cũng hiệu quả hơn viết `$or` dài dòng cho cùng một field).",
      "1": "Sai. Viết `{ major: ['SE', 'AI', 'IA'] }` yêu cầu trường `major` phải là một MẢNG khớp chính xác cả 3 phần tử theo đúng thứ tự đó.",
      "2": "Sai. Toán tử `$or` phải nhận mảng các biểu thức lọc đầy đủ như `$or: [ { major: 'SE' }, { major: 'AI' } ]`, đặt bên trong key `major` sẽ báo lỗi cú pháp.",
      "3": "Sai. Không có toán tử `$equalsAny`."
    },
    "keyTakeaway": "Dùng `$in: [...]` để kiểm tra giá trị của một trường có khớp với bất kỳ phần tử nào trong danh sách hay không."
  },
  {
    "id": 31,
    "topic": "Chapter 19: Querying Embedded Sub-documents (Dot Notation)",
    "question": "Given a document with `{ address: { city: 'Hanoi', zip: '100000' } }`, how do you query for all users living in `'Hanoi'` without requiring exact match of the entire `address` object?",
    "options": [
      "`db.users.find({ 'address.city': 'Hanoi' })`",
      "`db.users.find({ address: { city: 'Hanoi' } })`",
      "`db.users.find({ address->city: 'Hanoi' })`",
      "`db.users.find({ 'address/city': 'Hanoi' })`"
    ],
    "correct": 0,
    "hint": "MongoDB sử dụng dấu chấm (Dot Notation) đặt trong chuỗi nháy đơn/kép để truy cập các trường lồng bên trong object con.",
    "explanations": {
      "0": "Chính xác! Cú pháp Dot Notation `'address.city': 'Hanoi'` cho phép truy vấn một trường cụ thể lồng sâu bên trong sub-document bất kể các trường khác (như `zip`) có giá trị gì.",
      "1": "Sai! Trong MongoDB, `{ address: { city: 'Hanoi' } }` yêu cầu object `address` phải khớp CHÍNH XÁC toàn bộ cấu trúc và chỉ có mỗi field `city` (sẽ KHÔNG khớp nếu document có thêm `zip`).",
      "2": "Sai. Cú pháp `->` không hợp lệ trong MongoDB query.",
      "3": "Sai. Không dùng dấu `/` cho đường dẫn trường lồng nhau."
    },
    "keyTakeaway": "Luôn dùng Dot Notation (`'parent.child'`) để truy vấn trường bên trong sub-document thay vì truyền cả object con (dễ bị khớp cứng toàn bộ cấu trúc)."
  },
  {
    "id": 32,
    "topic": "Chapter 19: Element Query Operators (`$exists` & `$type`)",
    "question": "Which query finds all documents where the `phoneNumber` field is present (exists), regardless of its value?",
    "options": [
      "`db.users.find({ phoneNumber: { $exists: true } })`",
      "`db.users.find({ phoneNumber: { $notNull: true } })`",
      "`db.users.find({ phoneNumber: { $present: 1 } })`",
      "`db.users.find({ phoneNumber: '*' })`"
    ],
    "correct": 0,
    "hint": "Vì MongoDB cho phép schema linh hoạt, không phải document nào cũng có đủ các trường. Toán tử kiểm tra sự tồn tại của trường là `$exists`.",
    "explanations": {
      "0": "Chính xác! `{ phoneNumber: { $exists: true } }` khớp với tất cả các document có chứa khóa `phoneNumber` (kể cả khi giá trị của nó là `null`). Để kiểm tra tồn tại và khác `null`, kết hợp thêm `$ne: null`.",
      "1": "Sai. Không có toán tử `$notNull` trong MongoDB.",
      "2": "Sai. Không có toán tử `$present`.",
      "3": "Sai. Dấu `'*'` khớp đúng chuỗi ký tự dấu sao `\"*\"`, không phải wildcard tồn tại."
    },
    "keyTakeaway": "Toán tử `$exists: true/false` kiểm tra một trường có tồn tại trong cấu trúc linh hoạt của document hay không."
  },
  {
    "id": 33,
    "topic": "Chapter 19: Array Query Operators (`$elemMatch`)",
    "question": "Given documents with `scores: [ { subject: 'Math', grade: 9 }, { subject: 'Art', grade: 5 } ]`, why must you use `$elemMatch` to find students who scored >= 8 specifically in 'Math'?",
    "options": [
      "Because `$elemMatch` ensures BOTH conditions (`subject: 'Math'` AND `grade >= 8`) are satisfied by the SAME single element inside the `scores` array",
      "Because `$elemMatch` converts arrays into SQL tables",
      "Because dot notation throws a syntax error on arrays",
      "Because `$elemMatch` automatically sorts the array alphabetically"
    ],
    "correct": 0,
    "hint": "Nếu viết `{ 'scores.subject': 'Math', 'scores.grade': { $gte: 8 } }` không có `$elemMatch`, phần tử này có thể khớp 'Math' (điểm 4) còn phần tử kia khớp điểm >= 8 (môn Art) -> Sai logic!",
    "explanations": {
      "0": "Chính xác! Nếu không có `$elemMatch`, MongoDB kiểm tra từng điều kiện độc lập trên toàn mảng (một phần tử khớp `Math` và một phần tử khác khớp `>= 8` vẫn trả về kết quả). `$elemMatch` ép buộc TẤT CẢ các tiêu chí bên trong phải thỏa mãn trên CÙNG MỘT phần tử mảng.",
      "1": "Sai. `$elemMatch` không chuyển mảng thành bảng SQL.",
      "2": "Sai. Dot notation vẫn chạy hợp lệ trên mảng nhưng ngữ nghĩa khác khi có nhiều điều kiện.",
      "3": "Sai. `$elemMatch` là toán tử lọc, không sắp xếp mảng."
    },
    "keyTakeaway": "Dùng `$elemMatch` khi cần nhiều điều kiện truy vấn phải thỏa mãn đồng thời trên CÙNG MỘT phần tử của mảng."
  },
  {
    "id": 34,
    "topic": "Chapter 19: Pattern Matching with `$regex`",
    "question": "Which query performs a case-insensitive search for students whose `name` starts with `'Nguyen'`?",
    "options": [
      "`db.students.find({ name: { $regex: /^Nguyen/i } })`",
      "`db.students.find({ name: 'LIKE Nguyen%' })`",
      "`db.students.find({ name: { $startsWith: 'Nguyen' } })`",
      "`db.students.find({ name: { $matchText: 'Nguyen*' } })`"
    ],
    "correct": 0,
    "hint": "Trong biểu thức chính quy (Regular Expression), dấu `^` là bắt đầu chuỗi và cờ `'i'` (hoặc `$options: 'i'`) là không phân biệt hoa thường.",
    "explanations": {
      "0": "Chính xác! `{ name: { $regex: '^Nguyen', $options: 'i' } }` hoặc `{ name: { $regex: /^Nguyen/i } }` khớp chuỗi bắt đầu bằng `Nguyen` không phân biệt hoa thường. Ngoài ra dùng neo đầu chuỗi `^` giúp tận dụng được B-Tree index nếu có.",
      "1": "Sai. `LIKE` là cú pháp của SQL.",
      "2": "Sai. Không có toán tử `$startsWith` trong MongoDB query.",
      "3": "Sai. Không có toán tử `$matchText`."
    },
    "keyTakeaway": "Dùng `$regex` kèm neo `^` và `$options: 'i'` để tìm kiếm mẫu chuỗi không phân biệt hoa thường (neo `^` cho phép tối ưu index)."
  },
  {
    "id": 35,
    "topic": "Chapter 19: Field Update Operators (`$set`, `$unset`, `$inc`)",
    "question": "What does `db.accounts.updateOne({ _id: 10 }, { $inc: { balance: -50 }, $unset: { tempPin: '' } })` do?",
    "options": [
      "Atomically subtracts 50 from `balance` and completely removes the `tempPin` field from the document",
      "Sets `balance` to exactly `-50` and sets `tempPin` to an empty string",
      "Deletes the entire document with `_id: 10`",
      "Throws an error because `$inc` cannot take negative numbers"
    ],
    "correct": 0,
    "hint": "`$inc` là increment (cộng/trừ số nguyên tử), còn `$unset` là gỡ bỏ hoàn toàn field khỏi document.",
    "explanations": {
      "0": "Chính xác! `$inc: { balance: -50 }` thực hiện phép cộng nguyên tử với `-50` (giảm 50 đơn vị an toàn trong môi trường đồng thời), còn `$unset` xóa hoàn toàn khóa `tempPin` khỏi document (giá trị truyền vào cho `$unset` không quan trọng).",
      "1": "Sai. Muốn gán cứng `-50` hay chuỗi rỗng thì dùng `$set`, không phải `$inc` hay `$unset`.",
      "2": "Sai. `$unset` chỉ xóa một field trong document, không xóa cả document.",
      "3": "Sai. `$inc` hoàn toàn nhận số âm để thực hiện phép trừ (decrement)."
    },
    "keyTakeaway": "`$inc` tăng/giảm giá trị số nguyên tử (nhận cả số âm); `$unset` xóa hẳn trường khỏi cấu trúc document."
  },
  {
    "id": 36,
    "topic": "Chapter 19: Array Update Operators (`$push` vs `$addToSet`)",
    "question": "How does `$addToSet` differ from `$push` when adding a tag `'java'` to a document's `tags` array?",
    "options": [
      "`$addToSet` adds `'java'` ONLY if it does not already exist in the array (preventing duplicates), whereas `$push` always appends `'java'` even if it creates duplicates",
      "`$push` removes elements from the array while `$addToSet` creates a new collection",
      "`$addToSet` replaces the entire array with a single string",
      "There is no difference; they behave identically"
    ],
    "correct": 0,
    "hint": "Từ khóa 'Set' trong toán học nghĩa là tập hợp các phần tử duy nhất (không trùng lặp).",
    "explanations": {
      "0": "Chính xác! `$addToSet` hoạt động như một tập hợp Set: nếu phần tử đã tồn tại trong mảng thì bỏ qua, nếu chưa có mới chèn vào. Trong khi `$push` luôn luôn nối thêm phần tử vào cuối mảng bất kể trùng lặp.",
      "1": "Sai. Xóa phần tử khỏi mảng dùng `$pull` hoặc `$pop`, không phải `$push`.",
      "2": "Sai. Cả hai đều bảo toàn các phần tử hiện có trong mảng.",
      "3": "Sai. Điểm khác biệt cốt lõi là khả năng chống trùng lặp của `$addToSet`."
    },
    "keyTakeaway": "Dùng `$addToSet` để thêm phần tử vào mảng nhưng đảm bảo không bị trùng lặp; dùng `$push` khi cho phép thêm phần tử trùng."
  },
  {
    "id": 37,
    "topic": "Chapter 19: Removing Elements from Arrays (`$pull`)",
    "question": "Which update operator removes all instances of `'deprecated'` from the `tags` array in a document?",
    "options": [
      "`$pull: { tags: 'deprecated' }`",
      "`$deleteItem: { tags: 'deprecated' }`",
      "`$unset: { 'tags.deprecated': 1 }`",
      "`$removeFromArray: { tags: 'deprecated' }`"
    ],
    "correct": 0,
    "hint": "Trái ngược với `$push` (đẩy vào) là `$pull` (kéo ra khỏi mảng dựa trên giá trị hoặc điều kiện).",
    "explanations": {
      "0": "Chính xác! `$pull` loại bỏ khỏi mảng mọi phần tử khớp với giá trị hoặc điều kiện truy vấn chỉ định (ví dụ `{ $pull: { scores: { $lt: 5 } } }`).",
      "1": "Sai. Không có toán tử `$deleteItem`.",
      "2": "Sai. `$unset` trên phần tử mảng chỉ biến giá trị tại vị trí đó thành `null` chứ không rút gọn kích thước mảng.",
      "3": "Sai. Không có toán tử `$removeFromArray`."
    },
    "keyTakeaway": "Sử dụng `$pull` để xóa bỏ các phần tử khớp giá trị hoặc điều kiện khỏi một mảng trong MongoDB."
  },
  {
    "id": 38,
    "topic": "Chapter 19: Appending Multiple Elements with `$each`",
    "question": "If you want to push three separate items `'A'`, `'B'`, `'C'` individually into an array `letters` using `$push`, which modifier must be paired with `$push`?",
    "options": [
      "`$each`: `{ $push: { letters: { $each: ['A', 'B', 'C'] } } }`",
      "`$spread`: `{ $push: { letters: { $spread: ['A', 'B', 'C'] } } }`",
      "`$all`: `{ $push: { letters: { $all: ['A', 'B', 'C'] } } }`",
      "Simply passing `{ $push: { letters: ['A', 'B', 'C'] } }`"
    ],
    "correct": 0,
    "hint": "Nếu truyền thẳng `['A', 'B', 'C']` vào `$push`, MongoDB sẽ đẩy NGUYÊN MỘT MẢNG LỒNG NHAU vào làm 1 phần tử! Cần modifier giải nén từng phần tử.",
    "explanations": {
      "0": "Chính xác! Kết hợp `$each` với `$push` (hoặc `$addToSet`) giúp chèn từng phần tử `'A'`, `'B'`, `'C'` rời rạc vào mảng đích, thay vì tạo mảng lồng mảng `[['A', 'B', 'C']]`.",
      "1": "Sai. Không có toán tử `$spread` trong MongoDB.",
      "2": "Sai. `$all` là toán tử truy vấn mảng (tìm document chứa đủ mọi phần tử), không phải modifier của `$push`.",
      "3": "Sai. Truyền thẳng mảng sẽ biến `letters` thành mảng 2 chiều chứa một phần tử con là mảng `['A', 'B', 'C']`."
    },
    "keyTakeaway": "Dùng modifier `$each` kết hợp với `$push` hoặc `$addToSet` để thêm nhiều phần tử riêng lẻ vào mảng cùng một lúc."
  },
  {
    "id": 39,
    "topic": "Chapter 19: Purpose & Data Structure of MongoDB Indexes",
    "question": "What internal data structure do standard MongoDB indexes use, and what happens to query performance without an index?",
    "options": [
      "B-Tree structure; without an index, MongoDB must perform an expensive Collection Scan (`COLLSCAN`), inspecting every single document in the collection",
      "Linked List; without an index, MongoDB refuses to run any `find()` query",
      "Hash Map only; indexes slow down `find()` queries by 50%",
      "Graph Matrix; indexes delete duplicate documents automatically"
    ],
    "correct": 0,
    "hint": "Khi không có chỉ mục, MongoDB phải đọc tuần tự từ đầu đến cuối bộ sưu tập (`COLLSCAN`), rất chậm trên dữ liệu lớn.",
    "explanations": {
      "0": "Chính xác! Index trong MongoDB lưu trữ dưới cấu trúc **B-Tree** được sắp xếp sẵn, giúp nhảy thẳng tới vị trí tài liệu (`IXSCAN`) thay vì thực hiện Collection Scan (`COLLSCAN`) quét toàn bộ dữ liệu.",
      "1": "Sai. MongoDB vẫn chạy `find()` khi không có index, chỉ là chậm do phải thực hiện `COLLSCAN`.",
      "2": "Sai. Index tăng tốc đọc (`find`) vượt trội (chỉ làm chậm nhẹ thao tác ghi `insert`/`update` do phải cập nhật cây index).",
      "3": "Sai. Chỉ unique index mới ngăn trùng lặp, không phải cấu trúc Graph Matrix."
    },
    "keyTakeaway": "Index MongoDB sử dụng cây B-Tree giúp chuyển truy vấn từ `COLLSCAN` (quét toàn bộ) sang `IXSCAN` (quét chỉ mục) cực nhanh."
  },
  {
    "id": 40,
    "topic": "Chapter 19: Creating Indexes & Compound Index ESR Rule",
    "question": "When designing a Compound Index in MongoDB for queries filtering by equality, sorting, and filtering by range, what does the best-practice 'ESR Rule' stand for?",
    "options": [
      "Equality -> Sort -> Range (order of fields in the compound index definition)",
      "Encrypt -> Store -> Replicate",
      "Execute -> Select -> Return",
      "Embedded -> Sharded -> Relational"
    ],
    "correct": 0,
    "hint": "Quy tắc vàng sắp xếp thứ tự các trường trong Compound Index: Trường so sánh bằng (`=`) đứng đầu, tiếp đến trường `sort`, cuối cùng là trường khoảng giá trị (`$gt`, `$lt`).",
    "explanations": {
      "0": "Chính xác! Quy tắc **ESR (Equality - Sort - Range)** tối ưu hóa việc duyệt cây B-Tree của Compound Index: 1) Các trường lọc bằng (Equality) đứng đầu để thu hẹp phạm vi nhanh nhất; 2) Trường sắp xếp (Sort) đứng tiếp theo để kết quả đã được xếp thứ tự sẵn trong index (tránh sort tốn RAM); 3) Trường lọc khoảng (Range như `$gte`) đặt cuối cùng.",
      "1": "Sai. Đây không phải quy tắc ESR của Index.",
      "2": "Sai. Không liên quan đến thứ tự trường index.",
      "3": "Sai. Không phải quy tắc thiết kế index."
    },
    "keyTakeaway": "Quy tắc thiết kế Compound Index tối ưu là **ESR**: Equality (lọc bằng) -> Sort (sắp xếp) -> Range (lọc khoảng)."
  },
  {
    "id": 41,
    "topic": "Chapter 19: Multikey Indexes for Arrays",
    "question": "What type of index does MongoDB automatically create when you run `db.articles.createIndex({ tags: 1 })` on a field containing an array?",
    "options": [
      "Multikey Index (creates an index entry for every individual element inside the array)",
      "Text Index",
      "Hashed Index",
      "TTL (Time-To-Live) Index"
    ],
    "correct": 0,
    "hint": "Một document có mảng 5 phần tử sẽ tạo ra 5 khóa trỏ trong chỉ mục — gọi là chỉ mục đa khóa.",
    "explanations": {
      "0": "Chính xác! Khi đánh index trên một trường kiểu Array, MongoDB tự động tạo **Multikey Index**, lập chỉ mục cho từng phần tử bên trong mảng giúp truy vấn tìm kiếm phần tử mảng chạy tức thì. (Lưu ý: một compound index chỉ được phép chứa tối đa 1 trường mảng).",
      "1": "Sai. Text index phải khai báo rõ `{ field: 'text' }`.",
      "2": "Sai. Hashed index khai báo `{ field: 'hashed' }` (dùng cho sharding).",
      "3": "Sai. TTL index khai báo kèm `{ expireAfterSeconds: ... }` trên trường Date."
    },
    "keyTakeaway": "MongoDB tự động tạo **Multikey Index** khi đánh index lên trường dạng Array để tăng tốc độ tìm kiếm theo phần tử mảng."
  },
  {
    "id": 42,
    "topic": "Chapter 19: TTL (Time-To-Live) Indexes",
    "question": "How can you configure MongoDB to automatically delete session or OTP documents 3600 seconds after their `createdAt` timestamp?",
    "options": [
      "Create a TTL Index: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`",
      "Write a Java `while(true)` loop running every millisecond",
      "Use `db.sessions.autoDelete(3600)`",
      "Set `{ autoDrop: true }` in every insert command"
    ],
    "correct": 0,
    "hint": "MongoDB có tính năng chỉ mục tự động hết hạn (Time-To-Live) dành riêng cho các trường kiểu `Date`.",
    "explanations": {
      "0": "Chính xác! TTL Index (`expireAfterSeconds`) là loại single-field index đặc biệt trên trường `Date`. Một tiến trình nền của MongoDB chạy định kỳ mỗi 60 giây để tự động xóa các document đã quá thời hạn quy định.",
      "1": "Sai. Viết vòng lặp polling thủ công vừa tốn tài nguyên vừa không cần thiết khi DB đã hỗ trợ sẵn.",
      "2": "Sai. Không có phương thức `autoDelete()`.",
      "3": "Sai. Không có tùy chọn `autoDrop` khi insert."
    },
    "keyTakeaway": "Dùng **TTL Index** (`{ expireAfterSeconds: N }`) trên trường `Date` để MongoDB tự động dọn dẹp dữ liệu hết hạn (sessions, logs, OTP)."
  },
  {
    "id": 43,
    "topic": "Chapter 19: Geospatial & Full-Text Indexing",
    "question": "Which index types does MongoDB provide natively to support location-based queries (e.g. nearest stores) and keyword text search (Slide 7)?",
    "options": [
      "`2dsphere` Geospatial Index and `text` Full-Text Index",
      "`geoSQL` Index and `regex` Index",
      "`map3D` Index and `like` Index",
      "MongoDB does not support geospatial or text search"
    ],
    "correct": 0,
    "hint": "Slide 7 (Ch 19): 'Full-Text Search: Efficiently search for specific terms or phrases. Geospatial Indexing: Store and query location data efficiently'.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 19): MongoDB tích hợp sẵn `2dsphere` (tính toán khoảng cách trên bề mặt hình cầu Trái Đất với GeoJSON) cho bài toán bản đồ/vị trí, và `text` index hỗ trợ tìm kiếm toàn văn bản (stemming, stop words).",
      "1": "Sai. Không có loại index tên `geoSQL` hay `regex`.",
      "2": "Sai. Không có `map3D` hay `like` index.",
      "3": "Sai. Đây là hai tính năng nổi bật được liệt kê rõ trong Slide 7."
    },
    "keyTakeaway": "MongoDB hỗ trợ `2dsphere` cho truy vấn địa lý (Geospatial) và `text` index cho tìm kiếm toàn văn bản (Full-Text Search)."
  },
  {
    "id": 44,
    "topic": "Chapter 19: Query Execution Plan (`explain()`) Analysis",
    "question": "When running `db.orders.find({ customerId: 50 }).explain('executionStats')`, which stage name indicates the query utilized an index efficiently?",
    "options": [
      "`IXSCAN`",
      "`COLLSCAN`",
      "`FULL_TABLE_READ`",
      "`BRUTE_FORCE`"
    ],
    "correct": 0,
    "hint": "'IX' là viết tắt của Index, 'COLL' là viết tắt của Collection.",
    "explanations": {
      "0": "Chính xác! Trong kết quả `explain()`, giai đoạn `IXSCAN` (Index Scan) chứng tỏ MongoDB đã sử dụng chỉ mục để tìm tài liệu nhanh chóng. Nếu thấy `COLLSCAN` (Collection Scan), nghĩa là truy vấn đang phải quét toàn bộ collection.",
      "1": "Sai. `COLLSCAN` là dấu hiệu cảnh báo truy vấn KHÔNG dùng được index và đang quét tuần tự mọi document.",
      "2": "Sai. Không có tên stage này trong MongoDB.",
      "3": "Sai. Không có tên stage này."
    },
    "keyTakeaway": "Kiểm tra bằng `.explain('executionStats')`: `IXSCAN` nghĩa là đang dùng Index hiệu quả, `COLLSCAN` nghĩa là đang quét toàn bộ collection chậm chạp."
  },
  {
    "id": 45,
    "topic": "Chapter 19: Replica Sets & High Availability",
    "question": "In a MongoDB Replica Set (Slide 9), what are the roles of the Primary and Secondary nodes, and how do Secondaries stay synchronized?",
    "options": [
      "The Primary node receives all write operations and records them in its `oplog` (operations log); Secondary nodes asynchronously replicate the `oplog` and can win an election to become Primary if the Primary fails",
      "All nodes receive writes randomly without any coordination",
      "Secondary nodes only store old deleted files",
      "Replica sets are only used for graphical UI rendering"
    ],
    "correct": 0,
    "hint": "Slide 7 & 9 (Ch 19): 'High Availability: Replica Sets - Replicated sets of data for high availability'. Nhật ký thao tác ghi gọi là `oplog`.",
    "explanations": {
      "0": "Chính xác! Trong Replica Set, chỉ có 1 nút **Primary** tiếp nhận tất cả thao tác ghi (mặc định) và ghi nhận vào `oplog` (capped collection). Các nút **Secondary** liên tục sao chép bất đồng bộ từ `oplog` để đồng bộ dữ liệu, hỗ trợ đọc phân tải và tự động bầu chọn (automatic failover election) nếu nút Primary sập.",
      "1": "Sai. Mô hình ghi tập trung tại Primary giúp đảm bảo tính nhất quán dữ liệu.",
      "2": "Sai. Secondary lưu bản sao đầy đủ dữ liệu sống của Primary.",
      "3": "Sai. Replica Set là kiến trúc phân tán cụm máy chủ backend."
    },
    "keyTakeaway": "Replica Set đảm bảo High Availability: Primary nhận lệnh ghi vào `oplog`, các Secondary đồng bộ `oplog` và tự động bầu Primary mới khi có sự cố."
  },
  {
    "id": 46,
    "topic": "Chapter 19: Sharding Architecture Components",
    "question": "In a MongoDB Sharded Cluster, what is the role of the `mongos` router process?",
    "options": [
      "It acts as the query router that clients connect to, directing queries to the appropriate Shard(s) using metadata from Config Servers",
      "It is a Java compiler plugin",
      "It stores actual user passwords in plain text",
      "It compresses images into PNG format"
    ],
    "correct": 0,
    "hint": "Trong cụm Sharding có 3 thành phần: Shards (chứa dữ liệu), Config Servers (chứa metadata vị trí chunk), và `mongos` (bộ định tuyến).",
    "explanations": {
      "0": "Chính xác! `mongos` là tiến trình định tuyến (query router) đóng vai trò giao diện duy nhất mà ứng dụng client kết nối tới. Nó đọc bản đồ phân mảnh từ Config Servers để chuyển tiếp truy vấn đến đúng Shard chứa dữ liệu (targeted query) hoặc gom kết quả từ nhiều Shard.",
      "1": "Sai. `mongos` là binary thuộc bộ cài MongoDB Server.",
      "2": "Sai. Không lưu mật khẩu plain text.",
      "3": "Sai. Không xử lý nén ảnh."
    },
    "keyTakeaway": "Trong kiến trúc Sharding, `mongos` là bộ định tuyến truy vấn dựa trên metadata từ Config Servers tới các Shard chứa dữ liệu."
  },
  {
    "id": 47,
    "topic": "Chapter 19: Aggregation Pipeline Basics",
    "question": "What does the `$match` stage do in a MongoDB Aggregation Pipeline (`db.orders.aggregate([...])`), and why is it best placed at the BEGINNING of the pipeline?",
    "options": [
      "It filters documents like a `find()` query; placing it first minimizes the number of documents passing into heavier downstream stages like `$group` and allows index usage",
      "It groups documents together and calculates sums",
      "It joins two collections together",
      "It always sorts documents randomly"
    ],
    "correct": 0,
    "hint": "Tương đương mệnh đề `WHERE` trong SQL — lọc bớt dữ liệu rác ngay từ đầu đường ống sẽ giảm tải cho toàn bộ các bước tính toán phía sau.",
    "explanations": {
      "0": "Chính xác! `$match` lọc bớt document không đạt điều kiện. Đặt `$match` (và `$sort`) ngay đầu pipeline giúp thu hẹp tập dữ liệu đầu vào sớm nhất và tận dụng được Index của collection trước khi đi qua các bước biến đổi.",
      "1": "Sai. Gom nhóm và tính tổng là nhiệm vụ của giai đoạn `$group`.",
      "2": "Sai. Phép nối (Left Outer Join) là nhiệm vụ của giai đoạn `$lookup`.",
      "3": "Sai. `$match` không sắp xếp ngẫu nhiên."
    },
    "keyTakeaway": "`$match` lọc dữ liệu đầu vào giống `WHERE`; nên đặt đầu Aggregation Pipeline để tận dụng Index và giảm tải các bước sau."
  },
  {
    "id": 48,
    "topic": "Chapter 19: Aggregation `$group` & Accumulators",
    "question": "In an Aggregation Pipeline, what does `{ $group: { _id: '$department', totalSalary: { $sum: '$salary' }, avgSalary: { $avg: '$salary' } } }` compute?",
    "options": [
      "It groups documents by distinct `department` values and calculates the sum and average of `salary` for each department",
      "It deletes all employees whose salary is below average",
      "It merges all collections into a single document",
      "It renames the `department` field to `totalSalary`"
    ],
    "correct": 0,
    "hint": "Trong `$group`, trường `_id` chỉ định khóa gom nhóm (giống `GROUP BY department` trong SQL). Các toán tử như `$sum`, `$avg`, `$min`, `$max`, `$count` là accumulators.",
    "explanations": {
      "0": "Chính xác! `$group` gom các document có cùng giá trị `'$department'` (truyền qua `_id` của `$group`) lại với nhau và tính tổng (`$sum`) cũng như trung bình (`$avg`) trên trường `salary` của mỗi phòng ban.",
      "1": "Sai. Aggregation pipeline mặc định không xóa dữ liệu trong collection.",
      "2": "Sai. Nó tạo ra một document đầu ra cho mỗi giá trị `department` duy nhất.",
      "3": "Sai. Đổi tên hoặc chọn lọc trường đầu ra là nhiệm vụ của `$project`."
    },
    "keyTakeaway": "Giai đoạn `$group` dùng `_id: '$field'` làm khóa gom nhóm (như `GROUP BY`) kết hợp với các hàm tích lũy `$sum`, `$avg`, `$min`, `$max`."
  },
  {
    "id": 49,
    "topic": "Chapter 19: Aggregation `$unwind` & `$lookup`",
    "question": "What are the distinct roles of `$unwind` and `$lookup` inside a MongoDB Aggregation Pipeline?",
    "options": [
      "`$unwind` deconstructs an array field into multiple separate documents (one per array element); `$lookup` performs a left outer join with another collection",
      "`$unwind` deletes arrays permanently; `$lookup` opens a web browser",
      "`$unwind` sorts documents; `$lookup` creates a database backup",
      "Both perform identical sorting operations"
    ],
    "correct": 0,
    "hint": "`$unwind` giúp 'trải phẳng' mảng (ví dụ mảng 3 sản phẩm trong 1 đơn hàng thành 3 dòng để dễ đếm bán chạy); `$lookup` nối dữ liệu từ collection khác.",
    "explanations": {
      "0": "Chính xác! `$unwind: '$items'` tách một document có mảng `items` dài N phần tử thành N document riêng lẻ để xử lý thống kê từng phần tử. Còn `$lookup` thực hiện Left Outer Join kết nối document hiện tại với một collection khác trong cùng database.",
      "1": "Sai. Cả hai chỉ biến đổi dữ liệu luân chuyển trong pipeline để đọc/xuất báo cáo.",
      "2": "Sai. Sắp xếp là `$sort`, sao lưu là `mongodump`.",
      "3": "Sai. Hai stage này giải quyết hai bài toán hoàn toàn khác nhau."
    },
    "keyTakeaway": "`$unwind` tách các phần tử mảng thành từng document riêng lẻ; `$lookup` thực hiện phép nối (Left Outer Join) giữa hai collection."
  },
  {
    "id": 50,
    "topic": "Chapter 19: Data Export & Import Tools (`mongoexport` vs `mongodump`)",
    "question": "In MongoDB Database Tools (Chapter 19, Slide 2 & 28-29), what is the difference between `mongoexport` and `mongodump`?",
    "options": [
      "`mongoexport` outputs human-readable JSON or CSV files (useful for data exchange/Excel); `mongodump` outputs compact binary BSON backups preserving full BSON types and index metadata",
      "`mongodump` deletes the database immediately without saving anything",
      "`mongoexport` only works on Linux, while `mongodump` only works on Windows",
      "There is no difference; they produce identical plain text CSV files"
    ],
    "correct": 0,
    "hint": "Slide 2 & 28-29 (Ch 19): 'Data Import/Export'. Một công cụ xuất JSON/CSV dễ đọc cho con người, một công cụ sao lưu nhị phân BSON chuẩn mực cho hệ thống.",
    "explanations": {
      "0": "Chính xác! `mongoexport` (đi cặp với `mongoimport`) xuất dữ liệu ra định dạng JSON hoặc CSV dễ đọc để trao đổi với bên thứ ba, nhưng có thể mất độ chính xác một số kiểu BSON đặc biệt. Ngược lại, `mongodump` (đi cặp với `mongorestore`) sao lưu nhị phân BSON giữ nguyên 100% kiểu dữ liệu và định nghĩa index, chuyên dùng cho backup/restore sản phẩm.",
      "1": "Sai. `mongodump` tạo bản sao lưu an toàn chứ không xóa dữ liệu.",
      "2": "Sai. Cả hai công cụ đều chạy đa nền tảng (Windows, Linux, macOS).",
      "3": "Sai. Định dạng đầu ra khác hẳn nhau (JSON/CSV vs BSON binary)."
    },
    "keyTakeaway": "Dùng `mongoexport`/`mongoimport` cho JSON/CSV; dùng `mongodump`/`mongorestore` để sao lưu và phục hồi nhị phân BSON toàn vẹn."
  },
  {
    "id": 51,
    "topic": "Chapter 19: MongoDB Compass GUI",
    "question": "What is 'MongoDB Compass' demonstrated in Chapter 19 (Slide 19-31)?",
    "options": [
      "The official graphical user interface (GUI) for MongoDB to visually explore schemas, run queries, build aggregation pipelines, and manage indexes",
      "A command-line compiler for Java Spring Boot",
      "A hardware GPS device built by MongoDB Inc.",
      "A JavaScript testing library similar to Jest"
    ],
    "correct": 0,
    "hint": "Slide 19 & 31 (Ch 19): Giao diện đồ họa chính chủ của MongoDB giúp trực quan hóa collections, documents và chạy thử CRUD mà không cần nhớ mọi lệnh shell.",
    "explanations": {
      "0": "Chính xác! Slide 19 & 31 (Ch 19): MongoDB Compass là phần mềm GUI chính thức của MongoDB, cho phép kết nối tới local hoặc Atlas, xem biểu đồ schema, tạo/sửa/xóa document trực quan, chạy câu truy vấn, thiết kế Aggregation Pipeline kéo thả và xem biểu đồ hiệu năng.",
      "1": "Sai. Không phải trình biên dịch Java.",
      "2": "Sai. 'Compass' là tên phần mềm quản trị CSDL, không phải thiết bị định vị GPS.",
      "3": "Sai. Không phải thư viện test JS."
    },
    "keyTakeaway": "MongoDB Compass là công cụ GUI chính thức để trực quan hóa dữ liệu, thực thi truy vấn, phân tích schema và tối ưu index."
  },
  {
    "id": 52,
    "topic": "Chapter 20 & 21: MongoDB Atlas Cloud",
    "question": "What is 'MongoDB Atlas' used in Chapters 20 and 21 (Slide 10 & Slide 4)?",
    "options": [
      "MongoDB's fully managed multi-cloud Database-as-a-Service (DBaaS) platform hosted on AWS, Azure, or Google Cloud",
      "A local offline Windows installer `.msi` file",
      "An HTML template engine for Spring MVC",
      "A version control system replacing Git"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 20) & Slide 4 (Ch 21): 'Open MongoDB Atlas -> Create a database -> Create collections'. Nền tảng đám mây giúp khởi tạo cụm MongoDB miễn phí/trả phí chỉ trong vài phút.",
    "explanations": {
      "0": "Chính xác! MongoDB Atlas là dịch vụ cơ sở dữ liệu đám mây được quản lý hoàn toàn (DBaaS) do chính MongoDB vận hành trên AWS, Google Cloud và Azure, cung cấp sẵn Replica Set, sao lưu tự động, bảo mật mạng và chuỗi kết nối `mongodb+srv://...`.",
      "1": "Sai. File cài đặt offline trên máy cá nhân là MongoDB Community Server (Slide 13, Ch 19).",
      "2": "Sai. Template engine cho Spring MVC là Thymeleaf hoặc JSP.",
      "3": "Sai. Không phải hệ thống quản lý mã nguồn."
    },
    "keyTakeaway": "MongoDB Atlas là dịch vụ đám mây DBaaS chính thức của MongoDB, tự động quản lý cụm cluster, sao lưu và mở rộng."
  },
  {
    "id": 53,
    "topic": "Chapter 20: Spring Data MongoDB Dependency",
    "question": "Which Maven starter dependency enables Spring Data MongoDB integration in a Spring Boot `pom.xml`?",
    "options": [
      "`spring-boot-starter-data-mongodb`",
      "`spring-boot-starter-data-jpa`",
      "`spring-boot-starter-mongodb-sql`",
      "`hibernate-mongodb-core`"
    ],
    "correct": 0,
    "hint": "Tên starter tuân theo quy ước chuẩn của Spring Boot: `spring-boot-starter-data-<tên_csdl>`.",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 20) & Slide 16 (Ch 21): Thêm `spring-boot-starter-data-mongodb` vào `pom.xml` sẽ tự động kéo theo MongoDB Java Driver, `MongoTemplate` và `MongoRepository`.",
      "1": "Sai. `spring-boot-starter-data-jpa` dành cho cơ sở dữ liệu quan hệ SQL (MySQL, PostgreSQL, H2) thông qua Hibernate.",
      "2": "Sai. Không tồn tại starter tên `mongodb-sql`.",
      "3": "Sai. Hibernate không phải thư viện dùng cho Spring Data MongoDB chuẩn."
    },
    "keyTakeaway": "Khai báo dependency `spring-boot-starter-data-mongodb` trong `pom.xml` để tích hợp Spring Data MongoDB vào Spring Boot."
  },
  {
    "id": 54,
    "topic": "Chapter 20 & 21: Spring Boot MongoDB Connection URI",
    "question": "Which property in `application.properties` configures the connection string (including username, password, host, and database) to MongoDB Atlas or local MongoDB?",
    "options": [
      "`spring.data.mongodb.uri=mongodb+srv://user:pass@cluster.mongodb.net/mydb`",
      "`spring.datasource.url=jdbc:mongodb://localhost:27017/mydb`",
      "`spring.jpa.mongodb.connect=localhost:27017`",
      "`mongodb.connection.string=http://localhost:27017`"
    ],
    "correct": 0,
    "hint": "Slide 15 (Ch 21): Spring Data MongoDB dùng tiền tố `spring.data.mongodb.*`, không dùng `spring.datasource.url` (JDBC).",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 21): Cấu hình chuẩn trong Spring Boot là `spring.data.mongodb.uri` (hỗ trợ cả `mongodb://` cho local và `mongodb+srv://` cho Atlas Cloud) hoặc tách lẻ thành `.host`, `.port`, `.database`.",
      "1": "Sai. `spring.datasource.url` và tiền tố `jdbc:` chỉ dùng cho hệ CSDL quan hệ qua JDBC Driver.",
      "2": "Sai. Không có cấu hình `spring.jpa.mongodb`.",
      "3": "Sai. Giao thức kết nối MongoDB là `mongodb://`, không phải `http://`."
    },
    "keyTakeaway": "Cấu hình kết nối MongoDB trong Spring Boot thông qua thuộc tính `spring.data.mongodb.uri` (hoặc `.host`, `.port`, `.database`)."
  },
  {
    "id": 55,
    "topic": "Chapter 20: Spring Data MongoDB Domain Mapping Annotations",
    "question": "In a Spring Data MongoDB entity class `Student.java`, what is the purpose of `@Document`, `@Id`, and `@Field(\"full_name\")`?",
    "options": [
      "`@Document` maps the class to a MongoDB collection, `@Id` marks the primary key mapping to `_id`, and `@Field` customizes the BSON field name in the document",
      "`@Document` creates a Word `.docx` file, `@Id` generates a random URL, and `@Field` hides the property",
      "They are standard JPA annotations required by Hibernate SQL tables",
      "They encrypt all fields with RSA-2048 before saving"
    ],
    "correct": 0,
    "hint": "Slide 16-17 (Ch 20) & Slide 10-11 (Ch 21): Lưu ý `@Id` ở đây import từ gói `org.springframework.data.annotation.Id`, không phải `jakarta.persistence.Id`.",
    "explanations": {
      "0": "Chính xác! `@Document(collection = \"students\")` ánh xạ lớp Java với collection; `@Id` (`org.springframework.data.annotation.Id`) ánh xạ trường Java với `_id` của MongoDB; `@Field(\"full_name\")` quy định tên khóa lưu thực tế trong BSON document khác với tên biến Java.",
      "1": "Sai. Đây là các annotation ánh xạ đối tượng dữ liệu (ODM), không tạo file Word.",
      "2": "Sai. JPA dùng `@Entity`, `@Table`, `@Column` cho CSDL quan hệ.",
      "3": "Sai. Các annotation này chỉ ánh xạ cấu trúc, không mã hóa dữ liệu."
    },
    "keyTakeaway": "Dùng `@Document`, `@Id` (`org.springframework.data.annotation.Id`) và `@Field` để ánh xạ Java POJO sang BSON Document."
  },
  {
    "id": 56,
    "topic": "Chapter 20: Derived Query Methods in `MongoRepository`",
    "question": "Given `interface UserRepository extends MongoRepository<User, String>`, what does declaring `List<User> findByFirstNameAndAgeGreaterThan(String firstName, int age);` achieve (Chapter 20, Slide 7)?",
    "options": [
      "Spring Data automatically parses the method name at startup and generates the corresponding MongoDB query `{ firstName: ?0, age: { $gt: ?1 } }` without manual implementation",
      "It causes a `MethodNotImplementedException` unless you write an implementation class",
      "It runs a raw SQL `SELECT` statement against MySQL",
      "It deletes all users matching the name"
    ],
    "correct": 0,
    "hint": "Slide 6 & 7 (Ch 20): 'Define – Don't Implement... Spring translates method names into MongoDB queries'.",
    "explanations": {
      "0": "Chính xác! Slide 6 & 7 (Ch 20): Cơ chế Derived Query Methods cho phép định nghĩa tên phương thức theo quy ước (`findBy...And...GreaterThan`), Spring Data MongoDB sẽ tự động tạo proxy thực thi câu truy vấn MongoDB tương ứng lúc chạy.",
      "1": "Sai. Bạn KHÔNG cần viết lớp implement; Spring tự động tạo proxy implementation tại runtime.",
      "2": "Sai. Spring Data MongoDB dịch tên hàm sang MongoDB Query JSON, không phải SQL.",
      "3": "Sai. Tiền tố `findBy...` là thao tác đọc dữ liệu (muốn xóa phải dùng `deleteBy...`)."
    },
    "keyTakeaway": "Đặt tên phương thức trong `MongoRepository` theo quy chuẩn (`findBy...`) để Spring Data tự động dịch thành câu truy vấn MongoDB mà không cần code thủ công."
  },
  {
    "id": 57,
    "topic": "Chapter 20: Custom JSON Queries with `@Query` in MongoDB",
    "question": "How do you write an explicit MongoDB JSON query directly on a `MongoRepository` method using `@Query`?",
    "options": [
      "`@Query(\"{ 'age': { $gte: ?0, $lte: ?1 } }\") List<Student> findByAgeRange(int min, int max);`",
      "`@Query(\"SELECT s FROM Student s WHERE s.age BETWEEN ?1 AND ?2\")`",
      "`@MongoSql(\"age >= :min\")`",
      "`@FindDocument(where = \"age > min\")`"
    ],
    "correct": 0,
    "hint": "Chú ý chỉ số tham số trong `@Query` của Spring Data MongoDB bắt đầu từ `?0`, `?1`... và viết bên trong chuỗi JSON chuẩn MongoDB.",
    "explanations": {
      "0": "Chính xác! Trong Spring Data MongoDB, annotation `@Query` (`org.springframework.data.mongodb.repository.Query`) nhận vào chuỗi JSON truy vấn gốc của MongoDB với tham số đánh số từ `?0`, `?1`...",
      "1": "Sai. Cú pháp `SELECT s FROM Student s...` là JPQL dùng cho JPA/Hibernate, không phải MongoDB.",
      "2": "Sai. Không có annotation `@MongoSql`.",
      "3": "Sai. Không có annotation `@FindDocument`."
    },
    "keyTakeaway": "Dùng `@Query(\"{ 'field': { $op: ?0 } }\")` trên `MongoRepository` khi cần viết truy vấn MongoDB JSON tùy chỉnh phức tạp."
  },
  {
    "id": 58,
    "topic": "Chapter 20: `MongoTemplate` vs `MongoRepository`",
    "question": "When is `MongoTemplate` preferred over `MongoRepository` in Spring Data MongoDB (Chapter 20, Slide 4 & 8)?",
    "options": [
      "When executing dynamic multi-condition queries (`Criteria`), partial atomic updates (`Update` with `$inc`/`$push`), bulk operations, or complex Aggregation Pipelines",
      "For simple `findById` or `save` CRUD methods where `MongoRepository` is already sufficient",
      "Only when configuring HTML templates in JSP",
      "`MongoTemplate` is deprecated and removed in Spring Boot 3"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 20): 'MongoTemplate: Flexible Data Access. Provides a lower-level API for complex queries and updates. Supports aggregation framework... Useful for advanced scenarios'.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 20): `MongoTemplate` cung cấp API cấp thấp linh hoạt hơn `MongoRepository`, cực kỳ mạnh khi bạn cần lắp ghép điều kiện lọc động theo ý người dùng (`Query` + `Criteria`), thực hiện cập nhật nguyên tử từng trường (`Update().inc(...).set(...)`), hay chạy Aggregation Pipeline phức tạp.",
      "1": "Sai. Với CRUD đơn giản thì `MongoRepository` gọn nhẹ và nhanh hơn nhiều.",
      "2": "Sai. `MongoTemplate` thuộc tầng truy xuất dữ liệu, không liên quan đến HTML/JSP.",
      "3": "Sai. `MongoTemplate` vẫn là thành phần cốt lõi quan trọng nhất của Spring Data MongoDB hiện nay."
    },
    "keyTakeaway": "Dùng `MongoRepository` cho CRUD và truy vấn chuẩn; dùng `MongoTemplate` khi cần truy vấn động (`Criteria`), cập nhật nguyên tử (`Update`) hoặc Aggregation phức tạp."
  },
  {
    "id": 59,
    "topic": "Chapter 20 & 21: Embedded Documents vs `@DBRef` / `@DocumentReference`",
    "question": "In Spring Data MongoDB, what is a key performance trade-off of using `@DBRef` (or `@DocumentReference`) compared to embedding a nested object directly inside a document?",
    "options": [
      "`@DBRef` stores only a reference pointer to another collection, requiring additional database queries to resolve the referenced document (similar to N+1), whereas embedded objects are retrieved in a single read",
      "`@DBRef` automatically performs high-speed SQL inner joins inside the Java compiler",
      "Embedded objects cannot be queried using dot notation",
      "`@DBRef` reduces the maximum document size from 16MB to 1KB"
    ],
    "correct": 0,
    "hint": "MongoDB được thiết kế theo nguyên lý 'Data that is accessed together should be stored together'. Truy vấn tham chiếu tách collection đòi hỏi thêm bước tra cứu bổ sung.",
    "explanations": {
      "0": "Chính xác! `@DBRef` lưu một con trỏ `{ $ref, $id }` sang document ở collection khác. Khi đọc document chính, Spring Data phải phát sinh thêm truy vấn phụ để nạp các tài liệu tham chiếu đó. Ngược lại, nhúng trực tiếp (Embedding) cho phép lấy toàn bộ dữ liệu liên quan chỉ trong 1 lần đọc duy nhất.",
      "1": "Sai. Java compiler không thực hiện SQL join, và MongoDB không có join truyền thống khi dùng `@DBRef`.",
      "2": "Sai. Embedded objects truy vấn rất tốt bằng Dot Notation (`address.city`).",
      "3": "Sai. `@DBRef` không thu nhỏ giới hạn 16MB của BSON."
    },
    "keyTakeaway": "Ưu tiên **Embedding** cho dữ liệu truy cập cùng nhau để tối ưu tốc độ 1 lần đọc; chỉ dùng `@DBRef` / `@DocumentReference` khi dữ liệu con quá lớn (gần 16MB) hoặc chia sẻ độc lập nhiều nơi."
  },
  {
    "id": 60,
    "topic": "Chapter 19: Raw Java Driver (`MongoClient` & `MongoCollection`)",
    "question": "Before using Spring Data abstractions, when working directly with the official MongoDB Java Driver (Chapter 19, Slide 30-35), which core class represents the entry point connection pool to the MongoDB server?",
    "options": [
      "`MongoClient` (created via `MongoClients.create(connectionString)`)",
      "`JdbcDriverManager`",
      "`HibernateSessionFactory`",
      "`SpringMvcDispatcher`"
    ],
    "correct": 0,
    "hint": "Slide 30-35 (Ch 19) minh họa kết nối MongoDB bằng Java thuần: tạo client kết nối -> lấy `MongoDatabase` -> lấy `MongoCollection<Document>`.",
    "explanations": {
      "0": "Chính xác! Trong MongoDB Java Sync Driver thuần, `MongoClient` (khởi tạo bằng `MongoClients.create(...)`) quản lý kết nối pool tới server/cluster. Từ đó gọi `.getDatabase(\"dbName\")` để lấy `MongoDatabase`, và `.getCollection(\"colName\")` để lấy `MongoCollection<Document>` thao tác CRUD.",
      "1": "Sai. `DriverManager` là API của JDBC dành cho cơ sở dữ liệu SQL.",
      "2": "Sai. `SessionFactory` là của Hibernate ORM.",
      "3": "Sai. `DispatcherServlet` là bộ điều phối Web của Spring MVC."
    },
    "keyTakeaway": "Luồng kết nối MongoDB Java Driver thuần: `MongoClients.create()` -> `MongoClient` -> `MongoDatabase` -> `MongoCollection<Document>`."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_11_DATA;
}
