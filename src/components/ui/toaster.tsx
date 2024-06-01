"use client";
import useToast from "@/hooks/useToast";
import Toast from "./toast";

export default function Toaster() {
  const { toasts } = useToast();

  return (
    <Toast.provider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <Toast.title>{title}</Toast.title>}
            {description && (
              <Toast.description>{description}</Toast.description>
            )}
          </div>
          {action}
          <Toast.close />
        </Toast>
      ))}
      <Toast.viewport />
    </Toast.provider>
  );
}
