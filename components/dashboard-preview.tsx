"use client"

export function DashboardPreview({ activeCard = 0 }: { activeCard?: number }) {
  const navItems = ["Dashboard", "Tasks", "Workflows", "Usage", "Settings"]

  const tasks = [
    {
      url: "comptroller.texas.gov",
      task: "Get sales tax rate for Austin, TX 78701",
      steps: 4,
      totalSteps: 4,
      status: "Completed",
      cost: "$0.03",
      type: "tax",
    },
    {
      url: "cslb.ca.gov",
      task: "Renew contractor license #C-48821",
      steps: 9,
      totalSteps: 9,
      status: "Completed",
      cost: "$0.21",
      type: "license",
    },
    {
      url: "revenue.wa.gov",
      task: "File monthly use tax return — $12,840 due",
      steps: 5,
      totalSteps: 11,
      status: "Running",
      cost: "—",
      type: "tax",
    },
    {
      url: "osha.gov",
      task: "Submit OSHA 300A summary — Alpine Mfg",
      steps: 7,
      totalSteps: 7,
      status: "Completed",
      cost: "$0.09",
      type: "compliance",
    },
  ]

  return (
    <section className="relative pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-lg border border-[#e0dedb] overflow-hidden">

          {/* Dashboard Header — consistent across all panels */}
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

          {/* Sidebar + Content — fixed height across all panels */}
          <div className="flex h-[320px]">

            {/* Sidebar — consistent */}
            <div className="w-40 bg-[#fbfaf9] border-r border-[#e0dedb] p-3 hidden sm:block flex-shrink-0">
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

            {/* Content area — panels stack with opacity transition */}
            <div className="flex-1 overflow-hidden relative">

              {/* Panel 0 — Task queue (Any portal, any task) */}
              <div
                className="absolute inset-0 p-4 transition-opacity duration-300"
                style={{ opacity: activeCard === 0 ? 1 : 0, pointerEvents: activeCard === 0 ? "auto" : "none" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-[#37322f]">Tasks</h2>
                  <div className="px-3 py-1 bg-[#37322f] text-white text-xs rounded-full font-medium cursor-pointer">
                    + New Task
                  </div>
                </div>
                <div className="border border-[#e0dedb] rounded overflow-hidden text-xs">
                  <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-[#fbfaf9] border-b border-[#e0dedb] text-[#605a57] font-medium">
                    <div className="col-span-5">Task</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Steps</div>
                    <div className="col-span-2">Cost</div>
                    <div className="col-span-1">Type</div>
                  </div>
                  {tasks.map((task, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-[#e0dedb] last:border-0 items-center">
                      <div className="col-span-5">
                        <div className="text-[#37322f] font-medium truncate">{task.task}</div>
                        <div className="text-[#9ca3af] text-[10px] font-mono">{task.url}</div>
                      </div>
                      <div className="col-span-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium inline-flex items-center gap-1 ${
                          task.status === "Completed" ? "bg-green-50 text-green-700"
                          : task.status === "Running" ? "bg-blue-50 text-blue-700"
                          : "bg-red-50 text-red-700"
                        }`}>
                          {task.status === "Completed" && "✓ "}
                          {task.status === "Running" && "↻ "}
                          {task.status === "Failed" && "✗ "}
                          {task.status === "Failed" ? "Failed (retrying)" : task.status}
                        </span>
                      </div>
                      <div className="col-span-2 text-[#605a57]">
                        {task.status === "Running" ? `${task.steps}/${task.totalSteps}` : `${task.steps} steps`}
                      </div>
                      <div className="col-span-2 text-[#605a57] font-mono">{task.cost}</div>
                      <div className="col-span-1">
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#37322f]/8 text-[#37322f]">
                          {task.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 1 — Live agent execution (Handles the hard parts) */}
              <div
                className="absolute inset-0 p-4 transition-opacity duration-300"
                style={{ opacity: activeCard === 1 ? 1 : 0, pointerEvents: activeCard === 1 ? "auto" : "none" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#605a57] text-xs cursor-pointer hover:text-[#37322f]">← Tasks</span>
                    <span className="text-[#37322f] text-sm font-semibold truncate">File Q1 2026 sales tax return</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 flex items-center gap-1">
                    ↻ Running
                  </span>
                </div>

                <div className="flex gap-4 mb-3 text-xs text-[#605a57]">
                  <span className="font-mono">suts.colorado.gov</span>
                  <span>·</span>
                  <span>Step 6 of 9</span>
                </div>

                <div className="border border-[#e0dedb] rounded overflow-hidden">
                  <div className="px-3 py-1.5 bg-[#fbfaf9] border-b border-[#e0dedb] text-[10px] font-medium text-[#605a57] uppercase tracking-wide">
                    Execution log
                  </div>
                  <div className="p-3 space-y-1.5 font-mono text-xs">
                    {[
                      { icon: "✓", color: "text-green-600", text: "Navigate to portal", meta: "0.3s" },
                      { icon: "✓", color: "text-green-600", text: "Locate login form", meta: "0.1s" },
                      { icon: "✓", color: "text-green-600", text: "Submit credentials", meta: "0.4s" },
                      { icon: "✓", color: "text-green-600", text: "Solve CAPTCHA challenge", meta: "2.1s  [reCAPTCHA]" },
                      { icon: "✓", color: "text-green-600", text: "Navigate to filing section", meta: "0.3s" },
                      { icon: "↻", color: "text-blue-600", text: "Fill tax return fields...", meta: "" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <span className={`flex-shrink-0 ${step.color}`}>{step.icon}</span>
                          <span className={i === 5 ? "text-[#37322f]" : "text-[#605a57]"}>{step.text}</span>
                        </div>
                        {step.meta && <span className="text-[#9ca3af] text-[10px] flex-shrink-0">{step.meta}</span>}
                      </div>
                    ))}
                    <div className="pl-5 space-y-0.5 text-[#605a57]">
                      <div><span className="text-[#9ca3af]">›</span> Tax period:  <span className="text-[#37322f]">Q1 2026</span></div>
                      <div><span className="text-[#9ca3af]">›</span> Gross sales: <span className="text-[#37322f]">$248,400.00</span></div>
                      <div><span className="text-[#9ca3af]">›</span> Tax due:     <span className="text-[#37322f]">$14,904.00</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2 — Audit record (Tamper-evident audit trail) */}
              <div
                className="absolute inset-0 p-4 transition-opacity duration-300"
                style={{ opacity: activeCard === 2 ? 1 : 0, pointerEvents: activeCard === 2 ? "auto" : "none" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#605a57] text-xs cursor-pointer hover:text-[#37322f]">← Tasks</span>
                    <span className="text-[#37322f] text-sm font-semibold truncate">File Q1 2026 sales tax return</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 flex items-center gap-1">✓ Completed</span>
                </div>

                <div className="border border-[#e0dedb] rounded overflow-hidden font-mono text-xs">
                  <div className="px-3 py-1.5 bg-[#fbfaf9] border-b border-[#e0dedb] flex items-center justify-between">
                    <span className="text-[10px] font-medium text-[#605a57] uppercase tracking-wide font-sans">Audit record</span>
                    <span className="text-[10px] text-green-600 font-sans font-medium flex items-center gap-1">⬡ Sealed</span>
                  </div>
                  <div className="p-3 space-y-2">

                    <div className="space-y-1.5">
                      {[
                        { time: "09:14:02", step: "Navigated to portal", detail: "suts.colorado.gov" },
                        { time: "09:14:05", step: "Authenticated", detail: "Session established" },
                        { time: "09:14:09", step: "CAPTCHA solved", detail: "reCAPTCHA v2 · 2.1s" },
                        { time: "09:14:23", step: "Fields submitted", detail: "Gross $248,400 · Tax $14,904" },
                        { time: "09:14:26", step: "Confirmation received", detail: "Conf. #CO-2026-Q1-847291" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#9ca3af] text-[10px] w-14 flex-shrink-0">{row.time}</span>
                          <span className="text-green-600 flex-shrink-0">✓</span>
                          <div className="flex-1 min-w-0">
                            <span className="text-[#37322f]">{row.step}</span>
                            <span className="text-[#9ca3af] ml-2">{row.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#e0dedb] pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#605a57]">
                        <span className="text-[#9ca3af]">↳</span>
                        <span>5 screenshots · full action trace · field values</span>
                      </div>
                      <span className="text-[10px] text-[#9ca3af] font-sans">sha256: a3f9…c12e</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
