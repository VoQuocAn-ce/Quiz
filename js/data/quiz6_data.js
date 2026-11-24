// QUIZ 6 DATA: Client-Server Communication, Axios & Data Caching (Chapters 07, 08, 15)
const QUIZ_6_DATA = [
  {
    "id": 1,
    "topic": "Chapter 07: Axios vs Fetch API",
    "question": "What is a major advantage of using `Axios` over the native browser `Fetch API` for REST communication?",
    "options": [
      "Axios automatically transforms JSON data, rejects promises on HTTP error status codes (e.g. 404, 500), and supports request/response interceptors",
      "Fetch API only works on desktop computers while Axios works on smartphones",
      "Axios bypasses all backend security firewalls automatically",
      "Fetch API cannot send HTTP POST requests"
    ],
    "correct": 0,
    "hint": "Slide 3 & 5 (Ch 07): `fetch` không coi mã 404 hay 500 là lỗi (nó vẫn resolve Promise), và yêu cầu phải gọi thủ công `.json()`. Trong khi Axios tự động làm tất cả những điều này.",
    "explanations": {
      "0": "Chính xác! Slide 3 & 5 (Ch 07): Axios vượt trội hơn `fetch` ở các điểm: tự động parse JSON (không cần gọi `res.json()`), tự động ném exception (reject Promise) khi gặp mã lỗi 4xx/5xx, và hỗ trợ hệ thống Interceptors mạnh mẽ để can thiệp vào request/response.",
      "1": "Sai. Cả Fetch và Axios đều hoạt động tốt trên cả máy tính và thiết bị di động.",
      "2": "Sai. Axios tuân thủ đầy đủ các chuẩn HTTP và không thể vượt tường lửa bảo mật.",
      "3": "Sai. Fetch API hỗ trợ đầy đủ các phương thức GET, POST, PUT, DELETE."
    },
    "keyTakeaway": "Axios tự động chuyển đổi dữ liệu JSON, tự động reject Promise khi gặp mã trạng thái lỗi HTTP (4xx/5xx) và hỗ trợ Request/Response Interceptors."
  },
  {
    "id": 2,
    "topic": "Chapter 07: Creating Custom Axios Instances",
    "question": "Which Axios method is used to configure a reusable client instance with a predefined `baseURL` and global headers?",
    "options": [
      "`axios.create({ baseURL: 'http://localhost:8080/api' })`",
      "`axios.newInstance({ url: 'http://localhost:8080/api' })`",
      "`new AxiosClient('http://localhost:8080/api')`",
      "`axios.setupGlobalConfig({ path: 'http://localhost:8080/api' })`"
    ],
    "correct": 0,
    "hint": "Slide 6 (Ch 07): Phương thức tạo instance của Axios giúp bạn không phải viết lại địa chỉ domain máy chủ ở mọi lệnh gọi API.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 07): `const apiClient = axios.create({ baseURL: '...', timeout: 10000 });`. Instance này cho phép tập trung hóa cấu hình gốc (baseURL, timeout, headers mặc định) cho toàn bộ ứng dụng.",
      "1": "Sai. Không có phương thức `axios.newInstance()`.",
      "2": "Sai. Axios không sử dụng hàm khởi tạo `new AxiosClient()`.",
      "3": "Sai. `setupGlobalConfig` không tồn tại trong Axios API."
    },
    "keyTakeaway": "Sử dụng `axios.create({ baseURL: '...' })` để tạo các client instance dùng chung với cấu hình tập trung cho toàn bộ ứng dụng."
  },
  {
    "id": 3,
    "topic": "Chapter 07: Axios Request Interceptors",
    "question": "What is the primary use case of an Axios `request interceptor`?",
    "options": [
      "To automatically inject an `Authorization: Bearer <token>` header into every outgoing HTTP request before it leaves the browser",
      "To block all incoming telephone calls on the user's mobile device",
      "To alter the user's physical IP address",
      "To convert HTML into binary machine code"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 07): `apiClient.interceptors.request.use(...)` cho phép kiểm tra và chèn token xác thực vào tiêu đề của mọi request một cách tự động.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 07): Request Interceptors là nơi lý tưởng để tự động đính kèm JWT Token vào Header (`config.headers.Authorization = 'Bearer ' + token`) trước khi request được gửi đi, đảm bảo tính bảo mật thống nhất mà không cần viết lặp lại ở từng hàm.",
      "1": "Sai. Đây là chức năng của hệ điều hành điện thoại, không liên quan đến thư viện mạng của web.",
      "2": "Sai. Trình duyệt web không thể tự thay đổi địa chỉ IP vật lý của máy khách.",
      "3": "Sai. Interceptor xử lý dữ liệu cấu hình request, không biên dịch HTML sang mã máy."
    },
    "keyTakeaway": "Axios Request Interceptors cho phép tự động can thiệp và chèn Header xác thực (Bearer Token) vào mọi yêu cầu trước khi gửi lên máy chủ."
  },
  {
    "id": 4,
    "topic": "Chapter 07: Axios Response Interceptors",
    "question": "How can you use an Axios `response interceptor` to handle token expiration (401 Unauthorized) globally?",
    "options": [
      "By catching 401 error responses centrally, refreshing the authentication token, and retrying the original request or redirecting to `/login`",
      "By closing the user's browser immediately with zero warning",
      "By disabling the user's internet connection permanently",
      "By deleting the backend MySQL database"
    ],
    "correct": 0,
    "hint": "Slide 9 (Ch 07): `apiClient.interceptors.response.use(res => res, error => { if (error.response?.status === 401) ... })`.",
    "explanations": {
      "0": "Chính xác! Slide 9 (Ch 07): Response Interceptors giúp bắt các mã lỗi trả về trên toàn hệ thống. Khi gặp mã 401 (Unauthorized - token hết hạn), interceptor có thể tự động gọi API refresh token hoặc xóa thông tin đăng nhập và điều hướng người dùng về trang login.",
      "1": "Sai. Trình duyệt không cho phép script tự ý đóng cửa sổ mà không có tương tác người dùng.",
      "2": "Sai. JavaScript trên web không thể ngắt kết nối mạng của máy tính.",
      "3": "Sai. Client không thể tự xóa cơ sở dữ liệu trên server."
    },
    "keyTakeaway": "Axios Response Interceptors là chốt chặn hoàn hảo để bắt tập trung các mã lỗi HTTP như 401 Unauthorized để xử lý refresh token hoặc điều hướng đăng nhập."
  },
  {
    "id": 5,
    "topic": "Chapter 07: Async/Await & Error Handling",
    "question": "Which of the following code snippets correctly handles errors during an asynchronous Axios GET request?",
    "options": [
      "```javascript\ntry {\n  const response = await axios.get('/api/students');\n  setData(response.data);\n} catch (error) {\n  console.error('Fetch failed:', error.response?.data || error.message);\n}\n```",
      "```javascript\nconst response = axios.get('/api/students');\nif (response == 'error') { alert('Failed'); }\n```",
      "```javascript\nawait axios.get('/api/students').catchWithoutError();\n```",
      "```javascript\naxios.get('/api/students').then(() => { throw 'Crash'; });\n```"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 07): Chuẩn mực xử lý bất đồng bộ trong JavaScript hiện đại là kết hợp cặp từ khóa `async/await` với khối lệnh `try...catch`.",
    "explanations": {
      "0": "Chính xác! Slide 11 (Ch 07): Khối `try...catch` bọc quanh lệnh `await axios.get(...)` là cú pháp chuẩn mực, an toàn nhất để bắt cả lỗi mạng lẫn lỗi phản hồi từ phía server (`error.response`).",
      "1": "Sai. `axios.get` trả về một Promise chứ không trả về chuỗi, việc so sánh `== 'error'` là vô nghĩa.",
      "2": "Sai. Không có phương thức nào tên là `.catchWithoutError()`.",
      "3": "Sai. Đoạn mã này cố tình ném lỗi vô căn cứ, không phải kỹ thuật xử lý lỗi."
    },
    "keyTakeaway": "Luôn bọc các lệnh gọi API bất đồng bộ (`await axios...`) bên trong khối `try...catch` để xử lý mượt mà cả lỗi mạng và mã phản hồi lỗi từ server."
  },
  {
    "id": 6,
    "topic": "Chapter 07: AbortController Request Cancellation",
    "question": "Why should you use an `AbortController` when fetching data inside a React `useEffect` hook?",
    "options": [
      "To cancel pending HTTP requests if the component unmounts or before the effect runs again, preventing memory leaks and state updates on unmounted components",
      "To speed up the internet connection by canceling other users' requests",
      "To force the server to execute the request twice as fast",
      "To convert asynchronous requests into synchronous blocks"
    ],
    "correct": 0,
    "hint": "Slide 14 (Ch 07): Khi người dùng rời khỏi trang trong lúc request mạng đang chạy dở, nếu không hủy request, việc cập nhật state khi request trả về sẽ gây lỗi 'Can't perform a React state update on an unmounted component'.",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 07): Sử dụng `const controller = new AbortController()` và truyền `signal: controller.signal` vào Axios/Fetch, sau đó gọi `controller.abort()` trong hàm cleanup của `useEffect` giúp hủy ngay kết nối mạng nếu component bị unmount, tránh rò rỉ tài nguyên và lỗi cập nhật state.",
      "1": "Sai. `AbortController` chỉ hủy yêu cầu của chính tiến trình máy khách hiện tại.",
      "2": "Sai. Hủy request sẽ ngừng hẳn request đó chứ không làm nó chạy nhanh hơn.",
      "3": "Sai. Không biến đổi request thành mã đồng bộ."
    },
    "keyTakeaway": "Sử dụng `AbortController` trong hàm cleanup của `useEffect` để hủy bỏ các request đang xử lý dở khi component bị unmount, ngăn chặn rò rỉ bộ nhớ."
  },
  {
    "id": 7,
    "topic": "Chapter 07: Race Conditions in Search UI",
    "question": "What is a 'Race Condition' bug during search input data fetching in a React UI?",
    "options": [
      "When a user types 'Re' then 'React', but the slower network response for 'Re' arrives AFTER the response for 'React', overwriting the UI with outdated results",
      "When two computers physically compete in a marathon race",
      "When the browser runs out of battery power during download",
      "When React and Spring Boot use two different programming languages"
    ],
    "correct": 0,
    "hint": "Các request gửi đi bất đồng bộ không có gì đảm bảo sẽ về đích theo đúng thứ tự gửi (out-of-order responses).",
    "explanations": {
      "0": "Chính xác! Race Condition trong giao diện tìm kiếm xảy ra khi request trước (tìm 'Re') bị trễ mạng và phản hồi về sau request thứ hai (tìm 'React'). Nếu không hủy request cũ, kết quả của từ khóa cũ sẽ đè lên kết quả mới nhất.",
      "1": "Sai. Đây là câu đùa nghĩa đen về cuộc đua chạy bộ.",
      "2": "Sai. Pin thiết bị không phải là định nghĩa của lỗi Race Condition.",
      "3": "Sai. Việc frontend dùng JS và backend dùng Java là kiến trúc tiêu chuẩn của full-stack."
    },
    "keyTakeaway": "Race Condition phát sinh khi các request mạng về đích không đúng thứ tự gửi, dẫn tới việc dữ liệu cũ bị ghi đè lên kết quả tìm kiếm mới nhất."
  },
  {
    "id": 8,
    "topic": "Chapter 08: Stale-While-Revalidate (SWR) Caching",
    "question": "What is the core philosophy behind the 'Stale-While-Revalidate' caching strategy (Slide 3-5)?",
    "options": [
      "Return cached (stale) data immediately so the UI is responsive, then send a network request to fetch fresh data and silently revalidate the cache",
      "Never store any data in cache and always block the screen until the server responds",
      "Keep cached data for 100 years without ever checking the server again",
      "Delete all application data on every mouse click"
    ],
    "correct": 0,
    "hint": "Slide 3 & 4 (Ch 08): Chiến lược ưu tiên tốc độ: phục vụ dữ liệu đã lưu ngay lập tức (stale), đồng thời âm thầm gửi request kiểm tra cập nhật (revalidate).",
    "explanations": {
      "0": "Chính xác! Slide 3-5 (Ch 08): Triết lý 'Stale-While-Revalidate' (được thư viện SWR và React Query áp dụng) hiển thị ngay dữ liệu đang có trong bộ nhớ đệm (dù có thể đã cũ) để người dùng không phải chờ đợi màn hình loading, sau đó chạy ngầm request lấy dữ liệu mới nhất để cập nhật lại giao diện một cách liền mạch.",
      "1": "Sai. Không cache dữ liệu và luôn hiển thị màn hình chờ là chiến lược truyền thống kém tối ưu.",
      "2": "Sai. Không kiểm tra lại dữ liệu sẽ khiến ứng dụng hiển thị thông tin sai lệch vĩnh viễn.",
      "3": "Sai. Xóa dữ liệu ở mỗi click sẽ phá vỡ hoàn toàn ứng dụng."
    },
    "keyTakeaway": "Chiến lược Stale-While-Revalidate hiển thị ngay dữ liệu cache để UI phản hồi tức thì, đồng thời âm thầm gọi mạng để cập nhật lại dữ liệu mới nhất."
  },
  {
    "id": 9,
    "topic": "Chapter 08: React Query / SWR Declarative Fetching",
    "question": "What major problems do modern data fetching libraries like React Query (TanStack Query) or SWR solve compared to manual `useEffect` fetching?",
    "options": [
      "They automatically handle caching, request deduplication, background re-fetching, pagination, and retry logic without manual boilerplate code",
      "They allow browsers to run Java code directly without a Java Virtual Machine",
      "They encrypt the entire computer hard drive",
      "They replace the backend database with a text file"
    ],
    "correct": 0,
    "hint": "Slide 6-8 (Ch 08): Viết `useEffect` thủ công rất dễ gặp lỗi lặp vô hạn, rò rỉ bộ nhớ, duplicate request và không có cache dùng chung.",
    "explanations": {
      "0": "Chính xác! Slide 6-8 (Ch 08): Thư viện React Query / SWR giải quyết toàn diện các bài toán phức tạp của Server State: tự động cache dữ liệu, loại bỏ các request trùng lặp (deduplication), tự fetch lại khi người dùng quay lại tab (window focus refetch), tự động retry khi mất mạng.",
      "1": "Sai. Trình duyệt không chạy trực tiếp Java bytecode bằng React Query.",
      "2": "Sai. Không liên quan đến mã hóa ổ đĩa.",
      "3": "Sai. Backend database vẫn hoạt động độc lập trên máy chủ."
    },
    "keyTakeaway": "React Query và SWR loại bỏ mã thừa thãi (boilerplate) bằng cách tự động hóa bộ nhớ đệm (caching), loại bỏ request trùng lặp và làm mới dữ liệu nền."
  },
  {
    "id": 10,
    "topic": "Chapter 08: `staleTime` vs `gcTime` (cacheTime)",
    "question": "In React Query / TanStack Query caching mechanics, what is the key difference between `staleTime` and `gcTime` (formerly `cacheTime`)?",
    "options": [
      "`staleTime` determines how long data is considered fresh before needing a background refetch; `gcTime` determines how long inactive unused data remains in memory before garbage collection",
      "`staleTime` is measured in minutes, while `gcTime` is measured in centuries",
      "`staleTime` is only for mobile phones, while `gcTime` is for servers",
      "There is no difference; they are exact duplicates"
    ],
    "correct": 0,
    "hint": "`staleTime`: dữ liệu còn 'tươi' không cần gọi mạng lại. `gcTime`: dữ liệu không dùng nữa sẽ được lưu trong RAM bao lâu trước khi bị dọn dẹp (Garbage Collection).",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 08): `staleTime` là khoảng thời gian dữ liệu được coi là mới (fresh) và React Query sẽ không gọi mạng refetch lại. Còn `gcTime` (Garbage Collection Time) là thời gian giữ dữ liệu nhàn rỗi (inactive) trong bộ nhớ RAM trước khi bị giải phóng hoàn toàn.",
      "1": "Sai. Cả hai đều được tính bằng đơn vị mili-giây (milliseconds).",
      "2": "Sai. Cả hai cấu hình đều chạy trên client trong thư viện React Query.",
      "3": "Sai. Đây là hai khái niệm độc lập kiểm soát hai khía cạnh khác nhau của bộ nhớ đệm."
    },
    "keyTakeaway": "`staleTime` xác định thời hạn dữ liệu được xem là còn mới (không cần refetch), còn `gcTime` xác định thời gian lưu trữ dữ liệu nhàn rỗi trong bộ nhớ trước khi giải phóng."
  },
  {
    "id": 11,
    "topic": "Chapter 08: Query Invalidation after Mutation",
    "question": "After successfully performing a POST or DELETE mutation in React Query, how do you trigger an automatic refetch of the related list query?",
    "options": [
      "`queryClient.invalidateQueries({ queryKey: ['students'] });`",
      "`queryClient.deleteAllCache();`",
      "`window.location.reload();`",
      "`queryClient.restartServer();`"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 08): Phương thức 'làm mất hiệu lực' (invalidate) đánh dấu query là đã cũ (stale) và kích hoạt việc tải lại dữ liệu mới nhất ngay lập tức.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 08): Gọi `queryClient.invalidateQueries({ queryKey: ['students'] })` sẽ đánh dấu danh sách sinh viên trong cache là hết hạn và tự động kích hoạt một lượt refetch ngầm, giúp giao diện hiển thị danh sách cập nhật mới nhất mà không cần reload trang.",
      "1": "Sai. Xóa toàn bộ cache sẽ làm mất dữ liệu của tất cả các màn hình khác không liên quan.",
      "2": "Sai. Reload lại trang web đi ngược lại triết lý mượt mà của SPA.",
      "3": "Sai. Client không thể khởi động lại máy chủ backend."
    },
    "keyTakeaway": "Sử dụng `queryClient.invalidateQueries({ queryKey: [...] })` sau mỗi thao tác thêm/sửa/xóa để tự động đồng bộ lại dữ liệu mới nhất từ máy chủ."
  },
  {
    "id": 12,
    "topic": "Chapter 08: Optimistic UI Updates",
    "question": "What is an 'Optimistic UI Update' pattern in modern web applications?",
    "options": [
      "Immediately updating the user interface as if the server request has already succeeded, before receiving the actual response, and rolling back if an error occurs",
      "Only rendering the website when the user has an optimistic emotional attitude",
      "Preventing users from ever receiving error messages",
      "Converting all negative numbers into positive numbers in the UI"
    ],
    "correct": 0,
    "hint": "Slide 15 (Ch 08): Ví dụ điển hình là nút 'Thả tim' (Like) trên mạng xã hội: icon đỏ lên ngay lập tức khi bạn bấm, không đợi server phản hồi.",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 08): Optimistic Update cập nhật ngay trạng thái giao diện UI (ví dụ: chuyển nút like, thêm comment vào danh sách) trước khi máy chủ phản hồi kết quả. Nếu request sau đó bị lỗi mạng, ứng dụng sẽ tự động hoàn tác (rollback) về trạng thái cũ.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về tâm lý lạc quan.",
      "2": "Sai. Khi request thất bại, ứng dụng vẫn cần thông báo lỗi hoặc hoàn tác cho người dùng.",
      "3": "Sai. Không liên quan đến toán học số âm/dương."
    },
    "keyTakeaway": "Optimistic UI Update cập nhật giao diện ngay lập tức trước khi server phản hồi để tối ưu trải nghiệm người dùng, kèm cơ chế rollback an toàn nếu gặp sự cố mạng."
  },
  {
    "id": 13,
    "topic": "Chapter 15: Cross-Origin Resource Sharing (CORS)",
    "question": "What causes a CORS (Cross-Origin Resource Sharing) browser error when a React frontend at `http://localhost:3000` fetches data from a Spring Boot backend at `http://localhost:8080`?",
    "options": [
      "The Same-Origin Policy (SOP) blocks requests where the protocol, domain, or PORT differs, unless the backend explicitly permits it via CORS headers",
      "The computer does not have an active internet connection",
      "Spring Boot only communicates with Android mobile applications",
      "React code is compiled into incorrect machine language"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 15): Cùng là localhost nhưng hai cổng (port 3000 và port 8080) là hai Origin hoàn toàn khác nhau theo định nghĩa bảo mật của trình duyệt.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 15): Một Origin được cấu thành từ [Protocol + Host + Port]. Vì `localhost:3000` khác port với `localhost:8080`, chính sách cùng nguồn gốc (Same-Origin Policy) của trình duyệt sẽ chặn request trừ khi server Spring Boot gửi kèm tiêu đề cho phép (`Access-Control-Allow-Origin`).",
      "1": "Sai. Hai tiến trình đang chạy trên cùng một máy nội bộ (localhost), không cần kết nối internet ra ngoài.",
      "2": "Sai. Spring Boot phục vụ bất kỳ client nào qua chuẩn HTTP REST.",
      "3": "Sai. Lỗi CORS là cơ chế an ninh mạng của trình duyệt, không liên quan đến biên dịch mã."
    },
    "keyTakeaway": "CORS là cơ chế an ninh của trình duyệt: khi Protocol, Domain hoặc Port khác nhau, Backend phải phản hồi tiêu đề `Access-Control-Allow-Origin` để cấp quyền truy cập."
  },
  {
    "id": 14,
    "topic": "Chapter 15: Spring Boot CORS Configuration",
    "question": "Which Spring Boot annotation can be placed directly on a controller class or method to allow cross-origin requests from `http://localhost:3000`?",
    "options": [
      "`@CrossOrigin(origins = \"http://localhost:3000\")`",
      "`@AllowAllClients`",
      "`@DisableFirewall`",
      "`@OpenToBrowser`"
    ],
    "correct": 0,
    "hint": "Slide 7 (Ch 15): Annotation tiêu chuẩn của Spring MVC để bật CORS cho từng Controller.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 15): `@CrossOrigin(origins = \"http://localhost:3000\")` được đặt trên lớp `@RestController` hoặc trên từng phương thức `@GetMapping` để cho phép máy chủ trả về các tiêu đề CORS hợp lệ cho frontend React.",
      "1": "Sai. `@AllowAllClients` không tồn tại trong Spring Framework.",
      "2": "Sai. Không có annotation nào tên là `@DisableFirewall`.",
      "3": "Sai. `@OpenToBrowser` không phải annotation của Spring."
    },
    "keyTakeaway": "Sử dụng annotation `@CrossOrigin(origins = \"...\")` trên Controller để cho phép frontend React ở origin khác gọi API một cách an toàn."
  },
  {
    "id": 15,
    "topic": "Chapter 15: HTTP Preflight OPTIONS Request",
    "question": "What is an HTTP `OPTIONS` 'preflight' request sent automatically by the browser before a complex REST request (e.g. POST with custom headers or JSON body)?",
    "options": [
      "A lightweight probe request to check if the server understands CORS protocol and permits the intended HTTP method and headers before sending the real payload",
      "A request that permanently configures the airplane flight mode",
      "A request that downloads all CSS styles for the page",
      "A request that creates a new database user"
    ],
    "correct": 0,
    "hint": "Trình duyệt tự động gửi một gói tin 'thăm dò' với phương thức OPTIONS trước khi gửi payload dữ liệu chính thức.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 15): Trước khi gửi các yêu cầu không đơn giản (non-simple requests như PUT, DELETE, hoặc POST có `Content-Type: application/json` và Authorization header), trình duyệt sẽ tự động phát một HTTP OPTIONS request để hỏi máy chủ xem có chấp thuận nguồn gốc (origin), phương thức và headers này không.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về chuyến bay máy bay.",
      "2": "Sai. Preflight không tải file CSS.",
      "3": "Sai. Preflight là tầng giao thức HTTP, không tạo tài khoản database."
    },
    "keyTakeaway": "Preflight Request (phương thức OPTIONS) là yêu cầu thăm dò do trình duyệt tự động gửi trước để xác minh xem máy chủ backend có cho phép thực hiện thao tác hay không."
  },
  {
    "id": 16,
    "topic": "Chapter 15: Frontend Service Layer Architecture",
    "question": "In a React application consuming Spring Boot REST services, why is it recommended to extract API calls into a dedicated service layer (e.g. `studentService.js`) rather than calling Axios directly inside UI components?",
    "options": [
      "It promotes separation of concerns, enables code reuse, centralizes endpoint URLs, and makes UI components easier to test and maintain",
      "Because calling Axios directly inside a component triggers a compile error",
      "Because service files execute directly on the GPU hardware",
      "Because browsers delete components that contain network requests"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 15): Tạo các hàm như `StudentService.getAll()`, `StudentService.create(student)` tách biệt hoàn toàn tầng kết nối mạng ra khỏi tầng hiển thị giao diện.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 15): Tách riêng tầng Service (Service Layer Pattern) giúp gom toàn bộ logic gọi API và URL endpoint về một nơi. Khi backend thay đổi đường dẫn hay cấu trúc tham số, bạn chỉ cần sửa trong file service duy nhất mà không cần tìm sửa trong hàng chục file UI components.",
      "1": "Sai. Gọi trực tiếp Axios trong component vẫn chạy được nhưng code sẽ bị lộn xộn, trùng lặp và khó bảo trì.",
      "2": "Sai. Mã JavaScript của service chạy trên JS engine CPU, không phải GPU.",
      "3": "Sai. Trình duyệt không xóa component chỉ vì nó chứa lệnh gọi mạng."
    },
    "keyTakeaway": "Xây dựng tầng Service Layer (ví dụ `StudentService.js`) giúp tách biệt nghiệp vụ gọi API, tái sử dụng mã nguồn và dễ dàng kiểm thử độc lập với tầng giao diện."
  },
  {
    "id": 17,
    "topic": "Chapter 07: HTTP Headers Content-Type vs Accept",
    "question": "What is the semantic difference between `Content-Type` and `Accept` HTTP headers in REST client requests?",
    "options": [
      "`Content-Type` indicates the media format of the data being sent in the request body (e.g. `application/json`), while `Accept` tells the server which media format the client expects in the response",
      "`Content-Type` is for videos only, while `Accept` is for text",
      "`Content-Type` is set by the database, while `Accept` is set by the keyboard",
      "There is no difference; they are exact synonyms"
    ],
    "correct": 0,
    "hint": "Một bên nói về dữ liệu 'mình gửi đi' (`Content-Type`), một bên nói về dữ liệu 'mình muốn nhận lại' (`Accept`).",
    "explanations": {
      "0": "Chính xác! `Content-Type: application/json` thông báo cho server biết định dạng của dữ liệu gửi lên trong phần Request Body. Trong khi `Accept: application/json` thông báo cho server biết định dạng dữ liệu mà client có thể đọc và mong muốn server trả về trong Response Body.",
      "1": "Sai. Cả hai tiêu đề đều áp dụng cho mọi loại MIME types (JSON, XML, HTML, Images, Video).",
      "2": "Sai. Cả hai tiêu đề đều thuộc về giao thức tầng ứng dụng HTTP.",
      "3": "Sai. Ý nghĩa ngữ nghĩa của hai tiêu đề này hoàn toàn khác nhau."
    },
    "keyTakeaway": "`Content-Type` mô tả định dạng của dữ liệu gửi đi (Request Body), còn `Accept` thông báo cho server biết định dạng dữ liệu mà client mong muốn nhận về (Response Body)."
  },
  {
    "id": 18,
    "topic": "Chapter 15: Complete Full-Stack CRUD Flow",
    "question": "In an SBA301 full-stack CRUD application, which sequence of events represents the standard flow for creating a new entity (e.g. Student)?",
    "options": [
      "User submits React form -> Axios sends `POST /api/students` with JSON payload -> Spring Boot `@RestController` receives and validates entity -> Service layer persists via JPA Repository -> Server returns `201 Created` with saved entity -> React state updates to display new item in table",
      "User clicks button -> React deletes database -> Server recreates table -> Page reloads",
      "React sends raw SQL query directly to MySQL port 3306 -> Database emails the user",
      "Spring Boot downloads the entire React source code and rewrites the DOM on the server"
    ],
    "correct": 0,
    "hint": "Slide 16-20 (Ch 15): Dòng chảy chuẩn mực của một ứng dụng Single Page Application giao tiếp với Spring Boot REST API.",
    "explanations": {
      "0": "Chính xác! Slide 16-20 (Ch 15): Đây là kiến trúc luồng dữ liệu chuẩn mực của Full-Stack: Giao diện React thu thập dữ liệu form -> gửi request POST JSON qua Axios -> Spring Boot Controller tiếp nhận và xác thực -> chuyển xuống Service và JPA Repository lưu vào CSDL -> trả về mã 201 Created kèm dữ liệu đã tạo -> React cập nhật state danh sách trên UI mà không cần tải lại trang.",
      "1": "Sai. Không bao giờ xóa cơ sở dữ liệu khi người dùng tạo mới một mục.",
      "2": "Sai. React chạy trên trình duyệt không thể và không được phép mở kết nối socket SQL thô trực tiếp vào port CSDL.",
      "3": "Sai. Spring Boot đóng vai trò Backend API cung cấp dữ liệu JSON, không can thiệp vẽ lại DOM của client."
    },
    "keyTakeaway": "Chu trình Full-Stack CRUD chuẩn: Form React -> Request POST JSON qua Axios -> Spring Boot Controller/Service/JPA -> Database -> Phản hồi 201 Created -> Cập nhật State React."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_6_DATA;
}
