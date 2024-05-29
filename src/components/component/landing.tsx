"use client";
import React from "react";
import Navbar from "./navbar";
import Link from "next/link";

export function Landing() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-900">
        <div className="container px-4 md:px-6 lg:px-8 mt-0 lg:mt-1">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] mt-[-10rem] lg:gap-12 xl:grid-cols-[1fr_550px] ">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Unleash Your Creativity with Our Game Story Generator
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-white">
                  Discover a new way to create immersive game narratives with our AI-powered chatbot. Seamlessly generate compelling stories for your next game.
                </p>
              </div>
              <div>
                <Link href="/chat">
                  <div className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900 dark:bg-purple-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Transform Your Game Narratives</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
                Our AI-powered chatbot makes it easy to create engaging and unique stories for your games. See how our technology can enhance your game development process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Instant Story Generation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Generate complete game stories in seconds, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Customizable Plots</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Tailor stories to fit your game's theme and setting perfectly.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Engaging Characters</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Create memorable characters with unique backstories and motivations.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Dynamic Storylines</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Generate dynamic and branching storylines that keep players engaged.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Easy Integration</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Seamlessly integrate generated stories into your existing game framework.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-white">Unparalleled Support</h3>
                <p className="text-gray-500 dark:text-gray-400 text-white">
                  Our support team is here to help you make the most of our story generation technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
