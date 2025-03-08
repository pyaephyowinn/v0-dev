"use client";

import { useState } from "react";
import {
  Home,
  FileText,
  ArrowRightLeft,
  DollarSign,
  Clock,
  Users,
  LayoutGrid,
  History,
  FileCheck,
  CreditCard,
  Receipt,
  Landmark,
  RefreshCw,
  Smartphone,
  Shield,
  ChevronDown,
  Bell,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function TransferFundsInterface() {
  const [selectedTab, setSelectedTab] = useState("own");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("0");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: "own", label: "Own Account" },
    { id: "aya", label: "Other AYA Account" },
    { id: "other", label: "Other Bank" },
    { id: "pay", label: "AYA Pay" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center">
              <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <Home className="text-white" size={18} />
              </div>
              <span className="ml-2 font-bold text-gray-800">AYA iBanking</span>
            </div>
            <button className="hidden md:block">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
            <span>Announcement</span>
            <span className="ml-2 text-xs">
              We are happy to announce that we raise 2Million Dollar...
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                9+
              </span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-6 h-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20AYA%20Account%20Transfer%20-_%20Initial%20Stage-WIyxAsunC6feRjm1ErLKJOHeYMI08I.png"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <span>English</span>
              <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                J
              </div>
              <span>James Doe</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "bg-white w-64 border-r border-gray-200 flex-shrink-0 fixed md:static h-full z-20 transition-all",
            isSidebarOpen ? "left-0" : "-left-64 md:left-0"
          )}
        >
          <div className="p-4">
            <div className="relative">
              <Input
                placeholder="Search"
                className="pl-8 bg-gray-100 border-0"
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>

          <nav className="mt-2">
            <SidebarItem icon={<Home size={18} />} label="Home" />
            <SidebarItem
              icon={<FileText size={18} />}
              label="Request a Statement"
            />
            <SidebarItem
              icon={<ArrowRightLeft size={18} />}
              label="Transfer Funds"
              active
            />
            <SidebarItem
              icon={<DollarSign size={18} />}
              label="Request Money"
            />
            <SidebarItem icon={<Clock size={18} />} label="Schedule Transfer" />
            <SidebarItem icon={<Users size={18} />} label="Manage Payees" />
            <SidebarItem icon={<LayoutGrid size={18} />} label="Accounts" />
            <SidebarItem
              icon={<History size={18} />}
              label="Transaction History"
            />
            <SidebarItem
              icon={<FileCheck size={18} />}
              label="Balance Confirmation Letter"
            />
            <SidebarItem
              icon={<CreditCard size={18} />}
              label="Cards"
              hasSubmenu
            />
            <SidebarItem icon={<Receipt size={18} />} label="Bill Payment" />
            <SidebarItem icon={<Landmark size={18} />} label="Tax Payment" />
            <SidebarItem
              icon={<RefreshCw size={18} />}
              label="Loan Repayment"
            />
            <SidebarItem
              icon={<Smartphone size={18} />}
              label="Mobile Top-Up"
            />
            <SidebarItem icon={<Shield size={18} />} label="AYA SOMPO" />
            <SidebarItem icon={<Shield size={18} />} label="AIA Insurances" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Transfer Funds</h1>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={cn(
                  "py-3 px-6 font-medium text-sm transition-colors",
                  selectedTab === tab.id
                    ? "bg-gray-800 text-white rounded-t-lg"
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Enter Details</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium">From</label>
                <div className="relative">
                  <div className="flex items-center border border-gray-200 rounded-lg p-3 bg-gray-100">
                    <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                      <Home className="text-white" size={16} />
                    </div>
                    <span className="flex-1">Select An Account</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">To</label>
                <div className="relative">
                  <div className="flex items-center border border-gray-200 rounded-lg p-3 bg-gray-100">
                    <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                      <Home className="text-white" size={16} />
                    </div>
                    <span className="flex-1">Select An Account</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Enter Transfer Amount
              </label>
              <div className="relative">
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-12 py-6 text-2xl"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <span className="text-2xl">0</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <span>MMK</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">Description</label>
              <div className="relative">
                <Textarea
                  placeholder="Enter your description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="resize-none"
                  rows={4}
                />
                <div className="absolute bottom-2 right-2 text-gray-400 text-sm">
                  ({description.length}/250)
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700">
                Continue to review
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, hasSubmenu = false }: any) {
  return (
    <div
      className={cn(
        "flex items-center px-4 py-2 text-sm cursor-pointer",
        active ? "bg-gray-100" : "hover:bg-gray-50"
      )}
    >
      <div
        className={cn(
          "w-6 h-6 flex items-center justify-center mr-2",
          active ? "text-gray-800" : "text-gray-500"
        )}
      >
        {icon}
      </div>
      <span className={cn("flex-1", active ? "font-medium" : "")}>{label}</span>
      {hasSubmenu && <ChevronDown size={16} className="text-gray-400" />}
    </div>
  );
}
