import type { ReactNode } from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/utils/cn';

interface ResizableLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  defaultLeftWidth?: number;
  minLeftWidth?: number;
  maxLeftWidth?: number;
  className?: string;
}

export function ResizableLayout({
  leftPanel,
  rightPanel,
  defaultLeftWidth = 25,
  minLeftWidth = 15,
  maxLeftWidth = 40,
  className,
}: ResizableLayoutProps) {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing && containerRef.current) {
        e.preventDefault();
        const containerWidth = containerRef.current.clientWidth;
        let newLeftWidth = (e.clientX / containerWidth) * 100;
        
        if (newLeftWidth < minLeftWidth) newLeftWidth = minLeftWidth;
        if (newLeftWidth > maxLeftWidth) newLeftWidth = maxLeftWidth;
        
        setLeftWidth(newLeftWidth);
      }
    },
    [isResizing, minLeftWidth, maxLeftWidth]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <div
      ref={containerRef}
      className={cn('flex h-full w-full overflow-hidden bg-gray-50', className)}
    >
      <div 
        style={{ width: `${leftWidth}%` }}
        className="flex flex-col min-w-0 h-full border-r border-gray-200 bg-white"
      >
        {leftPanel}
      </div>

      <div
        className={cn(
          'w-1 cursor-col-resize bg-gray-200 hover:bg-blue-400 transition-colors z-10 shrink-0 relative',
          isResizing && 'bg-blue-500 delay-75'
        )}
        onMouseDown={startResizing}
      >
         {/* Drag Handle Indicator */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-gray-400/50" />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-gray-50">
        {rightPanel}
      </div>
    </div>
  );
}
