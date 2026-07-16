// ===================================================
// EMPLOYEE LIST (from photo, 20 workers)
// ===================================================
const DEFAULT_EMPLOYEES = [
  { id: 1,  name: "Форош М.",       role: "Співробітник", rate: 105 },
  { id: 2,  name: "Відоненко О.",   role: "Співробітник", rate: 105 },
  { id: 3,  name: "Бондарев С.",    role: "Співробітник", rate: 105 },
  { id: 4,  name: "Бублик С.",      role: "Співробітник", rate: 105 },
  { id: 5,  name: "Бублик А.",      role: "Співробітник", rate: 105 },
  { id: 6,  name: "Бондар Н.",      role: "Співробітник", rate: 105 },
  { id: 7,  name: "Берегова Н.",    role: "Співробітник", rate: 105 },
  { id: 8,  name: "Бабаян Р.",      role: "Співробітник", rate: 105 },
  { id: 9,  name: "Жилемірій О.",   role: "Співробітник", rate: 105 },
  { id: 10, name: "Кічітьва Г.",    role: "Співробітник", rate: 105 },
  { id: 11, name: "Литовенко І.",   role: "Співробітник", rate: 105 },
  { id: 12, name: "Лучка В.",       role: "Співробітник", rate: 105 },
  { id: 13, name: "Лисенко М.",     role: "Співробітник", rate: 105 },
  { id: 14, name: "Лисенко Н.",     role: "Співробітник", rate: 105 },
  { id: 15, name: "Міллер Д.",      role: "Співробітник", rate: 105 },
  { id: 16, name: "Рекало І.",      role: "Співробітник", rate: 105 },
  { id: 17, name: "Бавнісенко В.",  role: "Співробітник", rate: 105 },
  { id: 18, name: "Фірсов Р.",      role: "Співробітник", rate: 105 },
  { id: 19, name: "Шануєва М.",     role: "Співробітник", rate: 105 },
  { id: 20, name: "Філопов С.",     role: "Співробітник", rate: 105 }
];

// Pre-populated attendance logs directly from the uploaded schedule sheet photo
const PRE_POPULATED_ATTENDANCE = {
  // Monday 13.07
  "2026-07-13": {
    "1": { status: "Arrived", clockIn: "06:20", clockOut: "08:50", hours: 2.5 },
    "2": { status: "Arrived", clockIn: "07:30", clockOut: "19:00", hours: 11.5 },
    "3": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "4": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "5": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "6": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "7": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "8": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "9": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "10": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "11": { status: "Arrived", clockIn: "07:30", clockOut: "19:30", hours: 12.0 },
    "12": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "13": { status: "Arrived", clockIn: "07:30", clockOut: "19:00", hours: 11.5 },
    "14": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "15": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "16": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "17": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "18": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "19": { status: "Arrived", clockIn: "07:00", clockOut: "19:00", hours: 12.0 },
    "20": { status: "Arrived", clockIn: "16:30", clockOut: "19:30", hours: 3.0 }
  },
  // Tuesday 14.07 (Today)
  "2026-07-14": {
    "1": { status: "Working", clockIn: "06:20", clockOut: "", hours: 0 },
    "2": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "3": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "4": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "5": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "6": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "7": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "8": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "9": { status: "Arrived", clockIn: "07:00", clockOut: "15:15", hours: 8.25 },
    "10": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "11": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "12": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "13": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "14": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "15": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "16": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "17": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "18": { status: "Absent", clockIn: "", clockOut: "", hours: 0 },
    "19": { status: "Working", clockIn: "07:00", clockOut: "", hours: 0 },
    "20": { status: "Absent", clockIn: "", clockOut: "", hours: 0 }
  }
};

const DEFAULT_STATE = {
  employees: DEFAULT_EMPLOYEES,
  attendance: PRE_POPULATED_ATTENDANCE,
  payouts: [],
  activeTab: "dashboard",
  selectedDate: "2026-07-14",
  currentUser: null
};

let state = null;
let selectedLoginUserId = null;

// ===================================================
// HELPERS
// ===================================================
function getInitials(name) {
  if (!name) return "??";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

// ===================================================
// STATE / STORAGE
// ===================================================
function initState() {
  const stored = localStorage.getItem("staff_logic_state_v3");
  if (stored) {
    try {
      state = JSON.parse(stored);
      // Migration: Update Бублик Н. to Бублик А. in cached state
      if (state.employees) {
        state.employees.forEach(emp => {
          if (emp.id === 5 && emp.name === "Бублик Н.") {
            emp.name = "Бублик А.";
          }
        });
      }
    } catch (e) {
      state = null;
    }
  }
  if (!state) {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
  }
}

function saveState() {
  state.lastModified = Date.now();
  localStorage.setItem("staff_logic_state_v3", JSON.stringify(state));
  pushStateToCloud();
}

// ===================================================
// CLOUD SYNCHRONIZATION (kvdb.io Free Serverless KV)
// ===================================================
// Унікальне сховище для вашої команди. Працює автоматично без серверів та налаштувань.
const KV_URL = "https://kvdb.io/maksim_logic_db_2026_v4/state";

function updateSyncStatus(status) {
  const icon = document.getElementById("sync-status-icon");
  const text = document.getElementById("sync-status-text");
  if (!icon || !text) return;

  icon.classList.remove("animate-spin-custom", "text-error", "text-primary");
  text.classList.remove("text-error", "text-primary");

  if (status === "syncing") {
    icon.classList.add("animate-spin-custom", "text-primary");
    text.classList.add("text-primary");
    text.textContent = "Синхро...";
  } else if (status === "synced") {
    text.textContent = "Хмара";
  } else if (status === "error") {
    icon.classList.add("text-error");
    text.classList.add("text-error");
    text.textContent = "Помилка";
  }
}

async function pushStateToCloud() {
  updateSyncStatus("syncing");
  try {
    // Preserve local identity configs from cloud propagation
    const stateCopy = JSON.parse(JSON.stringify(state));
    delete stateCopy.currentUser;
    delete stateCopy.activeTab;

    const res = await fetch(KV_URL, {
      method: "POST",
      body: JSON.stringify(stateCopy)
    });
    if (!res.ok) throw new Error("Cloud push failed");
    updateSyncStatus("synced");
  } catch (e) {
    console.error(e);
    updateSyncStatus("error");
  }
}

async function pullStateFromCloud() {
  updateSyncStatus("syncing");
  try {
    const res = await fetch(KV_URL);
    if (!res.ok) {
      if (res.status === 404) {
        // Uninitialized cloud node, send current local database state
        await pushStateToCloud();
        return;
      }
      throw new Error("Cloud pull failed");
    }
    
    const cloudState = await res.json();
    if (cloudState && cloudState.lastModified > (state.lastModified || 0)) {
      const currentUser = state.currentUser;
      const activeTab = state.activeTab;

      state = cloudState;
      state.currentUser = currentUser;
      state.activeTab = activeTab;

      localStorage.setItem("staff_logic_state_v3", JSON.stringify(state));
      
      // Refresh visible tab elements immediately
      switchTab(state.activeTab);
    }
    updateSyncStatus("synced");
  } catch (e) {
    console.error(e);
    updateSyncStatus("error");
  }
}

async function initSync() {
  await pullStateFromCloud();

  // Auto update polling every 8 seconds if page is focused
  setInterval(async () => {
    if (document.visibilityState === "visible") {
      await pullStateFromCloud();
    }
  }, 8000);
}




// ===================================================
// LOGIN / AUTH
// ===================================================
function checkLogin() {
  const loginScreen = document.getElementById("login-screen");
  const appHeader = document.getElementById("app-header");
  const contentArea = document.getElementById("content-area");
  const bottomNav = document.getElementById("bottom-nav");

  const storedUserId = localStorage.getItem("staff_logic_current_user_id");
  if (storedUserId) {
    state.currentUser = parseInt(storedUserId);
  }

  if (state.currentUser === null || state.currentUser === undefined) {
    populateLoginList();
    loginScreen.classList.remove("hidden");
    if (appHeader) appHeader.classList.add("hidden");
    if (contentArea) contentArea.classList.add("hidden");
    if (bottomNav) bottomNav.classList.add("hidden");
  } else {
    loginScreen.classList.add("hidden");
    if (appHeader) appHeader.classList.remove("hidden");
    if (contentArea) contentArea.classList.remove("hidden");
    if (bottomNav) bottomNav.classList.remove("hidden");
    renderUserHeader();
    switchTab(state.activeTab || "dashboard");
  }
}

function populateLoginList() {
  const list = document.getElementById("login-employees-list");
  if (!list) return;
  
  list.innerHTML = state.employees.map(emp => {
    const initials = getInitials(emp.name);
    return `
      <div onclick="selectLoginEmployee(${emp.id})" id="login-item-${emp.id}" class="login-item flex items-center justify-between p-sm rounded-xl cursor-pointer hover:bg-surface-container transition-all duration-150 border border-transparent">
        <div class="flex items-center gap-sm">
          <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">${initials}</div>
          <div class="flex flex-col min-w-0">
            <span class="font-body-lg text-body-lg text-on-surface truncate font-semibold">${emp.name}</span>
            <span class="font-label-md text-label-md text-on-surface-variant">${emp.role}</span>
          </div>
        </div>
        <span class="material-symbols-outlined text-primary opacity-0 check-icon transition-opacity duration-150">check_circle</span>
      </div>`;
  }).join("");
}

function selectLoginEmployee(empId) {
  selectedLoginUserId = empId;
  
  document.querySelectorAll(".login-item").forEach(item => {
    item.classList.remove("bg-secondary-container", "text-on-secondary-container", "border-primary/20");
    const icon = item.querySelector(".check-icon");
    if (icon) {
      icon.classList.remove("opacity-100");
      icon.classList.add("opacity-0");
    }
  });

  const selectedItem = document.getElementById(`login-item-${empId}`);
  if (selectedItem) {
    selectedItem.classList.add("bg-secondary-container", "text-on-secondary-container", "border-primary/20");
    const icon = selectedItem.querySelector(".check-icon");
    if (icon) {
      icon.classList.remove("opacity-0");
      icon.classList.add("opacity-100");
    }
  }

  const submitBtn = document.getElementById("login-submit-btn");
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

function filterLoginEmployees() {
  const searchVal = document.getElementById("login-search").value.toLowerCase().trim();
  state.employees.forEach(emp => {
    const item = document.getElementById(`login-item-${emp.id}`);
    if (item) {
      if (emp.name.toLowerCase().includes(searchVal) || emp.role.toLowerCase().includes(searchVal)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  });
}

function confirmLogin() {
  if (!selectedLoginUserId) return;
  state.currentUser = selectedLoginUserId;
  localStorage.setItem("staff_logic_current_user_id", selectedLoginUserId);
  saveState();
  checkLogin();
}

// ===================================================
// USER HEADER
// ===================================================
function renderUserHeader() {
  const user = state.employees.find(e => e.id === state.currentUser);
  if (!user) return;
  const badge = document.getElementById("header-badge");
  const uname = document.getElementById("header-username");
  if (badge) badge.textContent = getInitials(user.name);
  if (uname) uname.textContent = user.name;
}

// ===================================================
// TAB NAVIGATION  (no jitter — single fixed header, single content div)
// ===================================================
function switchTab(tabId) {
  state.activeTab = tabId;
  saveState();

  const titles = {
    dashboard: "Staff Logic",
    schedule: "Staff Logic",
    calculator: "Калькулятор"
  };
  const headerTitle = document.getElementById("header-title");
  if (headerTitle) headerTitle.textContent = titles[tabId] || "Staff Logic";

  document.querySelectorAll(".screen-view").forEach(s => s.classList.add("hidden"));
  const active = document.getElementById(`screen-${tabId}`);
  if (active) active.classList.remove("hidden");

  renderBottomNav();

  switch (tabId) {
    case "dashboard":   renderDashboard(); break;
    case "schedule":    renderSchedule(); break;
    case "calculator":  renderCalculator(); break;
  }
}

// ===================================================
// BOTTOM NAV (Completely static and symmetrical - NO JITTER)
// ===================================================
function renderBottomNav() {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;

  const tabs = [
    { id: "dashboard",   label: "Головна",     icon: "home" },
    { id: "schedule",    label: "Графік",       icon: "calendar_month" },
    { id: "calculator",  label: "Калькулятор",  icon: "calculate" }
  ];

  nav.innerHTML = tabs.map(tab => {
    const isActive = state.activeTab === tab.id;
    const activeTextClass = isActive ? "text-on-surface font-semibold" : "text-on-surface-variant";
    const activeIconContainerClass = isActive 
      ? "bg-secondary-container text-on-secondary-container rounded-full px-6 py-1" 
      : "px-6 py-1";
    const fillSettings = isActive ? "'FILL' 1" : "'FILL' 0";

    return `
      <a href="#" onclick="switchTab('${tab.id}'); return false;"
         class="flex flex-1 flex-col items-center justify-center gap-1 min-w-0 select-none">
        <div class="flex items-center justify-center transition-all duration-200 active:scale-95 ${activeIconContainerClass}">
          <span class="material-symbols-outlined" style="font-variation-settings: ${fillSettings}">${tab.icon}</span>
        </div>
        <span class="font-label-md text-label-md ${activeTextClass} truncate w-full text-center transition-colors duration-200">${tab.label}</span>
      </a>`;
  }).join("");
}

// ===================================================
// DASHBOARD
// ===================================================
function renderDashboard() {
  const todayAtt = state.attendance[state.selectedDate] || {};
  let onShift = 0, absent = 0;

  state.employees.forEach(emp => {
    const rec = todayAtt[emp.id];
    if (rec && (rec.status === "Working" || rec.status === "Arrived")) {
      onShift++;
    } else {
      absent++;
    }
  });

  document.getElementById("dashboard-on-shift").textContent = onShift;
  document.getElementById("dashboard-absent").textContent = absent;

  const feed = document.getElementById("dashboard-activity-feed");
  if (!feed) return;

  let items = [];
  Object.keys(todayAtt).forEach(empId => {
    const emp = state.employees.find(e => e.id == empId);
    if (!emp) return;
    const rec = todayAtt[empId];
    const initials = getInitials(emp.name);
    if (rec.status === "Arrived") {
      items.push({ initials, name: emp.name, action: `Вийшов о ${rec.clockOut}`, icon: "logout", cls: "text-error", bg: "bg-secondary-container text-on-secondary-container" });
      items.push({ initials, name: emp.name, action: `Увійшов о ${rec.clockIn}`, icon: "login", cls: "text-on-surface-variant", bg: "bg-secondary-container text-on-secondary-container" });
    } else if (rec.status === "Working") {
      items.push({ initials, name: emp.name, action: `Увійшов о ${rec.clockIn}`, icon: "login", cls: "text-on-surface-variant", bg: "bg-secondary-container text-on-secondary-container" });
    }
  });

  state.payouts.slice(0, 2).forEach(p => {
    items.push({ initials: getInitials(p.employeeName), name: p.employeeName, action: `Виплата: ${p.amount} грн`, icon: "payments", cls: "text-on-surface-variant", bg: "bg-tertiary-container text-on-tertiary-container" });
  });

  if (items.length === 0) {
    feed.innerHTML = `<div class="p-md text-center text-on-surface-variant italic">Немає активностей за сьогодні</div>`;
    return;
  }

  feed.innerHTML = items.slice(0, 4).map((item, i, arr) => `
    <div class="flex items-center gap-md p-md ${i < arr.length - 1 ? "border-b border-outline-variant/50" : ""}">
      <div class="w-10 h-10 rounded-full ${item.bg} flex items-center justify-center font-bold text-sm flex-shrink-0">${item.initials}</div>
      <div class="flex flex-col min-w-0">
        <span class="font-body-lg text-body-lg text-on-surface truncate font-semibold">${item.name}</span>
        <span class="font-label-md text-label-md ${item.cls} flex items-center gap-1">
          <span class="material-symbols-outlined text-[14px]">${item.icon}</span> ${item.action}
        </span>
      </div>
    </div>`).join("");
}

// ===================================================
// SCHEDULE (Horizontal spreadsheet table populated dynamically)
// ===================================================
const WEEK_DAYS = [
  { label: "Пн", day: 13, dateStr: "2026-07-13" },
  { label: "Вв", day: 14, dateStr: "2026-07-14" },
  { label: "Ср", day: 15, dateStr: "2026-07-15" },
  { label: "Чт", day: 16, dateStr: "2026-07-16" },
  { label: "Пт", day: 17, dateStr: "2026-07-17" },
  { label: "Сб", day: 18, dateStr: "2026-07-18" },
  { label: "Нд", day: 19, dateStr: "2026-07-19" }
];

function renderSchedule() {
  // Weekly hours summary for the logged-in user
  const user = state.employees.find(e => e.id === state.currentUser);
  let totalHours = 0;
  WEEK_DAYS.forEach(d => {
    const dayData = state.attendance[d.dateStr] || {};
    const rec = dayData[state.currentUser];
    if (rec && rec.status === "Arrived") {
      totalHours += rec.hours || 0;
    }
  });

  const titleEl = document.getElementById("hours-summary-title");
  const valEl = document.getElementById("hours-summary-value");
  if (titleEl && user) titleEl.textContent = `Всього ваших годин за тиждень (${user.name})`;
  if (valEl) valEl.textContent = `${totalHours.toFixed(1)} год.`;

  // Render spreadsheet table rows
  const tbody = document.getElementById("schedule-table-body");
  if (!tbody) return;

  tbody.innerHTML = state.employees.map(emp => {
    const isCurrentUser = emp.id === state.currentUser;
    // Tint rows of logged in user to stand out visually
    const stickyBgClass = isCurrentUser ? "bg-blue-50" : "bg-white";
    const nameColorClass = isCurrentUser ? "text-primary font-bold" : "text-on-surface";
    const youSuffix = isCurrentUser ? " <span class='text-[9px] bg-primary text-on-primary px-1 rounded'>Ви</span>" : "";

    let cellsHtml = "";
    WEEK_DAYS.forEach(d => {
      const dayData = state.attendance[d.dateStr] || {};
      const rec = dayData[emp.id] || { status: "Absent", clockIn: "", clockOut: "", hours: 0 };
      
      let arrivalText = "";
      let departureText = "";
      let hoursText = "";

      if (rec.status === "Absent") {
        arrivalText = "-";
        departureText = "-";
        hoursText = "-";
      } else if (rec.status === "Working") {
        arrivalText = rec.clockIn;
        departureText = "-";
        hoursText = "зміна";
      } else {
        arrivalText = rec.clockIn;
        departureText = rec.clockOut;
        hoursText = rec.hours % 1 === 0 ? rec.hours : rec.hours.toFixed(1);
      }

      cellsHtml += `
        <td onclick="openAttendanceModal(${emp.id}, '${d.dateStr}')" class="cursor-pointer hover:bg-primary-container/10 py-3 border-b border-r border-outline-variant/40 text-center font-mono text-[10px] text-on-surface-variant">${arrivalText}</td>
        <td onclick="openAttendanceModal(${emp.id}, '${d.dateStr}')" class="cursor-pointer hover:bg-primary-container/10 py-3 border-b border-r border-outline-variant/40 text-center font-mono text-[10px] text-on-surface-variant">${departureText}</td>
        <td onclick="openAttendanceModal(${emp.id}, '${d.dateStr}')" class="cursor-pointer hover:bg-primary-container/10 py-3 border-b border-r border-outline-variant/40 text-center font-mono font-semibold text-[10px] ${rec.status === "Absent" ? "text-on-surface-variant" : "text-primary"}">${hoursText}</td>
      `;
    });

    return `
      <tr class="hover:bg-surface-container-low transition-colors">
        <!-- Row index column (sticky left, thin border separator, explicit border-b, compressed to 32px) -->
        <td class="py-3 border-b border-r border-outline-variant/80 sticky left-0 z-10 text-center text-[10px] ${stickyBgClass} text-on-surface-variant">${emp.id}.</td>
        <!-- Full name column (sticky left-32, thick border separator at the end, explicit border-b, compressed to 110px) -->
        <td class="px-2 py-3 border-b border-r-2 border-primary/20 sticky left-[32px] z-10 truncate ${stickyBgClass} ${nameColorClass} text-[11px]">${emp.name}${youSuffix}</td>
        <!-- Days data -->
        ${cellsHtml}
      </tr>
    `;
  }).join("");
}

// ===================================================
// ATTENDANCE MODAL
// ===================================================
let currentModalEmployeeId = null;
let currentModalDate = null;
let currentModalStatus = "Absent";

function openAttendanceModal(employeeId, dateStr) {
  currentModalEmployeeId = employeeId;
  currentModalDate = dateStr;

  const emp = state.employees.find(e => e.id === employeeId);
  if (!emp) return;

  const rec = (state.attendance[dateStr] || {})[employeeId] || { status: "Absent", clockIn: "09:00", clockOut: "18:00" };
  currentModalStatus = rec.status;

  const dateObj = WEEK_DAYS.find(d => d.dateStr === dateStr);
  const dateLabel = dateObj ? `${dateObj.day}.07 (${dateObj.label})` : dateStr;
  document.getElementById("modal-employee-name").textContent = `${emp.name} (${dateLabel})`;

  document.getElementById("modal-clock-in").value = rec.clockIn || "09:00";
  document.getElementById("modal-clock-out").value = rec.clockOut || "18:00";
  updateModalStatusButtons();

  const modal = document.getElementById("attendance-modal");
  const content = document.getElementById("attendance-modal-content");
  modal.classList.remove("hidden");
  requestAnimationFrame(() => {
    content.classList.remove("translate-y-full");
    content.classList.add("translate-y-0");
  });
}

// ===================================================
// ATTENDANCE SAVE & CALCULATE
// ===================================================
function closeAttendanceModal() {
  const modal = document.getElementById("attendance-modal");
  const content = document.getElementById("attendance-modal-content");
  content.classList.remove("translate-y-0");
  content.classList.add("translate-y-full");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function setModalStatus(status) {
  currentModalStatus = status;
  updateModalStatusButtons();
}

function updateModalStatusButtons() {
  const base = "border border-outline-variant py-sm rounded-lg font-body-md text-on-surface flex flex-col items-center gap-1 active:scale-95 transition-all duration-200";
  document.getElementById("modal-status-absent").className = base + (currentModalStatus === "Absent" ? " bg-error-container border-error text-error font-semibold" : "");
  document.getElementById("modal-status-arrived").className = base + (currentModalStatus === "Arrived" ? " bg-secondary-container border-primary text-primary font-semibold" : "");
  document.getElementById("modal-status-working").className = base + (currentModalStatus === "Working" ? " bg-secondary-container border-primary text-primary font-semibold" : "");

  const timeInputs = document.getElementById("modal-time-inputs");
  const clockOutContainer = document.getElementById("modal-clock-out-container");
  if (currentModalStatus === "Absent") {
    timeInputs.classList.add("hidden");
  } else {
    timeInputs.classList.remove("hidden");
    if (currentModalStatus === "Working") {
      clockOutContainer.classList.add("hidden");
    } else {
      clockOutContainer.classList.remove("hidden");
    }
  }
}

function saveAttendanceModal() {
  if (!currentModalEmployeeId || !currentModalDate) return;
  const clockIn = document.getElementById("modal-clock-in").value;
  const clockOut = document.getElementById("modal-clock-out").value;
  let hours = 0;

  if (currentModalStatus === "Arrived" && clockIn && clockOut) {
    const [inH, inM] = clockIn.split(":").map(Number);
    const [outH, outM] = clockOut.split(":").map(Number);
    let diff = (outH * 60 + outM) - (inH * 60 + inM);
    if (diff < 0) diff += 1440;
    hours = diff / 60;
  }

  if (!state.attendance[currentModalDate]) state.attendance[currentModalDate] = {};
  state.attendance[currentModalDate][currentModalEmployeeId] = {
    status: currentModalStatus,
    clockIn: currentModalStatus !== "Absent" ? clockIn : "",
    clockOut: currentModalStatus === "Arrived" ? clockOut : "",
    hours
  };

  saveState();
  renderSchedule();
  closeAttendanceModal();
}

// ===================================================
// CALCULATOR
// ===================================================
function renderCalculator() {
  const user = state.employees.find(e => e.id === state.currentUser);
  const rate = user ? user.rate : 105;
  document.getElementById("calculator-base-rate").textContent = rate;
  autoFillHoursFromSchedule();
}

function autoFillHoursFromSchedule() {
  const hoursInput = document.getElementById("hoursInput");
  if (!hoursInput) return;

  const todayAtt = state.attendance[state.selectedDate] || {};
  const rec = todayAtt[state.currentUser];
  if (rec && rec.status === "Arrived") {
    hoursInput.value = rec.hours || 0;
  } else {
    hoursInput.value = "0";
  }
  calculate();
}

function calculate() {
  const hoursInput = document.getElementById("hoursInput");
  if (!hoursInput) return;

  const user = state.employees.find(e => e.id === state.currentUser);
  const rate = user ? user.rate : 105;
  const hours = parseFloat(hoursInput.value) || 0;
  const amount = hours * rate;

  const card = document.getElementById("resultCard");
  if (card) { card.style.transform = "scale(0.98)"; card.style.opacity = "0.8"; }

  setTimeout(() => {
    document.getElementById("resHours").textContent = hours;
    document.getElementById("resAmount").textContent = Number.isInteger(amount) ? amount : amount.toFixed(2);
    if (card) { card.style.transform = "scale(1)"; card.style.opacity = "1"; }
  }, 150);
}

function savePayout() {
  const hoursInput = document.getElementById("hoursInput");
  if (!hoursInput) return;

  const user = state.employees.find(e => e.id === state.currentUser);
  if (!user) return;

  const hours = parseFloat(hoursInput.value) || 0;
  if (hours <= 0) return;

  const amount = hours * user.rate;
  state.payouts.unshift({ id: Date.now(), employeeId: user.id, employeeName: user.name, date: state.selectedDate, hours, rate: user.rate, amount });
  saveState();
  alert(`✅ Виплату для ${user.name} на суму ${amount} грн збережено!`);
  hoursInput.value = "0";
  calculate();
}

// ===================================================
// BOOT
// ===================================================
document.addEventListener("DOMContentLoaded", () => {
  initState();
  checkLogin();
  initSync();

  const hoursInput = document.getElementById("hoursInput");
  if (hoursInput) {
    hoursInput.addEventListener("focus", function() { this.select(); });
    hoursInput.addEventListener("input", calculate);
  }
});
