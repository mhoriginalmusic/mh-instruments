import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Withdrawals() {
  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const [method, setMethod] = useState("payoneer");
  const [amount, setAmount] = useState("");

  const withdrawalHistory = [
    { id: 1, amount: 500, method: "Payoneer", status: "completed", date: "2026-02-10", txId: "TXN-2026-001" },
    { id: 2, amount: 750, method: "Binance", status: "completed", date: "2026-01-25", txId: "TXN-2026-002" },
    { id: 3, amount: 1000, method: "Payoneer", status: "pending", date: "2026-02-15", txId: "TXN-2026-003" },
    { id: 4, amount: 300, method: "Binance", status: "approved", date: "2026-02-18", txId: "TXN-2026-004" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
      case "approved":
        return <Clock className="h-4 w-4" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Withdrawals</h1>
            <p className="text-gray-600 mt-2">Manage your payment methods and withdrawal history</p>
          </div>
          <Dialog open={withdrawalOpen} onOpenChange={setWithdrawalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Plus className="h-5 w-5" />
                Request Withdrawal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Request Withdrawal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Available Balance</Label>
                  <p className="text-3xl font-bold text-gray-900 mt-2">$2,181.00</p>
                </div>

                <div>
                  <Label htmlFor="amount">Withdrawal Amount *</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="10"
                    max="2181"
                  />
                  <p className="text-xs text-gray-600 mt-1">Minimum: $10 | Maximum: $2,181</p>
                </div>

                <div>
                  <Label htmlFor="method">Payment Method *</Label>
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="payoneer">Payoneer</SelectItem>
                      <SelectItem value="binance">Binance (Crypto)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {method === "payoneer" && (
                  <div>
                    <Label htmlFor="email">Payoneer Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@payoneer.com"
                    />
                  </div>
                )}

                {method === "binance" && (
                  <div>
                    <Label htmlFor="wallet">Wallet Address *</Label>
                    <Input
                      id="wallet"
                      placeholder="Enter your wallet address"
                    />
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
                  <p className="font-semibold mb-1">Processing Time:</p>
                  <p>Payoneer: 3-5 business days</p>
                  <p>Binance: 1-2 business days</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setWithdrawalOpen(false)}>
                  Submit Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Available Balance</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$2,181</p>
              </div>
              <DollarSign className="h-12 w-12 text-green-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Withdrawn</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$1,550</p>
              </div>
              <CheckCircle className="h-12 w-12 text-blue-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
              </div>
              <Clock className="h-12 w-12 text-yellow-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Withdrawal History */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Withdrawal History</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Method</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {withdrawalHistory.map((withdrawal) => (
                  <tr key={withdrawal.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-900">{withdrawal.date}</td>
                    <td className="py-4 px-6 font-semibold text-gray-900">${withdrawal.amount}</td>
                    <td className="py-4 px-6 text-gray-700">{withdrawal.method}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit ${getStatusColor(withdrawal.status)}`}>
                        {getStatusIcon(withdrawal.status)}
                        {withdrawal.status.charAt(0).toUpperCase() + withdrawal.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-mono text-sm">{withdrawal.txId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">What is the minimum withdrawal amount?</p>
              <p className="text-gray-600 mt-1">The minimum withdrawal amount is $10.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">How long does it take to process?</p>
              <p className="text-gray-600 mt-1">Payoneer withdrawals typically take 3-5 business days. Binance withdrawals are processed within 1-2 business days.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Are there any withdrawal fees?</p>
              <p className="text-gray-600 mt-1">No, we don't charge withdrawal fees. However, your payment provider may charge their own fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
