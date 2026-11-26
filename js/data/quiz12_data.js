// QUIZ 12 DATA: Git Version Control Mastery (60 Questions)
const QUIZ_12_DATA = [
  {
    "id": 1,
    "topic": "Chapter 01: Git History & Origin",
    "question": "Who created Git in 2005, and what was its original purpose (Chapter 01, Slide 19)?",
    "options": [
      "Linus Torvalds, to manage the distributed development of the Linux kernel",
      "James Gosling, to compile Java bytecode",
      "Meta (Facebook), to build ReactJS Virtual DOM",
      "Microsoft, to replace Windows Explorer"
    ],
    "correct": 0,
    "hint": "Slide 19 (Ch 01): 'Developed by Linus Torvalds for managing Linux kernel development'.",
    "explanations": {
      "0": "Chính xác! Slide 19 (Ch 01): Git được Linus Torvalds tạo ra năm 2005 để thay thế công cụ BitKeeper trong việc quản lý mã nguồn nhân hệ điều hành Linux với tốc độ cao và kiến trúc phân tán.",
      "1": "Sai. James Gosling là cha đẻ ngôn ngữ lập trình Java.",
      "2": "Sai. Meta tạo ra ReactJS, không phải Git.",
      "3": "Sai. Microsoft mua lại GitHub năm 2018 nhưng không phải tác giả sáng tạo ra Git."
    },
    "keyTakeaway": "Git do Linus Torvalds sáng lập năm 2005 nhằm quản lý mã nguồn phân tán cho Linux kernel."
  },
  {
    "id": 2,
    "topic": "Chapter 01: Distributed vs Centralized VCS",
    "question": "How does a Distributed Version Control System (DVCS) like Git fundamentally differ from Centralized VCS tools like SVN or CVS (Slide 19)?",
    "options": [
      "Every developer's local machine holds a complete clone of the full repository and commit history, enabling offline commits and local branching",
      "Centralized VCS works offline while Git requires a constant high-speed internet connection for every commit",
      "Git stores only the very latest version of each file and deletes all past history",
      "SVN uses distributed peer-to-peer networks while Git uses a single central locking server"
    ],
    "correct": 0,
    "hint": "Trong SVN/CVS, lịch sử commit nằm trên máy chủ trung tâm; trong Git (DVCS), mỗi máy lập trình viên là một bản sao hoàn chỉnh (full mirror) của toàn bộ lịch sử dự án.",
    "explanations": {
      "0": "Chính xác! Trong Git (DVCS), mỗi `git clone` tải về toàn bộ lịch sử commit, nhánh và dữ liệu về máy cục bộ. Nhờ vậy bạn có thể commit, tạo nhánh, xem log ngay cả khi không có internet, và không lo mất dữ liệu nếu máy chủ trung tâm sập.",
      "1": "Sai. Ngược lại hoàn toàn: SVN cần kết nối tới server trung tâm để commit, còn Git commit hoàn toàn cục bộ không cần mạng.",
      "2": "Sai. Git lưu trữ toàn bộ lịch sử từ commit đầu tiên đến hiện tại.",
      "3": "Sai. SVN/CVS là mô hình tập trung (Centralized), Git là mô hình phân tán (Distributed)."
    },
    "keyTakeaway": "Git là hệ thống quản lý phiên bản phân tán (DVCS): mỗi bản sao cục bộ chứa đầy đủ toàn bộ lịch sử kho chứa, cho phép làm việc ngoại tuyến hoàn hảo."
  },
  {
    "id": 3,
    "topic": "Git Architecture: The Three Main States / Trees",
    "question": "What are the three core local areas (states) that a file moves through in Git's internal workflow?",
    "options": [
      "Working Directory (Modified) -> Staging Area / Index (Staged) -> Local Repository / `.git` (Committed)",
      "Desktop -> Recycle Bin -> Cloud Drive",
      "RAM -> CPU Cache -> Hard Disk",
      "Compiler -> Linker -> Executable"
    ],
    "correct": 0,
    "hint": "Bạn chỉnh sửa file ở Working Directory, chạy `git add` để đưa vào vùng đệm, rồi chạy `git commit` để lưu vĩnh viễn vào kho chứa.",
    "explanations": {
      "0": "Chính xác! Kiến trúc 3 khu vực của Git gồm: 1) Working Directory (nơi bạn sửa code trực tiếp), 2) Staging Area / Index (vùng chuẩn bị tập hợp các thay đổi bằng `git add`), 3) Local Repository `.git` (lưu ảnh chụp vĩnh viễn qua `git commit`).",
      "1": "Sai. Đây là thành phần giao diện hệ điều hành Windows.",
      "2": "Sai. Đây là tầng phần cứng máy tính.",
      "3": "Sai. Đây là các bước biên dịch chương trình C/C++."
    },
    "keyTakeaway": "Luồng làm việc cốt lõi của Git đi qua 3 vùng: Working Directory -> (`git add`) -> Staging Area -> (`git commit`) -> `.git` Repository."
  },
  {
    "id": 4,
    "topic": "Git Internals: Snapshots vs File Diffs",
    "question": "How does Git conceptually store data in each commit compared to older VCS tools like Subversion?",
    "options": [
      "Git thinks of data as a stream of snapshots of the entire project filesystem at each commit (reusing unchanged file references via content-addressable blobs)",
      "Git stores only line-by-line delta diffs from the initial empty file and recalculates everything sequentially",
      "Git converts all source files into Microsoft Word documents",
      "Git stores files only in temporary RAM and wipes them on reboot"
    ],
    "correct": 0,
    "hint": "Mỗi commit trong Git giống như một bức ảnh chụp nhanh (snapshot) toàn dự án tại thời điểm đó; file nào không đổi chỉ giữ lại con trỏ trỏ về bản cũ để tiết kiệm dung lượng.",
    "explanations": {
      "0": "Chính xác! Thay vì lưu chuỗi thay đổi delta từ đầu (như SVN/CVS), Git coi mỗi commit như một **snapshot** toàn bộ cây thư mục. Nếu một file không thay đổi, Git không sao chép lại mà chỉ lưu một liên kết trỏ tới phiên bản file đã có sẵn, giúp chuyển nhánh (`checkout`) nhanh tức thì.",
      "1": "Sai. Mô hình lưu delta-based từ file gốc là cách hoạt động của CVS/SVN.",
      "2": "Sai. Không chuyển đổi sang file Word.",
      "3": "Sai. Dữ liệu commit lưu bền vững trong thư mục ẩn `.git` trên ổ cứng."
    },
    "keyTakeaway": "Git lưu trữ lịch sử dưới dạng chuỗi các bức ảnh chụp nhanh (Snapshots) theo thời gian, tái sử dụng tham chiếu cho các tệp không thay đổi."
  },
  {
    "id": 5,
    "topic": "Git Internals: Commit Identifiers & Integrity",
    "question": "How does Git uniquely identify commits and guarantee that repository history cannot be silently corrupted?",
    "options": [
      "By computing a 40-character SHA-1 (or SHA-256) cryptographic hash checksum over commit content, parent hash, and tree metadata",
      "By assigning sequential integers `1, 2, 3, ...` from a central MySQL database",
      "By naming every commit after the current day of the week",
      "By storing passwords in plain text inside each source file"
    ],
    "correct": 0,
    "hint": "Mỗi commit có một mã định danh thập lục phân dài 40 ký tự (ví dụ `a3f9c2d...`), thay đổi 1 bit nội dung là ra mã hash hoàn toàn khác.",
    "explanations": {
      "0": "Chính xác! Mọi đối tượng trong Git (blob, tree, commit, tag) đều được băm bằng thuật toán SHA-1 (chuỗi 40 ký tự hex, hoặc SHA-256 ở bản mới). Chỉ cần 1 ký tự trong lịch sử bị sửa lén, mã hash thay đổi kéo theo toàn bộ chuỗi commit sau đó bị phá vỡ — đảm bảo tính toàn vẹn tuyệt đối.",
      "1": "Sai. Số thứ tự tăng dần (`1, 2, 3`) chỉ hoạt động ở hệ tập trung như SVN; trong hệ phân tán sẽ bị đụng độ số ngay lập tức.",
      "2": "Sai. Tên ngày không thể định danh duy nhất cho hàng nghìn commit.",
      "3": "Sai. Không lưu mật khẩu trong file mã nguồn."
    },
    "keyTakeaway": "Git dùng mã băm SHA-1 (40 ký tự hex) làm định danh duy nhất cho mỗi đối tượng và bảo vệ tính toàn vẹn dữ liệu."
  },
  {
    "id": 6,
    "topic": "Git Internals: What is `HEAD`?",
    "question": "In Git, what does the `HEAD` pointer represent by default?",
    "options": [
      "A symbolic reference pointing to the currently checked-out branch (which in turn points to the latest commit you are working on)",
      "The very first initial commit ever created in the repository",
      "The remote repository URL on GitHub",
      "The HTML `<head>` tag inside `index.html`"
    ],
    "correct": 0,
    "hint": "`HEAD` giống như con trỏ 'Bạn đang đứng ở đây' trong đồ thị lịch sử Git (thường trỏ tới `refs/heads/main`).",
    "explanations": {
      "0": "Chính xác! `HEAD` là con trỏ đặc biệt xác định vị trí hiện tại trong cây lịch sử. Thông thường `HEAD` trỏ tới tên nhánh đang mở (như `main`), và nhánh đó trỏ tới commit mới nhất. Khi bạn commit mới, nhánh và `HEAD` cùng tiến lên một bước.",
      "1": "Sai. Commit đầu tiên gọi là Root Commit.",
      "2": "Sai. Remote URL thường có tên alias là `origin`.",
      "3": "Sai. Không liên quan đến thẻ HTML `<head>`."
    },
    "keyTakeaway": "`HEAD` là con trỏ đánh dấu vị trí nhánh/commit hiện tại mà Working Directory của bạn đang trỏ tới."
  },
  {
    "id": 7,
    "topic": "Chapter 01: Checking Git Installation & Version",
    "question": "Which command verifies that Git is installed and prints its version number in Terminal/CMD (Chapter 01, Slide 21)?",
    "options": [
      "`git --version`",
      "`git -check`",
      "`git info --all`",
      "`npm get git`"
    ],
    "correct": 0,
    "hint": "Slide 21 (Ch 01): 'Check if Git has been successfully installed by entering: git --version'.",
    "explanations": {
      "0": "Chính xác! Slide 21 (Ch 01): Lệnh `git --version` (hoặc `git -v` trên bản mới) in ra phiên bản Git đang cài đặt trên hệ điều hành.",
      "1": "Sai. Không có cờ `-check`.",
      "2": "Sai. Không có lệnh `git info --all`.",
      "3": "Sai. Git là công cụ độc lập của hệ thống, không kiểm tra qua `npm`."
    },
    "keyTakeaway": "Chạy `git --version` để kiểm tra cài đặt và xem phiên bản Git hiện tại."
  },
  {
    "id": 8,
    "topic": "Chapter 01: Configuring Git User Identity",
    "question": "Before making your first commit, which commands configure your global author name and email across all local Git projects (Chapter 01, Slide 22)?",
    "options": [
      "`git config --global user.name \"Your Name\"` and `git config --global user.email \"you@example.com\"`",
      "`git login --user \"Your Name\" --email \"you@example.com\"`",
      "`git set author \"Your Name\"`",
      "`git init --user=\"Your Name\"`"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 01): 'Configure Git: git config --global user.name ... and git config --global user.email ...'.",
    "explanations": {
      "0": "Chính xác! Slide 22 (Ch 01): Cờ `--global` lưu thông tin danh tính tác giả (`user.name`, `user.email`) vào file cấu hình người dùng (`~/.gitconfig`) để áp dụng mặc định cho mọi repo trên máy.",
      "1": "Sai. Git không có lệnh `git login` (xác thực GitHub dùng SSH key, Personal Access Token hoặc Git Credential Manager).",
      "2": "Sai. Không có lệnh `git set author`.",
      "3": "Sai. `git init` không nhận cờ `--user`."
    },
    "keyTakeaway": "Dùng `git config --global user.name` và `user.email` để thiết lập danh tính tác giả gắn vào mỗi commit."
  },
  {
    "id": 9,
    "topic": "Git Configuration Scopes (`--local`, `--global`, `--system`)",
    "question": "If you need to use a work email for one specific repository while keeping your personal email globally for all other repositories, which scope flag should you use inside that work repo?",
    "options": [
      "`git config --local user.email \"work@company.com\"` (or omit the flag inside the repo)",
      "`git config --system user.email \"work@company.com\"`",
      "`git config --global user.email \"work@company.com\"`",
      "`git config --override-all user.email \"work@company.com\"`"
    ],
    "correct": 0,
    "hint": "Thứ tự ưu tiên từ cao xuống thấp của Git config: `--local` (trong `.git/config` của repo đó) > `--global` (user hiện tại) > `--system` (toàn máy).",
    "explanations": {
      "0": "Chính xác! Cấu hình `--local` (lưu tại `.git/config` bên trong thư mục dự án hiện tại) có độ ưu tiên cao nhất và ghi đè lên `--global` chỉ riêng cho repository đó.",
      "1": "Sai. `--system` áp dụng cho mọi tài khoản người dùng trên toàn bộ máy tính và có độ ưu tiên thấp nhất.",
      "2": "Sai. `--global` sẽ thay đổi email cho tất cả các dự án khác của bạn.",
      "3": "Sai. Không có cờ `--override-all`."
    },
    "keyTakeaway": "Độ ưu tiên cấu hình Git: `--local` (riêng repo) > `--global` (riêng user) > `--system` (toàn hệ thống)."
  },
  {
    "id": 10,
    "topic": "Git Internals: The `.git` Hidden Directory",
    "question": "Where does Git store all of its local repository data, commit history, branches, and configuration inside a project folder?",
    "options": [
      "Inside the hidden `.git/` directory at the project root",
      "Inside `node_modules/.git-cache`",
      "Inside `C:\\Windows\\System32\\git`",
      "Inside `package.json`"
    ],
    "correct": 0,
    "hint": "Khi chạy `git init`, Git tạo ra một thư mục ẩn duy nhất ngay tại thư mục gốc dự án.",
    "explanations": {
      "0": "Chính xác! Toàn bộ cơ sở dữ liệu đối tượng (`objects/`), nhánh/tag (`refs/`), vùng đệm (`index`), con trỏ `HEAD` và file `config` đều nằm gọn trong thư mục ẩn `.git/`. Xóa thư mục `.git/` sẽ biến dự án trở lại thành thư mục bình thường mất hết lịch sử Git.",
      "1": "Sai. `node_modules` chỉ chứa các thư viện JavaScript của npm.",
      "2": "Sai. Git không lưu lịch sử từng dự án vào thư mục hệ điều hành Windows.",
      "3": "Sai. `package.json` là manifest của Node/npm."
    },
    "keyTakeaway": "Thư mục ẩn `.git/` ở gốc dự án chứa toàn bộ lịch sử, đối tượng, nhánh và cấu hình của kho lưu trữ Git cục bộ."
  },
  {
    "id": 11,
    "topic": "Chapter 01: Initializing vs Cloning a Repository",
    "question": "When should you run `git init` versus `git clone <url>`?",
    "options": [
      "`git init` creates a brand new empty local Git repository in an existing folder; `git clone` downloads an existing remote repository along with its full history and sets up `origin`",
      "`git clone` deletes remote files while `git init` uploads them immediately",
      "`git init` is only for Java projects while `git clone` is only for React projects",
      "There is no difference; they are exact aliases"
    ],
    "correct": 0,
    "hint": "Slide 22 (Ch 01): Khởi tạo mới từ thư mục máy cá nhân dùng `git init`; tải dự án có sẵn trên GitHub về dùng `git clone`.",
    "explanations": {
      "0": "Chính xác! `git init` khởi tạo thư mục `.git` mới tinh từ đầu tại thư mục hiện tại (chưa có remote nào). `git clone <url>` sao chép toàn bộ repo từ xa về một thư mục mới, tự động tải toàn bộ commit/nhánh và tự gắn sẵn remote `origin`.",
      "1": "Sai. `git clone` chỉ tải về, không xóa file trên server.",
      "2": "Sai. Git hoàn toàn độc lập với ngôn ngữ lập trình.",
      "3": "Sai. Hai lệnh phục vụ hai tình huống khởi đầu khác nhau."
    },
    "keyTakeaway": "Dùng `git init` để biến thư mục mới thành repo Git; dùng `git clone <url>` để tải một repo có sẵn từ server về máy."
  },
  {
    "id": 12,
    "topic": "Chapter 01: Checking File States with `git status`",
    "question": "What information does running `git status` provide (Chapter 01, Slide 23)?",
    "options": [
      "The current branch, whether files are Untracked, Modified (unstaged), or Staged ready to be committed, and sync status with upstream",
      "The total CPU temperature and internet bandwidth speed",
      "All user passwords stored on GitHub",
      "The execution output of all unit tests"
    ],
    "correct": 0,
    "hint": "Slide 23 (Ch 01): Lệnh kiểm tra tình trạng hiện tại của Working Directory và Staging Area.",
    "explanations": {
      "0": "Chính xác! `git status` (hoặc bản rút gọn `git status -s`) hiển thị tên nhánh hiện tại, danh sách file mới chưa theo dõi (Untracked), file đã sửa nhưng chưa `git add` (Changes not staged), và file đã nằm trong Staging sẵn sàng commit (Changes to be committed).",
      "1": "Sai. Không đo phần cứng hay tốc độ mạng.",
      "2": "Sai. Không hiển thị mật khẩu.",
      "3": "Sai. Git không chạy unit test trừ khi cấu hình hooks riêng."
    },
    "keyTakeaway": "`git status` cho biết trạng thái hiện tại của nhánh, các file Untracked, Modified và Staged."
  },
  {
    "id": 13,
    "topic": "Chapter 01: Staging Files (`git add .` vs `git add -A` vs `git add -p`)",
    "question": "What does `git add -p` (patch mode) allow a developer to do before committing?",
    "options": [
      "Interactively review each individual change chunk (hunk) inside modified files and choose to stage only specific parts while leaving others unstaged",
      "Automatically push code to production servers",
      "Print all source code to a physical paper printer",
      "Permanently delete all untracked files"
    ],
    "correct": 0,
    "hint": "Rất hữu ích khi bạn lỡ sửa 2 tính năng khác nhau trong cùng một file và muốn tách thành 2 commit sạch sẽ!",
    "explanations": {
      "0": "Chính xác! `git add -p` (patch) chia nhỏ các đoạn thay đổi (hunks) trong file và hỏi bạn từng đoạn (`y` = stage, `n` = bỏ qua, `s` = chia nhỏ hơn nữa). Đây là kỹ thuật chuyên nghiệp để tạo các commit gọn gàng, đơn mục tiêu.",
      "1": "Sai. Cờ `-p` trong `git add` là viết tắt của `--patch`, không phải push.",
      "2": "Sai. Không liên quan đến máy in.",
      "3": "Sai. Không xóa file untracked."
    },
    "keyTakeaway": "`git add -p` cho phép chọn lọc từng đoạn thay đổi nhỏ (hunk) trong cùng một file để đưa vào Staging Area."
  },
  {
    "id": 14,
    "topic": "Chapter 01: Creating Clean Commits (`git commit`)",
    "question": "What does the `-a` flag do in `git commit -am \"Fix login bug\"`?",
    "options": [
      "It automatically stages all previously TRACKED modified/deleted files and commits them in one step (WARNING: it does NOT stage brand-new Untracked files)",
      "It adds all files including brand-new untracked files automatically",
      "It amends the previous commit instead of creating a new one",
      "It commits directly to GitHub without saving locally"
    ],
    "correct": 0,
    "hint": "Cờ `-a` (`--all`) chỉ tự động stage các file đã được Git theo dõi từ trước (tracked), còn file mới tạo (untracked) vẫn phải chạy `git add` thủ công.",
    "explanations": {
      "0": "Chính xác! `git commit -am \"msg\"` là viết tắt của `--all` + `--message`: tự động gộp bước `git add` cho các file ĐÃ ĐƯỢC THEO DÕI (modified/deleted) trước đó. Bẫy thường gặp: các file mới tạo (Untracked) vẫn bị bỏ qua nếu chưa từng chạy `git add`!",
      "1": "Sai. File mới tạo (Untracked) KHÔNG được `-a` tự động thêm vào.",
      "2": "Sai. Sửa commit gần nhất dùng cờ `--amend`.",
      "3": "Sai. `git commit` luôn ghi vào Local Repository trước; đưa lên server cần `git push`."
    },
    "keyTakeaway": "`git commit -am` bỏ qua bước `git add` cho các file đã tracked bị sửa/xóa, nhưng KHÔNG bao gồm file mới tạo (untracked)."
  },
  {
    "id": 15,
    "topic": "Modifying the Last Commit (`git commit --amend`)",
    "question": "You just ran `git commit -m \"Add feature\"`, then realized you made a typo in the commit message and forgot to include `Utils.java`. How can you fix the last commit locally without creating a second commit?",
    "options": [
      "Run `git add Utils.java` and then `git commit --amend -m \"Add feature cleanly\"`",
      "Run `git commit --fix-last`",
      "Run `git update-commit`",
      "Delete `.git` and re-initialize the repository"
    ],
    "correct": 0,
    "hint": "Cờ `--amend` thay thế commit gần nhất (tạo một commit hash mới thay thế commit cũ ở đầu nhánh hiện tại). Lưu ý không nên amend commit đã push công khai lên nhánh chung.",
    "explanations": {
      "0": "Chính xác! `git commit --amend` lấy toàn bộ các thay đổi đang nằm trong Staging Area (như `Utils.java` vừa `git add`) gộp vào commit ngay trước đó và cho phép sửa lại nội dung commit message (hoặc giữ nguyên bằng thêm cờ `--no-edit`).",
      "1": "Sai. Không có cờ `--fix-last`.",
      "2": "Sai. Không có lệnh `git update-commit`.",
      "3": "Sai. Xóa `.git` sẽ mất sạch toàn bộ lịch sử dự án."
    },
    "keyTakeaway": "`git commit --amend` cho phép gộp thêm thay đổi mới stage hoặc sửa lại thông điệp của commit gần nhất."
  },
  {
    "id": 16,
    "topic": "Inspecting Differences (`git diff` vs `git diff --staged`)",
    "question": "What is the exact difference between running `git diff` (no flags) and `git diff --staged` (or `--cached`)?",
    "options": [
      "`git diff` shows unstaged changes (Working Directory vs Staging Area); `git diff --staged` shows staged changes ready to be committed (Staging Area vs last commit `HEAD`)",
      "`git diff` shows remote commits while `git diff --staged` shows deleted branches",
      "There is no difference; they display identical output",
      "`git diff --staged` automatically commits your changes"
    ],
    "correct": 0,
    "hint": "Khi bạn đã chạy `git add` đưa file vào Staging Area, gõ `git diff` không đối số sẽ không thấy gì cả — lúc đó phải dùng `--staged`!",
    "explanations": {
      "0": "Chính xác! `git diff` so sánh **Working Directory** với **Staging Area** (những gì bạn sửa nhưng chưa `git add`). Còn `git diff --staged` (tương đương `--cached`) so sánh **Staging Area** với commit **`HEAD`** (những gì sắp đi vào commit tiếp theo).",
      "1": "Sai. So sánh với nhánh remote dùng `git diff main origin/main`.",
      "2": "Sai. Chúng so sánh hai cặp ranh giới hoàn toàn khác nhau trong 3 vùng của Git.",
      "3": "Sai. `git diff` là lệnh chỉ đọc, không bao giờ tự commit."
    },
    "keyTakeaway": "`git diff` xem thay đổi chưa `add`; `git diff --staged` xem thay đổi đã `add` chuẩn bị `commit`."
  },
  {
    "id": 17,
    "topic": "Viewing Commit History (`git log` Options)",
    "question": "Which command displays a compact, visual commit history tree showing branch splits and merges across all branches in Terminal (Slide 24)?",
    "options": [
      "`git log --oneline --graph --decorate --all`",
      "`git status --tree`",
      "`git show --branches`",
      "`git history --ascii`"
    ],
    "correct": 0,
    "hint": "Mỗi commit thu gọn thành 1 dòng (`--oneline`), vẽ nhánh ASCII (`--graph`), hiển thị nhãn nhánh/tag (`--decorate`), cho toàn bộ các nhánh (`--all`).",
    "explanations": {
      "0": "Chính xác! Tổ hợp kinh điển `git log --oneline --graph --decorate --all` vẽ sơ đồ cây lịch sử phân nhánh trực quan ngay trên cửa sổ dòng lệnh.",
      "1": "Sai. `git status` không có cờ `--tree` vẽ đồ thị lịch sử.",
      "2": "Sai. `git show` hiển thị chi tiết nội dung một đối tượng/commit cụ thể.",
      "3": "Sai. Không có lệnh `git history` trong Git chuẩn."
    },
    "keyTakeaway": "Dùng `git log --oneline --graph --all` để quan sát nhanh đồ thị nhánh và lịch sử commit trực quan."
  },
  {
    "id": 18,
    "topic": "Inspecting a Specific Commit (`git show`)",
    "question": "Which command displays the commit metadata (author, date, message) AND the full code diff introduced by a specific commit hash `a1b2c3d`?",
    "options": [
      "`git show a1b2c3d`",
      "`git status a1b2c3d`",
      "`git add a1b2c3d`",
      "`git branch a1b2c3d`"
    ],
    "correct": 0,
    "hint": "Lệnh đơn giản dùng để 'xem chi tiết' (show) một commit, tag hoặc blob cụ thể.",
    "explanations": {
      "0": "Chính xác! `git show <commit-hash>` hiển thị đầy đủ thông tin commit (tác giả, ngày giờ, message) cùng toàn bộ phần diff thay đổi của commit đó so với commit cha của nó.",
      "1": "Sai. `git status` không nhận commit hash.",
      "2": "Sai. `git add` nhận đường dẫn file.",
      "3": "Sai. `git branch a1b2c3d` sẽ tạo một nhánh tên là `a1b2c3d`."
    },
    "keyTakeaway": "`git show <hash>` dùng để xem thông tin chi tiết và thay đổi mã nguồn của một commit cụ thể."
  },
  {
    "id": 19,
    "topic": "Tracking File Renames & Deletions (`git rm` vs OS `rm`)",
    "question": "What is the advantage of running `git rm oldfile.txt` instead of manually deleting `oldfile.txt` from File Explorer?",
    "options": [
      "`git rm` deletes the file from the working directory AND automatically stages the deletion ready for the next commit",
      "`git rm` permanently erases the file from every past commit in history",
      "Manual deletion in File Explorer cannot be detected by Git",
      "`git rm` moves the file to GitHub automatically"
    ],
    "correct": 0,
    "hint": "Nếu xóa bằng Explorer, file mới chỉ bị xóa ở Working Directory (bạn vẫn phải gõ `git add` để stage việc xóa). `git rm` làm luôn cả 2 bước.",
    "explanations": {
      "0": "Chính xác! `git rm` vừa xóa file vật lý trong Working Directory vừa ghi nhận thao tác xóa đó vào Staging Area ngay lập tức. (Nếu chỉ muốn bỏ theo dõi trên Git mà giữ lại file trên máy, dùng `git rm --cached`).",
      "1": "Sai. Lịch sử các commit cũ vẫn giữ file đó bình thường.",
      "2": "Sai. Git vẫn phát hiện được việc xóa thủ công trong `git status` (hiển thị `deleted: oldfile.txt`).",
      "3": "Sai. Không tự động đẩy lên GitHub."
    },
    "keyTakeaway": "`git rm` xóa file và stage luôn thao tác xóa; `git rm --cached` chỉ gỡ file khỏi Git mà giữ nguyên file trên ổ cứng."
  },
  {
    "id": 20,
    "topic": "Untracking Files Accidentally Committed (`.gitignore` + `git rm --cached`)",
    "question": "You accidentally committed `.env` (containing API keys) to Git. Adding `.env` to `.gitignore` alone does NOT stop Git from tracking changes to it. What command stops tracking `.env` in future commits while keeping the physical file on your disk?",
    "options": [
      "`git rm --cached .env` followed by `git commit`",
      "`git rm -f .env`",
      "`git ignore --force .env`",
      "`git clean -f .env`"
    ],
    "correct": 0,
    "hint": "`.gitignore` chỉ có tác dụng với file Untracked! Để biến file đang Tracked thành Untracked mà KHÔNG xóa mất file thật trên máy, dùng cờ `--cached`.",
    "explanations": {
      "0": "Chính xác! `.gitignore` chỉ ngăn Git theo dõi các file **chưa từng được track**. Với file đã lỡ `git add`/commit rồi, phải chạy `git rm --cached .env` để gỡ nó khỏi Index (giữ nguyên file thật trên ổ cứng), rồi commit lại.",
      "1": "Sai. `git rm -f .env` sẽ XÓA LUÔN file `.env` vật lý trên ổ đĩa của bạn!",
      "2": "Sai. Không có lệnh `git ignore`.",
      "3": "Sai. `git clean` chỉ xóa các file untracked."
    },
    "keyTakeaway": "Để gỡ file đã lỡ track khỏi Git mà không làm mất file trên máy, kết hợp thêm vào `.gitignore` và chạy `git rm --cached <file>`."
  },
  {
    "id": 21,
    "topic": "Chapter 01: Branching Concepts & Lightweight Pointers",
    "question": "Internally in Git, what actually IS a branch (Chapter 01, Slide 24)?",
    "options": [
      "Simply a lightweight 41-byte movable file pointer referencing a specific commit SHA-1 hash",
      "A complete physical duplicate copy of the entire project folder on disk",
      "A separate virtual machine running in the cloud",
      "A zipped archive file containing only changed CSS files"
    ],
    "correct": 0,
    "hint": "Chính vì nhánh trong Git chỉ là một con trỏ nhẹ 41 byte (40 ký tự SHA-1 + ký tự xuống dòng), việc tạo và chuyển nhánh diễn ra trong tích tắc!",
    "explanations": {
      "0": "Chính xác! Khác với SVN (tạo nhánh bằng cách copy nguyên thư mục tốn dung lượng), một nhánh trong Git chỉ là một file text nhỏ xíu nằm trong `.git/refs/heads/` chứa đúng 40 ký tự mã hash SHA-1 của commit đầu nhánh.",
      "1": "Sai. Git không bao giờ copy trùng lặp cả thư mục dự án khi tạo nhánh.",
      "2": "Sai. Nhánh là cấu trúc dữ liệu cục bộ, không phải máy ảo cloud.",
      "3": "Sai. Không liên quan đến file zip CSS."
    },
    "keyTakeaway": "Nhánh (Branch) trong Git chỉ là một con trỏ cực nhẹ trỏ tới một commit cụ thể, giúp tạo và chuyển nhánh nhanh tức thì."
  },
  {
    "id": 22,
    "topic": "Chapter 01: Creating and Switching Branches (`checkout` vs `switch`)",
    "question": "Which two commands perform the exact same task of creating a new branch named `feature/auth` and immediately switching `HEAD` onto it?",
    "options": [
      "`git checkout -b feature/auth` (classic) and `git switch -c feature/auth` (modern Git 2.23+)",
      "`git branch feature/auth` and `git merge feature/auth`",
      "`git init feature/auth` and `git add feature/auth`",
      "`git clone -b feature/auth` and `git push feature/auth`"
    ],
    "correct": 0,
    "hint": "Từ Git 2.23, Git giới thiệu `git switch` (chuyên chuyển/tạo nhánh) và `git restore` (chuyên khôi phục file) để tách bạch chức năng quá tải của `git checkout`.",
    "explanations": {
      "0": "Chính xác! Cả `git checkout -b <name>` (truyền thống, Slide 24) và `git switch -c <name>` (`-c` = create, hiện đại hơn) đều tạo nhánh mới tại commit hiện tại và chuyển ngay `HEAD` sang nhánh đó.",
      "1": "Sai. `git branch feature/auth` chỉ tạo nhánh chứ KHÔNG tự động chuyển sang nhánh đó.",
      "2": "Sai. `git init` không tạo nhánh tính năng kiểu này.",
      "3": "Sai. `git clone` tải repo mới từ remote."
    },
    "keyTakeaway": "Tạo và chuyển ngay sang nhánh mới dùng `git checkout -b <branch>` hoặc lệnh mới rõ ràng hơn `git switch -c <branch>`."
  },
  {
    "id": 23,
    "topic": "Deleting Local Branches (`-d` vs `-D`)",
    "question": "What is the safety difference between `git branch -d feature/test` and `git branch -D feature/test`?",
    "options": [
      "`-d` safely refuses to delete the branch if it contains unmerged commits, whereas `-D` (`--delete --force`) forcefully deletes the branch regardless of merge status",
      "`-d` deletes remote branches while `-D` deletes local branches",
      "`-D` moves the branch to Trash while `-d` permanently erases the hard drive",
      "There is no difference; they are case-insensitive aliases"
    ],
    "correct": 0,
    "hint": "Chữ `D` viết hoa đại diện cho thao tác ép buộc (Force delete), giống các cờ viết hoa khác trong Git.",
    "explanations": {
      "0": "Chính xác! `git branch -d` kiểm tra an toàn: nếu nhánh đó chưa được merge vào nhánh hiện tại hoặc upstream, Git sẽ từ chối để tránh mất code. Còn `-D` (viết tắt của `--delete --force`) ép xóa ngay bất kể đã merge hay chưa.",
      "1": "Sai. Cả hai đều chỉ xóa nhánh ở Local; xóa nhánh ở Remote phải dùng `git push origin --delete <branch>`.",
      "2": "Sai. Không liên quan đến thùng rác OS.",
      "3": "Sai. Cờ dòng lệnh Linux/Git phân biệt hoa thường rất chặt chẽ."
    },
    "keyTakeaway": "`git branch -d` xóa nhánh an toàn (chỉ khi đã merge); `git branch -D` ép xóa bất kể còn commit chưa merge."
  },
  {
    "id": 24,
    "topic": "Understanding 'Detached HEAD' State",
    "question": "When does Git enter a 'Detached HEAD' state, and what risk arises if you make new commits while in it?",
    "options": [
      "When `HEAD` points directly to a specific commit hash (or tag) instead of a branch name; any new commits made aren't attached to any branch and risk being garbage-collected if you switch away",
      "When your computer monitor is unplugged from the CPU",
      "When the remote GitHub repository is deleted",
      "Whenever you run `git status` on the `main` branch"
    ],
    "correct": 0,
    "hint": "Nếu gõ `git checkout a1b2c3d` (trỏ thẳng vào commit hash thay vì tên nhánh), `HEAD` bị tách khỏi nhánh. Để giữ lại code mới làm ở đây, hãy chạy `git switch -c new-branch`!",
    "explanations": {
      "0": "Chính xác! Bình thường `HEAD` trỏ vào một tên nhánh (ví dụ `main`). Nếu bạn checkout trực tiếp một commit hash cũ hoặc một tag (`git checkout v1.0`), `HEAD` trỏ thẳng vào commit đó ('Detached HEAD'). Các commit mới tạo ở trạng thái này không thuộc nhánh nào và sẽ trở thành commit mồ côi khi bạn chuyển về `main` (trừ khi bạn tạo nhánh mới giữ lại).",
      "1": "Sai. Đây là câu đùa nghĩa đen về phần cứng.",
      "2": "Sai. Detached HEAD là trạng thái con trỏ cục bộ, không do xóa repo từ xa.",
      "3": "Sai. Đứng ở `main` là trạng thái Attached HEAD bình thường."
    },
    "keyTakeaway": "Detached HEAD xảy ra khi `HEAD` trỏ thẳng tới một commit hash thay vì tên nhánh; hãy tạo nhánh mới (`git switch -c`) nếu muốn lưu lại các commit tạo trong trạng thái này."
  },
  {
    "id": 25,
    "topic": "Merging: Fast-Forward vs 3-Way Merge",
    "question": "When running `git merge feature-x` while on `main`, under what condition does Git perform a 'Fast-Forward' merge instead of creating a new Merge Commit?",
    "options": [
      "When `main` has NOT received any new commits since `feature-x` branched off, so Git simply moves the `main` pointer forward to `feature-x`",
      "When `feature-x` has at least 10 merge conflicts",
      "When `main` has diverged with 50 new commits ahead of `feature-x`",
      "Fast-Forward happens only when merging from a USB flash drive"
    ],
    "correct": 0,
    "hint": "Nếu đường đi từ `main` đến `feature-x` là một đường thẳng không rẽ nhánh (lịch sử chưa bị phân kỳ), Git chỉ cần kéo con trỏ `main` tiến thẳng tới đầu nhánh `feature-x`!",
    "explanations": {
      "0": "Chính xác! Khi nhánh đích (`main`) không có commit mới nào kể từ lúc tách `feature-x` (tức là `main` là tổ tiên trực tiếp của `feature-x`), Git chỉ cần dời con trỏ `main` nhảy thẳng tới commit mới nhất của `feature-x` mà không cần tạo Merge Commit trung gian. (Dùng `--no-ff` nếu bạn vẫn muốn giữ lịch sử phân nhánh bằng merge commit).",
      "1": "Sai. Có xung đột thì bắt buộc phải hợp nhất 3 chiều (3-way merge) và giải quyết xung đột thủ công.",
      "2": "Sai. Khi hai nhánh đã phân kỳ (diverged), Git không thể Fast-Forward mà phải thực hiện 3-Way Merge.",
      "3": "Sai. Không liên quan đến USB."
    },
    "keyTakeaway": "Fast-Forward xảy ra khi nhánh đích chưa có commit mới nào kể từ lúc tách nhánh; 3-Way Merge xảy ra khi hai nhánh đã phát triển phân kỳ."
  },
  {
    "id": 26,
    "topic": "Preserving Branch History (`git merge --no-ff`)",
    "question": "Why do many engineering teams enforce `git merge --no-ff feature-branch` when merging features into `main` or `develop`?",
    "options": [
      "To force Git to create an explicit Merge Commit even when a fast-forward is possible, preserving a clear visual record that a feature branch existed and was integrated",
      "To delete all commit messages from the feature branch",
      "To skip all merge conflict checks automatically",
      "To double the execution speed of the Java compiler"
    ],
    "correct": 0,
    "hint": "`--no-ff` nghĩa là 'No Fast-Forward'. Nó giúp bạn dễ dàng biết được nhóm commit nào thuộc cùng một tính năng và có thể revert cả tính năng chỉ với 1 commit!",
    "explanations": {
      "0": "Chính xác! Cờ `--no-ff` (No Fast-Forward) luôn tạo ra một nút Merge Commit hợp nhất hai nhánh. Lợi ích là giữ nguyên dấu vết phân nhánh trong đồ thị lịch sử (`git log --graph`) và cho phép hoàn tác (revert) toàn bộ một tính năng lớn một cách dễ dàng.",
      "1": "Sai. `--no-ff` bảo toàn đầy đủ toàn bộ các commit gốc của nhánh tính năng.",
      "2": "Sai. Xung đột (nếu có) vẫn phải giải quyết bình thường.",
      "3": "Sai. Không liên quan đến Java compiler."
    },
    "keyTakeaway": "`git merge --no-ff` luôn tạo một Merge Commit để lưu giữ rõ ràng cấu trúc lịch sử phân nhánh của từng tính năng."
  },
  {
    "id": 27,
    "topic": "Anatomy of a Merge Conflict",
    "question": "When a Git merge conflict occurs inside a file, what do the conflict markers `<<<<<<< HEAD`, `=======`, and `>>>>>>> feature-login` delimit?",
    "options": [
      "Code between `<<<<<<< HEAD` and `=======` is the version from your current branch (`HEAD`); code between `=======` and `>>>>>>> feature-login` is the incoming version from `feature-login`",
      "Both sections are identical encrypted passwords",
      "The first section is deleted automatically on compile, and the second section is kept",
      "They mark lines that are syntactically valid HTML tags"
    ],
    "correct": 0,
    "hint": "Phần trên (gần `HEAD`) là code của nhánh bạn đang đứng; phần dưới là code của nhánh đang được merge vào.",
    "explanations": {
      "0": "Chính xác! Khi 2 nhánh cùng sửa một vùng dòng code khác nhau, Git tạm dừng merge và chèn các dấu phân tách: phần nằm trên `=======` là phiên bản của nhánh hiện tại (`HEAD`), phần nằm dưới `=======` là phiên bản đến từ nhánh đang merge vào (`feature-login`).",
      "1": "Sai. Đây là mã nguồn văn bản bình thường đang xung đột, không phải mật khẩu mã hóa.",
      "2": "Sai. Các ký hiệu `<<<<<<<` làm code bị lỗi cú pháp; lập trình viên phải tự tay chọn giữ/gộp code đúng và xóa bỏ các dòng đánh dấu đó.",
      "3": "Sai. Đây là conflict markers của Git, không phải thẻ HTML."
    },
    "keyTakeaway": "Trong xung đột merge: giữa `<<<<<<< HEAD` và `=======` là code hiện tại của bạn; giữa `=======` và `>>>>>>>` là code từ nhánh merge vào."
  },
  {
    "id": 28,
    "topic": "Completing or Aborting a Conflicted Merge",
    "question": "After manually editing a conflicted file and removing all `<<<<<<<`, `=======`, `>>>>>>>` markers, what steps complete the merge? (And how do you cancel if needed?)",
    "options": [
      "Run `git add <resolved-file>` followed by `git commit` to finish; or run `git merge --abort` anytime before committing to restore pre-merge state",
      "Simply save the file in VS Code and run `git push` immediately without committing",
      "Run `git reset --soft` to finish the merge",
      "Run `git delete-conflicts` to automatically discard both versions"
    ],
    "correct": 0,
    "hint": "Git cần bạn đánh dấu file đã sửa xong bằng `git add` rồi mới tạo Merge Commit bằng `git commit` (hoặc hủy ngang bằng `--abort`).",
    "explanations": {
      "0": "Chính xác! Quy trình giải quyết xung đột chuẩn: 1) Sửa code hợp nhất và xóa sạch conflict markers; 2) Chạy `git add <file>` báo cho Git biết đã xử lý xong xung đột; 3) Chạy `git commit` để hoàn tất Merge Commit. Nếu thấy rối quá muốn làm lại từ đầu, gõ `git merge --abort` để hủy hoàn toàn quá trình merge.",
      "1": "Sai. Nếu không `git add` và `git commit`, quá trình merge vẫn đang treo dở dang và `git push` sẽ bị từ chối hoặc không đẩy code mới.",
      "2": "Sai. `git reset --soft` không hoàn tất quá trình merge.",
      "3": "Sai. Không có lệnh `git delete-conflicts`."
    },
    "keyTakeaway": "Giải quyết conflict xong phải `git add` và `git commit` để chốt merge; dùng `git merge --abort` nếu muốn hủy bỏ và quay lại trạng thái trước merge."
  },
  {
    "id": 29,
    "topic": "Renaming a Local Branch",
    "question": "How do you rename the current local branch from `master` to `main`?",
    "options": [
      "`git branch -m main`",
      "`git rename master main`",
      "`git mv branch master main`",
      "`git switch --rename main`"
    ],
    "correct": 0,
    "hint": "Cờ `-m` viết tắt của 'move' (tương tự lệnh `mv` đổi tên trong Unix/Linux).",
    "explanations": {
      "0": "Chính xác! `git branch -m <new-name>` đổi tên nhánh hiện tại (hoặc `git branch -m <old-name> <new-name>` để đổi tên nhánh bất kỳ). Cờ `-M` ép đổi tên ngay cả khi tên mới đã tồn tại.",
      "1": "Sai. Không có lệnh `git rename`.",
      "2": "Sai. `git mv` dùng để đổi tên hoặc di chuyển file/thư mục trong kho lưu trữ, không dùng cho nhánh.",
      "3": "Sai. `git switch` không có cờ `--rename`."
    },
    "keyTakeaway": "Dùng `git branch -m <tên-mới>` để đổi tên nhánh hiện tại (ví dụ chuẩn hóa `master` thành `main`)."
  },
  {
    "id": 30,
    "topic": "Viewing Only Unpushed Local Commits",
    "question": "Which `git log` range syntax lists commits that exist on your local `main` branch but have NOT yet been pushed to `origin/main`?",
    "options": [
      "`git log origin/main..main`",
      "`git log main..origin/main`",
      "`git log --unpushed-only`",
      "`git status --diff-commits`"
    ],
    "correct": 0,
    "hint": "Cú pháp khoảng `A..B` trong Git nghĩa là: 'Những commit có thể đi tới từ `B`, nhưng KHÔNG đi tới được từ `A`'.",
    "explanations": {
      "0": "Chính xác! Cú pháp `A..B` trả về các commit có trong `B` (`main` cục bộ) nhưng chưa có trong `A` (`origin/main` đã biết). Ngược lại, `main..origin/main` cho biết các commit mới trên remote mà máy bạn chưa merge vào.",
      "1": "Sai. `main..origin/main` liệt kê các commit nằm trên `origin/main` mà máy bạn chưa có.",
      "2": "Sai. Không có cờ `--unpushed-only`.",
      "3": "Sai. `git status` không có cờ `--diff-commits`."
    },
    "keyTakeaway": "Cú pháp khoảng `git log A..B` liệt kê mọi commit có ở `B` mà chưa có ở `A` (rất hữu ích để kiểm tra trước khi `push` hoặc `merge`)."
  },
  {
    "id": 31,
    "topic": "Chapter 01: Managing Remote URLs (`git remote`)",
    "question": "Which command displays all configured remote repository aliases along with their fetch and push URLs?",
    "options": [
      "`git remote -v`",
      "`git origin --urls`",
      "`git status --remote`",
      "`git config --show-remotes`"
    ],
    "correct": 0,
    "hint": "Cờ `-v` viết tắt của `--verbose` (hiển thị chi tiết đường dẫn kèm theo tên alias như `origin`).",
    "explanations": {
      "0": "Chính xác! `git remote -v` liệt kê tất cả tên kết nối từ xa (như `origin`, `upstream`) cùng địa chỉ URL dùng để fetch và push. Để đổi URL khi repo chuyển địa chỉ, dùng `git remote set-url origin <new-url>`.",
      "1": "Sai. Không có lệnh `git origin`.",
      "2": "Sai. `git status` không liệt kê URL remote.",
      "3": "Sai. Không có cờ `--show-remotes`."
    },
    "keyTakeaway": "Chạy `git remote -v` để kiểm tra tên và URL của các kho chứa từ xa đã liên kết."
  },
  {
    "id": 32,
    "topic": "Chapter 01: Setting Upstream Tracking (`git push -u`)",
    "question": "What does the `-u` (`--set-upstream`) flag accomplish in `git push -u origin main` (Chapter 01, Slide 24)?",
    "options": [
      "It links the local `main` branch to the remote `origin/main` branch so future `git push` and `git pull` commands can run without typing `origin main`",
      "It uploads only uncommitted files without creating commits",
      "It uninstalls Git from the server",
      "It marks the commit as urgent high priority"
    ],
    "correct": 0,
    "hint": "Slide 24 (Ch 01): 'Push Changes to GitHub: git push -u origin master'. Sau lần đầu gắn `-u`, những lần sau chỉ cần gõ ngắn gọn `git push` hoặc `git pull`.",
    "explanations": {
      "0": "Chính xác! Cờ `-u` (`--set-upstream`) thiết lập liên kết theo dõi (upstream tracking relationship) giữa nhánh cục bộ hiện tại và nhánh tương ứng trên remote `origin`. Nhờ đó `git status` cũng hiển thị được bạn đang đi trước (`ahead`) hay đi sau (`behind`) bao nhiêu commit so với remote.",
      "1": "Sai. Git chỉ push các commit đã được lưu trong local repo, không bao giờ push file chưa commit.",
      "2": "Sai. Không liên quan đến gỡ cài đặt.",
      "3": "Sai. `-u` là `--set-upstream`, không phải urgent."
    },
    "keyTakeaway": "`git push -u origin <branch>` thiết lập liên kết theo dõi (upstream tracking) để các lần `git push`/`git pull`/`git status` sau tự động nhận diện nhánh từ xa."
  },
  {
    "id": 33,
    "topic": "`git fetch` vs `git pull`",
    "question": "What is the critical operational difference between `git fetch` and `git pull`?",
    "options": [
      "`git fetch` safely downloads remote commits/branches into remote-tracking refs (`origin/main`) WITHOUT modifying your working files or local branches; `git pull` runs `git fetch` PLUS automatically merges (or rebases) into your current branch",
      "`git fetch` deletes local changes while `git pull` preserves them",
      "`git pull` only works on macOS while `git fetch` is for Windows",
      "There is no difference; they are identical aliases"
    ],
    "correct": 0,
    "hint": "`git pull` = `git fetch` + `git merge` (hoặc `rebase`). Nếu muốn xem đồng đội đã đẩy gì lên trước khi gộp vào code mình đang sửa, hãy dùng `git fetch`!",
    "explanations": {
      "0": "Chính xác! `git fetch` là lệnh cực kỳ an toàn: nó tải dữ liệu mới từ remote về cập nhật các nhánh theo dõi từ xa (`origin/main`) để bạn xem xét (`git log origin/main` hoặc `git diff`), hoàn toàn không đụng tới nhánh làm việc hiện tại. Còn `git pull` tự động thực hiện `fetch` rồi `merge` ngay vào nhánh bạn đang đứng (có thể gây conflict ngay lập tức).",
      "1": "Sai. `git fetch` tuyệt đối không bao giờ xóa hoặc đụng chạm tới Working Directory của bạn.",
      "2": "Sai. Cả hai đều là lệnh chuẩn đa nền tảng của Git.",
      "3": "Sai. `git pull` bao gồm cả bước tích hợp (merge/rebase), còn `git fetch` chỉ tải về để tham chiếu."
    },
    "keyTakeaway": "`git fetch` tải cập nhật từ xa về xem mà không sửa code cục bộ; `git pull` = `git fetch` + `git merge` (tích hợp ngay vào nhánh hiện tại)."
  },
  {
    "id": 34,
    "topic": "Clean Pull History (`git pull --rebase`)",
    "question": "Why do developers often run `git pull --rebase` when syncing a feature branch with remote updates?",
    "options": [
      "It places your unpushed local commits cleanly on top of the newly fetched remote commits, avoiding unnecessary 'Merge branch ...' clutter commits",
      "It erases all local commits permanently",
      "It forces the remote GitHub server to downgrade to an older Git version",
      "It bypasses all authentication checks"
    ],
    "correct": 0,
    "hint": "Thay vì sinh ra một Merge Commit vô nghĩa kiểu `Merge branch 'main' of github.com/...`, `--rebase` xếp nối tiếp các commit của bạn lên đầu nhánh mới nhất.",
    "explanations": {
      "0": "Chính xác! Khi cả bạn và đồng đội cùng commit trên một nhánh, `git pull` mặc định tạo một Merge Commit gây rối lịch sử. `git pull --rebase` (hoặc cấu hình `git config --global pull.rebase true`) tạm nhấc các commit cục bộ của bạn ra, kéo remote mới về, rồi đặt lại commit của bạn lên đỉnh cho đường lịch sử thẳng tắp.",
      "1": "Sai. Các commit cục bộ của bạn được giữ nguyên (tái áp dụng lên đầu nhánh mới).",
      "2": "Sai. Không ảnh hưởng tới phiên bản phần mềm của GitHub.",
      "3": "Sai. Vẫn yêu cầu quyền đọc remote bình thường."
    },
    "keyTakeaway": "`git pull --rebase` giúp đồng bộ code mới từ remote mà vẫn giữ lịch sử commit thẳng hàng, sạch sẽ không bị rác merge commit."
  },
  {
    "id": 35,
    "topic": "Safe Force Pushing (`--force-with-lease` vs `--force`)",
    "question": "After rebasing or amending a personal feature branch, why is `git push --force-with-lease` strongly preferred over `git push --force`?",
    "options": [
      "`--force-with-lease` checks that the remote branch hasn't been updated by someone else since your last fetch, preventing you from accidentally overwriting teammates' commits",
      "`--force-with-lease` charges a monthly rental fee to GitHub",
      "`--force` does not work on branches longer than 10 commits",
      "`--force-with-lease` automatically merges conflicts on the server"
    ],
    "correct": 0,
    "hint": "`git push --force` ghi đè mù quáng mọi thứ trên remote; `--force-with-lease` có chốt kiểm tra an toàn trước khi ghi đè.",
    "explanations": {
      "0": "Chính xác! `git push --force` rất nguy hiểm vì nó sẵn sàng xóa sạch mọi commit mà đồng đội vừa đẩy lên nhánh đó trong lúc bạn chưa kịp `fetch`. Cờ `--force-with-lease` chỉ cho phép force push nếu đầu nhánh trên remote vẫn khớp chính xác với những gì máy bạn thấy ở lần `fetch` gần nhất.",
      "1": "Sai. 'Lease' ở đây là thuật ngữ khóa kiểm tra điều kiện an toàn, không liên quan đến tiền thuê.",
      "2": "Sai. `--force` không giới hạn số commit.",
      "3": "Sai. Không tự merge trên server."
    },
    "keyTakeaway": "Khi cần force push (như sau khi rebase nhánh cá nhân), luôn ưu tiên `git push --force-with-lease` để tránh ghi đè nhầm code của đồng đội."
  },
  {
    "id": 36,
    "topic": "Deleting a Remote Branch",
    "question": "After a feature branch `feature/cart` has been merged on GitHub, which command deletes that branch from the remote `origin` repository?",
    "options": [
      "`git push origin --delete feature/cart`",
      "`git branch -D origin/feature/cart`",
      "`git rm --remote feature/cart`",
      "`git fetch --remove feature/cart`"
    ],
    "correct": 0,
    "hint": "Thao tác trên remote repository luôn đi qua lệnh `git push` (với cờ `--delete` hoặc `-d`).",
    "explanations": {
      "0": "Chính xác! `git push origin --delete feature/cart` (hoặc cú pháp cũ `git push origin :feature/cart`) gửi lệnh xóa nhánh `feature/cart` trên máy chủ từ xa `origin`. (Sau đó có thể chạy `git fetch --prune` để dọn dẹp tham chiếu `origin/feature/cart` đã xóa trên máy local).",
      "1": "Sai. `git branch -D` chỉ xóa nhánh cục bộ (hoặc không thể dùng trực tiếp để xóa nhánh trên server remote).",
      "2": "Sai. `git rm` dùng cho tệp tin trong thư mục làm việc, không dùng xóa nhánh remote.",
      "3": "Sai. Không có cờ `--remove` trên `git fetch`."
    },
    "keyTakeaway": "Dùng `git push origin --delete <branch>` để xóa nhánh trên remote repository."
  },
  {
    "id": 37,
    "topic": "Cleaning Stale Remote-Tracking References (`--prune`)",
    "question": "A teammate deleted several old merged branches on GitHub, but running `git branch -a` locally still lists `origin/old-feature`. Which command cleans up those stale remote-tracking references locally?",
    "options": [
      "`git fetch --prune` (or `git remote prune origin`)",
      "`git clean -fd`",
      "`git gc --delete-branches`",
      "`git reset --hard`"
    ],
    "correct": 0,
    "hint": "Từ khóa 'prune' nghĩa là cắt tỉa bỏ các cành (tham chiếu) đã bị xóa trên remote.",
    "explanations": {
      "0": "Chính xác! `git fetch --prune` (hoặc `git fetch -p`) đối chiếu với server từ xa và tự động xóa bỏ các remote-tracking branches (`origin/...`) không còn tồn tại trên remote nữa.",
      "1": "Sai. `git clean -fd` xóa các tệp tin và thư mục untracked trong Working Directory của bạn.",
      "2": "Sai. `git gc` nén dữ liệu nội bộ trong `.git/objects`, không có cờ `--delete-branches`.",
      "3": "Sai. `git reset --hard` đặt lại Working Directory và HEAD, không dọn dẹp tham chiếu remote."
    },
    "keyTakeaway": "Chạy `git fetch --prune` (hoặc `git fetch -p`) để dọn sạch các tham chiếu nhánh từ xa đã bị xóa trên server."
  },
  {
    "id": 38,
    "topic": "Fork vs Clone in Open-Source Collaboration",
    "question": "When contributing to an open-source GitHub repository where you do NOT have write permissions, what is the standard distinction between 'Fork' and 'Clone'?",
    "options": [
      "A Fork creates your own server-side copy of the repository under your GitHub account; you then Clone your fork locally, commit changes, push to your fork, and open a Pull Request back to the original `upstream` repo",
      "A Fork downloads files to your hard drive while a Clone creates a copy on GitHub",
      "Clone allows direct pushing to any public repo without permissions",
      "Fork and Clone are exact synonyms inside the Git CLI"
    ],
    "correct": 0,
    "hint": "Fork là tính năng của nền tảng (GitHub/GitLab) tạo bản sao trên đám mây thuộc tài khoản của bạn; Clone là lệnh Git CLI tải bản sao về máy tính cá nhân.",
    "explanations": {
      "0": "Chính xác! Fork là thao tác trên máy chủ GitHub/GitLab tạo bản sao repo sang tài khoản cá nhân của bạn (nơi bạn có toàn quyền push). Sau đó bạn dùng `git clone` tải fork đó về máy, làm việc, `git push` lên fork của mình và gửi Pull Request tới repo gốc (`upstream`).",
      "1": "Sai. Ngược lại hoàn toàn: Fork nằm trên server hosting (GitHub), Clone tải về máy cục bộ.",
      "2": "Sai. Bạn không thể push trực tiếp vào repo công khai của người khác nếu không được cấp quyền collaborator.",
      "3": "Sai. Fork không phải là một lệnh trong Git CLI chuẩn."
    },
    "keyTakeaway": "Fork tạo bản sao trên tài khoản server (GitHub/GitLab); Clone tải kho chứa về máy cục bộ."
  },
  {
    "id": 39,
    "topic": "Restoring Unstaged Working Directory Files (`git restore`)",
    "question": "You accidentally messed up `App.jsx` in your working directory (not yet staged) and want to discard all local edits to it, restoring it to the last committed/staged state. Which modern Git command accomplishes this?",
    "options": [
      "`git restore App.jsx` (or classic `git checkout -- App.jsx`)",
      "`git reset --soft App.jsx`",
      "`git revert App.jsx`",
      "`git delete App.jsx`"
    ],
    "correct": 0,
    "hint": "Lệnh hiện đại từ Git 2.23 chuyên dùng để khôi phục nội dung tệp tin trong Working Directory.",
    "explanations": {
      "0": "Chính xác! `git restore <file>` (thay thế cách viết cũ dễ gây nhầm lẫn `git checkout -- <file>`) hủy bỏ toàn bộ thay đổi chưa stage trong Working Directory của file đó. (Lưu ý: thay đổi chưa commit bị hủy bằng lệnh này không thể phục hồi qua Git!).",
      "1": "Sai. `git reset --soft` di chuyển con trỏ nhánh về commit khác và không nhận tên file.",
      "2": "Sai. `git revert` tạo một commit mới đảo ngược một commit cũ trong lịch sử, nhận commit hash chứ không nhận tên file.",
      "3": "Sai. Không có lệnh `git delete`."
    },
    "keyTakeaway": "Dùng `git restore <file>` để hủy bỏ các chỉnh sửa chưa stage của một tệp tin và đưa nó về trạng thái sạch."
  },
  {
    "id": 40,
    "topic": "Unstaging a File (`git restore --staged`)",
    "question": "You ran `git add .` and accidentally staged `secrets.txt`, though you haven't committed yet. How do you remove `secrets.txt` from the Staging Area WITHOUT losing your edits in the file?",
    "options": [
      "`git restore --staged secrets.txt` (or classic `git reset HEAD secrets.txt`)",
      "`git rm -f secrets.txt`",
      "`git reset --hard`",
      "`git clean -f`"
    ],
    "correct": 0,
    "hint": "Chỉ cần rút file từ Staging Area trở lại trạng thái Modified ở Working Directory (giữ nguyên toàn bộ code đã sửa).",
    "explanations": {
      "0": "Chính xác! `git restore --staged <file>` (hoặc lệnh truyền thống `git reset HEAD <file>`) rút tệp khỏi vùng đệm Staging Area mà vẫn giữ nguyên vẹn nội dung bạn đang chỉnh sửa ở Working Directory.",
      "1": "Sai. `git rm -f` sẽ xóa hẳn file vật lý khỏi ổ đĩa!",
      "2": "Sai. `git reset --hard` sẽ xóa sạch mọi thay đổi đang làm ở Working Directory của tất cả các file!",
      "3": "Sai. `git clean -f` xóa các file untracked."
    },
    "keyTakeaway": "Dùng `git restore --staged <file>` (hoặc `git reset HEAD <file>`) để đưa file ra khỏi Staging Area mà không làm mất nội dung chỉnh sửa."
  },
  {
    "id": 41,
    "topic": "Comparing the Three `git reset` Modes (`--soft`, `--mixed`, `--hard`)",
    "question": "When running `git reset <mode> HEAD~1` to undo the most recent commit, what is the exact difference between `--soft`, `--mixed` (default), and `--hard`?",
    "options": [
      "`--soft` moves HEAD back keeping changes Staged; `--mixed` moves HEAD back and Unstages changes (keeping them in Working Directory); `--hard` moves HEAD back and PERMANENTLY discards all changes in both Staging and Working Directory",
      "`--hard` pushes the reset to GitHub automatically while `--soft` keeps it local",
      "`--soft` deletes all files while `--hard` preserves them",
      "All three flags perform the exact same operation"
    ],
    "correct": 0,
    "hint": "Hãy nhớ mức độ 'mạnh tay' tăng dần: `--soft` (chỉ lùi HEAD) -> `--mixed` (lùi HEAD + xóa Staging) -> `--hard` (lùi HEAD + xóa Staging + xóa sạch Working Directory).",
    "explanations": {
      "0": "Chính xác! Ba cấp độ của `git reset HEAD~1`: 1) `--soft`: chỉ lùi nhánh/HEAD về commit cha, mọi thay đổi của commit vừa rồi vẫn nằm sẵn trong Staging Area (rất tiện để gom nhiều commit lại rồi commit lại 1 lần); 2) `--mixed` (mặc định nếu không truyền cờ): lùi HEAD và làm rỗng Staging Area, thay đổi vẫn còn trong Working Directory; 3) `--hard`: lùi HEAD và XÓA SẠCH thay đổi ở cả Staging lẫn Working Directory.",
      "1": "Sai. `git reset` là thao tác cục bộ, không tự động push lên GitHub.",
      "2": "Sai. Thứ tự bị đảo ngược: `--hard` mới là chế độ xóa thay đổi ở Working Directory.",
      "3": "Sai. Ba chế độ ảnh hưởng đến các tầng (HEAD / Index / Working Tree) rất khác nhau."
    },
    "keyTakeaway": "`--soft`: giữ nguyên Staging + Working; `--mixed` (mặc định): giữ Working, bỏ Staging; `--hard`: xóa sạch cả Staging lẫn Working Directory."
  },
  {
    "id": 42,
    "topic": "`git reset` vs `git revert` on Shared Public Branches",
    "question": "Why should you NEVER use `git reset --hard` to undo a commit that has ALREADY been pushed to a shared `main` branch, and what command should you use instead?",
    "options": [
      "Because `git reset` rewrites shared commit history (forcing teammates into divergent histories); instead use `git revert <commit-hash>`, which creates a NEW commit that safely reverses the changes without rewriting history",
      "Because `git reset` is banned on Windows computers",
      "Because `git revert` deletes the commit silently from everyone's computers",
      "Because `git reset` only works on branches created by Linus Torvalds"
    ],
    "correct": 0,
    "hint": "Trên nhánh công khai có nhiều người cùng kéo code (`main`, `develop`), quy tắc bất biến là KHÔNG viết lại lịch sử (do not rewrite public history); muốn sửa sai hãy dùng `git revert` tiến lên phía trước.",
    "explanations": {
      "0": "Chính xác! `git reset` xóa lùi lịch sử cũ, khiến máy bạn lệch pha hoàn toàn với lịch sử đồng đội đã pull về (buộc phải force push gây loạn). Ngược lại, `git revert <commit>` tính toán bản vá đảo ngược (inverse patch) của commit sai và tạo một **commit mới** ở đầu nhánh để khôi phục code, giữ nguyên dòng lịch sử an toàn tuyệt đối cho cả nhóm.",
      "1": "Sai. `git reset` chạy bình thường trên mọi hệ điều hành.",
      "2": "Sai. `git revert` KHÔNG xóa commit cũ; nó giữ nguyên commit cũ trong lịch sử và thêm một commit mới phủ định lại nó.",
      "3": "Sai. Không liên quan đến tác giả tạo nhánh."
    },
    "keyTakeaway": "Trên nhánh dùng chung đã push, KHÔNG dùng `git reset` (viết lại lịch sử); hãy dùng `git revert <hash>` để tạo commit mới đảo ngược thay đổi một cách an toàn."
  },
  {
    "id": 43,
    "topic": "Removing Untracked Files (`git clean`)",
    "question": "Which command previews (`-n`) and then forcefully removes (`-fd`) all untracked files and untracked directories from your working directory?",
    "options": [
      "`git clean -nd` (dry run preview) then `git clean -fd`",
      "`git reset --untracked`",
      "`git restore --all-new`",
      "`git prune --working-dir`"
    ],
    "correct": 0,
    "hint": "Vì `git clean` xóa vĩnh viễn các file chưa từng được Git lưu lại (không thể phục hồi từ Git!), luôn chạy thử với `-n` (`--dry-run`) trước khi chạy `-f` (`--force`) và `-d` (directories).",
    "explanations": {
      "0": "Chính xác! `git clean` chuyên dọn dẹp các file/thư mục rác chưa từng được track (Untracked). Cờ `-n` chạy nháp liệt kê danh sách sẽ bị xóa để kiểm tra an toàn; cờ `-f` thực thi xóa file và `-d` bao gồm cả thư mục untracked (thêm `-x` nếu muốn xóa cả file nằm trong `.gitignore`).",
      "1": "Sai. Không có cờ `--untracked` cho `git reset`.",
      "2": "Sai. Không có lệnh này.",
      "3": "Sai. Không có cờ `--working-dir` cho `git prune`."
    },
    "keyTakeaway": "Dùng `git clean -nd` để xem trước và `git clean -fd` để xóa các file/thư mục untracked khỏi thư mục làm việc."
  },
  {
    "id": 44,
    "topic": "Temporary Saving with `git stash`",
    "question": "You are halfway through coding an unfinished feature with modified files, and suddenly need to switch to `main` to fix an urgent production bug without committing broken code. Which command temporarily shelves your uncommitted work cleanly?",
    "options": [
      "`git stash` (or `git stash push -m \"WIP feature\"`)",
      "`git pause`",
      "`git freeze --work`",
      "`git commit --temporary`"
    ],
    "correct": 0,
    "hint": "Lệnh cất tạm những thay đổi chưa commit vào một ngăn xếp ẩn (stash stack) và trả lại Working Directory sạch tinh.",
    "explanations": {
      "0": "Chính xác! `git stash` cất giữ tạm thời các thay đổi ở Working Directory và Staging Area vào một ngăn xếp (stack) cục bộ, đưa thư mục làm việc về trạng thái sạch bóng để bạn chuyển nhánh an toàn. (Lưu ý thêm cờ `-u` hoặc `--include-untracked` nếu muốn stash cả các file mới tạo).",
      "1": "Sai. Không có lệnh `git pause`.",
      "2": "Sai. Không có lệnh `git freeze`.",
      "3": "Sai. Không có cờ `--temporary`."
    },
    "keyTakeaway": "Sử dụng `git stash` (kèm `-u` nếu có file mới untracked) để cất tạm công việc dở dang và chuyển nhánh sạch sẽ."
  },
  {
    "id": 45,
    "topic": "`git stash pop` vs `git stash apply`",
    "question": "What is the exact difference between restoring stashed changes using `git stash pop` versus `git stash apply`?",
    "options": [
      "`git stash pop` applies the stashed changes AND deletes that entry from the stash stack (if no conflicts occur); `git stash apply` applies the changes while KEEPING the entry in the stash stack for reuse",
      "`git stash apply` deletes the changes from your disk",
      "`git stash pop` pushes the stash directly to GitHub",
      "There is no difference; both permanently delete the stash"
    ],
    "correct": 0,
    "hint": "Trong cấu trúc dữ liệu Stack, `pop` = lấy ra dùng rồi vứt khỏi ngăn xếp; `apply` = chỉ áp dụng bản sao mà giữ nguyên trong ngăn xếp.",
    "explanations": {
      "0": "Chính xác! `git stash pop` vừa khôi phục thay đổi vừa xóa bản stash trên đỉnh stack (trừ khi gặp xung đột, lúc đó nó giữ lại để an toàn). Còn `git stash apply` giữ nguyên bản stash trong danh sách `git stash list` để bạn có thể áp dụng lại cho nhiều nhánh khác (dùng `git stash drop` để xóa thủ công khi xong).",
      "1": "Sai. `apply` áp dụng thay đổi vào Working Directory chứ không xóa đi.",
      "2": "Sai. Stash luôn chỉ tồn tại cục bộ trên máy cá nhân, không bao giờ push lên GitHub.",
      "3": "Sai. Chỉ `pop` mới xóa entry khỏi stack."
    },
    "keyTakeaway": "`git stash pop` khôi phục và xóa khỏi stack; `git stash apply` khôi phục nhưng giữ nguyên stash trong danh sách."
  },
  {
    "id": 46,
    "topic": "Applying a Specific Commit with `git cherry-pick`",
    "question": "A bugfix was committed on `dev` with hash `9f8e7d6`. You want to copy ONLY that single commit onto `production-hotfix` without merging all other unrelated commits from `dev`. Which command do you run on `production-hotfix`?",
    "options": [
      "`git cherry-pick 9f8e7d6`",
      "`git merge --single 9f8e7d6`",
      "`git copy-commit 9f8e7d6`",
      "`git clone 9f8e7d6`"
    ],
    "correct": 0,
    "hint": "Tên lệnh mang nghĩa đen là 'hái một quả anh đào' — nhặt đúng 1 commit cụ thể từ nhánh khác mang về nhánh hiện tại.",
    "explanations": {
      "0": "Chính xác! `git cherry-pick <commit-hash>` lấy các thay đổi từ một commit cụ thể trên nhánh khác và áp dụng tạo thành một commit mới tương ứng trên nhánh hiện tại mà không cần merge toàn bộ nhánh đó.",
      "1": "Sai. `git merge` không có cờ `--single` chỉ nhặt 1 commit lẻ (merge luôn tích hợp toàn bộ chuỗi commit từ tổ tiên chung).",
      "2": "Sai. Không có lệnh `git copy-commit`.",
      "3": "Sai. `git clone` dùng để sao chép cả kho chứa."
    },
    "keyTakeaway": "Dùng `git cherry-pick <commit-hash>` để sao chép riêng một commit cụ thể từ nhánh khác sang nhánh hiện tại."
  },
  {
    "id": 47,
    "topic": "`git rebase` Mechanics vs `git merge`",
    "question": "How does `git rebase main` (executed while on `feature`) integrate updates from `main` differently from `git merge main`?",
    "options": [
      "Rebase replays/re-applies all of `feature`'s commits sequentially on top of the latest `main` commit, creating a clean linear history with new commit hashes instead of a merge commit",
      "Rebase deletes `main` and renames `feature` to `main`",
      "Rebase creates two separate merge commits for every file",
      "Rebase uploads code directly to production without testing"
    ],
    "correct": 0,
    "hint": "Rebase nghĩa là 'đổi gốc' (re-base): nhổ toàn bộ các commit của nhánh `feature` và cắm lại gốc lên đỉnh mới nhất của `main`.",
    "explanations": {
      "0": "Chính xác! `git rebase main` tìm tổ tiên chung, tạm lưu các thay đổi của từng commit trên `feature`, di chuyển nền của nhánh `feature` tới đỉnh mới nhất của `main`, rồi áp dụng lại từng commit đó một cách tuần tự. Kết quả là lịch sử thẳng tắp (linear history) không có đường rẽ nhánh phức tạp, nhưng sinh ra các mã SHA-1 mới.",
      "1": "Sai. `main` hoàn toàn không bị xóa hay thay đổi.",
      "2": "Sai. Rebase không tạo merge commit.",
      "3": "Sai. Rebase là thao tác cục bộ tái cấu trúc lịch sử nhánh."
    },
    "keyTakeaway": "`git rebase` di chuyển nền nhánh lên đỉnh mới nhất và chạy lại các commit để tạo lịch sử tuyến tính thẳng hàng (không sinh merge commit)."
  },
  {
    "id": 48,
    "topic": "The Golden Rule of Rebasing",
    "question": "What is the 'Golden Rule of Rebasing' in collaborative software teams?",
    "options": [
      "NEVER rebase commits that have already been pushed to a public/shared branch that other teammates are working on",
      "Always rebase the `main` branch onto every developer's personal laptop",
      "Only run `git rebase` on Fridays at 5:00 PM",
      "Never rebase a branch that has more than 2 commits"
    ],
    "correct": 0,
    "hint": "Bởi vì `rebase` tạo ra các commit mới với mã SHA-1 khác hoàn toàn so với commit cũ (viết lại lịch sử). Nếu đồng đội đang dựa trên các commit cũ đó, đồ thị sẽ bị nhân đôi và rối tung!",
    "explanations": {
      "0": "Chính xác! Quy tắc vàng của Rebasing: **Không bao giờ rebase nhánh công khai/dùng chung đã push** (như `main`, `develop`, hoặc nhánh có nhiều người cùng code). Rebase viết lại mã SHA-1 lịch sử; nếu người khác đã pull các commit cũ về, họ sẽ gặp xung đột lịch sử kép cực kỳ khó chịu. Chỉ nên rebase trên nhánh cá nhân của riêng bạn trước khi mở Pull Request.",
      "1": "Sai. Làm vậy sẽ phá hủy lịch sử nhánh `main` chung.",
      "2": "Sai. Đây là câu đùa.",
      "3": "Sai. Bạn có thể rebase nhánh cá nhân có bao nhiêu commit tùy thích."
    },
    "keyTakeaway": "Quy tắc vàng của Rebase: Chỉ rebase các commit cục bộ hoặc nhánh cá nhân chưa chia sẻ; tuyệt đối KHÔNG rebase nhánh chung."
  },
  {
    "id": 49,
    "topic": "Interactive Rebasing (`git rebase -i`)",
    "question": "You made 5 messy local commits ('wip', 'typo', 'fix again', 'oops', 'done') on your feature branch. How can you squash them into 1 clean, descriptive commit before creating a Pull Request?",
    "options": [
      "Run `git rebase -i HEAD~5` (Interactive Rebase) and mark the follow-up commits with `squash` (or `fixup`)",
      "Run `git merge --squash-all` on the branch itself",
      "Run `git clean -5`",
      "Delete the branch and retype all code manually"
    ],
    "correct": 0,
    "hint": "Cờ `-i` (`--interactive`) mở trình soạn thảo cho phép bạn chọn hành động `pick`, `reword` (đổi tên), `squash` (gộp nội dung + message), `fixup` (gộp nội dung bỏ message), `drop` (xóa commit).",
    "explanations": {
      "0": "Chính xác! `git rebase -i HEAD~5` mở danh sách 5 commit gần nhất cho phép bạn sắp xếp lại thứ tự, sửa message (`reword`), gộp nhiều commit rác thành một commit hoàn chỉnh (`squash`/`fixup`), hoặc xóa bỏ (`drop`). Đây là công cụ giúp lịch sử Pull Request sạch đẹp chuyên nghiệp.",
      "1": "Sai. `git merge --squash` dùng khi gộp từ một nhánh khác vào nhánh hiện tại, không dùng để tự gộp trên cùng một nhánh.",
      "2": "Sai. Không có lệnh `git clean -5`.",
      "3": "Sai. Không cần phải gõ lại code thủ công."
    },
    "keyTakeaway": "Dùng Interactive Rebase (`git rebase -i HEAD~N`) để gộp (`squash`/`fixup`), sửa message (`reword`) hoặc sắp xếp lại các commit cục bộ cho gọn đẹp."
  },
  {
    "id": 50,
    "topic": "Git Tagging: Lightweight vs Annotated Tags",
    "question": "For marking an official production software release like `v1.0.0`, why is an Annotated Tag (`git tag -a v1.0.0 -m \"Release 1.0\"`) recommended over a Lightweight Tag (`git tag v1.0.0`)?",
    "options": [
      "An Annotated Tag is stored as a full Git object containing tagger name, email, date, release message, and optional GPG signature, whereas a Lightweight Tag is just an unannotated pointer to a commit",
      "Lightweight tags are automatically deleted after 24 hours",
      "Annotated tags cannot be pushed to GitHub",
      "Lightweight tags do not work on `main` branch"
    ],
    "correct": 0,
    "hint": "Tạo tag thông thường chỉ lưu mỗi tên và mã hash commit; cờ `-a` tạo hẳn một đối tượng Tag đầy đủ siêu dữ liệu kiểm chứng.",
    "explanations": {
      "0": "Chính xác! Annotated Tag (`-a`) là một đối tượng Git hoàn chỉnh lưu giữ thông tin ai tạo tag, khi nào, ghi chú phát hành (release notes) và hỗ trợ ký số GPG xác thực. Lightweight Tag chỉ là một file bookmark trỏ thẳng tới commit không kèm metadata. (Lưu ý: mặc định `git push` KHÔNG tự đẩy tags, phải chạy `git push origin v1.0.0` hoặc `git push --tags`).",
      "1": "Sai. Lightweight tag vẫn tồn tại vĩnh viễn cho đến khi bị xóa.",
      "2": "Sai. Annotated tag được đẩy lên GitHub để tạo Releases rất phổ biến.",
      "3": "Sai. Lightweight tag dùng được trên mọi nhánh."
    },
    "keyTakeaway": "Dùng Annotated Tag (`git tag -a v1.0.0 -m \"...\"`) cho các bản phát hành chính thức vì nó lưu đầy đủ metadata người tạo, ngày giờ và thông điệp."
  },
  {
    "id": 51,
    "topic": "Pushing Tags to Remote Repository",
    "question": "After creating a release tag locally (`git tag -a v2.0 -m \"v2 release\"`), you run `git push`. Why doesn't `v2.0` appear on GitHub, and how do you push it?",
    "options": [
      "`git push` does not transfer tags by default; you must explicitly run `git push origin v2.0` or `git push --tags`",
      "GitHub blocks all tags starting with the letter `v`",
      "Tags are automatically deleted during `git push`",
      "You must run `git commit --tags` first"
    ],
    "correct": 0,
    "hint": "Nhằm tránh vô tình đẩy các tag thử nghiệm cá nhân lên server, Git yêu cầu chỉ định rõ khi push tag.",
    "explanations": {
      "0": "Chính xác! Theo mặc định, `git push` chỉ đẩy các nhánh (branches), không tự động đẩy tags. Bạn cần gõ `git push origin <tagname>` để đẩy một tag cụ thể hoặc `git push --tags` (hoặc `--follow-tags` cho annotated tags) để đẩy lên server.",
      "1": "Sai. `v1.0`, `v2.0` là quy ước đặt tên chuẩn Semantic Versioning phổ biến nhất trên GitHub.",
      "2": "Sai. Tag cục bộ không bị xóa khi push.",
      "3": "Sai. Không có cờ `--tags` trên `git commit`."
    },
    "keyTakeaway": "Lệnh `git push` không tự đẩy Tags lên remote; phải dùng `git push origin <tag>` hoặc `git push --tags`."
  },
  {
    "id": 52,
    "topic": "Disaster Recovery with `git reflog`",
    "question": "You accidentally ran `git reset --hard HEAD~3` and wiped out 3 important local commits that were NOT pushed yet! How can `git reflog` save your lost work?",
    "options": [
      "`git reflog` records every movement of `HEAD` (commits, resets, checkouts, rebases) locally for ~90 days, allowing you to find the lost commit's SHA-1 hash and restore it via `git reset --hard <hash>` or `git branch rescue <hash>`",
      "`git reflog` only works if you backed up the repository to Dropbox",
      "`git reflog` emails GitHub support to recover hard drive sectors",
      "Once `git reset --hard` executes, committed data is immediately erased and unrecoverable by any Git command"
    ],
    "correct": 0,
    "hint": "Miễn là code của bạn ĐÃ TỪNG được `git commit` vào `.git` (dù sau đó bị `reset --hard` hay xóa nhánh nhầm), mọi chuyển động của `HEAD` vẫn được ghi nhật ký an toàn trong `reflog`!",
    "explanations": {
      "0": "Chính xác! `git reflog` (Reference Log) là 'chiếc hộp đen cứu hộ' cục bộ ghi lại mọi lần con trỏ `HEAD` thay đổi vị trí (commit, reset, rebase, amend, checkout). Chỉ cần tìm lại mã hash ngay trước khi gõ nhầm `reset --hard` trong bảng `reflog` (ví dụ `HEAD@{1}`), bạn có thể khôi phục lại toàn bộ 3 commit đã mất ngay lập tức!",
      "1": "Sai. `reflog` là tính năng tích hợp sẵn hoàn toàn trong thư mục `.git` cục bộ.",
      "2": "Sai. Không liên quan tới hỗ trợ GitHub hay phục hồi sector ổ cứng.",
      "3": "Sai! Chỉ những thay đổi CHƯA BAO GIỜ commit (trong Working Directory) mới mất hẳn khi chạy `reset --hard`; còn mọi thứ ĐÃ commit đều cứu được qua `git reflog` trong vòng ~30–90 ngày trước khi `git gc` dọn dẹp."
    },
    "keyTakeaway": "`git reflog` ghi lại mọi dịch chuyển của `HEAD`, là phao cứu sinh tối thượng giúp khôi phục commit bị mất sau `git reset --hard` hoặc xóa nhánh nhầm."
  },
  {
    "id": 53,
    "topic": "Finding Bug-Introducing Commits (`git bisect`)",
    "question": "A bug exists in the current commit, and you know it worked fine 500 commits ago. Which Git command uses Binary Search (O(log N)) to help you quickly pinpoint the exact commit that introduced the bug?",
    "options": [
      "`git bisect` (`git bisect start`, `git bisect bad`, `git bisect good <old-hash>`)",
      "`git search --bug`",
      "`git binary-find`",
      "`git diff --all-500`"
    ],
    "correct": 0,
    "hint": "Từ khóa 'bisect' nghĩa là chia đôi — Git tự động nhảy vào commit ở chính giữa khoảng Good–Bad để bạn kiểm tra, thu hẹp 500 commit xuống chỉ còn ~9 bước!",
    "explanations": {
      "0": "Chính xác! `git bisect` áp dụng thuật toán tìm kiếm nhị phân (Binary Search) trên lịch sử commit: bạn đánh dấu commit hiện tại là `bad` và commit cũ hoạt động tốt là `good`. Git liên tục checkout điểm giữa để bạn test (hoặc chạy script tự động qua `git bisect run`) cho đến khi chỉ ra chính xác commit đầu tiên gây lỗi.",
      "1": "Sai. Không có lệnh `git search --bug`.",
      "2": "Sai. Không có lệnh `git binary-find`.",
      "3": "Sai. `git diff` chỉ so sánh 2 điểm, không tìm kiếm nhị phân qua 500 commit."
    },
    "keyTakeaway": "`git bisect` sử dụng tìm kiếm nhị phân trên cây lịch sử để truy tìm chính xác commit đầu tiên làm phát sinh lỗi."
  },
  {
    "id": 54,
    "topic": "Line-by-Line Authorship (`git blame`)",
    "question": "Which command annotates every single line of `OrderService.java` with the commit hash, author name, and timestamp of whoever last modified that specific line?",
    "options": [
      "`git blame OrderService.java`",
      "`git accuse OrderService.java`",
      "`git log --lines OrderService.java`",
      "`git show --authors OrderService.java`"
    ],
    "correct": 0,
    "hint": "Dù tên lệnh nghe hơi 'đổ lỗi', nó là công cụ tra cứu ngữ cảnh lịch sử từng dòng code cực kỳ hữu ích (cũng thường hiển thị tích hợp trong VS Code / IntelliJ GitLens).",
    "explanations": {
      "0": "Chính xác! `git blame <file>` (hoặc `git annotate <file>`) hiển thị từng dòng trong tệp cùng với commit ID, tên tác giả và thời gian sửa đổi gần nhất của dòng đó — giúp bạn tìm nhanh người hiểu rõ đoạn logic này hoặc xem lý do dòng code được viết (kết hợp `git show <hash>`).",
      "1": "Sai. Không có lệnh `git accuse`.",
      "2": "Sai. `git log -p <file>` xem lịch sử các commit của file, không in chú thích gắn cạnh từng dòng code như `blame`.",
      "3": "Sai. Không có cờ `--authors` trên `git show`."
    },
    "keyTakeaway": "`git blame <file>` hiển thị chi tiết tác giả và commit đã chỉnh sửa gần nhất cho từng dòng mã nguồn."
  },
  {
    "id": 55,
    "topic": "Shallow Clones for CI/CD Pipelines (`--depth 1`)",
    "question": "In CI/CD pipelines (like GitHub Actions or Jenkins) cloning a huge 10-year-old repository, why is `git clone --depth 1 <url>` frequently used?",
    "options": [
      "It creates a 'shallow clone' downloading only the latest single commit snapshot instead of the entire 10-year history, dramatically speeding up builds and saving bandwidth",
      "It clones only 1 single file from the repository",
      "It skips installing Node.js dependencies",
      "It restricts the repository to 1 developer"
    ],
    "correct": 0,
    "hint": "Máy chủ build CI/CD thường chỉ cần biên dịch và chạy test phiên bản mới nhất chứ không cần tải hàng gigabyte lịch sử commit từ 10 năm trước!",
    "explanations": {
      "0": "Chính xác! Cờ `--depth 1` tạo một **Shallow Clone** (bản sao nông), chỉ tải lịch sử có độ sâu là 1 commit mới nhất. Điều này giúp giảm thời gian clone các dự án lớn (monorepo) từ vài phút xuống vài giây trong hệ thống CI/CD.",
      "1": "Sai. Vẫn tải toàn bộ các file ở snapshot mới nhất, chỉ cắt giảm lịch sử commit cũ.",
      "2": "Sai. Không liên quan tới `npm install`.",
      "3": "Sai. Không giới hạn số lập trình viên."
    },
    "keyTakeaway": "`git clone --depth 1` tạo Shallow Clone chỉ tải commit mới nhất, tối ưu hóa tốc độ và băng thông trong các quy trình CI/CD."
  },
  {
    "id": 56,
    "topic": "`.gitignore` Syntax Patterns",
    "question": "In a `.gitignore` file, what does the pattern `*.log` followed by `!important.log` mean?",
    "options": [
      "Ignore all files ending with `.log` EXCEPT `important.log` (the `!` negates the ignore pattern)",
      "Ignore only `important.log` and track all other `.log` files",
      "Delete all `.log` files from disk immediately",
      "Raise a syntax error because `!` is forbidden in `.gitignore`"
    ],
    "correct": 0,
    "hint": "Dấu chấm than `!` ở đầu dòng trong `.gitignore` đóng vai trò phủ định (ngoại lệ), cho phép giữ lại một file cụ thể dù nằm trong quy tắc bỏ qua.",
    "explanations": {
      "0": "Chính xác! Trong `.gitignore`, `*.log` bỏ qua mọi file đuôi `.log`, còn tiền tố `!` (negation pattern) ở dòng `!important.log` tạo ngoại lệ để vẫn theo dõi riêng file `important.log`. (Lưu ý: nếu thư mục cha đã bị ignore hoàn toàn thì không thể dùng `!` để bỏ ignore file con bên trong thư mục đó).",
      "1": "Sai. Ý nghĩa bị đảo ngược hoàn toàn.",
      "2": "Sai. `.gitignore` chỉ ngăn Git track, không bao giờ xóa file trên đĩa.",
      "3": "Sai. Dấu `!` là cú pháp tiêu chuẩn hợp lệ của `.gitignore`."
    },
    "keyTakeaway": "Trong `.gitignore`, dấu `!` ở đầu dòng dùng để tạo ngoại lệ (negate) không bỏ qua một tệp cụ thể."
  },
  {
    "id": 57,
    "topic": "Pull Request (PR) Merge Strategies on GitHub",
    "question": "On platforms like GitHub/GitLab, what are the 3 standard strategies to complete a Pull Request, and what does 'Squash and Merge' do?",
    "options": [
      "Create a Merge Commit, Squash and Merge, and Rebase and Merge; 'Squash and Merge' combines all commits from the feature branch into a SINGLE clean commit on the target branch",
      "'Squash and Merge' deletes the target `main` branch",
      "'Squash and Merge' compresses files into a `.tar.gz` archive",
      "GitHub only allows Fast-Forward merges and has no other options"
    ],
    "correct": 0,
    "hint": "Thay vì giữ lại 20 commit nhỏ nhặt của nhánh feature trên `main`, 'Squash and Merge' ép gọn tất cả thành đúng 1 commit đại diện cho cả tính năng/PR đó.",
    "explanations": {
      "0": "Chính xác! Ba chiến lược PR trên GitHub: 1) **Create a merge commit** (giữ nguyên toàn bộ commit con + 1 merge commit `--no-ff`); 2) **Squash and merge** (gom tất cả commit trong PR thành duy nhất 1 commit sạch trên `main`, rất phổ biến cho team lớn); 3) **Rebase and merge** (đặt nối tiếp từng commit của PR thẳng lên đỉnh `main`).",
      "1": "Sai. Nó bảo vệ và cập nhật nhánh `main`, không bao giờ xóa `main`.",
      "2": "Sai. Không nén thành `.tar.gz`.",
      "3": "Sai. GitHub hỗ trợ cả 3 chiến lược hợp nhất PR."
    },
    "keyTakeaway": "'Squash and Merge' gộp toàn bộ các commit trong Pull Request thành một commit duy nhất sạch sẽ trên nhánh đích."
  },
  {
    "id": 58,
    "topic": "Git Workflows: Git Flow vs Trunk-Based Development",
    "question": "How does 'GitHub Flow' (or Trunk-Based Development) simplify 'Git Flow'?",
    "options": [
      "It keeps a single permanent long-lived `main` branch that is always deployable, using short-lived feature branches merged back via Pull Requests — avoiding separate long-lived `develop` and `release` branches",
      "It forbids the use of any branches and forces everyone to commit directly to `main` with no reviews",
      "It requires 12 permanent branches for every feature",
      "It replaces Git with FTP file uploads"
    ],
    "correct": 0,
    "hint": "Git Flow truyền thống có `main`, `develop`, `feature/*`, `release/*`, `hotfix/*` (phức tạp, hợp phần mềm đóng gói theo phiên bản). GitHub Flow tinh giản chỉ xoay quanh `main` + nhánh feature ngắn hạn -> PR -> Deploy liên tục (CI/CD).",
    "explanations": {
      "0": "Chính xác! GitHub Flow là mô hình hiện đại nhẹ nhàng phù hợp với Web/Microservices triển khai liên tục (Continuous Deployment): nhánh `main` luôn ổn định sẵn sàng deploy; mọi tính năng/sửa lỗi đều tách nhánh ngắn từ `main`, mở Pull Request kiểm tra CI & Review code rồi merge thẳng về `main`.",
      "1": "Sai. GitHub Flow vẫn dùng feature branches và Pull Requests bắt buộc để review code, không commit bừa trực tiếp lên `main`.",
      "2": "Sai. Ngược lại, nó giảm tối đa số lượng nhánh sống lâu năm.",
      "3": "Sai. Không dùng FTP."
    },
    "keyTakeaway": "GitHub Flow dùng một nhánh `main` duy nhất luôn sẵn sàng triển khai kết hợp các nhánh tính năng ngắn hạn và Pull Request."
  },
  {
    "id": 59,
    "topic": "Conventional Commits Standard",
    "question": "In the widely adopted 'Conventional Commits' specification (e.g. `feat(auth): add JWT refresh token`), what do prefixes like `feat:`, `fix:`, and `chore:` enable?",
    "options": [
      "Clear human-readable commit intent AND automated generation of changelogs and Semantic Versioning (MAJOR.MINOR.PATCH) bumps",
      "Faster network upload speeds on Wi-Fi",
      "Automatic translation of Java code into Python",
      "Bypassing merge conflicts automatically"
    ],
    "correct": 0,
    "hint": "`feat:` tương ứng tăng phiên bản MINOR (`1.1.0`), `fix:` tương ứng tăng PATCH (`1.0.1`), và `BREAKING CHANGE:` tương ứng tăng MAJOR (`2.0.0`)!",
    "explanations": {
      "0": "Chính xác! Chuẩn Conventional Commits (`<type>(<scope>): <description>`) giúp lịch sử commit cực kỳ mạch lạc và cho phép các công cụ tự động hóa (như `semantic-release`, `standard-version`) tự sinh file `CHANGELOG.md` và quyết định tăng số phiên bản SemVer chính xác.",
      "1": "Sai. Quy ước đặt tên thông điệp commit không ảnh hưởng tốc độ Wi-Fi.",
      "2": "Sai. Không biên dịch chéo ngôn ngữ.",
      "3": "Sai. Không tự giải quyết merge conflict."
    },
    "keyTakeaway": "Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`) chuẩn hóa lịch sử commit và hỗ trợ tự động tạo Changelog & Semantic Versioning."
  },
  {
    "id": 60,
    "topic": "Recovering Deleted Branches & Git Hooks",
    "question": "What are 'Git Hooks' (located in `.git/hooks/`, often managed via tools like Husky in React/Node projects)?",
    "options": [
      "Custom scripts triggered automatically by Git at specific lifecycle events (such as `pre-commit` to run linters/formatters or `pre-push` to run tests before allowing a commit or push)",
      "Physical metal hooks used to mount server racks",
      "React Hooks like `useState` and `useEffect` stored inside `.git`",
      "Remote tracking branches on GitLab"
    ],
    "correct": 0,
    "hint": "Rất phổ biến trong các dự án React/Spring Boot thực tế: chặn commit ngay lập tức nếu code bị lỗi ESLint/Prettier hoặc không pass unit test!",
    "explanations": {
      "0": "Chính xác! Git Hooks là các kịch bản (scripts) tự động chạy khi xảy ra sự kiện Git cục bộ hoặc phía server. Ví dụ: hook `pre-commit` (thường cài qua Husky + lint-staged trong dự án React) chạy kiểm tra ESLint/Prettier trước khi cho phép hoàn tất commit; hook `commit-msg` kiểm tra chuẩn Conventional Commits.",
      "1": "Sai. Đây là câu đùa nghĩa đen về móc treo phần cứng.",
      "2": "Sai. React Hooks là API giao diện của ReactJS, hoàn toàn khác với Git Hooks của hệ thống quản lý phiên bản.",
      "3": "Sai. Không phải remote branch."
    },
    "keyTakeaway": "Git Hooks (như `pre-commit`, `commit-msg`, `pre-push`) tự động hóa việc kiểm tra chất lượng code (lint, format, test) ngay trước khi commit hoặc push."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_12_DATA;
}
