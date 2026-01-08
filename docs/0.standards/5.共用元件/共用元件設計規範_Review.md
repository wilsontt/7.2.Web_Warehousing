# 共用元件設計規範審閱意見 (Review Comments)

**審閱對象**: `0.standards/5.共用元件/共用元件設計規範.md`  
**審閱日期**: 2025-11-28  
**審閱者**: AI Assistant

---

## 1. 整體看法 (Overview)

這份規範的架構非常完整，成功定義了一個現代化、模組化且符合 SOLID 原則的 UI 組件庫架構。

**主要優點**:
*   **層次分明**: 將元件分為五大類（基礎、佈局、資料展示、表單、業務邏輯），職責劃分清晰，符合 **Separation of Concerns (關注點分離)**。
*   **Metadata-Driven (資料驅動)**: 強調 `FormField` 和 `DataTable` 依賴 Metadata 生成，這對欄位繁多的企業級後台系統是關鍵策略，能大幅減少重複代碼。
*   **重視 UX/DX**: 兼顧使用者體驗（如 Modal 取代內嵌表單）與開發者體驗（統一 API、TypeScript 型別、測試策略）。
*   **明確的遷移路徑**: 附錄 A 的新舊對照表提供了清晰的改版理由與方向。

---

## 2. 具體建議與討論點 (Suggestions & Discussion Points)

### A. 技術選型 (Technology Stack)

*   **Headless UI vs Radix UI**:
    *   **建議**: 明確選定 **Radix UI**。
    *   **理由**: Radix UI 的 Primitive 元件更豐富（如 Dialog, Popover, Select, Checkbox），Accessibility (a11y) 完善，且與目前主流的 `shadcn/ui` 相容性極佳，能加速開發。
*   **Styling**:
    *   **建議**: Tailwind CSS v4 搭配 `class-variance-authority (cva)`。
    *   **理由**: `cva` 能有效管理元件的 Variants（如 `variant="primary"` / `size="lg"`），比手寫條件判斷更乾淨易維護。

### B. 資料驅動元件 (Data-Driven Components)

*   **FormField 與 Zod 整合**:
    *   **建議**: 開發一個強大的 **Factory Pattern** 來將後端的 Metadata (JSON) 動態轉換為 Zod Schema。
    *   **理由**: 這樣才能結合 `React Hook Form` 做到即時且強型別的驗證。建議先進行 PoC (Proof of Concept)。
*   **DataTable 的效能**:
    *   **建議**: 直接整合 **TanStack Table (React Table v8)**。
    *   **理由**: 它是 Headless 的，完全符合規範理念，且內建 Sorting, Filtering, Pagination, Virtualization 邏輯，避免重複造輪子。

### C. 業務邏輯元件 (Business Logic Components)

*   **BatchSaveToolbar 的狀態管理**:
    *   **建議**: 引入 Context 層級的 Form State Management (如 `BatchEditContext`)。
    *   **理由**: 工具列需要知道頁面上哪些元件是「髒的 (Dirty)」。若頁面涉及多個獨立表單，單靠 React Hook Form 的 `formState` 可能不夠，需要統一收集變更狀態。

### D. 測試策略 (Testing Strategy)

*   **Storybook 整合**:
    *   **建議**: 在 CI/CD 流程中加入 **Chromatic** 或類似的視覺回歸測試工具。
    *   **理由**: 單元測試測不出 CSS 跑版，視覺一致性對共用元件庫至關重要。

---

## 3. 潛在風險提示

1.  **Metadata 結構的標準化**: 前端依賴後端 Metadata，若後端 API 格式（欄位定義、驗證規則）未標準化，前端開發會受阻。建議優先定義 `FieldMetadata` 的 JSON Schema。
2.  **過度抽象的陷阱**: 避免試圖用一個萬能元件解決所有表單需求。對於有特殊互動邏輯的表單，應保留手寫 JSX 的彈性。

---

## 4. 下一步行動建議 (Action Items)

1.  **確認技術棧**: 定案使用 Radix UI + Tailwind + cva。
2.  **建立基礎元件**: 優先實作 Button, Input, Select，並設定 Storybook 環境。
3.  **POC 驗證**: 挑選「代碼維護」功能，試作 `DataTable` + `BatchSaveToolbar` 的原型，驗證「批次儲存」與「Metadata 驅動」的可行性。

