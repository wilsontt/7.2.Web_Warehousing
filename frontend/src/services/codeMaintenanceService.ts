import type { BatchSaveRequest, CoordinatesResponse, MajorCategory, MidCategory, SubCategory } from '../types/codeMaintenance';

// 模擬資料初始化 (Mock Data Initialization) - Expanded for better visualization
let MOCK_CDF: MajorCategory[] = [
  { id: 1, CategoryFirstNo: '001', MajorName: '電子零件', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:00:00', LockVer: 0 },
  { id: 2, CategoryFirstNo: '002', MajorName: '機構零件', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:05:00', LockVer: 0 },
  { id: 3, CategoryFirstNo: '003', MajorName: '包裝材料', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:30:00', LockVer: 0 },
  { id: 4, CategoryFirstNo: '004', MajorName: '線材', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:35:00', LockVer: 0 },
  { id: 5, CategoryFirstNo: '005', MajorName: '工具耗材', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:40:00', LockVer: 0 },
  { id: 6, CategoryFirstNo: '006', MajorName: '化學品', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:45:00', LockVer: 0 },
  { id: 7, CategoryFirstNo: '007', MajorName: '辦公用品', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:50:00', LockVer: 0 },
];

let MOCK_CDS: MidCategory[] = [
  // 001 電子零件
  { id: 1, CategoryFirstNo: '001', CategorySecondNo: '01', MidName: '電阻', Value1: 0, Value2: 0, Remark: '一般電阻', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:10:00' },
  { id: 2, CategoryFirstNo: '001', CategorySecondNo: '02', MidName: '電容', Value1: 0, Value2: 0, Remark: '一般電容', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:12:00' },
  { id: 3, CategoryFirstNo: '001', CategorySecondNo: '03', MidName: '電感', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:00:00' },
  { id: 4, CategoryFirstNo: '001', CategorySecondNo: '04', MidName: '二極體', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:05:00' },
  { id: 5, CategoryFirstNo: '001', CategorySecondNo: '05', MidName: '電晶體', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:10:00' },
  { id: 6, CategoryFirstNo: '001', CategorySecondNo: '06', MidName: 'IC', Value1: 0, Value2: 0, Remark: '積體電路', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:15:00' },
  
  // 002 機構零件
  { id: 7, CategoryFirstNo: '002', CategorySecondNo: '01', MidName: '螺絲', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:15:00' },
  { id: 8, CategoryFirstNo: '002', CategorySecondNo: '02', MidName: '螺帽', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:20:00' },
  { id: 9, CategoryFirstNo: '002', CategorySecondNo: '03', MidName: '華司', Value1: 0, Value2: 0, Remark: '', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 11:25:00' },
];

let MOCK_CDT: SubCategory[] = [
  // 001-01 電阻
  { id: 1, CategoryFirstNo: '001', CategorySecondNo: '01', subcat_no: '001', code_desc: '0603電阻', remark: 'SMD', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:20:00' },
  { id: 2, CategoryFirstNo: '001', CategorySecondNo: '01', subcat_no: '002', code_desc: '0805電阻', remark: 'SMD', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:21:00' },
  { id: 3, CategoryFirstNo: '001', CategorySecondNo: '01', subcat_no: '003', code_desc: '1206電阻', remark: 'SMD', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:22:00' },
  { id: 4, CategoryFirstNo: '001', CategorySecondNo: '01', subcat_no: '004', code_desc: 'DIP電阻 1/4W', remark: 'DIP', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:23:00' },
  { id: 5, CategoryFirstNo: '001', CategorySecondNo: '01', subcat_no: '005', code_desc: 'DIP電阻 1/2W', remark: 'DIP', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:24:00' },
  
  // 001-02 電容
  { id: 6, CategoryFirstNo: '001', CategorySecondNo: '02', subcat_no: '001', code_desc: '0603電容', remark: 'SMD', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:25:00' },
  { id: 7, CategoryFirstNo: '001', CategorySecondNo: '02', subcat_no: '002', code_desc: '0805電容', remark: 'SMD', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:26:00' },
  { id: 8, CategoryFirstNo: '001', CategorySecondNo: '02', subcat_no: '003', code_desc: '電解電容', remark: 'DIP', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:27:00' },
  { id: 9, CategoryFirstNo: '001', CategorySecondNo: '02', subcat_no: '004', code_desc: '固態電容', remark: 'DIP', CreatedUserId: 'admin', CreatedDateTime: '2025/11/28 10:28:00' },
];

const LATENCY = 600; // 模擬網路延遲 (ms)

/**
 * 代碼維護服務 (Code Maintenance Service)
 * 目前使用 Mock Mode，未來需替換為真實 API 呼叫
 */
export const codeMaintenanceService = {
  
  /**
   * 取得所有代碼資料 (Get All Coordinates)
   * @returns Promise<CoordinatesResponse>
   */
  getAllCoordinates: async (): Promise<CoordinatesResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Deep copy to prevent reference issues in mock state
        resolve({
          cdf: JSON.parse(JSON.stringify(MOCK_CDF)),
          cds: JSON.parse(JSON.stringify(MOCK_CDS)),
          cdt: JSON.parse(JSON.stringify(MOCK_CDT)),
        });
      }, LATENCY);
    });
  },

  /**
   * 批次儲存 (Batch Save)
   * 模擬 Transaction 行為：成功則全部套用，失敗則全部回滾
   * @param changes BatchSaveRequest
   */
  saveBatch: async (changes: BatchSaveRequest): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('📦 [Mock API] Batch Saving...', changes);

        try {
          // --- 模擬後端驗證與交易處理 (Transaction Simulation) ---

          // 1. 驗證 Insert 唯一性 (Unique Constraint Check)
          changes.cdf_changes.inserts.forEach(i => {
             if (MOCK_CDF.some(x => x.CategoryFirstNo === i.CategoryFirstNo)) {
                 throw new Error(`大分類編碼 [${i.CategoryFirstNo}] 已存在`);
             }
          });
          changes.cds_changes.inserts.forEach(i => {
             if (MOCK_CDS.some(x => x.CategoryFirstNo === i.CategoryFirstNo && x.CategorySecondNo === i.CategorySecondNo)) {
                 throw new Error(`中分類編碼 [${i.CategorySecondNo}] 已存在 (於大分類 ${i.CategoryFirstNo})`);
             }
          });
          changes.cdt_changes.inserts.forEach(i => {
             if (MOCK_CDT.some(x => x.CategoryFirstNo === i.CategoryFirstNo && x.CategorySecondNo === i.CategorySecondNo && i.subcat_no === i.subcat_no)) {
                 throw new Error(`細分類編碼 [${i.subcat_no}] 已存在`);
             }
          });

          // 2. 套用刪除 (Apply Deletes)
          // 真正的後端會檢查 FK Constraint，這裡假設前端已經做過基本防呆
          const deletedCdfIds = new Set(changes.cdf_changes.deletes.map(d => d.CategoryFirstNo));
          MOCK_CDF = MOCK_CDF.filter(i => !deletedCdfIds.has(i.CategoryFirstNo));

          const deletedCdsKeys = new Set(changes.cds_changes.deletes.map(d => `${d.CategoryFirstNo}-${d.CategorySecondNo}`));
          MOCK_CDS = MOCK_CDS.filter(i => !deletedCdsKeys.has(`${i.CategoryFirstNo}-${i.CategorySecondNo}`));

          const deletedCdtKeys = new Set(changes.cdt_changes.deletes.map(d => `${d.CategoryFirstNo}-${d.CategorySecondNo}-${d.subcat_no}`));
          MOCK_CDT = MOCK_CDT.filter(i => !deletedCdtKeys.has(`${i.CategoryFirstNo}-${i.CategorySecondNo}-${i.subcat_no}`));

          // 3. 套用修改 (Apply Updates)
          changes.cdf_changes.updates.forEach(u => {
            const idx = MOCK_CDF.findIndex(i => i.CategoryFirstNo === u.CategoryFirstNo);
            if (idx !== -1) MOCK_CDF[idx] = { ...MOCK_CDF[idx], ...u, UpdatedDateTime: new Date().toLocaleString() };
          });
          changes.cds_changes.updates.forEach(u => {
             const idx = MOCK_CDS.findIndex(i => i.CategoryFirstNo === u.CategoryFirstNo && i.CategorySecondNo === u.CategorySecondNo);
             if (idx !== -1) MOCK_CDS[idx] = { ...MOCK_CDS[idx], ...u, UpdatedDateTime: new Date().toLocaleString() };
          });
          changes.cdt_changes.updates.forEach(u => {
            const idx = MOCK_CDT.findIndex(i => i.CategoryFirstNo === u.CategoryFirstNo && i.CategorySecondNo === u.CategorySecondNo && i.subcat_no === u.subcat_no);
            if (idx !== -1) MOCK_CDT[idx] = { ...MOCK_CDT[idx], ...u, UpdatedDateTime: new Date().toLocaleString() };
          });

          // 4. 套用新增 (Apply Inserts)
          const now = new Date().toLocaleString();
          changes.cdf_changes.inserts.forEach(i => {
             MOCK_CDF.push({ ...i, id: Math.random(), CreatedDateTime: now, LockVer: 0 });
          });
          changes.cds_changes.inserts.forEach(i => {
             MOCK_CDS.push({ ...i, id: Math.random(), CreatedDateTime: now });
          });
          changes.cdt_changes.inserts.forEach(i => {
             MOCK_CDT.push({ ...i, id: Math.random(), CreatedDateTime: now });
          });

          console.log('✅ [Mock API] Batch Save Success');
          resolve();

        } catch (error) {
          console.error('❌ [Mock API] Batch Save Failed:', error);
          reject(error);
        }
      }, LATENCY);
    });
  }
};
