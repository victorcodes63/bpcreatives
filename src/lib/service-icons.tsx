import {
  Broadcast,
  SketchLogo,
  PenNib,
  ShareNetwork,
  Confetti,
  Handshake,
  ShieldWarning,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";
import type { ServiceIcon } from "@/lib/services";

type PhosphorIcon = React.ComponentType<IconProps>;

export const serviceIconMap: Record<ServiceIcon, PhosphorIcon> = {
  target: Broadcast,
  "message-square": SketchLogo,
  "pen-line": PenNib,
  "trending-up": ShareNetwork,
  calendar: Confetti,
  users: Handshake,
  shield: ShieldWarning,
};

export function ServiceIconComponent({
  icon,
  size = 22,
  className,
}: {
  icon: ServiceIcon;
  size?: number;
  className?: string;
}) {
  const Icon = serviceIconMap[icon];

  return (
    <Icon
      size={size}
      weight="thin"
      className={className}
      aria-hidden
    />
  );
}
