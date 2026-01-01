# 增加日期-時間顯示功能

## 需求分析

根據設計規範，需要在 Header 組件的使用者選單中新增日期-時間顯示：

- 使用 SVG 動態生成日曆圖示
- 上半部分：淺藍色背景，顯示月份英文縮寫（JAN, FEB, MAR）
- 下半部分：淺黃色/奶油色背景，顯示日期數字
- 黑色邊框，圓角設計
- 根據當前日期自動更新

## 實作方案

### 1. 創建 CalendarIcon 組件

**檔案位置**: `frontend/src/components/common/CalendarIcon.tsx`創建一個可重用的 CalendarIcon 組件，接收日期作為 prop，動態生成 SVG 日曆圖示：

- 接收 `date: Date` 作為 prop
- 上半部分：淺藍色背景（`#E3F2FD` 或 `bg-blue-100`），顯示月份英文縮寫（3 字母大寫）
- 下半部分：淺黃色/奶油色背景（`#FFF9E6` 或 `bg-yellow-50`），顯示日期數字
- 黑色邊框（`border-black` 或 `border-gray-900`），圓角設計（`rounded`）
- 使用 SVG 或 div 結構實作

### 2. 更新 Header 組件

**檔案位置**: `frontend/src/components/layout/Header.tsx`修改內容：

1. **導入 CalendarIcon 組件**

- 在檔案頂部加入 CalendarIcon 的 import

2. **新增日期時間狀態管理**

- 使用 `useState` 儲存當前日期時間
- 使用 `useEffect` 設定定時器，每秒更新時間
- 清理函數確保組件卸載時清除定時器

3. **在使用者選單中顯示日期-時間**

- 位置：在使用者資訊區塊（帳號、IP）之後，語系切換之前
- 顯示格式：
    - 左側：CalendarIcon 組件（顯示當前日期）
    - 右側：時間文字（例如：`14:30:25` 或 `2024-12-17 14:30:25`）
- 樣式：與其他選單項目一致的 hover 效果

4. **手機版選單同步更新**

- 在手機版選單的相同位置也加入日期-時間顯示

## 技術細節

### CalendarIcon 組件設計

```typescript
interface CalendarIconProps {
  date: Date;
  size?: number; // 預設寬高，例如 40px
}

// SVG 結構或 div 結構：
// - 外層容器：圓角、黑色邊框
// - 上半部分：淺藍色背景 + 月份文字
// - 下半部分：淺黃色背景 + 日期數字
```



### 日期時間格式化

- 月份縮寫：使用 `toLocaleDateString('en-US', { month: 'short' })` 並轉為大寫
- 日期數字：使用 `getDate()`
- 時間顯示：使用 `toLocaleTimeString('zh-TW')` 或自訂格式

### 實時更新機制

- 使用 `setInterval` 每秒更新一次時間
- 日期變更時，CalendarIcon 會自動重新渲染（因為 date prop 改變）

## 檔案變更清單

1. **新增檔案**:

- `frontend/src/components/common/CalendarIcon.tsx` - 日曆圖示組件

2. **修改檔案**:

- `frontend/src/components/layout/Header.tsx` - 加入日期時間顯示邏輯

## 樣式規範

- 日曆圖示尺寸：建議 40x40px 或 48x48px
- 上半部分背景色：`#E3F2FD` (淺藍色)
- 下半部分背景色：`#FFF9E6` 或 `#FEF3C7` (淺黃色/奶油色)
- 邊框：`1px solid #000000` 或 `border-gray-900`
- 圓角：`rounded` 或 `rounded-md`
- 時間文字：與選單其他文字一致的樣式