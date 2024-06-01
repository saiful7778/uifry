"use client";
import { useState } from "react";
import { subscribeSchema } from "@/lib/schemas/subscribe";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";
import useToast from "@/hooks/useToast";

export default function SubscribeForm() {
  const { toast } = useToast();
  const [spinner, setSpinner] = useState<boolean>(false);

  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (e: z.infer<typeof subscribeSchema>) => {
    try {
      setSpinner((prop) => !prop);
      toast({
        title: "Successfully subscribed",
        description: `"${e.email}" here we send newsletter email`,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Email subscribed problem",
      });
    } finally {
      form.reset();
      setSpinner((prop) => !prop);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex items-start gap-2"
      >
        <Form.field
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.item>
              <Form.control>
                <Input
                  type="email"
                  placeholder="Your email"
                  disabled={spinner}
                  {...field}
                />
              </Form.control>
              <Form.message />
            </Form.item>
          )}
        />
        <Button type="submit" disabled={spinner}>
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
