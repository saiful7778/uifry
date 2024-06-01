"use client";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Root } from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
import cn from "@/lib/utils/cn";
import { labelVariants } from "@/lib/styles";

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = Root.displayName;

export default Label;
