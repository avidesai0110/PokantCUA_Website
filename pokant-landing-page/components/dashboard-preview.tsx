export function DashboardPreview() {
  const tasks = [
    {
      url: "stripe.com",
      task: "Extract pricing from stripe.com",
      steps: 4,
      totalSteps: 4,
      status: "Completed",
      cost: "$0.02",
      type: "replay",
    },
    {
      url: "geico.com",
      task: "Get insurance quote from geico.com",
      steps: 12,
      totalSteps: 12,
      status: "Completed",
      cost: "$0.38",
      type: "explore",
    },
    {
      url: "competitor.com",
      task: "Monitor competitor pricing on competitor.com",
      steps: 3,
      totalSteps: 8,
      status: "Running",
      cost: "—",
      type: "replay",
    },
    {
      url: "irs.gov",
      task: "Fill government form on irs.gov",
      steps: 6,
      totalSteps: 6,
      status: "Failed",
      cost: "—",
      type: "explore",
    },
  ]

  const navItems = ["Dashboard", "Tasks", "Workflows", "Usage", "Settings"]

  return (
    <section className="relative pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-lg border border-[#e0dedb] overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#e0dedb] bg-[#fbfaf9]">
            <div className="flex items-center gap-3">
              <div className="text-[#37322f] font-semibold text-sm">Pokant</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-xs text-[#605a57]">API Connected</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-[#605a57] font-mono">pk_live_•••••••••</div>
              <div className="w-6 h-6 bg-[#37322f] rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-medium">A</span>
              </div>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex min-h-[320px]">
            {/* Sidebar */}
            <div className="w-40 bg-[#fbfaf9] border-r border-[#e0dedb] p-3 hidden sm:block">
              <nav className="space-y-0.5">
                {navItems.map((item, i) => (
                  <div
                    key={item}
                    className={`text-xs py-1.5 px-2 rounded cursor-pointer font-medium ${
                      i === 1
                        ? "bg-[#37322f]/8 text-[#37322f]"
                        : "text-[#605a57] hover:text-[#37322f]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-[#37322f]">Tasks</h2>
                <div className="px-3 py-1 bg-[#37322f] text-white text-xs rounded-full font-medium cursor-pointer">
                  + New Task
                </div>
              </div>

              {/* Table */}
              <div className="border border-[#e0dedb] rounded overflow-hidden text-xs">
                <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-[#fbfaf9] border-b border-[#e0dedb] text-[#605a57] font-medium">
                  <div className="col-span-5">Task</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Steps</div>
                  <div className="col-span-2">Cost</div>
                  <div className="col-span-1">Type</div>
                </div>

                {tasks.map((task, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-[#e0dedb] last:border-0 items-center"
                  >
                    <div className="col-span-5">
                      <div className="text-[#37322f] font-medium truncate">{task.task}</div>
                      <div className="text-[#9ca3af] text-[10px] font-mono">{task.url}</div>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium inline-flex items-center gap-1 ${
                          task.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : task.status === "Running"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-red-50 text-red-700"
                        }`}
                      >
                        {task.status === "Completed" && "✓ "}
                        {task.status === "Running" && "↻ "}
                        {task.status === "Failed" && "✗ "}
                        {task.status === "Failed" ? "Failed (retrying)" : task.status}
                      </span>
                    </div>
                    <div className="col-span-2 text-[#605a57]">
                      {task.status === "Running"
                        ? `${task.steps}/${task.totalSteps}`
                        : `${task.steps} steps`}
                    </div>
                    <div className="col-span-2 text-[#605a57] font-mono">{task.cost}</div>
                    <div className="col-span-1">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] ${
                          task.type === "replay"
                            ? "bg-[#37322f]/8 text-[#37322f]"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {task.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
