"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { poppins } from "@/lib/fonts";

function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-7xl md:text-9xl font-bold tracking-tighter text-neutral-800 dark:text-white ${poppins.className}`}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-white">
            Страница не найдена
          </h2>
          <p className="max-w-md mx-auto text-neutral-800 dark:text-white">
            Похоже, вы попали туда, куда не планировали. Не волнуйтесь — мы вас
            вернём.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/">
            <Button
              size="lg"
              className="rounded-full cursor-pointer text-white dark:text-neutral-800"
            >
              На главную
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
