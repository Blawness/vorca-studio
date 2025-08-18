"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  name: z.string().min(2, "Masukkan nama lengkap Anda"),
  email: z.string().email("Masukkan email yang valid"),
  message: z.string().min(10, "Berikan detail lebih lengkap (min 10 karakter)")
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFormValues>({ resolver: zodResolver(schema) });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: kirim ke API route saat siap
    console.log("Form kontak dikirim", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Nama Anda" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="anda@contoh.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Ceritakan tentang proyek Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Mulai Percakapan"}
        </Button>
        {submitted && (
          <p className="text-sm text-green-600">Terima kasih! Kami akan menghubungi Anda segera.</p>
        )}
      </form>
    </Form>
  );
}
