import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
        <Icon className="text-emerald-400" />
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}