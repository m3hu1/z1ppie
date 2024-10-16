import { cn } from "@/lib/utils"

const cardContent = {
    title: "How z1ppie works",
  };
  const CardBody = ({ className = "p-4" }) => (
    <div className={cn("text-left", className)}>
      <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
        {cardContent.title}
      </h3>
      <ul className="list-disc list-inside">
      <li><strong>P2P (Peer-to-Peer)</strong>: z1ppie utilizes a peer-to-peer architecture, allowing users to share files directly with each other without the need for a central server.</li>
      <li><strong>Secure</strong>: The application ensures secure file transfers by establishing direct connections between peers, minimizing the risk of data interception.</li>
      <li><strong>Fast</strong>: By leveraging direct connections, z1ppie enables rapid file transfers, significantly reducing latency compared to traditional methods.</li>
      <li><strong>Connected with Same Network</strong>: Users on the same local network can connect seamlessly, enhancing transfer speeds and reliability.</li>
      <li><strong>WebRTC</strong>: z1ppie employs WebRTC technology to facilitate real-time communication and data sharing between peers, enabling efficient file transfers.</li>
      <li><strong>Socket.io</strong>: The application uses Socket.io for signaling, allowing peers to discover each other and establish connections in real-time.</li>
    </ul>
    </div>
  )
  //======================================
  export const SimpleCard_V3 = () => {
    const Icon = ({ className, ...rest }: any) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          {...rest}
          className={cn("dark:text-white text-black size-6 absolute", className)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      )
    }
    return (
      <div>
        <div className="border border-dashed border-zinc-400 dark:border-zinc-700 relative">
          <Icon className="-top-3 -left-3" />
          <Icon className="-top-3 -right-3" />
          <Icon className="-bottom-3 -left-3" />
          <Icon className="-bottom-3 -right-3" />
          <CardBody className="p-6" />
        </div>
      </div>
    )
  }