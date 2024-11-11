"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

interface ToasterProps {
  showOnLoad?: boolean;
}

export function Toaster({ showOnLoad }: ToasterProps) {
  const { toasts, toast } = useToast();

  useEffect(() => {
    if (showOnLoad) {
      toast({
        title: "📌 Important Notice",
        description:
          "The backend API is hosted on Render.com on the free plan, so it might take a few seconds to load. Please be patient.",
      });
    }
  }, [showOnLoad, toast]);

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
