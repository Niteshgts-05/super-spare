import { PropsWithChildren, useEffect } from "react";
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
        } bg-white shadow-xl ease-in-out transition-all text-black duration-300 z-50`}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-1 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <article className="relative max-w-lg flex flex-col overflow-y-scroll h-full mt-0">
          {children}
        </article>
      </section>
    </>
  );
};
export default SideDrawer;
