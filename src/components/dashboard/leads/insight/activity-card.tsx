import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileEdit, Building, CalendarRangeIcon } from "lucide-react";
import { Activity } from "./types.data";
import { VscSparkleFilled } from "react-icons/vsc";
import { cn } from "@/lib/utils";

const iconMap = {
  review: FileEdit,
  meeting: Calendar,
  opportunity: Building,
};

interface ActivityCardProps {
  activity: Activity;
  onMouseEnter?: () => void;
  onMouseLeave?:  () => void;
  className?: string
}

export function ActivityCard({ activity, onMouseEnter, onMouseLeave, className }: ActivityCardProps) {
  const Icon = iconMap[activity.type];

  return (
    <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={cn(`p-3 cursor-pointer`, className)}>
      <CardContent className="p-1 flex items-center gap-2">
        <div className="rounded-full p-1 bg-gray-200">
          <Icon className="h-8 w-8" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold truncate">{activity.title}</h4>
          <p className="text-sm flex gap-1 items-center text-muted-foreground">
            <span> {activity.title.split("for")[1]} </span>
            <span className="text-2xl">&#xb7;</span>
            <span>
              {activity.value && `$${activity.value.toLocaleString()}`}
            </span>
            <span className="text-2xl">&#xb7;</span>
            <span>{activity.dueDate} to close</span>
          </p>
        </div>
      </CardContent>

      <div className="inline-flex flex-row items-start w-full">
        <div className="p-1 w-full rounded-md -mt-1 flex text-sm items-center gap-1 bg-gray-100">
          <CalendarRangeIcon className="h-3 w-3 text-gray-900" />
          Prepare for {activity.title.split("for")[1]}&#39;s meeting to review draft
        </div>

        <VscSparkleFilled className="text-primary -mt-2" />
      </div>
    </Card>
  );
}
