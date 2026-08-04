import type { Project } from "@/lib/data/projects";

const accentMap = {
  blue: {
    from: "from-sky-500",
    to: "to-cyan-400",
    text: "text-sky-600",
    soft: "bg-sky-500/10",
  },
  violet: {
    from: "from-violet-500",
    to: "to-fuchsia-400",
    text: "text-violet-600",
    soft: "bg-violet-500/10",
  },
  emerald: {
    from: "from-emerald-500",
    to: "to-teal-400",
    text: "text-emerald-600",
    soft: "bg-emerald-500/10",
  },
  amber: {
    from: "from-amber-500",
    to: "to-orange-400",
    text: "text-amber-600",
    soft: "bg-amber-500/10",
  },
  rose: {
    from: "from-rose-500",
    to: "to-pink-400",
    text: "text-rose-600",
    soft: "bg-rose-500/10",
  },
  cyan: {
    from: "from-cyan-500",
    to: "to-blue-400",
    text: "text-cyan-600",
    soft: "bg-cyan-500/10",
  },
};

export function ProjectPreview({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <div
      aria-hidden
      className="group relative aspect-[16/10] overflow-hidden rounded-2xl border bg-card"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent.from} ${accent.to} opacity-90 transition-transform duration-500 group-hover:scale-105`}
      />

      <div className="relative flex h-full flex-col p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between rounded-lg bg-black/25 px-3 py-1.5 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-white/70" />
            <span className="size-2 rounded-full bg-white/40" />
            <span className="size-2 rounded-full bg-white/40" />
          </div>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white">
            {project.slug === "finanzas-argentinas" ? "Live" : "Portfolio"}
          </span>
        </div>

        {project.slug === "finanzas-argentinas" ? (
          <DashboardMock />
        ) : (
          <PortfolioMock />
        )}
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="flex flex-1 flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-28 rounded-full bg-white/80" />
          <div className="mt-1.5 h-2 w-16 rounded-full bg-white/40" />
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[0.6rem] font-bold text-white">
          <span className="size-1.5 animate-pulse rounded-full bg-white" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["Dólar", "Euro", "Bono"].map((label, index) => (
          <div
            key={label}
            className={`rounded-xl bg-white/15 p-2.5 backdrop-blur-sm ${index % 2 ? "mt-3" : ""}`}
          >
            <div className="h-1.5 w-8 rounded-full bg-white/50" />
            <div className="mt-2 h-3 w-12 rounded-full bg-white/90" />
            <div className="mt-1.5 h-1.5 w-10 rounded-full bg-emerald-200/90" />
          </div>
        ))}
      </div>

      <div className="flex flex-1 items-end gap-1.5 rounded-xl bg-black/15 p-3 backdrop-blur-sm">
        {[40, 65, 50, 80, 60, 95, 75, 55, 90, 70].map((height, index) => (
          <div
            key={index}
            style={{ height: `${height}%` }}
            className="flex-1 rounded-t-sm bg-white/60 transition-all group-hover:bg-white/90"
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioMock() {
  return (
    <div className="flex flex-1 gap-2.5">
      <div className="flex w-2/5 flex-col justify-center gap-2 rounded-xl bg-black/15 p-3 backdrop-blur-sm">
        <span className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[0.6rem] font-bold text-violet-700">
          MA
        </span>
        <div className="h-2.5 w-full rounded-full bg-white/80" />
        <div className="h-2 w-3/4 rounded-full bg-white/50" />
        <div className="h-2 w-1/2 rounded-full bg-white/40" />
        <div className="mt-1 flex gap-1.5">
          <div className="h-4 w-10 rounded-full bg-white/60" />
          <div className="h-4 w-10 rounded-full bg-white/30" />
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 grid-rows-3 gap-2">
        {["row-span-2", "", "", "row-span-2", "", ""].map(
          (extra, index) => (
            <div
              key={index}
              className={`rounded-xl bg-white/20 backdrop-blur-sm ${extra}`}
            />
          ),
        )}
      </div>
    </div>
  );
}
