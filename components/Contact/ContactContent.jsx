"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { IoMdCall } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactContent() {
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formRef });
    if (formRef.current) {
      await emailjs
        .sendForm(
          "service_mhes258",
          "template_9do5abh",
          formRef.current,
          "NBm1Am8HA6NeOIEUY"
        )
        .then(
          (result) => {
            e.target.reset();
            toast.success("Successfully Send!");
          },
          (error) => {}
        );
    }
  };
  return (
    <div>
      <div className="relative bg-[url('/assets/images/jadoconstruction-image-07.jpg')] w-full py-32 bg-no-repeat bg-cover bg-center px-2">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl lg:text-5xl font-semibold">Contact Us</h1>
        </div>
      </div>
      <div className="pt-10 lg:pt-16 ">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto w-11/12 lg:w-5/12 shadow p-4 rounded-sm border">
          <div>
            <h2 className="text-2xl font-semibold">
              What can we help you with?
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-2 items-center">
                <IoMdCall className="text-xl" />
                <span>Call Us: (786)-553-4508</span>
              </div>
              <div className="flex gap-2 items-start">
                <FaRegClock className="text-xl" />
                <span>
                  Mon-Fri: 9:00 am - 6:00 pm <br />
                  Sat: 9:00 am - 5:00 pm <br />
                  Sun: 9:00 am - 5:00 pm <br />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineMail className="text-xl" />
                <span>joe@Jadoconstruction.com</span>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="resize-none"
                  id="message"
                  name="message"
                  placeholder="Type your message here."
                  required
                />
              </div>
              <div>
                <Button className="w-full">Send</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
