import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";

export default function EventCard() {
  return (
    <div class="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src="/google-io-2023-1.png"
        alt="Event 1"
        class="w-full"
        width={400}
        height={400}
      />

      <div class="p-3">
        <Link href="" class="font-bold text-lg">
          Google I/O Extended
        </Link>
        <p class="text-[#9C9C9C] text-sm mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div class="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>

        <ActionButtons />
      </div>
    </div>
  );
}
