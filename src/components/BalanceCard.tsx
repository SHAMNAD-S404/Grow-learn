import type React from "react";

interface BalanceCardProps {
  account_name: string;
  account_balance: number;
  addMoney: (amount: number) => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  account_balance,
  account_name,
  addMoney,
}) => {
  const handleAddMoney = () => {
    const money = prompt("Enter amount to add", "100");
    if (money) {
      addMoney(Number(money));
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-co justify-center mt-5">
          <div
            className="flex justify-around bg-green-200 w-2/5 text-xl rounded-3xl"
            id="statement">
            <h1>{""}</h1>
            <h1>Balance Statement</h1>
            <button className="cursor-pointer" onClick={() => handleAddMoney()}>
              Add Money+
            </button>
          </div>
        </div>
        <div className="flex-row mt-5">
          <h1 className="text-center">Account holder Name : {account_name}</h1>
          <h1 className="text-center">Avilabe Balance : {account_balance}</h1>
        </div>
      </div>
    </>
  );
};
