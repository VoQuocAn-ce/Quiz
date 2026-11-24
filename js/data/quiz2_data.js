// QUIZ 2 DATA: React-Bootstrap & UI Layout Architecture (Chapters 02 & 03)
const QUIZ_2_DATA = [
  {
    "id": 1,
    "topic": "Chapter 03: React-Bootstrap Architecture",
    "question": "What is the primary architectural advantage of React-Bootstrap compared to classic Bootstrap with jQuery?",
    "options": [
      "It completely eliminates CSS stylesheets by embedding styles directly in GPU shaders",
      "It rebuilds Bootstrap components from the ground up as pure React components without requiring jQuery or bootstrap.js",
      "It replaces JavaScript with raw C++ binaries compiled for web assembly",
      "It only functions inside Node.js server environments and disables client-side rendering"
    ],
    "correct": 1,
    "hint": "React-Bootstrap tái hiện lại toàn bộ logic tương tác của Bootstrap theo mô hình Virtual DOM của React, xóa bỏ hoàn toàn sự can thiệp DOM trực tiếp của jQuery.",
    "explanations": {
      "0": "Sai. React-Bootstrap vẫn sử dụng CSS của Bootstrap (bootstrap.min.css) để định dạng kiểu dáng, không liên quan đến GPU shaders.",
      "1": "Chính xác! Slide 4 & 5 (Ch 03) nhấn mạnh: 'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery'.",
      "2": "Sai. React-Bootstrap được viết hoàn toàn bằng JavaScript/TypeScript và React, không dùng C++.",
      "3": "Sai. React-Bootstrap được thiết kế chuyên biệt cho giao diện phía client trên trình duyệt."
    },
    "keyTakeaway": "React-Bootstrap viết lại toàn bộ components của Bootstrap dưới dạng các React Component thuần túy, loại bỏ hoàn toàn sự phụ thuộc vào jQuery và bootstrap.js."
  },
  {
    "id": 2,
    "topic": "Chapter 03: Installation & Stylesheet Setup",
    "question": "After running `npm install react-bootstrap bootstrap`, which import statement MUST be included in the entry file (`App.js` or `main.jsx`) for Bootstrap styles to apply?",
    "options": [
      "`import 'bootstrap/dist/css/bootstrap.min.css';`",
      "`import 'react-bootstrap/style.sass';`",
      "`require('bootstrap-engine.dll');`",
      "`import { BootstrapCSS } from 'react-bootstrap';`"
    ],
    "correct": 0,
    "hint": "Thư viện `bootstrap` chứa file CSS phân phối chính thức trong thư mục `dist/css`.",
    "explanations": {
      "0": "Chính xác! Slide 9 (Ch 03) hướng dẫn rõ: Cần thêm `import 'bootstrap/dist/css/bootstrap.min.css';` vào file gốc (index.js / main.jsx / App.js) để nạp các lớp CSS và biến thiết kế của Bootstrap vào dự án.",
      "1": "Sai. `react-bootstrap` không phân phối file Sass trực tiếp theo đường dẫn này; CSS gốc nằm trong gói `bootstrap`.",
      "2": "Sai. Trình duyệt không tải file DLL của hệ điều hành.",
      "3": "Sai. React-Bootstrap không export một component có tên `BootstrapCSS` để load style."
    },
    "keyTakeaway": "Để hiển thị đúng kiểu dáng giao diện, bắt buộc phải import file CSS `bootstrap/dist/css/bootstrap.min.css` vào file khởi động của ứng dụng."
  },
  {
    "id": 3,
    "topic": "Chapter 03: 12-Column Grid System",
    "question": "How many columns are included in React-Bootstrap's standard Grid system across a single row?",
    "options": [
      "10 columns",
      "12 columns",
      "16 columns",
      "24 columns"
    ],
    "correct": 1,
    "hint": "Con số kinh điển của hệ thống lưới Bootstrap cho phép chia đều thành các phần 1, 2, 3, 4, 6.",
    "explanations": {
      "0": "Sai. Hệ thống lưới của Bootstrap không dùng hệ 10 cột.",
      "1": "Chính xác! Slide 10 (Ch 03) nêu: Hệ thống lưới (Grid system) của Bootstrap chia màn hình thành 12 cột linh hoạt (12-column layout) bên trong mỗi `<Row>`.",
      "2": "Sai. 16 cột là cấu hình của một số framework CSS chuyên biệt khác như 960gs, không phải chuẩn Bootstrap.",
      "3": "Sai. Ant Design hỗ trợ 24 cột, nhưng Bootstrap/React-Bootstrap chuẩn sử dụng 12 cột."
    },
    "keyTakeaway": "Hệ thống Grid của React-Bootstrap xây dựng trên lưới 12 cột linh hoạt (flexbox-based), cho phép tùy biến tỷ lệ layout đa dạng."
  },
  {
    "id": 4,
    "topic": "Chapter 03: Container Component Types",
    "question": "What is the difference between `<Container>` and `<Container fluid>` in React-Bootstrap?",
    "options": [
      "`<Container>` has a fixed responsive max-width at each breakpoint, while `<Container fluid>` spans 100% of the viewport width across all breakpoints",
      "`<Container fluid>` enables animated fluid physics simulations for buttons",
      "`<Container>` is only for mobile screens, while `<Container fluid>` is strictly for desktop monitors",
      "`<Container fluid>` automatically converts all text inside into italic typography"
    ],
    "correct": 0,
    "hint": "Thuộc tính `fluid` làm cho container luôn trải dài toàn màn hình (full-width 100%) ở mọi độ phân giải.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 03): `<Container>` chuẩn có `max-width` cố định điều chỉnh theo từng breakpoint (sm, md, lg, xl). Trong khi đó, `fluid` thiết lập chiều rộng luôn là `100%` trên mọi kích thước màn hình.",
      "1": "Sai. `fluid` ở đây là thuật ngữ về layout co giãn toàn màn hình (fluid width), không liên quan đến vật lý mô phỏng.",
      "2": "Sai. Cả hai container đều dùng được trên mọi loại thiết bị từ mobile đến desktop.",
      "3": "Sai. Thuộc tính `fluid` không tác động đến font-style của văn bản."
    },
    "keyTakeaway": "`<Container>` tạo layout có lề hai bên với `max-width` đáp ứng; còn `<Container fluid>` luôn chiếm trọn 100% chiều rộng màn hình."
  },
  {
    "id": 5,
    "topic": "Chapter 03: Responsive Breakpoints",
    "question": "In React-Bootstrap, what does the `md` breakpoint represent in terms of viewport pixel width?",
    "options": [
      "Small devices (>= 576px)",
      "Medium devices (>= 768px)",
      "Large desktops (>= 992px)",
      "Extra extra large monitors (>= 1400px)"
    ],
    "correct": 1,
    "hint": "Breakpoint thường dùng cho máy tính bảng (tablet) hoặc màn hình laptop nhỏ, bắt đầu từ 768px.",
    "explanations": {
      "0": "Sai. Kích thước ≥ 576px tương ứng với breakpoint `sm` (Small).",
      "1": "Chính xác! Slide 10 (Ch 03): Các breakpoint chuẩn của Bootstrap gồm: `xs` (<576px), `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px), và `xxl` (≥1400px).",
      "2": "Sai. Kích thước ≥ 992px tương ứng với breakpoint `lg` (Large).",
      "3": "Sai. Kích thước ≥ 1400px tương ứng với breakpoint `xxl` (Extra Extra Large)."
    },
    "keyTakeaway": "Các breakpoint kích thước trong Bootstrap: `xs` (<576px), `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px), `xxl` (≥1400px)."
  },
  {
    "id": 6,
    "topic": "Chapter 03: Column Layout Sizing",
    "question": "Given the JSX `<Col xs={12} md={6} lg={4}>`, how will this column render across different device screens?",
    "options": [
      "Full width (12/12) on mobile, half width (6/12) on tablets, and one-third width (4/12) on desktops",
      "One-twelfth width on all devices",
      "4 columns on mobile, 6 on tablet, and 12 on desktop",
      "It causes a runtime error because column sizes cannot vary across breakpoints"
    ],
    "correct": 0,
    "hint": "Hãy nhớ quy tắc 12 cột: 12 cột = 100% chiều rộng; 6 cột = 50%; 4 cột = 33.33%.",
    "explanations": {
      "0": "Chính xác! `xs={12}` chiếm trọn 12/12 cột (100% dòng) trên màn hình siêu nhỏ; `md={6}` chiếm 6/12 (50% dòng - 2 cột mỗi hàng) trên tablet; `lg={4}` chiếm 4/12 (33.33% dòng - 3 cột mỗi hàng) trên màn hình lớn.",
      "1": "Sai. Số truyền vào đại diện cho số cột chiếm dụng trên tổng số 12, không phải phân số 1/12.",
      "2": "Sai. Thứ tự kích thước thiết bị đi từ nhỏ (xs) đến vừa (md) rồi đến lớn (lg).",
      "3": "Sai. Đây chính là tính năng cốt lõi của responsive design trong React-Bootstrap, hoàn toàn hợp lệ."
    },
    "keyTakeaway": "Cú pháp `<Col xs={12} md={6} lg={4}>` cấu hình kích thước cột đáp ứng linh hoạt theo độ phân giải màn hình của người dùng."
  },
  {
    "id": 7,
    "topic": "Chapter 03: Button Variants",
    "question": "Which prop is used in React-Bootstrap's `<Button>` to change its visual theme to danger (red)?",
    "options": [
      "`color='danger'`",
      "`variant='danger'`",
      "`theme='red'`",
      "`type='alert'`"
    ],
    "correct": 1,
    "hint": "React-Bootstrap sử dụng prop `variant` để kiểm soát các bảng màu ngữ nghĩa (semantic colors).",
    "explanations": {
      "0": "Sai. `color` là thuộc tính của Material-UI (MUI), không phải prop chuẩn của React-Bootstrap Button.",
      "1": "Chính xác! Slide 11 (Ch 03): Các component của React-Bootstrap sử dụng prop `variant` (ví dụ: `variant=\"primary\"`, `variant=\"danger\"`, `variant=\"success\"`, `variant=\"outline-info\"`).",
      "2": "Sai. Bootstrap không sử dụng prop `theme='red'`.",
      "3": "Sai. Prop `type` trên Button dành cho kiểu HTML như `type='submit'`, `type='button'`, hoặc `type='reset'`."
    },
    "keyTakeaway": "Dùng prop `variant` (ví dụ: `primary`, `secondary`, `success`, `danger`, `warning`) để áp dụng bảng màu ngữ nghĩa cho các components."
  },
  {
    "id": 8,
    "topic": "Chapter 03: Form Input Binding",
    "question": "Which component represents a text input field, textarea, or file input in React-Bootstrap?",
    "options": [
      "`<Form.Control>`",
      "`<Form.Input>`",
      "`<Form.Field>`",
      "`<Form.TextElement>`"
    ],
    "correct": 0,
    "hint": "Component này kết hợp với `<Form.Group>` và `<Form.Label>` để tạo nên cấu trúc trường nhập liệu chuẩn.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 03): `<Form.Control>` tương đương với class `.form-control` của Bootstrap, dùng để render `<input>`, `<textarea>`, v.v.",
      "1": "Sai. Không có component `<Form.Input>` trong React-Bootstrap.",
      "2": "Sai. `<Form.Field>` thuộc về Semantic UI React, không phải React-Bootstrap.",
      "3": "Sai. `<Form.TextElement>` không tồn tại trong thư viện."
    },
    "keyTakeaway": "`<Form.Control>` là component chuẩn của React-Bootstrap để xử lý các thẻ nhập liệu (input, textarea) với giao diện tối ưu."
  },
  {
    "id": 9,
    "topic": "Chapter 03: Form Accessibility with `controlId`",
    "question": "What is the purpose of specifying `controlId` on `<Form.Group controlId=\"userEmail\">` in React-Bootstrap?",
    "options": [
      "It automatically encrypts the entered email string with AES",
      "It automatically links the nested `<Form.Label>` and `<Form.Control>` with matching `id` and `htmlFor` attributes",
      "It forces the browser to validate email format using remote DNS lookup",
      "It generates a unique primary key in the MongoDB database"
    ],
    "correct": 1,
    "hint": "Thuộc tính này giúp tối ưu khả năng trợ năng (accessibility - a11y), khi bấm vào Label con trỏ sẽ tự động focus vào ô nhập.",
    "explanations": {
      "0": "Sai. `controlId` không mã hóa dữ liệu.",
      "1": "Chính xác! Slide 12 (Ch 03): `controlId` trên `<Form.Group>` tự động cung cấp `id` cho `<Form.Control>` và thuộc tính `htmlFor` cho `<Form.Label>`, giúp tăng khả năng trợ năng (a11y) mà không cần lập trình viên gán thủ công.",
      "2": "Sai. Kiểm tra định dạng do trình duyệt hoặc mã JS xử lý, không liên quan đến DNS lookup của `controlId`.",
      "3": "Sai. Đây là tầng UI React, không can thiệp vào cơ sở dữ liệu MongoDB."
    },
    "keyTakeaway": "`controlId` trên `<Form.Group>` tự động đồng bộ thuộc tính `id` của input và `htmlFor` của nhãn label, nâng cao khả năng tiếp cận (Accessibility)."
  },
  {
    "id": 10,
    "topic": "Chapter 03: Form Validation Feedback",
    "question": "Which component is used inside `<Form.Group>` to display an error message when input validation fails?",
    "options": [
      "`<Form.Control.Feedback type=\"invalid\">`",
      "`<Form.Error>`",
      "`<Form.AlertMessage>`",
      "`<Form.ValidationRule>`"
    ],
    "correct": 0,
    "hint": "Component con của `Form.Control` hỗ trợ hai giá trị `type=\"valid\"` hoặc `type=\"invalid\"`.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 03): `<Form.Control.Feedback type=\"invalid\">` hiển thị thông báo lỗi màu đỏ khi input rơi vào trạng thái không hợp lệ (invalid).",
      "1": "Sai. Không có `<Form.Error>` trong React-Bootstrap.",
      "2": "Sai. `<Alert>` là một component riêng biệt, không phải component con `<Form.AlertMessage>`.",
      "3": "Sai. `<Form.ValidationRule>` không phải là một component của React-Bootstrap."
    },
    "keyTakeaway": "`<Form.Control.Feedback type=\"invalid\">` được sử dụng để hiển thị phản hồi lỗi xác thực trực quan ngay dưới ô nhập liệu."
  },
  {
    "id": 11,
    "topic": "Chapter 03: Responsive Navbar Architecture",
    "question": "In `<Navbar expand=\"lg\">`, what does the `expand=\"lg\"` prop control?",
    "options": [
      "The navbar always remains expanded into full desktop links down to large screens, and collapses into a hamburger toggle button on screens smaller than `lg` (992px)",
      "It magnifies all fonts and logo icons by 200%",
      "It limits the maximum number of nav links to exactly 9 items",
      "It connects the navbar to the browser's full-screen API"
    ],
    "correct": 0,
    "hint": "Prop `expand` quyết định ngưỡng kích thước màn hình mà tại đó menu ngang chuyển đổi thành menu thu gọn (hamburger menu).",
    "explanations": {
      "0": "Chính xác! Slide 13 (Ch 03): `expand=\"lg\"` quy định rằng từ kích thước màn hình lớn (≥992px) trở lên, Navbar sẽ trải rộng đầy đủ. Ở các màn hình nhỏ hơn (<992px), nó sẽ tự động gom lại thành nút Toggle (hamburger icon).",
      "1": "Sai. `expand` kiểm soát tính đáp ứng của thanh điều hướng, không phóng to kích thước font chữ.",
      "2": "Sai. Không có giới hạn cứng về số lượng liên kết.",
      "3": "Sai. `expand` không kích hoạt chế độ Fullscreen của màn hình."
    },
    "keyTakeaway": "Prop `expand` trên `<Navbar>` xác định breakpoint mà thanh điều hướng chuyển đổi giữa menu mở rộng đầy đủ và menu thu gọn dạng hamburger."
  },
  {
    "id": 12,
    "topic": "Chapter 03: Modal Dialog Control",
    "question": "How is the visibility of a React-Bootstrap `<Modal>` controlled in React state?",
    "options": [
      "By passing a boolean state variable to the `show` prop of `<Modal show={isOpen} onHide={handleClose}>`",
      "By adding or removing CSS class `display-none` via `document.getElementById`",
      "By restarting the React application with a command line argument",
      "By setting the opacity of the browser window to zero"
    ],
    "correct": 0,
    "hint": "React hoạt động theo hướng khai báo: dùng state boolean (`show={isOpen}`) và hàm callback `onHide={handleClose}` khi bấm nút đóng hoặc vùng backdrop.",
    "explanations": {
      "0": "Chính xác! Slide 14 (Ch 03): Modal nhận prop `show={boolean}` để quyết định trạng thái hiển thị và prop `onHide={callback}` để cập nhật lại state khi người dùng đóng dialog.",
      "1": "Sai. Can thiệp trực tiếp vào DOM bằng `document.getElementById` là mô hình imperative của vanilla JS, đi ngược lại nguyên lý của React.",
      "2": "Sai. Khởi động lại ứng dụng không phải là cách quản lý trạng thái hiển thị của component.",
      "3": "Sai. Opacity của cửa sổ trình duyệt không liên quan đến việc ẩn/hiện Modal."
    },
    "keyTakeaway": "Hiển thị Modal trong React-Bootstrap được kiểm soát khai báo thông qua prop `show={boolean}` và hàm xử lý đóng `onHide`."
  },
  {
    "id": 13,
    "topic": "Chapter 03: Dismissible Alerts",
    "question": "Which prop enables a close button ('X') on `<Alert variant=\"success\">` allowing users to dismiss it?",
    "options": [
      "`dismissible`",
      "`closeable`",
      "`closable={true}`",
      "`canClose`"
    ],
    "correct": 0,
    "hint": "Từ khóa tiếng Anh có nghĩa là 'có thể đóng/hủy bỏ', kết hợp cùng callback `onClose`.",
    "explanations": {
      "0": "Chính xác! Slide 15 (Ch 03): Thêm prop `dismissible` vào `<Alert>` sẽ tự động sinh nút đóng 'X'. Kết hợp cùng callback `onClose` để xử lý cập nhật state đóng thông báo.",
      "1": "Sai. `closeable` là từ sai chính tả, không phải tên prop của React-Bootstrap.",
      "2": "Sai. `closable` là prop của Ant Design, không phải của React-Bootstrap.",
      "3": "Sai. `canClose` không tồn tại trong thư viện."
    },
    "keyTakeaway": "Sử dụng prop `dismissible` trên component `<Alert>` để hiển thị nút đóng và cho phép người dùng tắt thông báo."
  },
  {
    "id": 14,
    "topic": "Chapter 03: Content Cards Architecture",
    "question": "Which sub-component is typically placed inside `<Card>` to hold the primary text, title, and actions?",
    "options": [
      "`<Card.Body>`",
      "`<Card.ContentPane>`",
      "`<Card.MainSection>`",
      "`<Card.InnerBox>`"
    ],
    "correct": 0,
    "hint": "Cấu trúc Card của React-Bootstrap gồm `Card.Img`, `Card.Header`, `Card.Body`, và `Card.Footer`.",
    "explanations": {
      "0": "Chính xác! Slide 16 (Ch 03): `<Card.Body>` là phần thân cốt lõi chứa các thành phần nội dung như `<Card.Title>`, `<Card.Subtitle>`, `<Card.Text>` và `<Button>`.",
      "1": "Sai. `<Card.ContentPane>` không tồn tại trong React-Bootstrap.",
      "2": "Sai. `<Card.MainSection>` không phải component chuẩn của thư viện.",
      "3": "Sai. `<Card.InnerBox>` không tồn tại."
    },
    "keyTakeaway": "Component `<Card.Body>` đóng vai trò là vùng chứa nội dung chính bên trong `<Card>`, cung cấp padding và layout chuẩn hóa."
  },
  {
    "id": 15,
    "topic": "Chapter 03: Table Component Enhancements",
    "question": "Which prop on `<Table>` enables alternating row background colors for improved data readability?",
    "options": [
      "`striped`",
      "`zebra`",
      "`alternateColors`",
      "`coloredRows`"
    ],
    "correct": 0,
    "hint": "Tương ứng với class `.table-striped` của CSS Bootstrap (hiệu ứng sọc vằn xen kẽ).",
    "explanations": {
      "0": "Chính xác! Slide 17 (Ch 03): `<Table striped bordered hover>`: Prop `striped` thêm màu nền xen kẽ giữa các dòng chẵn/lẻ giúp người dùng dễ theo dõi dữ liệu hơn.",
      "1": "Sai. `zebra` là thuật ngữ miêu tả dân dã, nhưng prop chính thức của Bootstrap là `striped`.",
      "2": "Sai. Không có prop `alternateColors` trong React-Bootstrap Table.",
      "3": "Sai. `coloredRows` không phải prop hợp lệ."
    },
    "keyTakeaway": "Prop `striped` trên `<Table>` kích hoạt chế độ hiển thị màu nền xen kẽ (zebra-striping), tăng cường độ tương phản và khả năng đọc dữ liệu bảng."
  },
  {
    "id": 16,
    "topic": "Chapter 03: React Router Integration with React-Bootstrap",
    "question": "How can you make a React-Bootstrap `<Nav.Link>` navigate using React Router client-side routing instead of causing a full page refresh?",
    "options": [
      "By passing `as={Link} to=\"/courses\"` on the `<Nav.Link>` component",
      "By disabling JavaScript in the browser settings",
      "By wrapping the entire HTML page in a `<form>` tag",
      "By changing the browser address bar directly using `window.location.reload()`"
    ],
    "correct": 0,
    "hint": "React-Bootstrap hỗ trợ đa hình (polymorphism) thông qua prop `as`, cho phép thay thế thẻ HTML gốc bằng component `Link` của React Router.",
    "explanations": {
      "0": "Chính xác! Bằng cách sử dụng prop đa hình: `<Nav.Link as={Link} to=\"/courses\">`, component vẫn giữ nguyên kiểu dáng CSS của Bootstrap nhưng hành vi điều hướng được ủy quyền cho `Link` của React Router mà không tải lại toàn bộ trang.",
      "1": "Sai. Tắt JavaScript sẽ làm toàn bộ ứng dụng React ngừng hoạt động.",
      "2": "Sai. Bọc thẻ form không giải quyết bài toán điều hướng SPA.",
      "3": "Sai. `window.location.reload()` sẽ tải lại toàn bộ trang web từ đầu, phá vỡ mô hình SPA."
    },
    "keyTakeaway": "Dùng prop đa hình `as={Link}` và `to=\"...\"` trên các components của React-Bootstrap để tích hợp điều hướng mượt mà với React Router."
  },
  {
    "id": 17,
    "topic": "Chapter 03: Grid Offsets & Centering",
    "question": "How can you center a 6-column card in the middle of a 12-column grid row using column offset props?",
    "options": [
      "`<Col md={{ span: 6, offset: 3 }}>`",
      "`<Col center={true} width={6}>`",
      "`<Col md={6} push=\"auto\">`",
      "`<Col md={6} margin=\"center\">`"
    ],
    "correct": 0,
    "hint": "Để căn giữa 6 cột trong tổng 12 cột, khoảng trống hai bên cần là (12 - 6) / 2 = 3 cột.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 03): Để căn giữa cột rộng 6 trên lưới 12, ta thụt lề đầu dòng 3 cột: `<Col md={{ span: 6, offset: 3 }}>` (hoặc class `offset-md-3`). Tổng: 3 (trống) + 6 (nội dung) + 3 (trống còn lại) = 12 cột.",
      "1": "Sai. Không có prop `center` hay `width` trên `<Col>` trong React-Bootstrap.",
      "2": "Sai. Thuộc tính `push`/`pull` là của Bootstrap 3 cũ, không dùng trong Bootstrap 5 hiện đại.",
      "3": "Sai. `<Col>` không nhận prop `margin='center'`."
    },
    "keyTakeaway": "Cấu hình `{ span: 6, offset: 3 }` (tương đương class `offset-md-3`) giúp căn giữa một cột 6 phần vào chính giữa hàng lưới 12 cột."
  },
  {
    "id": 18,
    "topic": "Chapter 03: Component Composition & Custom Styling",
    "question": "When customizing React-Bootstrap components, which approach allows applying custom CSS classes while retaining built-in Bootstrap styles?",
    "options": [
      "Adding a custom class name via the standard `className=\"my-custom-btn\"` prop",
      "Overwriting the React-Bootstrap node_modules source files directly",
      "Renaming all Bootstrap CSS files to `.txt`",
      "Deleting the virtual DOM before rendering"
    ],
    "correct": 0,
    "hint": "Mọi component của React-Bootstrap đều truyền và hợp nhất thuộc tính `className` vào phần tử DOM thật bên dưới.",
    "explanations": {
      "0": "Chính xác! Các component React-Bootstrap tự động ghép nối giá trị truyền qua `className=\"my-custom-btn\"` với các class CSS nội tại của Bootstrap, cho phép lập trình viên tùy biến giao diện dễ dàng.",
      "1": "Sai. Không bao giờ được sửa đổi trực tiếp các file trong thư mục `node_modules` vì chúng sẽ bị ghi đè khi chạy `npm install`.",
      "2": "Sai. Đổi đuôi file CSS thành `.txt` sẽ khiến trình duyệt không nhận diện được stylesheet.",
      "3": "Sai. Xóa Virtual DOM là thao tác không khả thi và sẽ làm ứng dụng bị sập."
    },
    "keyTakeaway": "Luôn truyền lớp tùy biến thông qua thuộc tính `className` để kết hợp hài hòa kiểu dáng riêng với hệ thống CSS sẵn có của Bootstrap."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_2_DATA;
}
