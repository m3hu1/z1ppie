import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

//======================================
export const EyeCatchingButton_v1 = ({ ...props }: ButtonProps) => {
    return (
      <div className="relative overflow-hidden rounded-full bg-black dark:bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] group-hover:bg-none" />
        <Button
          {...props}
          className={cn(
            'h-10 px-8 w-full rounded-full font-semibold text-white dark:text-black backdrop-blur-xl bg-black dark:bg-white',
            props.className
          )}
        />
      </div>
    );
  };