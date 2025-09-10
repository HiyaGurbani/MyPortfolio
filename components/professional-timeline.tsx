export type TimelineItem = {
  role: string
  org: string
  duration: string
  achievement?: string
}

export function ProfessionalTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div aria-label="Professional timeline" className="relative">
      {/* Vertical timeline line (match internships: left-8) */}
      <div aria-hidden="true" className="absolute left-8 top-2 bottom-9 w-0.5 bg-border hidden md:block" style={{ backgroundColor: '#F5E9D4' }}/>

      <ul className="space-y-6 md:space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="relative">
            {/* Timeline dot (match internships: left-6, ring via border-background) */}
            <div aria-hidden="true" className="absolute left-6 top-1.5 hidden md:block">
              <span className="block w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </div>

            {/* Content offset to the right of the spine on md+ (match internships: md:ml-16) */}
            <div className="md:ml-16">
              <div className="flex items-center justify-between text-xs mb-1 gap-2 text-card-foreground">
                <span className="font-medium">
                  {item.role} 
                </span>
                <span className="opacity-60 whitespace-nowrap">{item.duration}</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs text-card-foreground">
                <span className="font-medium">
                  {item.org} 
                </span>
              </div>
              {item.achievement ? (
                <p className="text-xs opacity-70 mt-1 text-card-foreground">{item.achievement}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
