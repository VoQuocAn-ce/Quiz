// QUIZ 5 DATA: Client-Side Routing & SPA Architecture (Chapters 06, 09, 14)
const QUIZ_5_DATA = [
  {
    "id": 1,
    "topic": "Chapter 06 & 09: Single Page Application (SPA) Concept",
    "question": "What is the primary architectural characteristic of a Single Page Application (SPA)?",
    "options": [
      "The browser loads a single HTML page initially and dynamically rewrites the DOM via JavaScript during navigation without full page reloads",
      "Every single link click triggers a complete browser reload fetching fresh HTML documents from the server",
      "The application only consists of one HTML paragraph element",
      "All backend Java code is compiled into browser CSS files"
    ],
    "correct": 0,
    "hint": "SPA chỉ tải tài nguyên ban đầu (HTML/JS/CSS). Khi người dùng bấm chuyển trang, JavaScript can thiệp vào URL và cập nhật lại giao diện ngay lập tức mà không làm trắng trang (no full reload).",
    "explanations": {
      "0": "Chính xác! Slide 3 & 4 (Ch 09): Trong kiến trúc Single Page Application (SPA), trình duyệt chỉ tải trang `index.html` và mã script một lần đầu. Các thao tác chuyển trang tiếp theo được điều hướng client-side bằng JavaScript (React Router) mà không gửi request tải lại toàn bộ trang HTML từ server.",
      "1": "Sai. Tải lại toàn bộ tài liệu HTML ở mỗi lần click là mô hình Multi-Page Application (MPA) truyền thống.",
      "2": "Sai. 'Single page' là thuật ngữ về kiến trúc nạp trang, không phải trang chỉ có 1 đoạn văn.",
      "3": "Sai. Backend Java chạy trên máy chủ (Spring Boot), không biên dịch vào CSS trình duyệt."
    },
    "keyTakeaway": "SPA tải trang một lần ban đầu, sau đó sử dụng Client-Side Routing để thay đổi nội dung giao diện mượt mà mà không tải lại toàn bộ tài liệu từ máy chủ."
  },
  {
    "id": 2,
    "topic": "Chapter 06 & 09: React Router v6 Hierarchy",
    "question": "In React Router v6, which component acts as the parent container that wraps individual `<Route>` definitions?",
    "options": [
      "`<Routes>`",
      "`<RouteGroup>`",
      "`<Switch>`",
      "`<RouterOutlet>`"
    ],
    "correct": 0,
    "hint": "Trong React Router v5 là `<Switch>`, nhưng từ React Router v6 đã được thay thế hoàn toàn bằng thành phần này.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 06 & 09): Trong React Router v6, component `<Routes>` là component cha bắt buộc bọc ngoài danh sách các component `<Route path=\"...\" element={<Component />} />`.",
      "1": "Sai. `<RouteGroup>` không phải component chuẩn của React Router.",
      "2": "Sai. `<Switch>` là component của React Router v5 cũ, đã bị loại bỏ và thay bằng `<Routes>` trong v6.",
      "3": "Sai. `<RouterOutlet>` không tồn tại; thành phần placeholder render con là `<Outlet />`."
    },
    "keyTakeaway": "Trong React Router v6, thẻ `<Routes>` thay thế cho `<Switch>` của v5 để bọc các định nghĩa tuyến đường `<Route>`."
  },
  {
    "id": 3,
    "topic": "Chapter 06 & 09: `<Link>` vs Anchor `<a>`",
    "question": "Why should you use React Router's `<Link to=\"/about\">` instead of standard HTML `<a href=\"/about\">`?",
    "options": [
      "`<Link>` intercepts the click event, updates the URL via the browser History API, and prevents a full-page browser refresh",
      "`<a>` tags are deprecated in HTML5",
      "`<Link>` automatically downloads all images on the target page in parallel",
      "`<a>` tags can only connect to external search engines"
    ],
    "correct": 0,
    "hint": "Thẻ `<a>` thông thường sẽ khiến trình duyệt gửi HTTP GET tải lại toàn bộ trang từ server, làm mất sạch trạng thái (state) hiện tại của ứng dụng React.",
    "explanations": {
      "0": "Chính xác! Slide 6 (Ch 06): `<Link>` ngăn chặn hành vi mặc định của trình duyệt (`event.preventDefault()`) và gọi HTML5 History API (`pushState`) để cập nhật đường dẫn URL client-side, duy trì ứng dụng SPA mà không bị reload lại trang.",
      "1": "Sai. Thẻ `<a>` vẫn là phần tử chuẩn cốt lõi của HTML5 dùng cho liên kết ngoài.",
      "2": "Sai. `<Link>` chỉ xử lý điều hướng route, không quản lý tải trước hình ảnh.",
      "3": "Sai. Thẻ `<a>` liên kết tới bất kỳ URL nội bộ hoặc bên ngoài nào."
    },
    "keyTakeaway": "`<Link to=\"...\">` thực hiện điều hướng nội bộ bằng History API, giữ nguyên trạng thái ứng dụng và ngăn chặn trình duyệt reload lại trang."
  },
  {
    "id": 4,
    "topic": "Chapter 06 & 09: NavLink Active Styling",
    "question": "What unique capability does `<NavLink>` offer over standard `<Link>` in React Router?",
    "options": [
      "It knows whether its route is currently active, allowing dynamic styling or class assignment (e.g. `className={({ isActive }) => isActive ? 'active' : ''}`)",
      "It connects the browser directly to satellite navigation GPS",
      "It makes the target page load instantly by predicting the future",
      "It converts text into sound for the user"
    ],
    "correct": 0,
    "hint": "Rất hữu ích khi xây dựng thanh điều hướng menu (Navbar), làm sáng nút trang người dùng đang xem.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 06): `<NavLink>` cung cấp callback trạng thái `{ isActive, isPending }`, cho phép áp dụng class hoặc style riêng biệt (ví dụ gạch chân, đổi màu highlight) khi URL hiện tại khớp với đường dẫn của liên kết.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về định vị vệ tinh GPS.",
      "2": "Sai. `<NavLink>` không có tính năng tiên đoán tương lai.",
      "3": "Sai. Không liên quan đến phát âm thanh."
    },
    "keyTakeaway": "`<NavLink>` tự động xác định xem đường dẫn có đang trùng khớp với URL hiện tại hay không (`isActive`) để hỗ trợ tạo kiểu dáng active cho thanh điều hướng."
  },
  {
    "id": 5,
    "topic": "Chapter 09: Dynamic Route Parameters",
    "question": "Given the route `<Route path=\"/students/:studentId\" element={<StudentDetails />} />`, which hook is used inside `StudentDetails` to read `studentId`?",
    "options": [
      "`useParams()`",
      "`useRouteParams()`",
      "`usePath()`",
      "`useQueryId()`"
    ],
    "correct": 0,
    "hint": "Slide 8 (Ch 09): Hook trả về một đối tượng chứa các cặp key-value tương ứng với các tham số động khai báo bằng dấu hai chấm `:paramName`.",
    "explanations": {
      "0": "Chính xác! Slide 8 (Ch 09): Hook `useParams()` trả về một object chứa các tham số động trên URL. Ví dụ với `/students/42`, `const { studentId } = useParams()` sẽ nhận giá trị `\"42\"`.",
      "1": "Sai. Không có hook tên là `useRouteParams()` trong React Router.",
      "2": "Sai. `usePath` không tồn tại trong thư viện.",
      "3": "Sai. `useQueryId` không phải là hook chuẩn của React Router."
    },
    "keyTakeaway": "Sử dụng hook `useParams()` để trích xuất các tham số động (URL parameters) được định nghĩa với cú pháp `:paramName` trong đường dẫn route."
  },
  {
    "id": 6,
    "topic": "Chapter 09: URL Query String Management",
    "question": "Which React Router hook allows you to read and update query string parameters (e.g. `?page=2&sort=asc`) similar to `useState`?",
    "options": [
      "`useSearchParams()`",
      "`useQuery()`",
      "`useUrlString()`",
      "`useHttpParams()`"
    ],
    "correct": 0,
    "hint": "Hook này trả về một mảng `[searchParams, setSearchParams]`, hỗ trợ các phương thức như `searchParams.get('page')`.",
    "explanations": {
      "0": "Chính xác! `const [searchParams, setSearchParams] = useSearchParams();` cho phép đọc query parameter bằng `searchParams.get('page')` và cập nhật trực tiếp URL bằng `setSearchParams({ page: 3 })` mà không làm reload trang.",
      "1": "Sai. `useQuery` là hook của React Query / TanStack Query dùng để fetch data, không phải hook của React Router.",
      "2": "Sai. `useUrlString` không tồn tại.",
      "3": "Sai. `useHttpParams` không phải hook của React Router."
    },
    "keyTakeaway": "`useSearchParams()` giúp đọc và thao tác với các tham số Query String trên thanh địa chỉ URL theo mô hình tương tự như `useState`."
  },
  {
    "id": 7,
    "topic": "Chapter 09: Programmatic Navigation",
    "question": "How do you navigate programmatically to `/dashboard` inside an event handler after a user logs in?",
    "options": [
      "Using `const navigate = useNavigate();` and calling `navigate('/dashboard');`",
      "Using `window.navigate('/dashboard');`",
      "Using `<Route to=\"/dashboard\" />` inside the function body",
      "Calling `document.location.reload('/dashboard');`"
    ],
    "correct": 0,
    "hint": "Slide 10 (Ch 09): Trong React Router v6, hook `useNavigate` thay thế cho `useHistory` của phiên bản cũ.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 09): Hook `useNavigate()` trả về hàm điều hướng: `const navigate = useNavigate(); navigate('/dashboard')`. Để quay lại trang trước, ta có thể truyền số âm: `navigate(-1)`.",
      "1": "Sai. Trình duyệt không có phương thức `window.navigate()`.",
      "2": "Sai. `<Route>` là component khai báo trong JSX, không thể gọi như một hàm bên trong event handler.",
      "3": "Sai. `document.location.reload()` không nhận đường dẫn URL và sẽ tải lại toàn bộ trang từ máy chủ."
    },
    "keyTakeaway": "Sử dụng hàm điều hướng trả về từ hook `useNavigate()` để chuyển trang theo logic lập trình (sau khi submit form, xác thực, đăng nhập)."
  },
  {
    "id": 8,
    "topic": "Chapter 09: Nested Routes & `<Outlet />`",
    "question": "What is the purpose of the `<Outlet />` component in React Router v6 nested routing?",
    "options": [
      "It acts as a placeholder in a parent layout component where matching child route elements are rendered",
      "It connects the computer to an electrical wall power outlet",
      "It exports data directly to a CSV spreadsheet file",
      "It closes all open browser tabs simultaneously"
    ],
    "correct": 0,
    "hint": "Slide 11 (Ch 09): Trong tuyến đường lồng nhau (Nested Routes), component cha (Layout) cần một vị trí để hiển thị nội dung của component con.",
    "explanations": {
      "0": "Chính xác! Slide 11 (Ch 09): `<Outlet />` đóng vai trò là 'chỗ trống' (placeholder) bên trong component cha (như Header/Sidebar Layout). Khi URL khớp với một route con lồng bên trong, React Router sẽ render component con đó vào chính vị trí của `<Outlet />`.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về ổ cắm điện.",
      "2": "Sai. `<Outlet />` là component điều hướng, không phải công cụ xuất file.",
      "3": "Sai. Không liên quan đến việc đóng tab trình duyệt."
    },
    "keyTakeaway": "Component `<Outlet />` đặt trong component cha hoạt động như một placeholder hiển thị các component của route con tương ứng khi URL trùng khớp."
  },
  {
    "id": 9,
    "topic": "Chapter 09: Index Routes",
    "question": "In a nested route structure, what does `<Route index element={<Home />} />` specify?",
    "options": [
      "The default component that renders inside the parent's `<Outlet />` when the exact parent path is matched",
      "A route that forces search engines to index the website",
      "A route that sorts all database records by primary key index",
      "A route that crashes if the user is not on mobile"
    ],
    "correct": 0,
    "hint": "Slide 12 (Ch 09): Tuyến đường 'index' không có prop `path`, nó tự động kích hoạt khi người dùng truy cập đúng URL gốc của cha.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 09): Một Index Route (khai báo bằng `index`) sẽ được render bên trong `<Outlet />` của component cha khi URL hiện tại khớp chính xác với đường dẫn của cha mà không có sub-path nào khác.",
      "1": "Sai. Index route không liên quan đến việc lập chỉ mục tìm kiếm SEO của Googlebot.",
      "2": "Sai. Không liên quan đến chỉ mục cơ sở dữ liệu.",
      "3": "Sai. Index route hoạt động trên mọi loại thiết bị."
    },
    "keyTakeaway": "Index Route (`<Route index element={<Home />} />`) là route mặc định được hiển thị bên trong `<Outlet />` khi người dùng ở ngay tại đường dẫn của cha."
  },
  {
    "id": 10,
    "topic": "Chapter 09: 404 Catch-All Route",
    "question": "Which route definition acts as a 'Catch-all' 404 Not Found handler in React Router v6?",
    "options": [
      "`<Route path=\"*\" element={<NotFound />} />`",
      "`<Route path=\"404\" element={<NotFound />} />`",
      "`<Route default element={<NotFound />} />`",
      "`<Route errorPage element={<NotFound />} />`"
    ],
    "correct": 0,
    "hint": "Ký tự đại diện `*` (splat/wildcard) khớp với mọi đường dẫn URL chưa được xử lý bởi các route phía trên.",
    "explanations": {
      "0": "Chính xác! Slide 13 (Ch 09): Dấu hoa thị `*` trong `path=\"*\"` hoạt động như một wildcard khớp với bất kỳ URL nào không trùng khớp với các route đã khai báo, dùng để hiển thị trang lỗi 404 Not Found.",
      "1": "Sai. `path=\"404\"` chỉ khớp khi người dùng gõ đúng địa chỉ `/404`.",
      "2": "Sai. Thuộc tính `default` không phải là prop chuẩn của React Router v6.",
      "3": "Sai. React Router v6 không dùng prop `errorPage` trên `<Route>`."
    },
    "keyTakeaway": "Khai báo `<Route path=\"*\" element={<NotFound />} />` ở cuối danh sách routes để bắt tất cả các đường dẫn không tồn tại và hiển thị trang thông báo lỗi 404."
  },
  {
    "id": 11,
    "topic": "Chapter 09: Protected Routes Architecture",
    "question": "How is an authenticated 'Protected Route' typically implemented in React Router v6?",
    "options": [
      "By creating a wrapper component that checks authentication state; if authenticated it renders `<Outlet />`, otherwise it renders `<Navigate to=\"/login\" replace />`",
      "By asking the user for their password in an operating system prompt before the browser opens",
      "By encrypting the React source code with a secret zip password",
      "By disabling the browser's back button permanently"
    ],
    "correct": 0,
    "hint": "Slide 15 (Ch 09): Một Protected Route bọc các route con. Nếu chưa đăng nhập, tự động chuyển hướng (redirect) về trang login.",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 09): Protected Route là một component kiểm tra token/trạng thái đăng nhập. Nếu hợp lệ, nó cho phép đi tiếp bằng cách render `<Outlet />`; nếu chưa đăng nhập, nó điều hướng người dùng bằng `<Navigate to=\"/login\" replace />`.",
      "1": "Sai. Đây không phải cách tiếp cận kiến trúc của ứng dụng web.",
      "2": "Sai. Mã nguồn client-side gửi về trình duyệt không bảo vệ route bằng cách nén zip.",
      "3": "Sai. Vô hiệu hóa nút back không tạo ra bảo mật phân quyền cho ứng dụng."
    },
    "keyTakeaway": "Protected Route kiểm tra trạng thái xác thực: cho phép truy cập hiển thị `<Outlet />` nếu hợp lệ hoặc chuyển hướng về `/login` bằng `<Navigate replace />`."
  },
  {
    "id": 12,
    "topic": "Chapter 09: Passing State via Navigation",
    "question": "How can you pass transient state during programmatic navigation, and how is it read on the target component?",
    "options": [
      "`navigate('/summary', { state: { orderId: 101 } })` and reading it with `const { state } = useLocation();`",
      "`navigate('/summary', { cookie: 101 })` and reading it with `document.cookie`",
      "`navigate('/summary', { memory: 101 })` and reading it with `useMemory()`",
      "`navigate.sendState(101)` and reading it with `useParams()`"
    ],
    "correct": 0,
    "hint": "Dữ liệu được lưu trong History State của trình duyệt và truy cập thông qua hook `useLocation()`.",
    "explanations": {
      "0": "Chính xác! React Router cho phép gửi dữ liệu ngầm không hiển thị trên URL: `navigate('/target', { state: { data } })`. Tại component đích, sử dụng hook `useLocation()` để trích xuất `location.state`.",
      "1": "Sai. `navigate` không trực tiếp can thiệp thiết lập `cookie` qua option này.",
      "2": "Sai. Không có hook `useMemory()` trong React.",
      "3": "Sai. `useParams` chỉ đọc tham số động trên URL, không đọc đối tượng state ngầm."
    },
    "keyTakeaway": "Truyền dữ liệu ngầm khi chuyển trang bằng `navigate('/path', { state: data })` và tiếp nhận dữ liệu tại trang đích bằng hook `useLocation().state`."
  },
  {
    "id": 13,
    "topic": "Chapter 09: BrowserRouter vs HashRouter",
    "question": "What is the primary difference between `BrowserRouter` and `HashRouter`?",
    "options": [
      "`BrowserRouter` uses standard clean URLs (e.g. `/courses`) relying on HTML5 History API and requires server rewrite configuration; `HashRouter` uses `#` in the URL (e.g. `/#/courses`) and works without server rewrites",
      "`HashRouter` encrypts all passwords using SHA-256",
      "`BrowserRouter` only functions on Google Chrome, while `HashRouter` only works on Firefox",
      "`HashRouter` loads pages 100 times faster than `BrowserRouter`"
    ],
    "correct": 0,
    "hint": "Dấu thăng `#` (hash) không bao giờ được gửi lên web server trong HTTP request, do đó máy chủ không bao giờ bị lỗi 404 khi người dùng refresh.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 06 & 09): `BrowserRouter` tạo URL đẹp không có dấu thăng dựa trên HTML5 History API nhưng yêu cầu server cấu hình điều hướng tất cả request về `index.html`. Trong khi đó `HashRouter` lưu trữ route phía sau `#`, không cần cấu hình server nhưng URL kém thẩm mỹ hơn.",
      "1": "Sai. `Hash` ở đây là URL hash fragment, không phải thuật toán băm mật khẩu.",
      "2": "Sai. Cả hai router đều tương thích với mọi trình duyệt hiện đại.",
      "3": "Sai. Tốc độ thực thi của hai router là tương đương nhau."
    },
    "keyTakeaway": "`BrowserRouter` cung cấp đường dẫn sạch chuẩn REST nhưng yêu cầu server cấu hình URL rewrite về `index.html`; `HashRouter` dùng dấu `#` không cần server hỗ trợ."
  },
  {
    "id": 14,
    "topic": "Chapter 14: SPA Production Deployment Challenge",
    "question": "When deploying a React SPA to production (e.g. Nginx, Apache), why does directly refreshing a deep link like `/dashboard/settings` result in a 404 Not Found error unless configured?",
    "options": [
      "Because the physical server looks for a file named `/dashboard/settings` on its disk, which does not exist; the server must be configured to fallback and serve `index.html` for all routes",
      "Because React applications are automatically deleted after the first visit",
      "Because production servers do not support JavaScript execution",
      "Because browser cookies expire immediately on page refresh"
    ],
    "correct": 0,
    "hint": "Các file tĩnh trên server thực tế chỉ có duy nhất `index.html`. Toàn bộ các route `/dashboard/...` đều do React Router xử lý ở client.",
    "explanations": {
      "0": "Chính xác! Slide 5 (Ch 14): Trong SPA, chỉ có một file thực tế duy nhất là `index.html`. Khi người dùng F5 tại `/dashboard/settings`, máy chủ web theo mặc định sẽ tìm file tĩnh tại thư mục đó và trả về 404. Giải pháp là cấu hình server (try_files trong Nginx hoặc RewriteRule trong Apache) luôn trả về `index.html`.",
      "1": "Sai. Ứng dụng không bị xóa sau khi truy cập.",
      "2": "Sai. Trình duyệt client mới là nơi thực thi JavaScript, không phải server.",
      "3": "Sai. Cookie không tự động hết hạn khi refresh trang."
    },
    "keyTakeaway": "Khi deploy SPA lên máy chủ tĩnh, bắt buộc phải cấu hình Web Server chuyển hướng mọi yêu cầu không phải file vật lý về `index.html` để React Router xử lý."
  },
  {
    "id": 15,
    "topic": "Chapter 06: Relative Path Navigation",
    "question": "In React Router v6, if you are currently at URL `/users/profile` and render `<Link to=\"settings\">`, where will the browser navigate?",
    "options": [
      "`/users/profile/settings`",
      "`/settings`",
      "`/users/settings`",
      "`/`"
    ],
    "correct": 0,
    "hint": "Trong React Router v6, đường dẫn tương đối (không có dấu gạch chéo `/` ở đầu) sẽ nối tiếp trực tiếp vào sau đường dẫn hiện tại.",
    "explanations": {
      "0": "Chính xác! Slide 9 (Ch 06): Đường dẫn tương đối `to=\"settings\"` không có dấu gạch chéo đầu dòng sẽ được hiểu là nối tiếp vào URL hiện tại `/users/profile`, trở thành `/users/profile/settings`. Nếu muốn về gốc thì phải dùng đường dẫn tuyệt đối `to=\"/settings\"`.",
      "1": "Sai. `/settings` là kết quả nếu viết đường dẫn tuyệt đối `to=\"/settings\"`.",
      "2": "Sai. Để lên cấp cha rồi vào settings thì phải viết `to=\"../settings\"`.",
      "3": "Sai. Không trở về trang chủ."
    },
    "keyTakeaway": "Đường dẫn không có dấu `/` ở đầu là đường dẫn tương đối, được giải quyết nối tiếp vào vị trí URL hiện tại trong cây route."
  },
  {
    "id": 16,
    "topic": "Chapter 09: Layout Routes without Paths",
    "question": "What is a 'Pathless Layout Route' in React Router v6 (e.g. `<Route element={<MainLayout />}> ... </Route>`)?",
    "options": [
      "A route with no `path` attribute used solely to wrap multiple child routes inside a shared visual layout (e.g. Navbar and Footer)",
      "A route that is invisible and never renders anything",
      "A route that bypasses all security checks",
      "A broken route that causes compilation errors"
    ],
    "correct": 0,
    "hint": "Một cách thông minh để chia sẻ giao diện chung (header, footer, sidebar) cho một nhóm trang mà không làm biến đổi cấu trúc URL.",
    "explanations": {
      "0": "Chính xác! Pathless Layout Route không khai báo thuộc tính `path`. Nó chỉ đóng vai trò cung cấp layout giao diện chung (như Header, Footer, Sidebar) cho các route con bên trong mà không làm thay đổi hay chèn thêm tiền tố vào đường dẫn URL.",
      "1": "Sai. Route này vẫn render bình thường phần layout và phần tử con qua `<Outlet />`.",
      "2": "Sai. Nó hoàn toàn tuân thủ các quy tắc route thông thường.",
      "3": "Sai. Đây là tính năng chính thức và rất phổ biến trong React Router v6."
    },
    "keyTakeaway": "Pathless Layout Route cho phép nhóm các trang dưới một khung giao diện dùng chung (như Navbar và Footer) mà không ảnh hưởng tới đường dẫn URL."
  },
  {
    "id": 17,
    "topic": "Chapter 14: Form Validation in SPA",
    "question": "Why should form validation in a Single Page Application be performed BOTH on the client-side and on the backend server?",
    "options": [
      "Client-side provides immediate feedback and a smooth user experience, while server-side is mandatory for security and data integrity",
      "Client-side validation is impossible in JavaScript",
      "Server-side validation is obsolete and should never be implemented",
      "To double the size of the database on every submit"
    ],
    "correct": 0,
    "hint": "Không bao giờ được tin tưởng dữ liệu từ client vì kẻ xấu có thể vượt qua client validation bằng Postman hoặc curl.",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 14): Xác thực phía client (Form validation) mang lại trải nghiệm người dùng tức thì và giảm tải request không hợp lệ lên máy chủ. Tuy nhiên, xác thực phía server (Bean Validation) là bắt buộc tuyệt đối vì người dùng có thể gửi dữ liệu trực tiếp qua API tools mà không qua giao diện web.",
      "1": "Sai. Client-side validation rất dễ dàng thực hiện bằng HTML5 và React state.",
      "2": "Sai. Bỏ qua xác thực server là lỗ hổng bảo mật cực kỳ nguy hiểm.",
      "3": "Sai. Xác thực dữ liệu không làm tăng kích thước database."
    },
    "keyTakeaway": "Xác thực Client mang lại trải nghiệm tương tác tức thì cho người dùng, nhưng xác thực Server là chốt chặn bảo mật bắt buộc đối với mọi hệ thống."
  },
  {
    "id": 18,
    "topic": "Chapter 06: Navigate Component with Replace",
    "question": "What is the effect of using `<Navigate to=\"/login\" replace />` instead of `<Navigate to=\"/login\" />`?",
    "options": [
      "It replaces the current entry in the browser's history stack so clicking the 'Back' button will not return to the protected unauthorized page",
      "It permanently deletes the browser's cookies and local storage",
      "It restarts the computer operating system",
      "It replaces the HTML page with a blank canvas"
    ],
    "correct": 0,
    "hint": "Thuộc tính `replace` ghi đè lên lịch sử duyệt web thay vì đẩy thêm một dòng mới (push) vào history stack.",
    "explanations": {
      "0": "Chính xác! Prop `replace` thực hiện thay thế entry hiện tại trong lịch sử History của trình duyệt. Nhờ đó, nếu người dùng bấm nút 'Back' trên trình duyệt, họ sẽ không bị rơi lại vào trang cấm vừa bị từ chối truy cập (tránh hiện tượng redirect lặp).",
      "1": "Sai. `replace` chỉ điều khiển cơ chế ghi nhận của browser history stack, không xóa cookie.",
      "2": "Sai. Không liên quan đến khởi động lại máy tính.",
      "3": "Sai. Giao diện trang `/login` vẫn hiển thị đầy đủ."
    },
    "keyTakeaway": "Thuộc tính `replace` trong `<Navigate>` ghi đè mục lịch sử hiện tại, ngăn người dùng quay trở lại trang bị chặn khi nhấn nút Back của trình duyệt."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_5_DATA;
}
