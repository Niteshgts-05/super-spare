import { useState, useRef, useEffect, PropsWithChildren, FC } from "react";
import CloseIcon from "@/icons/Close";

interface CollapsibleProps {
  closeDrawer: () => void;
  customMaxHeightPercent?: number;
  transitionTimeout?: number;
  title?: string;
}

const Drawer: FC<PropsWithChildren<CollapsibleProps>> = ({
  children,
  closeDrawer,
  customMaxHeightPercent = 80,
  transitionTimeout = 500,
  title,
}) => {
  const [isDrawerCollapsed, setIsDrawerCollapsed] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [maxHeightPercent, setMaxHeightPercent] = useState(
    customMaxHeightPercent
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setDynamicHeight(isDrawerCollapsed ? 0 : contentHeight);
    }
  }, [isDrawerCollapsed]);

  const toggleCollapse = () => {
    setIsDrawerCollapsed(true);
    setTimeout(() => {
      document.body.style.overscrollBehavior = "unset";
      document.body.style.overflow = "unset";
      closeDrawer();
    }, transitionTimeout);
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full ${
        !isDrawerCollapsed && "bg-black bg-opacity-50"
      } z-10 flex justify-center items-center transition-all duration-${transitionTimeout}`}
      onClick={toggleCollapse}
    >
      <div
        className="absolute bottom-0 fixed w-full max-w-full transition-height duration-500 overflow-hidden z-[11] pointer-events-none"
        style={{
          height: `${dynamicHeight}px`,
          maxHeight: `${maxHeightPercent}%`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-t-[20px] bg-white px-4 pt-4 pb-1 flex justify-between gap-2 z-[12] pointer-events-auto">
          <button
            onClick={toggleCollapse}
            className="absolute h-[32px] w-[32px] min-h-[32px] min-w-[32px] rounded-full bg-[#fff] drop-shadow-md dro-shadow-[0px_3px_17px_rgba(0, 0, 0, 0.13)]"
          >
            <CloseIcon />
          </button>
          <div className="flex-1 truncate uppercase font-bold text-center text-[20px] px-[36px]">
            {title}
          </div>
        </div>
      </div>
      <div
        className="bg-white rounded-t-[20px] scrollbar-hide overflow-auto absolute bottom-0 fixed w-full max-w-full transition-height duration-500"
        style={{
          height: `${dynamicHeight}px`,
          maxHeight: `${maxHeightPercent}%`,
        }}
        onClick={(e) => e.stopPropagation()}
        onScrollCapture={() => setMaxHeightPercent(80)}
      >
        <div className="pt-[50px]" ref={contentRef}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Drawer;
