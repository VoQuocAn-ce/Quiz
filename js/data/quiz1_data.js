// QUIZ 1 DATA: React Fundamentals & Modern Tooling (Chapters 01 & 02)
const QUIZ_1_DATA = [
  {
    "id": 1,
    "topic": "Chapter 01: React Library Definition",
    "question": "According to the course slides, why is React technically classified as a JavaScript 'library' rather than a 'framework'?",
    "options": [
      "Because it only provides the View layer of an application, leaving routing and state architecture flexible",
      "Because it does not support asynchronous operations or network requests",
      "Because it cannot be integrated with backend services like Node.js or Spring Boot",
      "Because it requires a separate browser plugin to execute inside Chrome or Firefox"
    ],
    "correct": 0,
    "hint": "React tập trung giải quyết bài toán biểu diễn giao diện (View) một cách khai báo (declarative) thay vì áp đặt toàn bộ kiến trúc MVC.",
    "explanations": {
      "0": "Chính xác! Slide 4 nêu rõ: 'While React is often referred to as a framework, it's technically a JavaScript library. React is just the view layer'. Nó tập trung vào việc render UI khai báo và để lập trình viên tự do lựa chọn thư viện routing, state, build tools.",
      "1": "Sai. React hoàn toàn hỗ trợ xử lý bất đồng bộ thông qua JavaScript chuẩn (Promise, async/await, Fetch, Axios) hoặc React Hooks (useEffect).",
      "2": "Sai. React là frontend library hàng đầu thường xuyên kết hợp với backend như Spring Boot, Node.js, ASP.NET qua RESTful API.",
      "3": "Sai. React chạy trực tiếp trên các trình duyệt tiêu chuẩn thông qua JavaScript engine chuẩn, không cần bất kỳ plugin đặc biệt nào."
    },
    "keyTakeaway": "React là một UI Library (chỉ đảm nhận View layer), giúp xây dựng giao diện người dùng theo mô hình khai báo (declarative) và tái sử dụng component."
  },
  {
    "id": 2,
    "topic": "Chapter 01: Virtual DOM & Reconciliation",
    "question": "How does React's Virtual DOM improve application performance compared to traditional DOM manipulation?",
    "options": [
      "By bypassing the browser engine and drawing pixels directly to GPU hardware",
      "By keeping an in-memory representation of the UI and computing minimal diffs before updating the real DOM",
      "By converting all JavaScript code into WebAssembly binaries at build time",
      "By completely replacing the browser DOM with native operating system windows"
    ],
    "correct": 1,
    "hint": "Thao tác trên Real DOM (reflow/repaint) rất tốn kém tài nguyên. React lưu một bản sao nhẹ trên RAM để đối chiếu diff.",
    "explanations": {
      "0": "Sai. React không vẽ pixel trực tiếp lên GPU (đó là canvas/WebGL); React vẫn cập nhật DOM trên trình duyệt nhưng theo cách tối ưu nhất.",
      "1": "Chính xác! Slide 5 chỉ ra: 'Virtual DOM: React uses a virtual DOM to efficiently update only the necessary parts of the actual DOM, improving performance'. Quá trình so sánh diff (Reconciliation) giúp chỉ cập nhật những node thực sự thay đổi.",
      "2": "Sai. React không biên dịch JavaScript thành WebAssembly; nó chạy trực tiếp mã JS trên V8/trình duyệt.",
      "3": "Sai. React web render trên DOM của trình duyệt, không thay thế DOM bằng OS window."
    },
    "keyTakeaway": "Virtual DOM là bản sao JS Object nhẹ trong bộ nhớ. React so sánh cây mới và cũ (diffing) để chỉ cập nhật phần tử thực sự thay đổi lên Real DOM."
  },
  {
    "id": 3,
    "topic": "Chapter 01: Node.js Architecture",
    "question": "Which JavaScript engine powers Node.js to execute JavaScript outside of web browsers?",
    "options": [
      "SpiderMonkey Engine from Mozilla",
      "Google's V8 JavaScript Engine",
      "JavaScriptCore from Apple WebKit",
      "Chakra Engine from Microsoft"
    ],
    "correct": 1,
    "hint": "Đây là engine mã nguồn mở do Google phát triển cho trình duyệt Chrome, biên dịch JS sang mã máy ở runtime.",
    "explanations": {
      "0": "Sai. SpiderMonkey là JS engine của trình duyệt Mozilla Firefox.",
      "1": "Chính xác! Slide 6 & 7 nêu rõ: 'Node.js is built on Chrome's V8 JavaScript engine... V8 compiles JavaScript to machine code at runtime, which increases execution speed'.",
      "2": "Sai. JavaScriptCore (Nitro) là JS engine của trình duyệt Safari của Apple.",
      "3": "Sai. Chakra là JS engine cũ của trình duyệt Microsoft Edge/Internet Explorer."
    },
    "keyTakeaway": "Node.js xây dựng trên Chrome V8 Engine, biên dịch JavaScript trực tiếp thành machine code tại runtime để chạy phía máy chủ."
  },
  {
    "id": 4,
    "topic": "Chapter 01: Node.js Execution Model",
    "question": "How does Node.js handle thousands of concurrent requests despite operating on a single-threaded model?",
    "options": [
      "By creating a new operating system thread for each incoming network socket",
      "Through its event-driven architecture and asynchronous non-blocking I/O event loop",
      "By dividing CPU hardware cores into isolated virtual machines",
      "By blocking all other requests until the current database query returns"
    ],
    "correct": 1,
    "hint": "Node.js không chờ đợi (non-blocking) các tác vụ đọc ghi file/database mà giao cho hệ thống và tiếp tục xử lý các event khác.",
    "explanations": {
      "0": "Sai. Mô hình tạo 1 thread cho mỗi request là kiến trúc truyền thống của Tomcat/Apache HTTP cũ, không phải Node.js.",
      "1": "Chính xác! Slide 8 & 9 giải thích: 'Event-Driven and Non-Blocking I/O... Single-Threaded: Although Node.js operates in a single-threaded model, it can handle thousands of concurrent connections... The single thread uses an event loop to manage multiple tasks'.",
      "2": "Sai. Node.js chạy single thread trên một process, không tự động phân chia CPU core thành máy ảo.",
      "3": "Sai. Nếu block các request khác thì đó là Blocking I/O, hoàn toàn trái ngược với bản chất non-blocking của Node.js."
    },
    "keyTakeaway": "Node.js sử dụng Single-threaded Event Loop kết hợp Non-blocking Asynchronous I/O để phục vụ đồng thời hàng nghìn kết nối với tài nguyên tối thiểu."
  },
  {
    "id": 5,
    "topic": "Chapter 01: npm Manifest & Initialization",
    "question": "Which command is used to initialize a new `package.json` file in a project directory using default configuration values?",
    "options": [
      "`npm create project`",
      "`npm init -y`",
      "`npm start --init`",
      "`npm config --new`"
    ],
    "correct": 1,
    "hint": "Cờ `-y` viết tắt của 'yes', tự động đồng ý mọi thiết lập mặc định của manifest.",
    "explanations": {
      "0": "Sai. `npm create project` không phải cú pháp khởi tạo file cấu hình package.json.",
      "1": "Chính xác! Slide 12 nêu rõ: 'To initialize a package.json file for your project, type at the prompt in your project directory: npm init / npm init -y'.",
      "2": "Sai. `npm start` dùng để thực thi script start trong phần `scripts` của package.json.",
      "3": "Sai. `npm config` dùng để xem hoặc thay đổi cấu hình môi trường npm toàn cục/cục bộ."
    },
    "keyTakeaway": "Lệnh `npm init -y` tạo nhanh file manifest `package.json` với các giá trị mặc định mà không cần nhập từng câu hỏi tương tác."
  },
  {
    "id": 6,
    "topic": "Chapter 01: npm Dependency Flags",
    "question": "Which npm flag installs a package and saves it under `devDependencies` in `package.json`?",
    "options": [
      "`--save-dev`",
      "`--no-save`",
      "`--save-optional`",
      "`--global-only`"
    ],
    "correct": 0,
    "hint": "Cờ này dành cho các công cụ chỉ phục vụ quá trình phát triển (linter, bundler, test runners) mà không cần đóng gói lên production.",
    "explanations": {
      "0": "Chính xác! Slide 13 ghi chú: '--save-dev installs and adds the entry to the package.json file devDependencies'.",
      "1": "Sai. Slide 13: '--no-save installs but does not add the entry to the package.json file dependencies'.",
      "2": "Sai. Slide 13: '--save-optional installs and adds the entry to the package.json file optionalDependencies'.",
      "3": "Sai. Cờ cài đặt toàn cục là `-g` hoặc `--global`, không có cờ `--global-only`."
    },
    "keyTakeaway": "Dùng `--save-dev` (hoặc `-D`) để cài các thư viện phục vụ lúc code/build vào mục `devDependencies` của `package.json`."
  },
  {
    "id": 7,
    "topic": "Chapter 01: Modern Project Scaffolding",
    "question": "According to the slides, what modern frontend build tool is recommended to scaffold a starter React application?",
    "options": [
      "`npm create vite@latest`",
      "`npx create-react-native-app`",
      "`npm install grunt-react`",
      "`npm install bower-components`"
    ],
    "correct": 0,
    "hint": "Công cụ này cung cấp server phát triển cực nhanh nhờ tận dụng Native ES Modules trên trình duyệt.",
    "explanations": {
      "0": "Chính xác! Slide 2 & 18 chỉ dẫn: 'Scaffold out a starter React application using Vite – a build tool. Demo: npm create vite@latest name-of-project'.",
      "1": "Sai. `create-react-native-app` dùng để khởi tạo ứng dụng di động React Native, không phải web React app của môn này.",
      "2": "Sai. Grunt là công cụ tự động hóa tác vụ thời kỳ cũ, không còn là chuẩn scaffolding hiện đại.",
      "3": "Sai. Bower là trình quản lý gói client-side lỗi thời đã bị npm và yarn thay thế hoàn toàn."
    },
    "keyTakeaway": "Vite (`npm create vite@latest`) là build tool thế hệ mới được ưu tiên để khởi tạo dự án React nhờ tốc độ khởi động và HMR vượt trội."
  },
  {
    "id": 8,
    "topic": "Chapter 01: Git Distributed Architecture",
    "question": "Who originally developed the Git version control system to manage Linux kernel development?",
    "options": [
      "Brendan Eich",
      "Linus Torvalds",
      "James Gosling",
      "Dan Abramov"
    ],
    "correct": 1,
    "hint": "Nhà khoa học máy tính người Phần Lan - Mỹ, cũng là 'cha đẻ' của nhân hệ điều hành Linux.",
    "explanations": {
      "0": "Sai. Brendan Eich là tác giả sáng tạo ra ngôn ngữ JavaScript tại Netscape.",
      "1": "Chính xác! Slide 19 xác nhận: 'Distributed version control system. Developed by Linus Torvalds for managing Linux kernel development'.",
      "2": "Sai. James Gosling là cha đẻ của ngôn ngữ lập trình Java tại Sun Microsystems.",
      "3": "Sai. Dan Abramov là một trong những kỹ sư đóng góp chính cho React và Redux tại Meta."
    },
    "keyTakeaway": "Git là hệ thống quản lý phiên bản phân tán (DVCS) do Linus Torvalds sáng lập vào năm 2005 để quản lý mã nguồn Linux kernel."
  },
  {
    "id": 9,
    "topic": "Chapter 01: Git Workflow Commands",
    "question": "Which Git command is used to stage all modified and new files in the working directory before committing?",
    "options": [
      "`git add --all`",
      "`git push --all`",
      "`git commit --stage`",
      "`git merge --staged`"
    ],
    "correct": 0,
    "hint": "Lệnh đưa toàn bộ file từ Working Directory vào Staging Area (Index).",
    "explanations": {
      "0": "Chính xác! Slide 23 ghi: 'Git Staging Environment: git add \"your file name\" or git add --all'.",
      "1": "Sai. `git push --all` đẩy tất cả các local branch lên remote repository, không phải lệnh staging.",
      "2": "Sai. `git commit` dùng để ghi nhận các thay đổi đã ở trong staging area vào lịch sử commit, không có cờ `--stage`.",
      "3": "Sai. `git merge` dùng để hợp nhất các branch, không dùng để đưa file vào staging."
    },
    "keyTakeaway": "`git add --all` (hoặc `git add .`) đưa tất cả các tệp thay đổi và tệp mới tạo vào khu vực Staging Environment trước khi commit."
  },
  {
    "id": 10,
    "topic": "Chapter 01: Git Remote Repository Setup",
    "question": "Which command connects a local Git repository to a remote repository URL under the alias `origin`?",
    "options": [
      "`git remote add origin <repository URL>`",
      "`git branch -m origin <repository URL>`",
      "`git checkout -b origin <repository URL>`",
      "`git clone origin --set-url <repository URL>`"
    ],
    "correct": 0,
    "hint": "Lệnh thao tác với remote aliases, gán tên 'origin' làm điểm kết nối mặc định.",
    "explanations": {
      "0": "Chính xác! Slide 23 chỉ định: 'Add the remote online repository: git remote add origin <repository URL>'.",
      "1": "Sai. `git branch -m` dùng để đổi tên một nhánh cục bộ.",
      "2": "Sai. `git checkout -b` tạo và chuyển ngay sang một nhánh mới.",
      "3": "Sai. `git clone` dùng để sao chép toàn bộ repo từ xa về máy, không dùng cú pháp này."
    },
    "keyTakeaway": "`git remote add origin <URL>` liên kết kho chứa cục bộ với máy chủ từ xa (GitHub/GitLab) dưới tên đại diện `origin`."
  },
  {
    "id": 11,
    "topic": "Chapter 01: React History & Milestones",
    "question": "In which year was React officially open-sourced by Facebook at JSConf US?",
    "options": [
      "2011",
      "2013",
      "2015",
      "2018"
    ],
    "correct": 1,
    "hint": "React ban đầu dùng nội bộ năm 2011 trên Facebook News Feed, sau đó mở mã nguồn 2 năm sau đó.",
    "explanations": {
      "0": "Sai. Năm 2011 là mốc React bắt đầu được triển khai thử nghiệm nội bộ trong Facebook.",
      "1": "Chính xác! Slide 25 liệt kê rõ: '2011: Initial Release (Facebook's internal use); 2013: Open-sourced at JSConf US; 2015: React Native is released'.",
      "2": "Sai. Năm 2015 là thời điểm Facebook ra mắt React Native dành cho ứng dụng di động.",
      "3": "Sai. Năm 2018 là năm giới thiệu React Hooks (React 16.8 ra mắt chính thức đầu 2019)."
    },
    "keyTakeaway": "React được phát triển nội bộ tại Facebook năm 2011 và được chính thức mở mã nguồn cộng đồng tại JSConf US vào năm 2013."
  },
  {
    "id": 12,
    "topic": "Chapter 02: React Component Concept",
    "question": "What is the primary role of a component in React application architecture?",
    "options": [
      "To directly compile CSS into browser render tree layouts",
      "To act as a reusable, independent building block that returns React elements describing a piece of the UI",
      "To manage SQL queries directly against relational databases",
      "To replace standard HTTP communication with raw TCP sockets"
    ],
    "correct": 1,
    "hint": "Component là viên gạch xây dựng nên UI. Nó nhận input (props) và trả về mô tả giao diện cần hiển thị.",
    "explanations": {
      "0": "Sai. Việc compile và render CSS do Layout Engine của trình duyệt thực hiện (Blink, Gecko, WebKit), không phải React component.",
      "1": "Chính xác! Slide 3 & 4 (Ch 02) nêu: 'A component returns a set of React elements that should appear on the screen... Components enable you to split your UI into independent, reusable pieces'.",
      "2": "Sai. React component chạy trên browser (client-side), không bao giờ kết nối trực tiếp chạy câu lệnh SQL vào database.",
      "3": "Sai. Giao tiếp mạng là qua HTTP/HTTPS (Fetch/Axios) hoặc WebSockets, React không can thiệp thay thế tầng mạng TCP."
    },
    "keyTakeaway": "React Component là đơn vị cơ bản độc lập, nhận dữ liệu đầu vào và trả về cây React Elements biểu diễn một phần của giao diện người dùng."
  },
  {
    "id": 13,
    "topic": "Chapter 02: JSX Expression Syntax",
    "question": "Which syntax is required to embed dynamic JavaScript expressions inside JSX markup?",
    "options": [
      "Curly braces `{ expression }`",
      "Square brackets `[ expression ]`",
      "Percent delimiters `<% expression %>`",
      "Double parentheses `(( expression ))`"
    ],
    "correct": 0,
    "hint": "Ví dụ: `<h1>Hello, {user.name}!</h1>` hoặc `<span>{2 + 2}</span>`.",
    "explanations": {
      "0": "Chính xác! Trong JSX, bất kỳ biểu thức JS hợp lệ nào (biến, phép toán, toán tử 3 ngôi, gọi hàm) đều phải đặt trong dấu ngoặc nhọn `{}`.",
      "1": "Sai. Dấu ngoặc vuông `[]` là cú pháp khai báo mảng (Array) trong JS.",
      "2": "Sai. `<% %>` là cú pháp của các template engine server-side cũ như JSP, ASP Classic hoặc EJS.",
      "3": "Sai. `(( ))` không phải cú pháp nội suy của JSX."
    },
    "keyTakeaway": "JSX sử dụng dấu ngoặc nhọn `{}` để thoát khỏi chế độ markup và nhúng bất kỳ biểu thức JavaScript hợp lệ nào."
  },
  {
    "id": 14,
    "topic": "Chapter 02: Component Naming Convention",
    "question": "Why MUST user-defined React components start with a capital letter (e.g., `<StudentCard />` rather than `<studentCard />`)?",
    "options": [
      "Because JavaScript variables starting with lowercase are reserved keywords",
      "Because JSX treats lowercase tags as built-in HTML elements, while uppercase tags refer to user-defined components",
      "Because lowercase components cannot receive props",
      "Because lowercase components crash the browser's CSS parser"
    ],
    "correct": 1,
    "hint": "Babel phân biệt giữa thẻ HTML gốc (`<div>`, `<p>`, `<span>`) và React Component tùy biến dựa vào chữ cái đầu tiên.",
    "explanations": {
      "0": "Sai. Tên biến viết thường hoàn toàn hợp lệ trong JavaScript, không phải là từ khóa bị cấm.",
      "1": "Chính xác! Slide 6 & JSX conventions: Khi trình biên dịch gặp thẻ viết thường như `<div>`, nó biên dịch thành `React.createElement('div')`. Nhưng khi gặp chữ hoa `<StudentCard />`, nó biên dịch thành `React.createElement(StudentCard)` (truyền tham chiếu hàm/lớp).",
      "2": "Sai. Việc nhận props không liên quan đến chữ hoa/thường ở tầng ngôn ngữ, nhưng JSX sẽ không gọi component nếu viết thường mà tìm thẻ HTML tương ứng.",
      "3": "Sai. CSS parser không liên quan đến quy tắc phân giải thẻ JSX của React."
    },
    "keyTakeaway": "Component React do lập trình viên định nghĩa PHẢI bắt đầu bằng chữ in hoa (PascalCase) để JSX phân biệt với các thẻ HTML tiêu chuẩn viết thường."
  },
  {
    "id": 15,
    "topic": "Chapter 02: JSX Fragments Purpose",
    "question": "What problem do React Fragments (`<React.Fragment>` or `<></>`) solve in component templates?",
    "options": [
      "They allow components to return multiple sibling elements without adding an extra wrapper node to the real DOM",
      "They prevent components from re-rendering when parent state changes",
      "They automatically convert synchronous functions into background web workers",
      "They encrypt JSX attributes before sending them across HTTP"
    ],
    "correct": 0,
    "hint": "Một component chỉ được trả về một gốc duy nhất. Nếu không muốn sinh thêm thẻ `<div>` bọc ngoài làm hỏng CSS grid/flexbox, ta dùng Fragment.",
    "explanations": {
      "0": "Chính xác! Slide 7 (Ch 02) nêu rõ: 'Fragments are a way to group together chunks of markup without having to add unnecessary structure to your page. When a component renders a fragment, React knows to render the fragment's child element wherever the component is used'.",
      "1": "Sai. Fragments không có chức năng ngăn chặn re-render (đó là vai trò của React.memo hoặc useMemo).",
      "2": "Sai. Fragments không liên quan đến Web Workers hay luồng xử lý nền.",
      "3": "Sai. Fragments là khái niệm biểu diễn cây DOM, không phải công cụ mã hóa dữ liệu mạng."
    },
    "keyTakeaway": "React Fragment (`<></>` hoặc `<React.Fragment>`) cho phép nhóm nhiều phần tử con liền kề mà không sinh thêm thẻ HTML thừa trong cây DOM thực tế."
  },
  {
    "id": 16,
    "topic": "Chapter 02: Functional vs Class Components",
    "question": "Which of the following code snippets correctly defines a functional component in modern React?",
    "options": [
      "`function Welcome(props) { return <h1>Welcome, {props.name}!</h1>; }`",
      "`class Welcome { render() { return <h1>Welcome</h1>; } }`",
      "`const Welcome = new Component({ template: '<h1>Welcome</h1>' });`",
      "`defineComponent('Welcome', function() { return '<h1>Welcome</h1>'; });`"
    ],
    "correct": 0,
    "hint": "Functional component trong React là một hàm JavaScript tiêu chuẩn nhận tham số `props` và trả về mã JSX.",
    "explanations": {
      "0": "Chính xác! Slide 14 & 15 (Ch 02): Functional component là một JavaScript function nhận `props` làm đối số và return về React element (JSX).",
      "1": "Sai. Class component hợp lệ phải kế thừa từ `React.Component` (`class Welcome extends React.Component`).",
      "2": "Sai. Đây là cú pháp mô phỏng các framework cũ hoặc AngularJS/Vue 2, không phải React.",
      "3": "Sai. `defineComponent` là API của Vue 3, không tồn tại trong chuẩn React."
    },
    "keyTakeaway": "Functional Component là hàm JavaScript nhận đầu vào là `props` và trả về JSX element. Đây là chuẩn thiết kế chủ đạo trong React hiện đại."
  },
  {
    "id": 17,
    "topic": "Chapter 02: Class Component Lifecycle",
    "question": "In a React Class Component, which lifecycle method is invoked immediately after the component is inserted into the DOM tree (ideal for network requests)?",
    "options": [
      "`componentDidMount()`",
      "`componentWillUnmount()`",
      "`shouldComponentUpdate()`",
      "`getDerivedStateFromError()`"
    ],
    "correct": 0,
    "hint": "Phương thức này chạy một lần duy nhất ngay sau lần render đầu tiên khi DOM đã sẵn sàng.",
    "explanations": {
      "0": "Chính xác! `componentDidMount()` được gọi ngay sau khi component được mount (chèn vào DOM). Đây là vị trí chuẩn để thực hiện API call, khởi tạo timer hoặc đăng ký sự kiện.",
      "1": "Sai. `componentWillUnmount()` được gọi ngay trước khi component bị hủy và gỡ khỏi DOM (dùng để dọn dẹp bộ nhớ/cleanup).",
      "2": "Sai. `shouldComponentUpdate()` chạy trước khi re-render để quyết định có render tiếp hay không nhằm tối ưu hiệu năng.",
      "3": "Sai. `getDerivedStateFromError()` là phương thức của Error Boundary để bắt lỗi render."
    },
    "keyTakeaway": "`componentDidMount()` chạy sau khi component xuất hiện trên DOM, là nơi thực hiện các tác vụ khởi tạo như gọi API tải dữ liệu."
  },
  {
    "id": 18,
    "topic": "Chapter 02: JSX Attribute Naming",
    "question": "Why does JSX use `className` and `htmlFor` instead of the standard HTML attributes `class` and `for`?",
    "options": [
      "Because `class` and `for` are reserved keywords in JavaScript",
      "Because HTML5 deprecated `class` and `for` in favor of XML standards",
      "Because CSS stylesheets can only target attributes that start with camelCase",
      "Because React cannot parse strings containing fewer than five letters"
    ],
    "correct": 0,
    "hint": "JSX được biên dịch thành các đối tượng JavaScript thông thường. Trong JS, `class` dùng để khai báo OOP và `for` dùng cho vòng lặp.",
    "explanations": {
      "0": "Chính xác! Vì JSX là phần mở rộng của JavaScript, `class` (tạo lớp) và `for` (vòng lặp) là các từ khóa dành riêng (reserved keywords). Do đó, React ánh xạ chúng sang thuộc tính DOM tương ứng: `className` và `htmlFor`.",
      "1": "Sai. HTML5 vẫn sử dụng `class` và `for` bình thường, không hề có việc loại bỏ.",
      "2": "Sai. CSS stylesheet lựa chọn phần tử theo class selector `.my-class`, không phụ thuộc camelCase của JS.",
      "3": "Sai. Đây là một câu giải thích hoàn toàn vô căn cứ."
    },
    "keyTakeaway": "JSX tuân theo quy ước đặt tên thuộc tính DOM kiểu camelCase (`className`, `htmlFor`) để tránh xung đột với các từ khóa dành riêng của JavaScript."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_1_DATA;
}
