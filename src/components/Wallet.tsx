import type React from "react";
import { BalanceCard } from "./BalanceCard";
import { useState } from "react";

export const Wallet: React.FC = () => {
  const [balance, SetBalance] = useState<number>(599);

  const updateBalance = (money: number) => {
    if (money > 0) SetBalance((prev) => prev + money);
  };

  return (
    <div>
      <h1 className="text-center text-2xl">My Wallet</h1>
      <BalanceCard account_balance={balance} account_name="Junaid" addMoney={updateBalance} />
    </div>
  );
};
