
export const InsightProgress = () => {
  const stages = [
    { label: 'Won', amount: 18, color: 'bg-green-500' },
    { label: 'Committed', amount: 8, color: 'bg-blue-500' },
    { label: 'Best case', amount: 7, color: 'bg-indigo-500' },
    { label: 'Qualified', amount: 3, color: 'bg-yellow-500' },
    { label: 'Leads', amount: 75, color: 'bg-gray-300' }
  ];

  const target = 45;
  const totalWon = stages[0].amount;
  const progressPercentage = (totalWon / target) * 100;

  return (
    <div className="w-full text-sm">
      {/* Time and Target Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-600">1 month until Q4 ends</div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">{Math.round(progressPercentage)}% of target achieved</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative">
        {/* Target Marker */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-black z-10"
          style={{ left: `${(target / (stages.reduce((sum, stage) => sum + stage.amount, 0))) * 100}%` }}
        >
          {/* Target Label */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs">
            Target: ${target}m
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="flex w-full h-2 rounded-full overflow-hidden">
          {stages.map((stage) => {
            const width = (stage.amount / target) * 100;
            return (
              <div
                key={stage.label}
                className={`${stage.color} h-full`}
                style={{ width: `${width}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-1 ">
        {stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${stage.color}`} />
            <span className="text-sm text-gray-600 whitespace-nowrap">{stage.label}</span>
            <span className="text-sm font-semibold">${stage.amount}m</span>
          </div>
        ))}
      </div>
    </div>
  );
};