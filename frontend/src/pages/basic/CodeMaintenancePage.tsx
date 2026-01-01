import { useState, useEffect } from 'react';
import type { MajorCategory, MidCategory, SubCategory } from '../../types/codeMaintenance';
import { codeMaintenanceService } from '../../services/codeMaintenanceService';
import { ResizableLayout } from '../../components/layout/ResizableLayout';
import { MajorCategoryList } from '../../components/basic/MajorCategoryList';
import { MidCategoryList } from '../../components/basic/MidCategoryList';
import { SubCategoryList } from '../../components/basic/SubCategoryList';
import { Save, Plus, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Toolbar Component
 */
const Toolbar = ({ saving, onSave }: { saving: boolean, onSave: () => void }) => (
  <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-4">
      <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">代碼維護</h1>
      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
      <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Plus size={16} />
            新增大分類
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Plus size={16} />
            新增中分類
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Plus size={16} />
            新增細分類
          </button>
      </div>
    </div>
    
    <div className="flex gap-3">
       <button className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
         取消
       </button>
       <button 
         className={cn(
           "flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white rounded shadow-sm transition-all",
           "bg-blue-600 hover:bg-blue-700 active:scale-95",
           saving && "opacity-70 cursor-wait"
         )}
         onClick={onSave}
         disabled={saving}
       >
         {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
         儲存變更
       </button>
    </div>
  </div>
);

export default function CodeMaintenancePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // --- Data State ---
  const [cdfData, setCdfData] = useState<MajorCategory[]>([]);
  const [cdsData, setCdsData] = useState<MidCategory[]>([]);
  const [cdtData, setCdtData] = useState<SubCategory[]>([]);

  // --- Selection State ---
  const [selectedMajorId, setSelectedMajorId] = useState<string | null>(null);
  const [selectedMidId, setSelectedMidId] = useState<string | null>(null);
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);

  // --- Load Data ---
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const res = await codeMaintenanceService.getAllCoordinates();
        setCdfData(res.cdf);
        setCdsData(res.cds);
        setCdtData(res.cdt);
        
        // Auto select first major category if available
        if (res.cdf.length > 0) {
            setSelectedMajorId(res.cdf[0].CategoryFirstNo);
        }
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  // --- Filter Logic ---
  const filteredMid = selectedMajorId 
      ? cdsData.filter(x => x.CategoryFirstNo === selectedMajorId) 
      : [];

  const filteredSub = (selectedMajorId && selectedMidId)
      ? cdtData.filter(x => x.CategoryFirstNo === selectedMajorId && x.CategorySecondNo === selectedMidId)
      : [];

  // --- Handlers ---
  const handleMajorSelect = (id: string) => {
    if (id === selectedMajorId) return;
    setSelectedMajorId(id);
    setSelectedMidId(null); // Clear child selection
    setSelectedSubId(null);
  };

  const handleMidSelect = (id: string) => {
    if (id === selectedMidId) return;
    setSelectedMidId(id);
    setSelectedSubId(null); // Clear child selection
  };

  const handleSubSelect = (id: string) => {
    setSelectedSubId(id);
  };


  // --- Panels ---
  
  const LeftPanel = (
    <div className="h-full bg-white dark:bg-gray-900 overflow-hidden">
        <MajorCategoryList 
            data={cdfData}
            selectedId={selectedMajorId}
            onSelect={handleMajorSelect}
        />
    </div>
  );

  const RightPanel = (
    <div className="h-full flex flex-col">
       <Toolbar saving={saving} onSave={() => {
         setSaving(true);
         setTimeout(() => setSaving(false), 1000);
       }} />
       
       <div className="flex-1 flex flex-col min-h-0">
          {/* Upper: Mid Cats */}
          <div className="flex-1 border-b border-gray-200 dark:border-gray-700 flex flex-col min-h-0 bg-white dark:bg-gray-900">
             <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
               <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                 中分類 (CDS) 
                 {selectedMajorId ? <span className="ml-2 text-blue-600 dark:text-blue-400">[{selectedMajorId}]</span> : ''}
               </h3>
             </div>
             
             <div className="flex-1 min-h-0">
                 {!selectedMajorId ? (
                   <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500 text-sm">請先選擇左側大分類</div>
                 ) : (
                   <MidCategoryList 
                      data={filteredMid}
                      selectedId={selectedMidId}
                      onSelect={handleMidSelect}
                   />
                 )}
             </div>
          </div>

          {/* Lower: Sub Cats */}
          <div className="flex-[1.2] flex flex-col min-h-0 bg-white dark:bg-gray-900">
             <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
               <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  細分類 (CDT)
                  {selectedMidId ? <span className="ml-2 text-blue-600 dark:text-blue-400">[{selectedMajorId}-{selectedMidId}]</span> : ''}
               </h3>
             </div>

             <div className="flex-1 min-h-0">
                 {!selectedMidId ? (
                   <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500 text-sm">請先選擇上方中分類</div>
                 ) : (
                    <SubCategoryList 
                       data={filteredSub}
                       selectedId={selectedSubId}
                       onSelect={handleSubSelect}
                    />
                 )}
             </div>
          </div>
       </div>
    </div>
  );

  if (loading) {
     return (
       <div className="h-full flex items-center justify-center">
         <Loader2 className="animate-spin text-blue-600" />
       </div>
     );
  }

  return (
    <div className="h-[calc(100vh-var(--header-height))] w-full">
       <ResizableLayout 
          leftPanel={LeftPanel}
          rightPanel={RightPanel}
          defaultLeftWidth={25}
       />
    </div>
  );
}
