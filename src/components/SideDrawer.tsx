import { PropsWithChildren, useEffect } from "react";
import CloseIcon from "@/icons/Close";

type DIRECTION = "LEFT" | "RIGHT";
interface Props extends PropsWithChildren {
  isOpen: boolean;
  direction?: DIRECTION;
  onClose: (open: boolean) => void;
}

const SideDrawer = ({
  isOpen,
  onClose,
  direction = "RIGHT",
  children,
}: Props) => {
  const handleClose = () => {
    onClose(false);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <section
        className="fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 ease-in-out p-0 transition-all duration-300 z-50"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <button className="w-screen h-full" onClick={handleClose} />
      </section>
      <section
        className={`fixed ${isOpen ? "w-screen" : "w-0"} h-full top-0 ${
          direction === "LEFT" ? "left-0" : "right-0"
        } bg-white shadow-xl ease-in-out transition-all text-black duration-300 z-50 p-4`}
        style={{
          transform: `translateX(${
            isOpen ? "0px" : direction === "LEFT" ? "-100%" : "100%"
          })`,
        }}
      >
        <button
          tabIndex={0}
          onClick={handleClose}
          className="top-3 left-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleClose();
            }
          }}
        >
          <div className="w-8 h-8 relative">
            <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full shadow" />
            <div className="w-5 h-5 left-[6px] top-[6px] absolute">
              <CloseIcon />
            </div>
          </div>
        </button>
        <article className="relative w-full flex flex-col overflow-y-scroll h-full">
          {children}
        </article>
      </section>
    </>
  );
};

export default SideDrawer;
