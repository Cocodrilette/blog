import { Fira_Code } from "@next/font/google";

const fira_code = Fira_Code({
  subsets: ["greek"],
});

export function HowIAm() {
  return (
    <div className={`${fira_code.className} my-10`}>
      <h1 className={`text-3xl md:text-4xl`}>
        <span className="text-dimmedPink">/</span>cocodrilette
      </h1>
      <p className="text-sm md:text-base">Solidity focused blockchain dev.</p>
    </div>
  );
}
