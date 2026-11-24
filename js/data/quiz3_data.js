// QUIZ 3 DATA: State Management, Props Flow & Context API (Chapter 04)
const QUIZ_3_DATA = [
  {
    "id": 1,
    "topic": "Chapter 04: Props Definition & Immutability",
    "question": "Which statement accurately describes the immutability of `props` in React components?",
    "options": [
      "Props are strictly read-only; a component must never modify its own props",
      "A child component can directly reassign `this.props.title = 'New'` at any time",
      "Props can be mutated if the component is wrapped in a try/catch block",
      "Props are mutable by default, but become read-only once saved to localStorage"
    ],
    "correct": 0,
    "hint": "Slide 13 nêu rõ nguyên lý: 'Props are Read-Only'. Tất cả React component phải hoạt động như các hàm thuần khiết (pure functions) đối với props của chúng.",
    "explanations": {
      "0": "Chính xác! Slide 13 (Ch 04) khẳng định: 'Cannot modify props within the component. Props are Read-Only'. Mọi component React đều phải tuân thủ nguyên tắc thuần khiết, không được trực tiếp làm biến đổi dữ liệu nhận từ component cha.",
      "1": "Sai. Việc gán lại `this.props.title = ...` sẽ vi phạm kiến trúc của React và gây lỗi nghiêm trọng (runtime error trong strict mode).",
      "2": "Sai. Bọc try/catch không thay đổi được tính chất bất biến của props trong React.",
      "3": "Sai. Props luôn luôn là read-only trong suốt vòng đời của component, không phụ thuộc vào localStorage."
    },
    "keyTakeaway": "Props là thuộc tính truyền từ cha xuống con và có tính chất chỉ đọc (Read-Only). Component con tuyệt đối không được phép chỉnh sửa giá trị của props."
  },
  {
    "id": 2,
    "topic": "Chapter 04: The `children` Prop",
    "question": "In React, what does the special `children` prop represent inside a component?",
    "options": [
      "The child processes spawned in the Node.js server runtime",
      "Any JSX content or elements placed between the opening and closing tags of that component (e.g. `<Panel>Here</Panel>`)",
      "An array of all CSS stylesheets linked in the `<head>` of the HTML document",
      "A database table containing parent-child relational foreign keys"
    ],
    "correct": 1,
    "hint": "Xem Slide 11 và 13 (Ch 04): Khi viết `<Panel>Nội dung ở đây</Panel>`, nội dung nằm giữa thẻ đóng/mở được truyền vào qua prop đặc biệt nào?",
    "explanations": {
      "0": "Sai. `children` ở đây là khái niệm trong cây component JSX của React, không phải Child Process của hệ điều hành.",
      "1": "Chính xác! Slide 11 & 13 (Ch 04): Khi bạn lồng các phần tử vào giữa thẻ mở và đóng của một component (ví dụ: `<Panel title=\"About\"><p>Text</p></Panel>`), React tự động gom chúng thành prop `children` để component có thể render linh hoạt.",
      "2": "Sai. Thẻ stylesheet được quản lý ở tài liệu HTML, không liên quan đến prop `children`.",
      "3": "Sai. Đây là tầng View của React, không liên quan đến foreign key trong database."
    },
    "keyTakeaway": "Prop `children` đại diện cho bất kỳ nội dung JSX nào được đặt giữa thẻ mở và thẻ đóng của một component, hỗ trợ kỹ thuật Component Composition."
  },
  {
    "id": 3,
    "topic": "Chapter 04: State in Class Components",
    "question": "In a React Class Component, what is the ONLY correct way to update the component's state and trigger a re-render?",
    "options": [
      "Direct mutation: `this.state.count = this.state.count + 1;`",
      "Using the method: `this.setState({ count: this.state.count + 1 });`",
      "Deleting the state object: `delete this.state.count;`",
      "Calling `window.location.reload();`"
    ],
    "correct": 1,
    "hint": "Slide 4 (Ch 04) cảnh báo rõ: 'State should only be modified using setState(). Never do the following: this.state.count = this.state.count + 1;'.",
    "explanations": {
      "0": "Sai. Gán trực tiếp `this.state.count = ...` sẽ làm thay đổi giá trị trong bộ nhớ nhưng React KHÔNG hề hay biết để kích hoạt render lại giao diện.",
      "1": "Chính xác! Slide 4 (Ch 04): 'State should only be modified using setState(). Never do the following: this.state.count = this.state.count + 1;'. Gọi `setState()` thông báo cho React biết state đã thay đổi để xếp lịch re-render UI.",
      "2": "Sai. Dùng lệnh `delete` phá hủy cấu trúc state và không kích hoạt re-render.",
      "3": "Sai. Reload lại trang web sẽ hủy toàn bộ ứng dụng và tải lại từ server, đi ngược hoàn toàn với React."
    },
    "keyTakeaway": "Trong Class Component, chỉ được phép cập nhật state thông qua phương thức `this.setState()`. Tuyệt đối không đột biến (mutate) trực tiếp `this.state`."
  },
  {
    "id": 4,
    "topic": "Chapter 04: Declarative vs Imperative UI",
    "question": "According to Slide 6-8, how does declarative UI programming in React differ from traditional imperative UI programming?",
    "options": [
      "Imperative UI writes step-by-step instructions to manipulate DOM elements, while Declarative UI describes visual states and lets React update the DOM",
      "Imperative UI only works on mobile devices, while Declarative UI is strictly desktop",
      "Declarative UI requires assembly language, while Imperative uses Python",
      "There is no difference; they are identical synonyms in React"
    ],
    "correct": 0,
    "hint": "Lập trình mệnh lệnh (Imperative) ra lệnh 'làm thế nào' (bước 1, bước 2 tắt/bật nút); Lập trình khai báo (Declarative) mô tả 'giao diện trông như thế nào ở từng trạng thái'.",
    "explanations": {
      "0": "Chính xác! Slide 6 & 7 (Ch 04): 'In imperative programming... you have to write the exact instructions to manipulate the UI depending on what just happened. React provides a declarative way: you describe the different states that your component can be in, and switch between them in response to user input'.",
      "1": "Sai. Cả hai mô hình đều áp dụng được cho mọi loại thiết bị.",
      "2": "Sai. Cả hai đều được viết bằng JavaScript/TypeScript trong thế giới web.",
      "3": "Sai. Đây là hai triết lý lập trình hoàn toàn khác nhau."
    },
    "keyTakeaway": "React áp dụng mô hình Declarative (khai báo): lập trình viên chỉ cần mô tả giao diện tương ứng với từng trạng thái của state, React sẽ tự động cập nhật DOM."
  },
  {
    "id": 5,
    "topic": "Chapter 04: Principles for Structuring State",
    "question": "Which of the following is recommended as a best practice when structuring component state (Slide 9)?",
    "options": [
      "Store redundant values that can easily be calculated from existing props or state",
      "Avoid deeply nested state, duplication, contradictions, and redundant state variables",
      "Duplicate the same data in five different components so they never have to talk to each other",
      "Store the entire browser history object inside every button component"
    ],
    "correct": 1,
    "hint": "Slide 9 liệt kê 4 nguyên tắc vàng: Avoid contradictions, Avoid redundant state, Avoid duplication, Avoid deeply nested state.",
    "explanations": {
      "0": "Sai. Nên tránh lưu các giá trị dư thừa (redundant) có thể tính toán được từ props/state hiện tại.",
      "1": "Chính xác! Slide 9 (Ch 04) liệt kê: 'Principles for structuring state: Avoid contradictions in state; Avoid redundant state; Avoid duplication in state; Avoid deeply nested state'.",
      "2": "Sai. Trùng lặp dữ liệu (duplication) là nguyên nhân hàng đầu gây ra lỗi lệch trạng thái (out-of-sync bugs).",
      "3": "Sai. Lưu trữ dữ liệu thừa thãi trong state gây lãng phí bộ nhớ và làm chậm quá trình render."
    },
    "keyTakeaway": "Cấu trúc state tốt: Tránh mâu thuẫn dữ liệu, tránh dữ liệu dư thừa có thể tính toán được, tránh trùng lặp, và làm phẳng (flatten) thay vì lồng nhau quá sâu."
  },
  {
    "id": 6,
    "topic": "Chapter 04: Lifting State Up",
    "question": "What is 'Lifting State Up' in React (Slide 10)?",
    "options": [
      "Moving shared state to the closest common parent component when multiple components need to coordinate",
      "Uploading all local state to a cloud database every second",
      "Moving CSS styles from the component file to the index.html head",
      "Elevating the z-index of an element so it appears above modals"
    ],
    "correct": 0,
    "hint": "Khi hai component anh em muốn đồng bộ dữ liệu với nhau, ta nhấc state lên component cha chung gần nhất rồi truyền xuống qua props.",
    "explanations": {
      "0": "Chính xác! Slide 10 (Ch 04) định nghĩa: 'Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up'.",
      "1": "Sai. 'Lifting state' là thao tác trong cây component React, không phải upload dữ liệu lên cloud.",
      "2": "Sai. Thao tác di chuyển CSS không liên quan đến kỹ thuật quản lý state.",
      "3": "Sai. `z-index` là thuộc tính hiển thị tầng lớp của CSS, không phải lifting state."
    },
    "keyTakeaway": "Lifting State Up là kỹ thuật đưa state lên component cha chung gần nhất để chia sẻ và đồng bộ dữ liệu giữa các component con thông qua props."
  },
  {
    "id": 7,
    "topic": "Chapter 04: Preserving State at Tree Position",
    "question": "How does React decide whether to preserve or reset a component's state between re-renders (Slide 12)?",
    "options": [
      "State is tied to the component's position in the UI render tree; the same component at the same position preserves state",
      "State is stored in cookies and reset only when the user clears browser history",
      "State is always wiped out on every single keystroke unless an external database is connected",
      "State is randomly assigned to different components on each render cycle"
    ],
    "correct": 0,
    "hint": "Slide 12: 'State is tied to a position in the render tree... Same component at the same position preserves state; Different components at the same position reset state'.",
    "explanations": {
      "0": "Chính xác! Slide 12 (Ch 04): 'State is tied to a position in the render tree... React associates each piece of state with the correct component by where that component sits in the render tree. Same component at the same position preserves state; Different components at the same position reset state'.",
      "1": "Sai. State của React được lưu trên RAM của tiến trình JavaScript trong trình duyệt, không lưu trong cookies.",
      "2": "Sai. Nếu state bị xóa sau mỗi phím gõ thì component không thể duy trì dữ liệu nhập của người dùng.",
      "3": "Sai. React quản lý cây render cực kỳ tất định (deterministic), không có tính ngẫu nhiên."
    },
    "keyTakeaway": "React gắn liền state với vị trí của component trong cây Render Tree: cùng một component ở cùng một vị trí sẽ giữ nguyên state qua các lần re-render."
  },
  {
    "id": 8,
    "topic": "Chapter 04: Resetting State with the `key` Prop",
    "question": "If you render the same component at the same position in the tree, how can you explicitly force React to destroy its state and recreate it fresh (Slide 12)?",
    "options": [
      "By giving the component a different `key` prop (e.g. `<Profile key={userId} />`)",
      "By adding an exclamation mark before the component name",
      "By wrapping the component in a `<noscript>` tag",
      "By deleting the component from the hard drive"
    ],
    "correct": 0,
    "hint": "React sử dụng thuộc tính `key` để phân biệt danh tính độc nhất của component. Thay đổi `key` sẽ khiến React xem đó là một phần tử hoàn toàn mới.",
    "explanations": {
      "0": "Chính xác! Slide 12 & React docs: Khi bạn truyền một `key` khác biệt (ví dụ `key={userId}`), React coi component đó là một thực thể hoàn toàn mới, hủy bỏ thực thể cũ và reset toàn bộ state về giá trị khởi tạo ban đầu.",
      "1": "Sai. Thêm dấu chấm than trước tên thẻ là cú pháp JSX không hợp lệ.",
      "2": "Sai. `<noscript>` chỉ hiển thị khi trình duyệt bị tắt JavaScript.",
      "3": "Sai. Thao tác trên ổ cứng không liên quan đến hành vi render của React."
    },
    "keyTakeaway": "Thay đổi giá trị của thuộc tính `key` buộc React phải hủy bỏ (unmount) component cũ và tạo mới lại từ đầu, từ đó thiết lập lại toàn bộ state ban đầu."
  },
  {
    "id": 9,
    "topic": "Chapter 04: Stateless / Pure Functional Components",
    "question": "What is a 'Stateless Functional Component' in React architecture (Slide 21)?",
    "options": [
      "A pure function that takes props as an argument and returns JSX, holding no internal state of its own",
      "A component that cannot display any text or images",
      "A component that crashes whenever a user clicks a button",
      "A component that only runs inside a terminal command line"
    ],
    "correct": 0,
    "hint": "Slide 21: 'Stateless components: Pure functional components'. Component này không quản lý trạng thái nội bộ mà phụ thuộc 100% vào props nhận từ bên ngoài.",
    "explanations": {
      "0": "Chính xác! Slide 21 (Ch 04): Stateless functional component (còn gọi là presentational/dumb component) là hàm thuần khiết chỉ nhận props và trả về giao diện JSX. Nó không lưu trữ state nội bộ nên rất dễ test và tái sử dụng.",
      "1": "Sai. Stateless component hoàn toàn có thể hiển thị văn bản, hình ảnh, icon phong phú dựa vào dữ liệu trong props.",
      "2": "Sai. Stateless component vẫn xử lý được các sự kiện click thông qua các hàm callback được truyền từ cha xuống qua props.",
      "3": "Sai. Nó render bình thường trên giao diện web trình duyệt."
    },
    "keyTakeaway": "Stateless Functional Component là thành phần thuần khiết chỉ nhận props và xuất ra JSX, không tự quản lý state nội bộ nên có tính dự đoán cao và dễ kiểm thử."
  },
  {
    "id": 10,
    "topic": "Chapter 04: Container vs Presentational Pattern",
    "question": "According to Slide 23, what is the architectural responsibility of a 'Container component'?",
    "options": [
      "Handling data fetching and state logic, then passing the data down to child components responsible for rendering",
      "Compiling Java code into Docker containers",
      "Directly applying CSS margin and padding without rendering any HTML",
      "Storing encrypted passwords in the browser's indexedDB"
    ],
    "correct": 0,
    "hint": "Slide 23: 'Container components: Don't couple data fetching with the component that renders the data. The container is responsible for fetching the data and passing it to its child component'.",
    "explanations": {
      "0": "Chính xác! Slide 23 (Ch 04): 'Don't couple data fetching with the component that renders the data. The container is responsible for fetching data and passing it to its child component'. Tách biệt tầng logic/dữ liệu (Container) và tầng hiển thị (Presentational).",
      "1": "Sai. Container ở đây là pattern thiết kế component trong React, không phải Docker container.",
      "2": "Sai. Container component tập trung vào business logic và dữ liệu, không chỉ thuần túy căn chỉnh CSS.",
      "3": "Sai. Container component không dùng để lưu trữ mật khẩu mã hóa trong IndexedDB."
    },
    "keyTakeaway": "Mô hình Container Component tách biệt rõ ràng trách nhiệm: Container lo việc lấy dữ liệu (fetching/state) và truyền cho Presentational component chuyên lo việc hiển thị UI."
  },
  {
    "id": 11,
    "topic": "Chapter 04: The Prop Drilling Problem",
    "question": "What issue is known as 'Prop Drilling' in React applications?",
    "options": [
      "Passing props down through multiple layers of intermediate components that have no need for that data themselves",
      "Drilling hardware holes into computer motherboards to install React",
      "Overwriting parent state directly from child components using eval()",
      "Downloading thousands of node_modules simultaneously"
    ],
    "correct": 0,
    "hint": "Khi component A muốn truyền dữ liệu cho component Z nằm sâu 5 tầng bên dưới, ta phải chuyền props qua B, C, D, E dù chúng không dùng dữ liệu đó.",
    "explanations": {
      "0": "Chính xác! Prop Drilling là hiện tượng phải truyền props qua nhiều tầng component trung gian chỉ để đưa dữ liệu đến component đích ở tận cùng bên dưới, khiến code bị phụ thuộc và khó bảo trì.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về phần cứng.",
      "2": "Sai. Đây không phải định nghĩa của prop drilling.",
      "3": "Sai. Việc tải thư viện là của npm/yarn, không phải prop drilling."
    },
    "keyTakeaway": "Prop Drilling xảy ra khi dữ liệu phải đi qua nhiều cấp component trung gian không có nhu cầu sử dụng, làm code trở nên cồng kềnh và khó tái cấu trúc."
  },
  {
    "id": 12,
    "topic": "Chapter 04: Context API Purpose",
    "question": "What is the primary benefit of React's Context API according to Slide 2?",
    "options": [
      "Providing a way to share data globally across the component tree without having to explicitly pass props through every intermediate level",
      "Speeding up internet bandwidth by 500%",
      "Translating JavaScript code into SQL statements automatically",
      "Disabling all browser security policies"
    ],
    "correct": 0,
    "hint": "Slide 2 (Ch 04): 'Context: an alternative to passing props'. Giải pháp thay thế việc truyền props qua từng tầng.",
    "explanations": {
      "0": "Chính xác! Slide 2 (Ch 04) & React Docs: Context API cho phép chia sẻ các dữ liệu mang tính toàn cục (như Theme sáng/tối, Thông tin User đăng nhập, Giỏ hàng) tới mọi component trong cây mà không cần truyền props thủ công qua từng cấp.",
      "1": "Sai. Context API chạy trong mã React, không can thiệp vào băng thông đường truyền mạng.",
      "2": "Sai. Context API không sinh câu lệnh SQL.",
      "3": "Sai. Context API không liên quan và không thể tắt chính sách bảo mật của trình duyệt."
    },
    "keyTakeaway": "React Context API cho phép truyền dữ liệu xuyên qua cây component một cách toàn cục mà không cần truyền thủ công qua từng nấc props trung gian."
  },
  {
    "id": 13,
    "topic": "Chapter 04: Creating a Context",
    "question": "Which method is used to initialize a new Context object in React?",
    "options": [
      "`React.createContext(defaultValue)`",
      "`React.makeGlobalState(defaultValue)`",
      "`React.initContextScope()`",
      "`new React.ContextStore()`"
    ],
    "correct": 0,
    "hint": "Phương thức tiêu chuẩn trả về một đối tượng Context có chứa thành phần `Provider`.",
    "explanations": {
      "0": "Chính xác! `React.createContext(defaultValue)` là API chính thức để khởi tạo một context mới. Giá trị `defaultValue` được dùng khi một component không tìm thấy Provider tương ứng phía trên nó.",
      "1": "Sai. `makeGlobalState` không phải là hàm của React.",
      "2": "Sai. `initContextScope` không tồn tại trong React.",
      "3": "Sai. Context không được tạo bằng từ khóa `new` trên React."
    },
    "keyTakeaway": "Dùng `React.createContext(defaultValue)` để khởi tạo đối tượng Context cung cấp giá trị mặc định cho toàn bộ cây component."
  },
  {
    "id": 14,
    "topic": "Chapter 04: Providing Context Values",
    "question": "How do you provide a value to all descendant components using a Context created via `const ThemeContext = createContext('light')`?",
    "options": [
      "`<ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>`",
      "`<ThemeContext.Share data={theme}> {children} </ThemeContext.Share>`",
      "`<ThemeContext.Broadcast info={theme}> {children} </ThemeContext.Broadcast>`",
      "`<Provider of={ThemeContext} send={theme}> {children} </Provider>`"
    ],
    "correct": 0,
    "hint": "Mỗi đối tượng Context đều có một component con đặc biệt tên là `.Provider` nhận prop `value`.",
    "explanations": {
      "0": "Chính xác! Để cung cấp giá trị cho các component con bên dưới, ta bọc chúng bằng component `<MyContext.Provider value={...}>`. Mọi component con bên trong đều có thể đọc được giá trị `value` này.",
      "1": "Sai. Không có component con `.Share` trên đối tượng Context.",
      "2": "Sai. Không có component con `.Broadcast` trên Context.",
      "3": "Sai. Cú pháp chuẩn luôn là `<ThemeContext.Provider value={...}>`."
    },
    "keyTakeaway": "Component `<Context.Provider value={...}>` được sử dụng để phát (provide) dữ liệu tới tất cả các component con cháu nằm bên trong cây phân cấp của nó."
  },
  {
    "id": 15,
    "topic": "Chapter 04: Consuming Context in Modern Components",
    "question": "Which React hook is used inside a functional component to consume and subscribe to values from a Context?",
    "options": [
      "`useContext(MyContext)`",
      "`useGlobal(MyContext)`",
      "`useProvide(MyContext)`",
      "`useSubscribe(MyContext)`"
    ],
    "correct": 0,
    "hint": "Hook nhận vào đối tượng Context đã được tạo bằng `createContext` và trả về giá trị `value` hiện tại.",
    "explanations": {
      "0": "Chính xác! `useContext(MyContext)` là hook chuẩn của React. Khi giá trị `value` trong Provider thay đổi, mọi component đang gọi `useContext` đó sẽ tự động re-render với giá trị mới nhất.",
      "1": "Sai. `useGlobal` không phải là hook tích hợp sẵn của React.",
      "2": "Sai. Không có hook nào tên là `useProvide`.",
      "3": "Sai. Không có hook `useSubscribe` trong React chuẩn."
    },
    "keyTakeaway": "Hook `useContext(MyContext)` cho phép functional component đọc và đăng ký theo dõi sự thay đổi dữ liệu từ Provider gần nhất một cách tức thì."
  },
  {
    "id": 16,
    "topic": "Chapter 04: Uncontrolled vs Controlled Form Inputs",
    "question": "What characterizes a 'Controlled Component' when handling input forms in React?",
    "options": [
      "The input element's value is driven by React component state and updated via an `onChange` event handler",
      "The input element stores its own internal value directly in the DOM and is read using a ref",
      "The input form is physically controlled by a hardware microcontroller",
      "The input value cannot be read until the entire application is restarted"
    ],
    "correct": 0,
    "hint": "Trong Controlled Component, state của React đóng vai trò là 'Single Source of Truth' (nguồn chân lý duy nhất) cho giá trị ô input.",
    "explanations": {
      "0": "Chính xác! Controlled Component là component form mà giá trị (`value`) của ô nhập liệu được kiểm soát hoàn toàn bởi state của React (`value={name}`), và bất kỳ thao tác gõ phím nào đều thông qua hàm xử lý (`onChange={(e) => setName(e.target.value)}`).",
      "1": "Sai. Trường hợp ô input tự quản lý giá trị trong DOM và được đọc qua ref là định nghĩa của Uncontrolled Component.",
      "2": "Sai. Đây là một câu đùa nghĩa đen về vi điều khiển phần cứng.",
      "3": "Sai. Giá trị có thể đọc ngay lập tức tại mỗi lần gõ phím."
    },
    "keyTakeaway": "Controlled Component lưu giữ dữ liệu form trực tiếp trong React state thông qua cặp thuộc tính `value` và sự kiện `onChange`, tạo ra nguồn dữ liệu duy nhất."
  },
  {
    "id": 17,
    "topic": "Chapter 04: Pure Functions in React",
    "question": "Why should React component render functions remain 'pure' (returning same output for same inputs without side effects)?",
    "options": [
      "Because impure components produce unpredictable UI bugs, break caching, and cause infinite render loops",
      "Because pure functions run 10,000 times slower than impure functions",
      "Because impure functions are banned by the European Union web directives",
      "Because React will delete the computer operating system if a side effect occurs in render"
    ],
    "correct": 0,
    "hint": "Tính thuần khiết (Purity) đảm bảo rằng việc render có thể được React xếp lịch (schedule), tính toán diffing và tối ưu hóa an toàn mà không sinh ra tác dụng phụ ngoài ý muốn.",
    "explanations": {
      "0": "Chính xác! Nếu component gây ra tác dụng phụ (đổi biến toàn cục, gọi API trực tiếp) trong quá trình render, nó sẽ dẫn đến các lỗi giật lag, kết quả UI không nhất quán và dễ gây ra vòng lặp vô tận (infinite render loop).",
      "1": "Sai. Hàm thuần khiết thường chạy nhanh hơn và có thể áp dụng kỹ thuật ghi nhớ (memoization) tối ưu hóa.",
      "2": "Sai. Đây là quy tắc kiến trúc kỹ thuật của thư viện React, không phải luật pháp.",
      "3": "Sai. Không có mối đe dọa nào đối với hệ điều hành."
    },
    "keyTakeaway": "Giữ cho quá trình render của Component luôn thuần khiết (Pure) giúp React chạy cơ chế Reconciliation an toàn, nhất quán và tránh các tác dụng phụ gây lỗi giao diện."
  },
  {
    "id": 18,
    "topic": "Chapter 04: Default Props in Components",
    "question": "In modern React functional components, what is the cleanest ES6 way to provide default values for props (Slide 22)?",
    "options": [
      "Using ES6 default parameter destructuring: `function Avatar({ size = 100, user })`",
      "Writing a global if/else statement inside the HTML file",
      "Calling `window.eval('setDefaultProps()')`",
      "Modifying the React prototype object inside node_modules"
    ],
    "correct": 0,
    "hint": "Slide 22: 'Defaults in functional components'. Tận dụng cú pháp gán giá trị mặc định khi destructuring đối số hàm trong ES6.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 04): Cách tiếp cận hiện đại và chuẩn mực nhất trong Functional Component là sử dụng cú pháp ES6 Destructuring Default Values: `function Avatar({ size = 100, user })`. Nếu prop `size` không được truyền hoặc là `undefined`, nó sẽ tự nhận giá trị 100.",
      "1": "Sai. Viết if/else ngoài HTML không quản lý được props của component React.",
      "2": "Sai. Tuyệt đối không dùng `eval()` vì tiềm ẩn lỗ hổng bảo mật và làm chậm hiệu năng.",
      "3": "Sai. Sửa prototype của React là anti-pattern nghiêm trọng bị cấm."
    },
    "keyTakeaway": "Sử dụng tính năng ES6 Default Parameter Destructuring (`{ size = 100 }`) là phương pháp sạch sẽ và chuẩn hóa nhất để đặt giá trị mặc định cho props."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_3_DATA;
}
