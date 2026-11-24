// QUIZ 4 DATA: React Hooks Mastery (Chapter 05)
const QUIZ_4_DATA = [
  {
    "id": 1,
    "topic": "Chapter 05: React Hooks Definition & Origin",
    "question": "In which version of React were Hooks officially introduced, enabling functional components to manage state and lifecycle?",
    "options": [
      "React 15.0",
      "React 16.8",
      "React 17.2",
      "React 18.0"
    ],
    "correct": 1,
    "hint": "Slide 3 (Ch 05): 'Hooks are special functions in React (introduced in version 16.8) that let you hook into React features...'.",
    "explanations": {
      "0": "Sai. React 15 vẫn hoàn toàn dựa vào Class Components và mixins cũ.",
      "1": "Chính xác! Slide 3 (Ch 05) xác nhận: 'Hooks are special functions in React (introduced in version 16.8) that let you \"hook into\" React features like state and lifecycle methods from functional components, without needing class components'.",
      "2": "Sai. React 17 tập trung vào việc tương thích nâng cấp ngầm, không phải phiên bản giới thiệu Hooks.",
      "3": "Sai. React 18 giới thiệu Concurrent Rendering và Suspense."
    },
    "keyTakeaway": "React Hooks được giới thiệu chính thức từ phiên bản React 16.8, mở ra kỷ nguyên phát triển ứng dụng dựa trên Functional Components."
  },
  {
    "id": 2,
    "topic": "Chapter 05: Rules of Hooks - Top Level",
    "question": "According to the official Rules of Hooks (Slide 5-6), where are you permitted to call Hooks?",
    "options": [
      "Only at the top level of React function components or custom Hooks; never inside loops, conditions, or nested functions",
      "Inside any if/else conditional branch or for-loop",
      "Inside regular plain JavaScript helper utility functions",
      "Inside the constructor of an ES6 class component"
    ],
    "correct": 0,
    "hint": "Slide 5: 'Only call Hooks at the top level. Don't call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks'.",
    "explanations": {
      "0": "Chính xác! Slide 5 & 6 (Ch 05): React dựa vào thứ tự gọi của các hook trong các lần render liên tiếp để liên kết state. Do đó, chỉ được gọi hook ở cấp cao nhất (Top level) của function component hoặc custom hook, không bao giờ được bọc trong if/else, vòng lặp hay hàm lồng nhau.",
      "1": "Sai. Gọi hook trong điều kiện if/else sẽ làm thay đổi thứ tự gọi hook giữa các lần render, gây ra lỗi hệ thống nghiêm trọng.",
      "2": "Sai. Không được gọi hook từ hàm JavaScript thông thường; chỉ được gọi từ React function component hoặc Custom Hook.",
      "3": "Sai. Không gọi hook bên trong Class component."
    },
    "keyTakeaway": "Quy tắc vàng: Chỉ gọi Hook ở cấp cao nhất (Top Level) của React Function Component hoặc Custom Hook; không bao giờ gọi trong vòng lặp hay câu lệnh điều kiện."
  },
  {
    "id": 3,
    "topic": "Chapter 05: Rules of Hooks - React Functions Only",
    "question": "Why does React require all custom Hooks to have names starting with the prefix `use` (e.g. `useFetch`, `useWindowSize`)?",
    "options": [
      "Because JavaScript engines throw syntax errors on functions without `use`",
      "To enable React and linter tools (ESLint) to identify them and automatically enforce the Rules of Hooks",
      "Because `use` is a reserved keyword for GPU memory allocation",
      "To automatically convert the function into a database query"
    ],
    "correct": 1,
    "hint": "Slide 3 & 7 (Ch 05): 'Functions starting with use are called Hooks. By following this rule, you ensure stateful logic is clearly visible and linters can check violations'.",
    "explanations": {
      "0": "Sai. Về mặt cú pháp JavaScript thuần, tên hàm bắt đầu bằng bất kỳ chữ cái nào cũng hợp lệ.",
      "1": "Chính xác! Slide 3 & 7 (Ch 05): Quy ước đặt tên bắt đầu bằng `use` giúp công cụ kiểm tra tĩnh (ESLint plugin eslint-plugin-react-hooks) nhận diện đây là một Hook, từ đó tự động kiểm tra xem bạn có vi phạm các quy tắc Rules of Hooks hay không.",
      "2": "Sai. `use` không phải từ khóa cấp phát bộ nhớ GPU.",
      "3": "Sai. Không liên quan đến cơ sở dữ liệu."
    },
    "keyTakeaway": "Tiền tố `use` là quy ước bắt buộc giúp React và linter nhận diện Custom Hook để tự động kiểm soát các quy tắc Rules of Hooks."
  },
  {
    "id": 4,
    "topic": "Chapter 05: useState Return Value & Setter",
    "question": "What does calling `useState(initialState)` return (Slide 9)?",
    "options": [
      "A single integer counter",
      "An array with exactly two elements: the current state value, and a state updater function",
      "A promise that resolves only after 5 seconds",
      "A DOM node reference directly attached to window.document"
    ],
    "correct": 1,
    "hint": "Slide 9: 'useState returns an array with exactly two values: [currentState, setState]'.",
    "explanations": {
      "0": "Sai. Không chỉ trả về một số nguyên, mà là mảng gồm giá trị và hàm cập nhật.",
      "1": "Chính xác! Slide 9 (Ch 05): 'useState returns an array with exactly two values: 1) The current state; 2) The set function that lets you update the state to a different value and trigger a re-render'.",
      "2": "Sai. `useState` là hàm đồng bộ, không trả về Promise.",
      "3": "Sai. Tham chiếu DOM là chức năng của `useRef`, không phải `useState`."
    },
    "keyTakeaway": "`useState` trả về một mảng chứa chính xác 2 phần tử: giá trị state hiện tại và hàm setter để cập nhật giá trị đó và kích hoạt re-render."
  },
  {
    "id": 5,
    "topic": "Chapter 05: Functional State Updates",
    "question": "When updating state based on the previous state value (such as incrementing a counter multiple times in an event), why is `setCount(prev => prev + 1)` preferred over `setCount(count + 1)`?",
    "options": [
      "Because functional updates reliably access the most up-to-date pending state value during React's automatic batching",
      "Because arrow functions run 50% faster than standard mathematical additions",
      "Because `setCount(count + 1)` converts numbers into strings",
      "Because the functional form automatically writes changes to a local SQLite database"
    ],
    "correct": 0,
    "hint": "React nhóm (batch) nhiều lần cập nhật state lại với nhau. Nếu gọi liên tiếp dựa vào biến `count` cũ, các lần gọi sau có thể đọc phải giá trị stale.",
    "explanations": {
      "0": "Chính xác! Khi sử dụng dạng callback `setCount(prev => prev + 1)`, React đưa hàm này vào hàng đợi cập nhật (update queue) và cung cấp giá trị state mới nhất đang chờ xử lý (`prev`), ngăn ngừa triệt để lỗi mất dữ liệu khi React gộp (batch) các lần render.",
      "1": "Sai. Tốc độ thực thi của arrow function không tạo ra sự khác biệt về mặt hiệu năng ở đây.",
      "2": "Sai. Phép toán `count + 1` không chuyển số thành chuỗi trừ khi `count` vốn là chuỗi.",
      "3": "Sai. Không liên quan đến cơ sở dữ liệu SQLite."
    },
    "keyTakeaway": "Luôn dùng dạng updater function (`prev => prev + 1`) khi trạng thái mới phụ thuộc vào trạng thái trước đó để đảm bảo tính toàn vẹn khi React batching."
  },
  {
    "id": 6,
    "topic": "Chapter 05: useEffect Execution Timing",
    "question": "When does the callback function passed to `useEffect` execute during a component's lifecycle?",
    "options": [
      "Synchronously before the HTML markup is ever created",
      "After the component has been rendered and the changes have been committed to the DOM",
      "Only when the browser window is closed by the user",
      "Inside a background thread on the web server"
    ],
    "correct": 1,
    "hint": "Slide 8: 'Effect Hooks: useEffect connects a component to an external system'. Hiệu ứng phụ (Side effect) chạy sau khi DOM đã được cập nhật để không làm nghẽn quá trình vẽ màn hình.",
    "explanations": {
      "0": "Sai. Hook chạy đồng bộ trước khi vẽ là `useLayoutEffect`, không phải `useEffect`.",
      "1": "Chính xác! Slide 8 (Ch 05) & React docs: `useEffect` được thiết kế để chạy sau khi quá trình render hoàn tất và trình duyệt đã vẽ xong giao diện (paint). Điều này giúp các tác vụ phụ (fetching, subscriptions) không làm chặn (block) trải nghiệm người dùng.",
      "2": "Sai. Khi đóng trình duyệt, phiên làm việc kết thúc, không phải lúc useEffect kích hoạt.",
      "3": "Sai. `useEffect` chạy hoàn toàn trên client-side JavaScript engine của trình duyệt."
    },
    "keyTakeaway": "`useEffect` chạy bất đồng bộ sau khi component đã render và cập nhật DOM, tránh làm nghẽn giao diện người dùng khi thực thi các tác vụ side-effect."
  },
  {
    "id": 7,
    "topic": "Chapter 05: useEffect Dependency Array Options",
    "question": "What happens if you pass an empty dependency array `[]` as the second argument to `useEffect(() => { ... }, [])`?",
    "options": [
      "The effect callback runs only once after the initial render (equivalent to `componentDidMount`)",
      "The effect callback runs after every single render and re-render",
      "The component enters an infinite re-render loop immediately",
      "The effect is disabled and will never run at all"
    ],
    "correct": 0,
    "hint": "Mảng rỗng `[]` báo cho React biết rằng effect này không phụ thuộc vào bất kỳ prop hay state nào thay đổi.",
    "explanations": {
      "0": "Chính xác! Mảng phụ thuộc rỗng `[]` báo hiệu rằng effect không phụ thuộc vào giá trị biến đổi nào, vì vậy React chỉ thực thi nó một lần duy nhất sau lần mount đầu tiên (tương đương `componentDidMount` trong Class Component).",
      "1": "Sai. Effect chạy sau mỗi lần render khi bạn HOÀN TOÀN KHÔNG truyền tham số thứ hai (không có dependency array).",
      "2": "Sai. Mảng rỗng không gây lặp vô hạn, trái lại nó ngăn chặn effect chạy lại.",
      "3": "Sai. Effect vẫn chạy một lần sau khi mount, không bị vô hiệu hóa."
    },
    "keyTakeaway": "Truyền mảng rỗng `[]` vào `useEffect` khiến hàm effect chỉ thực thi đúng một lần duy nhất sau lần render đầu tiên (on mount)."
  },
  {
    "id": 8,
    "topic": "Chapter 05: useEffect Cleanup Function",
    "question": "How do you specify a cleanup action in `useEffect` (e.g. clearing a `setInterval` timer or aborting an HTTP request)?",
    "options": [
      "By returning a cleanup function from inside the effect callback",
      "By calling `window.clearAllTimers()` at the top of the file",
      "By calling `useEffect.clean()`",
      "By wrapping the entire component in an HTML `<template>` tag"
    ],
    "correct": 0,
    "hint": "React sẽ tự động gọi hàm được `return` từ `useEffect` khi component unmount hoặc trước khi chạy lại effect trong lần kế tiếp.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 05): Nếu bạn trả về một function từ bên trong callback của `useEffect` (ví dụ `return () => clearInterval(timer);`), React sẽ gọi hàm dọn dẹp này ngay trước khi component bị unmount hoặc trước lần chạy effect kế tiếp để chống rò rỉ bộ nhớ (memory leaks).",
      "1": "Sai. Không có hàm chuẩn nào tên `window.clearAllTimers()` trong Web API.",
      "2": "Sai. Không có phương thức `useEffect.clean()`.",
      "3": "Sai. Thẻ `<template>` dùng để chứa HTML ẩn, không quản lý vòng đời của effect."
    },
    "keyTakeaway": "Để dọn dẹp tài nguyên (hủy timer, gỡ listener, hủy request), hãy return về một hàm cleanup từ bên trong `useEffect`."
  },
  {
    "id": 9,
    "topic": "Chapter 05: useReducer Hook Usage",
    "question": "When is `useReducer` preferable over `useState` in a React component?",
    "options": [
      "When managing complex state logic with multiple sub-values, or when the next state depends on complex actions and transitions",
      "Only when building static websites without any user interaction",
      "When you need to reduce the size of the JavaScript file by deleting lines of code",
      "When you want to prevent all components from re-rendering forever"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 05): 'useReducer provides intuitive ways to handle state'. Tương tự như tư tưởng Redux: tách biệt việc dispatch action và hàm reducer xử lý chuyển đổi trạng thái.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 05): `useReducer` là giải pháp lý tưởng khi component có logic state phức tạp, nhiều nhánh điều kiện hoặc trạng thái tiếp theo phụ thuộc chặt chẽ vào nhiều trạng thái trước đó. Nó mang lại tính tất định (predictability) thông qua mô hình `(state, action) => newState`.",
      "1": "Sai. Trang tĩnh không có tương tác người dùng thì không cần quản lý state phức tạp.",
      "2": "Sai. `useReducer` là hook quản lý state, không phải công cụ nén code minifier.",
      "3": "Sai. `useReducer` vẫn kích hoạt re-render bình thường khi dispatch một action làm thay đổi state."
    },
    "keyTakeaway": "Nên sử dụng `useReducer` thay cho `useState` khi component có logic chuyển đổi trạng thái phức tạp hoặc có nhiều sub-values liên quan mật thiết với nhau."
  },
  {
    "id": 10,
    "topic": "Chapter 05: useRef for DOM Manipulation",
    "question": "What is the primary use case of the `useRef` hook when interacting with the browser DOM?",
    "options": [
      "To hold a direct reference to a real DOM element (such as focusing an input `<input ref={inputRef} />`)",
      "To re-render the page 60 times per second for smooth animations",
      "To convert HTML strings into PDF documents",
      "To encrypt passwords before submitting forms"
    ],
    "correct": 0,
    "hint": "Thuộc tính `.current` của ref trỏ trực tiếp đến node DOM thật sau khi React mount.",
    "explanations": {
      "0": "Chính xác! `useRef` trả về một đối tượng có thuộc tính `.current`. Khi gắn `ref={inputRef}` vào thẻ JSX, `inputRef.current` sẽ trỏ tới DOM node thực tế, cho phép thực hiện các thao tác mệnh lệnh như `inputRef.current.focus()` hoặc đo kích thước phần tử.",
      "1": "Sai. Đột biến `.current` của ref KHÔNG làm component re-render, do đó không dùng để kích hoạt render 60fps.",
      "2": "Sai. `useRef` không phải thư viện xuất file PDF.",
      "3": "Sai. `useRef` không có chức năng mã hóa mật khẩu."
    },
    "keyTakeaway": "`useRef` cung cấp cách truy cập trực tiếp vào phần tử Real DOM của trình duyệt (thông qua `.current`) để thực hiện các thao tác mệnh lệnh như focus, cuộn trang."
  },
  {
    "id": 11,
    "topic": "Chapter 05: useRef for Mutable Values",
    "question": "What is the key difference between modifying a state variable via `useState` and modifying `ref.current` via `useRef`?",
    "options": [
      "Updating state via `setState` triggers a component re-render, whereas modifying `ref.current` does NOT trigger a re-render",
      "Modifying `ref.current` deletes the component from memory",
      "Updating `useState` is synchronous, while `useRef` is asynchronous",
      "There is no difference; they both trigger re-renders identically"
    ],
    "correct": 0,
    "hint": "`useRef` hoạt động như một 'hộp bí mật' lưu trữ dữ liệu xuyên suốt các lần render mà không làm giao diện phải vẽ lại khi thay đổi nội dung bên trong.",
    "explanations": {
      "0": "Chính xác! Điểm khác biệt mấu chốt: Cập nhật state (`useState`) sẽ xếp lịch kích hoạt re-render để cập nhật UI; trong khi thay đổi `ref.current` (`useRef`) giữ lại giá trị xuyên suốt vòng đời component nhưng hoàn toàn KHÔNG kích hoạt re-render.",
      "1": "Sai. Thay đổi `.current` chỉ là gán giá trị biến trong JS, không xóa component khỏi bộ nhớ.",
      "2": "Sai. Cập nhật `ref.current` là gán biến trực tiếp (đồng bộ), còn `setState` được React xếp lịch theo lô.",
      "3": "Sai. Đây là hai cơ chế hoàn toàn khác biệt nhau về bản chất re-rendering."
    },
    "keyTakeaway": "Thay đổi giá trị trong `useRef` (`ref.current = value`) KHÔNG kích hoạt component re-render, lý tưởng để lưu giữ các giá trị tham chiếu (timer ID, cờ trạng thái)."
  },
  {
    "id": 12,
    "topic": "Chapter 05: useMemo Purpose",
    "question": "What is the primary purpose of the `useMemo` hook in React (Slide 4)?",
    "options": [
      "To cache (memoize) the computed result of an expensive calculation so it only recalculates when dependencies change",
      "To save user data directly to the browser's hard drive",
      "To record the user's voice through the microphone",
      "To automatically translate text into foreign languages"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 05): 'Improved Performance: Hooks encourage functional patterns... enabling optimizations like useMemo and useCallback'.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 05): `const cachedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])`. `useMemo` lưu lại kết quả tính toán tốn kém và chỉ thực hiện tính toán lại khi một trong các giá trị trong dependency list (`[a, b]`) thay đổi.",
      "1": "Sai. `useMemo` lưu kết quả vào RAM của tiến trình JavaScript trong suốt phiên render, không lưu ra ổ cứng.",
      "2": "Sai. Không liên quan đến thu âm microphone.",
      "3": "Sai. `useMemo` là hook tối ưu hiệu năng tính toán, không phải API dịch thuật."
    },
    "keyTakeaway": "`useMemo` ghi nhớ (cache) kết quả của một phép tính toán tốn kém tài nguyên và chỉ tính toán lại khi các dependencies đầu vào bị thay đổi."
  },
  {
    "id": 13,
    "topic": "Chapter 05: useCallback Purpose",
    "question": "What does the `useCallback` hook memoize between component re-renders?",
    "options": [
      "The function definition instance itself: `useCallback(fn, deps)`",
      "The returned JSX markup",
      "The entire database schema",
      "The CSS stylesheet files"
    ],
    "correct": 0,
    "hint": "Trong JavaScript, mỗi lần render hàm lại được tạo mới thành một tham chiếu địa chỉ ô nhớ khác nhau. `useCallback` giữ nguyên tham chiếu hàm đó.",
    "explanations": {
      "0": "Chính xác! Slide 4 (Ch 05): `useCallback` ghi nhớ chính bản thân định nghĩa hàm giữa các lần re-render. Việc giữ nguyên tham chiếu (reference equality) giúp các component con được bọc bằng `React.memo` không bị re-render thừa thãi.",
      "1": "Sai. Ghi nhớ kết quả JSX hoặc giá trị tính toán là nhiệm vụ của `useMemo`.",
      "2": "Sai. `useCallback` không liên quan đến database schema.",
      "3": "Sai. Không liên quan đến file CSS."
    },
    "keyTakeaway": "`useCallback` duy trì tham chiếu của hàm (function instance) không bị khởi tạo lại ở mỗi lượt render, tối ưu hiệu năng khi truyền callback xuống các component con."
  },
  {
    "id": 14,
    "topic": "Chapter 05: Custom Hooks Definition",
    "question": "What is a Custom Hook in React (Slide 4)?",
    "options": [
      "A JavaScript function starting with `use` that can call other Hooks, allowing stateful logic to be extracted and shared across components",
      "A hardware dongle plugged into the USB port",
      "A method to hack into remote servers without credentials",
      "An automated bot that generates random Git commits"
    ],
    "correct": 0,
    "hint": "Slide 4 (Ch 05): 'Reusability: Custom Hooks allow you to extract and reuse logic across components, promoting modularity without higher-order components or render props'.",
    "explanations": {
      "0": "Chính xác! Slide 3 & 4 (Ch 05): Custom Hook là hàm JavaScript có tiền tố `use` có thể gọi các hook tích hợp sẵn khác (`useState`, `useEffect`). Nó cho phép đóng gói và tái sử dụng các logic nghiệp vụ phức tạp (như fetch dữ liệu, lắng nghe sự kiện chuột) giữa nhiều component.",
      "1": "Sai. Đây là một câu đùa nghĩa đen về thiết bị phần cứng.",
      "2": "Sai. Hook là kỹ thuật lập trình frontend, không liên quan đến hacking.",
      "3": "Sai. Không liên quan đến bot tạo commit Git."
    },
    "keyTakeaway": "Custom Hook là hàm JavaScript bắt đầu bằng `use`, cho phép tách biệt và tái sử dụng logic chứa state giữa các component mà không làm trùng lặp mã nguồn."
  },
  {
    "id": 15,
    "topic": "Chapter 05: State Isolation in Custom Hooks",
    "question": "When two different components call the exact same Custom Hook (e.g. `const data1 = useFetch('/api/a')` in Component A and `const data2 = useFetch('/api/b')` in Component B), do they share the same state instance?",
    "options": [
      "No, each call to a Custom Hook gets completely isolated and independent state",
      "Yes, all components calling the same Hook share a single global singleton state",
      "Yes, modifying state in Component A immediately overwrites state in Component B",
      "Only if they are rendered inside the exact same HTML paragraph tag"
    ],
    "correct": 0,
    "hint": "Custom Hook chia sẻ 'logic chứa state' (stateful logic), chứ KHÔNG chia sẻ chính 'bản thể state' (state instance) đó.",
    "explanations": {
      "0": "Chính xác! Slide 4 & React docs: Custom Hooks là cơ chế chia sẻ logic (stateful logic), KHÔNG phải chia sẻ bản thân state. Mỗi lần gọi Custom Hook bên trong một component sẽ tạo ra các biến state hoàn toàn độc lập và cô lập riêng cho component đó.",
      "1": "Sai. Custom Hook không tạo ra singleton state toàn cục (nếu muốn chia sẻ dữ liệu chung thì phải dùng Context API hoặc Redux).",
      "2": "Sai. State của hai component độc lập hoàn toàn, không ghi đè lẫn nhau.",
      "3": "Sai. Thẻ HTML bọc ngoài không quyết định phạm vi chia sẻ state của hook."
    },
    "keyTakeaway": "Mỗi lần component gọi Custom Hook, nó nhận một không gian state hoàn toàn độc lập. Custom Hook chia sẻ logic chứ không chia sẻ chung dữ liệu state."
  },
  {
    "id": 16,
    "topic": "Chapter 05: Stale Closures in Hooks",
    "question": "What causes a 'stale closure' bug inside a `useEffect` callback?",
    "options": [
      "The effect callback captures an outdated value of state or props because that variable was omitted from the dependency array",
      "The computer running the code has an expired system clock",
      "The browser cache has exceeded 10 gigabytes of data",
      "The developer forgot to install Node.js"
    ],
    "correct": 0,
    "hint": "Hiện tượng bao đóng (closure) của JavaScript giữ lại tham chiếu tới giá trị của biến ở thời điểm hàm được tạo ra. Nếu dependency array không cập nhật, hàm sẽ mãi dùng giá trị cũ.",
    "explanations": {
      "0": "Chính xác! Lỗi 'stale closure' xảy ra khi một hàm bên trong effect (hoặc callback) nắm giữ (đóng bao) giá trị cũ của state/props từ lần render trước do biến đó bị bỏ quên không khai báo trong mảng phụ thuộc `dependencies`.",
      "1": "Sai. Đồng hồ hệ thống không gây ra lỗi closure của ngôn ngữ lập trình.",
      "2": "Sai. Bộ nhớ cache trình duyệt không liên quan đến cơ chế lexical scope closure của JS.",
      "3": "Sai. Nếu chưa cài Node.js thì dự án đã không thể build và chạy được."
    },
    "keyTakeaway": "Lỗi Stale Closure phát sinh khi effect truy cập các biến state/props cũ do không khai báo đầy đủ các biến phản ứng vào mảng phụ thuộc `dependencies`."
  },
  {
    "id": 17,
    "topic": "Chapter 05: Infinite Loop Prevention in useEffect",
    "question": "Why does the following code trigger an infinite re-render loop?\n```javascript\nuseEffect(() => {\n  setCount(count + 1);\n});\n```",
    "options": [
      "Because `useEffect` has no dependency array, so it runs after every render; updating state inside triggers another render, which runs the effect again endlessly",
      "Because JavaScript does not allow numbers to exceed 100",
      "Because `setCount` is a synchronous block that locks the CPU thread",
      "Because React requires all counters to count downwards only"
    ],
    "correct": 0,
    "hint": "Khi không có dependency array, effect sẽ chạy sau MỌI lần render. Mà việc gọi `setCount` lại kích hoạt một lần render mới -> Vòng lặp vĩnh cửu!",
    "explanations": {
      "0": "Chính xác! Khi không truyền dependency array vào `useEffect`, nó sẽ tự động chạy sau mỗi lần component render. Bên trong effect lại gọi `setCount`, việc cập nhật state này lại thúc đẩy một chu kỳ render mới, chu kỳ mới lại chạy effect, gây ra vòng lặp vô tận (infinite render loop).",
      "1": "Sai. JavaScript xử lý số rất lớn (`Number.MAX_SAFE_INTEGER`), không bị giới hạn ở 100.",
      "2": "Sai. `setCount` xếp lịch bất đồng bộ, nhưng vòng lặp render liên tục sẽ khiến trình duyệt quá tải.",
      "3": "Sai. React cho phép đếm tiến, đếm lùi tùy ý lập trình viên."
    },
    "keyTakeaway": "Không bao giờ cập nhật state vô điều kiện bên trong `useEffect` khi không có dependency array, vì nó sẽ dẫn tới vòng lặp re-render vô tận làm sập ứng dụng."
  },
  {
    "id": 18,
    "topic": "Chapter 05: useLayoutEffect vs useEffect",
    "question": "What is the primary difference between `useLayoutEffect` and `useEffect`?",
    "options": [
      "`useLayoutEffect` fires synchronously immediately after all DOM mutations but BEFORE the browser repaints the screen, while `useEffect` fires after the paint",
      "`useLayoutEffect` only works on Android phones, while `useEffect` is for iOS",
      "`useLayoutEffect` deletes all CSS files from the project",
      "There is no difference; they are exact aliases"
    ],
    "correct": 0,
    "hint": "Dùng `useLayoutEffect` khi cần đo đạc kích thước phần tử DOM (layout measurement) và cập nhật lại vị trí ngay lập tức nhằm tránh hiện tượng màn hình bị giật nhấp nháy (visual flicker).",
    "explanations": {
      "0": "Chính xác! `useLayoutEffect` chạy đồng bộ ngay sau khi React thay đổi DOM nhưng TRƯỚC KHI trình duyệt kịp vẽ lại pixel lên màn hình (before paint). Nó thích hợp cho việc đo đạc vị trí layout. Ngược lại, `useEffect` chạy sau khi trình duyệt đã hoàn tất việc vẽ (after paint).",
      "1": "Sai. Cả hai đều là hook tiêu chuẩn của React chạy trên mọi nền tảng trình duyệt.",
      "2": "Sai. Hook này không xóa file CSS của dự án.",
      "3": "Sai. Thời điểm kích hoạt (timing) của hai hook này khác nhau hoàn toàn."
    },
    "keyTakeaway": "`useLayoutEffect` chạy đồng bộ trước khi trình duyệt vẽ (paint) giao diện lên màn hình, giúp ngăn chặn hiện tượng nhấp nháy giao diện khi cần đo đạc DOM."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_4_DATA;
}
