import React, { useEffect, useRef } from "react";

interface SearchModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  children,
  onClose,
}: SearchModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className=" w-full   " ref={modalRef}>
      {children}
    </div>
  );
};

export default SearchModal;
