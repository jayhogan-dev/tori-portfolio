"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as z from "zod";
import { sendEmail } from "@/lib/actions";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Must be a valid email address",
  }),
  message: z
    .string()
    .min(2)
    .max(500, { message: "No more than 500 characters " }),
});

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendEmail({
        name: values.name,
        email: values.email,
        message: values.message,
      });

      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for reaching out! I look forward to potentially working with you.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "There was an error processing your request!",
        description:
          "Please try again and if the error persists, please email me directly at torihogantraining@gmail.com",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-body-regular text-primary-black-300 dark:text-primary-white-800 md:text-paragraph-regular">
                  Full name
                </FormLabel>
                <FormControl className="h-12 bg-primary-white-800 dark:bg-primary-black-500 md:h-16">
                  <Input
                    {...field}
                    className="rounded-lg text-body-regular md:text-paragraph-regular"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-body-regular text-primary-black-300 dark:text-primary-white-800 md:text-paragraph-regular">
                  Email
                </FormLabel>
                <FormControl className="h-12 bg-primary-white-800 dark:bg-primary-black-500 md:h-16">
                  <Input
                    {...field}
                    className="rounded-lg text-body-regular md:text-paragraph-regular"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-body-regular text-primary-black-300 dark:text-primary-white-800 md:text-paragraph-regular">
                Message
              </FormLabel>
              <FormControl className="h-24 bg-primary-white-800 dark:bg-primary-black-500 md:h-40">
                <Textarea
                  {...field}
                  className="rounded-lg text-body-regular md:text-paragraph-regular"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            className="w-full text-body-bold text-white md:w-52"
          >
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
