"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AletModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title=" Sei Sicuro?"
      description=" Questa azione è irreversibile"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="p-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancella
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continua
        </Button>
      </div>
    </Modal>
  );
};
