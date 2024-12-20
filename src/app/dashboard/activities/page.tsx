import { ActivityCard } from "@/components/dashboard/leads/insight/activity-card";
import { mockActivities } from "@/components/dashboard/leads/insight/insight-index";

const ActivitiesRoute = () => {
    return (
        <div>
           <div className="lg:col-span-1">
                <h3 className="font-medium mb-4">Other key activities</h3>
                <div className="space-y-3">
                  {mockActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      className=""
                      onMouseEnter={() => {console.log('hover')}}
                      onMouseLeave={() => {console.log('leave')}}
                     
                    />
                  ))}
                </div>
               
              </div>
        </div>
    );
}

export default ActivitiesRoute;