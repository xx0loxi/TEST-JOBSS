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

// ===================================================
// TIME SLOTS DEFINITION (21 Slots from 07:00 to 19:00)
// ===================================================
const TIME_SLOTS = [
  { id: 1,  time: "07:00 – 08:00", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 2,  time: "08:00 – 08:10", type: "break", duration: 0.166, title: "Перерва" },
  { id: 3,  time: "08:10 – 09:10", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 4,  time: "09:10 – 09:20", type: "break", duration: 0.166, title: "Перерва" },
  { id: 5,  time: "09:20 – 10:20", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 6,  time: "10:20 – 10:30", type: "break", duration: 0.166, title: "Перерва" },
  { id: 7,  time: "10:30 – 11:30", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 8,  time: "11:30 – 11:50", type: "break", duration: 0.333, title: "Обідня перерва" },
  { id: 9,  time: "11:50 – 12:50", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 10, time: "12:50 – 13:00", type: "break", duration: 0.166, title: "Перерва" },
  { id: 11, time: "13:00 – 14:00", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 12, time: "14:00 – 14:10", type: "break", duration: 0.166, title: "Перерва" },
  { id: 13, time: "14:10 – 15:10", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 14, time: "15:10 – 15:20", type: "break", duration: 0.166, title: "Перерва" },
  { id: 15, time: "15:20 – 16:20", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 16, time: "16:20 – 16:30", type: "break", duration: 0.166, title: "Перерва" },
  { id: 17, time: "16:30 – 17:30", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 18, time: "17:30 – 17:40", type: "break", duration: 0.166, title: "Перерва" },
  { id: 19, time: "17:40 – 18:40", type: "work",  duration: 1.0, title: "Робочий час" },
  { id: 20, time: "18:40 – 18:50", type: "break", duration: 0.166, title: "Перерва" },
  { id: 21, time: "18:50 – 19:00", type: "break", duration: 0.166, title: "Перерва" }
];

// Pre-populated attendance logs directly from schedule photo
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
  // Tuesday 14.07
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
  slotAttendance: {},
  scheduleSubView: "slots",
  selectedSlotsEmployee: null,
  payouts: [],
  activeTab: "dashboard",
  currentWeekMondayStr: null,
  selectedDate: null,
  currentUser: null
};

let state = null;
let selectedLoginUserId = null;

// ===================================================
// DYNAMIC DATE & WEEK HELPERS
// ===================================================
function getTodayDateStr() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getMondayOfDate(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(date.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function formatDateToISO(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getWeekDaysForMonday(mondayStr) {
  const monday = new Date(mondayStr + "T00:00:00");
  const dayLabels = ["Пн", "Вв", "Ср", "Чт", "Пт", "Сб", "Нд"];
  const weekDays = [];
  const todayStr = getTodayDateStr();

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dateStr = formatDateToISO(d);
    
    weekDays.push({
      label: dayLabels[i],
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      dateStr: dateStr,
      isToday: dateStr === todayStr
    });
  }
  return weekDays;
}

function triggerWeekAnimation(direction) {
  const rangeEl = document.getElementById("current-week-range-text");
  const pillsEl = document.getElementById("slots-date-pills");
  const monthEl = document.getElementById("schedule-current-month");
  const animClass = direction > 0 ? "animate-slide-right" : "animate-slide-left";

  [rangeEl, pillsEl, monthEl].forEach(el => {
    if (el) {
      el.classList.remove("animate-slide-right", "animate-slide-left");
      void el.offsetWidth;
      el.classList.add(animClass);
      setTimeout(() => el.classList.remove(animClass), 300);
    }
  });
}

function triggerDaySlotAnimation() {
  const containerEl = document.getElementById("slots-container");
  if (containerEl) {
    containerEl.classList.remove("animate-slot-fade");
    void containerEl.offsetWidth;
    containerEl.classList.add("animate-slot-fade");
    setTimeout(() => containerEl.classList.remove("animate-slot-fade"), 300);
  }
}

function navigateWeek(direction) {
  const mondayStr = state.currentWeekMondayStr || formatDateToISO(getMondayOfDate(new Date()));
  const currentMonday = new Date(mondayStr + "T00:00:00");
  currentMonday.setDate(currentMonday.getDate() + (direction * 7));
  state.currentWeekMondayStr = formatDateToISO(currentMonday);
  
  const weekDays = getWeekDaysForMonday(state.currentWeekMondayStr);
  const todayInWeek = weekDays.find(d => d.isToday);
  
  if (todayInWeek) {
    state.selectedDate = todayInWeek.dateStr;
  } else {
    state.selectedDate = weekDays[0].dateStr;
  }
  
  saveState();
  triggerWeekAnimation(direction);
  triggerDaySlotAnimation();
  renderSlotsSchedule();
  renderSchedule();
}

function jumpToCurrentWeek() {
  state.currentWeekMondayStr = formatDateToISO(getMondayOfDate(new Date()));
  state.selectedDate = getTodayDateStr();
  saveState();
  triggerWeekAnimation(1);
  triggerDaySlotAnimation();
  renderSlotsSchedule();
  renderSchedule();
}

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

  const todayStr = getTodayDateStr();
  const todayMondayStr = formatDateToISO(getMondayOfDate(new Date()));

  if (!state.currentWeekMondayStr) {
    state.currentWeekMondayStr = todayMondayStr;
  }
  
  if (!state.selectedDate) {
    state.selectedDate = todayStr;
  }

  if (!state.slotAttendance) state.slotAttendance = {};
  if (!state.scheduleSubView) state.scheduleSubView = "slots";
  if (!state.selectedSlotsEmployee && state.currentUser) {
    state.selectedSlotsEmployee = state.currentUser;
  }
}

function saveState() {
  localStorage.setItem("staff_logic_state_v3", JSON.stringify(state));
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
    if (!state.selectedSlotsEmployee) {
      state.selectedSlotsEmployee = state.currentUser;
    }
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
  state.selectedSlotsEmployee = selectedLoginUserId;
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
// TAB NAVIGATION
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
    case "dashboard":
      renderDashboard();
      break;
    case "schedule":
      setScheduleSubView(state.scheduleSubView || "slots");
      renderSchedule();
      break;
    case "calculator":
      renderCalculator();
      break;
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
  const todayAtt = state.attendance[state.selectedDate || getTodayDateStr()] || {};
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
// SCHEDULE (Subviews: Hourly Slots & Spreadsheet Table)
// ===================================================
function setScheduleSubView(subView) {
  state.scheduleSubView = subView;
  saveState();

  const slotsEl = document.getElementById("subview-schedule-slots");
  const tableEl = document.getElementById("subview-schedule-table");
  const btnSlots = document.getElementById("btn-subview-slots");
  const btnTable = document.getElementById("btn-subview-table");
  const indicator = document.getElementById("subview-indicator");

  if (subView === "slots") {
    if (indicator) indicator.style.transform = "translateX(0%)";
    if (btnSlots) {
      btnSlots.classList.remove("text-on-surface-variant");
      btnSlots.classList.add("text-primary");
    }
    if (btnTable) {
      btnTable.classList.remove("text-primary");
      btnTable.classList.add("text-on-surface-variant");
    }

    if (tableEl) {
      tableEl.classList.add("hidden");
      tableEl.classList.remove("subview-active");
    }
    if (slotsEl) {
      slotsEl.classList.remove("hidden");
      requestAnimationFrame(() => {
        slotsEl.classList.add("subview-active");
      });
    }
    renderSlotsSchedule();
  } else {
    if (indicator) indicator.style.transform = "translateX(100%)";
    if (btnTable) {
      btnTable.classList.remove("text-on-surface-variant");
      btnTable.classList.add("text-primary");
    }
    if (btnSlots) {
      btnSlots.classList.remove("text-primary");
      btnSlots.classList.add("text-on-surface-variant");
    }

    if (slotsEl) {
      slotsEl.classList.add("hidden");
      slotsEl.classList.remove("subview-active");
    }
    if (tableEl) {
      tableEl.classList.remove("hidden");
      requestAnimationFrame(() => {
        tableEl.classList.add("subview-active");
      });
    }
  }
}

function getSlotStatuses(dateStr, empId) {
  if (!state.slotAttendance) state.slotAttendance = {};
  if (!state.slotAttendance[dateStr]) state.slotAttendance[dateStr] = {};
  
  if (!state.slotAttendance[dateStr][empId]) {
    const dayAtt = (state.attendance[dateStr] || {})[empId];
    const initial = {};
    if (dayAtt && dayAtt.status === "Absent") {
      TIME_SLOTS.forEach(s => { initial[s.id] = "missed"; });
    } else {
      // Default: slots 1..16 worked, slots 17..21 none
      TIME_SLOTS.forEach(s => {
        initial[s.id] = s.id <= 16 ? "worked" : "none";
      });
    }
    state.slotAttendance[dateStr][empId] = initial;
  }
  
  return state.slotAttendance[dateStr][empId];
}

function renderSlotsSchedule() {
  const mondayStr = state.currentWeekMondayStr || formatDateToISO(getMondayOfDate(new Date()));
  const weekDays = getWeekDaysForMonday(mondayStr);
  const dateStr = state.selectedDate || getTodayDateStr();
  const empId = state.selectedSlotsEmployee || state.currentUser || 1;

  // Render Month Header Label e.g. "ЛИПЕНЬ 2026"
  const monthsUaFull = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
  const currentMonthEl = document.getElementById("schedule-current-month");
  if (currentMonthEl && weekDays.length > 0) {
    const mainMonth = weekDays[3].month - 1; // Thursday month as anchor
    currentMonthEl.textContent = `${monthsUaFull[mainMonth]} ${weekDays[3].year}`;
  }

  // Render Week Range Text e.g. "20 Лип – 26 Лип 2026"
  const monday = new Date(mondayStr + "T00:00:00");
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const monthsUaShort = ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"];
  const rangeText = `${monday.getDate()} ${monthsUaShort[monday.getMonth()]} – ${sunday.getDate()} ${monthsUaShort[sunday.getMonth()]} ${sunday.getFullYear()}`;
  
  const rangeEl = document.getElementById("current-week-range-text");
  if (rangeEl) rangeEl.textContent = rangeText;

  const todayStr = getTodayDateStr();
  const isCurrentWeek = weekDays.some(d => d.dateStr === todayStr);
  const jumpBadge = document.getElementById("today-jump-badge");
  if (jumpBadge) {
    if (isCurrentWeek) {
      jumpBadge.classList.remove("hidden");
    } else {
      jumpBadge.classList.add("hidden");
    }
  }

  // 1. Render Date Pills with smooth active transitions
  const datePillsEl = document.getElementById("slots-date-pills");
  if (datePillsEl) {
    datePillsEl.innerHTML = weekDays.map(d => {
      const isActive = d.dateStr === dateStr;
      let cls = "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low";
      
      if (isActive) {
        cls = "bg-primary text-on-primary font-bold shadow-xs scale-[1.02]";
      } else if (d.isToday) {
        cls = "bg-secondary-container text-on-secondary-container font-semibold border-primary/40";
      }

      const todayBadge = d.isToday ? `<span class="block text-[8px] uppercase font-bold tracking-tight">Сьогодні</span>` : "";

      return `
        <button onclick="changeSlotsDate('${d.dateStr}')" class="px-3 py-1.5 rounded-xl text-xs flex-shrink-0 transition-all active:scale-95 text-center ${cls}">
          <div>${d.day}.${String(d.month).padStart(2, '0')} (${d.label})</div>
          ${todayBadge}
        </button>`;
    }).join("");
  }

  // 2. Render Custom Employee Button Badge & Name
  const emp = state.employees.find(e => e.id === empId) || state.employees[0];
  const empBadgeEl = document.getElementById("slots-emp-badge");
  const empNameEl = document.getElementById("slots-emp-name");
  if (empBadgeEl) empBadgeEl.textContent = getInitials(emp.name);
  if (empNameEl) {
    const isMe = emp.id === state.currentUser ? " (Ви)" : "";
    empNameEl.textContent = `${emp.name}${isMe}`;
  }

  // 3. Get slot statuses and sync summary stats
  const slotStatuses = getSlotStatuses(dateStr, empId);
  let workedHours = 0;

  TIME_SLOTS.forEach(slot => {
    if (slotStatuses[slot.id] === "worked" && slot.type === "work") {
      workedHours += slot.duration;
    }
  });

  const hoursEl = document.getElementById("slots-total-hours");
  if (hoursEl) hoursEl.textContent = `${workedHours.toFixed(1)} год`;

  // 4. Render 21 Time Slot Cards with crisp Material vector icons
  const containerEl = document.getElementById("slots-container");
  if (!containerEl) return;

  containerEl.innerHTML = TIME_SLOTS.map(slot => {
    const status = slotStatuses[slot.id] || "none";
    const isWork = slot.type === "work";

    let cardBorderClass = "bg-surface-container-lowest border border-outline-variant/60 border-l-4 border-l-outline-variant/60";
    let badgeHtml = "";

    if (status === "worked") {
      cardBorderClass = "bg-emerald-50/20 border border-outline-variant/50 border-l-4 border-l-emerald-500 shadow-xs";
      badgeHtml = `<span class="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex-shrink-0 items-center gap-1"><span class="material-symbols-outlined text-[12px] text-[#16a34a]">check_circle</span> Відпрацьовано</span>`;
    } else if (status === "missed") {
      cardBorderClass = "bg-rose-50/20 border border-outline-variant/50 border-l-4 border-l-rose-500 shadow-xs";
      badgeHtml = `<span class="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200 flex-shrink-0 items-center gap-1"><span class="material-symbols-outlined text-[12px] text-error">cancel</span> Пропуск</span>`;
    } else {
      badgeHtml = `<span class="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant flex-shrink-0 items-center gap-1"><span class="material-symbols-outlined text-[12px]">schedule</span> Очікує</span>`;
    }

    const typeIcon = isWork ? "work" : "coffee";
    const typeLabel = isWork ? "Робочий час (1 год)" : (slot.duration > 0.2 ? "Обідня перерва (20 хв)" : "Перерва (10 хв)");

    return `
      <div class="rounded-xl p-3 flex items-center justify-between transition-all ${cardBorderClass}">
        <div class="flex items-center gap-2.5 min-w-0 pr-xs">
          <div class="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-[10px] font-bold text-on-surface-variant flex-shrink-0">
            #${slot.id}
          </div>
          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs font-bold text-on-surface">${slot.time}</span>
            </div>
            <span class="text-[10px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
              <span class="material-symbols-outlined text-[13px]">${typeIcon}</span> ${typeLabel}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          ${badgeHtml}
          
          <div class="flex items-center bg-surface-container border border-outline-variant/80 rounded-xl p-0.5 gap-0.5">
            <button onclick="setSlotStatus(${slot.id}, 'worked')" title="Відпрацьовано" class="w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-all duration-150 active:scale-90 ${status === "worked" ? "bg-[#16a34a] text-white shadow-xs" : "text-on-surface-variant hover:bg-emerald-100/60 hover:text-emerald-700"}">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'wght' 700;">check</span>
            </button>
            <button onclick="setSlotStatus(${slot.id}, 'missed')" title="Пропуск" class="w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-all duration-150 active:scale-90 ${status === "missed" ? "bg-error text-white shadow-xs" : "text-on-surface-variant hover:bg-rose-100/60 hover:text-rose-700"}">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'wght' 700;">close</span>
            </button>
          </div>
        </div>
      </div>`;
  }).join("");
}

function changeSlotsDate(dateStr) {
  state.selectedDate = dateStr;
  saveState();
  triggerDaySlotAnimation();
  renderSlotsSchedule();
  renderSchedule();
}

function changeSlotsEmployee(empId) {
  state.selectedSlotsEmployee = parseInt(empId);
  saveState();
  triggerDaySlotAnimation();
  renderSlotsSchedule();
}

function setSlotStatus(slotId, status) {
  const dateStr = state.selectedDate || getTodayDateStr();
  const empId = state.selectedSlotsEmployee || state.currentUser || 1;
  const slotStatuses = getSlotStatuses(dateStr, empId);

  if (slotStatuses[slotId] === status) {
    slotStatuses[slotId] = "none";
  } else {
    slotStatuses[slotId] = status;
  }

  syncSlotsToAttendance(dateStr, empId);
  saveState();
  renderSlotsSchedule();
  renderSchedule();
}

function bulkSetSlots(status) {
  const dateStr = state.selectedDate || getTodayDateStr();
  const empId = state.selectedSlotsEmployee || state.currentUser || 1;
  const slotStatuses = getSlotStatuses(dateStr, empId);

  TIME_SLOTS.forEach(s => {
    slotStatuses[s.id] = status;
  });

  syncSlotsToAttendance(dateStr, empId);
  saveState();
  triggerDaySlotAnimation();
  renderSlotsSchedule();
  renderSchedule();
}

function syncSlotsToAttendance(dateStr, empId) {
  const slots = getSlotStatuses(dateStr, empId);
  let workedHours = 0;
  let hasWorked = false;

  TIME_SLOTS.forEach(slot => {
    const st = slots[slot.id] || "none";
    if (st === "worked") {
      if (slot.type === "work") workedHours += slot.duration;
      hasWorked = true;
    }
  });

  if (!state.attendance[dateStr]) state.attendance[dateStr] = {};

  let newStatus = "Absent";
  if (workedHours > 0) {
    newStatus = workedHours >= 8 ? "Arrived" : "Working";
  } else if (hasWorked) {
    newStatus = "Working";
  }

  const workedSlots = TIME_SLOTS.filter(s => slots[s.id] === "worked");
  let firstClockIn = "";
  let lastClockOut = "";

  if (workedSlots.length > 0) {
    firstClockIn = workedSlots[0].time.split(" – ")[0];
    lastClockOut = workedSlots[workedSlots.length - 1].time.split(" – ")[1];
  }

  state.attendance[dateStr][empId] = {
    status: newStatus,
    clockIn: firstClockIn,
    clockOut: lastClockOut,
    hours: workedHours
  };
}

// ===================================================
// SLOTS EMPLOYEE PICKER MODAL
// ===================================================
function openSlotsEmpModal() {
  populateSlotsEmpModal();
  const modal = document.getElementById("slots-emp-modal");
  const content = document.getElementById("slots-emp-modal-content");
  if (!modal || !content) return;
  modal.classList.remove("hidden");
  requestAnimationFrame(() => {
    content.classList.remove("translate-y-full");
    content.classList.add("translate-y-0");
  });
}

function closeSlotsEmpModal() {
  const modal = document.getElementById("slots-emp-modal");
  const content = document.getElementById("slots-emp-modal-content");
  if (!modal || !content) return;
  content.classList.remove("translate-y-0");
  content.classList.add("translate-y-full");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function populateSlotsEmpModal() {
  const list = document.getElementById("slots-emp-modal-list");
  if (!list) return;
  const currentEmpId = state.selectedSlotsEmployee || state.currentUser || 1;

  list.innerHTML = state.employees.map(emp => {
    const isSelected = emp.id === currentEmpId;
    const isMe = emp.id === state.currentUser ? " (Ви)" : "";
    const initials = getInitials(emp.name);
    const bgClass = isSelected ? "bg-secondary-container text-on-secondary-container border-primary/30" : "hover:bg-surface-container border-transparent";
    const checkOpacity = isSelected ? "opacity-100" : "opacity-0";

    return `
      <div onclick="selectSlotsEmpModal(${emp.id})" id="slots-emp-item-${emp.id}" class="slots-emp-item flex items-center justify-between p-sm rounded-xl cursor-pointer transition-all duration-150 border ${bgClass}">
        <div class="flex items-center gap-sm">
          <div class="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">${initials}</div>
          <div class="flex flex-col min-w-0">
            <span class="font-body-md text-xs text-on-surface truncate font-semibold">${emp.name}${isMe}</span>
            <span class="font-label-md text-[10px] text-on-surface-variant">${emp.role}</span>
          </div>
        </div>
        <span class="material-symbols-outlined text-primary text-base ${checkOpacity} check-icon">check_circle</span>
      </div>`;
  }).join("");
}

function filterSlotsEmpModal() {
  const searchVal = (document.getElementById("slots-emp-search").value || "").toLowerCase().trim();
  state.employees.forEach(emp => {
    const item = document.getElementById(`slots-emp-item-${emp.id}`);
    if (item) {
      if (emp.name.toLowerCase().includes(searchVal) || emp.role.toLowerCase().includes(searchVal)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  });
}

function selectSlotsEmpModal(empId) {
  state.selectedSlotsEmployee = parseInt(empId);
  saveState();
  closeSlotsEmpModal();
  triggerDaySlotAnimation();
  renderSlotsSchedule();
}

function renderSchedule() {
  const mondayStr = state.currentWeekMondayStr || formatDateToISO(getMondayOfDate(new Date()));
  const weekDays = getWeekDaysForMonday(mondayStr);

  // Render Table Header Days Row
  const daysRow = document.getElementById("schedule-table-days-row");
  if (daysRow) {
    daysRow.innerHTML = weekDays.map(d => {
      const isWeekend = d.label === "Сб" || d.label === "Нд";
      const textColor = isWeekend ? "text-tertiary" : "";
      const isToday = d.isToday ? "bg-primary-container/20 text-primary font-extrabold" : "";
      return `<th colspan="3" class="py-1.5 border-b border-r border-outline-variant text-[11px] ${textColor} ${isToday}">${String(d.day).padStart(2, '0')}.${String(d.month).padStart(2, '0')} (${d.label})</th>`;
    }).join("");
  }

  // Weekly hours summary for the logged-in user for active week
  const user = state.employees.find(e => e.id === state.currentUser);
  let totalHours = 0;
  weekDays.forEach(d => {
    const dayData = state.attendance[d.dateStr] || {};
    const rec = dayData[state.currentUser];
    if (rec && (rec.status === "Arrived" || rec.status === "Working")) {
      totalHours += rec.hours || 0;
    }
  });

  const titleEl = document.getElementById("hours-summary-title");
  const valEl = document.getElementById("hours-summary-value");
  if (titleEl && user) titleEl.textContent = `Всього ваших годин за тиждень (${user.name})`;
  if (valEl) valEl.textContent = `${totalHours.toFixed(1)} год.`;

  // Render spreadsheet table rows for active week
  const tbody = document.getElementById("schedule-table-body");
  if (!tbody) return;

  tbody.innerHTML = state.employees.map(emp => {
    const isCurrentUser = emp.id === state.currentUser;
    const stickyBgClass = isCurrentUser ? "bg-blue-50" : "bg-white";
    const nameColorClass = isCurrentUser ? "text-primary font-bold" : "text-on-surface";
    const youSuffix = isCurrentUser ? " <span class='text-[9px] bg-primary text-on-primary px-1 rounded'>Ви</span>" : "";

    let cellsHtml = "";
    weekDays.forEach(d => {
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
        <td class="py-3 border-b border-r border-outline-variant/80 sticky left-0 z-10 text-center text-[10px] ${stickyBgClass} text-on-surface-variant">${emp.id}.</td>
        <td class="px-2 py-3 border-b border-r-2 border-primary/20 sticky left-[32px] z-10 truncate ${stickyBgClass} ${nameColorClass} text-[11px]">${emp.name}${youSuffix}</td>
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

  const dateParts = dateStr.split("-");
  const dateLabel = `${dateParts[2]}.${dateParts[1]}`;
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
  renderSlotsSchedule();
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

  const todayAtt = state.attendance[state.selectedDate || getTodayDateStr()] || {};
  const rec = todayAtt[state.currentUser];
  if (rec && (rec.status === "Arrived" || rec.status === "Working")) {
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
  state.payouts.unshift({ id: Date.now(), employeeId: user.id, employeeName: user.name, date: state.selectedDate || getTodayDateStr(), hours, rate: user.rate, amount });
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

  const hoursInput = document.getElementById("hoursInput");
  if (hoursInput) {
    hoursInput.addEventListener("focus", function() { this.select(); });
    hoursInput.addEventListener("input", calculate);
  }
});
